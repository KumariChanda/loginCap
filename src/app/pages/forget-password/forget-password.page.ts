import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmailComposer} from '@ionic-native/email-composer/ngx'
//import { SMTPClient } from 'emailjs';

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
    "email" : ""
  }

  constructor(private router:Router, private webService : AppServiceService, public composer : EmailComposer) { }
  
  async ngOnInit() {


         //get Language
         this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;


  }

  forgetPassword()
  {
    this.btnClicked=true;
    setTimeout( ()=>{
      this.btnClicked=false;

      //start the loader 
      this.webService.presentLoading();

      }, 1000);

      
     //check if the email exist 
     this.dataToSend.email = this.email;
     this.webService.verifyEmail(this.dataToSend).subscribe(res =>{
      if (res.code == 200)
      {
        //stop loading
        this.webService.stopLoading();
         
        // alert to ask the user to fill all the fields
        if(this.lang =="fr")
        {
          alert("Veillez continuer la procedure en cliquant sur le lien qui vous a été envoyé dans votre boite mail.")
        }
        else{
          alert("Please continue the procedure by clicking on the link that was sent to you in your mailbox. ")

        }

          //generate a token

          var token = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@%&&*');

          //send a mail to the customer 
          //data to send 
          var data ={
            "email" : this.email,
            "token" : token,
            "is_active" : true,
          }
          this.webService.resetPasssword(data).subscribe(res =>{


          });

          
      }
      else if(res.code == 404)
      {

          //stop loading
          this.webService.stopLoading();
         
          // alert to ask the user to fill all the fields
          if(this.lang =="fr")
          {
            alert("Désolé cette adresse email n'existe pas dans notre system.\n SVP veillez entrer une adresse correcte. ")
          }
          else{
            alert("Sorry this email address doesn't exixts in our system.\n Please kindly enter a correct email. ")

          }

          
      }

     },error=>{

        this.webService.stopLoading(); 
        if(this.lang =="fr")
        {
          alert("Opération pas réussie,\n entrez les données correctes SVP!!!")
        }else{
          alert("Unsuccessful operation,\n Please enter the correct data !!!")

        }  

     });

  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }


  ////////////////generate alphanumeric string /////////////////////////////////////////////////////////////
   randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
  ///////////////////// End generate alphanumeric string ////////////////////////////////////////////////////////
  ////////////////////////////////////////////Send Mail///////////////////////////////////////////////////////////////////
 
  // sendMail()
  //  {

  //   const client = new SMTPClient({
  //     user: 'user',
  //     password: 'password',
  //     host: 'smtp.gmail.com',
  //     ssl: true,
  //     port : 465,
  //   });
    
  //   // send the message and get a callback with an error or details of the message that was sent
  //   client.send(
  //     {
  //         text: 'i hope this works',
  //       from: 'eunicemojuye1@gmail.com',
  //       to: 'someone <someone@your-email.com>, another <another@your-email.com>',
  //       cc: 'else <else@your-email.com>',
  //       subject: 'testing emailjs',
  //     },
  //     (err, message) => {
  //       console.log(err || message);
  //     }
  //   );

  //  }
  /////////////////////////////////////////////End Send mail///////////////////////////////////////////////////////////



}
