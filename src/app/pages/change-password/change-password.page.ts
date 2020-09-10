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
  lang: string;
  email ="";
  new_password ="";
  confirm_pass="";

  dataToSend ={
    "email" : "",
    "password" : "",
    "first_name" : "",
    "last_name" : "",
    "birth_date": null,
    "telephone": "",
    "address": "",

  }
  token: string;

  
  constructor(private webService : AppServiceService, private router : Router) { }

  async ngOnInit() {

     //get token
     this.token =(await Storage.get({ key: 'accessToken' })).value;

    //get user Infos
    this.userInfo =JSON.parse( (await Storage.get({ key: "user_infos" })).value);
    console.log("Storage : ",this.userInfo);

         //get Language
         this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;
    

  }





  /////////////////////////////////////////////////////
  changePassword()
  {
    this.btnClicked=true;
    setTimeout( ()=>{
      this.btnClicked=false;
      }, 1000)

          /////////////////////////////////
          if(this.email && this.new_password && this.confirm_pass)
          {
            
              if(this.new_password == this.confirm_pass)
              {
                 if(this.email == this.email)
                 {
                    // if all the fields are correct
                    //data to be sent
                   // console.log(typeof(this.mobilenumber.toString( )))
                    this.dataToSend.email =  this.userInfo.email,
                     this.dataToSend.password =  this.new_password,
                      
                     
                      //present loader
                     this.webService.presentLoading();                
    
                      //call the web service
                     this.webService.changeClientPasssword(this.userInfo.id,this.token,this.dataToSend).subscribe(res=>{
                     
                      //check if action failed or not
                      if(!res.details)
                      {
                        console.log(res);
                        this.webService.stopLoading();
                        

                        if(this.lang =="fr")
                        {
                          alert("Opération réussie!!!")
                        }else{
                          alert("Successful operation!!!")
        
                        }
                        this.router.navigateByUrl("/dashboard");

                      }
                      else
                      {
                          this.webService.stopLoading();
                          

                          if(this.lang =="fr")
                          {
                            alert("Opération pas réussie!!!")
                          }else{
                            alert("Unsuccessful operation!!!")
          
                          }
                         // this.router.navigateByUrl("/dashboard");
                        }
    
                                      
    
                       
                     },error=>{
                      this.webService.stopLoading(); 
                        if(this.lang =="fr")
                          {
                            alert("Opération pas réussie!!!")
                          }else{
                            alert("Unsuccessful operation!!!")
          
                          }


                     // this.router.navigateByUrl("/dashboard");               
    
                     }
                     );
                  }
                  else
                  {
                    if(this.lang =="fr")
                    {
                      alert("Email incorrect !! ")
                    }else{
                      alert("Incorrect email !! ")
    
                    }
                  }
    
              }
              else
                {
                  //alert to tell that password and confrim password should be same 
    
                    if(this.lang =="fr")
                    {
                      alert("Le champ nouveau mot de passe doit être egal au champ confirmez mot de passe !! ")
                    }else{
                      alert("New Password and Confirm Pasword Should be same !! ")
    
                  }
                  
                }
    
              
             
          }else{
    
              // alert to ask the user to fill all the fields
              if(this.lang =="fr")
              {
                alert("Remplir tous les champs obligatoires (*)  ")
              }
              else{
                alert("Fill All the mandatory fields (*) ")
    
              }
          }
    
          ////////////////////////////

  }
  ////////////////////////////////////////////////////

}
