import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { DashboardPage } from './dashboard/dashboard.page';
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
    private statusBar: StatusBar
  ) {
    this.initializeApp();    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var ret=Storage.get({ key: 'accessToken' });
      console.log(ret);
      this.token=ret;
      if(ret===null)
      {
        // this.rootPage=HomePage;
      }
      else
      {
        // this.rootPage=DashboardPage;
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
