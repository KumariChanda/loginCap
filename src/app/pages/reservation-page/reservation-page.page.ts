import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.page.html',
  styleUrls: ['./reservation-page.page.scss'],
})
export class ReservationPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //////////////////////////////////////////////////////////////
  ////back to home ///

  prev(){

    this.router.navigateByUrl("/dashboard")
  }

}
