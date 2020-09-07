import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';

import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Storage } = Plugins;


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  btnClicked:boolean=false;
  userInfo: any;
  
  constructor(private webService : AppServiceService, private router : Router) { }

  async ngOnInit() {

    //get user Infos
    this.userInfo =JSON.parse( (await Storage.get({ key: "user_infos" })).value);
    console.log("Storage : ",this.userInfo);

    

  }





  /////////////////////////////////////////////////////
  changePassword()
  {
    this.btnClicked=true;
    setTimeout( ()=>{
      this.btnClicked=false;
      }, 1000)
  }
  ////////////////////////////////////////////////////

}
