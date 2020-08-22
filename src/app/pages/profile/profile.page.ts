import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile='../assets/imgs/profile.png';

  btnClicked:boolean=false;


   firstname ="";
   lastname ="";
   mobilenumber ="";
   email ="";
   password : string ;
   confirmpassword : string;
   dob = "";
   address ="";
   agreement : boolean;



  constructor() {

    this.btnClicked=false;

   }

  ngOnInit() {
  }

  save()
  {
      this.btnClicked=false;
      setTimeout( ()=>{
        this.btnClicked=true;
        }, 1000)
  }

}
