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

  public selected = ''; // selected language
  
  loading : any ;  // used for showing and hiding loading
  



  constructor( private http:HttpClient,private loadingCtrl:LoadingController, private translate: TranslateService) { }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// START : PRESENTATION LOADING ////////////////////////////////////////////////
        async presentLoading() {
          this.loading =  this.loadingCtrl.create({
            message: 'Loading',
          });
          (await this.loading).present();
        }

        // async stopLoading() {
        // // this.loading.dismissAll();
        // (await this.loading).dismissAll();
        // }

        async stopLoading() {
          // this.loading = false;
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

              let language = "en";
              //let language = this.translate.get;
              //console.log("my language :: ",language)
              //this.translate.setDefaultLang(language);
              //store the initial language in the storage
              // this.storage.get(LNG_KEY).then(val => {
              //   console.log("get initial Val", val)
              //   if(val){
              //     this.setLanguage(val);
              //     this.selected = val;
              //   }
              // }) ;

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
                    alert(this.selected)
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
////////////////////////////////// START : GET CARS ///////////////////////////////////////////////////////////////////////////////

           
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


        getCarClass(id): Observable<any> {

          return this.http.get(base_url+"marques/"+id, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError)
          );

        }




///////////////////////////////////// END : GET CARS PER CLASS////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



































}
