import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Plugins } from '@capacitor/core';
import {EmailComposer} from '@ionic-native/email-composer/ngx'


const { Storage } = Plugins;


@Component({
  selector: 'app-our-contacts',
  templateUrl: './our-contacts.page.html',
  styleUrls: ['./our-contacts.page.scss'],
})
export class OurContactsPage implements OnInit {

  mycontact : any
  show = false;
  lang: string;
  constructor(private iab : InAppBrowser, private webService : AppServiceService,
      private callnumber: CallNumber, public composer : EmailComposer
    ) { }

  async ngOnInit() {


    //get Language
    this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;

     //start loader
     this.webService.presentLoading();
     /////////////////////////////////////////////////     
     ///// start : get our contact
     this.webService.getContacts().subscribe(res => {
   
       //console.log(" contact  ",res);
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
     //console.log("facebook")
     this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
     //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_system')
   }
 //  ///////////////////////////////////////
   openTwitter()
   {
     //console.log("twitter")
     //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
   }
 //  ///////////////////////////////////////
   openLinkedin()
   {
     //console.log("Linkedin")
     this.iab.create('https://www.linkedin.com/company/nyokah','_blank')
   }
 //  ///////////////////////////////////////
   openInstagram()
   {
    // console.log("Instagram")
     this.iab.create('https://instagram.com/nyokah_infos?igshid=1d2kvuj8z5sgr','_blank')
   }

   //////////////////////////////////////////////////////
   openWhatsapp(number)
   {
     //console.log("Number : ",no);
    //  this.iab.create('https://wa.me/+916284134683','_blank');
    if(this.lang =='en')
    {
      this.iab.create("https://wa.me/"+number+"?text= Hi! I'm%20interested%20in%20your%20car%20for%20rent.",'_system');

    }else if(this.lang =='fr'){
     this.iab.create("https://wa.me/"+number+"?text=Salut!%20Je%20suis%20intéressé%20par%20votre%20voiture%20à%20louer.",'_system');
    }
    //this.iab.create('https://wa.me/0916284134683/','_system');
   }
   //////////////////////////////////////////////////////
   callNumber(number) {
    this.callnumber.callNumber(number, true)
      // .then(res => console.log('Launched dialer!', res))
      // .catch(err => console.log('Error launching dialer', err));
      .then(res => {})
      .catch(err => {});
  }
  /////////////////////////////////////////////////////////////
  openNyokah()
  {
    // console.log("Nyokah")
    this.iab.create('https://www.nyokah.ci','_blank')
  }
  ////////////////////////////////////////////////////////////////
  openGmail( email)
  {

    //console.log("email :",email);
      
    if(this.lang =='en')
    {
      this.composer.open({
        to : email,
        subject : 'Car Booking',
        body : ' Hi, i am interested in your car for booking ...',
        isHtml : true

      })

    }else if(this.lang =='fr'){
      this.composer.open({
        to : email,
        subject : 'Reservation de Voiture',
        body : ' Salut, je suis intéressé par une de vos voitures...',
        isHtml : true
    })
  }

}

}
