(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservation-page-reservation-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n      <ion-item>\n          <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n          <ion-title style=\"margin-left:15%\">{{\"RESERVECAR.title\"| translate}}</ion-title>\n      </ion-item>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\">\n\n\n\n\n\n       <ion-card>\n        <ion-card-header>\n\n         <ion-card-title style=\"margin-left:28%\" > RESERVATION </ion-card-title>\n              <!-- Label only -->\n          <ion-segment [(ngModel)]=\"rent_type\">\n            <ion-segment-button  value=\"hour\">\n              <ion-label>{{\"RESERVECAR.per_hour\"| translate}} </ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"day\">\n              <ion-label>{{\"RESERVECAR.per_day\"| translate}}</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"airport\">\n              <label textWrap=\"true\" style=\"font-size:0.9em\">{{\"RESERVECAR.airport_pick\"| translate}}</label>\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-card-header>\n\n        <ion-card-content>\n             \n              \n\n            <!-- ----------------------------------------------------------------------------------- -->\n            <!-- ----------------------START rent type = \"per hour\"------------------------------- -->\n              <div *ngIf=\"rent_type =='hour'\">\n\n                <!-- Search Bar -->\n                  <ion-searchbar placeholder=\"Destination (*) \"[(ngModel)]=\"searchQuery\" (click)=\"click_bar(1)\" (ionCancel)=\"onCancel($event,1)\" (ionClear)\t=\"onCancel($event,1)\" (ngModelChange)=\"change_query($event,1)\" showCancelButton=\"focus\"></ion-searchbar>\n                \n                    <ion-list *ngIf=\"show_list\">\n                      <ion-item *ngFor=\"let item of list_to_show; let i = index\">\n                          <ion-label (click)=\"click_item(i, item.id,item.coefficient,1)\"  > {{item.destination}} </ion-label>\n                      </ion-item>\n                    </ion-list>\n\n\n\n                <!-- Price -->\n\n                <ion-item>\n                    <ion-label > {{\"RESERVECAR.price\"| translate}}</ion-label>\n                   \n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='day'\"> {{car.per_day}} F CFA </ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='hour'\"> {{car.per_hour}} F CFA</ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='airport'\"> {{car.airport}} F CFA </ion-chip>\n\n                </ion-item>\n\n                <!-- start date -->\n                <ion-item  >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime readonly [min]=\"today\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\" ></ion-datetime>\n                </ion-item>\n                <!-- start time -->\n                <ion-item *ngIf=\"lang=='en'\">\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" (ionChange)=\"change('hour')\"   [(ngModel)]=\"start_time\" ></ion-datetime>\n                </ion-item>\n                <ion-item *ngIf=\"lang=='fr'\">\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\"\n                   (ionChange)=\"change('hour')\"   [(ngModel)]=\"start_time\"\n                   cancelText=\"Annuler\"\n                   doneText=\"Valider\" ></ion-datetime>\n                </ion-item>\n                 <!-- return time -->\n                <ion-item  *ngIf=\"hourNbr > 0\" >\n                  <ion-label>{{\"RESERVECAR.return_time\"| translate}}</ion-label>\n                  <ion-datetime readonly display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\"  [min]=\"end_time\" [(ngModel)]=\"end_time\"> </ion-datetime>\n                </ion-item>\n                <!-- Number of Time-->\n                <ion-item >\n                  <ion-label>{{\"RESERVECAR.number_hour\"| translate}}</ion-label>\n                  <ion-input type=\"number\"  style=\"width: 100px; margin-left : 40%\" (ionChange)=\"change('hour')\"  placeholder=\"0\"  [(ngModel)]=\"hourNbr\" ></ion-input>\n                </ion-item>\n                <!-- ----------------French version ------------------------------------------->\n              \n                \n               </div>\n\n\n            <!-- ----------------------STOP rent type = \"per hour\"------------------------------------------------------------------ -->\n            <!-- ------------------------------------------------------------------------------------------ -->\n\n            <!-- ----------------------------------------------------------------------------------- -->\n            <!-- ----------------------START rent type = \"per day\"------------------------------- -->\n              <div *ngIf=\"rent_type =='day'\">\n\n\n               <!-- Search Bar -->\n               <ion-searchbar placeholder=\"Destination (*) \"[(ngModel)]=\"searchQuery\" (click)=\"click_bar(1)\" (ionCancel)=\"onCancel($event,1)\" (ionClear)\t=\"onCancel($event,1)\" (ngModelChange)=\"change_query($event,1)\" showCancelButton=\"focus\"></ion-searchbar>\n                \n                <ion-list *ngIf=\"show_list\">\n                   <ion-item *ngFor=\"let item of list_to_show; let i = index\">\n                       <ion-label (click)=\"click_item(i, item.id,item.coefficient,1)\"  > {{item.destination}} </ion-label>\n                   </ion-item>\n                </ion-list>\n\n\n\n                <!-- Price -->\n\n                <ion-item>\n                    <ion-label > {{\"RESERVECAR.price\"| translate}}</ion-label>\n                   \n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='day'\"> {{car.per_day}} F CFA </ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='hour'\"> {{car.per_hour}} F CFA</ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='airport'\"> {{car.airport}} F CFA </ion-chip>\n\n                </ion-item>\n                <!-- start date -->\n                <ion-item *ngIf=\"lang=='en'\" >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime [min]=\"today\" [max]=\"maxdate\" (ionChange)=\"change('day')\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\"></ion-datetime>\n                </ion-item>\n                 <!-- return date  -->\n                <ion-item *ngIf=\"lang=='en'\"  >\n                  <ion-label>{{\"RESERVECAR.return_date\"| translate}}</ion-label>\n                  <ion-datetime [min]=\"min_retunDate\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"end_date\"></ion-datetime>\n                </ion-item>\n                <!-- start time -->\n                <ion-item *ngIf=\"lang=='en'\" >\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" (ionChange)=\"end_time = start_time\"   [min]=\"start_time\" [(ngModel)]=\"start_time\"></ion-datetime>\n                </ion-item>\n                 <!-- return time -->\n                <ion-item *ngIf=\"lang=='en'\">\n                  <ion-label>{{\"RESERVECAR.return_time\"| translate}}</ion-label>\n                  <ion-datetime  display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\"   [(ngModel)]=\"end_time\"></ion-datetime>\n                </ion-item>\n                <!-- ------------------------french version ----------------------------------------- -->\n                  <ion-item *ngIf=\"lang=='fr'\" >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime [min]=\"today\" [max]=\"maxdate\" (ionChange)=\"change('day')\" \n                    placeholder=\"Select Date\" [(ngModel)]=\"start_date\"\n                    cancelText=\"Annuler\"\n                   doneText=\"Valider\"></ion-datetime>\n                </ion-item>\n                 <!-- return date  -->\n                <ion-item *ngIf=\"lang=='fr'\"  >\n                  <ion-label>{{\"RESERVECAR.return_date\"| translate}}</ion-label>\n                  <ion-datetime [min]=\"min_retunDate\" [max]=\"maxdate\" placeholder=\"Select Date\" \n                  [(ngModel)]=\"end_date\"\n                  cancelText=\"Annuler\"\n                   doneText=\"Valider\"></ion-datetime>\n                </ion-item>\n                <!-- start time -->\n                <ion-item *ngIf=\"lang=='fr'\">\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" \n                  (ionChange)=\"end_time = start_time\"   [min]=\"start_time\" [(ngModel)]=\"start_time\"\n                  cancelText=\"Annuler\"\n                   doneText=\"Valider\"></ion-datetime>\n                </ion-item>\n                 <!-- return time -->\n                <ion-item *ngIf=\"lang=='fr'\" >\n                  <ion-label>{{\"RESERVECAR.return_time\"| translate}}</ion-label>\n                  <ion-datetime  display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" \n                    [(ngModel)]=\"end_time\"\n                    cancelText=\"Annuler\"\n                   doneText=\"Valider\" ></ion-datetime>\n                </ion-item>     \n\n\n\n               </div>\n\n\n            <!-- ----------------------STOP rent type = \"per day\"------------------------------------------------------------------ -->\n            <!-- ------------------------------------------------------------------------------------------ -->\n           \n            <!-- ----------------------------------------------------------------------------------- -->\n            <!-- ----------------------START rent type = \"airport\"------------------------------- -->\n              <div *ngIf=\"rent_type =='airport'\">\n\n                <!-- Search Bar Departure venue -->\n               <ion-searchbar placeholder=\"{{'RESERVECAR.departure_venue'| translate}} \"[(ngModel)]=\"searchQuery1\" (click)=\"click_bar(0)\" (ionCancel)=\"onCancel($event,0)\" (ionClear)\t=\"onCancel($event,0)\" (ngModelChange)=\"change_query($event,0)\" showCancelButton=\"focus\"></ion-searchbar>\n                \n                <ion-list *ngIf=\"show_list1\">\n                   <ion-item *ngFor=\"let item of list_to_show1; let i = index\">\n                       <ion-label (click)=\"click_item(i, item.id,item.coefficient,0)\"  > {{item.destination}} </ion-label>\n                   </ion-item>\n                </ion-list>\n                <!-- Search Bar Destination -->\n               <ion-searchbar placeholder=\"Destination (*) \"[(ngModel)]=\"searchQuery\" (click)=\"click_bar(1)\" (ionCancel)=\"onCancel($event,1)\" (ionClear)\t=\"onCancel($event,1)\" (ngModelChange)=\"change_query($event,1)\" showCancelButton=\"focus\"></ion-searchbar>\n                \n                <ion-list *ngIf=\"show_list\">\n                   <ion-item *ngFor=\"let item of list_to_show; let i = index\">\n                       <ion-label (click)=\"click_item(i, item.id,item.coefficient,1)\"  > {{item.destination}} </ion-label>\n                   </ion-item>\n                </ion-list>\n\n                <!-- departure -->\n                <!-- <ion-item  *ngIf=\"rent_type =='airport' \">\n                  <ion-input [(ngModel)]= \"depart_venue\"  placeholder='{{\"RESERVECAR.departure_venue\"| translate}}' ></ion-input>\n                </ion-item> -->\n\n\n                <!-- Price -->\n\n                <ion-item>\n                    <ion-label > {{\"RESERVECAR.price\"| translate}}</ion-label>\n                   \n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='day'\"> {{car.per_day}} F CFA </ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='hour'\"> {{car.per_hour}} F CFA</ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='airport'\"> {{car.airport}} F CFA </ion-chip>\n\n                </ion-item>\n\n                <!-- start date -->\n                <ion-item *ngIf=\"lang=='fr'\" >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime [value]=\"today\" [min]=\"today\" [max]=\"maxdate\"\n                   placeholder=\"Select Date\" [(ngModel)]=\"start_date\"\n                   monthShortNames=\"Jan, Fev, Mars, Avr, Mai, Juin, Juil, Août, Sep, Oct, Nov, Dec\"\n                   cancelText=\"Annuler\"\n                  doneText=\"Valider\"></ion-datetime>\n                  \n                </ion-item>\n                <!-- start date in english --> \n                <ion-item *ngIf=\"lang=='en'\" >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime [value]=\"today\" [min]=\"today\" [max]=\"maxdate\"\n                   placeholder=\"Select Date\" [(ngModel)]=\"start_date\"></ion-datetime>\n                  \n                </ion-item>\n\n\n            \n\n                <!-- start time in french  -->\n                <ion-item *ngIf=\"lang=='fr'\" >\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\"\n                   [(ngModel)]=\"start_time\"\n                   cancelText=\"Annuler\"\n                   doneText=\"Valider\" ></ion-datetime>\n                </ion-item>\n                <!-- start time in english-->\n                <ion-item *ngIf=\"lang=='en'\" >\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\" [(ngModel)]=\"start_time\" ></ion-datetime>\n                </ion-item>\n                 \n\n                \n               </div>\n\n\n            <!-- ----------------------STOP rent type = \"airport\"------------------------------------------------------------------ -->\n            <!-- ------------------------------------------------------------------------------------------ -->\n\n\n                \n                \n\n        </ion-card-content>\n      \n  </ion-card>\n      \n      <!-- type of reservation -->\n\n\n  <!-- optional services -->\n       <ion-card>\n     \n        <ion-card-header>\n          <ion-card-title style=\"margin-left:20%\">{{\"RESERVECAR.otherservices\"| translate}}  </ion-card-title>\n        </ion-card-header>\n        <ion-card-content *ngFor=\"let item of option\">\n                  \n                <!-- <strong> <ion-label style=\"text-decoration: underline; margin-left:4%\"> Optional Services : </ion-label> </strong> -->\n                  \n                  <!-- baby seats -->\n                <ion-item>\n                    <ion-checkbox color=\"primary\" [(ngModel)] =\"item.checked\" slot=\"end\"></ion-checkbox>\n                    <label  textWrap=\"true\">{{item.libelle}}  -   {{item.prix}}F cfa/ {{\"RESERVECAR.day\"| translate}} </label>\n                </ion-item>\n                \n            \n        </ion-card-content>\n        </ion-card>\n\n       \n\n        <!-- Message -->\n        <ion-card  style=\"height: 255px;\">\n     \n            <ion-card-header>\n              <ion-card-title style=\"margin-left:32%\">{{\"RESERVECAR.message\"| translate}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content >\n                \n                  <ion-textarea [(ngModel)]=\"message\" class=\"cell-input\" auto-grow=\"true\" maxlength=\"400\" placeholder=\"{{'RESERVECAR.messageplaceholder'| translate}}\"></ion-textarea>\n\n            </ion-card-content>\n\n        </ion-card>\n\n           <!-- submit your reservation -->\n        <!-- <ion-button expand=\"round\" class=\"center-button\" >Submit</ion-button> -->\n\n\n</ion-content>\n<ion-footer *ngIf=\"show\">\n  <!-- <ion-toolbar> -->\n      <ion-button  (click)=\"submit(car.id)\" expand=\"full\"> {{\"RESERVECAR.btn_submit\"| translate}} </ion-button>\n  <!-- </ion-toolbar> -->\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = (".center-button {\n  margin-left: 35%;\n  margin-right: 30%;\n}\n\n.cell-input {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n}\n\nion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title, ion-textarea {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb24tcGFnZS9EOlxcaW9uaWNhcHBcXGxvZ2luQ2FwL3NyY1xcYXBwXFxwYWdlc1xccmVzZXJ2YXRpb24tcGFnZVxccmVzZXJ2YXRpb24tcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9uLXBhZ2UvcmVzZXJ2YXRpb24tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFBb0IsbUJBQUE7QUNDeEI7O0FERUU7RUFFRSxtQkFBQTtBQ0FKOztBRFFBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURTQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7RUFFSSxjQUFBO0FDUko7O0FEV0E7RUFFSSxZQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNlcnZhdGlvbi1wYWdlL3Jlc2VydmF0aW9uLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgXG4gIH1cblxuICAuY2VsbC1pbnB1dCB7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjazsgXG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTsgXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcbiAgfVxuXG4gIGlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG59XG4vLyBpb24tY2FyZC10aXRsZVxuLy8ge1xuLy8gICAgIG1hcmdpbi1sZWZ0OjI1JVxuLy8gfVxuXG5cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tY2hpcFxue1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi1idXR0b25cbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b25cbntcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlLGlvbi10ZXh0YXJlYVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59IiwiLmNlbnRlci1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuLmNlbGwtaW5wdXQge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSwgaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

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
        //for departure
        this.list_original1 = [
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
        //for departure
        this.list_to_show1 = [
            {
                'id': '',
                'destination': '',
                'coefficient': ''
            }
        ];
        this.selected_index = -1;
        this.show_list1 = false; // for destination
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
            "message": "",
            "client": 0,
            "voiture": 0,
            "type_location": 0,
            "destination": 0,
            "etape_location": 1,
            "depart": null,
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
                //console.log("selected ->", typeof(data.id))
                //set the prev page
                this.page_prev = data.prev;
                //set the Car ID 
                this.carID = data.id;
                ////////////////////////////////////////////////////////////////////////////   
                //get Destination list
                this.webservice.getDestinations().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    //console.log("getting Destinations : ",res); 
                    if (res) {
                        this.list_original = res;
                        this.list_original1 = res;
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////Start : Get Optionnels/////////////////////////////////////////////////
                    this.webservice.getOption().subscribe(resp => {
                        this.option = resp;
                        //console.log(resp)
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
                            //console.log(res)
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
        // console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 
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
                //console.log("id : ",id,"\n coef : ",this.coef)
                /////////////////////////////////user id ///////////////////////////////////////////////  
                var ret = JSON.parse((yield Storage.get({ key: "user_infos" })).value);
                // console.log("user : ", ret);
                this.dataToSend.client = ret.id;
                //////////////////////////////get token storage////////////////////////////////////////
                this.token = (yield Storage.get({ key: 'accessToken' })).value;
                // console.log("Token : ", this.token);
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
                        this.dataToSend.type_location = 2;
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
                        this.dataToSend.type_location = 1;
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
                    // console.log("Depar Id", this.depart_venue)
                    if (this.depart_venue) {
                        //check if depart != destination
                        if (this.depart_venue != this.destination) {
                            //check if aeroport is selected 
                            if (this.depart_venue == 203 || this.destination == 203) {
                                ///////////////////set depart//////////////////
                                this.dataToSend.depart = this.depart_venue;
                                ///////set type rent to airport id 
                                this.dataToSend.type_location = 3;
                                this.dataToSend.date_fin = this.start_date + "T" + this.start_time + ":44.625Z";
                                /// set end time /////////////////////////
                                this.dataToSend.date_fin = this.start_date + "T" + this.end_time + ":44.625Z";
                                //////////////////////set departure venue ///////////////////////////////////////////////////////
                                //this.dataToSend.lieu_depart = this.depart_venue;
                                var c = (this.coef1 + this.coef) / 2;
                                this.price = (this.car.airport + this.car.airport * c);
                            }
                            else {
                                if (this.lang == "fr") {
                                    alert("Assurez-vous d'avoir choisi Aéroport comme départ ou destination.");
                                }
                                else {
                                    alert("Make sure you have chosen Aéroport either as departure or destination.");
                                }
                                return;
                            }
                        }
                        else {
                            if (this.lang == "fr") {
                                alert("Désolé, le départ doit être différent de la destination.");
                            }
                            else {
                                alert("Sorry, the departure must be different from the destination.");
                            }
                            return;
                        }
                    }
                    else {
                        if (this.lang == "fr") {
                            alert("Choisissez un Lieu de depart !");
                        }
                        else {
                            alert("Select a Departure venue !");
                        }
                        return;
                    }
                }
                ///////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////get the selected option and add price /////////////////////////////////////
                var index = 0;
                for (let i = 0; i < this.option.length; i++) {
                    if (this.option[i].checked) {
                        ////////////////////////////////////////////////////////////////////
                        if (this.rent_type == "hour") {
                            //console.log("price : ",typeof(this.price),"\n option price : ", typeof(this.option[i].prix))
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
                        //console.log(this.option[i]);
                    }
                }
                //////////////////set destination ////////////////////////////////////////////
                this.dataToSend.destination = this.destination;
                /////////////////////set price ///////////////////////////////////////////////////
                this.dataToSend.montant = this.price;
                /////////////////////set message///////////////////////////////////////////////////
                this.dataToSend.message = this.message;
                //console.log("\n data to send : \n", this.dataToSend);
                // present alert
                this.presentAlertConfirm(this.price, this.start_date, this.end_date);
            }
            else {
                if (this.lang == "fr") {
                    alert("Choisissez une Destination !");
                }
                else {
                    alert("Select one destination !");
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
                var textcancel = "Annuler ";
                var textok = "Valider ";
            }
            else {
                var text = "Total Price : ";
                var textcancel = "Cancel ";
                var textok = "OK ";
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Validation!!',
                message: '<strong>' + text + '</strong>' + price + ' F CFA',
                buttons: [
                    {
                        text: textcancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: textok,
                        handler: () => {
                            //console.log('Confirm Okay');
                            //preseent loader
                            this.webservice.presentLoading();
                            ////send the data to the API
                            this.webservice.postReservation(this.token, this.dataToSend).subscribe(res => {
                                //console.log(res)
                                if (res) {
                                    this.webservice.stopLoading();
                                    // console.log("done");
                                    this.myAlert(0, lang);
                                }
                            }, error => {
                                //stop loader
                                this.webservice.stopLoading();
                                // console.log("error : \n",error); 
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
    onCancel(val, i) {
        if (i == 0) {
            this.depart_venue = null;
            this.show_list1 = false;
            this.list_to_show1 = [
                {
                    'id': '',
                    'destination': '',
                    'coefficient': ''
                }
            ];
        }
        else {
            this.destination = null;
            this.show_list = false;
            this.list_to_show = [
                {
                    'id': '',
                    'destination': '',
                    'coefficient': ''
                }
            ];
        }
    }
    click_bar(i) {
        if (i == 0) {
            this.list_to_show1 = [
                {
                    'id': '',
                    'destination': '',
                    'coefficient': ''
                }
            ];
            this.show_list1 = true;
        }
        else {
            this.list_to_show = [
                {
                    'id': '',
                    'destination': '',
                    'coefficient': ''
                }
            ];
            this.show_list = true;
        }
    }
    click_item(val, id, coef, type) {
        //this.depart_venue = null;
        //this.destination = null; 
        if (type == 0) {
            //set departure
            this.depart_venue = id;
            //console.log("depart id :", this.depart_venue);
            //set coef 
            this.coef1 = parseFloat(coef);
            for (let i = 0; i < this.list_original1.length; i++) {
                if (this.list_to_show1[val].destination.toUpperCase() === this.list_original1[i].destination.toUpperCase()) {
                    this.selected_index = i;
                    //print the selected departure
                    this.searchQuery1 = this.list_to_show1[val].destination;
                    // set the depart to be search
                    this.depart_to_be_search = this.list_to_show1[val];
                    break;
                }
            }
            this.show_list1 = false;
        }
        else {
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
    }
    change_query(query, i) {
        if (i == 0) {
            let k = 0;
            this.list_to_show1 = [
                {
                    'id': '',
                    'destination': '',
                    'coefficient': ''
                }
            ];
            for (let i = 0; i < this.list_original1.length; i++) {
                if (this.list_original1[i].destination.toUpperCase().includes(query.toUpperCase())) {
                    this.list_to_show1[k] = this.list_original1[i];
                    k += 1;
                }
            }
        }
        else {
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