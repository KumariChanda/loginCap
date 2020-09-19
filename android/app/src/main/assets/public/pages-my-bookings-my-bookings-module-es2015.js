(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-bookings-my-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n       <ion-item>\n        <ion-buttons slot=\"start\"  *ngIf=\"reservDetails==null\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n      <!-- prev icon -->\n           <ion-icon style=\"margin-right:20%\" color=\"light\" name=\"chevron-back\" (click)=\"prev()\" *ngIf=\"reservDetails!=null\" ></ion-icon>\n        <ion-title > {{\"DASHBOARD.my_bookings\" | translate}} </ion-title>\n    </ion-item> \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\">\n\n    <!-- --------------------- if  reservDetails== null----------------------------------------------------------------- -->\n       \n     <div *ngIf=\"reservDetails==null\">\n        <!-- Start reservation -->\n       <ion-card *ngFor=\"let item of filterData ; index as i\" >\n          \n          \n        <img [src]=\"item?.photo_car[0]?.image\" />\n\n            <ion-card-header>\n                    <ion-item> \n                        <ion-card-title >{{item.modele}}</ion-card-title>\n\n                        <ion-icon *ngIf=\"item.etape_location==1\" style=\"color: #ffa60a\" slot=\"end\"\n                          name=\"close-circle-outline\" (click)=\"cancel(i)\">\n                         \n                         </ion-icon>\n                        \n                        <ion-icon *ngIf=\"item.etape_location==5 && (item.note_client == 0 ||item.note_client==null)\" style=\"color:#ffa60a \" slot=\"end\"\n                          name=\"open-outline\" (click)=\"Mark(i)\">\n                         \n                         </ion-icon> \n\n                    </ion-item>\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <ion-item>\n                    <ion-label > {{ \"RESERVECAR.booking_status\" | translate }} </ion-label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\" *ngIf=\"item.etape_location == 1 && lang=='fr'\" > En cours de traitement </label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\" *ngIf=\"item.etape_location == 1 && lang=='en'\"> Being processed </label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\" *ngIf=\"item.etape_location == 2 && lang=='fr'\" > Confirmée </label>\n                    <label  *ngIf=\"item.etape_location == 2 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Confirmed </label>\n                    <label *ngIf=\"item.etape_location == 3 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Rejetée </label>\n                    <label  *ngIf=\"item.etape_location == 3 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Rejected  </label>\n                    <label  *ngIf=\"item.etape_location == 4 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Réservation Débutée </label>\n                    <label  *ngIf=\"item.etape_location == 4 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Reservation started </label>\n                    <label  *ngIf=\"item.etape_location == 5 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Réservation terminée </label>\n                    <label  *ngIf=\"item.etape_location == 5 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\">Reservation completed </label>\n                    <label  *ngIf=\"item.etape_location == 6 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Annulée </label>\n                    <label  *ngIf=\"item.etape_location == 6 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Cancelled </label>\n                  \n                </ion-item>\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > {{ \"RESERVECAR.booking_start_date\" | translate }} </ion-label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\"> {{item.date_debut}} </label>\n                </ion-item>\n                  <!-- Destination -->\n            \n               <ion-item>\n                    <label  > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"color:white; width: 150px\"> {{item.destination}} </label>\n                </ion-item>\n\n                \n\n              </ion-card-subtitle>\n            </ion-card-header>\n\n\n            <ion-card-content>\n\n                  <!-- button View details-->\n                  <ion-button  style=\"margin-left:30%\" (click) = \"viewDetails(i)\" >\n                      <ion-label >{{ \"RESERVECAR.booking_view_detail\" | translate }}</ion-label>\n                  </ion-button>\n          \n            </ion-card-content>\n        </ion-card>\n                  <!-- Stop Reservation -->\n      </div>  \n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n    <!-- --------------------- if  reservDetails!= null----------------------------------------------------------------- -->\n       \n     <div *ngIf=\"reservDetails!=null\">\n        <!-- Start reservation -->\n       <ion-card *ngIf=\"reservDetails \" >\n          \n          \n        <img [src]=\"reservDetails?.photo_car[0]?.image\" />\n\n            <ion-card-header>\n                    <ion-card-title >{{reservDetails.modele}}</ion-card-title>\n\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_status\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 1 && lang=='fr'\" > En cours de traitement </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 1 && lang=='en'\" > Being processed </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 2 && lang=='fr'\" > Confirmée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 2 && lang=='en'\" > Confirmed </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 3 && lang=='fr'\"> Rejetée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 3 && lang=='en'\" > Rejected  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 4 && lang=='fr'\" > Réservation Débutée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 4 && lang=='en'\" > Reservation started </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 5 && lang=='fr'\" > Réservation terminée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 5 && lang=='en'\" >Reservation completed </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 6 && lang=='fr'\" > Annulée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 6 && lang=='en'\" > Cancelled </label>             \n                </ion-item>\n               \n                <!-- Booking Type  -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_type\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  *ngIf=\"reservDetails.type_location == 3\"> {{ \"RESERVECAR.airport_pick\" | translate }}  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.type_location == 2\"> {{ \"RESERVECAR.per_hour\" | translate }}  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.type_location == 1\"> {{ \"RESERVECAR.per_day\" | translate }}   </label>\n                </ion-item>\n                <!-- Location date -->\n                 <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\"  > {{ \"RESERVECAR.booking_date\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_location}} </label>\n                </ion-item>\n                \n                <!-- Starting date -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_debut}} </label>\n                </ion-item>\n                  <!-- Starting time -->\n                <ion-item >\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.start_time\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.heure_debut}} </label>\n                </ion-item>\n                <!-- Return date -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.booking_end_date\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_fin}} </label>\n                </ion-item>\n              \n                <!-- Return time -->\n                <ion-item *ngIf=\"reservDetails.type_location == 2\">\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.return_time\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.heure_fin}} </label>\n                </ion-item>\n                  <!-- Departure -->\n            \n               <ion-item  *ngIf=\"reservDetails.type_location == 3\">\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.departure\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.depart}} </label>\n                </ion-item>\n                  <!-- Destination -->\n            \n               <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.destination}} </label>\n                </ion-item>\n\n                  <!-- Price -->\n            \n               <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_price\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.montant}} F CFA </label>\n                </ion-item>\n                  <!-- your comment/ message -->\n            \n               <ion-item>\n                    <label > {{ \"RESERVECAR.booking_your_message\" | translate }} </label>\n                </ion-item> \n    \n                <ion-label style=\"color:white;margin-right:10%; margin-left:7%; text-align:justify;\">\n                   {{reservDetails.message}}  \n                </ion-label>\n\n                <!-- your marks: -->\n            \n               <ion-item *ngIf=\"reservDetails.note_client>0\">\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.marks\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==1 && lang == 'fr'\"> Très Mauvais </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==1 && lang == 'en'\"> Very Bad </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==2 && lang == 'fr'\"> Mauvais </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==2 && lang == 'en'\"> Bad </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==3 && lang == 'fr'\"> Moyen </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==3 && lang == 'en'\"> Average </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==4 && lang == 'fr'\"> Bien </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==4 && lang == 'en'\"> Bien </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==5 && lang == 'fr'\"> Très Bien </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==5 && lang == 'en'\"> Very good </label>\n                </ion-item>\n\n                \n\n              </ion-card-subtitle>\n            </ion-card-header>\n\n\n            <ion-card-content>\n  \n            </ion-card-content>\n          </ion-card>\n        <!-- Stop Reservation -->\n      </div>  \n    <!-- -------------------------------------------------------------------------------------- -->\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/my-bookings/my-bookings-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/my-bookings/my-bookings-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyBookingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingsPageRoutingModule", function() { return MyBookingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-bookings.page */ "./src/app/pages/my-bookings/my-bookings.page.ts");




const routes = [
    {
        path: '',
        component: _my_bookings_page__WEBPACK_IMPORTED_MODULE_3__["MyBookingsPage"]
    }
];
let MyBookingsPageRoutingModule = class MyBookingsPageRoutingModule {
};
MyBookingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyBookingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-bookings/my-bookings.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-bookings/my-bookings.module.ts ***!
  \*********************************************************/
/*! exports provided: MyBookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingsPageModule", function() { return MyBookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-bookings-routing.module */ "./src/app/pages/my-bookings/my-bookings-routing.module.ts");
/* harmony import */ var _my_bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-bookings.page */ "./src/app/pages/my-bookings/my-bookings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let MyBookingsPageModule = class MyBookingsPageModule {
};
MyBookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyBookingsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_my_bookings_page__WEBPACK_IMPORTED_MODULE_6__["MyBookingsPage"]]
    })
], MyBookingsPageModule);



