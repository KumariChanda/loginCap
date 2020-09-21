import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Storage } = Plugins;
@Component({
  selector: 'app-send-feedbacks',
  templateUrl: './send-feedbacks.page.html',
  styleUrls: ['./send-feedbacks.page.scss'],
})
export class SendFeedbacksPage implements OnInit {
  userInfo: any;

  feedback;
  btnClicked:boolean=false;
  lang ;

  //data to be sent
  dataToSend ={
    "client" : 0,
    "text": "string",
    "is_active": true

  }
  //token
  token : string;

  constructor(private webService: AppServiceService, private router : Router) { }
 
  
  async ngOnInit() {


       // get the value of token
        this.token =   (await Storage.get({key: 'accessToken'})).value;
        //get the current app language 
        this.lang =   (await Storage.get({key: 'SELECTED LANGUAGE'})).value;
         //get user infos and extract user id

         this.userInfo =JSON.parse( (await Storage.get({ key: "user_infos" })).value);

         // get the user id and set client into data to send
         this.dataToSend.client = this.userInfo.id;
      
       
  }

  save()
  {
    this.btnClicked=true;
      //console.log("btnClicked : ",this.btnClicked);     
      setTimeout( ()=>{
        this.btnClicked=false;
        // this.editableText=true;
        }, 1000)

        if(this.feedback && this.feedback!=="")
        {    
             // set text
            this.dataToSend.text = this.feedback;

          //call post feedbacks service
          this.webService.postFeedbacks(this.dataToSend,this.token).subscribe(resp =>{

            if(resp)
            {
             // console.log("done successfully");
            }
             
            this.myAlert(0,this.lang);

          },error=>{
              this.myAlert(1,this.lang);
          }
          )



                 
        }else{

            if(this.lang =="fr")
            {
              alert("Remplissez le champ message SVP! ");
            }else{
              alert("Please,fill the message field !")
            }
        }
  }


    //alert  method
    myAlert(id,lang)
    {
      if(id==0)
      {
         if(lang =="fr" )
         {
            alert( "Votre Requête a été envoyée avec succès !");
         }else{
           alert("Your Request has been sent successfully !");
          }
          this.router.navigateByUrl("/dashboard");
      }else{
 
         if(lang =="fr" )
         {
           alert( "Désolé, une erreur s'est produite, veuillez vérifier à nouveau votre saisie.");
         }else{
           alert("Sorry, an error has occurred please, check your entry again.");
         }
 
      }
    }

















}
