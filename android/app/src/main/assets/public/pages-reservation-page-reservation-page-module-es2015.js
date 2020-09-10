(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservation-page-reservation-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n      <ion-item>\r\n          <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\r\n          <ion-title>{{\"RESERVECAR.title\"| translate}}</ion-title>\r\n      </ion-item>  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\">\r\n\r\n\r\n\r\n\r\n\r\n       <ion-card>\r\n        <ion-card-header>\r\n\r\n         <ion-card-title > RESERVATION </ion-card-title>\r\n              <!-- Label only -->\r\n          <ion-segment [(ngModel)]=\"rent_type\">\r\n            <ion-segment-button  value=\"hour\">\r\n              <ion-label>{{\"RESERVECAR.per_hour\"| translate}} </ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"day\">\r\n              <ion-label>{{\"RESERVECAR.per_day\"| translate}}</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"airport\">\r\n              <label textWrap=\"true\" style=\"font-size:0.9em\">{{\"RESERVECAR.airport_pick\"| translate}}</label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n             \r\n              <!-- Search Bar -->\r\n               <ion-searchbar placeholder=\"Destination (*) \"[(ngModel)]=\"searchQuery\" (click)=\"click_bar()\" (ionCancel)=\"onCancel($event)\" (ionClear)\t=\"onCancel($event)\" (ngModelChange)=\"change_query($event)\" showCancelButton=\"focus\"></ion-searchbar>\r\n                \r\n                <ion-list *ngIf=\"show_list\">\r\n                   <ion-item *ngFor=\"let item of list_to_show; let i = index\">\r\n                       <ion-label (click)=\"click_item(i, item.id,item.coefficient)\"  > {{item.destination}} </ion-label>\r\n                   </ion-item>\r\n                </ion-list>\r\n\r\n\r\n                <!-- Price -->\r\n\r\n                <ion-item>\r\n                    <ion-label > {{\"RESERVECAR.price\"| translate}}</ion-label>\r\n                   \r\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='day'\"> {{car.per_day}} F CFA </ion-chip>\r\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='hour'\"> {{car.per_hour}} F CFA</ion-chip>\r\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='airport'\"> {{car.airport}} F CFA </ion-chip>\r\n\r\n                </ion-item>\r\n\r\n            <!-- ----------------------------------------------------------------------------------- -->\r\n            <!-- ----------------------START rent type = \"per hour\"------------------------------- -->\r\n              <div *ngIf=\"rent_type =='hour'\">\r\n                <!-- start date -->\r\n                <ion-item  >\r\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\r\n                  <ion-datetime readonly [min]=\"today\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\" ></ion-datetime>\r\n                </ion-item>\r\n                <!-- start time -->\r\n                <ion-item >\r\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\r\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" (ionChange)=\"change('hour')\"   [(ngModel)]=\"start_time\" ></ion-datetime>\r\n                </ion-item>\r\n                 <!-- return time -->\r\n                <ion-item  *ngIf=\"hourNbr > 0\" >\r\n                  <ion-label>{{\"RESERVECAR.return_time\"| translate}}</ion-label>\r\n                  <ion-datetime readonly display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\"  [min]=\"end_time\" [(ngModel)]=\"end_time\"> </ion-datetime>\r\n                </ion-item>\r\n                <!-- Number of Time-->\r\n                <ion-item >\r\n                  <ion-label>{{\"RESERVECAR.number_hour\"| translate}}</ion-label>\r\n                  <ion-input type=\"number\"  style=\"width: 100px; margin-left : 40%\" (ionChange)=\"change('hour')\"  placeholder=\"0\"  [(ngModel)]=\"hourNbr\" ></ion-input>\r\n                </ion-item>\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------STOP rent type = \"per hour\"------------------------------------------------------------------ -->\r\n            <!-- ------------------------------------------------------------------------------------------ -->\r\n\r\n            <!-- ----------------------------------------------------------------------------------- -->\r\n            <!-- ----------------------START rent type = \"per day\"------------------------------- -->\r\n              <div *ngIf=\"rent_type =='day'\">\r\n                <!-- start date -->\r\n                <ion-item  >\r\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\r\n                  <ion-datetime [min]=\"today\" [max]=\"maxdate\" (ionChange)=\"change('day')\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\"></ion-datetime>\r\n                </ion-item>\r\n                 <!-- return date  -->\r\n                <ion-item  >\r\n                  <ion-label>{{\"RESERVECAR.return_date\"| translate}}</ion-label>\r\n                  <ion-datetime [min]=\"min_retunDate\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"end_date\"></ion-datetime>\r\n                </ion-item>\r\n                <!-- start time -->\r\n                <ion-item >\r\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\r\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" (ionChange)=\"end_time = start_time\"   [min]=\"start_time\" [(ngModel)]=\"start_time\"></ion-datetime>\r\n                </ion-item>\r\n                 <!-- return time -->\r\n                <ion-item >\r\n                  <ion-label>{{\"RESERVECAR.return_time\"| translate}}</ion-label>\r\n                  <ion-datetime  display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\"   [(ngModel)]=\"end_time\"></ion-datetime>\r\n                </ion-item>\r\n               </div>\r\n\r\n\r\n            <!-- ----------------------STOP rent type = \"per day\"------------------------------------------------------------------ -->\r\n            <!-- ------------------------------------------------------------------------------------------ -->\r\n           \r\n            <!-- ----------------------------------------------------------------------------------- -->\r\n            <!-- ----------------------START rent type = \"airport\"------------------------------- -->\r\n              <div *ngIf=\"rent_type =='airport'\">\r\n                <!-- start date -->\r\n                <ion-item  >\r\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\r\n                  <ion-datetime [value]=\"today\" [min]=\"today\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\"></ion-datetime>\r\n                </ion-item>\r\n                <!-- start time -->\r\n                <ion-item >\r\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\r\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\" [(ngModel)]=\"start_time\" ></ion-datetime>\r\n                </ion-item>\r\n                 <!-- departure -->\r\n                <ion-item  *ngIf=\"rent_type =='airport' \">\r\n                  <ion-input [(ngModel)]= \"depart_venue\"  placeholder='{{\"RESERVECAR.departure_venue\"| translate}}' ></ion-input>\r\n                </ion-item>\r\n\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------STOP rent type = \"airport\"------------------------------------------------------------------ -->\r\n            <!-- ------------------------------------------------------------------------------------------ -->\r\n\r\n\r\n                \r\n                \r\n\r\n        </ion-card-content>\r\n      \r\n  </ion-card>\r\n      \r\n      <!-- type of reservation -->\r\n\r\n\r\n  <!-- optional services -->\r\n       <ion-card>\r\n     \r\n        <ion-card-header>\r\n          <ion-card-title>{{\"RESERVECAR.otherservices\"| translate}}  </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content *ngFor=\"let item of option\">\r\n                  \r\n                <!-- <strong> <ion-label style=\"text-decoration: underline; margin-left:4%\"> Optional Services : </ion-label> </strong> -->\r\n                  \r\n                  <!-- baby seats -->\r\n                <ion-item>\r\n                    <ion-checkbox color=\"primary\" [(ngModel)] =\"item.checked\" slot=\"end\"></ion-checkbox>\r\n                    <label  textWrap=\"true\">{{item.libelle}}  -   {{item.prix}}F cfa/ {{\"RESERVECAR.day\"| translate}} </label>\r\n                </ion-item>\r\n                \r\n            \r\n        </ion-card-content>\r\n        </ion-card>\r\n\r\n       \r\n\r\n        <!-- Message -->\r\n        <ion-card  style=\"height: 255px;\">\r\n     \r\n            <ion-card-header>\r\n              <ion-card-title>{{\"RESERVECAR.message\"| translate}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content >\r\n                \r\n                  <ion-textarea [(ngModel)]=\"message\" class=\"cell-input\" auto-grow=\"true\" maxlength=\"400\" placeholder=\"{{'RESERVECAR.messageplaceholder'| translate}}\"></ion-textarea>\r\n\r\n            </ion-card-content>\r\n\r\n        </ion-card>\r\n\r\n           <!-- submit your reservation -->\r\n        <!-- <ion-button expand=\"round\" class=\"center-button\" >Submit</ion-button> -->\r\n\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"show\">\r\n  <!-- <ion-toolbar> -->\r\n      <ion-button  (click)=\"submit(car.id)\" expand=\"full\"> {{\"RESERVECAR.btn_submit\"| translate}} </ion-button>\r\n  <!-- </ion-toolbar> -->\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/reservation-page/reservation-page-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/reservation-page/reservation-page-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReservationPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPagePageRoutingModule", function() { return ReservationPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reservation_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-page.page */ "./src/app/pages/reservation-page/reservation-page.page.ts");




const routes = [
    {
        path: '',
        component: _reservation_page_page__WEBPACK_IMPORTED_MODULE_3__["ReservationPagePage"]
    }
];
let ReservationPagePageRoutingModule = class ReservationPagePageRoutingModule {
};
ReservationPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReservationPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reservation-page/reservation-page.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reservation-page/reservation-page.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReservationPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPagePageModule", function() { return ReservationPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reservation_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservation-page-routing.module */ "./src/app/pages/reservation-page/reservation-page-routing.module.ts");
/* harmony import */ var _reservation_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reservation-page.page */ "./src/app/pages/reservation-page/reservation-page.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let ReservationPagePageModule = class ReservationPagePageModule {
};
ReservationPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"],
            _reservation_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReservationPagePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_reservation_page_page__WEBPACK_IMPORTED_MODULE_7__["ReservationPagePage"]]
    })
], ReservationPagePageModule);



