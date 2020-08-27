import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';

@Component({
  selector: 'app-confidentiality',
  templateUrl: './confidentiality.page.html',
  styleUrls: ['./confidentiality.page.scss'],
})
export class ConfidentialityPage implements OnInit {

  myconf: any
  show = false; 
  constructor(private webService : AppServiceService) { }

  ngOnInit() {

       //start loader
       this.webService.presentLoading();
       /////////////////////////////////////////////////     
       ///// start : get term of usage
       this.webService.getConf().subscribe(res => {
     
         //console.log(" terms  ",res);
          if(res)
          {
              this.myconf= res;
  
              
          }
          else{
             // alert no response from server
          }
           
             //Stop loader
             this.webService.stopLoading();
             this.show = true;
       });
       ///// end : get term of usage
       /////////////////////////////////////////////////   
      
  }

}
