import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppServiceService } from 'src/app/service/appService/app-service.service';


@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.page.html',
  styleUrls: ['./reservation-page.page.scss'],
})
export class ReservationPagePage implements OnInit {

 //////////////Date////////////////////
 public  today: any ;     // today's date 
 public  maxdate : any;   // the maximum date of a date picker
 
 /////////////////////////////////


  rent_type : any ="hour";
  list_original = ['item 1','item 2','item 3','item 4'];
  list_to_show = [];
  selected_index = -1;
  show_list = false;
//////////////////////////////////////////////////

//my car : this var will receive the car with all its details
car = {
  'modele' : '',
  'per_day' : '',
  'per_hour' : '',
  'airport' : ''
}

subscription: Subscription;

  //car ID
  carID ="" 
  //prev page
  page_prev ="" 
 


  constructor( private router : Router, private route: ActivatedRoute, 
                private webservice : AppServiceService) { 

      // date
      this.setDate();

  }

  ngOnInit() {

        //present loading
        this.webservice.presentLoading();

        this.subscription = this.route.queryParams.subscribe((data) => {
                
              console.log("selected ->", typeof(data.id))

            //set the prev page
            this.page_prev = data.prev
            //set the Car ID 
            this.carID = data.id

              this.webservice.getCarDetails(data.id).subscribe(res =>{

                  this.car = res;

                // get the differents pice of the car
                this.webservice.getPriceCar(data.id).subscribe( resp =>{

                  this.car.per_day = resp[0].prix;
                  this.car.per_hour = resp[1].prix;
                  this.car.airport = resp[2].prix;

                  //stop loading
                 this.webservice.stopLoading();
                }); //end get prices


                  console.log(res)
              })
        });

    }


////////////////////////////////////////////////////////////////////////////////    
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

  //////////////////////////////////////////////////////////////
  ////back to home ///

  prev(){

    //call another page and make the reservation of the car
    this.router.navigate(['car-details'], {queryParams:{id: this.carID, prev : this.page_prev }})
  }
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
