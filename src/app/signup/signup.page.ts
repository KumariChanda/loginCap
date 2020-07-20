import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginbtnCliced()
  {
    this.router.navigateByUrl("/home");
  }

  signupFun()
  {
    console.log("Signup cllicked!.");
  }

}
