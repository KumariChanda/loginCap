import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';

import { ServiceChangeLangService } from '../service/changeLanguage/service-change-lang.service';
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


  name: any;
  alias: any;
  datauser: any;
  token : any;
  searchQuery:any;

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
      motorType:'Diesel',  // motor type
      model:'Model 2018',  // model of the car
      seatNumber:'9',  // number of seats of a car
      pricePerDay:'65000', // price per day
      title:'MERCEDEZ BENZ, VEHICULE FAMILIAL', // title or designation of the car
      picture : '../assets/images/car1.jpg'  // picture of the car
     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2016',  // model of the car
      seatNumber:'8',  // number of seats of a car
      pricePerDay:'65000', // price per day
      title:'MERCEDEZ BENZ, MINI BUS METRIS', // title or designation of the car
      picture : '../assets/images/car2.jpg'  // picture of the car

     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2018',  // model of the car
      seatNumber:'5',  // number of seats of a car
      pricePerDay:'90000', // price per day
      title:'MITSUBISHI , PAJERO SUV 4X4', // title or designation of the car
      picture : '../assets/images/car3.jpg'  // picture of the car

     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2019',  // model of the car
      seatNumber:'5',  // number of seats of a car
      pricePerDay:'90000', // price per day
      title:'TOYOTA , Pick up 4X4 SUV', // title or designation of the car
      picture : '../assets/images/car4.jpg'  // picture of the car

     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2016',  // model of the car
      seatNumber:'5',  // number of seats of a car
      pricePerDay:'75000 ', // price per day
      title:'VOLKSWAGEN , CITADINE PSSAT', // title or designation of the car
      picture : '../assets/images/car5.jpg'  // picture of the car

     
    },
  ]

  //////////////////////////////////////////////////////////////////////
  ////////////data for destination
  rent_type : any ="hour";
  list_original = ['item 1','item 2','item 3','item 4'];
  list_to_show = [];
  selected_index = -1;
  show_list = false;

  


  constructor(private route: ActivatedRoute, private router: Router, 
    private languageService: ServiceChangeLangService) {


      //language
     // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

        // date
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




    //receive data from
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);

        console.log("Complex :\n"+ this.data.reel +" + i "+ this.data.imag  )

      }
    });


   }

  ngOnInit() {


  }

//////////////////////////////////////////////////////

///////////////////////////////////////////////////////


// async getToken()
//   {
//     var ret=Storage.get({ key:'accessToken'});
//     console.log((await ret).value);
//   }


///////////////////////////////////////////////////
  logOut()
  {
    //call dashboard page and pass data 
    this.router.navigateByUrl("/home");

    // empty rhe token
     Storage.set({
      key: 'accessToken',
      value: null     
    });  
  }


  //////////////////////////////////////////////////////
  //this method is used to print the details of a selected car //////////////
  carDetails(carTitle){

    console.log("selected : -> ", carTitle);

    //call another page and fetch the details of the car
    this.router.navigateByUrl("/car-details")


  }



  //////////////method for destination search //////////////////
    /////////////////////////////////////////////////////
    onCancel(val) {
      this.show_list = false;
      this.list_to_show = [];
  
    }
  
    click_bar() {
      this.list_to_show = [];
      this.show_list = true;
    }
  
    click_item(val)
    {
          // for (let i = 0 ; i < this.list_original.length; i++)
          // {
          //     if (this.list_to_show[val].toUpperCase() === this.list_original[i].toUpperCase()) {
          //         this.selected_index = i;
          //         break;
          //     }
          // }
          // this.show_list = false;
    }
  
    change_query(query)
    {
    
              let k = 0;
              this.list_to_show = [];
              for (let i = 0 ; i < this.list_original.length; i++)
              {
                  if (this.list_original[i].toUpperCase().includes(query.toUpperCase()))
                  {
                      this.list_to_show[k] =  this.list_original[i];
                      k += 1;
                  }
              }
      
    }





}
