import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';
import { Subscription } from 'rxjs';


const { Storage } = Plugins;


@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.page.html',
  styleUrls: ['./car-filter.page.scss'],
})
export class CarFilterPage implements OnInit {

 
  show = false // used to show page content

//////////////////////////////search bar elements for cars ////////////
//////////////////////////////////////////////////////////////////////////////
public isSearchbarOpened = false;
term = '';

filterData1 = [
  {
    "libelle": "",
    'modele': '',
    'id' : 0,
    'per_day' : 0,
    'per_hour' : 0,
    'airport' : 0,
    'color' : '',
    'bagage' : 0,
    'passager' : 0



  }

];
//////////////////
filterData = [
  {
    "libelle": "",
    'modele': '',
    'id' : 0,
    'per_day' : 0,
    'per_hour' : 0,
    'airport' : 0,
    'color' : ''



  }

];
  src_link: string;
  lang: any;
  subscription : Subscription;
  search_type : any;
  search_id : any;

  constructor( private router: Router,  private route : ActivatedRoute,
    private webService: AppServiceService) {



     }

  async ngOnInit() {

     //basic link
     this.src_link = this.webService.base_url;
     //get Language
    this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;



    //get  cars list
      this.webService.presentLoading();//to start loader

    this.subscription = this.route.queryParams.subscribe((data)=>{
        
        //get the search type and search id
        this.search_type = data.type;
        this.search_id = data.id;

        
          /////////////////////Get Cars ////////////////
          this.webService.getVoitures().subscribe(async res=>{

        
            //console.log("getting voitures : \n ",res); 
            if(!res.detail)
            {
                if(res.length ==0)
                { 
                     //no  cars
                    if(this.lang=="fr")
                    {
                      alert("La Liste de voitures est vide \n Retour à la page accueil");
            
                    }else{
                      alert("The List of cars is Empty \n Back to Home Page")
                    }
            
                    this.router.navigateByUrl("/dashboard");
                    this.webService.stopLoading();//to stop loading
    
                }
                else
                {

                   var nbr = 0;
                  this.filterData1 = res;

                   console.log("search type : ", this.search_type, "search id : ", this.search_id);
                  
    
                  //get the different prices of every car
                  for(let i=0 ; i< this.filterData1.length ; i++)
                  {
                    console.log("res pass : ", this.filterData1[i].passager);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                              ///if search type is other
                          if(this.search_type=="other")
                          {
                              
                              if(this.search_id == "5p+" && this.filterData1[i].passager>= 5 )
                              {
    
                                  this.filterData[nbr] = this.filterData1[i]; 
                                  nbr++;
    
                              }
                              else if(this.search_id == "5p-" && this.filterData1[i].passager<5)
                              {
    
                                  this.filterData[nbr] = this.filterData1[i]; 
                                  nbr++;
    
                              }
                              else if(this.search_id == "5b+" && this.filterData1[i].bagage >=5)
                              {    
                                  this.filterData[nbr] = this.filterData1[i]; 
                                  nbr++;
    
                              } 
                              else if(this.search_id == "5b-" && this.filterData1[i].bagage<5)
                              {
                                console.log("5b-");
    
                                  this.filterData[nbr] = this.filterData1[i]; 
                                  nbr++;
    
                              } 
                              else{
    
                              }
      
                          
                              if(i== this.filterData1.length - 1 && nbr ==0)
                              {
                                  //no  cars
                                  if(this.lang=="fr")
                                  {
                                    alert("Liste Vide !!  \n Retour à la page accueil");
                      
                                  }else{
                                    alert("Empty List !! \n Back to Home Page")
                                  }
                                  this.webService.stopLoading();//to stop loading
                                  this.router.navigateByUrl("/dashboard");
            
                              }
                              else if(i== this.filterData1.length - 1 && nbr >0)
                              {
                                   //no  cars
                                   this.show = true// used to show page content
                                   this.webService.stopLoading();//to stop loading
                              }




                          }



        //////////////////////////////////////if price/////////////////////////////////////////////////////////////////////////////////          
                    this.webService.getPriceCar(this.filterData1[i].id).subscribe( resp =>{
    
                      this.filterData1[i].per_day =  resp[0].prix;
                      this.filterData1[i].per_hour = resp[1].prix;
                      this.filterData1[i].airport =  resp[2].prix;

                      ///////////get cars 
                      //get  every car
                      if(this.search_type=="price")
                       {
                          if(this.search_id == "50000+" && this.filterData1[i].per_day >= parseInt(this.search_id.split("+")[0] ))
                          {
                            console.log("filter data per day : ",this.filterData1[i].per_day);

                              this.filterData[nbr] = this.filterData1[i]; 
                              nbr++;

                          }
                          else if(this.search_id == "50000-" && this.filterData1[i].per_day < parseInt(this.search_id.split("-")[0] ))
                          {
                            console.log("filter data per day : ",this.filterData1[i].per_day);

                              this.filterData[nbr] = this.filterData1[i]; 
                              nbr++;

                          }
                          else if(this.search_id == "5000+" && this.filterData1[i].per_hour >= parseInt(this.search_id.split("+")[0] )  )
                          {
                            console.log("filter data per day : ",this.filterData1[i].per_hour);

                              this.filterData[nbr] = this.filterData1[i]; 
                              nbr++;

                          } 
                          else if(this.search_id == "5000-" && this.filterData1[i].per_hour < parseInt(this.search_id.split("-")[0] )  )
                          {
                            console.log("filter data per hour : ",this.filterData1[i].per_hour);

                              this.filterData[nbr] = this.filterData1[i]; 
                              nbr++;

                          } 
                          else{

                            console.log("th ",typeof(parseInt(this.search_id.split("-")[0] )), "\n type : ",typeof(this.filterData1[i].per_day))
                          }

                          console.log("data ",i," ", this.filterData[i] );

                      
                          if(i== this.filterData1.length - 1 && nbr ==0)
                          {
                              //no  cars
                              if(this.lang=="fr")
                              {
                                alert("Liste Vide !!  \n Retour à la page accueil");
                  
                              }else{
                                alert("Empty List !! \n Back to Home Page")
                              }
                              this.webService.stopLoading();//to stop loading
                              this.router.navigateByUrl("/dashboard");
        
                          }
                          else if(i== this.filterData1.length - 1 && nbr >0)
                          {
                               //no  cars
                               this.show = true// used to show page content
                               this.webService.stopLoading();//to stop loading
        
                          }
                         
                        }
    
                    }
                    );

                    
                  }
                  //console.log("filter data : ",this.filterData);



                 
                }
                 
    
                
            }
            else{
               //no  cars
               if(this.lang=="fr")
                {
                  alert("Erreur code  voiture !!  \n Retour à la page accueil");
    
                }else{
                  alert("Car code error !! \n Back to Home Page")
                }
      
               this.router.navigateByUrl("/dashboard");
               this.webService.stopLoading();//to stop loading
    
            }
          });
           
          ///////////////////End Get Cars//////////////  



    });


     

  }

  //////////////////////////////////////////////////////
  //this method is used to print the details of a selected car //////////////
  carDetails(carID){


    //call another page and fetch the details of the car
    this.router.navigate(['car-details'], {queryParams:{id: carID, prev : "/car-filter"} })

  }

}