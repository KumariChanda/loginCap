import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ServiceChangeLangService } from '../../service/changeLanguage/service-change-lang.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  btnClicked:boolean=false;

  constructor(private router: Router,private languageService: ServiceChangeLangService) { 
    this.btnClicked=false;
  }

  ngOnInit() {
  }

  loginbtnCliced()
  {
    
    this.router.navigateByUrl("/home");
  }

  signupFun()
  {
    this.btnClicked=true;
    console.log("Signup cllicked!.");
  }

  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }
}
