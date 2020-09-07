function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forget-password-forget-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgetPasswordForgetPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n       <ion-buttons slot=\"start\">\n       <ion-menu-button></ion-menu-button>\n     </ion-buttons>\n   <ion-title class=\"register\">Forget Password</ion-title>\n </ion-toolbar> \n</ion-header> -->\n\n<ion-content >\n <div class=\"backgroundcss\">\n   <div id=\"container\">\n     <ion-card class=\"cardcss\" >\n          <hr/>\n       <ion-card-content>\n          <ion-input class=\"inputcomp\" type=\"text\"  placeholder=\"{{'SIGNUP.email' | translate }}\"></ion-input>\n         <br> \n         <ion-input class=\"inputcomp\" type=\"number\"  placeholder=\"{{'SIGNUP.mobile_num' | translate }}\"></ion-input>\n         <br>\n         <ion-input class=\"inputcomp\" type=\"password\"  placeholder=\"{{'Password.new_password' | translate }}\"></ion-input>\n         <br>\n         <ion-input class=\"inputcomp\" type=\"password\"  placeholder=\"{{'Password.confirm_password' | translate }}\"></ion-input>\n         <br>\n         <div class=\"divloginbtn\">\n           <br>\n           <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\n           'loginbtn_yellow':btnClicked == true}\" (click)=\"forgetPassword()\">{{'Password.reset_password' | translate }}</button>\n           <br><br>\n          <span class=\"backtohome\" clear  (click)=\"backToHome()\" tappable> <u>{{\"LOGIN.back_to_home\"| translate}}</u></span>\n          <br>\n          </div>\n          <br>  \n         <br>\n       </ion-card-content>\n     </ion-card>\n    </div>\n\n   </div>\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgetPasswordPageRoutingModule */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function () {
      return ForgetPasswordPageRoutingModule;
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


    var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forget-password.page */
    "./src/app/pages/forget-password/forget-password.page.ts");

    var routes = [{
      path: '',
      component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
    }];

    var ForgetPasswordPageRoutingModule = function ForgetPasswordPageRoutingModule() {
      _classCallCheck(this, ForgetPasswordPageRoutingModule);
    };

    ForgetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgetPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ForgetPasswordPageModule */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function () {
      return ForgetPasswordPageModule;
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


    var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forget-password-routing.module */
    "./src/app/pages/forget-password/forget-password-routing.module.ts");
    /* harmony import */


    var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forget-password.page */
    "./src/app/pages/forget-password/forget-password.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ForgetPasswordPageModule = function ForgetPasswordPageModule() {
      _classCallCheck(this, ForgetPasswordPageModule);
    };

    ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
    })], ForgetPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-55%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 50vw;\n  margin-bottom: 22vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n}\n\n.backtohome {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUdJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNKUjs7QURRSTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ1BSOztBRFVNO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0QsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDVFI7O0FEb0JNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNqQlI7O0FEcUJNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbEJSOztBRHNCTTtFQUNFLGtCQUFBO0FDbkJSOztBRHNCTTtFQUNFLGNBQUE7QUNuQlI7O0FEd0JNO0VBQ0UsY0FBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7QUN0QlI7O0FENkJJO0VBRUUsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0FDNUJOOztBRGdDSTtFQUVJLG1CQUFBO0FDOUJSOztBRGdDSTtFQUVJLGNBQUE7QUM5QlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLy8gcGFnZS1ob21lIHtcbiAgXG4gICAgI2NvbnRhaW5lciB7XG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgICB9XG4gICAgXG4gICAgLmxvZ2luYnRuX2JsYWNrXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICAgICAgY29sb3I6ICNkMzllMWE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDN2dztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjB2dztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5sb2dpbmJ0bl95ZWxsb3dcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gICAgICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzdnc7XG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgICAgICAgIHBhZGRpbmctbGVmdDogMjB2dztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xuICAgICAgfVxuICAgIFxuICAgIC8vIC5sb2dpbkxhYmVsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgLy8gICAgIGNvbG9yOiBibGFjaztcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vICAgfVxuICAgIFxuICAgICAgLmlucHV0Y29tcHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICAgICAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xuICAgICAgfVxuICAgIFxuICAgICAgLmNhcmRjc3N7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwdnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIydnc7XG4gICAgICB9XG4gICAgICAgXG4gICAgXG4gICAgICAuZGl2bG9naW5idG57XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5yZWdpc3RlcntcbiAgICAgICAgY29sb3I6I2QzOWUxYTtcbiAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDN2dyFpbXBvcnRhbnQ7ICAgIFxuICAgICAgfVxuICAgICAgLmJhY2t0b2hvbWV7XG4gICAgICAgIGNvbG9yOiNkMzllMWE7XG4gICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzdnchaW1wb3J0YW50OyAgICBcbiAgICAgIH1cbiAgICBcbiAgICAvLyAgIGRpdi5sYWJlbFRleHR7ICAgICAgIFxuICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxuICAgIC8vIH1cbiAgICBcbiAgICAuYmFja2dyb3VuZGNzc3tcbiAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYmcuanBnXCIpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyBtYXJnaW46IDB2dztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC8vIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgXG4gICAgaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnQsaW9uLWNvbnRlbnRcbiAgICB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIH1cbiAgICBpb24tYnV0dG9uc1xuICAgIHtcbiAgICAgICAgY29sb3I6ICAjZmZhNjBhO1xuICAgIH1cbiAgICAiLCIjY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcbn1cblxuLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3Z3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICBwYWRkaW5nLWxlZnQ6IDIwdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDN2dztcbiAgcGFkZGluZy1yaWdodDogMjB2dztcbiAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5pbnB1dGNvbXAge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG59XG5cbi5jYXJkY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgbWFyZ2luLXRvcDogNTB2dztcbiAgbWFyZ2luLWJvdHRvbTogMjJ2dztcbn1cblxuLmRpdmxvZ2luYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXIge1xuICBjb2xvcjogI2QzOWUxYTtcbn1cblxuLmJhY2t0b2hvbWUge1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAzdncgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmRjc3Mge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyLCBpb24tc2VnbWVudCwgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/forget-password/forget-password.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/forget-password/forget-password.page.ts ***!
    \***************************************************************/

  /*! exports provided: ForgetPasswordPage */

  /***/
  function srcAppPagesForgetPasswordForgetPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function () {
      return ForgetPasswordPage;
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

    var ForgetPasswordPage = /*#__PURE__*/function () {
      function ForgetPasswordPage(router) {
        _classCallCheck(this, ForgetPasswordPage);

        this.router = router;
        this.btnClicked = false;
      }

      _createClass(ForgetPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "forgetPassword",
        value: function forgetPassword() {
          var _this = this;

          this.btnClicked = true;
          setTimeout(function () {
            _this.btnClicked = false;
          }, 1000);
        }
      }, {
        key: "backToHome",
        value: function backToHome() {
          this.router.navigateByUrl("/dashboard");
        }
      }]);

      return ForgetPasswordPage;
    }();

    ForgetPasswordPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forget-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forget-password.page.scss */
      "./src/app/pages/forget-password/forget-password.page.scss"))["default"]]
    })], ForgetPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forget-password-forget-password-module-es5.js.map