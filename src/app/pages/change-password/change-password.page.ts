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
  old_password ="";
  new_password ="";
  confirm_pass="";

  dataToSend ={
    "new_password" : "",
    "old_password" : "",
    

  }
  token: string;

  
  constructor(private webService : AppServiceService, private router : Router) { }

  async ngOnInit() {

     //get token
     this.token =(await Storage.get({ key: 'accessToken' })).value;

     console.log(this.token)

    //get user Infos
    this.userInfo =JSON.parse( (await Storage.get({ key: "user_infos" })).value);
    //console.log("Storage : ",this.userInfo);

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
          if(this.old_password && this.new_password && this.confirm_pass)
          {
            
              if(this.new_password == this.confirm_pass)
              {
                
                    // if all the fields are correct
                    //data to be sent
                   // console.log(typeof(this.mobilenumber.toString( )))
                    this.dataToSend.old_password =  this.old_password,
                     this.dataToSend.new_password =  this.new_password,
                      
                     
                      //present loader
                     this.webService.presentLoading();                
    
                      //call the web service
                     this.webService.changeClientPasssword(this.userInfo.id,this.token,this.dataToSend).subscribe(res=>{
                     
                      console.log(res);
                      //check if action failed or not
                      if(res.status =="success")
                      {
                        //console.log(res);
                        this.webService.stopLoading();
                        

                        if(this.lang =="fr")
                        {
                          alert("Opération réussie!!!")
                        }else{
                          alert("Successful operation!!!")
        
                        }
                        this.old_password = "";
                        this.new_password = "";
                        this.confirm_pass="";
                        this.router.navigateByUrl("/dashboard");

                      }
                      else
                      {
                          this.webService.stopLoading();
                          
                            if(this.lang =="fr")
                            {
                              alert("Opération pas réussie,\nEntrez les données correctes SVP!!!")
                            }else{
                              alert("Unsuccessful operation,\nPlease enter the correct data !!!")
            
                            }
                            this.old_password = "";
                            this.new_password = "";
                            this.confirm_pass="";
                         }
                         // this.router.navigateByUrl("/dashboard");
                        
    
                                      
    
                       
                     },error=>{
                      this.webService.stopLoading(); 
                      if(this.lang =="fr")
                      {
                        alert("Opération pas réussie,\n entrez les données correctes SVP!!!")
                      }else{
                        alert("Unsuccessful operation,\n Please enter the correct data !!!")
      
                      }
                      this.old_password = "";
                      this.new_password = "";
                      this.confirm_pass="";
                     // this.router.navigateByUrl("/dashboard");               
    
                     }
                     );
                  
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
