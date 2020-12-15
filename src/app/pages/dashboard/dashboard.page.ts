import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';

//import * as moment from 'moment';


const { Storage } = Plugins;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


/////////search var///////

searchClass : any;
searchPrice : any;
searchOther : any;
/////////////////////////




 //////////////Date////////////////////
public  today: any ;     // today's date 
public  maxdate : any;   // the maximum date of a date picker

/////////////////////////////////
  data: any;


  datauser: any;
  searchQuery:any;
  destination_to_be_search : any;
  logo1 ='../assets/images/logo1.jpg';
  
 

  public dataSaveReturn: any = "";

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
      'airport' : '',
      'color' : ''
  
  
    }
  
  ];

  //////////////////////////////////////////////////////////////////////
  ////////////data for destination////////////////////////
  search_type : any ="class";
  list_original = [
    {
        'id': '',
        'destination' :'',
        'coefficient' : ''
    }
  ];
  list_to_show = [
    {
        'id': '',
        'destination' :'',
        'coefficient' : ''
    }
  ];
  selected_index = -1;
  show_list = false;
///////////////////////end data for destination search ///////////////////
  

  show = false // used to show page content
  lang: string;

  constructor(private route: ActivatedRoute, private router: Router, 
    private webService: AppServiceService) {
      

      //language
     // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

        // date
         this.setDate();

  

   }

  async ngOnInit() {
    /////////////////////////////////////////////////
      //get Language
      this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;
      ////////////////////////////////////////////
   //get voitures list
   //present loading
    this.webService.presentLoading();
    this.webService.getVoitures().subscribe(async res=>{
    //console.log("getting voitures : ",res); 
    if(!res.details)
    {
        
      if(res.length>0)
      {
          this.filterData = res;
            ////get the different prices of every car
          for(let i=0 ; i< this.filterData.length ; i++)
          {
            this.webService.getPriceCar(this.filterData[i].id).subscribe( resp =>{

              this.filterData[i].per_day = resp[0].prix;
            //  this.filterData[i].per_hour = resp[1].prix;
            //  this.filterData[i].airport = resp[2].prix;

            }
            );
          }/////end get the different price of each car
      }
      else
      {
          //no  cars
          if(this.lang=="fr")
          {
            alert("Aucune Voiture Disponible !!! ");

          }else{
            alert("No Car Available !!! ");
          }
      }
            
    }
    else
    {
        //no  cars
        if(this.lang=="fr")
        {
          alert("Oops une erreur !!! ");

        }else{
          alert("Oops an Error !!! ");
        }
    }


      ////////////////////////////////////////////////////////////////////////////   
      //get Destination list

      this.webService.getDestinations().subscribe(async res=>{
        //console.log("getting Destinations : ",res); 
        if(!res.details)
        {
           if(res.length>0)
           {
              this.list_original = res;

              this.show = true;

           }
           else
           {
                //no  cars
                if(this.lang=="fr")
                {
                  alert("Aucune Destination Disponible !!! ");

                }else{
                  alert("No Destination Available !!! ");
                }
            }

        }
        else
        {
            //no  cars
            if(this.lang=="fr")
            {
              alert("Oops une erreur !!! ");
    
            }else{
              alert("Oops an Error !!! ");
            }
        }

      //  console.log("res : ", this.list_original)
        this.webService.stopLoading();
      }); //// end get destinations
      ////////////////////////////////////////////////////////////////////
      

  


    },error=>{
      
      
      if(this.lang =="fr")
      {
        alert("Erreur Serveur !! ")
      }else{
        alert("Server Error!! ")

      }

      this.webService.stopLoading(); 

    });/// end get voitures
 ////////////////////////////////////////////////////

  }//end of ngOnInit


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
setDate()
{
  let date : Date = new Date();
  var month, day
  //today's date
  this.today = date.getFullYear() +"-"+ (date.getMonth()+1) + "-"+date.getDate();

     if(date.getMonth()+1 <10)
     {
       month = "0"+(date.getMonth()+1)
     }else{
       month = date.getMonth()+1
     }

     if(date.getDate() <10)
     {
       day = "0"+date.getDate()
     }else{
       day = date.getDate()
     }

     this.today = date.getFullYear() +"-"+ month + "-"+day


  //maximum date
  var x =  new Date().setDate( date.getDate()+90 )
  this.maxdate = new Date(x)

  if(this.maxdate.getMonth()+1 <10)
  {
    month = "0"+(this.maxdate.getMonth()+1)
  }else{
     month = this.maxdate.getMonth()+1
  }

  if(this.maxdate.getDate() <10)
  {
    day = "0"+this.maxdate.getDate()
  }else{
    day = this.maxdate.getDate()
  }

  this.maxdate = this.maxdate.getFullYear() +"-"+ month + "-"+day
  


 // console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 



}
///////////////end set Date////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


