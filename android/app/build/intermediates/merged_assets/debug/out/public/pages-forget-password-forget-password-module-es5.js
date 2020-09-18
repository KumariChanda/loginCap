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


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-55%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 50vw;\n  margin-bottom: 22vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n}\n\n.backtohome {\n  color: #d39e1a;\n  font-weight: bold;\n  padding-bottom: 3vw !important;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL0Q6XFxpb25pY2FwcFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxmb3JnZXQtcGFzc3dvcmRcXGZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBR0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0pSOztBRFFJO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDUFI7O0FEVU07RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUMsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDRCw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNUUjs7QURvQk07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDakJSOztBRHNCTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ25CUjs7QUR1Qk07RUFDRSxrQkFBQTtBQ3BCUjs7QUR1Qk07RUFDRSxjQUFBO0FDcEJSOztBRHlCTTtFQUNFLGNBQUE7RUFFQSxpQkFBQTtFQUNBLDhCQUFBO0FDdkJSOztBRDhCSTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQzdCTjs7QURpQ0k7RUFFSSxtQkFBQTtBQy9CUjs7QURpQ0k7RUFFSSxjQUFBO0FDL0JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLy8gcGFnZS1ob21lIHtcclxuICBcclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5idG5fYmxhY2tcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZDM5ZTFhO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3Z3O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwdnc7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwdnc7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmxvZ2luYnRuX3llbGxvd1xyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XHJcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgcGFkZGluZy10b3A6IDN2dztcclxuICAgICAgICAgcGFkZGluZy1yaWdodDogMjB2dztcclxuICAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcclxuICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLy8gLmxvZ2luTGFiZWxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAvLyAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gICB9XHJcbiAgICBcclxuICAgICAgLmlucHV0Y29tcHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgLy8gbWFyZ2luOiA1dncgMzV2dztcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5jYXJkY3Nze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTB2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnZ3O1xyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgIFxyXG4gICAgICAuZGl2bG9naW5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnJlZ2lzdGVye1xyXG4gICAgICAgIGNvbG9yOiNkMzllMWE7XHJcbiAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgICAgICAvLyBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAzdnchaW1wb3J0YW50OyAgICBcclxuICAgICAgfVxyXG4gICAgICAuYmFja3RvaG9tZXtcclxuICAgICAgICBjb2xvcjojZDM5ZTFhO1xyXG4gICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3Z3IWltcG9ydGFudDsgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLy8gICBkaXYubGFiZWxUZXh0eyAgICAgICBcclxuICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAuYmFja2dyb3VuZGNzc3tcclxuICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLy8gbWFyZ2luOiAwdnc7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxyXG4gICAge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbnNcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogICNmZmE2MGE7XHJcbiAgICB9XHJcbiAgICAiLCIjY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcbn1cblxuLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3Z3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICBwYWRkaW5nLWxlZnQ6IDIwdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDN2dztcbiAgcGFkZGluZy1yaWdodDogMjB2dztcbiAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5pbnB1dGNvbXAge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNhcmRjc3Mge1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA1MHZ3O1xuICBtYXJnaW4tYm90dG9tOiAyMnZ3O1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xufVxuXG4uYmFja3RvaG9tZSB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDN2dyAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZGNzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50LCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */";
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