function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\n        <ion-item *ngIf=\"(editableText==true && userType=='client') ||userType=='chauffeur' \">\n\n           <!-- menu icon -->\n          <ion-buttons  slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n\n          <!-- title -->\n          <ion-title >{{ 'DASHBOARD.profile' | translate }}</ion-title>\n        </ion-item>\n\n       <!-- ------------------------------------------------------------------------------ -->\n        <!-- ----------------------If edit has been clicked --------------------------------------------- -->\n        <ion-item *ngIf=\"editableText==false && userType=='client'\" >\n\n           <!-- prev icon -->\n           <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n\n          <!-- title -->\n          <ion-title >{{ 'DASHBOARD.edit_profile_title' | translate }}</ion-title>\n        </ion-item>\n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n \n          <!-- profile Image -->\n         \n     <ion-card>\n\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n            <div >\n              <ion-grid *ngIf=\"editableText==true && userType=='client'\">\n                <ion-row>\n                  <ion-col size=\"4\" >\n                    <img   [src]=\"profile\"  class=\"image-icon\" >\n                  </ion-col>\n                   <ion-col size=\"8\">\n                    <div>                \n                       <br><br> <br>\n                       <!-- Full name      -->\n                       <strong> <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.firstname}}  {{profileData.lastname}} </b>\n                       </ion-label> </strong>\n                        <br><br>\n                       \n\n                    </div>                    \n                  </ion-col>\n                  </ion-row> \n                      \n                       <!-- DOB      -->\n                       <ion-item>\n                         <ion-icon name=\"calendar-outline\"></ion-icon>\n                         <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.dob}}  </b></ion-label>\n                       </ion-item> \n                       <!-- Email id     -->\n                       <ion-item>\n                          <ion-icon name=\"at-outline\"></ion-icon>\n                          <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.email}}  </b></ion-label>\n                        </ion-item> \n                       <!-- phone number    -->\n                        <ion-item>\n                          <ion-icon name=\"call-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.mobilenumber}}  </b></ion-label>\n                        </ion-item> \n                        <!-- address -->\n                        <ion-item>\n                          <ion-icon name=\"pin-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.address}}  </b></ion-label>\n                        </ion-item> \n                  </ion-grid>  \n                             \n              </div>\n\n          </ion-card-subtitle>\n          <!-- <ion-card-title  >  My informations :</ion-card-title> -->\n        </ion-card-header>\n        <ion-card-content>\n                \n            <div *ngIf=\"editableText==false && userType=='client'\">\n                  <!-- name      -->\n                <ion-label style=\"size: 20vw;\" >&nbsp; <b>{{\"PROFILE.first_name\"| translate}} : </b></ion-label>\n                <br>   \n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.firstname\"  placeholder=\"First name\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.last_name\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\"  [(ngModel)]=\"profileData.lastname\"  placeholder=\"Last name\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.email_address\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.email\"  placeholder=\"Email Address\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.mobile\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"number\" [(ngModel)]=\"profileData.mobilenumber\" placeholder=\"Mobile number\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.dob\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"date\"  [(ngModel)]=\"profileData.dob\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.address\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.address\"  placeholder=\"Address\" [disabled]=\"editableText\"></ion-input>\n                <br>\n               \n\n            </div>     \n                <div class=\"divloginbtn\">\n\n                  <!-- <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\n                 <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\n                  -->\n                  </div>\n              \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n</ion-content>\n<ion-footer *ngIf=\"show\" >\n  <!-- <ion-toolbar> -->\n       <!-- if the token is not null -->\n    <!-- <ion-button  expand=\"full\"  [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"save()\">{{ 'DASHBOARD.post_testimonial' | translate }}</ion-button> -->\n    <button expand=\"full\" [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\n  <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\n  \n\n  <!-- </ion-toolbar> -->\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button, ion-icon {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-label {\n  color: #ffa60a;\n}\n\n.image-icon {\n  height: 90px;\n  width: 200px;\n  border-radius: 50px;\n}\n\nion-input {\n  border-radius: 30px;\n  color: black;\n  background-color: white;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.loginbtn_black {\n  background-color: black;\n  color: #ffa60a;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #ffa60a;\n  color: black;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBRUksY0FBQTtBQ0xKOztBRFFBO0VBRUksY0FBQTtBQ05KOztBRFFBO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFFBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0FDTko7O0FEUUU7RUFFSSx1QkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtFQUlBLDhCQUFBO0VBRUYsWUFBQTtFQUNBLFlBQUE7RUFDRSw4Q0FBQTtBQ1pOOztBRGVJO0VBRUUseUJBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFJQSw4QkFBQTtFQUVGLFlBQUE7RUFDQSxZQUFBO0VBQ0UsOENBQUE7QUNuQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtLGlvbi1tZW51LWJ1dHRvbixpb24taWNvblxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsaW9uLWJ1dHRvblxue1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbixpb24tY2FyZC10aXRsZSBcbntcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG5cbmlvbi1sYWJlbFxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cbi5pbWFnZS1pY29uIHtcblxuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuaW9uLWlucHV0XG57XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gbWFyZ2luOiA1dncgMzV2dztcbn1cbi5kaXZsb2dpbmJ0bntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxvZ2luYnRuX2JsYWNrXG4gIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIC8vICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZhNjBhO1xuICAgICAgLy9mb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgLy9saW5lLWhlaWdodDogMzBweDtcbiAgICAvLyAgIG1hcmdpbjogYXV0bztcbiAgICAvLyAgIHBhZGRpbmc6IDN2dyAzdnc7O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMHZ3O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMCAjZmZhNjBhLCAwIDNweCAwcHggI2U0ZTRlNDtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luYnRuX3llbGxvd1xuICB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjBhO1xuICAgIC8vICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgLy8gICBtYXJnaW46IGF1dG87XG4gICAgLy8gICBwYWRkaW5nOiAzdncgM3Z3OztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTB2dztcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2ZmYTYwYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG4gICAgfSIsImlvbi1jYXJkLCBpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24taXRlbSwgaW9uLW1lbnUtYnV0dG9uLCBpb24taWNvbiB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCwgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24sIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG4uaW1hZ2UtaWNvbiB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbmJ0bl9ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTB2dztcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZmZhNjBhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MGE7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTB2dztcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZmZhNjBhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(webService) {
        _classCallCheck(this, ProfilePage);

        this.webService = webService;
        this.profile = '../assets/imgs/profile.png';
        this.btnClicked = false;
        this.editableText = true;
        this.profileData = {
          "firstname": "Chanda",
          "lastname": "Kumari",
          "mobilenumber": "8559080443",
          "email": "kumarichanda658@gmail.com",
          "dob": "1996-06-26",
          "address": "A-658",
          "city": "New Delhi",
          "country": "India"
        };
        this.userType = "";
        this.show = false;
        this.btnClicked = false;
        console.log("Before editableText : ", this.editableText);
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // this.webService.presentLoading();
                    this.getdata(); ////////////////////////////////////////////////

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getdata",
        value: function getdata() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = JSON;
                    _context3.next = 3;
                    return Storage.get({
                      key: "user_infos"
                    });

                  case 3:
                    _context3.t1 = _context3.sent.value;
                    this.userInfo = _context3.t0.parse.call(_context3.t0, _context3.t1);
                    console.log("Storage : ", this.userInfo);
                    this.profileData.address = this.userInfo.address;
                    this.profileData.dob = this.userInfo.birth_date;
                    this.profileData.email = this.userInfo.email;
                    this.profileData.firstname = this.userInfo.first_name;
                    this.profileData.lastname = this.userInfo.last_name;
                    this.profileData.mobilenumber = this.userInfo.telephone; //get user type

                    _context3.next = 14;
                    return Storage.get({
                      key: "user_type"
                    });

                  case 14:
                    this.userType = _context3.sent.value;
                    // this.webService.stopLoading();
                    //get the current language of the app   
                    this.webService.getCurrentLanguage().then(function (val) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                // console.log("home  ",val)
                                this.webService.sendMessage({
                                  'token': "mytoken",
                                  'language': val
                                });

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }); //end get app language
                    //show the contain

                    this.show = true;

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.btnClicked = true;
                    this.editableText = false;
                    console.log("btnClicked : ", this.btnClicked);
                    console.log("DOB : ", this.profileData.dob);
                    setTimeout(function () {
                      _this2.btnClicked = false; // this.editableText=true;
                    }, 1000);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "saveProfile",
        value: function saveProfile() {
          var _this3 = this;

          console.log("profileData : ", this.profileData);
          this.btnClicked = true;
          console.log("btnClicked : ", this.btnClicked);
          setTimeout(function () {
            _this3.btnClicked = false; // this.editableText=true;
          }, 1000);
        }
      }, {
        key: "prev",
        value: function prev() {
          this.editableText = true;
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map