import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.page.html',
  styleUrls: ['./reservation-page.page.scss'],
})
export class ReservationPagePage implements OnInit {



  // term = '';
  // filterData = ['item 1','item 2','item 3','item 4']

  list_original = ['item 1','item 2','item 3','item 4'];
  list_to_show = [];
  selected_index = -1;
  show_list = false;



  constructor(private router: Router, private route: ActivatedRoute) { }

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
