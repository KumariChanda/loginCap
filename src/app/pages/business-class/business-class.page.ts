import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';



@Component({
  selector: 'app-business-class',
  templateUrl: './business-class.page.html',
  styleUrls: ['./business-class.page.scss'],
})
export class BusinessClassPage implements OnInit {


 // token : any;

//////////////////////////////search bar elements for cars ////////////
//////////////////////////////////////////////////////////////////////////////
public isSearchbarOpened = false;
term = '';
filterData = [
  {
    'modele': '',
    'id' : '',
    'per_day' : '',
    'per_hour' : '',
    'airport' : ''


  }

];


  constructor( private router: Router, 
    private webService: AppServiceService) {



     }

  ngOnInit() {

    //get Business class cars list

      this.webService.getCarClass(3).subscribe(async res=>{

        
        //console.log("getting business voitures : \n ",res); 
        if(res)
        {

              var index=0;
              for(let i=0; i< res.length; i++ )
              {
               // console.log("class ",i)
                for(let j=0; j< res[i].modeles.length; j++ )
                {
                 // console.log("Modele ",i,j)
                  for(let k=0; k < res[i].modeles[j].voitures.length; k++ )
                  {
                   // console.log("car ",i,j,k)
                    //console.log(" voitures : \n ",res[i].modeles[j].voitures[k]);
                    this.filterData[index] = res[i].modeles[j].voitures[k];
                    
                    index = index + 1;

                  }
                }
              // console.log("business voitures : \n ",res.modeles.voitures);
              }
              console.log(this.filterData);

              //get the different prices of every car
              for(let i=0 ; i< this.filterData.length ; i++)
              {
                this.webService.getPriceCar(this.filterData[i].id).subscribe( resp =>{

                  this.filterData[i].per_day = resp[0].prix;
                  this.filterData[i].per_hour = resp[1].prix;
                  this.filterData[i].airport = resp[2].prix;

                }
                );
              }
            
        }
      });

  }

//////////////////////////////////////////////////////
//this method is used to print the details of a selected car //////////////
carDetails(carID){


  //call another page and fetch the details of the car
  this.router.navigate(['car-details'], {queryParams:{id: carID, prev : "/business-class"} })


}














}
