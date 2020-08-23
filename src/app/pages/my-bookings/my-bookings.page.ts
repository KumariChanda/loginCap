import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit {



  filterData = [
    {
      title:'MERCEDEZ BENZ, VEHICULE FAMILIAL', // title or designation of the car
      picture : '../assets/images/car1.jpg',  // picture of the car
      status : 0
     
    },
    {
      title:'MERCEDEZ BENZ, MINI BUS METRIS', // title or designation of the car
      picture : '../assets/images/car2.jpg',  // picture of the car
      status :1

     
    },
    {
   
      title:'MITSUBISHI , PAJERO SUV 4X4', // title or designation of the car
      picture : '../assets/images/car3.jpg',  // picture of the car
      status : 0
     
    },
    {
      title:'TOYOTA , Pick up 4X4 SUV', // title or designation of the car
      picture : '../assets/images/car4.jpg',  // picture of the car
      status : 2
     
    },
    {
      title:'VOLKSWAGEN , CITADINE PSSAT', // title or designation of the car
      picture : '../assets/images/car5.jpg',  // picture of the car
      status : 2
     
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
