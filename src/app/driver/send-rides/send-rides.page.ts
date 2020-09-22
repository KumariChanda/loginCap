import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';



const { Storage } = Plugins;
@Component({
  selector: 'app-send-rides',
  templateUrl: './send-rides.page.html',
  styleUrls: ['./send-rides.page.scss'],
})
export class SendRidesPage implements OnInit {

 //////////////Date////////////////////
public  today: any ;     // today's date 
public  maxdate : any;   // the maximum date of a date picker

/////////////////////////////////
  data: any;


  name: any;
  alias: any;
  datauser: any;
  token : any;
  lang: string;


  logo1 ='../assets/images/logo1.jpg';
  
  public dataToSend:any=
  {
    "name":"",
    "alias":" "
  };

  public dataSaveReturn: any = "";

//////////////////////////////search barelements
//////////////////////////////////////
  public isSearchbarOpened = false;
  term = '';
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
         
    }
  
  ];

  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// data for destination //////////////////////////////////////////////////
  rent_type : any ="hour";
  list_original = [];
  list_to_show = [];
  selected_index = -1;
  show_list = false;
  userId: any;
  
  show = false
  nbr = 0;


  constructor(private route: ActivatedRoute, private router: Router, 
    private webService: AppServiceService) {


    
   }

  async ngOnInit() {
      /////////////////////////////////////////////////
      //get token
      this.token =(await Storage.get({ key: 'accessToken' })).value;

      //get user id
      this.userId =JSON.parse( (await Storage.get({ key: "user_infos" })).value).id;
      //get Language
       this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;

      //present loading
      this.webService.presentLoading();
      this.webService.getDriverRide(this.userId,this.token).subscribe(async res=>{
       // console.log("getting Rides : ",res);

         if(!res.detail)
         {
          
            this.filterData = res;
            for(let i=0; i< res.length;i++)
            {

              if(this.filterData[i].etape_location == 5)
              {
                this.nbr = this.nbr + 1 ;
                break;
              }
            }

            //
            if(this.nbr>0)
            {
               
              for(let i=0; i< res.length;i++)
              {

              //call the car according to the id 
               this.webService.getCarDetails(res[i].voiture).subscribe(car =>{
    
                 // console.log(car)
                    //pictures of car
                    this.filterData[i].photo= car.photo;
                    //modele
                    this.filterData[i].modele = car.modele.libelle;

                    //receive the res
                    this.filterData[i] = res[i];
                    this.filterData[i].heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
                    this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
                    this.filterData[i].heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];
                    this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
                    this.filterData[i].date_location = res[i].date_location.split("T")[0];
                    this.filterData[i].destination_id = res[i].destination;
                    this.filterData[i].depart_id = res[i].depart;

                    

                  //get the client name
                  this.webService.getClient(res[i].client,this.token).subscribe(resp=>{
                    
                    //console.log("client", resp);
                      this.filterData[i].clientname = resp.first_name +" "+resp.last_name;

                
                      //get destination
                    this.webService.getSingleDestination(res[i].destination).subscribe(dest =>{
        
                     //console.log(dest);
                   
                      this.filterData[i].destination = dest.destination;

                      if(res[i].depart > 0)
                      {
                            //get depart
                            this.webService.getSingleDestination(res[i].depart).subscribe(dep =>{
                  
                              //console.log(dep);
              
                            this.filterData[i].depart = dep.destination;
                            

                            this.list_original = this.filterData
                            //stop loader
                            this.show = true
                            this.webService.stopLoading();
                          });
                          //end get depart
                      }else{
                          //stop loader
                          this.show = true
                          this.webService.stopLoading();
                      } 
                    
                    });
                        //end get destination
                  
                  });
                  //end get client name
           
             });
              }
            }else{
              this.show = true;
              this.webService.stopLoading();

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

  }

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////






  //////////////////////////////////////////////////////
  //this method is used to print the details of a selected trip //////////////
  tripDetails(id){

   // console.log("selected : -> ", this.filterData[id].id);

    //call another page and fetch the details of the car
    //this.router.navigateByUrl("/trip-details")

      //call another page and fetch the details of the car
      this.router.navigate(['trip-details'], {queryParams:{id: this.filterData[id].id, prev : "/send-rides"} })



  }















  
  


}
