import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';

const { Storage } = Plugins;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  usernameText // used to get the username entered by the user;
  passwordText // used to get the password entered by the user;
  btnClicked:boolean=false; // check if the button has been clicked or not

  constructor( private webService:AppServiceService, private router: Router  ) {
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
    // console.log("Button Clicked.");
     this.btnClicked=true;
     setTimeout( async ()=>{
      this.btnClicked=false;


          //object to be sent
          // console.log("Username : ",this.usernameText);
          // console.log("Password: ",this.passwordText);
          var sending_obj={
            "username":this.usernameText,
            "password":this.passwordText
          }
          // console.log(sending_obj);

           this.webService.presentLoading();

          this.webService.login(sending_obj).subscribe(async res=>{
            console.log("getting response : ",res.token); 
            if(res)
            {
                
              
            
              //get the current language of the app   
                this.webService.getCurrentLanguage().then(async val =>{

                  // change the value of token
                await Storage.set({
                  key: 'accessToken',
                  value: res.token           
                });  

                  // console.log("home  ",val)
                    this.webService.sendMessage({'token': "mytoken", 'language': val })

                        //call dashboard page and pass data 
                      this.router.navigateByUrl("/dashboard");

                });
                //////////////////////

            }  
            this.webService.stopLoading();                
          },error =>{
                        this.webService.stopLoading();                

          }
          )

      


      }, 1000)
    

      
    
    
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
    this.router.navigateByUrl("/forget-password");
  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }
  


}
