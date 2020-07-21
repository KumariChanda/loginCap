import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ServiceGetAllHeroService } from '../service/getAllhero/service-get-all-hero.service';
import { ServiceAddHeroService } from '../service/addhero/service-add-hero.service';


const { Storage } = Plugins;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  data: any;


  name: any;
  alias: any;
  datauser: any;
  token : any;

  public dataToSend:any=
  {
    "name":"",
    "alias":" "
  };

  public dataSaveReturn: any = "";



  constructor(private route: ActivatedRoute, private router: Router, 
    public getAllApi : ServiceGetAllHeroService, public addApi: ServiceAddHeroService) {


    //receive data from
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);

        console.log("Complex :\n"+ this.data.reel +" + i "+ this.data.imag  )
      }
    });


   }

  ngOnInit() {

    this.getDataUser();

  }

//////////////////////////////////////////////////////
  async getDataUser(){
    await this.getAllApi.getDataUser()
      .subscribe(res => {
     //   console.log(res);
        this.datauser = res;
     //   console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }
///////////////////////////////////////////////////////


// async getToken()
//   {
//     var ret=Storage.get({ key:'accessToken'});
//     console.log((await ret).value);
//   }

  async SaveData(my_name,my_alias)
  {
     this.dataToSend['name'] = my_name ;
     this.dataToSend['alias'] = my_alias ;


     //getToken
     var res =Storage.get({ key:'accessToken'});
     
     this.token =(await res).value;
     //console.log(this.token);

     this.addApi.SaveData(this.dataToSend, this.token)
       .subscribe((dataReturnFromService)=>{

          // this.dataSaveReturn = JSON.stringify(dataReturnFromService);
          this.dataSaveReturn = "successful";
 

           this.getDataUser();
       },err => {
         this.dataSaveReturn = "failed";
         console.log(err);
       });

       this.name = "";
       this.alias = "";
  }

///////////////////////////////////////////////////
  logOut()
  {
    //call dashboard page and pass data 
    this.router.navigateByUrl("/home");

    // empty rhe token
     Storage.set({
      key: 'accessToken',
      value: null     
    });  
  }


}
