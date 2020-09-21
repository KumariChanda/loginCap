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


    __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-55%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 50vw;\n  margin-bottom: 22vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL0Q6XFxpb25pY2FwcFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBR0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0pSOztBRFFJO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDUFI7O0FEVU07RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUMsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDRCw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNUUjs7QURvQk07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDakJSOztBRHNCTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ25CUjs7QUR1Qk07RUFDRSxrQkFBQTtBQ3BCUjs7QUR1Qk07RUFDRSxjQUFBO0FDcEJSOztBRDhCSTtFQUVFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQzdCTjs7QURpQ0k7RUFFSSxtQkFBQTtBQy9CUjs7QURpQ0k7RUFFSSxjQUFBO0FDL0JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLy8gcGFnZS1ob21lIHtcclxuICBcclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5idG5fYmxhY2tcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZDM5ZTFhO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3Z3O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwdnc7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwdnc7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmxvZ2luYnRuX3llbGxvd1xyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzllMWE7XHJcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgcGFkZGluZy10b3A6IDN2dztcclxuICAgICAgICAgcGFkZGluZy1yaWdodDogMjB2dztcclxuICAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcclxuICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLy8gLmxvZ2luTGFiZWxcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAvLyAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gICB9XHJcbiAgICBcclxuICAgICAgLmlucHV0Y29tcHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgLy8gbWFyZ2luOiA1dncgMzV2dztcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5jYXJkY3Nze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTB2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnZ3O1xyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgIFxyXG4gICAgICAuZGl2bG9naW5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLnJlZ2lzdGVye1xyXG4gICAgICAgIGNvbG9yOiNkMzllMWE7XHJcbiAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgICAgICAvLyBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAzdnchaW1wb3J0YW50OyAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAvLyAgIGRpdi5sYWJlbFRleHR7ICAgICAgIFxyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC5iYWNrZ3JvdW5kY3Nze1xyXG4gICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2JnLmpwZ1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBtYXJnaW46IDB2dztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10b29sYmFyLGlvbi1zZWdtZW50LGlvbi1jb250ZW50XHJcbiAgICB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uc1xyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxuICAgIH1cclxuICAgICIsIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xufVxuXG4ubG9naW5idG5fYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICNkMzllMWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAzdnc7XG4gIHBhZGRpbmctcmlnaHQ6IDIwdnc7XG4gIHBhZGRpbmctYm90dG9tOiAzdnc7XG4gIHBhZGRpbmctbGVmdDogMjB2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3Z3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICBwYWRkaW5nLWxlZnQ6IDIwdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmlucHV0Y29tcCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2FyZGNzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDUwdnc7XG4gIG1hcmdpbi1ib3R0b206IDIydnc7XG59XG5cbi5kaXZsb2dpbmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgY29sb3I6ICNkMzllMWE7XG59XG5cbi5iYWNrZ3JvdW5kY3NzIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdG9vbGJhciwgaW9uLXNlZ21lbnQsIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBjb2xvcjogI2ZmYTYwYTtcbn0iXX0= */";
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