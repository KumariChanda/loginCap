import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile='../assets/imgs/dummyProfile.jpg';

  btnClicked:boolean=false;
  editableText:boolean=false;

   firstname ="Chanda";
   lastname ="Kumari";
   mobilenumber ="8559080443";
   email ="kumarichanda658@gmail.com";
   password : "1234";
   confirmpassword : "1234";
   dob = "26-06-1996";
   address ="A-658";
   city="New Delhi";
   country="India";
   agreement : boolean;

 



  constructor() {

    this.btnClicked=false;

   }

  ngOnInit() {
  }

  async editProfile()
  {
      this.btnClicked=true;
      console.log("btnClicked : ",this.btnClicked);
      this.editableText=true;
      // setTimeout( ()=>{
      //   this.btnClicked=false;
      //   // this.editableText=true;
      //   }, 1000)
  }

}
