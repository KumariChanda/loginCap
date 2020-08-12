import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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



  constructor(private router: Router, private route: ActivatedRoute) { 


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
         day = "0"+date.getDate();
       }else{
         day = date.getDate();
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

  ngOnInit() {
  }

  //////////////////////////////////////////////////////////////
  ////back to home ///

  prev(){

    this.router.navigateByUrl("/dashboard")
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
