function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-messages-my-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-messages/my-messages.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-messages/my-messages.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyMessagesMyMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n       \n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-item>\n        <ion-title> {{\"DASHBOARD.my_testimonial\" | translate}} </ion-title>\n    </ion-item> \n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"show\">\n\n          <!-- -------------------------------------------------------------------------------------- -->\n        <!-- Start contact -->\n       <ion-card *ngFor=\"let item of filterData \" >\n             <ion-card-header>\n                    <ion-card-title style=\"font-size: medium;\">{{item.text}}</ion-card-title>\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <!-- <ion-item>\n                    <ion-label > Status : </ion-label>\n                    <ion-chip slot=\"end\" style=\"color:green;border:1px,solid,green\"> Active </ion-chip>\n                  </ion-item> -->\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > Date : </ion-label>\n                    <ion-chip slot=\"end\"> {{item.date}}</ion-chip>\n                </ion-item>\n                 \n              </ion-card-subtitle>\n            </ion-card-header>\n\n      </ion-card>\n        <!-- Stop Contact -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/my-messages/my-messages-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/my-messages/my-messages-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MyMessagesPageRoutingModule */

  /***/
  function srcAppPagesMyMessagesMyMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMessagesPageRoutingModule", function () {
      return MyMessagesPageRoutingModule;
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


    var _my_messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-messages.page */
    "./src/app/pages/my-messages/my-messages.page.ts");

    var routes = [{
      path: '',
      component: _my_messages_page__WEBPACK_IMPORTED_MODULE_3__["MyMessagesPage"]
    }];

    var MyMessagesPageRoutingModule = function MyMessagesPageRoutingModule() {
      _classCallCheck(this, MyMessagesPageRoutingModule);
    };

    MyMessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyMessagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-messages/my-messages.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/my-messages/my-messages.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyMessagesPageModule */

  /***/
  function srcAppPagesMyMessagesMyMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMessagesPageModule", function () {
      return MyMessagesPageModule;
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


    var _my_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-messages-routing.module */
    "./src/app/pages/my-messages/my-messages-routing.module.ts");
    /* harmony import */


    var _my_messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-messages.page */
    "./src/app/pages/my-messages/my-messages.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var MyMessagesPageModule = function MyMessagesPageModule() {
      _classCallCheck(this, MyMessagesPageModule);
    };

    MyMessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyMessagesPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_my_messages_page__WEBPACK_IMPORTED_MODULE_6__["MyMessagesPage"]]
    })], MyMessagesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-messages/my-messages.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/my-messages/my-messages.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyMessagesMyMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-buttons {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktbWVzc2FnZXMvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXG15LW1lc3NhZ2VzXFxteS1tZXNzYWdlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LW1lc3NhZ2VzL215LW1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRFFBO0VBRUksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUVJLGNBQUE7QUNQSjs7QURVQTtFQUVJLFlBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LW1lc3NhZ2VzL215LW1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG59XG5cblxuXG5pb24taXRlbSxpb24tYnV0dG9uc1xue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvblxue1xuICBjb2xvcjogYmxhY2s7IFxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xuXG59XG5cbmlvbi1jaGlwXG57XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvblxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGVcbntcbiAgICBjb2xvciA6IHdoaXRlO1xufSIsImlvbi1jYXJkLCBpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24taXRlbSwgaW9uLWJ1dHRvbnMge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/my-messages/my-messages.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/my-messages/my-messages.page.ts ***!
    \*******************************************************/

  /*! exports provided: MyMessagesPage */

  /***/
  function srcAppPagesMyMessagesMyMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMessagesPage", function () {
      return MyMessagesPage;
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

    var MyMessagesPage = /*#__PURE__*/function () {
      function MyMessagesPage(webservice, router) {
        _classCallCheck(this, MyMessagesPage);

        this.webservice = webservice;
        this.router = router;
        this.show = false;
        this.filterData = [{
          text: "",
          date: '',
          //status : 1
          client: 1
        }];
      }

      _createClass(MyMessagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //start laoder
                    this.webservice.presentLoading(); //get token

                    _context.next = 3;
                    return Storage.get({
                      key: 'accessToken'
                    });

                  case 3:
                    this.token = _context.sent.value;
                    _context.t0 = JSON;
                    _context.next = 7;
                    return Storage.get({
                      key: "user_infos"
                    });

                  case 7:
                    _context.t1 = _context.sent.value;
                    this.userId = _context.t0.parse.call(_context.t0, _context.t1).id;
                    _context.next = 11;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 11:
                    this.lang = _context.sent.value;
                    //get testimonial list
                    this.webservice.getFeedbacks(this.userId, this.token).subscribe(function (res) {
                      if (res.detail) {
                        if (_this.lang == "fr") {
                          alert("Aucun témoignage \n Retour à la page accueil");
                        } else {
                          alert("No testimony \ n Back Home Page");
                        } //stop loader


                        _this.webservice.stopLoading();

                        _this.router.navigateByUrl("/dashboard");
                      } else {
                        if (res.length == 0) {
                          if (_this.lang == "fr") {
                            alert("Votre Liste de Temoignage est vide !! ");
                          } else {
                            alert(" Your Testimonial List is Empty !!");
                          } //stop loader


                          _this.webservice.stopLoading();

                          _this.router.navigateByUrl("/dashboard");
                        } else {
                          _this.filterData = res;
                          _this.show = true; //stop loader

                          _this.webservice.stopLoading();
                        }
                      }
                    }, function (error) {
                      _this.webservice.stopLoading();

                      if (_this.lang == "fr") {
                        alert("Erreur serveur !! ");
                      } else {
                        alert("Server error !! ");
                      }

                      _this.router.navigateByUrl("/dashboard");
                    }); ///end get testimonial

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return MyMessagesPage;
    }();

    MyMessagesPage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    MyMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-messages',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-messages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-messages/my-messages.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-messages.page.scss */
      "./src/app/pages/my-messages/my-messages.page.scss"))["default"]]
    })], MyMessagesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-my-messages-my-messages-module-es5.js.map