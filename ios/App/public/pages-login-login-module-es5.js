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


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginLabel {\n  font-family: \"Roboto\", sans-serif;\n  color: black;\n  font-weight: 900;\n  text-align: center;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 25px;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\ndiv.labelText {\n  text-align: center;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBR0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRGtDQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNoQ0o7O0FEa0NFO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ2hDSjs7QURtQ0E7RUFFSSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakNKOztBRG9DRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNqQ0o7O0FEc0NFO0VBQ0UsbUJBQUE7QUNuQ0o7O0FEd0NFO0VBQ0Usa0JBQUE7QUNyQ0o7O0FEd0NFO0VBQ0UsY0FBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7QUN0Q0o7O0FEeUNFO0VBQ0Usa0JBQUE7QUN0Q0o7O0FEeUNBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDeENGOztBRDRDQTtFQUVJLG1CQUFBO0FDMUNKOztBRDRDQTtFQUVJLGNBQUE7QUMxQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlLWhvbWUge1xyXG4gIFxyXG4gICNjb250YWluZXIge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgfVxyXG4gIFxyXG4vLyAgICNjb250YWluZXIgc3Ryb25nIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAjY29udGFpbmVyIHAge1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbi8vICAgICBjb2xvcjogIzhjOGM4YztcclxuICBcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgI2NvbnRhaW5lciBhIHtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICB9XHJcbi8vICAgLmJhY2tncm91bmRjc3N7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQoJGNvbG9yOiAjMDAwMDAwKTtcclxuLy8gICB9XHJcblxyXG5cclxuLy8gICAubG9naW5idG5cclxuLy8gICB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4vLyAgIH1cclxuLy8gLy8gfVxyXG4ubG9naW5idG5fYmxhY2tcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICBjb2xvcjogI2QzOWUxYTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDN2dyAyNXZ3O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIC5sb2dpbmJ0bl95ZWxsb3dcclxuICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogM3Z3IDI1dnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcclxuICB9XHJcblxyXG4ubG9naW5MYWJlbFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0Y29tcHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICAgIC8vIG1hcmdpbjogNXZ3IDM1dnc7XHJcbiAgfVxyXG5cclxuICAuY2FyZGNzc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5kaXZsb2dpbmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5yZWdpc3RlcntcclxuICAgIGNvbG9yOiNkMzllMWE7XHJcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzdnchaW1wb3J0YW50OyAgICBcclxuICB9XHJcblxyXG4gIGRpdi5sYWJlbFRleHR7ICAgICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG5cclxuLmJhY2tncm91bmRjc3N7XHJcbiAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBtYXJnaW46IDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5pb24tYnV0dG9uc1xyXG57XHJcbiAgICBjb2xvcjogICNmZmE2MGE7XHJcbn0iLCIjY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDN2dyAyNXZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5sb2dpbmJ0bl95ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTFhO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogM3Z3IDI1dnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luTGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dGNvbXAge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNhcmRjc3Mge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDN2dyAhaW1wb3J0YW50O1xufVxuXG5kaXYubGFiZWxUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZGNzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50LCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */";
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
                                  this.webService.presentLoading();
                                  this.webService.login(sending_obj).subscribe(function (res) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                      var _this3 = this;

                                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                          switch (_context2.prev = _context2.next) {
                                            case 0:
                                              console.log("getting response : ", res);

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
                                                    alert("Etes-vous Chauffeur ? \n Si oui, connectez-vous en tant que chaffeur.");
                                                  } else {
                                                    alert("Are you a driver ? \n If yes, login as a driver. ");
                                                  }
                                                }); //added end get user details
                                                //////////////////////////////////////////////////
                                              } else {
                                                this.webService.stopLoading();

                                                if (this.lang == "fr") {
                                                  alert("Mauvais username et/ou mot de passe !!! \n SVP entrez des valeurs correctes. ");
                                                } else {
                                                  alert("Bad username and/or password !!! \n Please enter correct values. ");
                                                }
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