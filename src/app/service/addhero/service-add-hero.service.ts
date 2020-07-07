import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';



const proxyurl = "https://cors-anywhere.herokuapp.com/";

const apiUrl = "http://othnieldona.pythonanywhere.com/myapi/heroes/"


@Injectable({
  providedIn: 'root'
})
export class ServiceAddHeroService {
  

  constructor(public http: HttpClient) { }

  SaveData(dataToSend, token){


    const httpOptions = {
      headers: new HttpHeaders
                      ({
                        'Content-Type' : 'application/json',
                        'Authorization': 'Token '+token
    
                      })
    
    }
    

   //return this.http.post(apiUrl, dataToSend,httpOptions);
   return this.http.post( proxyurl +apiUrl,dataToSend,httpOptions);
 
  }
}
