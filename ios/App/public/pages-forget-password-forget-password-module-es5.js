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


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-55%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 50vw;\n  margin-bottom: 22vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n}\n\n.backtohome {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUdJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNKUjs7QURRSTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ1BSOztBRFVNO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0QsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDVFI7O0FEb0JNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2pCUjs7QURzQk07RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQlI7O0FEdUJNO0VBQ0Usa0JBQUE7QUNwQlI7O0FEdUJNO0VBQ0UsY0FBQTtBQ3BCUjs7QUR5Qk07RUFDRSxjQUFBO0VBRUEsaUJBQUE7RUFDQSw4QkFBQTtBQ3ZCUjs7QUQ4Qkk7RUFFRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUM3Qk47O0FEaUNJO0VBRUksbUJBQUE7QUMvQlI7O0FEaUNJO0VBRUksY0FBQTtBQy9CUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC8vIHBhZ2UtaG9tZSB7XHJcbiAgXHJcbiAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luYnRuX2JsYWNrXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgICAgICBjb2xvcjogI2QzOWUxYTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDN2dztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzdnc7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5sb2dpbmJ0bl95ZWxsb3dcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTFhO1xyXG4gICAgICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzdnc7XHJcbiAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwdnc7XHJcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzdnc7XHJcbiAgICAgICAgIHBhZGRpbmctbGVmdDogMjB2dztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC8vIC5sb2dpbkxhYmVsXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xyXG4gICAgLy8gICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vICAgfVxyXG4gICAgXHJcbiAgICAgIC5pbnB1dGNvbXB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAgIC8vIG1hcmdpbjogNXZ3IDM1dnc7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuY2FyZGNzc3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwdnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJ2dztcclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICBcclxuICAgICAgLmRpdmxvZ2luYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5yZWdpc3RlcntcclxuICAgICAgICBjb2xvcjojZDM5ZTFhO1xyXG4gICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogM3Z3IWltcG9ydGFudDsgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmJhY2t0b2hvbWV7XHJcbiAgICAgICAgY29sb3I6I2QzOWUxYTtcclxuICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dyFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC8vICAgZGl2LmxhYmVsVGV4dHsgICAgICAgXHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLmJhY2tncm91bmRjc3N7XHJcbiAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYmcuanBnXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vIG1hcmdpbjogMHZ3O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnQsaW9uLWNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIH1cclxuICAgIGlvbi1idXR0b25zXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICAjZmZhNjBhO1xyXG4gICAgfVxyXG4gICAgIiwiI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XG59XG5cbi5sb2dpbmJ0bl9ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDN2dztcbiAgcGFkZGluZy1yaWdodDogMjB2dztcbiAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5sb2dpbmJ0bl95ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTFhO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAzdnc7XG4gIHBhZGRpbmctcmlnaHQ6IDIwdnc7XG4gIHBhZGRpbmctYm90dG9tOiAzdnc7XG4gIHBhZGRpbmctbGVmdDogMjB2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4uaW5wdXRjb21wIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jYXJkY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgbWFyZ2luLXRvcDogNTB2dztcbiAgbWFyZ2luLWJvdHRvbTogMjJ2dztcbn1cblxuLmRpdmxvZ2luYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXIge1xuICBjb2xvcjogI2QzOWUxYTtcbn1cblxuLmJhY2t0b2hvbWUge1xuICBjb2xvcjogI2QzOWUxYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAzdncgIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmRjc3Mge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyLCBpb24tc2VnbWVudCwgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufSJdfQ== */";
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
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var ForgetPasswordPage = /*#__PURE__*/function () {
      function ForgetPasswordPage(router, webService) {
        _classCallCheck(this, ForgetPasswordPage);

        this.router = router;
        this.webService = webService;
        this.btnClicked = false;
        this.email = "";
        this.password = "";
        this.confirm_pass = "";
        this.dataToSend = {
          "email": "",
          "password": "",
          "first_name": "",
          "last_name": "",
          "birth_date": "",
          "telephone": "",
          "address": ""
        };
      }

      _createClass(ForgetPasswordPage, [{
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
        }
      }, {
        key: "forgetPassword",
        value: function forgetPassword() {
          var _this = this;

          this.btnClicked = true;
          setTimeout(function () {
            _this.btnClicked = false;
          }, 1000); /////////////////////////////////
          // if(this.email && this.password && this.confirm_pass)
          // {
          //     if(this.password == this.confirm_pass)
          //     {
          //           // if all the fields are correct
          //           //data to be sent
          //          // console.log(typeof(this.mobilenumber.toString( )))
          //           var data = {
          //             "email": this.email,
          //             "password": this.password,
          //            }
          //            this.webService.presentLoading();                
          //            this.webService.changeClientPasssword( data).subscribe(res=>{
          //             if(res)
          //             {
          //               console.log(res);
          //               this.webService.stopLoading();
          //               alert("Sign up Ok !!!");
          //               this.router.navigateByUrl("/login");
          //             }
          //            },error=>{
          //             this.webService.stopLoading(); 
          //             alert("Sign up not Ok !!");
          //             this.router.navigateByUrl("/login");               
          //            }
          //            );
          //     }
          //     else
          //       {
          //         //alert to tell that password and confrim password should be same 
          //           if(this.lang =="fr")
          //           {
          //             alert("Le champ mot de passe doit etre egal au champ confirmez mot de passe !! ")
          //           }else{
          //             alert("Password and Confirm Pasword Should be same !! ")
          //         }
          //       }
          // }else{
          //     // alert to ask the user to fill all the fields
          //     if(this.lang =="fr")
          //     {
          //       alert("Remplir tous les chaps obligatoires (*)  ")
          //     }
          //     else{
          //       alert("Fill Alln the mandatory fields (*) ")
          //     }
          // }
          ////////////////////////////
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
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"]
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