import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable, throwError } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { map, catchError } from 'rxjs/operators';


const { Storage } = Plugins; // this used for storage 

const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage

  //proxy url
const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const base_url= "http://othnieldona.pythonanywhere.com/api/";
  // basic api url
  const base_url= proxyurl+"http://othnieldona.pythonanywhere.com/api/";
 
  //header used for API URL
  const httpOptions = {
    headers: new HttpHeaders
                    ({
                      'Content-Type' : 'application/json',
  
                    })
  
  }
  


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

    // basic api url
 base_url= "http://othnieldona.pythonanywhere.com/api";

  public selected = ''; // selected language
  
  loading : any ;  // used for showing and hiding loading
  



  constructor( private http:HttpClient,private loadingCtrl:LoadingController, private translate: TranslateService) { }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// START : PRESENTATION LOADING ////////////////////////////////////////////////
        async presentLoading() {
          console.log("loading starts");
          this.loading =  this.loadingCtrl.create({
            message: 'Fetching data',
          });
          (await this.loading).present();
        }

        // async stopLoading() {
        // // this.loading.dismissAll();
        // (await this.loading).dismissAll();
        // }

        async stopLoading() {
          // this.loading = false;
         console.log("loading stop");

         if(this.loading)
            this.loading = false;
            return await this.loadingCtrl.dismiss().then(() => console.log('loading dismissed'));
        }

//////////////////////////////////////// END : PRESENTATION LOADING//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////






  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// CHANGE OF LANGUAGE SERVICE //////////////////////////////////////////////////

            //set the initial app language
            async setInitialAppLanguage(){

              console.log("initialize App Language");

              let language = "fr";
              

                var ret=Storage.get({ key: LNG_KEY });
                var val = (await ret).value;
                console.log("data from storage ",val,typeof(val));

                if(val != null)
                {
                  this.selected=(await ret).value;
                  this.setLanguage(this.selected);
                // console.log("checKing data from storage ",this.selected,typeof(this.selected));
                
                }else{
                  this.selected = language;
                  
                }
                this.setLanguage(this.selected);
                //console.log("storage ",this.selected,typeof(this.selected));
                  //  alert(this.selected)
                return this.selected
              // console.log("selected language :: ",this.selected)


              
            }

            // get the current app language
            async getCurrentLanguage(){
            
              var ret=Storage.get({ key: LNG_KEY });
              var val = (await ret).value;
              return val;

            }
          
            //set language
            setLanguage(setLang) {
              this.translate.use(setLang);
              this.selected = setLang;
              Storage.set({key:LNG_KEY, value:setLang}); 
              
            }

            ///////////////////////////SEND DATA TO UPDATE THE MENU///////////////////////////////////////////////////////////////
            private subject = new Subject<any>();

            sendMessage(text){
              this.subject.next(text);

              return "sent";
            }

            getMessage():Observable<any>{
            return this.subject.asObservable();
            }
            
            /////////////////////////////END SEND DATA TO UPDATE THE MENU//////////////////////////////////////////////////////

  //////////////////////////////////// END CHANGE OF LANGUAGE SERVICE //////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////START :  EXTRACT DATA AND ERROR HANDLING //////////////////////////////////////////////////////////////////////////////////
              
      private handleError(error : HttpErrorResponse){

        if(error.error instanceof ErrorEvent)
        {
          console.error("An error occurred:", error.error.message)
        }else{

            console.error(
              `Backend returned code ${error.status}, ` +
              `Body was : ${error.error}`
            );

        }
        return throwError('Something bad happened; please try again later.');

    }

    private extractData(res: Response){
      let body = res;
      return body || { };
    }
  
  /////////////////////////////////STOP :  EXTRACT DATA AND ERROR HANDLING/////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////// START : LOGIN SERVICE API////////////////////////////////////////////////////
  

      postData(url,data):Observable<any>{
        console.log("data To Send : \n", url, data)

        return this.http.post(url,data,httpOptions
            ).pipe(
              map(this.extractData),
              catchError(this.handleError)
            )
      }

      login(data)
      {
        
        return this.postData( (base_url + "login/"),data);
      }

  
///////////////////////////////// END : LOGIN SERVICE API////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// START : SIGNUP SERVICE API////////////////////////////////////////////////////
  

      signup(data)
      {
        
        return this.postData( (base_url + "clients/"),data);
      }

  
///////////////////////////////// END : SIGNUP SERVICE API////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// START : GET DESTINATION ///////////////////////////////////////////////////////////////////////////////

           
    getDestinations(): Observable<any> {

      return this.http.get(base_url+"destinations", httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );

    }

///////////////////////////////////// END : GET DESTINATION////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// START : GET DESTINATION BY ID ///////////////////////////////////////////////////////////////////////////////

           
    getSingleDestination(id): Observable<any> {

      return this.http.get(base_url+"destinations/"+id, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );

    }

///////////////////////////////////// END : GET DESTINATION By ID////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// START : GET CARS ///////////////////////////////////////////////////////////////////////////////

           //voitures means cars
    getVoitures(): Observable<any> {

      return this.http.get(base_url+"voitures/", httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );

    }

    getCarDetails(id): Observable<any> {

      return this.http.get(base_url+"voitures/"+id, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );

    }

    getModelCar(id): Observable<any> {

      return this.http.get(base_url+"modeles/"+id, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );

    }
    getPriceCar(id): Observable<any> {

      return this.http.get(base_url+"couts/"+id, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );

    }



