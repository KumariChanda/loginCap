import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppServiceService } from 'src/app/service/appService/app-service.service';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';


const { Storage } = Plugins;
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage



@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.page.html',
  styleUrls: ['./reservation-page.page.scss'],
})
export class ReservationPagePage implements OnInit {

 //////////////Date////////////////////
 public  today: any ;     // today's date 
 public  maxdate : any;   // the maximum date of a date picker
 
 /////////////////////////////////
 //////////////////////////////////////////////////////////////////////
  ////////////data for destination////////////////////////
  searchQuery:any;
  destination_to_be_search : any;
  list_original = [
    {
        'id': '',
        'destination' :'',
        'coefficient' : ''
    }
  ];
  list_to_show = [
    {
        'id': '',
        'destination' :'',
        'coefficient' : ''
    }
  ];
  selected_index = -1;
  show_list = false;
  coef : any //coefficient de reservation
///////////////////////end data for destination search ///////////////////
  


//////////////////////////////////////////////////

//my car : this var will receive the car with all its details
car = {
  'id' : '',
  'modele' : '',
  'per_day' : 0,
  'per_hour' : 0,
  'airport' : 0
}

////////option values
option : any ;

subscription: Subscription;

  //car ID
  carID ="" 
  //prev page
  page_prev ="" 
  /////////////////////////////////////
   ////var data to be sent //////////
   rent_type : any ="hour";
   destination : any;
   price : any;
   start_date : string;
   start_time : string;
   end_date : string;
   end_time : string;
   depart_venue : string;
   message : string;
  

   ////////////////////////////////////////////////////////

   
   //this is the object we have to send to the API
   dataToSend = {
      "date_location": "",
      "date_debut": "",
      "date_fin": "",
      //"heure_debut": "",
      //"heure_fin": "",
      "montant": 0,
      "note_client": 0,
      "commentaire_client": "",
      "note_chauffeur": 0,
      "rapport_chauffeur": "",
      "client": 0,
      "chauffeur": 1,
      "voiture": 0,
      "type_location": 1,
      "destination": 0,
      "etape_location": 1,
      //"lieu_depart": "",
      "optionnel": [
        0
      ]
    
   }//end of object to send
   ///////////////////////////////

   token : any

/////////////////////////////////////////////////////
   show = false; //is to show page content
 


  constructor( private router : Router, private route: ActivatedRoute, 
                private webservice : AppServiceService,
                public alertController: AlertController) { 

      // date
      this.setDate();
      
  }

  ngOnInit() {

        // //present loading
        this.webservice.presentLoading();

        ////////////////////////////////////////////////////////////////
        ///////////////receive car id/////////////////////////////////////////////////
        this.subscription = this.route.queryParams.subscribe((data) => {
                
              console.log("selected ->", typeof(data.id))

            //set the prev page
            this.page_prev = data.prev
            //set the Car ID 
            this.carID = data.id


               ////////////////////////////////////////////////////////////////////////////   
      //get Destination list

      this.webservice.getDestinations().subscribe(async res=>{
            console.log("getting Destinations : ",res); 
            if(res)
            {
                this.list_original = res;
                
            }


        ////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////Start : Get Optionnels/////////////////////////////////////////////////
                this.webservice.getOption().subscribe(resp =>{

                  this.option = resp;
                  console.log(resp)

                ///////////////////////////////////////////////////////////////////////////////////////////
                //////////////////Start : Get Car details/////////////////////////////////////////////////
                  this.webservice.getCarDetails(data.id).subscribe(res =>{

                      this.car = res;

                    // get the differents pice of the car
                    this.webservice.getPriceCar(data.id).subscribe( resp =>{

                      this.car.per_day = resp[0].prix;
                      this.car.per_hour = resp[1].prix;
                      this.car.airport = resp[2].prix;

                      //stop loading
                    this.webservice.stopLoading();
                      this.show = true;

                    }); //end get prices


                      console.log(res)
                  }) ;
                //////////////////Stop : Get Car details//////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////
                
                              
                  }) ;
        //////////////////////////Stop : Get  Optionnels//////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////
       
              }); //// end get destinations
        ////////////////////////////////////////////////////////////////////
            

        });

    }


////////////////////////////////////////////////////////////////////////////////    
    setDate()
    {
      let date : Date = new Date();
      var month, day

       ///////////////////////today's date or reservation date //////////////////////////
       this.dataToSend.date_location = date.toISOString();

      //today's date
      this.today = date.getFullYear() +"-"+ (date.getMonth()+1) + "-"+date.getDate();
    
         if(date.getMonth()+1 <10)
         {
           month = "0"+(date.getMonth()+1)
         }else{
           month = date.getMonth()+1
         }
    
         if(date.getDate() <10)
         {
           day = "0"+date.getDate()
         }else{
           day = date.getDate()
         }
    
         this.today = date.getFullYear() +"-"+ month + "-"+day

         this.start_date = this.today;
         this.end_date = this.start_date;
         this.start_time = "09:00";
         this.end_time = "10:00";
    
    
      //maximum date
      var x =  new Date().setDate( date.getDate()+90 )
      this.maxdate = new Date(x)
    
      if(this.maxdate.getMonth()+1 <10)
      {
        month = "0"+(this.maxdate.getMonth()+1)
      }else{
         month = this.maxdate.getMonth()+1
      }
    
      if(this.maxdate.getDate() <10)
      {
        day = "0"+this.maxdate.getDate()
      }else{
        day = this.maxdate.getDate()
      }
    
      this.maxdate = this.maxdate.getFullYear() +"-"+ month + "-"+day
      
    
    
      console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 
    
    
    
    } 

