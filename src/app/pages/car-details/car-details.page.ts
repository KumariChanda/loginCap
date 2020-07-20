import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  //used to get the value of the token which represents if one user logged in or not 
  token = "null";
   
  //used for auomatic slider
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  
//dummy images of a car
  myImages = [

    '../assets/images/car1.jpg',
    '../assets/images/car2.jpg',
    '../assets/images/car3.jpg',
    '../assets/images/car4.jpg',
    '../assets/images/car5.jpg'
  ]

  //dummy accessories data

  myAccessory =
  [
    {
      name : "Climatisation",
      status : 'yes'
    },
    {
      name : "Système de freinage antiblocage",
      status : 'yes'
    },
    {
      name : "Direction assistée",
      status : 'no'
    },
    {
      name : "Vitres électriques",
      status : 'yes'
    },
    {
      name : "Lecteur CD",
      status : 'yes'
    },
    {
      name : "Sièges en cuir",
      status : 'yes'
    },
    {
      name : "Verrouillage central",
      status : 'yes'
    },
    {
      name : "Serrures électriques",
      status : 'yes'
    },
    {
      name : "Assistance au freinage",
      status : 'yes'
    },
    {
      name : "Airbag conducteur",
      status : 'yes'
    },
    {
      name : "Airbag passager",
      status : 'yes'
    },
    {
      name : "Capteur de collision",
      status : 'yes'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //this is used for the auto slider
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  //////////////////////////////////////////////////////////////
  ////back to home ///

  prev(){

    this.router.navigateByUrl("/dashboard")
  }

  ////////////////////////////////////////////////////////////
  /// call the reservation page  ////////////////////////////

  goToReservation(){

    this.router.navigateByUrl("/reservation-page")


  }


}