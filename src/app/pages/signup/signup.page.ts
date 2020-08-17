import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ServiceChangeLangService } from '../../service/changeLanguage/service-change-lang.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router,private languageService: ServiceChangeLangService) { }

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

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }
}
