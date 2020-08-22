import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';


const { Storage } = Plugins;

const LNG_KEY = 'SELECTED LANGUAGE';

@Component({
  selector: 'app-seetings',
  templateUrl: './seetings.page.html',
  styleUrls: ['./seetings.page.scss'],
})


export class SeetingsPage implements OnInit {

  selectedLanguage:any ;


  constructor(private router : Router ,private webService : AppServiceService) {
    
        this.getcurrentlang();
   }

  ngOnInit() {

    
  }

 ////////////
 async getcurrentlang()
 {
     
  var ret=Storage.get({ key: LNG_KEY });
  var val = (await ret).value;  
  this.selectedLanguage = val;
  //console.log("selected language ",this.selectedLanguage ,typeof(this.selectedLanguage ));
 }

  //////////////////////
languageChanged(){
  this.webService.setLanguage(this.selectedLanguage);

  //  Storage.set({key:LNG_KEY, value:this.selectedLanguage}); 

   //send the language for menu updation
  this.webService.sendMessage({'language': this.selectedLanguage});

 // this.router.navigateByUrl("/dashboard");


}


}
