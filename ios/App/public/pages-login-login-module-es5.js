function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n   <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar> \n</ion-header> -->\n\n<ion-content scroll padding >\n  <div class=\"backgroundcss\">\n    \n  \n  <div id=\"container\">\n   <ion-card class=\"cardcss\" >\n     <br>\n      <h3 class=\"loginLabel\">{{\"LOGIN.login\"| translate}}</h3>\n        <hr/>\n\n     <ion-card-content>\n       <!-- <ion-item> -->\n         <!-- <ion-label position=\"floating\">Enter Username</ion-label> -->\n         <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"usernameText\" placeholder='{{\"LOGIN.email_address\"| translate}}'></ion-input>\n       <!-- </ion-item> -->\n       <br>\n       <!-- <ion-item> -->\n         <!-- <ion-label position=\"floating\">Enter Password</ion-label> -->\n         <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)]=\"passwordText\" placeholder='{{\"LOGIN.password\"| translate}}'></ion-input>\n       <!-- </ion-item> -->\n       <br>\n          <!-- check if you are a driver -->\n          <ion-item>\n                    <ion-checkbox color=\"primary\" [(ngModel)]=\"isDriver\" slot=\"end\"></ion-checkbox>\n                    <label  textWrap=\"true\">{{\"LOGIN.isDriver\"| translate}}   </label>\n         </ion-item>\n       <br>\n\n\n       <div class=\"divloginbtn\">\n         <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\n         'loginbtn_yellow':btnClicked == true}\" (click)=\"loginFun()\">{{\"LOGIN.btn_login\"| translate}}</button>\n        </div>\n        <br>  \n        <br>\n        <div class=\"labelText\">\n          <span>{{\"LOGIN.no_account\"| translate}} </span>\n          <span class=\"register\" clear  (click)=\"RegisterBtnClicked()\" tappable>{{\"LOGIN.signup\"| translate}}</span>\n          <br>\n          <span class=\"register\" clear  (click)=\"forgetPasswordBtnClicked()\" tappable>{{\"LOGIN.forgot_password\"| translate}}</span>\n      \n        <br><br>\n          <span class=\"register\" clear  (click)=\"backToHome()\" tappable> <u>{{\"LOGIN.back_to_home\"| translate}}</u></span>\n          <br>\n       </div> \n\n          \n     </ion-card-content>\n   </ion-card>\n  </div>\n\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginLabel {\n  font-family: \"Roboto\", sans-serif;\n  color: black;\n  font-weight: 900;\n  text-align: center;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 25px;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\ndiv.labelText {\n  text-align: center;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBR0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRGtDQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNoQ0o7O0FEa0NFO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ2hDSjs7QURtQ0E7RUFFSSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakNKOztBRG9DRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNqQ0o7O0FEc0NFO0VBQ0UsbUJBQUE7QUNuQ0o7O0FEd0NFO0VBQ0Usa0JBQUE7QUNyQ0o7O0FEd0NFO0VBQ0UsY0FBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7QUN0Q0o7O0FEeUNFO0VBQ0Usa0JBQUE7QUN0Q0o7O0FEeUNBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDeENGOztBRDRDQTtFQUVJLG1CQUFBO0FDMUNKOztBRDRDQTtFQUVJLGNBQUE7QUMxQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlLWhvbWUge1xuICBcbiAgI2NvbnRhaW5lciB7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICB9XG4gIFxuLy8gICAjY29udGFpbmVyIHN0cm9uZyB7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuLy8gICB9XG4gIFxuLy8gICAjY29udGFpbmVyIHAge1xuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4vLyAgICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgfVxuICBcbi8vICAgI2NvbnRhaW5lciBhIHtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbi8vICAgLmJhY2tncm91bmRjc3N7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XG4vLyAgIH1cblxuXG4vLyAgIC5sb2dpbmJ0blxuLy8gICB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbi8vICAgfVxuLy8gLy8gfVxuLmxvZ2luYnRuX2JsYWNrXG57XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiAjZDM5ZTFhO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzdncgMjV2dztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xuICB9XG4gIC5sb2dpbmJ0bl95ZWxsb3dcbiAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTFhO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogM3Z3IDI1dnc7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbiAgfVxuXG4ubG9naW5MYWJlbFxuICB7XG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW5wdXRjb21we1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgLy8gbWFyZ2luOiA1dncgMzV2dztcbiAgfVxuXG4gIC5jYXJkY3Nze1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIH1cblxuXG5cbiAgLmRpdmxvZ2luYnRue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5yZWdpc3RlcntcbiAgICBjb2xvcjojZDM5ZTFhO1xuICAgIC8vIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3Z3IWltcG9ydGFudDsgICAgXG4gIH1cblxuICBkaXYubGFiZWxUZXh0eyAgICAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxufVxuXG4uYmFja2dyb3VuZGNzc3tcbiAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luOiAwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gb3BhY2l0eTogMC41O1xufVxuXG5pb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxufVxuaW9uLWJ1dHRvbnNcbntcbiAgICBjb2xvcjogICNmZmE2MGE7XG59IiwiI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5sb2dpbmJ0bl9ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzdncgMjV2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDN2dyAyNXZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5sb2dpbkxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXRjb21wIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jYXJkY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmRpdmxvZ2luYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXIge1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAzdncgIWltcG9ydGFudDtcbn1cblxuZGl2LmxhYmVsVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2tncm91bmRjc3Mge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyLCBpb24tc2VnbWVudCwgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(webService, router) {
        _classCallCheck(this, LoginPage);

        this.webService = webService;
        this.router = router;
        this.btnClicked = false; // check if the button has been clicked or not
        // this.setItem();

        this.btnClicked = false;
      } ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////START LOGIN FUN ///////////////////////////////////////////////////////////////////


      _createClass(LoginPage, [{
        key: "loginFun",
        value: function loginFun() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 2:
                    this.lang = _context4.sent.value;
                    // console.log("Button Clicked.");
                    ///set timeout for cliked on login button
                    this.btnClicked = true;
                    setTimeout(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this2 = this;

                        var sending_obj;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.btnClicked = false; //object to be sent
                                // console.log("Username : ",this.usernameText);
                                // console.log("Password: ",this.passwordText);

                                sending_obj = {
                                  "username": this.usernameText,
                                  "password": this.passwordText
                                }; // console.log(sending_obj);

                                if (this.usernameText && this.passwordText) {
                                  this.webService.login(sending_obj).subscribe(function (res) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                      var _this3 = this;

                                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                          switch (_context2.prev = _context2.next) {
                                            case 0:
                                              console.log("getting response : ", res); // this.webService.presentLoading();

                                              if (!res.detail) {
                                                //store user status in storage 
                                                Storage.set({
                                                  key: "user_type",
                                                  value: res.status
                                                }); ////////////////////////////////////////////////////////
                                                //get the details infos of the  user  

                                                this.webService.getUserDetails(res.token, res.id, this.isDriver).subscribe(function (resp) {
                                                  // console.log("clients : \n",resp);
                                                  //store user infos in storage 
                                                  Storage.set({
                                                    key: "user_infos",
                                                    value: JSON.stringify(resp)
                                                  }); // end store user 
                                                  ////////////////////////////////////////////////
                                                  //get the current language of the app   

                                                  _this3.webService.getCurrentLanguage().then(function (val) {
                                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                                      return regeneratorRuntime.wrap(function _callee$(_context) {
                                                        while (1) {
                                                          switch (_context.prev = _context.next) {
                                                            case 0:
                                                              _context.next = 2;
                                                              return Storage.set({
                                                                key: 'accessToken',
                                                                value: res.token
                                                              });

                                                            case 2:
                                                              // console.log("home  ",val)
                                                              this.webService.sendMessage({
                                                                'token': "mytoken",
                                                                'language': val
                                                              });

                                                              if (this.isDriver) {
                                                                //call dashboard page and pass data 
                                                                this.router.navigateByUrl("/home");
                                                              } else {
                                                                //call dashboard page and pass data 
                                                                this.router.navigateByUrl("/dashboard");
                                                              } ///stop loading


                                                              this.webService.stopLoading();

                                                            case 5:
                                                            case "end":
                                                              return _context.stop();
                                                          }
                                                        }
                                                      }, _callee, this);
                                                    }));
                                                  }); //end get app language
                                                  ////////////////////////////////////////////////

                                                }, function (error) {
                                                  _this3.webService.stopLoading();

                                                  if (_this3.lang == "fr") {
                                                    alert("Etes-vous Chauffeur ?? \n SVP selectionnez l'option \n se connecter en tant que chaffeur.");
                                                  } else {
                                                    alert("Are you a driver? please choose the option \n login as a driver. ");
                                                  }
                                                }); //added end get user details
                                                //////////////////////////////////////////////////
                                              } else {
                                                this.webService.stopLoading();

                                                if (this.lang == "fr") {
                                                  alert("Mauvais username et/ou mot de passe !!! \n SVP entrez des valeurs correctes.");
                                                } else {
                                                  alert("Bad user name and/or password !!! \n Please enter correct values. ");
                                                }

                                                this.router.navigateByUrl("/login");
                                              }

                                            case 2:
                                            case "end":
                                              return _context2.stop();
                                          }
                                        }
                                      }, _callee2, this);
                                    }));
                                  }, function (error) {
                                    _this2.webService.stopLoading();

                                    if (_this2.lang == "fr") {
                                      alert("Erreur Serveur , SVP verifiez vos entrees et Votre Connexion Internet ");
                                    } else {
                                      alert("server error, please check your inputs ");
                                    }
                                  });
                                } else {
                                  if (this.lang == "fr") {
                                    alert("Entrez tous les champs correctement, SVP! ");
                                  } else {
                                    alert("Please, Fill all the Fields Correctly ");
                                  }
                                }

                              case 3:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, 1000); /// end set time out
                    ////////////////////////////////////////ENDLOGIN FUN//////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getData",
        value: function getData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var ret;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    ret = Storage.get({
                      key: 'accessToken'
                    });
                    _context5.t0 = console;
                    _context5.next = 4;
                    return ret;

                  case 4:
                    _context5.t1 = _context5.sent.value;

                    _context5.t0.log.call(_context5.t0, _context5.t1);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "RegisterBtnClicked",
        value: function RegisterBtnClicked() {
          this.router.navigateByUrl("/signup");
        }
      }, {
        key: "forgetPasswordBtnClicked",
        value: function forgetPasswordBtnClicked() {
          this.router.navigateByUrl("/forget-password");
        }
      }, {
        key: "backToHome",
        value: function backToHome() {
          this.router.navigateByUrl("/dashboard");
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map