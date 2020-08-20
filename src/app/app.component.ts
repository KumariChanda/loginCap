import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { Router } from '@angular/router';
import { ServiceChangeLangService } from './service/changeLanguage/service-change-lang.service';
//import {Storage} from '@ionic/storage'
import { Subscription } from 'rxjs';
import { SingletonService } from './service/singleton.service';
import { AppServiceService } from './service/appService/app-service.service';

const { Storage } = Plugins;
const LNG_KEY = 'SELECTED LANGUAGE';

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
  //testingToken=null;
  testingToken;
  profile='../assets/imgs/profile.png';
  defaultProfile='../assets/imgs/dummyProfile.jpg';

  /////
  subscription: Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl:MenuController,
    //add this router for switching pages
    private router : Router,
  
   // our webservice,
   private webService:AppServiceService
    
  ) {


    this.initializeApp(); 
      
   
    ///////////////////// after changing a language //////////////////////////////////
      
      this.subscription = this.webService.getMessage().subscribe( text => {

     //   console.log("//////////////// \ntext",text.language);
        this.sideMenu(text.language);
      
      })
    
  }

  initializeApp() {
    this.platform.ready().then(async () => {

       
      //token storage
      var ret=Storage.get({ key: 'accessToken' });
      
      this.testingToken=(await ret).value;
      console.log("checKing token from storage ",this.testingToken,typeof(this.testingToken));
      
      
     //check the token and call the appropriate page
      // if(this.token=="null")
      // {
      //   // call login page
      //  // this.router.navigateByUrl('/home');
      //   this.router.navigateByUrl('/dashboard');

      // }
      // else
      // {

      //   //call dashboard page
      //   this.router.navigateByUrl('/dashboard');

      // }

      //set the initial language of the app
      this.webService.setInitialAppLanguage().then(val =>{

        // console.log("result",val);
        this.sideMenu(val);
        }); 
        

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    
  }

  //get current token
  async getCurrentToken()
  {
      var ret=Storage.get({ key: 'accessToken' });
      //this.testingToken = (await ret).value;

     return (await ret).value;


  }

   //this method is for english side menu 
   sideMenu( lang)
   {
     //console.log("Side Menu");

     //check the language and print the appropriate menu
     //store the initial language in the storage
  
        this.getCurrentToken().then(data =>{

            this.testingToken = data;
        

         // console.log(" sidemenu token  ",this.testingToken);
                    
          if(lang=="en" )
          {
              if(this.testingToken!="null")
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
                        url   : "/business-class",
                        icon  : "aperture-outline"
                      },
                      {
                        title : "Family Class",
                        url   : "/family-class",
                        icon  : "aperture-outline"
                      },
                      {
                        title : "Class SUV",
                        url   : "/suv-class",
                        icon  : "aperture-outline"
                      },
                      // {
                      //   title : "Ordinary Class",
                      //   url   : "/profile",
                      //   icon  : "aperture-outline"
                      // }
                      
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
                        title : "App Language",
                        url   : "/seetings",
                        icon  : "information-circle-outline"
                      },
                      
                      {
                        title : "Change Password",
                        url   : "/change-password",
                        icon  : "lock-closed-outline"
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
                        url   : "/business-class",
                        icon  : "aperture-outline"
                      },
                      {
                        title : "Family Class",
                        url   : "/family-class",
                        icon  : "aperture-outline"
                      },
                      {
                        title : "Class SUV",
                        url   : "/suv-class",
                        icon  : "aperture-outline"
                      },
                      // {
                      //   title : "Ordinary Class",
                      //   url   : "/profile",
                      //   icon  : "aperture-outline"
                      // }
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
                        title : "App Language",
                        url   : "/seetings",
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
            //french side menu
            else if(lang=="fr")
            {
                if(this.testingToken!="null")
                {
                  this.menuNavigatorLogin =
                  [
                    {
                      title : "Accueil",
                      url   : "/dashboard",
                      icon  : "home"
                    },
                    {
                      title : "Mon Profil",
                      url   : "/profile",
                      icon  : "person"
                    },
                    {
                      title : "Flotte automobile",
                      icon  : "car",
                      children :[
              
                        {
                          title : "Business Class",
                          url   : "/business-class",
                          icon  : "aperture-outline"
                        },
                        {
                          title : "Family Class",
                          url   : "/family-class",
                          icon  : "aperture-outline"
                        },
                        {
                          title : "Class SUV",
                          url   : "/suv-class",
                          icon  : "aperture-outline"
                        },
                        // {
                        //   title : "Ordinary Class",
                        //   url   : "/profile",
                        //   icon  : "aperture-outline"
                        // }
                        
                      ]
                    },
                    {
                      title : "Mes reservations",
                      url   : "/my-bookings",
                      icon  : "cart"
                    },
                    {
                      title : "Mes Messages",
                      url   : "/my-messages",
                      icon  : "mail"
                    },
                    {
                      title : "Contactez-Nous",
                      icon  : "call",
                      children :[
              
                        {
                          title : "À propos",
                          url   : "/about-us",
                          icon  : "information-circle-outline"
                        },
                        
                        {
                          title : "Nos Contacts",
                          url   : "/our-contacts",
                          icon  : "call-outline"
                        },
                        {
                          title : "Envoyez Remarques",
                          url   : "/send-feedbacks",
                          icon  : "send-outline"
                        },
                        
                      ]
                    },
                    {
                      title : "Réglages",
                      icon  : "settings",
                      children :[
              
                        {
                          title : "Langue de l'application",
                          url   : "/seetings",
                          icon  : "information-circle-outline"
                        },
                        
                        {
                          title : "Réinitialiser Password",
                          url   : "/change-password",
                          icon  : "lock-closed-outline" 
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
                      title : "Accueil",
                      url   : "/dashboard",
                      icon  : "home"
                    },
                    {
                      title : "Flotte automobile",
                      icon  : "car",
                      children :[
              
                        {
                          title : "Business Class",
                          url   : "/business-class",
                          icon  : "aperture-outline"
                        },
                        {
                          title : "Family Class",
                          url   : "/family-class",
                          icon  : "aperture-outline"
                        },
                        {
                          title : "Class SUV",
                          url   : "/suv-class",
                          icon  : "aperture-outline"
                        },
                        // {
                        //   title : "Ordinary Class",
                        //   url   : "/profile",
                        //   icon  : "aperture-outline"
                        // }
                        
                      ]
                    },
                    {
                      title : "Contactez-Nous",
                      icon  : "call",
                      children :[
              
                        {
                          title : "À propos",
                          url   : "/about-us",
                          icon  : "information-circle-outline"
                        },
                        
                        {
                          title : "Nos Contacts",
                          url   : "/our-contacts",
                          icon  : "call-outline"
                        },
                        {
                          title : "Envoyez Remarques",
                          url   : "/send-feedbacks",
                          icon  : "send-outline"
                        },
                        
                      ]
                    },
                    {
                      title : "Réglages",
                      icon  : "settings",
                      children :[
              
                        {
                          title : "Langue de l'application",
                          url   : "/seetings",
                          icon  : "information-circle-outline"
                        },
                        
                        {
                          title : "envoyez Remarques",
                          url   : "/send-feedbacks",
                          icon  : "send-outline"
                        },  
                        
                      ]
                    },
              
                  ]
            
                }
            } 
      

        });

   }

  


   openUserProfile(url){
    console.log('Open this URL: ',url);
  }
//////////////////////////////////
  async logout()
  {
    await Storage.set({
      key: 'accessToken',
      value: "null"           
    });  

      this.webService.getCurrentLanguage().then(val =>{

      this.webService.sendMessage({'token': "mytoken", 'language': val })

   
    });

       //call dashboard page and pass data
       this.menuCtrl.toggle(); 
       this.router.navigateByUrl("/dashboard");
 

  }
///////////////////////////////////////////////
  login_signupPage()
  {
    this.menuCtrl.toggle();
    this.router.navigateByUrl("/login");
    
  }

  // logout()
  // {
  //   console.log("Logout");
  //   this.webService.presentLoading();
  //   this.testingToken=null;
  //   setTimeout(() => {
  //     this.subscription = this.languageservice.getMessage().subscribe(text => {
  //       this.sideMenu(text.language); 
  //       this.webService.stopLoading();    
  //     })
  //   }, 2000);
    
  // }

}
