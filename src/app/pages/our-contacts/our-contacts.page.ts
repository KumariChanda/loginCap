import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-our-contacts',
  templateUrl: './our-contacts.page.html',
  styleUrls: ['./our-contacts.page.scss'],
})
export class OurContactsPage implements OnInit {

  mycontact : any
  show = false;
  constructor(private iab : InAppBrowser, private webService : AppServiceService,
      private callnumber: CallNumber
    ) { }

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
           this.show = true;
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
   openTwitter()
   {
     console.log("twitter")
     //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
   }
 //  ///////////////////////////////////////
   openLinkedin()
   {
     console.log("Linkedin")
    // this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
   }
 //  ///////////////////////////////////////
   openInstagram()
   {
     console.log("Instagram")
     //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
   }
 //  ///////////////////////////////////////
   openGoogleplus()
   {
     console.log("Google plus")
    // this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
   }
   //////////////////////////////////////////////////////
   openWhatsapp(number)
   {
     //console.log("Number : ",no);
    //  this.iab.create('https://wa.me/+916284134683','_blank');
     this.iab.create("https://wa.me/"+number+"?text=I'm%20interested%20in%20your%20car%20for%20rent.",'_system');
     //this.iab.create('https://wa.me/0916284134683/','_system');
   }
   //////////////////////////////////////////////////////
   callNumber(number) {
    this.callnumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}