/***/ }),

/***/ "./src/app/pages/reservation-page/reservation-page.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reservation-page/reservation-page.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-button {\n  margin-left: 35%;\n  margin-right: 30%;\n}\n\n.cell-input {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n}\n\nion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card-title {\n  margin-left: 30%;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title, ion-textarea {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb24tcGFnZS9EOlxcaW9uaWM0XFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXHJlc2VydmF0aW9uLXBhZ2VcXHJlc2VydmF0aW9uLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXNlcnZhdGlvbi1wYWdlL3Jlc2VydmF0aW9uLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQW9CLG1CQUFBO0FDQ3hCOztBREVFO0VBRUUsbUJBQUE7QUNBSjs7QURFQTtFQUVJLGdCQUFBO0FDQUo7O0FESUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtBQ0hKOztBREtBO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUVJLGNBQUE7QUNKSjs7QURPQTtFQUVJLFlBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9uLXBhZ2UvcmVzZXJ2YXRpb24tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICBcclxuICB9XHJcblxyXG4gIC5jZWxsLWlucHV0IHtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxyXG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTsgXHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7IG1hcmdpbi1ib3R0b20gOiAtMXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuaW9uLWNhcmQtdGl0bGVcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6MzAlXHJcbn1cclxuXHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWNoaXBcclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uXHJcbntcclxuICAgIGNvbG9yIDogI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUsaW9uLXRleHRhcmVhXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn0iLCIuY2VudGVyLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xufVxuXG4uY2VsbC1pbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMC4wMWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG5pb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGUsIGlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/reservation-page/reservation-page.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/reservation-page/reservation-page.page.ts ***!
  \*****************************************************************/
