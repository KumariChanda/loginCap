(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-item *ngIf=\"!isSearchbarOpened\">\r\n\r\n           <!-- menu icon -->\r\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n      <!-- title -->\r\n      <ion-title  *ngIf=\"!isSearchbarOpened\" >{{ 'DASHBOARD.title' | translate }}</ion-title>\r\n\r\n      <!-- search bar button -->\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\r\n            <ion-icon color=\"primary\" name=\"search\" *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\"> </ion-icon>\r\n         </ion-button>\r\n      </ion-buttons>\r\n      <!-- Search Bar -->\r\n\r\n    </ion-item>\r\n\r\n\r\n   <ion-searchbar   *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\r\n\r\n     \r\n  </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n\r\n    \r\n<!-- Default Segment / Search for the car according to the type of reservation -->\r\n <!--   First main Search  -->\r\n\r\n  <ion-card  *ngIf=\"!isSearchbarOpened\">\r\n        <ion-card-header>\r\n\r\n         <ion-card-title style=\" margin-left:20%; margin-bottom: 3%;font-size:1.2em\"> {{ 'DASHBOARD.search_car' | translate }} </ion-card-title>\r\n              <!-- Label only -->\r\n          <ion-segment [(ngModel)]=\"search_type\">\r\n            <ion-segment-button  value=\"class\">\r\n              <ion-label>{{ 'DASHBOARD.per_class' | translate }} </ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"price\">\r\n              <ion-label>{{ 'DASHBOARD.per_price' | translate }}</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"other\">\r\n              <label  textWrap=\"true\" style=\"font-size:0.9em\">{{ 'DASHBOARD.other' | translate }}</label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n             \r\n               <!-- ----------------------START search type = \"per class\"------------------------------- -->\r\n              <div *ngIf=\"search_type =='class'\">\r\n                <!-- start date -->\r\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchClass\"  >\r\n                   \r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.business_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"business\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.economic_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"economic\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.premium_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"premium\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.prestige_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"prestige\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                  </ion-radio-group>\r\n\r\n                  <!-- button search -->\r\n\r\n                <ion-button style=\"margin-left:15px\" expand=\"block\"  (click)=\"openClass()\"> \r\n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n                      {{ 'DASHBOARD.btn_search' | translate }}\r\n                 </ion-button>\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------END search type = \"per class\"------------------------------------------------------------------ -->\r\n            \r\n               <!-- ----------------------START search type = \"per price\"------------------------------- -->\r\n              <div *ngIf=\"search_type =='price'\">\r\n                <!-- start date -->\r\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchPrice\">\r\n                   \r\n                    <ion-item>\r\n                      <label style=\"text-decoration : underline\" textWrap=\"true\"> {{\"DASHBOARD.per_day\" | translate}} </label>\r\n                      <!-- <ion-radio slot=\"end\" color=\"primary\" value=\"50000+\"></ion-radio> -->\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_sup_day\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"50000+\"></ion-radio>\r\n                    </ion-item>\r\n                     <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_less_day\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"50000-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n\r\n                         <!-- Hour  -->\r\n                    <ion-item>\r\n                      <label style=\"text-decoration : underline\"  textWrap=\"true\"> {{\"DASHBOARD.per_hour\" | translate}} </label>\r\n                      <!-- <ion-radio slot=\"end\" color=\"primary\" value=\"50000-\"></ion-radio> -->\r\n                    </ion-item>\r\n                   \r\n                    \r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_sup_hour\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\"  value=\"5000+\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\">{{\"DASHBOARD.price_less_hour\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5000-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    \r\n\r\n                  </ion-radio-group>\r\n\r\n                  <!-- button search -->\r\n\r\n                <ion-button expand=\"block\"  (click)=\"openPrice()\"> \r\n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n                      {{ 'DASHBOARD.btn_search' | translate }}\r\n                 </ion-button>\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------END search type = \"per price\"------------------------------------------------------------------ -->\r\n            \r\n               <!-- ----------------------START search type = \"Other\"------------------------------- -->\r\n              <div *ngIf=\"search_type =='other'\">\r\n                <!-- start date -->\r\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchOther\" >\r\n                   \r\n                     <!-- Seats Number -->\r\n                    <ion-item>\r\n                      <label style=\"text-decoration : underline\" textWrap=\"true\"> {{\"DASHBOARD.place_nbr\" | translate}} </label>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.place_sup\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5p+\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.place_less\" | translate}}</label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5p-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                      <!-- Baggage Number -->\r\n                    <ion-item>\r\n                      <label  style=\"text-decoration : underline\" textWrap=\"true\"> {{\"DASHBOARD.baggage_nbr\" | translate}} </label>\r\n                    </ion-item>\r\n                   \r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.baggage_sup\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5b+\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.baggage_less\" | translate}}</label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5b-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                   \r\n                    \r\n\r\n                  </ion-radio-group>\r\n\r\n                  <!-- button search -->\r\n\r\n                <ion-button expand=\"block\"  (click)=\"openOther()\"> \r\n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n                      {{ 'DASHBOARD.btn_search' | translate }}\r\n                 </ion-button>\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------END search type = \"Other\"------------------------------------------------------------------ -->\r\n            \r\n\r\n\r\n                \r\n\r\n        </ion-card-content>\r\n\r\n        <!-- List of cars -->\r\n      \r\n  </ion-card>\r\n\r\n     <ion-list-header  style=\" margin-left:23%\"> \r\n          <ion-chip *ngIf=\"!isSearchbarOpened\" > {{ 'DASHBOARD.our_vehicles' | translate }}  <br>\r\n             <ion-icon   name=\"caret-down-sharp\"></ion-icon>\r\n           </ion-chip >\r\n\r\n    \r\n     </ion-list-header>\r\n\r\n\r\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\r\n    \r\n        <div *ngFor=\"let photo of item.photo; let i = index \" > \r\n          \r\n          <img *ngIf=\"i== 0\"  [src]=\"photo.image\" />\r\n          \r\n        </div>\r\n        \r\n        <ion-card-header>\r\n                   \r\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\r\n\r\n\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- type of motor -->\r\n                <ion-chip >\r\n                  <ion-icon name=\"car\"></ion-icon>\r\n                  <ion-label >{{item.type_caburant}}</ion-label>\r\n                </ion-chip>\r\n                <!-- Car price-->\r\n                <ion-chip >\r\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\r\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA / {{ 'DASHBOARD.day' | translate }}</ion-label>\r\n                </ion-chip> <br>\r\n                <!-- Number of Seats-->\r\n                <ion-chip >\r\n                  <ion-icon name=\"person\"></ion-icon>\r\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\r\n                </ion-chip>\r\n                <!-- car color -->\r\n              <ion-chip>\r\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \r\n              </ion-chip>\r\n\r\n          </ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n               <!-- More-->\r\n          <ion-button expand=\"block\"  (click)=\"carDetails(item.id)\"> \r\n  \r\n             <!-- <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" > -->\r\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\r\n                <ion-icon name=\"chevron-forward\"></ion-icon>\r\n            <!-- </ion-chip> -->\r\n           </ion-button> \r\n\r\n      \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nimg {\n  height: 250px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFxpb25pY2FwcFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRFFBO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUVJLGNBQUE7QUNQSjs7QURVQTtFQUVJLFlBQUE7QUNSSjs7QURVQTtFQUVJLGFBQUE7RUFDQSxXQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1jaGlwLGlvbi1idXR0b25cclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn1cclxuaW1nXHJcbntcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsIGlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

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
                //console.log("getting voitures : ",res); 
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
                    //console.log("getting Destinations : ",res); 
                    if (!res.details) {
                        if (res.length > 0) {
                            this.list_original = res;
                            this.show = true;
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
                })); //// end get destinations
                ////////////////////////////////////////////////////////////////////
            }), error => {
                if (this.lang == "fr") {
                    alert("Erreur Serveur !! ");
                }
                else {
                    alert("Server Error!! ");
                }
                this.webService.stopLoading();
            }); /// end get voitures
            ////////////////////////////////////////////////////
        });
    } //end of ngOnInit
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
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
        // console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 
    }
    ///////////////end set Date////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    //this method is used to print the details of a selected car //////////////
    carDetails(carID) {
        //call another page and fetch the details of the car
        this.router.navigate(['car-details'], { queryParams: { id: carID, prev: "/dashboard" } });
    }
    //////////////////////end call carDetails///////////////////////////
    //////////////// search class /////////////////////
    openClass() {
        //console.log(this.searchClass);
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
        //console.log(this.searchPrice);
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
        // console.log(this.searchOther);
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