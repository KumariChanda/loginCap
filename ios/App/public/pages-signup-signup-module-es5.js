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


    __webpack_exports__["default"] = "<!-- <ion-header class=\"header_signup\">\n   <ion-toolbar>\n     <div class=\"header_signup\">\n        <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </div>\n  </ion-toolbar> \n</ion-header> -->\n\n<ion-content >\n  <div class=\"backgroundcss\">\n    <div id=\"container\">\n      <ion-card class=\"cardcss\" >\n          <h3 class=\"loginLabel\">Sign up  </h3>\n           <!-- <hr/> -->\n        <ion-card-content>\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"firstname\"  placeholder=\"First name\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"text\"  [(ngModel)]=\"lastname\"  placeholder=\"Last name\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"email\"  placeholder=\"Email Address\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)]=\"password\"  placeholder=\"Password\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"password\"  [(ngModel)]=\"confirmpassword\" placeholder=\"Confirm Password\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"number\" [(ngModel)]=\"mobilenumber\" placeholder=\"Mobile number\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"text\" [(ngModel)]=\"address\"  placeholder=\"Address\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"date\"  [(ngModel)]=\"dob\"></ion-input>\n          <br>\n          \n          <input type=\"checkbox\" [(ngModel)]=\"agreement\">&nbsp;&nbsp;<span class=\"register\"><b>I Agree with Terms and Conditions </b></span>\n          \n          <div class=\"divloginbtn\">\n            <br>\n            <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\n            'loginbtn_yellow':btnClicked == true}\" (click)=\"signupFun()\">Sign up</button>\n           </div>\n           <br>  \n           <div class=\"labelText\">\n             <span>Already got an account?  </span>\n             <span class=\"register\" clear  (click)=\"loginbtnCliced()\" tappable>Login</span>\n            \n             <br>\n             <!-- <hr/> -->\n             <span class=\"register\" clear  (click)=\"backToHome()\" tappable><u>Back To Home</u></span>\n             <br>\n            </div> \n          <br>\n        </ion-card-content>\n      </ion-card>\n     </div>\n\n    </div>\n\n</ion-content>\n";
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

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
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


    __webpack_exports__["default"] = ".loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 33vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  margin: auto;\n  padding: 3vw 33vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginLabel {\n  font-family: \"Roboto\", sans-serif;\n  color: black;\n  font-weight: 900;\n  text-align: center;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 20vw;\n  margin-bottom: 20vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\ndiv.labelText {\n  text-align: center;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNkSjs7QURpQkU7RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDZko7O0FEa0JBO0VBRUksaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2hCSjs7QURvQkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNqQko7O0FEc0JFO0VBQ0Usa0JBQUE7QUNuQko7O0FEc0JFO0VBQ0UsY0FBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usa0JBQUE7QUNwQko7O0FEdUJBO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDdEJGOztBRDBCQTtFQUVJLG1CQUFBO0FDeEJKOztBRDBCQTtFQUVJLGNBQUE7QUN4QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLy8gcGFnZS1ob21lIHtcbiAgXG4gIC8vICNjb250YWluZXIge1xuICAvLyAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgIGxlZnQ6IDA7XG4gIC8vICAgcmlnaHQ6IDA7XG4gIC8vICAgdG9wOiA1MCU7XG4gIC8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xuICAvLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgLy8gfVxuXG4ubG9naW5idG5fYmxhY2tcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiAjZDM5ZTFhO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzdncgMzN2dzs7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbiAgfVxuICBcbiAgLmxvZ2luYnRuX3llbGxvd1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDN2dyAzM3Z3OztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xuICB9XG5cbi5sb2dpbkxhYmVsXG4gIHtcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5pbnB1dGNvbXB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xuICB9XG5cbiAgLmNhcmRjc3N7XG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHZ3O1xuICAgIG1hcmdpbi1ib3R0b206IDIwdnc7XG4gIH1cblxuXG5cbiAgLmRpdmxvZ2luYnRue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5yZWdpc3RlcntcbiAgICBjb2xvcjojZDM5ZTFhO1xuICAgIC8vIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3Z3IWltcG9ydGFudDsgICAgXG4gIH1cblxuICBkaXYubGFiZWxUZXh0eyAgICAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxufVxuXG4uYmFja2dyb3VuZGNzc3tcbiAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luOiAwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gb3BhY2l0eTogMC41O1xufVxuXG5pb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxufVxuaW9uLWJ1dHRvbnNcbntcbiAgICBjb2xvcjogICNmZmE2MGE7XG59XG4iLCIubG9naW5idG5fYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICNkMzllMWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogM3Z3IDMzdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzdncgMzN2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5MYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0Y29tcCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cblxuLmNhcmRjc3Mge1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBtYXJnaW4tdG9wOiAyMHZ3O1xuICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDN2dyAhaW1wb3J0YW50O1xufVxuXG5kaXYubGFiZWxUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZGNzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50LCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */";
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
        value: function ngOnInit() {}
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

          if (this.firstname && this.lastname && this.email && this.password && this.mobilenumber && this.password && this.confirmpassword) {
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
              } else {//alert to tell that password and confrim password should be same 
              }
            } else {/// alert to ask to the user to accept the agreement then proceed
              }
          } else {// alert to ask the user to fill all the fields
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