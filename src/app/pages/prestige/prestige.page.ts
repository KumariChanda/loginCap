import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';


import { Plugins } from '@capacitor/core';


const { Storage } = Plugins;

@Component({
  selector: 'app-prestige',
  templateUrl: './prestige.page.html',
  styleUrls: ['./prestige.page.scss'],
})
export class PrestigePage implements OnInit {

  show = false;
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
  lang: string;
  src_link: string;

  constructor(private router: Router, 
    private webService: AppServiceService) { }

    async ngOnInit() {


      //basic link
      this.src_link = this.webService.base_url;
      //get family class cars list
      this.webService.presentLoading();//to start loader
  
           //get Language
           this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;
  
      this.webService.getCarClass(3).subscribe(async res=>{
  
          
        //console.log("getting business voitures : \n ",res); 
        if(!res.detail)
        {
            if(res.length ==0)
            { 
                 //no  cars
                 if(this.lang=="fr")
                 {
                   alert(" Pas de véhicule, veuillez affiner votre recherche.");
         
                 }else{
                   alert(" No vehicle, please refine your search.")
                 }
                this.router.navigateByUrl("/dashboard");
                this.webService.stopLoading();//to stop loading
  
            }
            else
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
              //console.log(this.filterData);
  
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
            this.webService.stopLoading();//to stop loading
            this.show =true;
  
            }
        }
        else{
          //no  cars
          if(this.lang=="fr")
          {
            alert("Erreur Serveur \n code vehicule incorrect  ");

          }else{
            alert(" Server error \n incorrect vehicle code ");
          }
  
          this.router.navigateByUrl("/dashboard");
          this.webService.stopLoading();//to stop loading
  
       }
  
      });
  
    }
  

    //////////////////////////////////////////////////////
    //this method is used to print the details of a selected car //////////////
    carDetails(carID){


      //call another page and fetch the details of the car
      this.router.navigate(['car-details'], {queryParams:{id: carID, prev : "/prestige"} })


    }


}
