function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-my-reports-my-reports-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/my-reports/my-reports.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/my-reports/my-reports.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDriverMyReportsMyReportsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>my-reports</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/driver/my-reports/my-reports-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/driver/my-reports/my-reports-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: MyReportsPageRoutingModule */

  /***/
  function srcAppDriverMyReportsMyReportsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyReportsPageRoutingModule", function () {
      return MyReportsPageRoutingModule;
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


    var _my_reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-reports.page */
    "./src/app/driver/my-reports/my-reports.page.ts");

    var routes = [{
      path: '',
      component: _my_reports_page__WEBPACK_IMPORTED_MODULE_3__["MyReportsPage"]
    }];

    var MyReportsPageRoutingModule = function MyReportsPageRoutingModule() {
      _classCallCheck(this, MyReportsPageRoutingModule);
    };

    MyReportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyReportsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/driver/my-reports/my-reports.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/driver/my-reports/my-reports.module.ts ***!
    \********************************************************/

  /*! exports provided: MyReportsPageModule */

  /***/
  function srcAppDriverMyReportsMyReportsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyReportsPageModule", function () {
      return MyReportsPageModule;
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


    var _my_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-reports-routing.module */
    "./src/app/driver/my-reports/my-reports-routing.module.ts");
    /* harmony import */


    var _my_reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-reports.page */
    "./src/app/driver/my-reports/my-reports.page.ts");

    var MyReportsPageModule = function MyReportsPageModule() {
      _classCallCheck(this, MyReportsPageModule);
    };

    MyReportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyReportsPageRoutingModule"]],
      declarations: [_my_reports_page__WEBPACK_IMPORTED_MODULE_6__["MyReportsPage"]]
    })], MyReportsPageModule);
    /***/
  },

  /***/
  "./src/app/driver/my-reports/my-reports.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/driver/my-reports/my-reports.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDriverMyReportsMyReportsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci9teS1yZXBvcnRzL215LXJlcG9ydHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/driver/my-reports/my-reports.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/driver/my-reports/my-reports.page.ts ***!
    \******************************************************/

  /*! exports provided: MyReportsPage */

  /***/
  function srcAppDriverMyReportsMyReportsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyReportsPage", function () {
      return MyReportsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyReportsPage = /*#__PURE__*/function () {
      function MyReportsPage() {
        _classCallCheck(this, MyReportsPage);
      }

      _createClass(MyReportsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyReportsPage;
    }();

    MyReportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-reports.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/my-reports/my-reports.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-reports.page.scss */
      "./src/app/driver/my-reports/my-reports.page.scss"))["default"]]
    })], MyReportsPage);
    /***/
  }
}]);
//# sourceMappingURL=driver-my-reports-my-reports-module-es5.js.map