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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n   <ion-item>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title size=\"small\">{{'DASHBOARD.usage_term' | translate }} </ion-title>\n    </ion-item> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n\n     <!-- --------------------------------------------------------------------------------------------- -->\n        <!-- Start contact -->\n       <ion-card *ngFor=\"let term of myterms; \" >\n          \n            <ion-card-content>\n                          \n               \n                    {{term.text}}\n          \n            </ion-card-content>\n      </ion-card>\n        <!-- Stop Contact -->\n    <!-- -------------------------------------------------------------------------------------------------- -->\n\n\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-label, ion-icon {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3Rlcm0tdXNhZ2UvdGVybS11c2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rlcm0tdXNhZ2UvdGVybS11c2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREVBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRFFBO0VBR0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVQTtFQUVJLFlBQUE7QUNSSjs7QURXQTtFQUVJLGNBQUE7QUNUSjs7QURZQTtFQUVJLFlBQUE7QUNWSjs7QURZQTtFQUVJLG1CQUFBO0FDVko7O0FEYUE7RUFFSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXJtLXVzYWdlL3Rlcm0tdXNhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cbmlvbi1jYXJkXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5cblxuaW9uLWl0ZW0sIGlvbi1mYWItYnV0dG9uXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uXG57XG4gIGNvbG9yOiBibGFjazsgXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XG5cbn1cblxuaW9uLWNoaXBcbntcblxuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1sYWJlbFxue1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgXG59XG5pb24tbGFiZWwsaW9uLWljb25cbntcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlXG57XG4gICAgY29sb3IgOiB3aGl0ZTtcbn1cbmlvbi1jYXJkLWNvbnRlbnRcbntcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5pb24tdGl0bGVcbntcbiAgICBtYXJnaW4tbGVmdCA6IC0xMCU7XG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iLCJpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24taXRlbSwgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1sYWJlbCwgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";
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
          // this.webService.presentLoading();
          /////////////////////////////////////////////////     
          ///// start : get term of usage
          this.webService.getTerms().subscribe(function (res) {
            //console.log(" terms  ",res);
            if (res) {
              _this.myterms = res;
            } else {// alert no response from server
            } //Stop loader
            // this.webService.stopLoading();


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