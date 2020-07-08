import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { Router } from '@angular/router';
const { Storage } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage:DashboardPage;
  token;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //add this router for switching pages
    private router : Router
  ) {
    this.initializeApp();    
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      var ret=Storage.get({ key: 'accessToken' });

      this.token=(await ret).value;
      //console.log("checKing data from storage ",this.token,typeof(this.token));
      

      if(this.token=="null")
      {
        // call login page
        this.router.navigateByUrl('/home');

      }
      else
      {

        //call dashboard page
        this.router.navigateByUrl('/dashboard');

      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
