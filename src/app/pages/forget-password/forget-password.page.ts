import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  btnClicked:boolean=false;
  constructor(private router:Router) { }
  
  ngOnInit() {
  }

  forgetPassword()
  {
    this.btnClicked=true;
    setTimeout( ()=>{
      this.btnClicked=false;
      }, 1000)
  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }

}
