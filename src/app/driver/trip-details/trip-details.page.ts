import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Subscription } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';

const {Storage} = Plugins
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage



@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {




/////////////////////////////////
  data: any;


  name: any;
  alias: any;
  datauser: any;
  token : any;
  show = false;

  logo1 ='../assets/images/logo1.jpg';
  
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
    "destination": 0,
    "message":"",
    "etape_location": 0,
    "optionnel": [],

  };
  filterData = 
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
      "clientname": "",
      "chauffeur": 0,
      "voiture": 0,
      "type_location": 0,
      "depart":0,
      "depart_id":0,
      "destination": 0,
      "destination_id": 0,
      "message":"",
      "photo":[{"image":""}],
      "modele":"" ,
      "etape_location": 0,
      "optionnel": [],
         
    };
  
  


//////////////////////////////search barelements
//////////////////////////////////////
  public isSearchbarOpened = false;
  term = '';
  userId: any;
  lang: any;
  subscription: Subscription;
  page_prev: any;

 


  constructor( private router : Router, private route: ActivatedRoute,
     private webService : AppServiceService, public alertController: AlertController) {  
    
   }

  async ngOnInit() {

  /////////////////////////////////////////////////
      //get token
      this.token =(await Storage.get({ key: 'accessToken' })).value;

      //get user id
      this.userId =JSON.parse( (await Storage.get({ key: "user_infos" })).value).id;
      //get Language
       this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;
    
     this.subscription = this.route.queryParams.subscribe((data) => {
     
      //console.log("selected ->", typeof(data.id));
       //receive the  prev page 
      this.page_prev = data.prev ;
      //get the details of the car
 
      //receive the  prev page 
      this.page_prev = data.prev ;
       //present loading
       this.webService.presentLoading();

       this.webService.getDriverRide(this.userId,this.token).subscribe(async res=>{
      

         if(!res.detail)
         {

          
          
            for(let i=0; i< res.length;i++)
            {
                if(data.id == res[i].id)
                {
                  this.filterData = res[i];
                  //console.log("getting Ride : ",this.filterData);
                      //call the car according to the id 
                  this.webService.getCarDetails(res[i].voiture).subscribe(car =>{
    
                  //console.log(car)
                      //pictures of car
                      this.filterData.photo= car.photo;
                      //modele
                      this.filterData.modele = car.modele.libelle;
  
                      //receive the res
                      this.filterData = res[i];
                      this.filterData.heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
                      this.filterData.date_debut = res[i].date_debut.split("T")[0];
                      this.filterData.heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];
                      this.filterData.date_fin = res[i].date_fin.split("T")[0];
                      this.filterData.date_location = res[i].date_location.split("T")[0];
                      this.filterData.destination_id = res[i].destination;
                      this.filterData.depart_id = res[i].depart;
  
                    //get the client name
                    this.webService.getClient(res[i].client,this.token).subscribe(resp=>{
                      
                      //console.log("client", resp);
                        this.filterData.clientname = resp.first_name +" "+resp.last_name;
  
                  
                        //get destination
                      this.webService.getSingleDestination(res[i].destination).subscribe(dest =>{
          
                       //console.log(dest);
                     
                        this.filterData.destination = dest.destination;
  
                        if(res[i].depart > 0)
                        {
                              //get depart
                              this.webService.getSingleDestination(res[i].depart).subscribe(dep =>{
                    
                                //console.log(dep);
                
                              this.filterData.depart = dep.destination;
                              
  
                              //stop loader
                              this.show = true
                              this.webService.stopLoading();
                            });
                            //end get depart
                        } 
                      
                  });
                      //end get destination
                    
                    });
                    //end get client name
             
               });
                
                }
             
            }

         }else{
              this.webService.stopLoading();
              if(this.lang =="fr")
              {
                
                alert("Aucun Trajet disponible !! ")
              }else{
                alert("No Ride available !!  ")
          
              }

         }

      },error=>{
        this.webService.stopLoading(); 
        
        if(this.lang =="fr")
        {
          alert("Erreur Serveur !! ")
        }else{
          alert("Server Error!! ")
    
        }
    
       });

 






     });
     //end of subscription


  }


   //////////////////////////////////////////////////////////////
  ////back to home ///

  prev(){

    this.router.navigateByUrl(this.page_prev)
  }

//////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////Cancel ////////////////////////////////////////////////////

  async start()
  {
    var lang = (await Storage.get({ key: LNG_KEY })).value;
        if(lang =="fr")
        {
          var textcancel = "Non ";
          var textok = "Oui ";
          var message = "Voulez-vous Débuter ce trajet? ";
          var myheader = "Validation ";
          
        }else{
          var textcancel = "No ";
          var textok = "Yes ";
          var message = "Do you want to Start this Trip? ";
          var myheader = "Validation ";

          
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
                //console.log('Confirm Cancel: blah');
              }
            }, {
              text: textok,
              handler: () => {
                
                //change the location type ;
                this.filterData.etape_location = 4;


             //   this.DataTosend.id = this.filterData[id].id;
                this.DataTosend.date_location = this.filterData.date_location+"T"+this.filterData.heure_debut+".961Z";
                this.DataTosend.date_debut = this.filterData.date_debut+"T"+this.filterData.heure_debut+".961Z";
                this.DataTosend.date_fin = this.filterData.date_fin+"T"+this.filterData.heure_fin+".961Z";
                this.DataTosend.montant = this.filterData.montant;
                this.DataTosend.message = this.filterData.message;
                this.DataTosend.client = this.filterData.client;
                this.DataTosend.voiture = this.filterData.voiture;
                this.DataTosend.type_location = this.filterData.type_location;
                this.DataTosend.depart = this.filterData.depart_id;
                this.DataTosend.destination = this.filterData.destination_id;
                this.DataTosend.etape_location = 4;
                this.DataTosend.optionnel = this.filterData.optionnel;

                //console.log(this.DataTosend);

                //call the EditLocation API 
                this.webService.presentLoading(); // present loader
                this.webService.EditLocation(this.filterData.id,this.token,this.DataTosend).subscribe(res =>{
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




////////////////////////////////////////
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
        this.router.navigateByUrl("/home");
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
