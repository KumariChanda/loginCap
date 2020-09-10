(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-item *ngIf=\"!isSearchbarOpened\">\n\n           <!-- menu icon -->\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n      <!-- title -->\n      <ion-title  *ngIf=\"!isSearchbarOpened\" >{{ 'DASHBOARD.title' | translate }}</ion-title>\n\n      <!-- search bar button -->\n      <ion-buttons slot=\"end\">\n        <!-- <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" > -->\n            <ion-icon color=\"primary\" name=\"search\" *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\"> </ion-icon>\n         <!-- </ion-button> -->\n      </ion-buttons>\n      <!-- Search Bar -->\n\n    </ion-item>\n\n\n   <ion-searchbar color=\"primary\"  *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\n\n     \n  </ion-toolbar>\n    \n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n\n\n    \n<!-- Default Segment / Search for the car according to the type of reservation -->\n <!--   First main Search  -->\n\n  <ion-card  *ngIf=\"!isSearchbarOpened\">\n        <ion-card-header>\n\n         <ion-card-title style=\" margin-left:15%; margin-bottom: 3%;font-size:1.5em\"> {{ 'DASHBOARD.search_car' | translate }} </ion-card-title>\n              <!-- Label only -->\n          <ion-segment [(ngModel)]=\"search_type\">\n            <ion-segment-button  value=\"class\">\n              <ion-label>{{ 'DASHBOARD.per_class' | translate }} </ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"price\">\n              <ion-label>{{ 'DASHBOARD.per_price' | translate }}</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"other\">\n              <label  textWrap=\"true\" style=\"font-size:0.9em\">{{ 'DASHBOARD.other' | translate }}</label>\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-card-header>\n\n        <ion-card-content>\n             \n               <!-- ----------------------START search type = \"per class\"------------------------------- -->\n              <div *ngIf=\"search_type =='class'\">\n                <!-- start date -->\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchClass\"  >\n                   \n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.business_class\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"business\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.economic_class\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"economic\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.premium_class\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"premium\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.prestige_class\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"prestige\"></ion-radio>\n                    </ion-item>\n\n                  </ion-radio-group>\n\n                  <!-- button search -->\n\n                <ion-button style=\"margin-left:15px\" expand=\"block\"  (click)=\"openClass()\"> \n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n                      {{ 'DASHBOARD.btn_search' | translate }}\n                 </ion-button>\n                \n               </div>\n\n\n            <!-- ----------------------END search type = \"per class\"------------------------------------------------------------------ -->\n            \n               <!-- ----------------------START search type = \"per price\"------------------------------- -->\n              <div *ngIf=\"search_type =='price'\">\n                <!-- start date -->\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchPrice\">\n                   \n                    <ion-item>\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_sup\" | translate}} 50000 F CFA / {{\"DASHBOARD.day\" | translate}}</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"50000+\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_less\" | translate}} 50000 F CFA /  {{\"DASHBOARD.day\" | translate}}</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"50000-\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_sup\" | translate}} 5000 F CFA / {{\"DASHBOARD.hour\" | translate}}</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5000+\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <label  textWrap=\"true\">{{\"DASHBOARD.price_less\" | translate}} 5000 F CFA /  {{\"DASHBOARD.hour\" | translate}}</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5000-\"></ion-radio>\n                    </ion-item>\n\n                    \n\n                  </ion-radio-group>\n\n                  <!-- button search -->\n\n                <ion-button expand=\"block\"  (click)=\"openPrice()\"> \n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n                      {{ 'DASHBOARD.btn_search' | translate }}\n                 </ion-button>\n                \n               </div>\n\n\n            <!-- ----------------------END search type = \"per price\"------------------------------------------------------------------ -->\n            \n               <!-- ----------------------START search type = \"Other\"------------------------------- -->\n              <div *ngIf=\"search_type =='other'\">\n                <!-- start date -->\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchOther\">\n                   \n                    <ion-item>\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.place_sup\" | translate}} 5</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5p+\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.place_less\" | translate}} 5</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5p-\"></ion-radio>\n                    </ion-item>\n                   \n                    <ion-item>\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.baggage_sup\" | translate}} 5</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5b+\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.baggage_less\" | translate}} 5</label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5b-\"></ion-radio>\n                    </ion-item>\n\n                   \n                    \n\n                  </ion-radio-group>\n\n                  <!-- button search -->\n\n                <ion-button expand=\"block\" (click)=\"openOther()\"> \n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n                      {{ 'DASHBOARD.btn_search' | translate }}\n                 </ion-button>\n                \n               </div>\n\n\n            <!-- ----------------------END search type = \"Other\"------------------------------------------------------------------ -->\n            \n\n\n                \n\n        </ion-card-content>\n\n        <!-- List of cars -->\n      \n  </ion-card>\n\n     <ion-list-header  style=\" margin-left:23%\"> \n          <ion-chip *ngIf=\"!isSearchbarOpened\" > {{ 'DASHBOARD.our_vehicles' | translate }}  <br>\n             <ion-icon   name=\"caret-down-sharp\"></ion-icon>\n           </ion-chip >\n\n    \n     </ion-list-header>\n\n\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\n    \n        <div *ngFor=\"let photo of item.photo; let i = index \" > \n          \n          <img *ngIf=\"i== 0\"  [src]=\"photo.image\" />\n          \n        </div>\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n                <!-- type of motor -->\n                <ion-chip >\n                  <ion-icon name=\"car\"></ion-icon>\n                  <ion-label >{{item.type_caburant}}</ion-label>\n                </ion-chip>\n                <!-- Car price-->\n                <ion-chip >\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA / {{ 'DASHBOARD.day' | translate }}</ion-label>\n                </ion-chip> <br>\n                <!-- Number of Seats-->\n                <ion-chip >\n                  <ion-icon name=\"person\"></ion-icon>\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\n                </ion-chip>\n                <!-- car color -->\n              <ion-chip>\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \n              </ion-chip>\n\n          </ion-card-subtitle>\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n                        \n               <!-- More-->\n             <ion-chip style=\"margin-left:30%; background: white; color: black;\" (click)=\"carDetails(item.id)\" >\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\n                <ion-icon name=\"chevron-forward\"></ion-icon>\n            </ion-chip>\n\n      \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n \n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-radio {\n  background-color: white;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nimg {\n  height: 250px;\n  width: 100%;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVLLHVCQUFBO0FDSkw7O0FET0E7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBRUksY0FBQTtBQ05KOztBRFNBO0VBRUksWUFBQTtBQ1BKOztBRFNBO0VBRUksYUFBQTtFQUNBLFdBQUE7QUNQSjs7QURVQTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtLGlvbi1tZW51LWJ1dHRvblxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLXJhZGlvXG57XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2hpcCxpb24tYnV0dG9uXG57XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59XG5pbWdcbntcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG5pb24tdGl0bGVcbntcbiAgICBtYXJnaW4tbGVmdCA6IC0xMCU7XG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0sIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tcmFkaW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNoaXAsIGlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");





