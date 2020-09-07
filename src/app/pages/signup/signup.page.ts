import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  btnClicked:boolean=false;


   firstname ="";
   lastname ="";
   mobilenumber ="";
   email ="";
   password : string ;
   confirmpassword : string;
   dob = "";
   address ="";
   agreement : boolean;
  lang: any;

  constructor(private router: Router,private webService: AppServiceService) { 
    this.btnClicked=false;
  }

  async ngOnInit() {

    this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;

  }

  ////////////////////////////////
  loginbtnCliced()
  {
    
    this.router.navigateByUrl("/login");
  }

  signupFun()
  {
    this.btnClicked=true;
    setTimeout( ()=>{
      this.btnClicked=false;
      }, 1000)
    console.log("Signup cllicked!.");

     if(this.firstname &&  this.lastname && this.email && this.password && this.password && this.confirmpassword)
     {
          if(this.agreement == true)
        {
            if(this.password == this.confirmpassword)
            {

                // if all the fields are correct
                //data to be sent
               // console.log(typeof(this.mobilenumber.toString( )))
                var data = {
                  "first_name": this.firstname,
                  "last_name": this.lastname,
                  "email": this.email,
                  "password": this.password,
                  "birth_date": this.dob,
                  "telephone": this.mobilenumber.toString(),
                  "address": this.address,
                  "is_active": true
                 }

                 this.webService.presentLoading();                


                 this.webService.signup(data).subscribe(res=>{

                  if(res)
                  {
                    console.log(res);
                    this.webService.stopLoading();
                    if(this.lang =="fr")
                  {
                    alert("Inscription réussie !! ")
                  }else{
                    alert("Successful Sign Up   !! ")
  
                  }
                    this.router.navigateByUrl("/login");
                  }

                                  

                   
                 },error=>{
                  this.webService.stopLoading(); 
                  
                  if(this.lang =="fr")
                  {
                    alert("Inscription échouée !! ")
                  }else{
                    alert("Sign Up Failed !! ")
  
                  }
                  this.router.navigateByUrl("/login");               

                 }
                 );
            

            }
            else
            {
              //alert to tell that password and confrim password should be same 

                if(this.lang =="fr")
                {
                  alert("Le champ mot de passe doit etre egal au champ confirmez mot de passe !! ")
                }else{
                  alert("Password and Confirm Pasword Should be same !! ")

              }
              
            }

          }
          else{
              /// alert to ask to the user to accept the agreement then proceed
              if(this.lang =="fr")
                {
                  alert("Accepter les termes et condition avant de s'inscrire.  ")
                }else{
                  alert("Accept the terms and conditions before signing. ")

              }
          }
      }else{

          // alert to ask the user to fill all the fields
          if(this.lang =="fr")
          {
            alert("Remplir tous les chaps obligatoires (*)  ")
          }
          else{
            alert("Fill Alln the mandatory fields (*) ")

          }
      }

  }

  backToHome()
  {
    // this.webService.presentLoading();
    this.router.navigateByUrl("/dashboard");
    // this.webService.stopLoading();
  }
}
