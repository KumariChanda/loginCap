import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AppServiceService } from 'src/app/service/appService/app-service.service';


const {Storage} = Plugins
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage



@Component({
  selector: 'app-report-client',
  templateUrl: './report-client.page.html',
  styleUrls: ['./report-client.page.scss'],
})
export class ReportClientPage implements OnInit {


 /////////////////////////////////
data: any;


name: any;
alias: any;
datauser: any;
token : any;
show = false;

logo1 ='../assets/images/logo1.jpg';

DataTosend1  = 
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
  "note_client": null,
  "commentaire_client": null


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

userId: any;
lang: any;
subscription: Subscription;
page_prev: any;
marks = "";
comment ="";
reservID=0;







  constructor(public webService : AppServiceService, private router : Router, private route: ActivatedRoute,
    public alertController: AlertController) { }

  async ngOnInit() {

     //start laoder
    // this.webService.presentLoading();
     //get token
     this.token =(await Storage.get({ key: 'accessToken' })).value;

     //get user id
     this.userId =JSON.parse( (await Storage.get({ key: "user_infos" })).value).id;
     //get Language
      this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;

      //get data from prev page
      this.subscription = this.route.queryParams.subscribe((data) => {
   
        // console.log("selected ->", typeof(data.id));
          //receive the  prev page 
         this.page_prev = data.prev ;
         //get the details of the car
     
         //receive the data infos
         this.filterData = JSON.parse( data.booked);
         //console.log("Filterdata", this.filterData);

      
         this.show = true;
        //start stop loader
      // this.webService.stopLoading();



      });
     


  }


  //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////prev////////////////////////////////////////////////////

  prev(){

    this.router.navigateByUrl(this.page_prev)
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  async end()
{
  if(this.marks!="")
  {
   var lang = (await Storage.get({ key: LNG_KEY })).value;
      if(lang =="fr")
      {
        var textcancel = "Non ";
        var textok = "Oui ";
        
          var message = " ";
          var myheader = "Confirmation ";
  
        
      }else{
        var textcancel = "No ";
        var textok = "Yes ";
       
          var message = " ";
          var myheader = "Confirmation ";
       

        
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
              //this.filterData.etape_location = 5;

             

           //   this.DataTosend.id = this.filterData[id].id;
             
                this.DataTosend1.date_location = this.filterData.date_location+"T"+this.filterData.heure_debut+".961Z";
                this.DataTosend1.date_debut = this.filterData.date_debut+"T"+this.filterData.heure_debut+".961Z";
                this.DataTosend1.date_fin = this.filterData.date_fin+"T"+this.filterData.heure_fin+".961Z";
                this.DataTosend1.montant = this.filterData.montant;
                this.DataTosend1.message = this.filterData.message;
                this.DataTosend1.client = this.userId;
                this.DataTosend1.voiture = this.filterData.voiture;
                this.DataTosend1.type_location = this.filterData.type_location;
                this.DataTosend1.depart = this.filterData.depart_id;
                this.DataTosend1.destination = this.filterData.destination_id;
                this.DataTosend1.etape_location = this.filterData.etape_location;
                this.DataTosend1.optionnel = this.filterData.optionnel;
               
                this.DataTosend1.note_client = parseInt(this.marks);
                this.DataTosend1.commentaire_client = this.comment;

              
 

              console.log(this.DataTosend1,"\n");

              //call the EditLocation API 
              this.webService.presentLoading(); // present loader
              this.webService.EditLocation(this.filterData.id,this.token,this.DataTosend1).subscribe(res =>{
                console.log(res)
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
    }else
    {
      if(lang =='fr')
      {
        alert("SVP\n Attribuez une note au trajet. ");
      }else{
        alert("Please\n Mark the ride. ")
      }
  
    }
}




////////////////////////////////////////
//alert 2 method
myAlert(id,lang)
{
    if(id==0)
    {
      if(lang =="fr" )
      {
          alert( "Merci pour votre contribution !");
      }else{
        alert("Thank you for your contribution !");
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
