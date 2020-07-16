import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders
                  ({
                    'Content-Type' : 'application/json',

                  })

}


const apiUrl = "http://othnieldona.pythonanywhere.com/myapi/heroes/"


@Injectable({
  providedIn: 'root'
})
export class ServiceGetAllHeroService {

  constructor(private http : HttpClient) { }

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

  getDataUser(): Observable<any> {

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }
}
