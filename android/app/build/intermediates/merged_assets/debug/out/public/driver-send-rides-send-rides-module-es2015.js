(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-send-rides-send-rides-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-rides/send-rides.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-rides/send-rides.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>send-rides</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/driver/send-rides/send-rides-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/driver/send-rides/send-rides-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SendRidesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRidesPageRoutingModule", function() { return SendRidesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _send_rides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-rides.page */ "./src/app/driver/send-rides/send-rides.page.ts");




const routes = [
    {
        path: '',
        component: _send_rides_page__WEBPACK_IMPORTED_MODULE_3__["SendRidesPage"]
    }
];
let SendRidesPageRoutingModule = class SendRidesPageRoutingModule {
};
SendRidesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendRidesPageRoutingModule);



/***/ }),

/***/ "./src/app/driver/send-rides/send-rides.module.ts":
/*!********************************************************!*\
  !*** ./src/app/driver/send-rides/send-rides.module.ts ***!
  \********************************************************/
/*! exports provided: SendRidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRidesPageModule", function() { return SendRidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _send_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-rides-routing.module */ "./src/app/driver/send-rides/send-rides-routing.module.ts");
/* harmony import */ var _send_rides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-rides.page */ "./src/app/driver/send-rides/send-rides.page.ts");







let SendRidesPageModule = class SendRidesPageModule {
};
SendRidesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _send_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendRidesPageRoutingModule"]
        ],
        declarations: [_send_rides_page__WEBPACK_IMPORTED_MODULE_6__["SendRidesPage"]]
    })
], SendRidesPageModule);



/***/ }),

/***/ "./src/app/driver/send-rides/send-rides.page.scss":
/*!********************************************************!*\
  !*** ./src/app/driver/send-rides/send-rides.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci9zZW5kLXJpZGVzL3NlbmQtcmlkZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/driver/send-rides/send-rides.page.ts":
/*!******************************************************!*\
  !*** ./src/app/driver/send-rides/send-rides.page.ts ***!
  \******************************************************/
/*! exports provided: SendRidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRidesPage", function() { return SendRidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SendRidesPage = class SendRidesPage {
    constructor() { }
    ngOnInit() {
    }
};
SendRidesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-rides',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./send-rides.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-rides/send-rides.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./send-rides.page.scss */ "./src/app/driver/send-rides/send-rides.page.scss")).default]
    })
], SendRidesPage);



/***/ })

}]);
//# sourceMappingURL=driver-send-rides-send-rides-module-es2015.js.map