import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ServiceGetAllHeroService } from '../service/getAllhero/service-get-all-hero.service';
import { ServiceAddHeroService } from '../service/addhero/service-add-hero.service';


const { Storage } = Plugins;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  data: any;


  name: any;
  alias: any;
  datauser: any;
  token : any;

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
      seatNumber:'9 seats',  // number of seats of a car
      pricePerDay:'65000', // price per day
      title:'MERCEDEZ BENZ, VEHICULE FAMILIAL', // title or designation of the car
      picture : '../assets/images/car1.jpg'  // picture of the car
     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2016',  // model of the car
      seatNumber:'8 seats',  // number of seats of a car
      pricePerDay:'65000', // price per day
      title:'MERCEDEZ BENZ, MINI BUS METRIS', // title or designation of the car
      picture : '../assets/images/car2.jpg'  // picture of the car

     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2018',  // model of the car
      seatNumber:'5 seats',  // number of seats of a car
      pricePerDay:'90000', // price per day
      title:'MITSUBISHI , PAJERO SUV 4X4', // title or designation of the car
      picture : '../assets/images/car3.jpg'  // picture of the car

     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2019',  // model of the car
      seatNumber:'5 seats',  // number of seats of a car
      pricePerDay:'90000', // price per day
      title:'TOYOTA , Pick up 4X4 SUV', // title or designation of the car
      picture : '../assets/images/car4.jpg'  // picture of the car

     
    },
    {
      motorType:'Diesel',  // motor type
      model:'Model 2016',  // model of the car
      seatNumber:'5 seats',  // number of seats of a car
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
    public getAllApi : ServiceGetAllHeroService, public addApi: ServiceAddHeroService) {


    //receive data from
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);

        console.log("Complex :\n"+ this.data.reel +" + i "+ this.data.imag  )
      }
    });


   }

  ngOnInit() {

    this.getDataUser();

  }

//////////////////////////////////////////////////////
  async getDataUser(){
    await this.getAllApi.getDataUser()
      .subscribe(res => {
     //   console.log(res);
        this.datauser = res;
     //   console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }
///////////////////////////////////////////////////////


// async getToken()
//   {
//     var ret=Storage.get({ key:'accessToken'});
//     console.log((await ret).value);
//   }

  async SaveData(my_name,my_alias)
  {
     this.dataToSend['name'] = my_name ;
     this.dataToSend['alias'] = my_alias ;


     //getToken
     var res =Storage.get({ key:'accessToken'});
     
     this.token =(await res).value;
     //console.log(this.token);

     this.addApi.SaveData(this.dataToSend, this.token)
       .subscribe((dataReturnFromService)=>{

          // this.dataSaveReturn = JSON.stringify(dataReturnFromService);
          this.dataSaveReturn = "successful";
 

           this.getDataUser();
       },err => {
         this.dataSaveReturn = "failed";
         console.log(err);
       });

       this.name = "";
       this.alias = "";
  }

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
