import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  data;
  loading;
  url="http://othnieldona.pythonanywhere.com/api/login";
 // url="http://othnieldona.pythonanywhere.com/myapi/api-token-auth/";

  constructor(private http:HttpClient,private loadingCtrl:LoadingController) { }


  postData(u,data):Observable<any>{
    return this.http.post(u,data,{
      headers:new HttpHeaders(
        {
          'Content-Type': 'application/json'
         })
        }).pipe(
          map((res)=>{
            return res;
          },
        ))
  }

  login(data)
  {
    // var url1=this.url;
    var url1="http://othnieldona.pythonanywhere.com/api/login";
    return this.postData(url1,data);
  }

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
 
  
    // this.loadingCtrl.getTop().then(loader => {
    //   if (loader) {
    //     loader.dismiss();
    //   }
    // });
  }




