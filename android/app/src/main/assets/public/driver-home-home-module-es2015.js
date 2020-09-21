(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/home/home.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/home/home.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-item *ngIf=\"!isSearchbarOpened\">\r\n\r\n           <!-- menu icon -->\r\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n      <!-- title -->\r\n      <ion-title *ngIf=\"!isSearchbarOpened\" >{{ 'DASHBOARD.title' | translate }}</ion-title>\r\n\r\n   \r\n       <!-- search bar button -->\r\n       <ion-buttons slot=\"end\">\r\n          <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\r\n              <ion-icon color=\"primary\" name=\"search\"> </ion-icon>\r\n          </ion-button>\r\n      </ion-buttons>\r\n\r\n\r\n    </ion-item>\r\n\r\n<!-- Search Bar -->\r\n   <ion-searchbar *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\r\n\r\n     \r\n  </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n\r\n    \r\n<!-- Default Segment / Search for the car according to the type of reservation -->\r\n <!--   First main Search  -->\r\n\r\n    <ion-card  *ngIf=\"nbr==0\"> \r\n          \r\n       <label textWrap=\"true\" style=\"margin-bottom: 20%; margin-top: 20%;margin-left: 10%;color:white;\">  \r\n            {{\"DASHBOARD.empty_trip\" | translate}}\r\n        \r\n         </label> \r\n    \r\n     </ion-card>\r\n\r\n     \r\n     \r\n\r\n     <ion-card *ngFor=\"let item of filterData | filter:term ; index as i\">\r\n       <div  *ngIf=\"item.etape_location == 2 || item.etape_location == 4 \">\r\n        <!-- <img [src]=\"item?.photo[0]?.image\" /> -->\r\n        <ion-card-header>\r\n                 <!-- <ion-card-title >{{item.modele}}</ion-card-title> -->\r\n\r\n          <ion-card-subtitle>\r\n\r\n             \r\n              <!-- Car title -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.car\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{item.modele}}  </label>\r\n     \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n              <!-- Reservation Type -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 120px\"> {{ \"RESERVECAR.booking_type\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\"  *ngIf=\"item.type_location == 3\"> {{ \"RESERVECAR.airport_pick\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"item.type_location == 2\"> {{ \"RESERVECAR.per_hour\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"item.type_location == 1\"> {{ \"RESERVECAR.per_day\" | translate }}   </label>\r\n                \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n              <!-- Depart -->\r\n                <ion-item  *ngIf=\"item.type_location == 3\">\r\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.departure\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{ item.depart }}  </label>\r\n                \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n\r\n\r\n                <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{item.destination}}  </label>\r\n\r\n                    <!-- <ion-chip slot=\"end\"> Daoukro </ion-chip> -->\r\n                </ion-item>\r\n\r\n              \r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{item.date_debut}} </label>\r\n                </ion-item>\r\n                \r\n                <!-- Starting time -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.start_time\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{item.heure_debut}} </label>\r\n\r\n                    <!-- <ion-chip slot=\"end\"> 12 : 10 </ion-chip> -->\r\n                </ion-item>\r\n               \r\n\r\n                <!-- Client name -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\"  > {{ \"RESERVECAR.clientname\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{item.clientname}} </label>\r\n                    <!-- <ion-chip slot=\"end\"> Oumarou Toto </ion-chip> -->\r\n                </ion-item>\r\n\r\n               \r\n\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n               <!-- button view more and start the trip-->\r\n             <ion-button  *ngIf=\"item.etape_location == 2 \" style=\"margin-left:18%\" (click)=\"tripDetails(i)\" >\r\n                <ion-label>{{\"DASHBOARD.start_trip\" | translate }}</ion-label>\r\n               \r\n            </ion-button>\r\n               <!-- button end the trip -->\r\n             <ion-button  *ngIf=\"item.etape_location == 4 \" style=\"margin-left:18%\"  (click)=\"endTrip(i)\" >\r\n                <ion-label > {{\"DASHBOARD.end_trip\" | translate }}</ion-label>\r\n            </ion-button>\r\n               <!-- button View details-->\r\n             <ion-button  *ngIf=\"item.etape_location == 5 \" style=\"margin-left:30%\"   >\r\n                <ion-label *ngIf=\"item.etape_location == 5 \">{{\"DASHBOARD.btn_view_details\" | translate }}</ion-label>\r\n            </ion-button>\r\n\r\n      \r\n        </ion-card-content>\r\n         \r\n     </div>\r\n\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/driver/home/home-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/driver/home/home-routing.module.ts ***!
  \****************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/driver/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/driver/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/driver/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/driver/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/driver/home/home-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/driver/home/home.page.scss":
/*!********************************************!*\
  !*** ./src/app/driver/home/home.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nlabel {\n  font-size: 0.89em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpdmVyL2hvbWUvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxcZHJpdmVyXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZHJpdmVyL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFFSSxjQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUko7O0FEV0E7RUFFSSxpQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvZHJpdmVyL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgY29sb3I6IGJsYWNrOyBcclxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xyXG5cclxufVxyXG5cclxuaW9uLWNoaXBcclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn1cclxuXHJcbmxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTowLjg5ZW07XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg5ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/driver/home/home.page.ts":
/*!******************************************!*\
  !*** ./src/app/driver/home/home.page.ts ***!
  \******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");





//import * as moment from 'moment';
const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let HomePage = class HomePage {
    constructor(route, router, webService) {
        //language
        // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.route = route;
        this.router = router;
        this.webService = webService;
        this.nbr = 0;
        this.logo1 = '../assets/images/logo1.jpg';
        this.dataToSend = {
            "name": "",
            "alias": " "
        };
        this.dataSaveReturn = "";
        //////////////////////////////search barelements
        //////////////////////////////////////
        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [
            {
                "id": 0,
                "date_location": "",
                "date_debut": "",
                "date_fin": "",
                "heure_debut": "",
                "heure_fin": "",
                "montant": 0,
                "note_client": 0,
                "commentaire_client": "",
                "note_chauffeur": 0,
                "rapport_chauffeur": "",
                "client": 0,
                "clientname": "",
                "chauffeur": 0,
                "voiture": 0,
                "type_location": 0,
                "depart": 0,
                "depart_id": 0,
                "destination": 0,
                "destination_id": 0,
                "message": "",
                "photo": [{ "image": "" }],
                "modele": "",
                "etape_location": 0,
                "optionnel": [],
            }
        ];
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////// data for destination //////////////////////////////////////////////////
        this.rent_type = "hour";
        this.list_original = [];
        this.list_to_show = [];
        this.selected_index = -1;
        this.show_list = false;
        this.show = false;
        // date
        let date = new Date();
        var month, day;
        //today's date
        this.today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        if (date.getMonth() + 1 < 10) {
            month = "0" + (date.getMonth() + 1);
        }
        else {
            month = date.getMonth() + 1;
        }
        if (date.getDate() < 10) {
            day = "0" + date.getDate();
        }
        else {
            day = date.getDate();
        }
        this.today = date.getFullYear() + "-" + month + "-" + day;
        //maximum date
        var x = new Date().setDate(date.getDate() + 90);
        this.maxdate = new Date(x);
        if (this.maxdate.getMonth() + 1 < 10) {
            month = "0" + (this.maxdate.getMonth() + 1);
        }
        else {
            month = this.maxdate.getMonth() + 1;
        }
        if (this.maxdate.getDate() < 10) {
            day = "0" + this.maxdate.getDate();
        }
        else {
            day = this.maxdate.getDate();
        }
        this.maxdate = this.maxdate.getFullYear() + "-" + month + "-" + day;
        // console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 
        //receive data from
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = JSON.parse(params.special);
                //console.log("Complex :\n"+ this.data.reel +" + i "+ this.data.imag  )
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /////////////////////////////////////////////////
            //get token
            this.token = (yield Storage.get({ key: 'accessToken' })).value;
            //get user id
            this.userId = JSON.parse((yield Storage.get({ key: "user_infos" })).value).id;
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            //present loading
            this.webService.presentLoading();
            this.webService.getDriverRide(this.userId, this.token).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log("getting Rides : ",res);
                if (!res.detail) {
                    this.filterData = res;
                    for (let i = 0; i < res.length; i++) {
                        if (this.filterData[i].etape_location == 4 || this.filterData[i].etape_location == 2) {
                            this.nbr = this.nbr + 1;
                        }
                        //call the car according to the id 
                        this.webService.getCarDetails(res[i].voiture).subscribe(car => {
                            // console.log(car)
                            //pictures of car
                            this.filterData[i].photo = car.photo;
                            //modele
                            this.filterData[i].modele = car.modele.libelle;
                            //receive the res
                            this.filterData[i] = res[i];
                            this.filterData[i].heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
                            this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
                            this.filterData[i].heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];
                            this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
                            this.filterData[i].date_location = res[i].date_location.split("T")[0];
                            this.filterData[i].destination_id = res[i].destination;
                            this.filterData[i].depart_id = res[i].depart;
                            //get the client name
                            this.webService.getClient(res[i].client, this.token).subscribe(resp => {
                                //   console.log("client", resp);
                                this.filterData[i].clientname = resp.first_name + " " + resp.last_name;
                                //get destination
                                this.webService.getSingleDestination(res[i].destination).subscribe(dest => {
                                    //    console.log(dest);
                                    this.filterData[i].destination = dest.destination;
                                    if (res[i].depart > 0) {
                                        //get depart
                                        this.webService.getSingleDestination(res[i].depart).subscribe(dep => {
                                            //   console.log(dep);
                                            this.filterData[i].depart = dep.destination;
                                            this.list_original = this.filterData;
                                            //stop loader
                                            this.show = true;
                                            this.webService.stopLoading();
                                        });
                                        //end get depart
                                    }
                                });
                                //end get destination
                            });
                            //end get client name
                        });
                    }
                }
                else {
                    this.webService.stopLoading();
                    if (this.lang == "fr") {
                        alert("Aucun Trajet disponible !! ");
                    }
                    else {
                        alert("No Ride available !!  ");
                    }
                }
            }), error => {
                this.webService.stopLoading();
                if (this.lang == "fr") {
                    alert("Erreur Serveur !! ");
                }
                else {
                    alert("Server Error!! ");
                }
            });
        });
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // async getToken()
    //   {
    //     var ret=Storage.get({ key:'accessToken'});
    //     console.log((await ret).value);
    //   }
    //////////////////////////////////////////////////////
    //this method is used to print the details of a selected trip //////////////
    tripDetails(id) {
        console.log("selected : -> ", this.filterData[id].id);
        //call another page and fetch the details of the car
        //this.router.navigateByUrl("/trip-details")
        //call another page and fetch the details of the car
        this.router.navigate(['trip-details'], { queryParams: { id: this.filterData[id].id, prev: "/home" } });
    }
    //////////////////////////////////////////////////////
    //this method is used to print the details of a selected trip //////////////
    endTrip(id) {
        //console.log("selected : -> ", this.filterData[id].id);
        //call another page and fetch the details of the car
        //this.router.navigateByUrl("/trip-details")
        //call another page and fetch the details of the car
        this.router.navigate(['send-reports'], { queryParams: { id: this.filterData[id].id, prev: "/home" } });
    }
    //////////////method for destination search //////////////////
    /////////////////////////////////////////////////////
    onCancel(val) {
        this.show_list = false;
        this.list_to_show = [];
    }
    click_bar() {
        this.list_to_show = [];
        this.show_list = true;
    }
    click_item(val) {
        // for (let i = 0 ; i < this.list_original.length; i++)
        // {
        //     if (this.list_to_show[val].toUpperCase() === this.list_original[i].toUpperCase()) {
        //         this.selected_index = i;
        //         break;
        //     }
        // }
        // this.show_list = false;
    }
    change_query(query) {
        let k = 0;
        this.list_to_show = [];
        for (let i = 0; i < this.list_original.length; i++) {
            if (this.list_original[i].toUpperCase().includes(query.toUpperCase())) {
                this.list_to_show[k] = this.list_original[i];
                k += 1;
            }
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/driver/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=driver-home-home-module-es2015.js.map