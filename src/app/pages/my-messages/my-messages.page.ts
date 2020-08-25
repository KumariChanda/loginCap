import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.page.html',
  styleUrls: ['./my-messages.page.scss'],
})
export class MyMessagesPage implements OnInit {
  filterData = [
    {
      text:"I had a lot of pleasure to benefit from the professionalism of NYOKAH, with them it's another story.", // title or designation of the car
      posting_date: '2020-02-08 11:20:31',  // picture of the car
      status : 1
     
    },
    {
      text:"I am very happy with the quality of service from Nyokah. I am surprised", // title or designation of the car
      posting_date: '2020-03-11 17:03:24',  // picture of the car
      status : 1

     
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
