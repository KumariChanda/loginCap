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


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 25vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginLabel {\n  font-family: \"Roboto\", sans-serif;\n  color: black;\n  font-weight: 900;\n  text-align: center;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 25px;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\ndiv.labelText {\n  text-align: center;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUdFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNISjs7QURrQ0E7RUFFRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDaENKOztBRGtDRTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNoQ0o7O0FEbUNBO0VBRUksaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDakNKOztBRHNDRTtFQUNFLG1CQUFBO0FDbkNKOztBRHdDRTtFQUNFLGtCQUFBO0FDckNKOztBRHdDRTtFQUNFLGNBQUE7RUFFQSxpQkFBQTtFQUNBLDhCQUFBO0FDdENKOztBRHlDRTtFQUNFLGtCQUFBO0FDdENKOztBRHlDQTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ3hDRjs7QUQ0Q0E7RUFFSSxtQkFBQTtBQzFDSjs7QUQ0Q0E7RUFFSSxjQUFBO0FDMUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZS1ob21lIHtcclxuICBcclxuICAjY29udGFpbmVyIHtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gIH1cclxuICBcclxuLy8gICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgI2NvbnRhaW5lciBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4vLyAgICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgICNjb250YWluZXIgYSB7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgfVxyXG4vLyAgIC5iYWNrZ3JvdW5kY3Nze1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbi8vICAgfVxyXG5cclxuXHJcbi8vICAgLmxvZ2luYnRuXHJcbi8vICAge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuLy8gICB9XHJcbi8vIC8vIH1cclxuLmxvZ2luYnRuX2JsYWNrXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgY29sb3I6ICNkMzllMWE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzdncgMjV2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xyXG4gIH1cclxuICAubG9naW5idG5feWVsbG93XHJcbiAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDN2dyAyNXZ3O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgfVxyXG5cclxuLmxvZ2luTGFiZWxcclxuICB7XHJcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pbnB1dGNvbXB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmNhcmRjc3N7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuZGl2bG9naW5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXJ7XHJcbiAgICBjb2xvcjojZDM5ZTFhO1xyXG4gICAgLy8gdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3Z3IWltcG9ydGFudDsgICAgXHJcbiAgfVxyXG5cclxuICBkaXYubGFiZWxUZXh0eyAgICAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kY3Nze1xyXG4gLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gbWFyZ2luOiAwdnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnQsaW9uLWNvbnRlbnRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuaW9uLWJ1dHRvbnNcclxue1xyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59IiwiI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5sb2dpbmJ0bl9ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzdncgMjV2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDN2dyAyNXZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5sb2dpbkxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXRjb21wIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jYXJkY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmRpdmxvZ2luYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXIge1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAzdncgIWltcG9ydGFudDtcbn1cblxuZGl2LmxhYmVsVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2tncm91bmRjc3Mge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyLCBpb24tc2VnbWVudCwgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufSJdfQ== */";
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
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(webService, router, iab) {
        _classCallCheck(this, LoginPage);

        this.webService = webService;
        this.router = router;
        this.iab = iab;
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
                                              //console.log("getting response : ",res); 
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

                                            case 1:
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
                    }); //console.log((await ret).value);

                  case 1:
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
          // this.router.navigateByUrl("/forget-password");
          // console.log("Nyokah")
          this.iab.create('https://nyokah.ci/siteweb/includes/forgotpassword.php', '_blank');
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
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
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