  //////////////////////////////////////////////////////////////
  ////back to prev ///

  prev(){

    //call another page and make the reservation of the car
    this.router.navigate(['car-details'], {queryParams:{id: this.carID, prev : this.page_prev }})
  }



////////////////////////////////////////////////////////////////////////
/////////////////Submit reservation///////////////////////////////////////////////////////
    async submit(id)
    {

        //check if destination is null
        if(this.destination)
        {


          //////////////////////////car id ///////////////////////////////////////////////
            this.dataToSend.voiture = id;   

            console.log("id : ",id,"\n coef : ",this.coef)
        
          /////////////////////////////////user id ///////////////////////////////////////////////  
      
             var ret =JSON.parse( (await Storage.get({ key: "user_infos" })).value);
            // console.log("user : ", ret);
             this.dataToSend.client = ret.id;
        
          //////////////////////////////get token storage////////////////////////////////////////
            this.token =(await Storage.get({ key: 'accessToken' })).value;
            console.log("Token : ", this.token);

            /////////////////// set start date /////////////////////////////////////////////////////
            //this.dataToSend.date_debut = this.start_date
            this.start_date = this.start_date.split("T")[0]  ;     
            this.dataToSend.date_debut = this.start_date + "T"+this.start_time+":44.625Z" ;     
            //////////////////// set start hour /////////////////////////////////////////////////////
          // this.dataToSend.heure_debut = this.start_time;     
        

          ///////////////////////////////////////////////////////////////////////////////////////////
          if(this.rent_type =="hour")
          {
            ///////set type rent to hour id 
            this.dataToSend.type_location = 1;
            /////////////////// set end hour /////////////////////////////////////////////////////
          //this.dataToSend.heure_fin = this.end_time;
            /////// set the end date to "";
            this.dataToSend.date_fin = this.start_date+"T"+this.end_time+":44.625Z" ; 
            //this.dataToSend.date_fin = ""+ " "+this.end_time;
            /////// set depart venue  (for airoort type)
            //this.dataToSend.lieu_depart = "";

            this.price =   this.car.per_hour * (1+ this.coef  )
            
          }
          else if(this.rent_type =="day")
          {

            ///////set type rent to day id 
            this.dataToSend.type_location = 2;
            //////////////////////set end date ///////////////////////////////////////////////////////
            // this.dataToSend.date_fin = this.end_date
            this.end_date = this.end_date.split("T")[0] ;
            this.dataToSend.date_fin = this.end_date+"T"+this.end_time+":44.625Z" ;
            /////////////////// set end hour /////////////////////////////////////////////////////
            // this.dataToSend.heure_fin = this.end_time;
            /////// set depart venue 
            //this.dataToSend.lieu_depart = "";

            this.price = this.car.per_day * (1+ this.coef) 

          }
          else if(this.rent_type =="airport")
          {
            ///////set type rent to airport id 
            this.dataToSend.type_location = 3;
            this.dataToSend.date_fin = this.start_date+"T"+this.start_time+":44.625Z" 
            /// set end time /////////////////////////
            this.dataToSend.date_fin = ""+ " "+this.end_time+"T"+this.start_time+":44.625Z";
            //////////////////////set departure venue ///////////////////////////////////////////////////////
            //this.dataToSend.lieu_depart = this.depart_venue;

            this.price = this.car.airport * (1+ this.coef) 

          }
          ///////////////////////////////////////////////////////////////////////////////////////////////////
        

          //////////////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////get the selected option and add price /////////////////////////////////////
          var index = 0 ;
          for(let i=0 ; i<this.option.length ; i++)
          {
              if(this.option[i].checked)
              {
                ////////////////////////////////////////////////////////////////////
                  if(this.rent_type =="hour")
                  {
                    console.log("price : ",typeof(this.price),"\n option price : ", typeof(this.option[i].prix))
                    
                    this.price = parseFloat(this.price) + this.option[i].prix;
                    //add the optionnel id into the dataTosend field array
                    this.dataToSend.optionnel[index] = this.option[i].id;
                    index = index+1;
                  
                  }
                  else if(this.rent_type =="day")
                  {
                    this.price = this.price + this.option[i].prix;
                    //add the optionnel id into the dataTosend field array
                    this.dataToSend.optionnel[index] = this.option[i].id;
                    index = index+1;

                  }
                  else if(this.rent_type =="airport")
                  {
                    this.price =  this.price + this.option[i].prix;
                    //add the optionnel id into the dataTosend field array
                    this.dataToSend.optionnel[index] = this.option[i].id;
                    index = index+1;
            

                  }
                  //////////////////////////////////////////////////////////////
                
                  console.log(this.option[i]);
              }
          }

          //////////////////set destination ////////////////////////////////////////////
          this.dataToSend.destination = this.destination

          /////////////////////set price ///////////////////////////////////////////////////
          this.dataToSend.montant = this.price;
          
          /////////////////////set commentaire client ///////////////////////////////////////////////////
          this.dataToSend.commentaire_client = this.message;
          

          console.log("\n data to send : \n", this.dataToSend);

          // present alert
              this.presentAlertConfirm(this.price,this.start_date,this.end_date)
        }
        else
        {
          var lang = (await Storage.get({ key: LNG_KEY })).value;
          if(lang =="fr")
          {
            alert("Remplissez le champ Destination !");
          }else{
            alert("Fill the Destination Field !")
          }
            
        }

   
   
    }

