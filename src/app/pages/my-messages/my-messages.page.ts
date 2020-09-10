import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';


const { Storage } = Plugins;

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.page.html',
  styleUrls: ['./my-messages.page.scss'],
})
export class MyMessagesPage implements OnInit {

  show = false;

  filterData = [
    {
      text:"", // title or designation of the car
      date: '',  // picture of the car
      //status : 1
      client : 1
     
    },
  ]

  token : any;
  userId : any;
  lang: string;


  constructor(private webservice : AppServiceService, private router : Router) { }

  async ngOnInit() {

    //start laoder
    this.webservice.presentLoading();
    //get token
    this.token =(await Storage.get({ key: 'accessToken' })).value;

    //get user id
    this.userId =JSON.parse( (await Storage.get({ key: "user_infos" })).value).id;
    //get Language
    this.lang = (await Storage.get({ key: 'SELECTED LANGUAGE' })).value;


    //get testimonial list
    this.webservice.getFeedbacks(this.userId,this.token).subscribe(res =>{

      if(res.detail)
      {
         if(this.lang=="fr")
         {
          alert("Aucun témoignage \n Retour à la page accueil");

         }else{
           alert("No testimony \ n Back Home Page")
         }

         this.router.navigateByUrl("/dashboard");

         
      }else{
        
           if(res.length == 0)
           {
                if(this.lang == "fr")
                {
                  alert("Votre Liste de Temoignage est vide !! ")
                }
                else
                {
                  alert(" Your Testimonial List is Empty !!");
                }
                
                //stop loader
                this.webservice.stopLoading();
      
                this.router.navigateByUrl("/dashboard");
             
           }
           else{
               this.filterData = res;
                     //stop loader
                 this.show = true
                 this.webservice.stopLoading();

           }

        
      }




    },error=>{
      this.webservice.stopLoading(); 
      
      if(this.lang =="fr")
      {
        alert("Erreur serveur !! ")
      }else{
        alert("Server Error !! ")

      }
      this.router.navigateByUrl("/dashboard");               

     });
    ///end get testimonial


     

  }

}
