import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform, MenuController } from '@ionic/angular';
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

  menuNavigatorLogin : any
  menuNavigatorWithoutLogin : any

  showSubmenu: boolean = false;

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }


  rootPage:DashboardPage;
  token;
  testingToken=123;
  profile='../assets/imgs/profile.png';
  defaultProfile='../assets/imgs/dummyProfile.jpg';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl:MenuController,
    //add this router for switching pages
    private router : Router
  ) {

    this.sideMenu();
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
       // this.router.navigateByUrl('/home');
        this.router.navigateByUrl('/dashboard');

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


   //this method is for side menu 
   sideMenu()
   {
   if(this.testingToken!=null)
   {
    this.menuNavigatorLogin =
    [
      {
        title : "Home",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "Profile",
        url   : "/profile",
        icon  : "person"
      },
      {
        title : "Car Fleet",
        icon  : "car",
        children :[

          {
            title : "Business Class",
            url   : "/profile",
            icon  : "person-outline"
          },
          {
            title : "Family Class",
            url   : "/profile",
            icon  : "person-outline"
          }
          
        ]
      },
      {
        title : "My Bookings",
        url   : "/my-bookings",
        icon  : "cart"
      },
      {
        title : "My Messages",
        url   : "/my-messages",
        icon  : "mail"
      },
      {
        title : "Contact Us",
        icon  : "call",
        children :[

          {
            title : "About Us",
            url   : "/about-us",
            icon  : "information-circle-outline"
          },
          
          {
            title : "Our Contacts",
            url   : "/our-contacts",
            icon  : "call-outline"
          },
          {
            title : "Send feedback",
            url   : "/send-feedbacks",
            icon  : "send-outline"
          },
          
        ]
      },
      {
        title : "Settings",
        icon  : "settings",
        children :[

          {
            title : "Language",
            url   : "/signup",
            icon  : "information-circle-outline"
          },
          
          {
            title : "Reset Password",
            url   : "/home",
            icon  : "call-outline"
          },
          
        ]
      },

    ]
   }
   else
   {
    this.menuNavigatorWithoutLogin =
    [
      {
        title : "Home",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "Car Fleet",
        icon  : "car",
        children :[

          {
            title : "Business Class",
            url   : "/profile",
            icon  : "person-outline"
          },
          {
            title : "Family Class",
            url   : "/profile",
            icon  : "person-outline"
          }
        ]
      },
      {
        title : "Contact Us",
        icon  : "call",
        children :[

          {
            title : "About Us",
            url   : "/about-us",
            icon  : "information-circle-outline"
          },
          
          {
            title : "Our Contacts",
            url   : "/our-contacts",
            icon  : "call-outline"
          },          
        ]
      },
      {
        title : "Settings",
        icon  : "settings",
        children :[

          {
            title : "Language",
            url   : "/signup",
            icon  : "information-circle-outline"
          },   
          {
            title : "Send feedback",
            url   : "/send-feedbacks",
            icon  : "send-outline"
          },       
        ]
      },

    ]

   }

   }



   openUserProfile(url){
    console.log('Open this URL: ',url);
  }

  openUserProfilePage()
  {
    //set token null
    
   // this.menuCtrl.toggle();
   // this.router.navigateByUrl("/profile");
  }

  login_signupPage()
  {
    this.menuCtrl.toggle();
    this.router.navigateByUrl("/signup");
  }

}
