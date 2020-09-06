import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';

import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';


const { Storage } = Plugins;

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit {

  show = false;

  reservDetails : any = null;

  filterData = [
    {
      "id": 0,
      "date_location": "",
      "date_debut": "",
      "date_fin": "",
      "montant": 0,
      "note_client": 0,
      "commentaire_client": null,
      "note_chauffeur": 0,
      "rapport_chauffeur": "",
      "client": 0,
      "chauffeur": 0,
      "voiture": 0,
      "type_location": 0,
      "destination": "",
      "etape_location": 0,
      "optionnel": [],
      "photo_car":[{}],
      "modele":""    
    }
  
  ]
  token: any;
  userId: any;
  lang: any;


  constructor(public webService : AppServiceService, private router : Router) { }

  async ngOnInit() {
        //start laoder
        // this.webService.presentLoading();
        //get token
        this.token =(await Storage.get({ key: 'accessToken' })).value;

        //get user id
        this.userId =JSON.parse( (await Storage.get({ key: "user_infos" })).value).id;
        //get Language
         this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;


        //get Booking list

          this.webService.getClientReservation(this.userId,this.token).subscribe(res =>{

            console.log(res);

            if(res.detail) // that means the is error or no value exist for this user
            {
              if(this.lang=="fr")
              {
                alert("Aucune Reservation \n Retour à la page accueil");

              }else{
                alert("No Booking \n Back Home Page")
              }

              this.router.navigateByUrl("/dashboard");

              
            }else{
                 //check if the booking list is empty or not
                 if(res.length == 0) 
                 {

                      if(this.lang == "fr")
                      {
                         alert("Votre Liste de Reservation est vide !! ")
                      }
                      else
                      {
                        alert(" Your Booking List is Empty !!");
                      }
                       
                       //stop loader
                       this.show = true
                       this.webService.stopLoading();

                       this.router.navigateByUrl("/dashboard");
                 }
                 else
                 {
                    for(let i=0 ; i <res.length ; i++)
                    {
                        //receive the res
                      this.filterData[i] = res[i];
                      this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
    
                      //call the car according to the id 
                      this.webService.getCarDetails(res[i].voiture).subscribe(car =>{
    
                        console.log(car)
                            //pictures of car
                            this.filterData[i].photo_car = car.photo;
                            //modele
                            this.filterData[i].modele = car.modele.libelle;
    
    
                            //get destination
                            this.webService.getSingleDestination(res[i].destination).subscribe(dest =>{
    
                                console.log(dest);
    
                              this.filterData[i].destination = dest.destination;
                            });
                            //end get destination
    
    
                            //stop loader
                            this.show = true
                            this.webService.stopLoading();
    
    
                      });
                      //end get car infos
    
    
    
                    }//end for loop
  
                 }

             
                  

            }


            
          });
          ///end get booking list



  }


  //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////prev////////////////////////////////////////////////////

  prev()
  {
    this.reservDetails = null;
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////view details////////////////////////////////////////
  viewDetails(i)
  {
    this.reservDetails = this.filterData[i];
    this.reservDetails.date_location = this.filterData[i].date_location.split("T")[0];
    this.reservDetails.date_debut = this.filterData[i].date_debut.split(".")[0];
    this.reservDetails.date_fin = this.filterData[i].date_fin.split(".")[0];

    console.log(this.reservDetails)
  }



}
