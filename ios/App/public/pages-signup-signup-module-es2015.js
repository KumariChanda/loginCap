(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"header_signup\">\r\n   <ion-toolbar>\r\n     <div class=\"header_signup\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </ion-toolbar> \r\n</ion-header> -->\r\n\r\n<ion-content >\r\n  <div class=\"backgroundcss\">\r\n    <div id=\"container\">\r\n      <ion-card class=\"cardcss\" >\r\n          <h3 class=\"loginLabel\">{{'SIGNUP.signup' | translate }}</h3>\r\n           <!-- <hr/> -->\r\n        <ion-card-content>\r\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"firstname\"  placeholder=\"{{'SIGNUP.first_name' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"text\"  [(ngModel)]=\"lastname\"  placeholder=\"{{'SIGNUP.last_name' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"email\" [(ngModel)]=\"email\"  placeholder=\"{{'SIGNUP.email' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)]=\"password\"  placeholder=\"{{'SIGNUP.password' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"password\"  [(ngModel)]=\"confirmpassword\" placeholder=\"{{'SIGNUP.confirm_password' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"number\" [(ngModel)]=\"mobilenumber\" placeholder=\"{{'SIGNUP.mobile_num' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"address\"  placeholder=\"{{'SIGNUP.address' | translate }}\"></ion-input>\r\n          <br>\r\n          <!-- <ion-input class=\"inputcomp\" type=\"date\"  [(ngModel)]=\"dob\"></ion-input> -->\r\n          <!-- <br> -->\r\n          \r\n          <input type=\"checkbox\" [(ngModel)]=\"agreement\">&nbsp;&nbsp;<ion-router-link href=\"/term-usage\" class=\"register\"><b>{{'SIGNUP.term_condition' | translate }}</b></ion-router-link>\r\n          \r\n          <div class=\"divloginbtn\">\r\n            <br>\r\n            <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\r\n            'loginbtn_yellow':btnClicked == true}\" (click)=\"signupFun()\">{{'SIGNUP.signup_btn' | translate }}</button>\r\n           </div>\r\n           <br>  \r\n           <div class=\"labelText\">\r\n             <span>{{'SIGNUP.already_account' | translate }} </span>\r\n             <span class=\"register\" clear  (click)=\"loginbtnCliced()\" tappable>{{\"LOGIN.login\"| translate}}</span>\r\n            \r\n             <br>\r\n             <!-- <hr/> -->\r\n             <span class=\"register\" clear  (click)=\"backToHome()\" tappable><u>{{\"LOGIN.back_to_home\"| translate}}</u></span>\r\n             <br>\r\n            </div> \r\n          <br>\r\n        </ion-card-content>\r\n      </ion-card>\r\n     </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 33vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 33vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginLabel {\n  font-family: \"Roboto\", sans-serif;\n  color: black;\n  font-weight: 900;\n  text-align: center;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 20vw;\n  margin-bottom: 20vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\ndiv.labelText {\n  text-align: center;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNGSjs7QURLRTtFQUVFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNISjs7QURNQTtFQUVJLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURTRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFdFO0VBQ0Usa0JBQUE7QUNSSjs7QURXRTtFQUNFLGNBQUE7RUFFQSxpQkFBQTtFQUNBLDhCQUFBO0FDVEo7O0FEWUU7RUFDRSxrQkFBQTtBQ1RKOztBRFlBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDWEY7O0FEZUE7RUFFSSxtQkFBQTtBQ2JKOztBRGVBO0VBRUksY0FBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5sb2dpbmJ0bl9ibGFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICBjb2xvcjogI2QzOWUxYTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDN2dyAzM3Z3OztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xyXG4gIH1cclxuICBcclxuICAubG9naW5idG5feWVsbG93XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XHJcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogM3Z3IDMzdnc7O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgfVxyXG5cclxuLmxvZ2luTGFiZWxcclxuICB7XHJcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pbnB1dGNvbXB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmNhcmRjc3N7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjB2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwdnc7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5kaXZsb2dpbmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5yZWdpc3RlcntcclxuICAgIGNvbG9yOiNkMzllMWE7XHJcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzdnchaW1wb3J0YW50OyAgICBcclxuICB9XHJcblxyXG4gIGRpdi5sYWJlbFRleHR7ICAgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG5cclxuLmJhY2tncm91bmRjc3N7XHJcbiAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBtYXJnaW46IDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5pb24tYnV0dG9uc1xyXG57XHJcbiAgICBjb2xvcjogICNmZmE2MGE7XHJcbn1cclxuIiwiLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDN2dyAzM3Z3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5sb2dpbmJ0bl95ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTFhO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogM3Z3IDMzdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luTGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dGNvbXAge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNhcmRjc3Mge1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBtYXJnaW4tdG9wOiAyMHZ3O1xuICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDN2dyAhaW1wb3J0YW50O1xufVxuXG5kaXYubGFiZWxUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZGNzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50LCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let SignupPage = class SignupPage {
    constructor(router, webService) {
        this.router = router;
        this.webService = webService;
        this.btnClicked = false;
        this.firstname = "";
        this.lastname = "";
        this.mobilenumber = "";
        this.email = "";
        this.dob = null;
        this.address = "";
        this.btnClicked = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
        });
    }
    ////////////////////////////////
    loginbtnCliced() {
        this.router.navigateByUrl("/login");
    }
    signupFun() {
        this.btnClicked = true;
        setTimeout(() => {
            this.btnClicked = false;
        }, 1000);
        console.log("Signup cllicked!.");
        if (this.firstname && this.lastname && this.email && this.password && this.password && this.confirmpassword) {
            if (this.agreement == true) {
                if (this.password == this.confirmpassword) {
                    // if all the fields are correct
                    //data to be sent
                    // console.log(typeof(this.mobilenumber.toString( )))
                    var data = {
                        "first_name": this.firstname,
                        "last_name": this.lastname,
                        "email": this.email,
                        "password": this.password,
                        "birth_date": this.dob,
                        "telephone": this.mobilenumber.toString(),
                        "address": this.address,
                    };
                    this.webService.presentLoading();
                    this.webService.signup(data).subscribe(res => {
                        if (res) {
                            console.log(res);
                            this.webService.stopLoading();
                            if (this.lang == "fr") {
                                alert("Inscription réussie !! ");
                            }
                            else {
                                alert("Successful Sign Up   !! ");
                            }
                            this.router.navigateByUrl("/login");
                        }
                    }, error => {
                        this.webService.stopLoading();
                        if (this.lang == "fr") {
                            alert("Erreur Serveur \n Inscription échouée !! ");
                        }
                        else {
                            alert("Server Error \n Sign Up Failed !! ");
                        }
                        this.router.navigateByUrl("/login");
                    });
                }
                else {
                    //alert to tell that password and confrim password should be same 
                    if (this.lang == "fr") {
                        alert("Le champ mot de passe doit être egal au champ confirmez mot de passe !! ");
                    }
                    else {
                        alert("Password and Confirm Pasword Should be same !! ");
                    }
                }
            }
            else {
                /// alert to ask to the user to accept the agreement then proceed
                if (this.lang == "fr") {
                    alert("Accepter les termes et condition avant de s'inscrire.  ");
                }
                else {
                    alert("Accept the terms and conditions before signing. ");
                }
            }
        }
        else {
            // alert to ask the user to fill all the fields
            if (this.lang == "fr") {
                alert("Remplir tous les chaps obligatoires (*)  ");
            }
            else {
                alert("Fill All the mandatory fields (*) ");
            }
        }
    }
    backToHome() {
        // this.webService.presentLoading();
        this.router.navigateByUrl("/dashboard");
        // this.webService.stopLoading();
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map