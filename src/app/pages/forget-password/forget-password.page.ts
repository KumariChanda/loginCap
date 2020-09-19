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

  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }

}
