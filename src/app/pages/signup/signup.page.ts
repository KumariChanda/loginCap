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
   birth_date = null;
   address ="";
   agreement : boolean;
   lang: any;
   today:any;
   date:any;

  constructor(private router: Router,private webService: AppServiceService) { 
    this.btnClicked=false;
  }

  async ngOnInit() {

    //get the current language of the app
    this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;
  
    this.date = new Date();
     //today's date
     this.today = this.date.getFullYear() +"-"+ (this.date.getMonth()+1) + "-"+this.date.getDate();


  }


  //difference of years
  diff_years(dt2, dt1) 
  {
    //check if today's date is greather than the "birth_date
    if(dt2.getTime() > dt1.getTime())
    {
      var diff =(dt2.getTime() - dt1.getTime()) / 1000;
      diff /= (60 * 60 * 24);
      return Math.abs(Math.round(diff/365.25));
    }else
    {
      return 0;
    }
    
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
    //console.log("Signup cllicked!.");

     if(this.firstname &&  this.lastname && this.email && this.password && this.password && this.confirmpassword && this.birth_date)
     {
          if(this.agreement == true)
        {
            if(this.password == this.confirmpassword)
            {

               //console.log( typeof(this.birth_date), this.birth_date );
               var annees = this.diff_years(this.date, new Date(this.birth_date) );
               //console.log( annees);
               //console.log( typeof(this.birth_date), this.birth_date ); 
               if( annees >=18)
               {
                  // if all the fields are correct

                  //dob
                   this.birth_date = this.birth_date.split("T")[0] ;

                    //data to be sent
                  // console.log(typeof(this.mobilenumber.toString( )))
                    var data = {
                      "first_name": this.firstname,
                      "last_name": this.lastname,
                      "email": this.email,
                      "password": this.password,
                      "birth_date": this.birth_date,
                      "telephone": this.mobilenumber.toString(),
                      "address": this.address,
                    }

                    this.webService.presentLoading();                


                    this.webService.signup(data).subscribe(res=>{

                      if(res)
                      {
                        //console.log(res);
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
                        alert("Erreur Serveur \n Inscription échouée !! ")
                      }else{
                        alert("Server Error \n Sign Up Failed !! ")
      
                      }
                      this.router.navigateByUrl("/login");               

                    }
                    );
                
                }else
                {
                    if(this.lang =="fr")
                    {
                        alert("Désolé, vous devez avoir au moins 18 ans !! ")
                    }else{
                        alert("Sorry, you must be at least 18 years old !! ")
      
                    }
                }

            }
            else
            {
              //alert to tell that password and confrim password should be same 

                if(this.lang =="fr")
                {
                  alert("Le champ mot de passe doit être egal au champ confirmez mot de passe !! ")
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
            alert("Fill All the mandatory fields (*) ")

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
