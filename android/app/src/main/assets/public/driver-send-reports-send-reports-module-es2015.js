(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-send-reports-send-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-reports/send-reports.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-reports/send-reports.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>send-reports</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/driver/send-reports/send-reports-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SendReportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportsPageRoutingModule", function() { return SendReportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _send_reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-reports.page */ "./src/app/driver/send-reports/send-reports.page.ts");




const routes = [
    {
        path: '',
        component: _send_reports_page__WEBPACK_IMPORTED_MODULE_3__["SendReportsPage"]
    }
];
let SendReportsPageRoutingModule = class SendReportsPageRoutingModule {
};
SendReportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendReportsPageRoutingModule);



/***/ }),

/***/ "./src/app/driver/send-reports/send-reports.module.ts":
/*!************************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports.module.ts ***!
  \************************************************************/
/*! exports provided: SendReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportsPageModule", function() { return SendReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _send_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-reports-routing.module */ "./src/app/driver/send-reports/send-reports-routing.module.ts");
/* harmony import */ var _send_reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-reports.page */ "./src/app/driver/send-reports/send-reports.page.ts");







let SendReportsPageModule = class SendReportsPageModule {
};
SendReportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _send_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendReportsPageRoutingModule"]
        ],
        declarations: [_send_reports_page__WEBPACK_IMPORTED_MODULE_6__["SendReportsPage"]]
    })
], SendReportsPageModule);



/***/ }),

/***/ "./src/app/driver/send-reports/send-reports.page.scss":
/*!************************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci9zZW5kLXJlcG9ydHMvc2VuZC1yZXBvcnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/driver/send-reports/send-reports.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports.page.ts ***!
  \**********************************************************/
/*! exports provided: SendReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportsPage", function() { return SendReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SendReportsPage = class SendReportsPage {
    constructor() { }
    ngOnInit() {
    }
};
SendReportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./send-reports.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-reports/send-reports.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./send-reports.page.scss */ "./src/app/driver/send-reports/send-reports.page.scss")).default]
    })
], SendReportsPage);



/***/ })

}]);
//# sourceMappingURL=driver-send-reports-send-reports-module-es2015.js.map