///////////////////////////////////// END : GET CARS////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////START : GET CARS PER CLASS /////////////////////////////////////////////////////////////////////////

        //Family, business, SUV class
        getCarClass(id): Observable<any> {

          return this.http.get(base_url+"marques/"+id, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError)
          );

        }




///////////////////////////////////// END : GET CARS PER CLASS////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : GET USER ////////////////////////////////////////////////////////////////////////

      getUserDetails(token,id,type): Observable<any> {

          console.log("is Driver : ", type);
          var myToken = 'Token '+token


          const httpOptions = {
            headers: new HttpHeaders
                            ({
                              'Content-Type' : 'application/json',
                              'Authorization': myToken
          
                            })
          
          }

          if(!type) //client
          {
            return this.http.get(base_url+"clients/"+id, httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );
          }
          else // driver
          {
            return this.http.get(base_url+"chauffeurs/"+id, httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );
          }
      }



///////////////////////////////////// END : GET CARS PER CLASS////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : POST TESTIMONIAL ////////////////////////////////////////////////////////////////////////

              
        // postfeedbacks(data)
        // {
           
        //   return this.postData( (base_url + "login/"),data);
        // }




///////////////////////////////////// END : POST TESTIMONIAL////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////STRAT : GET ABOUT US ////////////////////////////////////////////////////////////////////////

          getAboutUs(): Observable<any> {

            return this.http.get(base_url+"a_propos/", httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : GET ABOUT US////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : GET OUR TEAM ////////////////////////////////////////////////////////////////////////

          getTeam(): Observable<any> {

            return this.http.get(base_url+"equipe/", httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : GET OUR TEAM////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : GET OUR Contacts ////////////////////////////////////////////////////////////////////////

          getContacts(): Observable<any> {

            return this.http.get(base_url+"contact/", httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : GET OUR Contacts ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : GET Terms of usage ////////////////////////////////////////////////////////////////////////

          getTerms(): Observable<any> {

            return this.http.get(base_url+"condition/", httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : GET Terms of usage ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : GET Terms of usage ////////////////////////////////////////////////////////////////////////

          getConf(): Observable<any> {

            return this.http.get(base_url+"confidentialite/", httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : GET Terms of usage ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : GET Optionnels ////////////////////////////////////////////////////////////////////////

          getOption(): Observable<any> {

            return this.http.get(base_url+"optionnels/", httpOptions).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : GET Optionnels   ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : POST TESTIMONIAL ////////////////////////////////////////////////////////////////////////

              
        postFeedbacks(data,token)
        {
           
          return this.postData1( (base_url + "/temoignage/"),data,token);
        }




///////////////////////////////////// END : POST TESTIMONIAL////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : GET USER TESTIMONIAL ////////////////////////////////////////////////////////////////////////

              
        getFeedbacks(id,token) : Observable<any>
        {
            const httpOption = {
              headers: new HttpHeaders
                              ({
                                'Content-Type' : 'application/json',
                                'Authorization': 'Token '+ token
            
                              })
            
            }

           
            return this.http.get(base_url+"clients/"+id+"/temoignages", httpOption).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );
        }




///////////////////////////////////// END : GET USER TESTIMONIAL////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : POST RESERVATION  ////////////////////////////////////////////////////////////////////////
          
        postData1(url,data,token):Observable<any>{
          console.log("APP Service : data To Send : \n", url, data,token)


            const httpOption = {
              headers: new HttpHeaders
                              ({
                                'Content-Type' : 'application/json',
                                'Authorization': 'Token '+ token
            
                              })
            
            }

          return this.http.post(url,data,httpOption
              ).pipe(
                map(this.extractData),
                catchError(this.handleError)
              )
        }
           

        postReservation(token,data)
        {        
           return this.postData1( (base_url + "locations/"),data,token);
        }




///////////////////////////////////// END : POST RESERVATION////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////STRAT : Change Password  ////////////////////////////////////////////////////////////////////////
          
       

        changeUserPassword(id,token,data)
        {        
           return this.postData1( (base_url + "clients/"+id+"set_password/"),data,token);
        }



///////////////////////////////////// END : Change Password///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////STRAT : GET Client Reservation ////////////////////////////////////////////////////////////////////////

          getClientReservation(id,token): Observable<any> {

            const httpOption = {
              headers: new HttpHeaders
                              ({
                                'Content-Type' : 'application/json',
                                'Authorization': 'Token '+ token
            
                              })
            
            }


            return this.http.get(base_url+"clients/"+id+"/locations", httpOption).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : GET Client Reservation  ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////STRAT : EDIT CLIENT PROFILE ////////////////////////////////////////////////////////////////////////

          EditClientProfile(id,token,data): Observable<any> {

            const httpOption = {
              headers: new HttpHeaders
                              ({
                                'Content-Type' : 'application/json',
                                'Authorization': 'Token '+ token
            
                              })
            
            }


            return this.http.put(base_url+"clients/"+id+"/",data, httpOption).pipe(
              map(this.extractData),
              catchError(this.handleError)
            );

          }

///////////////////////////////////// END : EDIT CLIENT PROFILE  ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




































}
