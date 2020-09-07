(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n   <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title class=\"register\">Change Password</ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content >\n  <div class=\"backgroundcss\">\n    <div id=\"container\">\n      <ion-card class=\"cardcss\" >\n           <hr/>\n        <ion-card-content>\n           <ion-input class=\"inputcomp\" type=\"password\"  placeholder=\"Old Password*\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"password\"  placeholder=\"New Password*\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"password\"  placeholder=\"Confirm Password*\"></ion-input>\n          <br>\n          <div class=\"divloginbtn\">\n            <br>\n            <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\n            'loginbtn_yellow':btnClicked == true}\" (click)=\"changePassword()\">Change Password</button>\n           </div>\n           <br>  \n          <br>\n        </ion-card-content>\n      </ion-card>\n     </div>\n\n    </div>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/change-password/change-password-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/change-password/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/change-password/change-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/pages/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/change-password/change-password.page.ts");







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/pages/change-password/change-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-55%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 50vw;\n  margin-bottom: 22vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUdJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNKUjs7QURRSTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ1BSOztBRFVNO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0QsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDVFI7O0FEb0JNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNqQlI7O0FEcUJNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbEJSOztBRHNCTTtFQUNFLGtCQUFBO0FDbkJSOztBRHNCTTtFQUNFLGNBQUE7QUNuQlI7O0FENkJJO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDNUJOOztBRGdDSTtFQUVJLG1CQUFBO0FDOUJSOztBRGdDSTtFQUVJLGNBQUE7QUM5QlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLy8gcGFnZS1ob21lIHtcbiAgXG4gICAgI2NvbnRhaW5lciB7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgICB9XG4gICAgXG4gICAgLmxvZ2luYnRuX2JsYWNrXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICAgICAgY29sb3I6ICNkMzllMWE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDN2dztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjB2dztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5sb2dpbmJ0bl95ZWxsb3dcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gICAgICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzdnc7XG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgICAgICAgIHBhZGRpbmctbGVmdDogMjB2dztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xuICAgICAgfVxuICAgIFxuICAgIC8vIC5sb2dpbkxhYmVsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgLy8gICAgIGNvbG9yOiBibGFjaztcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgfVxuICAgIFxuICAgICAgLmlucHV0Y29tcHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICAgICAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xuICAgICAgfVxuICAgIFxuICAgICAgLmNhcmRjc3N7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwdnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIydnc7XG4gICAgICB9XG4gICAgICAgXG4gICAgXG4gICAgICAuZGl2bG9naW5idG57XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5yZWdpc3RlcntcbiAgICAgICAgY29sb3I6I2QzOWUxYTtcbiAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDN2dyFpbXBvcnRhbnQ7ICAgIFxuICAgICAgfVxuICAgIFxuICAgIC8vICAgZGl2LmxhYmVsVGV4dHsgICAgICAgXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG4gICAgLy8gfVxuICAgIFxuICAgIC5iYWNrZ3JvdW5kY3Nze1xuICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIG1hcmdpbjogMHZ3O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLy8gb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICBcbiAgICBpb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxuICAgIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgfVxuICAgIGlvbi1idXR0b25zXG4gICAge1xuICAgICAgICBjb2xvcjogICNmZmE2MGE7XG4gICAgfVxuICAgICIsIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xufVxuXG4ubG9naW5idG5fYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICNkMzllMWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAzdnc7XG4gIHBhZGRpbmctcmlnaHQ6IDIwdnc7XG4gIHBhZGRpbmctYm90dG9tOiAzdnc7XG4gIHBhZGRpbmctbGVmdDogMjB2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3Z3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICBwYWRkaW5nLWxlZnQ6IDIwdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmlucHV0Y29tcCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cblxuLmNhcmRjc3Mge1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA1MHZ3O1xuICBtYXJnaW4tYm90dG9tOiAyMnZ3O1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xufVxuXG4uYmFja2dyb3VuZGNzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50LCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/change-password/change-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ChangePasswordPage = class ChangePasswordPage {
    constructor() {
        this.btnClicked = false;
    }
    ngOnInit() {
    }
    changePassword() {
        this.btnClicked = true;
        setTimeout(() => {
            this.btnClicked = false;
        }, 1000);
    }
};
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/change-password/change-password.page.scss")).default]
    })
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-change-password-change-password-module-es2015.js.map