import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';


const { Storage } = Plugins;

const LNG_KEY = 'SELECTED LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class ServiceChangeLangService {

  public selected = '';

  constructor( private translate: TranslateService) { }


  async setInitialAppLanguage(){

    console.log("initialize App Language");

    let language = this.translate.getBrowserLang();
    //console.log("my language :: ",language)
    this.translate.setDefaultLang(language);
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

      if(val != 'null')
      {
        this.selected=(await ret).value;
        this.setLanguage(this.selected);
       // console.log("checKing data from storage ",this.selected,typeof(this.selected));
       
      }else{
        this.selected = language;
      }
      //console.log("storage ",this.selected,typeof(this.selected));

      return this.selected
    // console.log("selected language :: ",this.selected)


    
  }

  async getCurrentLanguage(){
   
    var ret=Storage.get({ key: LNG_KEY });
    var val = (await ret).value;
    return val;

  }
 

  setLanguage(setLang) {
    this.translate.use(setLang);
    this.selected = setLang;
    Storage.set({key:LNG_KEY, value:setLang}); 
    
  }

  //////////////////////////
  private subject = new Subject<any>();

  sendMessage(text){
  this.subject.next(text);
  }

  getMessage():Observable<any>{
  return this.subject.asObservable();
  }
  
  //////////////////////////

  sendLoggedToken(token){
  this.subject.next(token);
  }

  getLoggedToken():Observable<any>{
  return this.subject.asObservable();
  }

}