//this method is used to print the details of a selected car //////////////
  carDetails(carID){


    //call another page and fetch the details of the car
    this.router.navigate(['car-details'], {queryParams:{id: carID, prev : "/dashboard"} })


  }

//////////////////////end call carDetails///////////////////////////


//////////////// search class /////////////////////

openClass()
{
   //console.log(this.searchClass);
      if(this.searchClass == 'business')
      {
         this.router.navigateByUrl("/business-class");
      }
      else if(this.searchClass == 'economic')
      {
        this.router.navigateByUrl("/economique");

      }
      else if(this.searchClass == 'premium')
      {
        this.router.navigateByUrl("/premium");

      }
      else if(this.searchClass == 'prestige')
      {
        this.router.navigateByUrl("/prestige");

      }
      else
      {
           //no  cars
           if(this.lang=="fr")
           {
             alert("Faites un choix SVP !!! ");
   
           }else{
             alert("Make a choice Please !!! ");
           }
   

      }
}

////////////////  End search class ////////////////

//////////////// search per price /////////////////////

openPrice()
{
   //console.log(this.searchPrice);
      if(this.searchPrice == '50000+')
      {
         this.router.navigate(['car-filter'],{queryParams : {id : this.searchPrice ,type : "price"}} );
      }
      else if(this.searchPrice == '50000-')
      {
        this.router.navigate(['car-filter'],{queryParams : {id : this.searchPrice,type : "price" }});

      }
      else if(this.searchPrice == '5000+')
      {
        this.router.navigate(['car-filter'],{queryParams : {id : this.searchPrice,type : "price" }});

      }
      else if(this.searchPrice == '5000-')
      {
        this.router.navigate(['car-filter'],{queryParams : {id : this.searchPrice, type : "price" }});

      }
      else
      {
           //no  cars
           if(this.lang=="fr")
           {
             alert("Faites un choix SVP !!! ");
   
           }else{
             alert("Make a choice Please !!! ");
           }
   

      }
}

////////////////  End search per price ////////////////

//////////////// search per Other /////////////////////

openOther()
{
     // console.log(this.searchOther);
      if(this.searchOther == '5p+')
      {
         this.router.navigate(['car-filter'],{queryParams : {id : this.searchOther ,type : "other"}} );
      }
      else if(this.searchOther == '5p-')
      {
        this.router.navigate(['car-filter'],{queryParams : {id : this.searchOther,type : "other" }});

      }
      else if(this.searchOther == '5b+')
      {
        this.router.navigate(['car-filter'],{queryParams : {id : this.searchOther,type : "other" }});

      }
      else if(this.searchOther == '5b-')
      {
        this.router.navigate(['car-filter'],{queryParams : {id : this.searchOther, type : "other" }});

      }
      else
      {
           //no  cars
           if(this.lang=="fr")
           {
             alert("Faites un choix SVP !!! ");
   
           }else{
             alert("Make a choice Please !!! ");
           }
   

      }
}

////////////////  End search per Other////////////////
















  //////////////method for destination search //////////////////
    /////////////////////////////////////////////////////
    onCancel(val) {
      this.show_list = false;
      this.list_to_show = [
        {
            'id': '',
            'destination' :'',
            'coefficient' : ''
        }
      ];
  
    }
  
    click_bar() {
      this.list_to_show = [
        {
            'id': '',
            'destination' :'',
            'coefficient' : ''
        }
      ];
      this.show_list = true;
    }
  
    click_item(val)
    {
          for (let i = 0 ; i < this.list_original.length; i++)
          {
              if (this.list_to_show[val].destination.toUpperCase() === this.list_original[i].destination.toUpperCase()) {
                  this.selected_index = i;

                  //print the selected destination
                  this.searchQuery = this.list_to_show[val].destination;

                  // set the destinatination to be search
                  this.destination_to_be_search  = this.list_to_show[val];

                  break;
              }
          }
          this.show_list = false;
    }
  
    change_query(query)
    {
    
              let k = 0;
              this. list_to_show = [
                {
                    'id': '',
                    'destination' :'',
                    'coefficient' : ''
                }
              ];
              for (let i = 0 ; i < this.list_original.length; i++)
              {
                  if (this.list_original[i].destination.toUpperCase().includes(query.toUpperCase()))
                  {
                      this.list_to_show[k] =  this.list_original[i];
                      k += 1;
                  }
              }
      
    }





}