//import * as moment from 'moment';
const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let DashboardPage = class DashboardPage {
    constructor(route, router, webService) {
        //language
        // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.route = route;
        this.router = router;
        this.webService = webService;
        this.logo1 = '../assets/images/logo1.jpg';
        this.dataSaveReturn = "";
        //////////////////////////////search bar elements for cars ////////////
        //////////////////////////////////////////////////////////////////////////////
        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [
            {
                'modele': '',
                'id': '',
                'per_day': '',
                'per_hour': '',
                'airport': '',
                'color': ''
            }
        ];
        //////////////////////////////////////////////////////////////////////
        ////////////data for destination////////////////////////
        this.search_type = "class";
        this.list_original = [
            {
                'id': '',
                'destination': '',
                'coefficient': ''
            }
        ];
        this.list_to_show = [
            {
                'id': '',
                'destination': '',
                'coefficient': ''
            }
        ];
        this.selected_index = -1;
        this.show_list = false;
        ///////////////////////end data for destination search ///////////////////
        this.show = false; // used to show page content
        // date
        this.setDate();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /////////////////////////////////////////////////
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            ////////////////////////////////////////////
            //get voitures list
            //present loading
            this.webService.presentLoading();
            this.webService.getVoitures().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("getting voitures : ", res);
                if (!res.details) {
                    if (res.length > 0) {
                        this.filterData = res;
                        ////get the different prices of every car
                        for (let i = 0; i < this.filterData.length; i++) {
                            this.webService.getPriceCar(this.filterData[i].id).subscribe(resp => {
                                this.filterData[i].per_day = resp[0].prix;
                                //  this.filterData[i].per_hour = resp[1].prix;
                                //  this.filterData[i].airport = resp[2].prix;
                            });
                        } /////end get the different price of each car
                    }
                    else {
                        //no  cars
                        if (this.lang == "fr") {
                            alert("Aucune Voiture Disponible !!! ");
                        }
                        else {
                            alert("No Car Available !!! ");
                        }
                    }
                }
                else {
                    //no  cars
                    if (this.lang == "fr") {
                        alert("Oops une erreur !!! ");
                    }
                    else {
                        alert("Oops an Error !!! ");
                    }
                }
                ////////////////////////////////////////////////////////////////////////////   
                //get Destination list
                this.webService.getDestinations().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log("getting Destinations : ", res);
                    if (!res.details) {
                        if (res.length > 0) {
                            this.list_original = res;
                        }
                        else {
                            //no  cars
                            if (this.lang == "fr") {
                                alert("Aucune Destination Disponible !!! ");
                            }
                            else {
                                alert("No Destination Available !!! ");
                            }
                        }
                    }
                    else {
                        //no  cars
                        if (this.lang == "fr") {
                            alert("Oops une erreur !!! ");
                        }
                        else {
                            alert("Oops an Error !!! ");
                        }
                    }
                    //  console.log("res : ", this.list_original)
                    this.webService.stopLoading();
                    this.show = true;
                }), error => {
                    this.webService.stopLoading();
                    if (this.lang == "fr") {
                        alert("Erreur serveur !! ");
                    }
                    else {
                        alert("Server error !! ");
                    }
                    //this.router.navigateByUrl("/login");               
                }); //// end get destinations
                ////////////////////////////////////////////////////////////////////
            }), error => {
                this.webService.stopLoading();
                if (this.lang == "fr") {
                    alert("Erreur serveur !! ");
                }
                else {
                    alert("Server error !! ");
                }
                //this.router.navigateByUrl("/login");               
            }); /// end get voitures
            ////////////////////////////////////////////////////
        });
    } //end of ngOnInit
    //////////////////////////////////////////////////////
    setDate() {
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
        console.log("Today = " + this.today + " \n MAX DATE : " + this.maxdate);
    }
    ///////////////end set Date//////////////////////////////////////
    //////////////////////////////////////////////////////
    //this method is used to print the details of a selected car //////////////
    carDetails(carID) {
        //call another page and fetch the details of the car
        this.router.navigate(['car-details'], { queryParams: { id: carID, prev: "/dashboard" } });
    }
    //////////////////////end call carDetails///////////////////////////
    //////////////// search class /////////////////////
    openClass() {
        console.log(this.searchClass);
        if (this.searchClass == 'business') {
            this.router.navigateByUrl("/business-class");
        }
        else if (this.searchClass == 'economic') {
            this.router.navigateByUrl("/economique");
        }
        else if (this.searchClass == 'premium') {
            this.router.navigateByUrl("/premium");
        }
        else if (this.searchClass == 'prestige') {
            this.router.navigateByUrl("/prestige");
        }
        else {
            //no  cars
            if (this.lang == "fr") {
                alert("Faites un choix SVP !!! ");
            }
            else {
                alert("Make a choice Please !!! ");
            }
        }
    }
    ////////////////  End search class ////////////////
    //////////////// search per price /////////////////////
    openPrice() {
        console.log(this.searchPrice);
        if (this.searchPrice == '50000+') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchPrice, type: "price" } });
        }
        else if (this.searchPrice == '50000-') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchPrice, type: "price" } });
        }
        else if (this.searchPrice == '5000+') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchPrice, type: "price" } });
        }
        else if (this.searchPrice == '5000-') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchPrice, type: "price" } });
        }
        else {
            //no  cars
            if (this.lang == "fr") {
                alert("Faites un choix SVP !!! ");
            }
            else {
                alert("Make a choice Please !!! ");
            }
        }
    }
    ////////////////  End search per price ////////////////
    //////////////// search per Other /////////////////////
    openOther() {
        console.log(this.searchOther);
        if (this.searchOther == '5p+') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchOther, type: "other" } });
        }
        else if (this.searchOther == '5p-') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchOther, type: "other" } });
        }
        else if (this.searchOther == '5b+') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchOther, type: "other" } });
        }
        else if (this.searchOther == '5b-') {
            this.router.navigate(['car-filter'], { queryParams: { id: this.searchOther, type: "other" } });
        }
        else {
            //no  cars
            if (this.lang == "fr") {
                alert("Faites un choix SVP !!! ");
            }
            else {
                alert("Make a choice Please !!! ");
            }
        }
    }
    ////////////////  End search per Other////////////////
    //////////////method for destination search //////////////////
    /////////////////////////////////////////////////////
    onCancel(val) {
        this.show_list = false;
        this.list_to_show = [
            {
                'id': '',
                'destination': '',
                'coefficient': ''
            }
        ];
    }
    click_bar() {
        this.list_to_show = [
            {
                'id': '',
                'destination': '',
                'coefficient': ''
            }
        ];
        this.show_list = true;
    }
    click_item(val) {
        for (let i = 0; i < this.list_original.length; i++) {
            if (this.list_to_show[val].destination.toUpperCase() === this.list_original[i].destination.toUpperCase()) {
                this.selected_index = i;
                //print the selected destination
                this.searchQuery = this.list_to_show[val].destination;
                // set the destinatination to be search
                this.destination_to_be_search = this.list_to_show[val];
                break;
            }
        }
        this.show_list = false;
    }
    change_query(query) {
        let k = 0;
        this.list_to_show = [
            {
                'id': '',
                'destination': '',
                'coefficient': ''
            }
        ];
        for (let i = 0; i < this.list_original.length; i++) {
            if (this.list_original[i].destination.toUpperCase().includes(query.toUpperCase())) {
                this.list_to_show[k] = this.list_original[i];
                k += 1;
            }
        }
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map