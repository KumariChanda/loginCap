import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { SingletonService } from '../service/singleton.service';

const { Storage } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usernameText;
  passwordText;
  constructor( private webService:SingletonService) {
    // this.setItem();
  }

  // async setItem() {
  //         await Storage.set({
  //       key: 'userinfo',
  //       value: "Chanda Kumari"
  //     });    
  // }

  async loginFun()
  {
    console.log("Button Clicked.");
    console.log("Username : ",this.usernameText);
    console.log("Password: ",this.passwordText);
    var sending_obj={
      "username":this.usernameText,
      "password":this.passwordText
    }
    console.log(sending_obj);
    this.webService.presentLoading();
    this.webService.login(sending_obj).subscribe(async res=>{
      console.log("getting response : ",res); 
      if(res)
      {
        await Storage.set({
          key: 'accessToken',
          value: res.token           
        });         
      }  
      this.webService.stopLoading();                
    })
    
    
  }

  async getData()
  {
  var ret=Storage.get({ key:'accessToken'});
    console.log((await ret).value);
  }

}
