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
  isDriver; // used to check a the user is a driver or not
  lang: string;

  constructor( private webService:AppServiceService, private router: Router  ) {
    // this.setItem();
    this.btnClicked=false;


  }
 


////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////START LOGIN FUN ///////////////////////////////////////////////////////////////////
  async loginFun()
  {
    
    //get Language
    this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;
    // console.log("Button Clicked.");

    ///set timeout for cliked on login button
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

        if(this.usernameText && this.passwordText)
        {
          this.webService.presentLoading();


          this.webService.login(sending_obj).subscribe(async res=>{
           console.log("getting response : ",res); 

            if(!res.detail)
            {

                //store user status in storage 
                  Storage.set({
                      key : "user_type",
                      value : res.status
                  });
              ////////////////////////////////////////////////////////
              //get the details infos of the  user  
              this.webService.getUserDetails(res.token,res.id,this.isDriver).subscribe(resp =>{

               // console.log("clients : \n",resp);

                //store user infos in storage 
                  Storage.set({
                      key : "user_infos",
                      value : JSON.stringify(resp)
                  });// end store user 

                  ////////////////////////////////////////////////
              //get the current language of the app   
                this.webService.getCurrentLanguage().then(async val =>{

                  // change the value of token
                await Storage.set({
                  key: 'accessToken',
                  value: res.token           
                });  

                  // console.log("home  ",val)
                    this.webService.sendMessage({'token': "mytoken", 'language': val })

                      if(this.isDriver)
                      {
                          //call dashboard page and pass data 
                          this.router.navigateByUrl("/home");
                      }
                      else
                      {
                        //call dashboard page and pass data 
                        this.router.navigateByUrl("/dashboard");
                      }
                      ///stop loading
                      this.webService.stopLoading();   


                });//end get app language
                ////////////////////////////////////////////////
                
              
              
              }) //added end get user details
              //////////////////////////////////////////////////
            }
            else{
                this.webService.stopLoading();
                if(this.lang =="fr")
                {
                  alert("Mauvais username et/ou mot de passe !!! \n SVP entrez des valeurs correctes. ") ;            

                } 
                else
                {
                  alert("Bad username and/or password !!! \n Please enter correct values. ") ;            

                }  
            }  
                           
          },error =>{
                        this.webService.stopLoading();
                        if(this.lang =="fr")
                        {
                          alert("Erreur Serveur , SVP verifiez vos entrees et Votre Connexion Internet ") ;            

                        } 
                        else
                        {
                          alert("server error, please check your inputs ") ;            

                        }  

          }  
          )

        }
        else
        {
          
              if(this.lang =="fr")
              {
                alert("Entrez tous les champs correctement, SVP! ") ;            

              } 
              else
              {
                alert("Please, Fill all the Fields Correctly ") ;            

              }  
        }

           

      


      }, 1000)
    /// end set time out
////////////////////////////////////////ENDLOGIN FUN//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
    
    
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
