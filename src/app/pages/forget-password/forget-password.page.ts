import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';


const { Storage } = Plugins;

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  btnClicked:boolean=false;
  lang: any;

  email ="";
  password ="";
  confirm_pass ="";
  telephone : any;

  dataToSend ={
    "email" : "",
    "password" : "",
    "first_name" : "",
    "last_name" : "",
    "birth_date": "",
    "telephone": "",
    "address": "",

  }

  constructor(private router:Router, private webService : AppServiceService) { }
  
  async ngOnInit() {


         //get Language
         this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;


  }

  forgetPassword()
  {
    this.btnClicked=true;
    setTimeout( ()=>{
      this.btnClicked=false;
      }, 1000);

      /////////////////////////////////
      // if(this.email && this.password && this.confirm_pass)
      // {
        
      //     if(this.password == this.confirm_pass)
      //     {

      //           // if all the fields are correct
      //           //data to be sent
      //          // console.log(typeof(this.mobilenumber.toString( )))
      //           var data = {
                  
      //             "email": this.email,
      //             "password": this.password,
                  
      //            }

      //            this.webService.presentLoading();                


      //            this.webService.changeClientPasssword( data).subscribe(res=>{

      //             if(res)
      //             {
      //               console.log(res);
      //               this.webService.stopLoading();
      //               alert("Sign up Ok !!!");
      //               this.router.navigateByUrl("/login");
      //             }

                                  

                   
      //            },error=>{
      //             this.webService.stopLoading(); 
      //             alert("Sign up not Ok !!");
      //             this.router.navigateByUrl("/login");               

      //            }
      //            );
            

      //     }
      //     else
      //       {
      //         //alert to tell that password and confrim password should be same 

      //           if(this.lang =="fr")
      //           {
      //             alert("Le champ mot de passe doit etre egal au champ confirmez mot de passe !! ")
      //           }else{
      //             alert("Password and Confirm Pasword Should be same !! ")

      //         }
              
      //       }

          
         
      // }else{

      //     // alert to ask the user to fill all the fields
      //     if(this.lang =="fr")
      //     {
      //       alert("Remplir tous les chaps obligatoires (*)  ")
      //     }
      //     else{
      //       alert("Fill Alln the mandatory fields (*) ")

      //     }
      // }

      ////////////////////////////
  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }

}
