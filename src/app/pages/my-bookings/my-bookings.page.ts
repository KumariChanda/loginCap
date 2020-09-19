import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';

import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


const { Storage } = Plugins;
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage


@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit {

  show = false;

  reservDetails : any = null;
  DataTosend  = 
  {
    
    "date_location": "",
    "date_debut": "",
    "date_fin": "",
    "montant": 0,
    "client": 0,
    "voiture": 0,
    "type_location": 0,
    "depart":null,
    "note_client":null,
    "destination": 0,
    "message":"",
    "etape_location": 0,
    "optionnel": [],

  };

  filterData = [
    {
      "id": 0,
      "date_location": "",
      "date_debut": "",
      "date_fin": "",
      "heure_debut": "",
      "heure_fin": "",
      "montant": 0,
      "note_client": 0,
      "commentaire_client": "",
      "note_chauffeur": 0,
      "rapport_chauffeur": "",
      "client": 0,
      "chauffeur": 0,
      "voiture": 0,
      "type_location": 0,
      "depart":0,
      "depart_id":0,
      "destination": 0,
      "destination_id": 0,
      "message":"",
      "etape_location": 0,
      "optionnel": [],
      "photo_car":[{"image":""}],
      "modele":""    
    }
  
  ]
  token: any;
  userId: any;
  lang: any;


  constructor(public webService : AppServiceService, private router : Router,
    public alertController: AlertController) { }

  async ngOnInit() {
        //start laoder
        this.webService.presentLoading();
        //get token
        this.token =(await Storage.get({ key: 'accessToken' })).value;

        //get user id
        this.userId =JSON.parse( (await Storage.get({ key: "user_infos" })).value).id;
        //get Language
         this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;


        //get Booking list

          this.webService.getClientReservation(this.userId,this.token).subscribe(res =>{

            //console.log(res);

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
                       this.webService.stopLoading();

                       this.router.navigate(["/dashboard"]);
                 }
                 else
                 {
                    for(let i=0 ; i <res.length ; i++)
                    {
                        //receive the res
                      this.filterData[i] = res[i];
                      this.filterData[i].heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
                      this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
                      this.filterData[i].heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];
                      this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
                      this.filterData[i].date_location = res[i].date_location.split("T")[0];
                      this.filterData[i].destination_id = res[i].destination;
                      this.filterData[i].depart_id = res[i].depart;

    
                      //call the car according to the id 
                      this.webService.getCarDetails(res[i].voiture).subscribe(car =>{
    
                       // console.log(car)
                            //pictures of car
                            this.filterData[i].photo_car = car.photo;
                            //modele
                            this.filterData[i].modele = car.modele.libelle;
                            this.filterData[i].modele = car.modele.libelle;
  

    
                            // //get depart
                            // this.webService.getSingleDestination(res[i].depart).subscribe(dep =>{
    
                            //     console.log(dep);
    
                            //   this.filterData[i].depart = dep.destination;
                            // });
                            // //end get depart

                            //get destination
                            this.webService.getSingleDestination(res[i].destination).subscribe(dest =>{
    
                               // console.log(dest);
                              
                              this.filterData[i].destination = dest.destination;

                              
                              if(res.depart > 0)
                              {
                                    //get depart
                                    this.webService.getSingleDestination(res[i].depart).subscribe(dep =>{
                          
                                     // console.log(dep);
                      
                                    this.filterData[i].depart = dep.destination;
                                    
                                    //stop loader
                                    this.show = true
                                    this.webService.stopLoading();
                                  });
                                  //end get depart
                              }

                            });
                            //end get destination
    
    
                            //stop loader
                            // this.show = true
                            // this.webService.stopLoading();
    
    
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
    // this.reservDetails.date_location = this.filterData[i].date_location.split("T")[0];
    // this.reservDetails.date_debut = this.filterData[i].date_debut.split(".")[0];
    // this.reservDetails.date_fin = this.filterData[i].date_fin.split(".")[0];

    // this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
    // this.filterData[i].heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
    // this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
    // this.filterData[i].heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];


    //console.log(this.reservDetails)
  }

   //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////Cancel ////////////////////////////////////////////////////

  async cancel(id)
  {
    var lang = (await Storage.get({ key: LNG_KEY })).value;
        if(lang =="fr")
        {
          var textcancel = "Non ";
          var textok = "Oui ";
          var message = "Voulez-vous annuler cette reservation? ";
          var myheader = "Annulation ";
          
        }else{
          var textcancel = "No ";
          var textok = "Yes ";
          var message = "Do you want to cancel this Booking? ";
          var myheader = "Cancellation ";

          
        }

        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: myheader,
          message: '<strong>'+message +'</strong>' ,
          buttons: [
            {
              text: textcancel,
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
               // console.log('Confirm Cancel: blah');
              }
            }, {
              text: textok,
              handler: () => {
                
                //change the location type ;
                this.filterData[id].etape_location = 6;


             //   this.DataTosend.id = this.filterData[id].id;
                this.DataTosend.date_location = this.filterData[id].date_location+"T"+this.filterData[id].heure_debut+".961Z";
                this.DataTosend.date_debut = this.filterData[id].date_debut+"T"+this.filterData[id].heure_debut+".961Z";
                this.DataTosend.date_fin = this.filterData[id].date_fin+"T"+this.filterData[id].heure_fin+".961Z";
                this.DataTosend.montant = this.filterData[id].montant;
                this.DataTosend.message = this.filterData[id].message;
                this.DataTosend.note_client = null;
                this.DataTosend.client = this.filterData[id].client;
                this.DataTosend.voiture = this.filterData[id].voiture;
                this.DataTosend.type_location = this.filterData[id].type_location;
                this.DataTosend.depart = this.filterData[id].depart_id;
                this.DataTosend.destination = this.filterData[id].destination_id;
                this.DataTosend.etape_location = 6;
                this.DataTosend.optionnel = this.filterData[id].optionnel;

               // console.log(this.DataTosend);

                //call the EditLocation API 
                this.webService.presentLoading(); // present loader
                this.webService.EditLocation(this.filterData[id].id,this.token,this.DataTosend).subscribe(res =>{
                    if(res.id)
                    {
                        this.webService.stopLoading();
                        this.myAlert(0,this.lang);

                    }else{
                      this.webService.stopLoading();
                      this.myAlert(1,this.lang);



                    }
                },error=>{

                  this.webService.stopLoading();
                    this.myAlert(1,this.lang);


                });

                


              }
            }
          ]
        });
    
        await alert.present();
  }
   //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////prev////////////////////////////////////////////////////

  async Mark(id)
  {
    var lang = (await Storage.get({ key: LNG_KEY })).value;
        if(lang =="fr")
        {
          var textcancel = "Annuler ";
          var textok = "Valider ";
          var message = "Comment était le trajet ? ";
          var very_bad = "Très Mauvais ";
          var bad = "Mauvais ";
          var average = "Moyen ";
          var good = "Bien ";
          var very_good = "Très Bien ";
          
        }else{
          var textcancel = "Cancel ";
          var textok = "OK ";
          var message = "How was the ride ?";
          var very_bad = "Very Bad ";
          var bad = "Bad ";
          var average = "Average ";
          var good = "Good ";
          var very_good = "Very Good ";
          
        }

          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: message,
            inputs: [
              
              {
                name: very_good,
                type: 'radio',
                label: very_good,
                value: 5,
                checked: true

              },
              {
                name: good,
                type: 'radio',
                label: good,
                value: 4
              },
              {
                name: average,
                type: 'radio',
                label: average,
                value: 3
              },
              {
                name: bad,
                type: 'radio',
                label: bad,
                value: 2
              },
              {
                name: very_bad,
                type: 'radio',
                label: very_bad,
                value:1,
              },
              
           
            ],
            buttons: [
              {
                text: textcancel,
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  //console.log('Confirm Cancel');
                }
              }, {
                text: textok,
                handler: (data:number) => {
                 // console.log('Radio', data);

                  //change the  Marks given by the customer ;
                  this.filterData[id].note_client = data;


                //   this.DataTosend.id = this.filterData[id].id;
                   this.DataTosend.date_location = this.filterData[id].date_location+"T"+this.filterData[id].heure_debut+".961Z";
                   this.DataTosend.date_debut = this.filterData[id].date_debut+"T"+this.filterData[id].heure_debut+".961Z";
                   this.DataTosend.date_fin = this.filterData[id].date_fin+"T"+this.filterData[id].heure_fin+".961Z";
                   this.DataTosend.montant = this.filterData[id].montant;
                   this.DataTosend.message = this.filterData[id].message;
                   this.DataTosend.note_client = data;
                   this.DataTosend.client = this.filterData[id].client;
                   this.DataTosend.voiture = this.filterData[id].voiture;
                   this.DataTosend.type_location = this.filterData[id].type_location;
                   this.DataTosend.depart = this.filterData[id].depart_id;
                   this.DataTosend.destination = this.filterData[id].destination_id;
                   this.DataTosend.etape_location = this.filterData[id].etape_location;
                   this.DataTosend.optionnel = this.filterData[id].optionnel;
   
                  // console.log(this.DataTosend);

                    //call the EditLocation API 
                this.webService.presentLoading(); // present loader
                this.webService.EditLocation(id,this.token,this.filterData[id]).subscribe(res =>{
                    if(res.id)
                    {
                        this.webService.stopLoading();
                        this.myAlert(0,this.lang);

                    }else{
                      this.webService.stopLoading();
                      this.myAlert(1,this.lang);



                    }
                },error=>{

                  this.webService.stopLoading();
                    this.myAlert(1,this.lang);


                });

                 }
              }
            ]
          });
      
          await alert.present();
        
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   //alert 2 method
   myAlert(id,lang)
   {
     if(id==0)
     {
        if(lang =="fr" )
        {
           alert( "Votre Requête a été envoyée avec succès !");
        }else{
          alert("Your Request has been sent successfully !");
         }
          this.router.navigateByUrl("/my-bookings");
     }else{

        if(lang =="fr" )
        {
          alert( "Désolé, une erreur s'est produite.");
        }else{
          alert("Sorry, an error has occurred.");
        }

     }
   }











}