/***/ }),

/***/ "./src/app/pages/my-bookings/my-bookings.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-bookings/my-bookings.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button, ion-chip {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nlabel {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXG15LWJvb2tpbmdzXFxteS1ib29raW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LWJvb2tpbmdzL215LWJvb2tpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRGVBO0VBRUksY0FBQTtBQ2JKOztBRGdCQTtFQUVJLFlBQUE7QUNkSjs7QURnQkE7RUFFSSxnQkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvbXktYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uLGlvbi1jaGlwXG57XG4gIGNvbG9yOiBibGFjazsgXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XG5cbn1cblxuLy8gaW9uLWNoaXBcbi8vIHtcbi8vICAgICBjb2xvcjogYmxhY2s7IFxuLy8gICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbi8vIH1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59XG5sYWJlbFxue1xuICAgIGZvbnQtc2l6ZTowLjllbTtcbn0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiwgaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/my-bookings/my-bookings.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-bookings/my-bookings.page.ts ***!
  \*******************************************************/
/*! exports provided: MyBookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingsPage", function() { return MyBookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage
let MyBookingsPage = class MyBookingsPage {
    constructor(webService, router, alertController) {
        this.webService = webService;
        this.router = router;
        this.alertController = alertController;
        this.show = false;
        this.reservDetails = null;
        this.DataTosend = {
            "date_location": "",
            "date_debut": "",
            "date_fin": "",
            "montant": 0,
            "client": 0,
            "voiture": 0,
            "type_location": 0,
            "depart": null,
            "note_client": null,
            "destination": 0,
            "message": "",
            "etape_location": 0,
            "optionnel": [],
        };
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
                "chauffeur": 0,
                "voiture": 0,
                "type_location": 0,
                "depart": 0,
                "depart_id": 0,
                "destination": 0,
                "destination_id": 0,
                "message": "",
                "etape_location": 0,
                "optionnel": [],
                "photo_car": [{ "image": "" }],
                "modele": ""
            }
        ];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //start laoder
            this.webService.presentLoading();
            //get token
            this.token = (yield Storage.get({ key: 'accessToken' })).value;
            //get user id
            this.userId = JSON.parse((yield Storage.get({ key: "user_infos" })).value).id;
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            //get Booking list
            this.webService.getClientReservation(this.userId, this.token).subscribe(res => {
                console.log(res);
                if (res.detail) // that means the is error or no value exist for this user
                 {
                    if (this.lang == "fr") {
                        alert("Aucune Reservation \n Retour à la page accueil");
                    }
                    else {
                        alert("No Booking \n Back Home Page");
                    }
                    this.router.navigateByUrl("/dashboard");
                }
                else {
                    //check if the booking list is empty or not
                    if (res.length == 0) {
                        if (this.lang == "fr") {
                            alert("Votre Liste de Reservation est vide !! ");
                        }
                        else {
                            alert(" Your Booking List is Empty !!");
                        }
                        //stop loader
                        this.webService.stopLoading();
                        this.router.navigate(["/dashboard"]);
                    }
                    else {
                        for (let i = 0; i < res.length; i++) {
                            //receive the res
                            this.filterData[i] = res[i];
                            this.filterData[i].heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
                            this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
                            this.filterData[i].heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];
                            this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
                            this.filterData[i].date_location = res[i].date_location.split("T")[0];
                            this.filterData[i].destination_id = res[i].destination;
                            this.filterData[i].depart_id = res[i].depart;
                            //call the car according to the id 
                            this.webService.getCarDetails(res[i].voiture).subscribe(car => {
                                console.log(car);
                                //pictures of car
                                this.filterData[i].photo_car = car.photo;
                                //modele
                                this.filterData[i].modele = car.modele.libelle;
                                this.filterData[i].modele = car.modele.libelle;
                                // //get depart
                                // this.webService.getSingleDestination(res[i].depart).subscribe(dep =>{
                                //     console.log(dep);
                                //   this.filterData[i].depart = dep.destination;
                                // });
                                // //end get depart
                                //get destination
                                this.webService.getSingleDestination(res[i].destination).subscribe(dest => {
                                    console.log(dest);
                                    this.filterData[i].destination = dest.destination;
                                    if (res.depart > 0) {
                                        //get depart
                                        this.webService.getSingleDestination(res[i].depart).subscribe(dep => {
                                            console.log(dep);
                                            this.filterData[i].depart = dep.destination;
                                            //stop loader
                                            this.show = true;
                                            this.webService.stopLoading();
                                        });
                                        //end get depart
                                    }
                                });
                                //end get destination
                                //stop loader
                                // this.show = true
                                // this.webService.stopLoading();
                            });
                            //end get car infos
                        } //end for loop
                    }
                }
            });
            ///end get booking list
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////prev////////////////////////////////////////////////////
    prev() {
        this.reservDetails = null;
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////view details////////////////////////////////////////
    viewDetails(i) {
        this.reservDetails = this.filterData[i];
        // this.reservDetails.date_location = this.filterData[i].date_location.split("T")[0];
        // this.reservDetails.date_debut = this.filterData[i].date_debut.split(".")[0];
        // this.reservDetails.date_fin = this.filterData[i].date_fin.split(".")[0];
        // this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
        // this.filterData[i].heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
        // this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
        // this.filterData[i].heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];
        console.log(this.reservDetails);
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////Cancel ////////////////////////////////////////////////////
    cancel(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var lang = (yield Storage.get({ key: LNG_KEY })).value;
            if (lang == "fr") {
                var textcancel = "Non ";
                var textok = "Oui ";
                var message = "Voulez-vous annuler cette reservation? ";
                var myheader = "Annulation ";
            }
            else {
                var textcancel = "No ";
                var textok = "Yes ";
                var message = "Do you want to cancel this Booking? ";
                var myheader = "Cancellation ";
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: myheader,
                message: '<strong>' + message + '</strong>',
                buttons: [
                    {
                        text: textcancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: textok,
                        handler: () => {
                            //change the location type ;
                            this.filterData[id].etape_location = 6;
                            //   this.DataTosend.id = this.filterData[id].id;
                            this.DataTosend.date_location = this.filterData[id].date_location + "T" + this.filterData[id].heure_debut + ".961Z";
                            this.DataTosend.date_debut = this.filterData[id].date_debut + "T" + this.filterData[id].heure_debut + ".961Z";
                            this.DataTosend.date_fin = this.filterData[id].date_fin + "T" + this.filterData[id].heure_fin + ".961Z";
                            this.DataTosend.montant = this.filterData[id].montant;
                            this.DataTosend.message = this.filterData[id].message;
                            this.DataTosend.note_client = null;
                            this.DataTosend.client = this.filterData[id].client;
                            this.DataTosend.voiture = this.filterData[id].voiture;
                            this.DataTosend.type_location = this.filterData[id].type_location;
                            this.DataTosend.depart = this.filterData[id].depart_id;
                            this.DataTosend.destination = this.filterData[id].destination_id;
                            this.DataTosend.etape_location = 6;
                            this.DataTosend.optionnel = this.filterData[id].optionnel;
                            console.log(this.DataTosend);
                            //call the EditLocation API 
                            this.webService.presentLoading(); // present loader
                            this.webService.EditLocation(this.filterData[id].id, this.token, this.DataTosend).subscribe(res => {
                                if (res.id) {
                                    this.webService.stopLoading();
                                    this.myAlert(0, this.lang);
                                }
                                else {
                                    this.webService.stopLoading();
                                    this.myAlert(1, this.lang);
                                }
                            }, error => {
                                this.webService.stopLoading();
                                this.myAlert(1, this.lang);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////prev////////////////////////////////////////////////////
    Mark(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var lang = (yield Storage.get({ key: LNG_KEY })).value;
            if (lang == "fr") {
                var textcancel = "Annuler ";
                var textok = "Valider ";
                var message = "Comment était le trajet ? ";
                var very_bad = "Très Mauvais ";
                var bad = "Mauvais ";
                var average = "Moyen ";
                var good = "Bien ";
                var very_good = "Très Bien ";
            }
            else {
                var textcancel = "Cancel ";
                var textok = "OK ";
                var message = "How was the ride ?";
                var very_bad = "Very Bad ";
                var bad = "Bad ";
                var average = "Average ";
                var good = "Good ";
                var very_good = "Very Good ";
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: message,
                inputs: [
                    {
                        name: very_good,
                        type: 'radio',
                        label: very_good,
                        value: 5,
                        checked: true
                    },
                    {
                        name: good,
                        type: 'radio',
                        label: good,
                        value: 4
                    },
                    {
                        name: average,
                        type: 'radio',
                        label: average,
                        value: 3
                    },
                    {
                        name: bad,
                        type: 'radio',
                        label: bad,
                        value: 2
                    },
                    {
                        name: very_bad,
                        type: 'radio',
                        label: very_bad,
                        value: 1,
                    },
                ],
                buttons: [
                    {
                        text: textcancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: textok,
                        handler: (data) => {
                            console.log('Radio', data);
                            //change the  Marks given by the customer ;
                            this.filterData[id].note_client = data;
                            //   this.DataTosend.id = this.filterData[id].id;
                            this.DataTosend.date_location = this.filterData[id].date_location + "T" + this.filterData[id].heure_debut + ".961Z";
                            this.DataTosend.date_debut = this.filterData[id].date_debut + "T" + this.filterData[id].heure_debut + ".961Z";
                            this.DataTosend.date_fin = this.filterData[id].date_fin + "T" + this.filterData[id].heure_fin + ".961Z";
                            this.DataTosend.montant = this.filterData[id].montant;
                            this.DataTosend.message = this.filterData[id].message;
                            this.DataTosend.note_client = data;
                            this.DataTosend.client = this.filterData[id].client;
                            this.DataTosend.voiture = this.filterData[id].voiture;
                            this.DataTosend.type_location = this.filterData[id].type_location;
                            this.DataTosend.depart = this.filterData[id].depart_id;
                            this.DataTosend.destination = this.filterData[id].destination_id;
                            this.DataTosend.etape_location = this.filterData[id].etape_location;
                            this.DataTosend.optionnel = this.filterData[id].optionnel;
                            console.log(this.DataTosend);
                            //call the EditLocation API 
                            this.webService.presentLoading(); // present loader
                            this.webService.EditLocation(id, this.token, this.filterData[id]).subscribe(res => {
                                if (res.id) {
                                    this.webService.stopLoading();
                                    this.myAlert(0, this.lang);
                                }
                                else {
                                    this.webService.stopLoading();
                                    this.myAlert(1, this.lang);
                                }
                            }, error => {
                                this.webService.stopLoading();
                                this.myAlert(1, this.lang);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //alert 2 method
    myAlert(id, lang) {
        if (id == 0) {
            if (lang == "fr") {
                alert("Votre Requête a été envoyée avec succès !");
            }
            else {
                alert("Your Request has been sent successfully !");
            }
            this.router.navigateByUrl("/my-bookings");
        }
        else {
            if (lang == "fr") {
                alert("Désolé, une erreur s'est produite.");
            }
            else {
                alert("Sorry, an error has occurred.");
            }
        }
    }
};
MyBookingsPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
MyBookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-bookings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-bookings.page.scss */ "./src/app/pages/my-bookings/my-bookings.page.scss")).default]
    })
], MyBookingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-bookings-my-bookings-module-es2015.js.map