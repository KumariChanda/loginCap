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
//  isSearchbarOpened;
 /////////////////////////////////
 //////////////////////////////////////////////////////////////////////
  ////////////data for destination////////////////////////
  searchQuery:any;
  searchQuery1:any;
  destination_to_be_search : any;
  depart_to_be_search : any;
  list_original = [
    {
        'id': '',
        'destination' :'',
        'coefficient' : ''
    }
  ];
  //for departure
  list_original1 = [
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
  
  //for departure
  list_to_show1 = [
    {
        'id': '',
        'destination' :'',
        'coefficient' : ''
    }
  ];
  selected_index = -1;
  show_list1 = false; // for destination

  show_list = false;
  coef : any //coefficient de reservation
  coef1 : any //coefficient de reservation
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
   depart_venue : any;
   message : string;

   min_retunDate : any;// min return date for reservation per day
   hourNbr = 0;  // coef of number of hour for reservation per hour

  

   ////////////////////////////////////////////////////////

   
   //this is the object we have to send to the API
   dataToSend = {
      "date_location": "",
      "date_debut": "",
      "date_fin": "",
      "montant": 0,
      "message": "",
      "client": 0,
      "voiture": 0,
      "type_location": 0,
      "destination": 0,
      "etape_location": 1,
      "depart" : null,
      "optionnel": []
    
   }//end of object to send
   ///////////////////////////////

   token : any

/////////////////////////////////////////////////////
   show = false; //is to show page content
  lang: string;
  customPickerOptions: { buttons: { text: string; handler: () => void; }[]; };
 


  constructor( private router : Router, private route: ActivatedRoute, 
                private webservice : AppServiceService,
                public alertController: AlertController) { 

      // date
      this.setDate();

      
  }

  async ngOnInit() {

    this.lang = (await Storage.get({ key: LNG_KEY })).value;

        // //present loading
        this.webservice.presentLoading();

        ////////////////////////////////////////////////////////////////
        ///////////////receive car id/////////////////////////////////////////////////
        this.subscription = this.route.queryParams.subscribe((data) => {
                
              //console.log("selected ->", typeof(data.id))

            //set the prev page
            this.page_prev = data.prev
            //set the Car ID 
            this.carID = data.id


               ////////////////////////////////////////////////////////////////////////////   
      //get Destination list

      this.webservice.getDestinations().subscribe(async res=>{
            //console.log("getting Destinations : ",res); 
            if(res)
            {
                this.list_original = res;
                this.list_original1 = res;
                
            }


        ////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////Start : Get Optionnels/////////////////////////////////////////////////
                this.webservice.getOption().subscribe(resp =>{

                  this.option = resp;
                  //console.log(resp)

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


                      //console.log(res)
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



       //set min date for return date reserv per day
    
       this.min_retunDate = new Date()
       this.min_retunDate.setDate(this.min_retunDate.getDate() + 1);

       this.min_retunDate = this.min_retunDate.toISOString();

      


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
      
    
    
     // console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 
    
    
    
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

            //console.log("id : ",id,"\n coef : ",this.coef)
        
          /////////////////////////////////user id ///////////////////////////////////////////////  
      
             var ret =JSON.parse( (await Storage.get({ key: "user_infos" })).value);
            // console.log("user : ", ret);
             this.dataToSend.client = ret.id;
        
          //////////////////////////////get token storage////////////////////////////////////////
            this.token =(await Storage.get({ key: 'accessToken' })).value;
           // console.log("Token : ", this.token);

            /////////////////// set start date /////////////////////////////////////////////////////
            //this.dataToSend.date_debut = this.start_date
            this.start_date = this.start_date.split("T")[0]  ;     
            this.dataToSend.date_debut = this.start_date + "T"+this.start_time+":44.625Z" ;     
            //////////////////// set start hour /////////////////////////////////////////////////////
          // this.dataToSend.heure_debut = this.start_time;     
        

          ///////////////////////////////////////////////////////////////////////////////////////////
          if(this.rent_type =="hour")
          {
            /////coef of the number of hour
            if(this.hourNbr >0)
            {

                ///////set type rent to hour id 
                this.dataToSend.type_location = 2;
                /////////////////// set end hour /////////////////////////////////////////////////////
                //this.dataToSend.heure_fin = this.end_time;
                /////// set the end date to "";
                this.dataToSend.date_fin = this.start_date+"T"+this.end_time+":44.625Z" ; 
                //this.dataToSend.date_fin = ""+ " "+this.end_time;
                /////// set depart venue  (for airoort type)
                //this.dataToSend.lieu_depart = "";
            
      
                  //////price with number of hour and destination coef included 
      
      
                  this.price =  (this.car.per_hour * (1+ this.coef  )) * this.hourNbr;
              
            }
            else
            {
                if(this.lang =="fr")
                {
                  alert("Entrez le nombre d'heure ! ( > 0) ");
                }else{
                  alert("Enter the number of Hour ! ( > 0) ")
                }
                return ;


            }
          
           
          }
          else if(this.rent_type =="day")
          {

             /////coef of the number of day
            // To set two dates to two variables 
            var date1 = new Date(this.start_date); 
            var date2 = new Date(this.end_date); 
              
            // To calculate the time difference of two dates 
            var Difference_In_Time = date2.getTime() - date1.getTime(); 
              
            // To calculate the no. of days between two dates 
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

            if(Difference_In_Days > 0)
            {

               ///////set type rent to day id 
            this.dataToSend.type_location = 1;
            //////////////////////set end date ///////////////////////////////////////////////////////
            // this.dataToSend.date_fin = this.end_date
            this.end_date = this.end_date.split("T")[0] ;
            this.dataToSend.date_fin = this.end_date+"T"+this.end_time+":44.625Z" ;
            /////////////////// set end hour /////////////////////////////////////////////////////
            // this.dataToSend.heure_fin = this.end_time;
            /////// set depart venue 
            //this.dataToSend.lieu_depart = "";

            this.price =( this.car.per_day * (1+ this.coef)) * Difference_In_Days; 


            }
            else{

              if(this.lang =="fr")
              {
                alert("Le Nombre de jour doit être > 0 ");
              }else{
                alert("Number of Day Should be > 0")
              }
              return ;
            }

          }
          else if(this.rent_type =="airport")
          {
             
               // console.log("Depar Id", this.depart_venue)
             if(this.depart_venue)
             {
               //check if depart != destination
               if(this.depart_venue != this.destination)
                {
                  //check if aeroport is selected 
                  if(this.depart_venue == 203 || this.destination == 203 )
                   {     
                        ///////////////////set depart//////////////////
                        this.dataToSend.depart = this.depart_venue;
                            ///////set type rent to airport id 
                        this.dataToSend.type_location = 3;
                        this.dataToSend.date_fin = this.start_date+"T"+this.start_time+":44.625Z" 
                        /// set end time /////////////////////////
                        this.dataToSend.date_fin = this.start_date+"T"+this.end_time+":44.625Z";
                        //////////////////////set departure venue ///////////////////////////////////////////////////////
                        //this.dataToSend.lieu_depart = this.depart_venue;
                        var c = (this.coef1 + this.coef)/2

                        this.price = (this.car.airport + this.car.airport * c);
                   }
                   else{

                    if(this.lang =="fr")
                    {
                      alert("Assurez-vous d'avoir choisi Aéroport comme départ ou destination.");
                    }else{
                      alert("Make sure you have chosen Aéroport either as departure or destination.")
                    }
                    return ;

                   }     
                }else{

                  if(this.lang =="fr")
                  {
                    alert("Désolé, le départ doit être différent de la destination.");
                  }else{
                    alert("Sorry, the departure must be different from the destination.")
                  }
                  return ;

                } 
             }
             else
             {
              if(this.lang =="fr")
              {
                alert("Choisissez un Lieu de depart !");
              }else{
                alert("Select a Departure venue !")
              }
              return ;
             }

            

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
                    //console.log("price : ",typeof(this.price),"\n option price : ", typeof(this.option[i].prix))
                    
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
                
                  //console.log(this.option[i]);
              }
          }

          //////////////////set destination ////////////////////////////////////////////
          this.dataToSend.destination = this.destination

          /////////////////////set price ///////////////////////////////////////////////////
          this.dataToSend.montant = this.price;
          
          /////////////////////set message///////////////////////////////////////////////////
          this.dataToSend.message = this.message;
          

          //console.log("\n data to send : \n", this.dataToSend);

          // present alert
              this.presentAlertConfirm(this.price,this.start_date,this.end_date)
        }
        else
        {
          if(this.lang =="fr")
          {
            alert("Choisissez une Destination !");
          }else{
            alert("Select one destination !")
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
          var textcancel = "Annuler ";
          var textok = "Valider ";
          
        }else{
          var text = "Total Price : ";
          var textcancel = "Cancel ";
          var textok = "OK ";
          
        }

        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Validation!!',
          message: '<strong>'+text +'</strong>' + price + ' F CFA',
          buttons: [
            {
              text: textcancel,
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                //console.log('Confirm Cancel: blah');
              }
            }, {
              text: textok,
              handler: () => {
                //console.log('Confirm Okay');
                  //preseent loader
                 this.webservice.presentLoading()    
                 ////send the data to the API
                this.webservice.postReservation(this.token, this.dataToSend).subscribe(res=>{
                      //console.log(res)
                      if(res)
                      {
                        this.webservice.stopLoading();
                        // console.log("done");
                         this.myAlert(0,lang);     


                      }

                },error =>{
                  
                  //stop loader
                  this.webservice.stopLoading();
                 // console.log("error : \n",error); 
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
        //  this.router.navigateByUrl("/dashboard");
        this.prev();
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
        var x = parseInt(this.start_time.split(":")[0]) + this.hourNbr;
        var y = parseInt(this.start_time.split(":")[1]) ;



        if(x<=23 && y <=59)
        {
            if(x<10)
            {
              if(y<10)
              {
                this.end_time = "0"+x+":0"+y;

              }
              else{
                this.end_time = "0"+x+":"+y;
              }
            }else{
              if(y<10)
              {
                this.end_time = ""+x+":0"+y;

              }
              else{
                this.end_time = ""+x+":"+y;
              }
            }
        }
        else
        {

            this.hourNbr = 0;

  
            if(this.lang == "fr")
            {
              alert("Désolé, l'heure de retour Max  est :  23 Hr : 59 min ");
            }
            else
            {
              alert("Sorry, the maximum return time is: 11 : 59 PM ");

            }
            
        }  
       
   }
   ////per day
   if(type == "day")
   {

      // Create new Date instance
      var date = new Date(this.start_date)

      // Add a day
      date.setDate(date.getDate() + 1);

      this.end_date = date.toISOString();

      this.min_retunDate = date.toISOString();
       
       
   }
}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////Search methods //////////////////////////////
  onCancel(val,i) {

    

    if(i==0)
    {
      this.depart_venue = null;

      this.show_list1 = false;
      this.list_to_show1 = [
        {
            'id': '',
            'destination' :'',
            'coefficient' : ''
        }
      ];
    }
    else
    {
      this.destination = null;
      this.show_list = false;
      this.list_to_show = [
        {
            'id': '',
            'destination' :'',
            'coefficient' : ''
        }
      ];
    }
  

   

  }

  click_bar(i) {


    if(i == 0)
    {
      this.list_to_show1 = [
        {
            'id': '',
            'destination' :'',
            'coefficient' : ''
        }
      ];
      this.show_list1 = true;
    }
    else
    {
      this.list_to_show = [
        {
            'id': '',
            'destination' :'',
            'coefficient' : ''
        }
      ];
      this.show_list = true;
    }
    
  }

  click_item(val, id,coef, type)   // here type is used to mention if it is departure or destination
  {                                // 0 for departure 1 - for destination 
      //this.depart_venue = null;
      //this.destination = null; 

        if(type==0)
        {
            //set departure
            this.depart_venue = id;
            //console.log("depart id :", this.depart_venue);

            //set coef 
            this.coef1 = parseFloat(coef);

          for (let i = 0 ; i < this.list_original1.length; i++)
          {
              if (this.list_to_show1[val].destination.toUpperCase() === this.list_original1[i].destination.toUpperCase()) {
                  this.selected_index = i;
                
                
                      //print the selected departure
                      this.searchQuery1 = this.list_to_show1[val].destination;
                
                  

                  // set the depart to be search
                  this.depart_to_be_search  = this.list_to_show1[val];

                  break;
              }
          }
          this.show_list1 = false;

            
        }
        else{
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
  }

  change_query(query,i)
  {
  
        if(i==0)
        {
          let k = 0;
          this. list_to_show1 = [
            {
                'id': '',
                'destination' :'',
                'coefficient' : ''
            }
          ];
          for (let i = 0 ; i < this.list_original1.length; i++)
          {
              if (this.list_original1[i].destination.toUpperCase().includes(query.toUpperCase()))
              {
                  this.list_to_show1[k] =  this.list_original1[i];
                  k += 1;
              }
          }

        }else{
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




}
