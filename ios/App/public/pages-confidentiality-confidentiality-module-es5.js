function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confidentiality-confidentiality-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfidentialityConfidentialityPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n     <ion-item>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'DASHBOARD.confidentiality' | translate }} </ion-title>\n    </ion-item> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n\n     <!-- -------------------------------------------------------------------------------------- -->\n        <!-- Start contact -->\n       <ion-card *ngFor=\"let conf of myconf; \" >\n          \n            <ion-card-content>\n                          \n               \n                    {{conf.text}}\n          \n            </ion-card-content>\n      </ion-card>\n        <!-- Stop Contact -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/confidentiality/confidentiality-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/confidentiality/confidentiality-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ConfidentialityPageRoutingModule */

  /***/
  function srcAppPagesConfidentialityConfidentialityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfidentialityPageRoutingModule", function () {
      return ConfidentialityPageRoutingModule;
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


    var _confidentiality_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./confidentiality.page */
    "./src/app/pages/confidentiality/confidentiality.page.ts");

    var routes = [{
      path: '',
      component: _confidentiality_page__WEBPACK_IMPORTED_MODULE_3__["ConfidentialityPage"]
    }];

    var ConfidentialityPageRoutingModule = function ConfidentialityPageRoutingModule() {
      _classCallCheck(this, ConfidentialityPageRoutingModule);
    };

    ConfidentialityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfidentialityPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/confidentiality/confidentiality.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/confidentiality/confidentiality.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ConfidentialityPageModule */

  /***/
  function srcAppPagesConfidentialityConfidentialityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfidentialityPageModule", function () {
      return ConfidentialityPageModule;
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


    var _confidentiality_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confidentiality-routing.module */
    "./src/app/pages/confidentiality/confidentiality-routing.module.ts");
    /* harmony import */


    var _confidentiality_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confidentiality.page */
    "./src/app/pages/confidentiality/confidentiality.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ConfidentialityPageModule = function ConfidentialityPageModule() {
      _classCallCheck(this, ConfidentialityPageModule);
    };

    ConfidentialityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confidentiality_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfidentialityPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_confidentiality_page__WEBPACK_IMPORTED_MODULE_6__["ConfidentialityPage"]]
    })], ConfidentialityPageModule);
    /***/
  },

  /***/
  "./src/app/pages/confidentiality/confidentiality.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/confidentiality/confidentiality.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfidentialityConfidentialityPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-label, ion-icon {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-card-content {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2NvbmZpZGVudGlhbGl0eS9jb25maWRlbnRpYWxpdHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWRlbnRpYWxpdHkvY29uZmlkZW50aWFsaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFHSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKOztBRFdBO0VBRUksY0FBQTtBQ1RKOztBRFlBO0VBRUksWUFBQTtBQ1ZKOztBRFlBO0VBRUksbUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZGVudGlhbGl0eS9jb25maWRlbnRpYWxpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cbmlvbi1jYXJkXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5cblxuaW9uLWl0ZW0sIGlvbi1mYWItYnV0dG9uXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uXG57XG4gIGNvbG9yOiBibGFjazsgXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XG5cbn1cblxuaW9uLWNoaXBcbntcblxuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1sYWJlbFxue1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgXG59XG5pb24tbGFiZWwsaW9uLWljb25cbntcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlXG57XG4gICAgY29sb3IgOiB3aGl0ZTtcbn1cbmlvbi1jYXJkLWNvbnRlbnRcbntcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSIsImlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1pdGVtLCBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxhYmVsLCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/confidentiality/confidentiality.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/confidentiality/confidentiality.page.ts ***!
    \***************************************************************/

  /*! exports provided: ConfidentialityPage */

  /***/
  function srcAppPagesConfidentialityConfidentialityPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfidentialityPage", function () {
      return ConfidentialityPage;
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

    var ConfidentialityPage = /*#__PURE__*/function () {
      function ConfidentialityPage(webService) {
        _classCallCheck(this, ConfidentialityPage);

        this.webService = webService;
        this.show = false;
      }

      _createClass(ConfidentialityPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //start loader
          this.webService.presentLoading(); /////////////////////////////////////////////////     
          ///// start : get term of usage

          this.webService.getConf().subscribe(function (res) {
            //console.log(" terms  ",res);
            if (res) {
              _this.myconf = res;
            } else {// alert no response from server
            } //Stop loader


            _this.webService.stopLoading();

            _this.show = true;
          }); ///// end : get term of usage
          /////////////////////////////////////////////////   
        }
      }]);

      return ConfidentialityPage;
    }();

    ConfidentialityPage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }];
    };

    ConfidentialityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confidentiality',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confidentiality.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confidentiality.page.scss */
      "./src/app/pages/confidentiality/confidentiality.page.scss"))["default"]]
    })], ConfidentialityPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-confidentiality-confidentiality-module-es5.js.map