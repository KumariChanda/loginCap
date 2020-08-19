import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Subscription } from 'rxjs';

const {Storage} = Plugins

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {

  //used to get the value of the token which represents if one user logged in or not 
  public token ;
   
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
 
//my car : this var will receive the car with all its details
car = {
    'modele' : ''
}


  subscription: Subscription;

 

  constructor( private router : Router, private route: ActivatedRoute, private webservice : AppServiceService) { 

       this.getCurrentToken();

       this.subscription = this.route.queryParams.subscribe((data) => {
        
        console.log("selected ->", typeof(data.id))

        this.webservice.getCarDetails(data.id).subscribe(res =>{

             this.car = res;
             console.log(res)
        })
   });

   

       
    
  }

  ngOnInit() {
  }

  //this is used for the auto slider
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }


  /////////////////////////////////////////
  //get current token
  async getCurrentToken() 
  {
      var ret=Storage.get({ key: 'accessToken' });
      this.token = (await ret).value;

      console.log("token   ", this.token)

   //  return (await ret).value;

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

  ////////////////////////////////////////////////////////////
  /// call the login page  ////////////////////////////

  goToLogin(){

    this.router.navigateByUrl("/login")


  }


}
