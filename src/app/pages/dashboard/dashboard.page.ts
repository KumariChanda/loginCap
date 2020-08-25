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

 //////////////Date////////////////////
public  today: any ;     // today's date 
public  maxdate : any;   // the maximum date of a date picker

/////////////////////////////////
  data: any;


  datauser: any;
  token : any;
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
  rent_type : any ="hour";
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

  constructor(private route: ActivatedRoute, private router: Router, 
    private webService: AppServiceService) {
      

      //language
     // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

        // date
         this.setDate();

  

   }

  ngOnInit() {
    /////////////////////////////////////////////////
   //get voitures list
   //present loading
    this.webService.presentLoading();
    this.webService.getVoitures().subscribe(async res=>{
    console.log("getting voitures : ",res); 
    if(res)
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

      ////////////////////////////////////////////////////////////////////////////   
      //get Destination list

      this.webService.getDestinations().subscribe(async res=>{
        console.log("getting Destinations : ",res); 
        if(res)
        {
            this.list_original = res;
            
        }

      //  console.log("res : ", this.list_original)
        this.webService.stopLoading();
        this.show = true;
      }); //// end get destinations
      ////////////////////////////////////////////////////////////////////
      

  


  });/// end get voitures
 ////////////////////////////////////////////////////

  }//end of ngOnInit

//////////////////////////////////////////////////////


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
  


  console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 



}
///////////////end set Date//////////////////////////////////////
//////////////////////////////////////////////////////


//this method is used to print the details of a selected car //////////////
  carDetails(carID){


    //call another page and fetch the details of the car
    this.router.navigate(['car-details'], {queryParams:{id: carID, prev : "/dashboard"} })


  }

//////////////////////end call carDetails///////////////////////////



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
