function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header class=\"header_signup\">\r\n   <ion-toolbar>\r\n     <div class=\"header_signup\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n  </ion-toolbar> \r\n</ion-header> -->\r\n\r\n<ion-content >\r\n  <div class=\"backgroundcss\">\r\n    <div id=\"container\">\r\n      <ion-card class=\"cardcss\" >\r\n          <h3 class=\"loginLabel\">{{'SIGNUP.signup' | translate }}</h3>\r\n           <!-- <hr/> -->\r\n        <ion-card-content>\r\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"firstname\"  placeholder=\"{{'SIGNUP.first_name' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"text\"  [(ngModel)]=\"lastname\"  placeholder=\"{{'SIGNUP.last_name' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"email\"  placeholder=\"{{'SIGNUP.email' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)]=\"password\"  placeholder=\"{{'SIGNUP.password' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"password\"  [(ngModel)]=\"confirmpassword\" placeholder=\"{{'SIGNUP.confirm_password' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"number\" [(ngModel)]=\"mobilenumber\" placeholder=\"{{'SIGNUP.mobile_num' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"address\"  placeholder=\"{{'SIGNUP.address' | translate }}\"></ion-input>\r\n          <br>\r\n          <!-- <ion-input class=\"inputcomp\" type=\"date\"  [(ngModel)]=\"dob\"></ion-input> -->\r\n          <!-- <br> -->\r\n          \r\n          <input type=\"checkbox\" [(ngModel)]=\"agreement\">&nbsp;&nbsp;<span class=\"register\"><b>{{'SIGNUP.term_condition' | translate }}</b></span>\r\n          \r\n          <div class=\"divloginbtn\">\r\n            <br>\r\n            <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\r\n            'loginbtn_yellow':btnClicked == true}\" (click)=\"signupFun()\">{{'SIGNUP.signup_btn' | translate }}</button>\r\n           </div>\r\n           <br>  \r\n           <div class=\"labelText\">\r\n             <span>{{'SIGNUP.already_account' | translate }} </span>\r\n             <span class=\"register\" clear  (click)=\"loginbtnCliced()\" tappable>{{\"LOGIN.login\"| translate}}</span>\r\n            \r\n             <br>\r\n             <!-- <hr/> -->\r\n             <span class=\"register\" clear  (click)=\"backToHome()\" tappable><u>{{\"LOGIN.back_to_home\"| translate}}</u></span>\r\n             <br>\r\n            </div> \r\n          <br>\r\n        </ion-card-content>\r\n      </ion-card>\r\n     </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 33vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 33vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginLabel {\n  font-family: \"Roboto\", sans-serif;\n  color: black;\n  font-weight: 900;\n  text-align: center;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 20vw;\n  margin-bottom: 20vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\ndiv.labelText {\n  text-align: center;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0Q6XFxpb25pYzRcXGxvZ2luQ2FwL3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNkSjs7QURpQkU7RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDZko7O0FEa0JBO0VBRUksaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2hCSjs7QURvQkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNqQko7O0FEc0JFO0VBQ0Usa0JBQUE7QUNuQko7O0FEc0JFO0VBQ0UsY0FBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usa0JBQUE7QUNwQko7O0FEdUJBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDdEJGOztBRDBCQTtFQUVJLG1CQUFBO0FDeEJKOztBRDBCQTtFQUVJLGNBQUE7QUN4QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAvLyBwYWdlLWhvbWUge1xyXG4gIFxyXG4gIC8vICNjb250YWluZXIge1xyXG4gIC8vICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgbGVmdDogMDtcclxuICAvLyAgIHJpZ2h0OiAwO1xyXG4gIC8vICAgdG9wOiA1MCU7XHJcbiAgLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XHJcbiAgLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgLy8gfVxyXG5cclxuLmxvZ2luYnRuX2JsYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgIGNvbG9yOiAjZDM5ZTFhO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogM3Z3IDMzdnc7O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbmJ0bl95ZWxsb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcclxuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzdncgMzN2dzs7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcclxuICB9XHJcblxyXG4ubG9naW5MYWJlbFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0Y29tcHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgLy8gbWFyZ2luOiA1dncgMzV2dztcclxuICB9XHJcblxyXG4gIC5jYXJkY3Nze1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwdnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuZGl2bG9naW5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXJ7XHJcbiAgICBjb2xvcjojZDM5ZTFhO1xyXG4gICAgLy8gdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3Z3IWltcG9ydGFudDsgICAgXHJcbiAgfVxyXG5cclxuICBkaXYubGFiZWxUZXh0eyAgICAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kY3Nze1xyXG4gLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gbWFyZ2luOiAwdnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnQsaW9uLWNvbnRlbnRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuaW9uLWJ1dHRvbnNcclxue1xyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcbiIsIi5sb2dpbmJ0bl9ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzdncgMzN2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDN2dyAzM3Z3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5sb2dpbkxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXRjb21wIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuXG4uY2FyZGNzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDIwdnc7XG4gIG1hcmdpbi1ib3R0b206IDIwdnc7XG59XG5cbi5kaXZsb2dpbmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgY29sb3I6ICNkMzllMWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3ICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5sYWJlbFRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrZ3JvdW5kY3NzIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdG9vbGJhciwgaW9uLXNlZ21lbnQsIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBjb2xvcjogI2ZmYTYwYTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signup/signup.page.ts ***!
    \*********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage;

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(router, webService) {
        _classCallCheck(this, SignupPage);

        this.router = router;
        this.webService = webService;
        this.btnClicked = false;
        this.firstname = "";
        this.lastname = "";
        this.mobilenumber = "";
        this.email = "";
        this.dob = "";
        this.address = "";
        this.btnClicked = false;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 2:
                    this.lang = _context.sent.value;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } ////////////////////////////////

      }, {
        key: "loginbtnCliced",
        value: function loginbtnCliced() {
          this.router.navigateByUrl("/login");
        }
      }, {
        key: "signupFun",
        value: function signupFun() {
          var _this = this;

          this.btnClicked = true;
          setTimeout(function () {
            _this.btnClicked = false;
          }, 1000);
          console.log("Signup cllicked!.");

          if (this.firstname && this.email && this.password && this.password && this.confirmpassword) {
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
                  "is_active": true
                };
                this.webService.presentLoading();
                this.webService.signup(data).subscribe(function (res) {
                  if (res) {
                    console.log(res);

                    _this.webService.stopLoading();

                    alert("Sign up Ok !!!");

                    _this.router.navigateByUrl("/login");
                  }
                }, function (error) {
                  _this.webService.stopLoading();

                  alert("Sign up not Ok !!");

                  _this.router.navigateByUrl("/login");
                });
              } else {
                //alert to tell that password and confrim password should be same 
                if (this.lang == "fr") {
                  alert("Le champ mot de passe doit etre egal au champ confirmez mot de passe !! ");
                } else {
                  alert("Password and Confirm Pasword Should be same !! ");
                }
              }
            } else {
              /// alert to ask to the user to accept the agreement then proceed
              if (this.lang == "fr") {
                alert("Accepter les termes et condition avant de s'inscrire.  ");
              } else {
                alert("Accept the terms and conditions before signing. ");
              }
            }
          } else {
            // alert to ask the user to fill all the fields
            if (this.lang == "fr") {
              alert("Remplir tous les chaps obligatoires (*)  ");
            } else {
              alert("Fill Alln the mandatory fields (*) ");
            }
          }
        }
      }, {
        key: "backToHome",
        value: function backToHome() {
          // this.webService.presentLoading();
          this.router.navigateByUrl("/dashboard"); // this.webService.stopLoading();
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]
      }];
    };

    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/pages/signup/signup.page.scss"))["default"]]
    })], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map