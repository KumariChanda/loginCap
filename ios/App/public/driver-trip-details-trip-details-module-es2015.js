(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-trip-details-trip-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/trip-details/trip-details.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/trip-details/trip-details.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n      <ion-item>\n\n        <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n        <ion-title>Trip Details</ion-title>\n\n      </ion-item>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Trip/voyage Details -->\n \n\n\n     <ion-card *ngFor=\"let item of filterData\">\n    \n        <img [src]=\"item.picture\" />\n        <ion-card-header>\n                 <ion-card-title >{{item.title}}</ion-card-title>\n\n          <ion-card-subtitle>\n             \n                <!-- Car Number -->\n            \n               <ion-item>\n                    <ion-label > Car Number : </ion-label>\n                    <ion-chip slot=\"end\"> PB 00125 </ion-chip>\n                </ion-item>\n\n                <!-- Destination -->\n            \n               <ion-item>\n                    <ion-label > Destination : </ion-label>\n                    <ion-chip slot=\"end\"> Daoukro </ion-chip>\n                </ion-item>\n\n               <!-- Reservation Type -->\n                <ion-item>\n                    <ion-label > Booking Type : </ion-label>\n                    <ion-chip slot=\"end\"> Per Hour </ion-chip>\n                </ion-item>\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > Start Date : </ion-label>\n                    <ion-chip slot=\"end\"> 12 Aug 2020 </ion-chip>\n                </ion-item>\n                \n                <!-- Starting time -->\n                <ion-item>\n                    <ion-label > Start Time : </ion-label>\n                    <ion-chip slot=\"end\"> 12 : 10 </ion-chip>\n                </ion-item>\n               \n                <!-- Return date -->\n                <ion-item>\n                    <ion-label > Return Date : </ion-label>\n                    <ion-chip slot=\"end\"> 13 Aug 2020 </ion-chip>\n                </ion-item>\n                \n                <!-- Return time -->\n                <ion-item>\n                    <ion-label > Return Time : </ion-label>\n                    <ion-chip slot=\"end\"> 12 : 10 </ion-chip>\n                </ion-item>\n               \n\n                <!-- Client name -->\n                <ion-item>\n                    <ion-label > Client Name: </ion-label>\n                    <ion-chip slot=\"end\"> Oumarou Toto </ion-chip>\n                </ion-item>\n                <!-- Motor Type -->\n                <ion-item>\n                    <ion-label > Motor Type: </ion-label>\n                    <ion-chip slot=\"end\"> Diesel </ion-chip>\n                </ion-item>\n                <!-- Seat number -->\n                <ion-item>\n                    <ion-label > Seat Number: </ion-label>\n                    <ion-chip slot=\"end\"> 9 </ion-chip>\n                </ion-item>\n\n               \n\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n                        \n        \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-toolbar> -->\n          <!-- Start the trip  -->\n    <ion-button expand=\"full\"  >Start The Trip </ion-button>\n   \n  <!-- </ion-toolbar> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/driver/trip-details/trip-details-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/driver/trip-details/trip-details-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TripDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsPageRoutingModule", function() { return TripDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _trip_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-details.page */ "./src/app/driver/trip-details/trip-details.page.ts");




const routes = [
    {
        path: '',
        component: _trip_details_page__WEBPACK_IMPORTED_MODULE_3__["TripDetailsPage"]
    }
];
let TripDetailsPageRoutingModule = class TripDetailsPageRoutingModule {
};
TripDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TripDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/driver/trip-details/trip-details.module.ts":
/*!************************************************************!*\
  !*** ./src/app/driver/trip-details/trip-details.module.ts ***!
  \************************************************************/
/*! exports provided: TripDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsPageModule", function() { return TripDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-details-routing.module */ "./src/app/driver/trip-details/trip-details-routing.module.ts");
/* harmony import */ var _trip_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-details.page */ "./src/app/driver/trip-details/trip-details.page.ts");







let TripDetailsPageModule = class TripDetailsPageModule {
};
TripDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripDetailsPageRoutingModule"]
        ],
        declarations: [_trip_details_page__WEBPACK_IMPORTED_MODULE_6__["TripDetailsPage"]]
    })
], TripDetailsPageModule);



/***/ }),

/***/ "./src/app/driver/trip-details/trip-details.page.scss":
/*!************************************************************!*\
  !*** ./src/app/driver/trip-details/trip-details.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL2RyaXZlci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZHJpdmVyL3RyaXAtZGV0YWlscy90cmlwLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBRUksY0FBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvZHJpdmVyL3RyaXAtZGV0YWlscy90cmlwLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uXG57XG4gIGNvbG9yOiBibGFjazsgXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XG5cbn1cblxuaW9uLWNoaXBcbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/driver/trip-details/trip-details.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/driver/trip-details/trip-details.page.ts ***!
  \**********************************************************/
/*! exports provided: TripDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsPage", function() { return TripDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let TripDetailsPage = class TripDetailsPage {
    constructor(router) {
        this.router = router;
        this.logo1 = '../assets/images/logo1.jpg';
        this.dataToSend = {
            "name": "",
            "alias": " "
        };
        //////////////////////////////search barelements
        //////////////////////////////////////
        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [
            {
                motorType: 'Diesel',
                model: 'Model 2018',
                seatNumber: '9',
                pricePerDay: '65000',
                title: 'MERCEDEZ BENZ, VEHICULE FAMILIAL',
                picture: '../assets/images/car1.jpg',
                status: 0
            },
        ];
    }
    ngOnInit() {
    }
    //////////////////////////////////////////////////////////////
    ////back to home ///
    prev() {
        this.router.navigateByUrl("/home");
    }
};
TripDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TripDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trip-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/trip-details/trip-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trip-details.page.scss */ "./src/app/driver/trip-details/trip-details.page.scss")).default]
    })
], TripDetailsPage);



/***/ })

}]);
//# sourceMappingURL=driver-trip-details-trip-details-module-es2015.js.map