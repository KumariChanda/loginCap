import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';


const { Storage } = Plugins;


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

    about_us : string;
    myteam : any ;
    show =false;
    src_link;
    lang :any;

  constructor( private webService : AppServiceService) { }

  async ngOnInit() {

    
    this.src_link = this.webService.base_url;

    //get Language
    this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;

     
    //start loader
    this.webService.presentLoading();
     /////////////////////////////////////////////////     
     ///// start : get about us 
     this.webService.getAboutUs().subscribe(res => {
   
       //console.log(" about_us  ",res);
        if(res)
        {
            this.about_us = res[0].text

             
            /////////////////////////////////////////////////     
            ///// start : get team 
            this.webService.getTeam().subscribe(res => {
             // console.log(" team : ",res);
              if(res)
              {
                this.myteam = res
              }
              else{
                // alert no response from server
              }
                //stop loader
              this.webService.stopLoading();
              this.show = true;
            });
                ///// end : get team 
            /////////////////////////////////////////////////  

        }
        else{
           // alert no response from server
        }
         

     });
     ///// end : get about us 
     /////////////////////////////////////////////////   
    
             
            
      

  }


}
