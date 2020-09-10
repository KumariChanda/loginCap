function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-term-usage-term-usage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/term-usage/term-usage.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/term-usage/term-usage.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTermUsageTermUsagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n   <ion-item>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'DASHBOARD.usage_term' | translate }} </ion-title>\r\n    </ion-item> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n     <!-- -------------------------------------------------------------------------------------- -->\r\n        <!-- Start contact -->\r\n       <ion-card *ngFor=\"let term of myterms; \" >\r\n          \r\n            <ion-card-content>\r\n                          \r\n               \r\n                    {{term.text}}\r\n          \r\n            </ion-card-content>\r\n      </ion-card>\r\n        <!-- Stop Contact -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/term-usage/term-usage-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/term-usage/term-usage-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: TermUsagePageRoutingModule */

  /***/
  function srcAppPagesTermUsageTermUsageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermUsagePageRoutingModule", function () {
      return TermUsagePageRoutingModule;
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


    var _term_usage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./term-usage.page */
    "./src/app/pages/term-usage/term-usage.page.ts");

    var routes = [{
      path: '',
      component: _term_usage_page__WEBPACK_IMPORTED_MODULE_3__["TermUsagePage"]
    }];

    var TermUsagePageRoutingModule = function TermUsagePageRoutingModule() {
      _classCallCheck(this, TermUsagePageRoutingModule);
    };

    TermUsagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TermUsagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/term-usage/term-usage.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/term-usage/term-usage.module.ts ***!
    \*******************************************************/

  /*! exports provided: TermUsagePageModule */

  /***/
  function srcAppPagesTermUsageTermUsageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermUsagePageModule", function () {
      return TermUsagePageModule;
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


    var _term_usage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./term-usage-routing.module */
    "./src/app/pages/term-usage/term-usage-routing.module.ts");
    /* harmony import */


    var _term_usage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./term-usage.page */
    "./src/app/pages/term-usage/term-usage.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TermUsagePageModule = function TermUsagePageModule() {
      _classCallCheck(this, TermUsagePageModule);
    };

    TermUsagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _term_usage_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermUsagePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_term_usage_page__WEBPACK_IMPORTED_MODULE_6__["TermUsagePage"]]
    })], TermUsagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/term-usage/term-usage.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/term-usage/term-usage.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTermUsageTermUsagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-label, ion-icon {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-card-content {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybS11c2FnZS9EOlxcaW9uaWM0XFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXHRlcm0tdXNhZ2VcXHRlcm0tdXNhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZXJtLXVzYWdlL3Rlcm0tdXNhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUdJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUko7O0FEV0E7RUFFSSxjQUFBO0FDVEo7O0FEWUE7RUFFSSxZQUFBO0FDVko7O0FEWUE7RUFFSSxtQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVybS11c2FnZS90ZXJtLXVzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyLGlvbi1zZWdtZW50XHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG59XHJcbmlvbi1jYXJkXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pdGVtLCBpb24tZmFiLWJ1dHRvblxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgY29sb3I6IGJsYWNrOyBcclxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xyXG5cclxufVxyXG5cclxuaW9uLWNoaXBcclxue1xyXG5cclxuICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tbGFiZWxcclxue1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcbmlvbi1sYWJlbCxpb24taWNvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59IiwiaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWl0ZW0sIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwsIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/term-usage/term-usage.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/term-usage/term-usage.page.ts ***!
    \*****************************************************/

  /*! exports provided: TermUsagePage */

  /***/
  function srcAppPagesTermUsageTermUsagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermUsagePage", function () {
      return TermUsagePage;
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

    var TermUsagePage = /*#__PURE__*/function () {
      function TermUsagePage(webService) {
        _classCallCheck(this, TermUsagePage);

        this.webService = webService;
        this.show = false;
      }

      _createClass(TermUsagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //start loader
          this.webService.presentLoading(); /////////////////////////////////////////////////     
          ///// start : get term of usage

          this.webService.getTerms().subscribe(function (res) {
            //console.log(" terms  ",res);
            if (res) {
              _this.myterms = res;
            } else {// alert no response from server
            } //Stop loader


            _this.webService.stopLoading();

            _this.show = true;
          }); ///// end : get term of usage
          /////////////////////////////////////////////////   
        }
      }]);

      return TermUsagePage;
    }();

    TermUsagePage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }];
    };

    TermUsagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-term-usage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./term-usage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/term-usage/term-usage.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./term-usage.page.scss */
      "./src/app/pages/term-usage/term-usage.page.scss"))["default"]]
    })], TermUsagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-term-usage-term-usage-module-es5.js.map