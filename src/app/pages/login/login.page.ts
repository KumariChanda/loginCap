import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { SingletonService } from 'src/app/service/singleton.service';
import { Router, NavigationExtras } from '@angular/router';
import { ServiceChangeLangService } from 'src/app/service/changeLanguage/service-change-lang.service';

const { Storage } = Plugins;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  usernameText;
  passwordText;
  btnClicked:boolean=false;
  constructor( private webService:SingletonService, private router: Router, private langService : ServiceChangeLangService ) {
    // this.setItem();
    this.btnClicked=false;
  }
 

  // async setItem() {
  //         await Storage.set({
  //       key: 'userinfo',
  //       value: "Chanda Kumari"
  //     });    
  // }

  //goto Dashboard page
  // goToDashboardPage() {

  //   //data to be passed
  // const  complexe = {
  //     reel : "12",
  //     imag : "5"
  //   }
    
  //   //used to pass data
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       special: JSON.stringify(complexe)
  //     }
  //   };

  //   //call dashboard page and pass data 
  //   this.router.navigate(['dashboard'],navigationExtras);
  //   }


  async loginFun()
  {
    this.btnClicked=true;
    setTimeout( async ()=>{
      this.btnClicked=false;

          await Storage.set({
            key: 'accessToken',
            value: "logged in"           
          });  

          this.langService.getCurrentLanguage().then(val =>{

            // console.log("home  ",val)
              this.langService.sendMessage({'token': "mytoken", 'language': val })

                  //call dashboard page and pass data 
                this.router.navigateByUrl("/dashboard");

          });

      }, 1000)
    // console.log("Button Clicked.");
    // console.log("Username : ",this.usernameText);
    // console.log("Password: ",this.passwordText);
    // var sending_obj={
    //   "username":this.usernameText,
    //   "password":this.passwordText
    // }
    // console.log(sending_obj);



    //
    // this.webService.presentLoading();

    // this.webService.login(sending_obj).subscribe(async res=>{
    //   console.log("getting response : ",res); 
    //   if(res)
    //   {
    //     await Storage.set({
    //       key: 'accessToken',
    //       value: res.token           
    //     });  
        
    //     //call dashboard page and pass data 
    //      this.router.navigateByUrl("/dashboard");
    //   }  
    //   this.webService.stopLoading();                
    // })

      
    
    
  }

  async getData()
  {
  var ret=Storage.get({ key:'accessToken'});
    console.log((await ret).value);
  }


  RegisterBtnClicked()
  {
    this.router.navigateByUrl("/signup");
  }

  forgetPasswordBtnClicked()
  {

  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }
  


}
