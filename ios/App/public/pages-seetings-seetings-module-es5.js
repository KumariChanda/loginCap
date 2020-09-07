function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seetings-seetings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seetings/seetings.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seetings/seetings.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSeetingsSeetingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n       <ion-title>{{'LANGUAGE.title' | translate}}</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n     <ion-list>\n    <ion-item>\n      <ion-label>{{'LANGUAGE.select_lang' | translate}}</ion-label>\n      <ion-select placeholder=\"Select One\" [value]=\"selectedLanguage\"  [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\">\n        <ion-select-option value=\"en\">{{'LANGUAGE.english' | translate}}</ion-select-option>\n        <ion-select-option value=\"fr\">{{'LANGUAGE.french' | translate}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/seetings/seetings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/seetings/seetings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SeetingsPageRoutingModule */

  /***/
  function srcAppPagesSeetingsSeetingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeetingsPageRoutingModule", function () {
      return SeetingsPageRoutingModule;
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


    var _seetings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seetings.page */
    "./src/app/pages/seetings/seetings.page.ts");

    var routes = [{
      path: '',
      component: _seetings_page__WEBPACK_IMPORTED_MODULE_3__["SeetingsPage"]
    }];

    var SeetingsPageRoutingModule = function SeetingsPageRoutingModule() {
      _classCallCheck(this, SeetingsPageRoutingModule);
    };

    SeetingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SeetingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/seetings/seetings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/seetings/seetings.module.ts ***!
    \***************************************************/

  /*! exports provided: SeetingsPageModule */

  /***/
  function srcAppPagesSeetingsSeetingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeetingsPageModule", function () {
      return SeetingsPageModule;
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


    var _seetings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./seetings-routing.module */
    "./src/app/pages/seetings/seetings-routing.module.ts");
    /* harmony import */


    var _seetings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./seetings.page */
    "./src/app/pages/seetings/seetings.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SeetingsPageModule = function SeetingsPageModule() {
      _classCallCheck(this, SeetingsPageModule);
    };

    SeetingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seetings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeetingsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_seetings_page__WEBPACK_IMPORTED_MODULE_6__["SeetingsPage"]]
    })], SeetingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/seetings/seetings.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/seetings/seetings.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSeetingsSeetingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3NlZXRpbmdzL3NlZXRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VldGluZ3Mvc2VldGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VldGluZ3Mvc2VldGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuIiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/seetings/seetings.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/seetings/seetings.page.ts ***!
    \*************************************************/

  /*! exports provided: SeetingsPage */

  /***/
  function srcAppPagesSeetingsSeetingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeetingsPage", function () {
      return SeetingsPage;
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

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;
    var LNG_KEY = 'SELECTED LANGUAGE';

    var SeetingsPage = /*#__PURE__*/function () {
      function SeetingsPage(router, webService) {
        _classCallCheck(this, SeetingsPage);

        this.router = router;
        this.webService = webService;
        this.getcurrentlang();
      }

      _createClass(SeetingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} ////////////

      }, {
        key: "getcurrentlang",
        value: function getcurrentlang() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var ret, val;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    ret = Storage.get({
                      key: LNG_KEY
                    });
                    _context.next = 3;
                    return ret;

                  case 3:
                    val = _context.sent.value;
                    this.selectedLanguage = val; //console.log("selected language ",this.selectedLanguage ,typeof(this.selectedLanguage ));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //////////////////////

      }, {
        key: "languageChanged",
        value: function languageChanged() {
          this.webService.setLanguage(this.selectedLanguage); //  Storage.set({key:LNG_KEY, value:this.selectedLanguage}); 
          //send the language for menu updation

          this.webService.sendMessage({
            'language': this.selectedLanguage
          }); // this.router.navigateByUrl("/dashboard");
        }
      }]);

      return SeetingsPage;
    }();

    SeetingsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"]
      }];
    };

    SeetingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seetings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./seetings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seetings/seetings.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./seetings.page.scss */
      "./src/app/pages/seetings/seetings.page.scss"))["default"]]
    })], SeetingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-seetings-seetings-module-es5.js.map