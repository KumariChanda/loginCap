function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<!-- <div *ngIf=\"showSplash\" class=\"splash\">\r\n  <div class=\"spinner\">  </div>\r\n\r\n</div> -->\r\n<ion-app>\r\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\r\n        <ion-header>\r\n          <ion-toolbar>\r\n\r\n              <!-- menu == null -->\r\n            <div *ngIf=\"testingToken==null || testingToken=='null'\">\r\n              <div >\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"4\" >\r\n                      <img  tappable  menuClose  [src]=\"profile\"  class=\"image-icon\" (click)=\"login_signupPage()\">\r\n                    </ion-col>\r\n                     <ion-col size=\"8\">\r\n                      <div>\r\n                        <ion-icon name=\"warning-outline\" style=\"color: red;\"></ion-icon>\r\n                          <ion-label>{{'MENU.message' | translate}}</ion-label>\r\n                          <ion-button fill=\"outline\" slot=\"end\" (click)=\"login_signupPage()\" >{{'MENU.btn_login' | translate}}</ion-button>\r\n               \r\n                        <!-- <ion-button>\r\n                          Login / Signup\r\n                        </ion-button> -->\r\n                      </div>                    \r\n                    </ion-col>\r\n                    </ion-row>\r\n                    </ion-grid>               \r\n               </div>\r\n              </div>\r\n         \r\n             <!-- menu != null -->\r\n          <div *ngIf=\"testingToken!=null && testingToken!='null'\">\r\n            <div >\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"4\" >\r\n                    <img  tappable  menuClose  [src]=\"profile\"  class=\"image-icon\" (click)=\"openUserProfile(defaultProfile)\">\r\n                  </ion-col>\r\n                   <ion-col size=\"8\">\r\n                    <div>                     \r\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b>{{userInf?.first_name}} {{userInf?.last_name}} </b></ion-label><br>\r\n                        <ion-button fill=\"outline\" slot=\"end\" (click)=\"logout()\" >{{'MENU.btn_logout' | translate}}</ion-button>\r\n                    </div>                    \r\n                  </ion-col>\r\n                  </ion-row>\r\n                  </ion-grid>             \r\n              </div>\r\n            </div>\r\n         \r\n               \r\n         \r\n          </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content>\r\n\r\n           <!-- Menu if user is not logged in yet -->\r\n\r\n          <div *ngIf=\"testingToken==null || testingToken=='null'\">\r\n          \r\n          <div  style=\" background: black \" *ngFor=\"let pages of menuNavigatorWithoutLogin\">\r\n              \r\n              <ion-menu-toggle   auto-hide=\"true\" *ngIf=\"pages.url\" >\r\n                <ion-item [routerLink]=\"pages.url\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n                    <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n                     <ion-label> {{pages.title}} </ion-label> \r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n                    <!-- if there is sub-cat -->\r\n              <ion-item button *ngIf=\"pages.children?.length > 0\" (click) = \"pages.open = !pages.open\"\r\n                [class.active-parent]=\"pages.open\" details=\"false\">\r\n                \r\n                <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n                <!-- <ion-icon slot=\"end\" name=\"arrow-forward\" *ngIf=\"!pages.open\"></ion-icon> -->\r\n                <!-- <ion-icon slot=\"end\" name=\"arrow-down\" *ngIf=\"pages.open\"></ion-icon> -->\r\n                <ion-label> {{pages.title}} </ion-label>\r\n\r\n              </ion-item>\r\n\r\n              <div  *ngIf=\"pages.open\">\r\n\r\n                    <ion-menu-toggle  >\r\n                      <ion-item class=\"sub-item\" *ngFor=\"let sub of pages.children\" [routerLink]=\"sub.url\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n                          <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\r\n                            {{sub.title}} \r\n                      </ion-item>\r\n                    </ion-menu-toggle>\r\n\r\n              </div>\r\n\r\n          </div>\r\n\r\n\r\n                   <!-- Menu if user is logged in -->\r\n\r\n        </div>\r\n  \r\n          <div *ngIf=\"testingToken!=null && testingToken!='null'\">\r\n            \r\n             \r\n          <div *ngFor=\"let pages of menuNavigatorLogin\">\r\n          <ion-menu-toggle auto-hide=\"true\" *ngIf=\"pages.url\" >\r\n            <ion-item [routerLink]=\"pages.url\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n                <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n                   {{pages.title}} \r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n                <!-- if there is sub-cat -->\r\n          <ion-item button *ngIf=\"pages.children?.length > 0\" (click) = \"pages.open = !pages.open\"\r\n            [class.active-parent]=\"pages.open\" details=\"false\">\r\n            \r\n            <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\" *ngIf=\"!pages.open\"></ion-icon>\r\n            <ion-icon slot=\"end\" name=\"arrow-down\" *ngIf=\"pages.open\"></ion-icon>\r\n            <ion-label> {{pages.title}} </ion-label>\r\n\r\n          </ion-item>\r\n\r\n          <div  *ngIf=\"pages.open\">\r\n\r\n                <ion-menu-toggle  >\r\n                  <ion-item class=\"sub-item\" auto-hide=\"true\" *ngFor=\"let sub of pages.children\" [routerLink]=\"sub.url\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n                      <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\r\n                        {{sub.title}} \r\n                  </ion-item>\r\n                </ion-menu-toggle>\r\n\r\n          </div>\r\n\r\n          </div>\r\n        </div>\r\n        </ion-content>\r\n\r\n        <ion-footer >\r\n            <ion-toolbar>\r\n             <ion-button  expand=\"full\" >NYOKAH VERSION 1.0 </ion-button>\r\n            </ion-toolbar> \r\n        </ion-footer>\r\n\r\n      </ion-menu>\r\n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\r\n\r\n \r\n</ion-app>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | driver-home-home-module */
        "driver-home-home-module").then(__webpack_require__.bind(null,
        /*! ./driver/home/home.module */
        "./src/app/driver/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-dashboard-dashboard-module */
        "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./pages/dashboard/dashboard.module */
        "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-profile-profile-module */
        "pages-profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'about-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-us-about-us-module */
        "pages-about-us-about-us-module").then(__webpack_require__.bind(null,
        /*! ./pages/about-us/about-us.module */
        "./src/app/pages/about-us/about-us.module.ts")).then(function (m) {
          return m.AboutUsPageModule;
        });
      }
    }, {
      path: 'my-bookings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-my-bookings-my-bookings-module */
        "pages-my-bookings-my-bookings-module").then(__webpack_require__.bind(null,
        /*! ./pages/my-bookings/my-bookings.module */
        "./src/app/pages/my-bookings/my-bookings.module.ts")).then(function (m) {
          return m.MyBookingsPageModule;
        });
      }
    }, {
      path: 'our-contacts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-our-contacts-our-contacts-module */
        "pages-our-contacts-our-contacts-module").then(__webpack_require__.bind(null,
        /*! ./pages/our-contacts/our-contacts.module */
        "./src/app/pages/our-contacts/our-contacts.module.ts")).then(function (m) {
          return m.OurContactsPageModule;
        });
      }
    }, {
      path: 'seetings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-seetings-seetings-module */
        "pages-seetings-seetings-module").then(__webpack_require__.bind(null,
        /*! ./pages/seetings/seetings.module */
        "./src/app/pages/seetings/seetings.module.ts")).then(function (m) {
          return m.SeetingsPageModule;
        });
      }
    }, {
      path: 'send-feedbacks',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-send-feedbacks-send-feedbacks-module */
        "pages-send-feedbacks-send-feedbacks-module").then(__webpack_require__.bind(null,
        /*! ./pages/send-feedbacks/send-feedbacks.module */
        "./src/app/pages/send-feedbacks/send-feedbacks.module.ts")).then(function (m) {
          return m.SendFeedbacksPageModule;
        });
      }
    }, {
      path: 'my-messages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-my-messages-my-messages-module */
        "pages-my-messages-my-messages-module").then(__webpack_require__.bind(null,
        /*! ./pages/my-messages/my-messages.module */
        "./src/app/pages/my-messages/my-messages.module.ts")).then(function (m) {
          return m.MyMessagesPageModule;
        });
      }
    }, {
      path: 'car-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-car-details-car-details-module */
        "pages-car-details-car-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/car-details/car-details.module */
        "./src/app/pages/car-details/car-details.module.ts")).then(function (m) {
          return m.CarDetailsPageModule;
        });
      }
    }, {
      path: 'reservation-page',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-reservation-page-reservation-page-module */
        "pages-reservation-page-reservation-page-module").then(__webpack_require__.bind(null,
        /*! ./pages/reservation-page/reservation-page.module */
        "./src/app/pages/reservation-page/reservation-page.module.ts")).then(function (m) {
          return m.ReservationPagePageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-signup-signup-module */
        "pages-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./pages/signup/signup.module */
        "./src/app/pages/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'change-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-change-password-change-password-module */
        "pages-change-password-change-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/change-password/change-password.module */
        "./src/app/pages/change-password/change-password.module.ts")).then(function (m) {
          return m.ChangePasswordPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'trip-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | driver-trip-details-trip-details-module */
        "driver-trip-details-trip-details-module").then(__webpack_require__.bind(null,
        /*! ./driver/trip-details/trip-details.module */
        "./src/app/driver/trip-details/trip-details.module.ts")).then(function (m) {
          return m.TripDetailsPageModule;
        });
      }
    }, {
      path: 'forget-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-forget-password-forget-password-module */
        "pages-forget-password-forget-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/forget-password/forget-password.module */
        "./src/app/pages/forget-password/forget-password.module.ts")).then(function (m) {
          return m.ForgetPasswordPageModule;
        });
      }
    }, {
      path: 'business-class',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-business-class-business-class-module */
        "pages-business-class-business-class-module").then(__webpack_require__.bind(null,
        /*! ./pages/business-class/business-class.module */
        "./src/app/pages/business-class/business-class.module.ts")).then(function (m) {
          return m.BusinessClassPageModule;
        });
      }
    }, {
      path: 'term-usage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-term-usage-term-usage-module */
        "pages-term-usage-term-usage-module").then(__webpack_require__.bind(null,
        /*! ./pages/term-usage/term-usage.module */
        "./src/app/pages/term-usage/term-usage.module.ts")).then(function (m) {
          return m.TermUsagePageModule;
        });
      }
    }, {
      path: 'confidentiality',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-confidentiality-confidentiality-module */
        "pages-confidentiality-confidentiality-module").then(__webpack_require__.bind(null,
        /*! ./pages/confidentiality/confidentiality.module */
        "./src/app/pages/confidentiality/confidentiality.module.ts")).then(function (m) {
          return m.ConfidentialityPageModule;
        });
      }
    }, {
      path: 'prestige',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-prestige-prestige-module */
        "pages-prestige-prestige-module").then(__webpack_require__.bind(null,
        /*! ./pages/prestige/prestige.module */
        "./src/app/pages/prestige/prestige.module.ts")).then(function (m) {
          return m.PrestigePageModule;
        });
      }
    }, {
      path: 'premium',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-premium-premium-module */
        "pages-premium-premium-module").then(__webpack_require__.bind(null,
        /*! ./pages/premium/premium.module */
        "./src/app/pages/premium/premium.module.ts")).then(function (m) {
          return m.PremiumPageModule;
        });
      }
    }, {
      path: 'economique',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-economique-economique-module */
        "pages-economique-economique-module").then(__webpack_require__.bind(null,
        /*! ./pages/economique/economique.module */
        "./src/app/pages/economique/economique.module.ts")).then(function (m) {
          return m.EconomiquePageModule;
        });
      }
    }, {
      path: 'car-filter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-car-filter-car-filter-module */
        "pages-car-filter-car-filter-module").then(__webpack_require__.bind(null,
        /*! ./pages/car-filter/car-filter.module */
        "./src/app/pages/car-filter/car-filter.module.ts")).then(function (m) {
          return m.CarFilterPageModule;
        });
      }
    }, {
      path: 'my-reports',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | driver-my-reports-my-reports-module */
        "driver-my-reports-my-reports-module").then(__webpack_require__.bind(null,
        /*! ./driver/my-reports/my-reports.module */
        "./src/app/driver/my-reports/my-reports.module.ts")).then(function (m) {
          return m.MyReportsPageModule;
        });
      }
    }, {
      path: 'send-reports',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | driver-send-reports-send-reports-module */
        "driver-send-reports-send-reports-module").then(__webpack_require__.bind(null,
        /*! ./driver/send-reports/send-reports.module */
        "./src/app/driver/send-reports/send-reports.module.ts")).then(function (m) {
          return m.SendReportsPageModule;
        });
      }
    }, {
      path: 'send-rides',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | driver-send-rides-send-rides-module */
        "driver-send-rides-send-rides-module").then(__webpack_require__.bind(null,
        /*! ./driver/send-rides/send-rides.module */
        "./src/app/driver/send-rides/send-rides.module.ts")).then(function (m) {
          return m.SendRidesPageModule;
        });
      }
    }, {
      path: 'report-client',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-report-client-report-client-module */
        "pages-report-client-report-client-module").then(__webpack_require__.bind(null,
        /*! ./pages/report-client/report-client.module */
        "./src/app/pages/report-client/report-client.module.ts")).then(function (m) {
          return m.ReportClientPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".splash {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  background-color: #ffa60a;\n  margin: 100px auto;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: perspective(120px);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(180deg);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);\n  }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n.active {\n  --ion-text-color: var(--ion-color-primary);\n}\n\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion--color--primary);\n}\n\n.active-parent {\n  font-weight: 500;\n}\n\n.sub-item {\n  padding-left: 20px;\n  font-size: small;\n}\n\n.image-icon {\n  height: 80px;\n  width: 80px;\n  border-radius: 40px;\n}\n\n.btn {\n  background: white;\n  color: black;\n  font-size: smaller;\n  padding: 2px 2px 2px 2px;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.profileImage {\n  height: 0vw;\n  width: 0vw;\n  margin: 0vw;\n  padding: 0vw;\n}\n\n.labelText {\n  padding-left: 80vm;\n}\n\nion-item {\n  --background: black;\n  color: white;\n}\n\nion-content, ion-toolbar {\n  --background: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-icon {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsbURBQUE7QUNBRjs7QURHQTtFQUNFO0lBQUsscUNBQUE7RUNDTDtFREFBO0lBQU0scURBQUE7RUNHTjtFREZBO0lBQU8scUVBQUE7RUNLUDtBQUNGOztBREhBO0VBQ0U7SUFDRSx5REFBQTtJQUNBLGlFQUFBO0VDS0Y7RURKRTtJQUNBLDhEQUFBO0lBQ0Esc0VBQUE7RUNNRjtFRExFO0lBQ0EsaUVBQUE7SUFDQSx5RUFBQTtFQ09GO0FBQ0Y7O0FEREE7RUFFSSwwQ0FBQTtBQ0VKOztBRERJO0VBQ0ksZ0RBQUE7QUNHUjs7QURDQTtFQUVJLGdCQUFBO0FDQ0o7O0FER0U7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQU47O0FER0U7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1FO0VBQ0Usa0JBQUE7QUNISjs7QURPQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRE9BO0VBRUksbUJBQUE7QUNMSjs7QURPQTtFQUVJLFlBQUE7QUNMSjs7QURPQTtFQUVFLGNBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3BsYXNoe1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zcGlubmVyIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYwYTtcclxuXHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgfVxyXG4gIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgIHJvdGF0ZVgoMTgwZGVnKSB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xyXG4gIDAlIHsgXHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBcclxuICB9IDUwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpIFxyXG4gIH0gMTAwJSB7IFxyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uYWN0aXZle1xyXG4gIFxyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IHZhcigtLWlvbi0tY29sb3ItLXByaW1hcnkpOyBcclxuICAgIH1cclxuICBcclxuICB9XHJcbi5hY3RpdmUtcGFyZW50e1xyXG4gIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnN1Yi1pdGVte1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGwgO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLWljb24ge1xyXG5cclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyBjb2xvcjogY29sb3IoJGNvbG9ycywgYmx1ZWdyZWVuKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5wcm9maWxlSW1hZ2V7XHJcbiAgICBoZWlnaHQ6MHZ3O1xyXG4gICAgd2lkdGg6IDB2dztcclxuICAgIG1hcmdpbjogMHZ3O1xyXG4gICAgcGFkZGluZzogMHZ3O1xyXG5cclxuICB9XHJcblxyXG4gIC5sYWJlbFRleHR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwdm07XHJcbiAgICBcclxuICB9XHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbn1cclxuaW9uLWNvbnRlbnQsaW9uLXRvb2xiYXJcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuaW9uLWxhYmVsXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbn1cclxuaW9uLWljb25cclxue1xyXG4gIGNvbG9yOiAgI2ZmYTYwYTtcclxuIFxyXG59XHJcbiIsIi5zcGxhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MGE7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDE4MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xuICB9XG59XG4uYWN0aXZlIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmFjdGl2ZSBpb24taWNvbiB7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tLWNvbG9yLS1wcmltYXJ5KTtcbn1cblxuLmFjdGl2ZS1wYXJlbnQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5pbWFnZS1pY29uIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2ZpbGVJbWFnZSB7XG4gIGhlaWdodDogMHZ3O1xuICB3aWR0aDogMHZ3O1xuICBtYXJnaW46IDB2dztcbiAgcGFkZGluZzogMHZ3O1xufVxuXG4ubGFiZWxUZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHZtO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQsIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts"); // import { timer } from 'rxjs/observable/timer';


    var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].SplashScreen;
    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;
    var LNG_KEY = 'SELECTED LANGUAGE';

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, statusBar, menuCtrl, //add this router for switching pages
      router, // our webservice,
      webService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.webService = webService;
        this.showSubmenu = false;
        this.showSplash = true;
        this.profile = '../assets/imgs/profile.png';
        this.defaultProfile = '../assets/imgs/dummyProfile.jpg';
        this.initializeApp(); ///////////////////// after changing a language //////////////////////////////////

        this.subscription = this.webService.getMessage().subscribe(function (text) {
          //   console.log("//////////////// \ntext",text.language);
          //   alert("recev  -> "+text.language)
          _this.sideMenu(text.language);
        });
      }

      _createClass(AppComponent, [{
        key: "menuItemHandler",
        value: function menuItemHandler() {
          this.showSubmenu = !this.showSubmenu;
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var ret, type;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      ////////////////splashcreen delay//////////////////////
                      // Hide the splash (you should do this on app launch)
                      setTimeout(function () {
                        SplashScreen.hide();
                        _this3.showSplash = false; // this.editableText=true;
                      }, 1000); /////////////////////////////////////
                      //token storage

                      ret = Storage.get({
                        key: 'accessToken'
                      });
                      _context.next = 4;
                      return ret;

                    case 4:
                      this.testingToken = _context.sent.value;

                      if (!this.testingToken) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 8;
                      return Storage.get({
                        key: 'user_type'
                      });

                    case 8:
                      type = _context.sent.value;

                      if (type == "chauffeur") {
                        this.router.navigateByUrl("/home");
                      }

                    case 10:
                      // console.log("checKing token from storage ",this.testingToken,typeof(this.testingToken));
                      // //set the initial language of the app
                      this.webService.setInitialAppLanguage().then(function (val) {
                        // alert("val : "+val);
                        _this3.sideMenu(val);
                      }); //  this.sideMenu("fr");
                      // console.log("a out  : ",a);

                      this.statusBar.styleDefault();
                      SplashScreen.hide();

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        } ////////////////////////////////////////////////////////////////////////////////////////////////
        //get current token

      }, {
        key: "getCurrentToken",
        value: function getCurrentToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var ret;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    ret = Storage.get({
                      key: 'accessToken'
                    }); //this.testingToken = (await ret).value;

                    _context2.next = 3;
                    return ret;

                  case 3:
                    return _context2.abrupt("return", _context2.sent.value);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        } /////////////////////////////////////////////////////////////////

      }, {
        key: "openUserProfile",
        value: function openUserProfile(url) {// console.log('Open this URL: ',url);
        } //////////////////////////////////

      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Storage.set({
                      key: 'accessToken',
                      value: null
                    });

                  case 2:
                    _context3.next = 4;
                    return Storage.set({
                      key: 'user_infos',
                      value: null
                    });

                  case 4:
                    _context3.next = 6;
                    return Storage.set({
                      key: 'user_type',
                      value: null
                    });

                  case 6:
                    ////////
                    this.webService.getCurrentLanguage().then(function (val) {
                      _this4.webService.sendMessage({
                        'token': "mytoken",
                        'language': val
                      });
                    }); //call dashboard page and pass data

                    this.menuCtrl.toggle();
                    this.router.navigateByUrl("/dashboard");

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } ///////////////////////////////////////////////

      }, {
        key: "login_signupPage",
        value: function login_signupPage() {
          this.menuCtrl.toggle();
          this.router.navigateByUrl("/login");
        } /////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////START : SIDE MENU//////////////////////////////////////////////////////////////////////
        //this method is for english side menu 

      }, {
        key: "sideMenu",
        value: function sideMenu(lang) {
          var _this5 = this;

          //console.log("Side Menu");
          //check the language and print the appropriate menu
          //store the initial language in the storage
          this.getCurrentToken().then(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var type;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.testingToken = data; //   alert("Token : "+this.testingToken)
                      // console.log(" sidemenu token  ",this.testingToken);
                      ////////////english side menu ////////////////////////////////////////////         

                      if (!(lang == "en")) {
                        _context4.next = 17;
                        break;
                      }

                      if (!(this.testingToken != null && this.testingToken != 'null')) {
                        _context4.next = 14;
                        break;
                      }

                      _context4.t0 = JSON;
                      _context4.next = 6;
                      return Storage.get({
                        key: "user_infos"
                      });

                    case 6:
                      _context4.t1 = _context4.sent.value;
                      this.userInf = _context4.t0.parse.call(_context4.t0, _context4.t1);
                      _context4.next = 10;
                      return Storage.get({
                        key: "user_type"
                      });

                    case 10:
                      type = _context4.sent.value;

                      //console.log("Type : ",type, "\n user infos : \n",this.userInf);
                      /////////if type is client /////////////////////////////
                      if (type == "client") {
                        this.menuNavigatorLogin = [{
                          title: "Home",
                          url: "/dashboard",
                          icon: "home"
                        }, {
                          title: "Profile",
                          url: "/profile",
                          icon: "person"
                        }, {
                          title: "Car Fleet",
                          icon: "car",
                          children: [{
                            title: "Business XXL",
                            url: "/business-class",
                            icon: "aperture-outline"
                          }, {
                            title: "Economic",
                            url: "/economique",
                            icon: "aperture-outline"
                          }, {
                            title: "Premium ",
                            url: "/premium",
                            icon: "aperture-outline"
                          }, {
                            title: "Prestige",
                            url: "/prestige",
                            icon: "aperture-outline"
                          }]
                        }, {
                          title: "My Bookings",
                          url: "/my-bookings",
                          icon: "cart"
                        }, {
                          title: "Testimonials",
                          icon: "mail",
                          children: [{
                            title: "My testimonials",
                            url: "/my-messages",
                            icon: "mail"
                          }, {
                            title: "Send testimonial",
                            url: "/send-feedbacks",
                            icon: "send-outline"
                          }]
                        }, {
                          title: "Support",
                          icon: "help-buoy-outline",
                          children: [{
                            title: "About Us",
                            url: "/about-us",
                            icon: "information-circle-outline"
                          }, {
                            title: "Our Contacts",
                            url: "/our-contacts",
                            icon: "call-outline"
                          }, {
                            title: "Term of usage",
                            url: "/term-usage",
                            icon: "help-circle-outline"
                          }, {
                            title: "Confidentiality principles",
                            url: "/confidentiality",
                            icon: "help-circle-outline"
                          }]
                        }, {
                          title: "Settings",
                          icon: "settings",
                          children: [{
                            title: "App Language",
                            url: "/seetings",
                            icon: "language-outline"
                          }, {
                            title: "Change Password",
                            url: "/change-password",
                            icon: "lock-closed-outline"
                          }]
                        }];
                      } /////////if type is driver ////////////////////////////
                      else if (type == "chauffeur") {
                          this.menuNavigatorLogin = [{
                            title: "Home",
                            url: "/home",
                            icon: "home"
                          }, {
                            title: "Profile",
                            url: "/profile",
                            icon: "person"
                          }, {
                            title: "My Rides",
                            url: "/send-rides",
                            icon: "car"
                          }, //  {
                          //    title : "My Reports",
                          //    url   : "/my-reports",
                          //    icon  : "mail"
                          //  },
                          {
                            title: "Support",
                            icon: "help-buoy-outline",
                            children: [{
                              title: "About Us",
                              url: "/about-us",
                              icon: "information-circle-outline"
                            }, {
                              title: "Our Contacts",
                              url: "/our-contacts",
                              icon: "call-outline"
                            }]
                          }, {
                            title: "Settings",
                            icon: "settings",
                            children: [{
                              title: "App Language",
                              url: "/seetings",
                              icon: "language-outline"
                            }, {
                              title: "Change Password",
                              url: "/change-password",
                              icon: "lock-closed-outline"
                            }]
                          }];
                        }

                      _context4.next = 15;
                      break;

                    case 14:
                      this.menuNavigatorWithoutLogin = [{
                        title: "Home",
                        url: "/dashboard",
                        icon: "home"
                      }, {
                        title: "Car Fleet",
                        icon: "car",
                        children: [{
                          title: "Business XXL",
                          url: "/business-class",
                          icon: "aperture-outline"
                        }, {
                          title: "Economic",
                          url: "/economique",
                          icon: "aperture-outline"
                        }, {
                          title: "Premium",
                          url: "/premium",
                          icon: "aperture-outline"
                        }, {
                          title: "Prestige",
                          url: "/prestige",
                          icon: "aperture-outline"
                        }]
                      }, {
                        title: "Support",
                        icon: "help-buoy-outline",
                        children: [{
                          title: "About Us",
                          url: "/about-us",
                          icon: "information-circle-outline"
                        }, {
                          title: "Our Contacts",
                          url: "/our-contacts",
                          icon: "call-outline"
                        }, {
                          title: "Term of usage",
                          url: "/term-usage",
                          icon: "help-circle-outline"
                        }, {
                          title: "Confidentiality principles",
                          url: "/confidentiality",
                          icon: "help-circle-outline"
                        }]
                      }, {
                        title: "Settings",
                        icon: "settings",
                        children: [{
                          title: "App Language",
                          url: "/seetings",
                          icon: "language-outline"
                        }]
                      }];

                    case 15:
                      _context4.next = 31;
                      break;

                    case 17:
                      if (!(lang == "fr")) {
                        _context4.next = 31;
                        break;
                      }

                      if (!(this.testingToken != null && this.testingToken != 'null')) {
                        _context4.next = 30;
                        break;
                      }

                      _context4.t2 = JSON;
                      _context4.next = 22;
                      return Storage.get({
                        key: "user_infos"
                      });

                    case 22:
                      _context4.t3 = _context4.sent.value;
                      this.userInf = _context4.t2.parse.call(_context4.t2, _context4.t3);
                      _context4.next = 26;
                      return Storage.get({
                        key: "user_type"
                      });

                    case 26:
                      type = _context4.sent.value;

                      // console.log("Type : ",type, "\n user infos : \n",this.userInf);
                      /////////if type is client /////////////////////////////
                      if (type == "client") {
                        this.menuNavigatorLogin = [{
                          title: "Accueil",
                          url: "/dashboard",
                          icon: "home"
                        }, {
                          title: "Mon Profil",
                          url: "/profile",
                          icon: "person"
                        }, {
                          title: "Flotte automobile",
                          icon: "car",
                          children: [{
                            title: "Business XXL",
                            url: "/business-class",
                            icon: "aperture-outline"
                          }, {
                            title: "Economique",
                            url: "/economique",
                            icon: "aperture-outline"
                          }, {
                            title: "Premium",
                            url: "/premium",
                            icon: "aperture-outline"
                          }, {
                            title: "Prestige",
                            url: "/prestige",
                            icon: "aperture-outline"
                          }]
                        }, {
                          title: "Mes reservations",
                          url: "/my-bookings",
                          icon: "cart"
                        }, {
                          title: "Témoignages",
                          icon: "mail",
                          children: [{
                            title: "Mes témoignages",
                            url: "/my-messages",
                            icon: "mail"
                          }, {
                            title: "Postez témoignages",
                            url: "/send-feedbacks",
                            icon: "send-outline"
                          }]
                        }, {
                          title: "Support",
                          icon: "help-buoy-outline",
                          children: [{
                            title: "À propos",
                            url: "/about-us",
                            icon: "information-circle-outline"
                          }, {
                            title: "Nos Contacts",
                            url: "/our-contacts",
                            icon: "call-outline"
                          }, {
                            title: "Conditions d'utilisation",
                            url: "/term-usage",
                            icon: "help-circle-outline"
                          }, {
                            title: "Principes de confidentialités",
                            url: "/confidentiality",
                            icon: "help-circle-outline"
                          }]
                        }, {
                          title: "Paramètres",
                          icon: "settings",
                          children: [{
                            title: "Langue de l'application",
                            url: "/seetings",
                            icon: "language-outline"
                          }, {
                            title: "Réinitialiser Password",
                            url: "/change-password",
                            icon: "lock-closed-outline"
                          }]
                        }];
                      } ///////////if type is driver ////////////////////////////
                      else if (type == "chauffeur") {
                          //not yet ready 
                          this.menuNavigatorLogin = [{
                            title: "Accueil",
                            url: "/home",
                            icon: "home"
                          }, {
                            title: "Mon Profil",
                            url: "/profile",
                            icon: "person"
                          }, {
                            title: "Mes Trajets",
                            url: "/send-rides",
                            icon: "car"
                          }, // {
                          //   title : "Mes Rapports",
                          //   url   : "/my-reports",
                          //   icon  : "mail"
                          // },
                          {
                            title: "Support",
                            icon: "help-buoy-outline",
                            children: [{
                              title: "À propos",
                              url: "/about-us",
                              icon: "information-circle-outline"
                            }, {
                              title: "Nos Contacts",
                              url: "/our-contacts",
                              icon: "call-outline"
                            }]
                          }, {
                            title: "Paramètres",
                            icon: "settings",
                            children: [{
                              title: "Langue de l'application",
                              url: "/seetings",
                              icon: "language-outline"
                            }, {
                              title: "Réinitialiser Password",
                              url: "/change-password",
                              icon: "lock-closed-outline"
                            }]
                          }];
                        }

                      _context4.next = 31;
                      break;

                    case 30:
                      this.menuNavigatorWithoutLogin = [{
                        title: "Accueil",
                        url: "/dashboard",
                        icon: "home"
                      }, {
                        title: "Flotte automobile",
                        icon: "car",
                        children: [{
                          title: "Business XXL ",
                          url: "/business-class",
                          icon: "aperture-outline"
                        }, {
                          title: "Economique ",
                          url: "/economique",
                          icon: "aperture-outline"
                        }, {
                          title: "Premium ",
                          url: "/premium",
                          icon: "aperture-outline"
                        }, {
                          title: "Prestige",
                          url: "/prestige",
                          icon: "aperture-outline"
                        }]
                      }, {
                        title: "Support",
                        icon: "help-buoy-outline",
                        children: [{
                          title: "À propos",
                          url: "/about-us",
                          icon: "information-circle-outline"
                        }, {
                          title: "Nos Contacts",
                          url: "/our-contacts",
                          icon: "call-outline"
                        }, {
                          title: "Conditions d'utilisation",
                          url: "/term-usage",
                          icon: "help-circle-outline"
                        }, {
                          title: "Principes de confidentialités",
                          url: "/confidentiality",
                          icon: "help-circle-outline"
                        }]
                      }, {
                        title: "Paramètres",
                        icon: "settings",
                        children: [{
                          title: "Langue de l'application",
                          url: "/seetings",
                          icon: "language-outline"
                        }]
                      }];

                    case 31:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_6__["AppServiceService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: LanguageLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
      return LanguageLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");

    function LanguageLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
          useFactory: LanguageLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, Storage, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_15__["CallNumber"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_16__["EmailComposer"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/service/appService/app-service.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/service/appService/app-service.service.ts ***!
    \***********************************************************/

  /*! exports provided: AppServiceService */

  /***/
  function srcAppServiceAppServiceAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppServiceService", function () {
      return AppServiceService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage; // this used for storage 

    var LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage
    //proxy url

    var proxyurl = "https://cors-anywhere.herokuapp.com/"; //const base_url= "http://othnieldona.pythonanywhere.com/api/";
    // basic api url
    //const base_url=proxyurl+"http://othnieldona.pythonanywhere.com/api/";

    var base_url = proxyurl + "http://metier.nyokah.ci/api/"; //header used for API URL

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AppServiceService = /*#__PURE__*/function () {
      function AppServiceService(http, loadingCtrl, translate) {
        _classCallCheck(this, AppServiceService);

        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate; // basic api url
        //base_url= "http://othnieldona.pythonanywhere.com";

        this.base_url = "";
        this.selected = ''; // selected language
        ///////////////////////////SEND DATA TO UPDATE THE MENU///////////////////////////////////////////////////////////////

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      } //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////// START : PRESENTATION LOADING ////////////////////////////////////////////////


      _createClass(AppServiceService, [{
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var lang, myMessage;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Storage.get({
                      key: LNG_KEY
                    });

                  case 2:
                    lang = _context5.sent.value;
                    myMessage = "";

                    if (lang == "fr") {
                      myMessage = "Récupération des données";
                    } else {
                      myMessage = 'Fetching data';
                    } // console.log("loading starts");


                    this.loading = this.loadingCtrl.create({
                      message: myMessage
                    });
                    _context5.next = 8;
                    return this.loading;

                  case 8:
                    _context5.sent.present();

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // async stopLoading() {
        // // this.loading.dismissAll();
        // (await this.loading).dismissAll();
        // }

      }, {
        key: "stopLoading",
        value: function stopLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.loading) {
                      _context6.next = 5;
                      break;
                    }

                    //console.log("stop loader")
                    this.loading = false;
                    _context6.next = 4;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('loading dismissed');
                    });

                  case 4:
                    return _context6.abrupt("return", _context6.sent);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } //////////////////////////////////////// END : PRESENTATION LOADING//////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////// CHANGE OF LANGUAGE SERVICE //////////////////////////////////////////////////
        //set the initial app language

      }, {
        key: "setInitialAppLanguage",
        value: function setInitialAppLanguage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var language, ret, val;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    //console.log("initialize App Language");
                    language = "fr";
                    ret = Storage.get({
                      key: LNG_KEY
                    });
                    _context7.next = 4;
                    return ret;

                  case 4:
                    val = _context7.sent.value;

                    if (!(val != null)) {
                      _context7.next = 12;
                      break;
                    }

                    _context7.next = 8;
                    return ret;

                  case 8:
                    this.selected = _context7.sent.value;
                    this.setLanguage(this.selected); // console.log("checKing data from storage ",this.selected,typeof(this.selected));

                    _context7.next = 13;
                    break;

                  case 12:
                    this.selected = language;

                  case 13:
                    this.setLanguage(this.selected); //console.log("storage ",this.selected,typeof(this.selected));
                    //  alert(this.selected)

                    return _context7.abrupt("return", this.selected);

                  case 15:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // get the current app language

      }, {
        key: "getCurrentLanguage",
        value: function getCurrentLanguage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var ret, val;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    ret = Storage.get({
                      key: LNG_KEY
                    });
                    _context8.next = 3;
                    return ret;

                  case 3:
                    val = _context8.sent.value;
                    return _context8.abrupt("return", val);

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        } //set language

      }, {
        key: "setLanguage",
        value: function setLanguage(setLang) {
          this.translate.use(setLang);
          this.selected = setLang;
          Storage.set({
            key: LNG_KEY,
            value: setLang
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(text) {
          this.subject.next(text);
          return "sent";
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.subject.asObservable();
        } /////////////////////////////END SEND DATA TO UPDATE THE MENU//////////////////////////////////////////////////////
        //////////////////////////////////// END CHANGE OF LANGUAGE SERVICE //////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////START :  EXTRACT DATA AND ERROR HANDLING //////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            console.error("An error occurred:", error.error.message);
          } else {
            console.error("Backend returned code ".concat(error.status, ", ") + "Body was : ".concat(error.error));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          var body = res;
          return body || {};
        } /////////////////////////////////STOP :  EXTRACT DATA AND ERROR HANDLING/////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////// START : LOGIN SERVICE API////////////////////////////////////////////////////

      }, {
        key: "postData",
        value: function postData(url, data) {
          //console.log("data To Send : \n", url, data)
          return this.http.post(url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        }
      }, {
        key: "login",
        value: function login(data) {
          return this.postData(base_url + "login/", data);
        } ///////////////////////////////// END : LOGIN SERVICE API////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////// START : SIGNUP SERVICE API////////////////////////////////////////////////////

      }, {
        key: "signup",
        value: function signup(data) {
          return this.postData(base_url + "clients/", data);
        } ///////////////////////////////// END : SIGNUP SERVICE API////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////// START : GET DESTINATION ///////////////////////////////////////////////////////////////////////////////

      }, {
        key: "getDestinations",
        value: function getDestinations() {
          return this.http.get(base_url + "destinations", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET DESTINATION////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////// START : GET DESTINATION BY ID ///////////////////////////////////////////////////////////////////////////////

      }, {
        key: "getSingleDestination",
        value: function getSingleDestination(id) {
          return this.http.get(base_url + "destinations/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET DESTINATION By ID////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////// START : GET CARS ///////////////////////////////////////////////////////////////////////////////
        //voitures means cars

      }, {
        key: "getVoitures",
        value: function getVoitures() {
          return this.http.get(base_url + "voitures/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        }
      }, {
        key: "getCarDetails",
        value: function getCarDetails(id) {
          return this.http.get(base_url + "voitures/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        }
      }, {
        key: "getModelCar",
        value: function getModelCar(id) {
          return this.http.get(base_url + "modeles/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        }
      }, {
        key: "getPriceCar",
        value: function getPriceCar(id) {
          return this.http.get(base_url + "couts/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET CARS////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////START : GET CARS PER CLASS /////////////////////////////////////////////////////////////////////////
        //Family, business, SUV class

      }, {
        key: "getCarClass",
        value: function getCarClass(id) {
          return this.http.get(base_url + "classes/" + id + "/marques", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET CARS PER CLASS////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET USER ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getUserDetails",
        value: function getUserDetails(token, id, type) {
          // console.log("is Driver : ", type);
          var myToken = 'Token ' + token;
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': myToken
            })
          };

          if (!type) //client
            {
              return this.http.get(base_url + "clients/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
            } else // driver
            {
              return this.http.get(base_url + "chauffeurs/" + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
            }
        } ///////////////////////////////////// END : GET CARS PER CLASS////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : POST TESTIMONIAL ////////////////////////////////////////////////////////////////////////
        // postfeedbacks(data)
        // {
        //   return this.postData( (base_url + "login/"),data);
        // }
        ///////////////////////////////////// END : POST TESTIMONIAL////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET ABOUT US ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getAboutUs",
        value: function getAboutUs() {
          return this.http.get(base_url + "a_propos/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET ABOUT US////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET OUR TEAM ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getTeam",
        value: function getTeam() {
          return this.http.get(base_url + "equipe/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET OUR TEAM////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET OUR Contacts ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getContacts",
        value: function getContacts() {
          return this.http.get(base_url + "contact/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET OUR Contacts ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET Terms of usage ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getTerms",
        value: function getTerms() {
          return this.http.get(base_url + "condition/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET Terms of usage ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET Terms of usage ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getConf",
        value: function getConf() {
          return this.http.get(base_url + "confidentialite/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET Terms of usage ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET Optionnels ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getOption",
        value: function getOption() {
          return this.http.get(base_url + "optionnels/", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET Optionnels   ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : POST TESTIMONIAL ////////////////////////////////////////////////////////////////////////

      }, {
        key: "postFeedbacks",
        value: function postFeedbacks(data, token) {
          return this.postData1(base_url + "/temoignage/", data, token);
        } ///////////////////////////////////// END : POST TESTIMONIAL////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET USER TESTIMONIAL ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getFeedbacks",
        value: function getFeedbacks(id, token) {
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.get(base_url + "clients/" + id + "/temoignages", httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET USER TESTIMONIAL////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : GET USER DETAILS ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getClient",
        value: function getClient(id, token) {
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.get(base_url + "clients/" + id, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET USER details////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : POST RESERVATION  ////////////////////////////////////////////////////////////////////////

      }, {
        key: "postData1",
        value: function postData1(url, data, token) {
          // console.log("APP Service : data To Send : \n", url, data,token)
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.post(url, data, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        }
      }, {
        key: "postReservation",
        value: function postReservation(token, data) {
          return this.postData1(base_url + "locations/", data, token);
        } ///////////////////////////////////// END : POST RESERVATION////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////STRAT : Change Password  ////////////////////////////////////////////////////////////////////////

      }, {
        key: "changeUserPassword",
        value: function changeUserPassword(id, token, data) {
          return this.postData1(base_url + "clients/" + id + "set_password/", data, token);
        } ///////////////////////////////////// END : Change Password///////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////START : GET Client Reservation ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getClientReservation",
        value: function getClientReservation(id, token) {
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.get(base_url + "clients/" + id + "/locations", httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET Client Reservation  ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////START : GET Driver Ride ////////////////////////////////////////////////////////////////////////

      }, {
        key: "getDriverRide",
        value: function getDriverRide(id, token) {
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.get(base_url + "chauffeurs/" + id + "/locations", httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : GET Driver Ride  ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////START : EDIT CLIENT PROFILE ////////////////////////////////////////////////////////////////////////

      }, {
        key: "EditClientProfile",
        value: function EditClientProfile(id, token, data) {
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.put(base_url + "clients/" + id + "/", data, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : EDIT CLIENT PROFILE  ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////START : EDIT LOCATION FOR ADDING MARKS ////////////////////////////////////////////////////////////////////////

      }, {
        key: "EditLocation",
        value: function EditLocation(id, token, data) {
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.put(base_url + "locations/" + id + "/", data, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } //////////////////////////////////////END : EDIT CLIENT PROFILE  ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////START : EDIT CLIENT PASSWORD ////////////////////////////////////////////////////////////////////////

      }, {
        key: "changeClientPasssword",
        value: function changeClientPasssword(id, token, data) {
          var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + token
            })
          };
          return this.http.post(base_url + "clients/" + id + "/set_password/", data, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } ///////////////////////////////////// END : EDIT CLIENT PASSWORD  ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////START : RESET CLIENT PASSWORD ////////////////////////////////////////////////////////////////////////
        //////////////////////////// START : VERIFY EMAIL ///////////////////////////////////////

      }, {
        key: "verifyEmail",
        value: function verifyEmail(data) {
          return this.http.post(base_url + "clients/verify_email/", data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        } /////////////////////////// END : VERIFY EMAIL ////////////////////////////////////////

      }, {
        key: "resetPasssword",
        value: function resetPasssword(data) {
          return this.http.post(base_url + "/reset_password/", data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
        }
      }]);

      return AppServiceService;
    }();

    AppServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    AppServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\ionicapp\loginCap\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map