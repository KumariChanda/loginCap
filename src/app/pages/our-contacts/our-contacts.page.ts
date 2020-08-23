import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Subscriber } from 'rxjs';
import { AppServiceService } from 'src/app/service/appService/app-service.service';


@Component({
  selector: 'app-our-contacts',
  templateUrl: './our-contacts.page.html',
  styleUrls: ['./our-contacts.page.scss'],
})
export class OurContactsPage implements OnInit {

  mycontact : any

  constructor(private iab : InAppBrowser, private webService : AppServiceService) { }

  ngOnInit() {

     //start loader
     this.webService.presentLoading();
     /////////////////////////////////////////////////     
     ///// start : get our contact
     this.webService.getContacts().subscribe(res => {
   
       console.log(" contact  ",res);
        if(res)
        {
            this.mycontact = res;

            
        }
        else{
           // alert no response from server
        }
         
           //Stop loader
           this.webService.stopLoading();
     });
     ///// end : get our contact
     /////////////////////////////////////////////////   
    
             
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
