import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  logo1 ='../assets/images/logo1.jpg';
  
  public dataToSend:any=
  {
    "name":"",
    "alias":" "
  };


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
      picture : '../assets/images/car1.jpg',  // picture of the car
      status : 0
     
    },
    
  ]

 


  constructor(private router: Router) { }

  ngOnInit() {
  }


   //////////////////////////////////////////////////////////////
  ////back to home ///

  prev(){

    this.router.navigateByUrl("/home")
  }

}
