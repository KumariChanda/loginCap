import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
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
   dob = "2020-08-19";
   address ="";
   agreement : boolean;

  constructor(private router: Router,private webService: AppServiceService) { 
    this.btnClicked=false;
  }

  ngOnInit() {
  }

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

     if(this.firstname && this.lastname && this.email && this.password && this.mobilenumber && this.password && this.confirmpassword)
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
                    console.log(res)
                  }

                  this.webService.stopLoading();                

                   
                 },error=>{
                  this.webService.stopLoading();                

                 }
                 );
            

            }else{
              //alert to tell that password and confrim password should be same 
            }

          }else{
              /// alert to ask to the user to accept the agreement then proceed
          }
      }else{

          // alert to ask the user to fill all the fields
      }

  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }
}