    ////// present Confirmation alert///////////
    
      // present alert
      async presentAlertConfirm(price, start_date , end_date) {

        var lang = (await Storage.get({ key: LNG_KEY })).value;
        if(lang =="fr")
        {
          var text = "Prix Total : ";
        }else{
          var text = "Total Price : ";
        }

        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Validation!!',
          message: '<strong>'+text +'</strong>' + price + ' F CFA',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');

                 ////send the data to the API
                this.webservice.postReservation(this.token, this.dataToSend).subscribe(res=>{
                      console.log(res)
                      if(res)
                      {
                         console.log("done");
                         this.myAlert(0,lang);     


                      }

                },error =>{
                  console.log("error : \n",error); 
                     this.myAlert(1,lang);     
                 }
                );



              }
            }
          ]
        });
    
        await alert.present();
      } 

    //alert 2 method
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














////////////////change end time
change(type)
{
   ////per hour
   if(type == "hour")
   {
       // console.log("start : ",this.start_time,"\n type time :",typeof(this.start_time));
        var x = parseInt(this.start_time.split(":")[0]) + 1;

        if(x<10)
        {
          this.end_time = "0"+x+":00";
        }else{
          this.end_time = ""+x+":00";
        }
       
   }
   ////per day
   if(type == "day")
   {
       // console.log("start : ",this.start_date,"\n type time :",typeof(this.start_date));
        var dat = this.start_date.split("T")[0];
        var x = parseInt(dat.split("-")[2])+1;
        if(x<10)
        {
          this.end_date = ""+dat.split("-")[0]+"-"+dat.split("-")[1]+"-0"+x;
        }
        else
        {
          this.end_date = ""+dat.split("-")[0]+"-"+dat.split("-")[1]+"-"+x;
        }

        //console.log(this.end_date);
       
       
   }
}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////Search methods //////////////////////////////
  onCancel(val) {
    this.show_list = false;
    this.list_to_show = [
      {
          'id': '',
          'destination' :'',
          'coefficient' : ''
      }
    ];

  }

  click_bar() {
    this.list_to_show = [
      {
          'id': '',
          'destination' :'',
          'coefficient' : ''
      }
    ];
    this.show_list = true;
  }

  click_item(val, id,coef)
  {
       
        //set destination
        this.destination = id;
        //set coef 
        this.coef = parseFloat(coef);

        for (let i = 0 ; i < this.list_original.length; i++)
        {
            if (this.list_to_show[val].destination.toUpperCase() === this.list_original[i].destination.toUpperCase()) {
                this.selected_index = i;

                //print the selected destination
                this.searchQuery = this.list_to_show[val].destination;

                // set the destinatination to be search
                this.destination_to_be_search  = this.list_to_show[val];

                break;
            }
        }
        this.show_list = false;
  }

  change_query(query)
  {
  
            let k = 0;
            this. list_to_show = [
              {
                  'id': '',
                  'destination' :'',
                  'coefficient' : ''
              }
            ];
            for (let i = 0 ; i < this.list_original.length; i++)
            {
                if (this.list_original[i].destination.toUpperCase().includes(query.toUpperCase()))
                {
                    this.list_to_show[k] =  this.list_original[i];
                    k += 1;
                }
            }
    
  }




}