/*! exports provided: ReservationPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPagePage", function() { return ReservationPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage
let ReservationPagePage = class ReservationPagePage {
    constructor(router, route, webservice, alertController) {
        this.router = router;
        this.route = route;
        this.webservice = webservice;
        this.alertController = alertController;
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
        //////////////////////////////////////////////////
        //my car : this var will receive the car with all its details
        this.car = {
            'id': '',
            'modele': '',
            'per_day': 0,
            'per_hour': 0,
            'airport': 0
        };
        //car ID
        this.carID = "";
        //prev page
        this.page_prev = "";
        /////////////////////////////////////
        ////var data to be sent //////////
        this.rent_type = "hour";
        this.hourNbr = 0; // coef of number of hour for reservation per hour
        ////////////////////////////////////////////////////////
        //this is the object we have to send to the API
        this.dataToSend = {
            "date_location": "",
            "date_debut": "",
            "date_fin": "",
            "montant": 0,
            "note_client": null,
            "commentaire_client": "",
            "note_chauffeur": null,
            "rapport_chauffeur": "",
            "client": 0,
            "chauffeur": null,
            "voiture": 0,
            "type_location": 1,
            "destination": 0,
            "etape_location": 1,
            //"lieu_depart": "",
            "optionnel": []
        }; //end of object to send
        /////////////////////////////////////////////////////
        this.show = false; //is to show page content
        // date
        this.setDate();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lang = (yield Storage.get({ key: LNG_KEY })).value;
            // //present loading
            this.webservice.presentLoading();
            ////////////////////////////////////////////////////////////////
            ///////////////receive car id/////////////////////////////////////////////////
            this.subscription = this.route.queryParams.subscribe((data) => {
                console.log("selected ->", typeof (data.id));
                //set the prev page
                this.page_prev = data.prev;
                //set the Car ID 
                this.carID = data.id;
                ////////////////////////////////////////////////////////////////////////////   
                //get Destination list
                this.webservice.getDestinations().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log("getting Destinations : ", res);
                    if (res) {
                        this.list_original = res;
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////Start : Get Optionnels/////////////////////////////////////////////////
                    this.webservice.getOption().subscribe(resp => {
                        this.option = resp;
                        console.log(resp);
                        ///////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////Start : Get Car details/////////////////////////////////////////////////
                        this.webservice.getCarDetails(data.id).subscribe(res => {
                            this.car = res;
                            // get the differents pice of the car
                            this.webservice.getPriceCar(data.id).subscribe(resp => {
                                this.car.per_day = resp[0].prix;
                                this.car.per_hour = resp[1].prix;
                                this.car.airport = resp[2].prix;
                                //stop loading
                                this.webservice.stopLoading();
                                this.show = true;
                            }); //end get prices
                            console.log(res);
                        });
                        //////////////////Stop : Get Car details//////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////
                    });
                    //////////////////////////Stop : Get  Optionnels//////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////////////////
                })); //// end get destinations
                ////////////////////////////////////////////////////////////////////
            });
        });
    }
    ////////////////////////////////////////////////////////////////////////////////    
    setDate() {
        let date = new Date();
        var month, day;
        //set min date for return date reserv per day
        this.min_retunDate = new Date();
        this.min_retunDate.setDate(this.min_retunDate.getDate() + 1);
        this.min_retunDate = this.min_retunDate.toISOString();
        ///////////////////////today's date or reservation date //////////////////////////
        this.dataToSend.date_location = date.toISOString();
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
        this.start_date = this.today;
        this.end_date = this.start_date;
        this.start_time = "09:00";
        this.end_time = "10:00";
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
    //////////////////////////////////////////////////////////////
    ////back to prev ///
    prev() {
        //call another page and make the reservation of the car
        this.router.navigate(['car-details'], { queryParams: { id: this.carID, prev: this.page_prev } });
    }
    ////////////////////////////////////////////////////////////////////////
    /////////////////Submit reservation///////////////////////////////////////////////////////
    submit(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //check if destination is null
            if (this.destination) {
                //////////////////////////car id ///////////////////////////////////////////////
                this.dataToSend.voiture = id;
                console.log("id : ", id, "\n coef : ", this.coef);
                /////////////////////////////////user id ///////////////////////////////////////////////  
                var ret = JSON.parse((yield Storage.get({ key: "user_infos" })).value);
                // console.log("user : ", ret);
                this.dataToSend.client = ret.id;
                //////////////////////////////get token storage////////////////////////////////////////
                this.token = (yield Storage.get({ key: 'accessToken' })).value;
                console.log("Token : ", this.token);
                /////////////////// set start date /////////////////////////////////////////////////////
                //this.dataToSend.date_debut = this.start_date
                this.start_date = this.start_date.split("T")[0];
                this.dataToSend.date_debut = this.start_date + "T" + this.start_time + ":44.625Z";
                //////////////////// set start hour /////////////////////////////////////////////////////
                // this.dataToSend.heure_debut = this.start_time;     
                ///////////////////////////////////////////////////////////////////////////////////////////
                if (this.rent_type == "hour") {
                    /////coef of the number of hour
                    if (this.hourNbr > 0) {
                        ///////set type rent to hour id 
                        this.dataToSend.type_location = 1;
                        /////////////////// set end hour /////////////////////////////////////////////////////
                        //this.dataToSend.heure_fin = this.end_time;
                        /////// set the end date to "";
                        this.dataToSend.date_fin = this.start_date + "T" + this.end_time + ":44.625Z";
                        //this.dataToSend.date_fin = ""+ " "+this.end_time;
                        /////// set depart venue  (for airoort type)
                        //this.dataToSend.lieu_depart = "";
                        //////price with number of hour and destination coef included 
                        this.price = (this.car.per_hour * (1 + this.coef)) * this.hourNbr;
                    }
                    else {
                        if (this.lang == "fr") {
                            alert("Entrez le nombre d'heure ! ( > 0) ");
                        }
                        else {
                            alert("Enter the number of Hour ! ( > 0) ");
                        }
                        return;
                    }
                }
                else if (this.rent_type == "day") {
                    /////coef of the number of day
                    // To set two dates to two variables 
                    var date1 = new Date(this.start_date);
                    var date2 = new Date(this.end_date);
                    // To calculate the time difference of two dates 
                    var Difference_In_Time = date2.getTime() - date1.getTime();
                    // To calculate the no. of days between two dates 
                    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                    if (Difference_In_Days > 0) {
                        ///////set type rent to day id 
                        this.dataToSend.type_location = 2;
                        //////////////////////set end date ///////////////////////////////////////////////////////
                        // this.dataToSend.date_fin = this.end_date
                        this.end_date = this.end_date.split("T")[0];
                        this.dataToSend.date_fin = this.end_date + "T" + this.end_time + ":44.625Z";
                        /////////////////// set end hour /////////////////////////////////////////////////////
                        // this.dataToSend.heure_fin = this.end_time;
                        /////// set depart venue 
                        //this.dataToSend.lieu_depart = "";
                        this.price = (this.car.per_day * (1 + this.coef)) * Difference_In_Days;
                    }
                    else {
                        if (this.lang == "fr") {
                            alert("Le Nombre de jour doit être > 0 ");
                        }
                        else {
                            alert("Number of Day Should be > 0");
                        }
                        return;
                    }
                }
                else if (this.rent_type == "airport") {
                    ///////set type rent to airport id 
                    this.dataToSend.type_location = 3;
                    this.dataToSend.date_fin = this.start_date + "T" + this.start_time + ":44.625Z";
                    /// set end time /////////////////////////
                    this.dataToSend.date_fin = "" + " " + this.end_time + "T" + this.start_time + ":44.625Z";
                    //////////////////////set departure venue ///////////////////////////////////////////////////////
                    //this.dataToSend.lieu_depart = this.depart_venue;
                    this.price = this.car.airport * (1 + this.coef);
                }
                ///////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////get the selected option and add price /////////////////////////////////////
                var index = 0;
                for (let i = 0; i < this.option.length; i++) {
                    if (this.option[i].checked) {
                        ////////////////////////////////////////////////////////////////////
                        if (this.rent_type == "hour") {
                            console.log("price : ", typeof (this.price), "\n option price : ", typeof (this.option[i].prix));
                            this.price = parseFloat(this.price) + this.option[i].prix;
                            //add the optionnel id into the dataTosend field array
                            this.dataToSend.optionnel[index] = this.option[i].id;
                            index = index + 1;
                        }
                        else if (this.rent_type == "day") {
                            this.price = this.price + this.option[i].prix;
                            //add the optionnel id into the dataTosend field array
                            this.dataToSend.optionnel[index] = this.option[i].id;
                            index = index + 1;
                        }
                        else if (this.rent_type == "airport") {
                            this.price = this.price + this.option[i].prix;
                            //add the optionnel id into the dataTosend field array
                            this.dataToSend.optionnel[index] = this.option[i].id;
                            index = index + 1;
                        }
                        //////////////////////////////////////////////////////////////
                        console.log(this.option[i]);
                    }
                }
                //////////////////set destination ////////////////////////////////////////////
                this.dataToSend.destination = this.destination;
                /////////////////////set price ///////////////////////////////////////////////////
                this.dataToSend.montant = this.price;
                /////////////////////set commentaire client ///////////////////////////////////////////////////
                this.dataToSend.commentaire_client = this.message;
                console.log("\n data to send : \n", this.dataToSend);
                // present alert
                this.presentAlertConfirm(this.price, this.start_date, this.end_date);
            }
            else {
                if (this.lang == "fr") {
                    alert("Remplissez le champ Destination !");
                }
                else {
                    alert("Fill the Destination Field !");
                }
            }
        });
    }
    ////// present Confirmation alert///////////
    // present alert
    presentAlertConfirm(price, start_date, end_date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var lang = (yield Storage.get({ key: LNG_KEY })).value;
            if (lang == "fr") {
                var text = "Prix Total : ";
            }
            else {
                var text = "Total Price : ";
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Validation!!',
                message: '<strong>' + text + '</strong>' + price + ' F CFA',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            ////send the data to the API
                            this.webservice.postReservation(this.token, this.dataToSend).subscribe(res => {
                                console.log(res);
                                if (res) {
                                    console.log("done");
                                    this.myAlert(0, lang);
                                }
                            }, error => {
                                console.log("error : \n", error);
                                this.myAlert(1, lang);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //alert 2 method
    myAlert(id, lang) {
        if (id == 0) {
            if (lang == "fr") {
                alert("Votre Requête a été envoyée avec succès !");
            }
            else {
                alert("Your Request has been sent successfully !");
            }
            //  this.router.navigateByUrl("/dashboard");
            this.prev();
        }
        else {
            if (lang == "fr") {
                alert("Désolé, une erreur s'est produite, veuillez vérifier à nouveau votre saisie.");
            }
            else {
                alert("Sorry, an error has occurred please, check your entry again.");
            }
        }
    }
    ////////////////change end time
    change(type) {
        ////per hour
        if (type == "hour") {
            // console.log("start : ",this.start_time,"\n type time :",typeof(this.start_time));
            var x = parseInt(this.start_time.split(":")[0]) + this.hourNbr;
            var y = parseInt(this.start_time.split(":")[1]);
            if (x <= 23 && y <= 59) {
                if (x < 10) {
                    if (y < 10) {
                        this.end_time = "0" + x + ":0" + y;
                    }
                    else {
                        this.end_time = "0" + x + ":" + y;
                    }
                }
                else {
                    if (y < 10) {
                        this.end_time = "" + x + ":0" + y;
                    }
                    else {
                        this.end_time = "" + x + ":" + y;
                    }
                }
            }
            else {
                this.hourNbr = 0;
                if (this.lang == "fr") {
                    alert("Désolé, l'heure de retour Max  est :  23 Hr : 59 min ");
                }
                else {
                    alert("Sorry, the maximum return time is: 11 : 59 PM ");
                }
            }
        }
        ////per day
        if (type == "day") {
            // Create new Date instance
            var date = new Date(this.start_date);
            // Add a day
            date.setDate(date.getDate() + 1);
            this.end_date = date.toISOString();
            this.min_retunDate = date.toISOString();
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////Search methods //////////////////////////////
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
    click_item(val, id, coef) {
        //set destination
        this.destination = id;
        //set coef 
        this.coef = parseFloat(coef);
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
ReservationPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ReservationPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reservation-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reservation-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reservation-page.page.scss */ "./src/app/pages/reservation-page/reservation-page.page.scss")).default]
    })
], ReservationPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-reservation-page-reservation-page-module-es2015.js.map