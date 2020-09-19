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
car : any =
 {
    'modele' : {
      'libelle':''
    },
    'per_day' : '',
    'per_hour' : '',
    'airport' : '',
    'photo':[{
      'image' :'',
    },],
    'type_caburant':'',
    'couleur':'',
    'passager':'',
    'bagage':'',
    'immatriculation':'',
    'description':'',
    'id':'',
    'accessoire ' :[
        {'libelle':''
        },],
}

/////////////////////////////////////////////////////
show = false; //is to show page content



  subscription: Subscription;

  //prev page
  page_prev ="" 
 

  constructor( private router : Router, private route: ActivatedRoute, private webservice : AppServiceService) {  

    
  }

  ngOnInit() {
    this.webservice.presentLoading();
    this.getCurrentToken();

    this.subscription = this.route.queryParams.subscribe((data) => {
     
     //console.log("selected ->", typeof(data.id));
      //receive the  prev page 
     this.page_prev = data.prev ;
     //get the details of the car

     //receive the  prev page 
     this.page_prev = data.prev ;
     //get the details of the car
     this.webservice.getCarDetails(data.id).subscribe(res =>{

          this.car = res;
         // console.log(res)

        // get the differents pice of the car
        this.webservice.getPriceCar(data.id).subscribe( resp =>{

          this.car.per_day = resp[0].prix;
          this.car.per_hour = resp[1].prix;
          this.car.airport = resp[2].prix;

          //stop loading
          this.webservice.stopLoading();
          //show the list
          this.show = true;


         }); //end get prices

          
      });  
    });
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

     // console.log("token   ", this.token)

   //  return (await ret).value;

  }

  //////////////////////////////////////////////////////////////
  ////back to home ///

  prev(){

    this.router.navigateByUrl(this.page_prev)
  }

  ////////////////////////////////////////////////////////////
  /// call the reservation page  ////////////////////////////

  goToReservation(carID){

   // this.router.navigateByUrl("/reservation-page")

    //console.log("car id", carID);
     //call another page and make the reservation of the car
     this.router.navigate(['reservation-page'], {queryParams:{id: carID,  prev : this.page_prev }})


  }

  ////////////////////////////////////////////////////////////
  /// call the login page  ////////////////////////////

  goToLogin(){

    this.router.navigateByUrl("/login")


  }


}
