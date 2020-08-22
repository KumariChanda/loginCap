import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(private iab : InAppBrowser) { }

  ngOnInit() {
  }

 ///////////////////////////////////////
  openFacebook()
  {
    console.log("facebook")
    this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
    //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_system')
  }
//  ///////////////////////////////////////
//   openTwitter()
//   {
//     console.log("twitter")
//     //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
//   }
//  ///////////////////////////////////////
//   openLinkedin()
//   {
//     console.log("Linkedin")
//    // this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
//   }
//  ///////////////////////////////////////
//   openInstagram()
//   {
//     console.log("Instagram")
//     //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
//   }
//  ///////////////////////////////////////
//   openGoogleplus()
//   {
//     console.log("Google plus")
//    // this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
//   }

}
