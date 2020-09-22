function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n   <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    <ion-title class=\"register\">{{'Password.change_password' | translate }}</ion-title>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div class=\"backgroundcss\">\r\n    <div id=\"container\">\r\n      <ion-card class=\"cardcss\" >\r\n           <hr/>\r\n        <ion-card-content>\r\n           <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)] = \"old_password\" placeholder=\"{{'Password.old_password' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)] = \"new_password\"  placeholder=\"{{'Password.new_password' | translate }}\"></ion-input>\r\n          <br>\r\n          <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)] = \"confirm_pass\" placeholder=\"{{'Password.confirm_password' | translate }}\"></ion-input>\r\n          <br>\r\n          <div class=\"divloginbtn\">\r\n            <br>\r\n            <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\r\n            'loginbtn_yellow':btnClicked == true}\" (click)=\"changePassword()\">{{'Password.change_password_btn' | translate }}</button>\r\n           </div>\r\n           <br>  \r\n          <br>\r\n        </ion-card-content>\r\n      </ion-card>\r\n     </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ChangePasswordPageRoutingModule */

  /***/
  function srcAppPagesChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
      return ChangePasswordPageRoutingModule;
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


    var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-password.page */
    "./src/app/pages/change-password/change-password.page.ts");

    var routes = [{
      path: '',
      component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }];

    var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
      _classCallCheck(this, ChangePasswordPageRoutingModule);
    };

    ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangePasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ChangePasswordPageModule */

  /***/
  function srcAppPagesChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
      return ChangePasswordPageModule;
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


    var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-password-routing.module */
    "./src/app/pages/change-password/change-password-routing.module.ts");
    /* harmony import */


    var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-password.page */
    "./src/app/pages/change-password/change-password.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ChangePasswordPageModule = function ChangePasswordPageModule() {
      _classCallCheck(this, ChangePasswordPageModule);
    };

    ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })], ChangePasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-55%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 50vw;\n  margin-bottom: 22vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUdJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNKUjs7QURRSTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ1BSOztBRFVNO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0QsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDVFI7O0FEb0JNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2pCUjs7QURzQk07RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQlI7O0FEdUJNO0VBQ0Usa0JBQUE7QUNwQlI7O0FEdUJNO0VBQ0UsY0FBQTtBQ3BCUjs7QUQ4Qkk7RUFFRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUM3Qk47O0FEaUNJO0VBRUksbUJBQUE7QUMvQlI7O0FEaUNJO0VBRUksY0FBQTtBQy9CUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC8vIHBhZ2UtaG9tZSB7XHJcbiAgXHJcbiAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luYnRuX2JsYWNrXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgICAgICBjb2xvcjogI2QzOWUxYTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDN2dztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzdnc7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5sb2dpbmJ0bl95ZWxsb3dcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTFhO1xyXG4gICAgICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAzdnc7XHJcbiAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwdnc7XHJcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzdnc7XHJcbiAgICAgICAgIHBhZGRpbmctbGVmdDogMjB2dztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC8vIC5sb2dpbkxhYmVsXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xyXG4gICAgLy8gICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vICAgfVxyXG4gICAgXHJcbiAgICAgIC5pbnB1dGNvbXB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAgIC8vIG1hcmdpbjogNXZ3IDM1dnc7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuY2FyZGNzc3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwdnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJ2dztcclxuICAgICAgfVxyXG4gICAgICAgXHJcbiAgICBcclxuICAgICAgLmRpdmxvZ2luYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5yZWdpc3RlcntcclxuICAgICAgICBjb2xvcjojZDM5ZTFhO1xyXG4gICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogM3Z3IWltcG9ydGFudDsgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLy8gICBkaXYubGFiZWxUZXh0eyAgICAgICBcclxuICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAuYmFja2dyb3VuZGNzc3tcclxuICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLy8gbWFyZ2luOiAwdnc7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxyXG4gICAge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbnNcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogICNmZmE2MGE7XHJcbiAgICB9XHJcbiAgICAiLCIjY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcbn1cblxuLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjZDM5ZTFhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3Z3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICBwYWRkaW5nLWxlZnQ6IDIwdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDN2dztcbiAgcGFkZGluZy1yaWdodDogMjB2dztcbiAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG59XG5cbi5pbnB1dGNvbXAge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNhcmRjc3Mge1xuICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA1MHZ3O1xuICBtYXJnaW4tYm90dG9tOiAyMnZ3O1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gIGNvbG9yOiAjZDM5ZTFhO1xufVxuXG4uYmFja2dyb3VuZGNzcyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50LCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.page.ts ***!
    \***************************************************************/

  /*! exports provided: ChangePasswordPage */

  /***/
  function srcAppPagesChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
      return ChangePasswordPage;
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


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var ChangePasswordPage = /*#__PURE__*/function () {
      function ChangePasswordPage(webService, router) {
        _classCallCheck(this, ChangePasswordPage);

        this.webService = webService;
        this.router = router;
        this.btnClicked = false;
        this.old_password = "";
        this.new_password = "";
        this.confirm_pass = "";
        this.dataToSend = {
          "new_password": "",
          "old_password": ""
        };
      }

      _createClass(ChangePasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Storage.get({
                      key: 'accessToken'
                    });

                  case 2:
                    this.token = _context.sent.value;
                    _context.t0 = JSON;
                    _context.next = 6;
                    return Storage.get({
                      key: "user_infos"
                    });

                  case 6:
                    _context.t1 = _context.sent.value;
                    this.userInfo = _context.t0.parse.call(_context.t0, _context.t1);
                    _context.next = 10;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 10:
                    this.lang = _context.sent.value;

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } /////////////////////////////////////////////////////

      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this = this;

          this.btnClicked = true;
          setTimeout(function () {
            _this.btnClicked = false;
          }, 1000); /////////////////////////////////

          if (this.old_password && this.new_password && this.confirm_pass) {
            if (this.new_password == this.confirm_pass) {
              // if all the fields are correct
              //data to be sent
              // console.log(typeof(this.mobilenumber.toString( )))
              this.dataToSend.old_password = this.old_password, this.dataToSend.new_password = this.new_password, //present loader
              this.webService.presentLoading(); //call the web service

              this.webService.changeClientPasssword(this.userInfo.id, this.token, this.dataToSend).subscribe(function (res) {
                //check if action failed or not
                if (!res.old_password) {
                  //console.log(res);
                  _this.webService.stopLoading();

                  if (_this.lang == "fr") {
                    alert("Opération réussie!!!");
                  } else {
                    alert("Successful operation!!!");
                  }

                  _this.old_password = "";
                  _this.new_password = "";

                  _this.router.navigateByUrl("/dashboard");
                } else {
                  _this.webService.stopLoading();

                  if (_this.lang == "fr") {
                    alert("Opération pas réussie!!!");
                  } else {
                    alert("Unsuccessful operation!!!");
                  } // this.router.navigateByUrl("/dashboard");

                }
              }, function (error) {
                _this.webService.stopLoading();

                if (_this.lang == "fr") {
                  alert("Opération pas réussie!!!");
                } else {
                  alert("Unsuccessful operation!!!");
                } // this.router.navigateByUrl("/dashboard");               

              });
            } else {
              //alert to tell that password and confrim password should be same 
              if (this.lang == "fr") {
                alert("Le champ nouveau mot de passe doit être egal au champ confirmez mot de passe !! ");
              } else {
                alert("New Password and Confirm Pasword Should be same !! ");
              }
            }
          } else {
            // alert to ask the user to fill all the fields
            if (this.lang == "fr") {
              alert("Remplir tous les champs obligatoires (*)  ");
            } else {
              alert("Fill All the mandatory fields (*) ");
            }
          } ////////////////////////////

        }
      }]);

      return ChangePasswordPage;
    }();

    ChangePasswordPage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./change-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./change-password.page.scss */
      "./src/app/pages/change-password/change-password.page.scss"))["default"]]
    })], ChangePasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-change-password-change-password-module-es5.js.map