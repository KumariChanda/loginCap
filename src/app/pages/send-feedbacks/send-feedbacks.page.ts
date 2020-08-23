import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-send-feedbacks',
  templateUrl: './send-feedbacks.page.html',
  styleUrls: ['./send-feedbacks.page.scss'],
})
export class SendFeedbacksPage implements OnInit {
  userInfo: any;

  constructor(private webService: AppServiceService) { }
  profile='../assets/imgs/dummyProfile.jpg';
  feedback;
  btnClicked:boolean=false;
  
  async ngOnInit() {
    // this.webService.presentLoading();
    this.userInfo =JSON.parse( (await Storage.get({ key: "user_infos" })).value);
    
    //get the current language of the app   
    this.webService.getCurrentLanguage().then(async val =>{

      // change the value of token
    // await Storage.set({
    //   key: 'accessToken',
    //   value: res.token           
    // });  

      // console.log("home  ",val)
        this.webService.sendMessage({'token': "mytoken", 'language': val })

         
          ///stop loading
          // this.webService.stopLoading();   


    });//end get app language
    ////////////////////////////////////////////////
  }

  save()
  {
    this.btnClicked=true;
      console.log("btnClicked : ",this.btnClicked);     
      setTimeout( ()=>{
        this.btnClicked=false;
        // this.editableText=true;
        }, 1000)
        if(this.feedback!=="")
        {
          
        }
  }

}
