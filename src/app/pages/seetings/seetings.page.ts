import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ServiceChangeLangService } from 'src/app/service/changeLanguage/service-change-lang.service';


const { Storage } = Plugins;

const LNG_KEY = 'SELECTED LANGUAGE';

@Component({
  selector: 'app-seetings',
  templateUrl: './seetings.page.html',
  styleUrls: ['./seetings.page.scss'],
})


export class SeetingsPage implements OnInit {

  selectedLanguage:any ;


  constructor( private languageService : ServiceChangeLangService) {
    
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
  this.languageService.setLanguage(this.selectedLanguage);

   //send the language for menu updation
  this.languageService.sendMessage({'language': this.selectedLanguage});

}


}
