(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-bookings-my-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n       <ion-item>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title> My Bookings  </ion-title>\n    </ion-item> \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n          <!-- -------------------------------------------------------------------------------------- -->\n        <!-- Start contact -->\n       <ion-card *ngFor=\"let item of filterData \" >\n          \n          \n        <img [src]=\"item.picture\" />\n\n            <ion-card-header>\n                    <ion-card-title >{{item.title}}</ion-card-title>\n\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <ion-item>\n                    <ion-label > Status : </ion-label>\n                    <ion-chip slot=\"end\" *ngIf=\"item.status == 0\" style=\"color:red\"> Cancelled </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.status == 1\" style=\"color:orange\"> Not yet confirmed </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.status == 2\" style=\"color:blue\"> confirmed </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.status == 3\" style=\"color:violet\"> Trip started </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.status == 4\" style=\"color:green\"> Trip Completed </ion-chip>\n                </ion-item>\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > Start Date : </ion-label>\n                    <ion-chip slot=\"end\"> 12 Aug 2020 </ion-chip>\n                </ion-item>\n                  <!-- Destination -->\n            \n               <ion-item>\n                    <ion-label > Destination : </ion-label>\n                    <ion-chip slot=\"end\"> Daoukro </ion-chip>\n                </ion-item>\n\n                \n\n              </ion-card-subtitle>\n            </ion-card-header>\n\n\n            <ion-card-content>\n                                        \n                   <!-- button View details-->\n                  <ion-button  style=\"margin-left:30%\"  >\n                      <ion-label >View details</ion-label>\n                  </ion-button>\n          \n            </ion-card-content>\n      </ion-card>\n        <!-- Stop Contact -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n\n</ion-content>\n");

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







let MyBookingsPageModule = class MyBookingsPageModule {
};
MyBookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyBookingsPageRoutingModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL215LWJvb2tpbmdzL215LWJvb2tpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvbXktYm9va2luZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBRUksY0FBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvbXktYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uXG57XG4gIGNvbG9yOiBibGFjazsgXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XG5cbn1cblxuaW9uLWNoaXBcbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

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


let MyBookingsPage = class MyBookingsPage {
    constructor() {
        this.show = false;
        this.filterData = [
            {
                title: 'MERCEDEZ BENZ, VEHICULE FAMILIAL',
                picture: '../assets/images/car1.jpg',
                status: 0
            },
            {
                title: 'MERCEDEZ BENZ, MINI BUS METRIS',
                picture: '../assets/images/car2.jpg',
                status: 1
            },
            {
                title: 'MITSUBISHI , PAJERO SUV 4X4',
                picture: '../assets/images/car3.jpg',
                status: 0
            },
            {
                title: 'TOYOTA , Pick up 4X4 SUV',
                picture: '../assets/images/car4.jpg',
                status: 2
            },
            {
                title: 'TOYOTA , Pick up 4X4 SUV',
                picture: '../assets/images/car4.jpg',
                status: 3
            },
            {
                title: 'VOLKSWAGEN , CITADINE PSSAT',
                picture: '../assets/images/car5.jpg',
                status: 4
            },
        ];
    }
    ngOnInit() {
    }
};
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