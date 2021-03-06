import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';

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
   "firstname" :"Chanda",
   "lastname" :"Kumari",
   "mobilenumber" :"8559080443",
   "email" :"kumarichanda658@gmail.com",
   "dob" :"1996-06-26",
   "address" :"A-658",
   "city":"New Delhi",
   "country":"India"
  }
   agreement : boolean;
  userInfo: any;
  userType: string ="";

  show = false;

  constructor(private webService: AppServiceService) {

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
    this.profileData.dob=this.userInfo.birth_date;
    this.profileData.email=this.userInfo.email;
    this.profileData.firstname=this.userInfo.first_name;
    this.profileData.lastname=this.userInfo.last_name;
    this.profileData.mobilenumber=this.userInfo.telephone;


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

  async editProfile()
  {
      this.btnClicked=true;
      this.editableText=false;
      console.log("btnClicked : ",this.btnClicked);
      console.log("DOB : ",this.profileData.dob);     
      setTimeout( ()=>{
        this.btnClicked=false;
        // this.editableText=true;
        }, 1000)
      
        
  }

  saveProfile()
  {
    console.log("profileData : ",this.profileData);
    this.btnClicked=true;
      console.log("btnClicked : ",this.btnClicked);
      setTimeout( ()=>{
        this.btnClicked=false;
        // this.editableText=true;
        }, 1000)
  }

  prev()
  {
    this.editableText = true;
  }

}
