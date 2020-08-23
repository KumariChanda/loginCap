import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';

@Component({
  selector: 'app-term-usage',
  templateUrl: './term-usage.page.html',
  styleUrls: ['./term-usage.page.scss'],
})
export class TermUsagePage implements OnInit {

  myterms: any


  constructor( private webService : AppServiceService) { }

  ngOnInit() {

      //start loader
      this.webService.presentLoading();
      /////////////////////////////////////////////////     
      ///// start : get term of usage
      this.webService.getTerms().subscribe(res => {
    
        //console.log(" terms  ",res);
         if(res)
         {
             this.myterms = res;
 
             
         }
         else{
            // alert no response from server
         }
          
            //Stop loader
            this.webService.stopLoading();
      });
      ///// end : get term of usage
      /////////////////////////////////////////////////   
     

  }

}
