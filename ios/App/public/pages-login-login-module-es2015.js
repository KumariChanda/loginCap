(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n   <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar> \n</ion-header> -->\n\n<ion-content scroll padding >\n  <div class=\"backgroundcss\">\n    \n  \n  <div id=\"container\">\n   <ion-card class=\"cardcss\" >\n     <br>\n      <h3 class=\"loginLabel\">{{\"LOGIN.login\"| translate}}</h3>\n        <hr/>\n\n     <ion-card-content>\n       <!-- <ion-item> -->\n         <!-- <ion-label position=\"floating\">Enter Username</ion-label> -->\n         <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"usernameText\" placeholder='{{\"LOGIN.email_address\"| translate}}'></ion-input>\n       <!-- </ion-item> -->\n       <br>\n       <!-- <ion-item> -->\n         <!-- <ion-label position=\"floating\">Enter Password</ion-label> -->\n         <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)]=\"passwordText\" placeholder='{{\"LOGIN.password\"| translate}}'></ion-input>\n       <!-- </ion-item> -->\n       <br>\n          <!-- check if you are a driver -->\n          <ion-item>\n                    <ion-checkbox color=\"primary\" [(ngModel)]=\"isDriver\" slot=\"end\"></ion-checkbox>\n                    <label  textWrap=\"true\">{{\"LOGIN.isDriver\"| translate}}   </label>\n         </ion-item>\n       <br>\n\n\n       <div class=\"divloginbtn\">\n         <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\n         'loginbtn_yellow':btnClicked == true}\" (click)=\"loginFun()\">{{\"LOGIN.btn_login\"| translate}}</button>\n        </div>\n        <br>  \n        <br>\n        <div class=\"labelText\">\n          <span>{{\"LOGIN.no_account\"| translate}} </span>\n          <span class=\"register\" clear  (click)=\"RegisterBtnClicked()\" tappable>{{\"LOGIN.signup\"| translate}}</span>\n          <br>\n          <span class=\"register\" clear  (click)=\"forgetPasswordBtnClicked()\" tappable>{{\"LOGIN.forgot_password\"| translate}}</span>\n      \n        <br><br>\n          <span class=\"register\" clear  (click)=\"backToHome()\" tappable> <u>{{\"LOGIN.back_to_home\"| translate}}</u></span>\n          <br>\n       </div> \n\n          \n     </ion-card-content>\n   </ion-card>\n  </div>\n\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginLabel {\n  font-family: \"Roboto\", sans-serif;\n  color: black;\n  font-weight: 900;\n  text-align: center;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n}\n\n.cardcss {\n  border-radius: 25px;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\ndiv.labelText {\n  text-align: center;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBR0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRGtDQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNoQ0o7O0FEa0NFO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ2hDSjs7QURtQ0E7RUFFSSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakNKOztBRG9DRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDakNKOztBRHFDRTtFQUNFLG1CQUFBO0FDbENKOztBRHVDRTtFQUNFLGtCQUFBO0FDcENKOztBRHVDRTtFQUNFLGNBQUE7RUFFQSxpQkFBQTtFQUNBLDhCQUFBO0FDckNKOztBRHdDRTtFQUNFLGtCQUFBO0FDckNKOztBRHdDQTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ3ZDRjs7QUQyQ0E7RUFFSSxtQkFBQTtBQ3pDSjs7QUQyQ0E7RUFFSSxjQUFBO0FDekNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZS1ob21lIHtcbiAgXG4gICNjb250YWluZXIge1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgfVxuICBcbi8vICAgI2NvbnRhaW5lciBzdHJvbmcge1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICBsaW5lLWhlaWdodDogMjZweDtcbi8vICAgfVxuICBcbi8vICAgI2NvbnRhaW5lciBwIHtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIFxuLy8gICAgIGNvbG9yOiAjOGM4YzhjO1xuICBcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgIH1cbiAgXG4vLyAgICNjb250YWluZXIgYSB7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyAgIC5iYWNrZ3JvdW5kY3Nze1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCgkY29sb3I6ICMwMDAwMDApO1xuLy8gICB9XG5cblxuLy8gICAubG9naW5idG5cbi8vICAge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4vLyAgIH1cbi8vIC8vIH1cbi5sb2dpbmJ0bl9ibGFja1xue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICBjb2xvcjogI2QzOWUxYTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogM3Z3IDI1dnc7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbiAgfVxuICAubG9naW5idG5feWVsbG93XG4gIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDN2dyAyNXZ3O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG4gIH1cblxuLmxvZ2luTGFiZWxcbiAge1xuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmlucHV0Y29tcHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICAgIC8vIG1hcmdpbjogNXZ3IDM1dnc7XG4gIH1cblxuICAuY2FyZGNzc3tcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB9XG5cblxuXG4gIC5kaXZsb2dpbmJ0bntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucmVnaXN0ZXJ7XG4gICAgY29sb3I6I2QzOWUxYTtcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgcGFkZGluZy1ib3R0b206IDN2dyFpbXBvcnRhbnQ7ICAgIFxuICB9XG5cbiAgZGl2LmxhYmVsVGV4dHsgICAgICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbn1cblxuLmJhY2tncm91bmRjc3N7XG4gLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1hcmdpbjogMHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIG9wYWNpdHk6IDAuNTtcbn1cblxuaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnQsaW9uLWNvbnRlbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cbmlvbi1idXR0b25zXG57XG4gICAgY29sb3I6ICAjZmZhNjBhO1xufSIsIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubG9naW5idG5fYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICNkMzllMWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogM3Z3IDI1dnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzdncgMjV2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5MYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0Y29tcCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cblxuLmNhcmRjc3Mge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDN2dyAhaW1wb3J0YW50O1xufVxuXG5kaXYubGFiZWxUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZGNzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50LCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let LoginPage = class LoginPage {
    constructor(webService, router) {
        this.webService = webService;
        this.router = router;
        this.btnClicked = false; // check if the button has been clicked or not
        // this.setItem();
        this.btnClicked = false;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////START LOGIN FUN ///////////////////////////////////////////////////////////////////
    loginFun() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            // console.log("Button Clicked.");
            ///set timeout for cliked on login button
            this.btnClicked = true;
            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.btnClicked = false;
                //object to be sent
                // console.log("Username : ",this.usernameText);
                // console.log("Password: ",this.passwordText);
                var sending_obj = {
                    "username": this.usernameText,
                    "password": this.passwordText
                };
                // console.log(sending_obj);
                if (this.usernameText && this.passwordText) {
                    this.webService.presentLoading();
                    this.webService.login(sending_obj).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log("getting response : ", res);
                        if (!res.detail) {
                            //store user status in storage 
                            Storage.set({
                                key: "user_type",
                                value: res.status
                            });
                            ////////////////////////////////////////////////////////
                            //get the details infos of the  user  
                            this.webService.getUserDetails(res.token, res.id, this.isDriver).subscribe(resp => {
                                // console.log("clients : \n",resp);
                                //store user infos in storage 
                                Storage.set({
                                    key: "user_infos",
                                    value: JSON.stringify(resp)
                                }); // end store user 
                                ////////////////////////////////////////////////
                                //get the current language of the app   
                                this.webService.getCurrentLanguage().then((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    // change the value of token
                                    yield Storage.set({
                                        key: 'accessToken',
                                        value: res.token
                                    });
                                    // console.log("home  ",val)
                                    this.webService.sendMessage({ 'token': "mytoken", 'language': val });
                                    if (this.isDriver) {
                                        //call dashboard page and pass data 
                                        this.router.navigateByUrl("/home");
                                    }
                                    else {
                                        //call dashboard page and pass data 
                                        this.router.navigateByUrl("/dashboard");
                                    }
                                    ///stop loading
                                    this.webService.stopLoading();
                                })); //end get app language
                                ////////////////////////////////////////////////
                            }); //added end get user details
                            //////////////////////////////////////////////////
                        }
                        else {
                            this.webService.stopLoading();
                            alert("bad credential !");
                        }
                    }), error => {
                        this.webService.stopLoading();
                        if (this.lang == "fr") {
                            alert("Erreur Serveur , SVP verifiez vos entrees et Votre Connexion Internet ");
                        }
                        else {
                            alert("server error, please check your inputs ");
                        }
                    });
                }
                else {
                    if (this.lang == "fr") {
                        alert("Entrez tous les champs correctement, SVP! ");
                    }
                    else {
                        alert("Please, Fill all the Fields Correctly ");
                    }
                }
            }), 1000);
            /// end set time out
            ////////////////////////////////////////ENDLOGIN FUN//////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var ret = Storage.get({ key: 'accessToken' });
            console.log((yield ret).value);
        });
    }
    RegisterBtnClicked() {
        this.router.navigateByUrl("/signup");
    }
    forgetPasswordBtnClicked() {
        this.router.navigateByUrl("/forget-password");
    }
    backToHome() {
        this.router.navigateByUrl("/dashboard");
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map