import { Component, OnInit } from '@angular/core';
import { ServiceChangeLangService } from 'src/app/service/changeLanguage/service-change-lang.service';
import { Storage } from '@ionic/storage';



const LNG_KEY = 'SELECTED LANGUAGE';


@Component({
  selector: 'app-seetings',
  templateUrl: './seetings.page.html',
  styleUrls: ['./seetings.page.scss'],
})


export class SeetingsPage implements OnInit {

  selectedLanguage:any ;


  constructor( private languageService : ServiceChangeLangService,  private storage: Storage) {
     
      this.storage.get(LNG_KEY).then(val => {

          this.selectedLanguage = val;
                  
      }) ;

   }

  ngOnInit() {
  }


  //////////////////////
languageChanged(){
  this.languageService.setLanguage(this.selectedLanguage);

   //send the language for menu updation
  this.languageService.sendMessage({'language': this.selectedLanguage});

}


}
