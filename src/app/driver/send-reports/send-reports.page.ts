import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AppServiceService } from 'src/app/service/appService/app-service.service';


const {Storage} = Plugins
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage



@Component({
  selector: 'app-send-reports',
  templateUrl: './send-reports.page.html',
  styleUrls: ['./send-reports.page.scss'],
})
export class SendReportsPage implements OnInit {
/////////////////////////////////
data: any;


name: any;
alias: any;
datauser: any;
token : any;
show = false;

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
  "note_chauffeur": null,
  "rapport_chauffeur": null
 


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
userType = "";
  Id: any;




constructor( private router : Router, private route: ActivatedRoute,
   private webService : AppServiceService, public alertController: AlertController) {  
  
 }

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
         console.log("Filterdata", this.filterData);

      
         this.show = true;
        //start stop loader
      // this.webService.stopLoading();



      });


}


 //////////////////////////////////////////////////////////////
////back to home ///

prev(){

  this.router.navigateByUrl(this.page_prev)
}

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Cancel ////////////////////////////////////////////////////

async end()
{
  if(this.marks!="")
  {
    var lang = (await Storage.get({ key: LNG_KEY })).value;
      if(lang =="fr")
      {
        var textcancel = "Non ";
        var textok = "Oui ";
        
          var message = "Voulez-vous Terminer ce trajet? ";
          var myheader = "Validation ";
        
      }else{
        var textcancel = "No ";
        var textok = "Yes ";
        var message = "Do you want to End this Trip? ";
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
              this.filterData.etape_location = 5;

        
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
                this.DataTosend.etape_location = 5;
                this.DataTosend.optionnel = this.filterData.optionnel;
               
                this.DataTosend.note_chauffeur = parseInt(this.marks);
                this.DataTosend.rapport_chauffeur = this.comment;


              console.log(this.DataTosend,"\n");

              //call the EditLocation API 
              this.webService.presentLoading(); // present loader
              this.webService.EditLocation(this.filterData.id,this.token,this.DataTosend).subscribe(res =>{
              //  console.log(res)
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
      alert("Please\n Mark  the ride. ")
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
