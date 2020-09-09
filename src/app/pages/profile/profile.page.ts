import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Storage } = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile='../assets/imgs/profile.png';
  btnClicked:boolean=false;
  editableText:boolean=true;
   profileData={
   "first_name" :"",
   "last_name" :"",
   "telephone" :"",
   "email" :"",
   "birth_date" :"",
   "address" :"",
   "password":null
  }
   agreement : boolean;
  userInfo: any;
  userType: string ="";
  userId = 0;

  show = false;
  token: string;
  lang: string;

  constructor(private webService: AppServiceService, private router : Router) {

    this.btnClicked=false;
    console.log("Before editableText : ",this.editableText);
    
    
   }

   async ngOnInit() {
    // this.webService.presentLoading();
    this.getdata();
    
  
      
   
    ////////////////////////////////////////////////
  }

  async getdata()
  {
    
    this.userInfo =JSON.parse( (await Storage.get({ key: "user_infos" })).value);
    console.log("Storage : ",this.userInfo);
    this.profileData.address=this.userInfo.address;
    this.profileData.birth_date=this.userInfo.birth_date;
    this.profileData.email=this.userInfo.email;
    this.profileData.first_name=this.userInfo.first_name;
    this.profileData.last_name=this.userInfo.last_name;
    this.profileData.telephone=this.userInfo.telephone;
    this.userId =this.userInfo.id;


    //get user type
    this.userType = (await Storage.get({ key: "user_type" })).value;
    // this.webService.stopLoading();
    //get the current language of the app   
    this.webService.getCurrentLanguage().then(async val =>{ 

      // console.log("home  ",val)
        this.webService.sendMessage({'token': "mytoken", 'language': val })
    });//end get app language
  
   //show the contain
   this.show = true;
  }

 editProfile()
  {
      this.btnClicked=true;
      this.editableText=false;
      console.log("btnClicked : ",this.btnClicked);
      console.log("DOB : ",this.userId);     
      setTimeout( ()=>{
        this.btnClicked=false;
        // this.editableText=true;
        }, 1000);

        
  }

  async saveProfile()
  {
    
        console.log("profileData : ",this.profileData);
          this.btnClicked=true;
            console.log("btnClicked : ",this.btnClicked);
            setTimeout( ()=>{
              this.btnClicked=false;
              // this.editableText=true;
              }, 1000)

          //get token
          this.token =(await Storage.get({ key: 'accessToken' })).value;
          //get Language
          this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;
      

      if(this.profileData.email)
      {
        
              ///start loader
              this.webService.presentLoading();
      //////////////////////////////////////////////////////////////////////////////////////////////

        
                ///////////////call the edit profile API ////
                this.webService.EditClientProfile(this.userId,this.token,this.profileData).subscribe(res =>{
        
                    //stop loader
                    this.webService.stopLoading();
                      if(res.detail)
                      {
                          if(this.lang=="fr")
                          {
                            alert("La modification a échoué !! ");
                            // alert("Modification réussie avec succès !!");
        
                          }else{
                            alert("Update Failed !");
                          }
        
                      }else{

                          
                            //store the new result into userInfos
                              //store user infos in storage 
                              Storage.set({
                                key : "user_infos",
                                value : JSON.stringify(res)
                            });// end store user 
        

                            if(this.lang=="fr")
                            {
                              alert("Modification réussie !!");
          
                            }else{
                              alert("Update Successful !!");
                            }
        
                            //back to prev page
                            this.prev();
        
                      }



        
                },error =>{
                  this.webService.stopLoading();   
                    if(this.lang=="fr")
                    {
                      alert("Erreur Serveur, \n Verifiez Votre connexion internet \n Et vos Entrees ");
                    // alert("Modification réussie avec succès !!");

                    }
                    else
                    {
                      alert("Server error, \n please check your internet connection \n and your inputs") ;
                    }            

              });
              

            ////////////////////////////////////////////////////////////////////////////////////////
      }
      else
      {

            if(this.lang=="fr")
            {
              alert("SVP, Remplissez le champ email !");

            }
            else
            {
              alert("Please, Fill the email field !") ;
            }  
      }
  
  }

  prev()
  {
    this.editableText = true;
  }

}
