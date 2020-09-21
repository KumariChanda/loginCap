function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-premium-premium-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPremiumPremiumPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-item *ngIf=\"!isSearchbarOpened\">\r\n\r\n           <!-- menu icon -->\r\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n      <!-- title -->\r\n      <ion-title *ngIf=\"!isSearchbarOpened\">{{ 'DASHBOARD.premium_class' | translate }}</ion-title>\r\n\r\n   \r\n       <!-- search bar button -->\r\n       <ion-buttons slot=\"end\">\r\n          <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\r\n              <ion-icon color=\"primary\" name=\"search\"> </ion-icon>\r\n          </ion-button>\r\n      </ion-buttons>\r\n\r\n\r\n    </ion-item>\r\n\r\n<!-- Search Bar -->\r\n   <ion-searchbar *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\r\n\r\n     \r\n  </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content  *ngIf=\"show\"  >\r\n\r\n\r\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\r\n    \r\n        <div *ngFor=\"let photo of item.photo; let i = index \" > \r\n          \r\n          <img *ngIf=\"i== 0\"  [src]=\"photo.image\" />\r\n          \r\n        </div>\r\n        \r\n        <ion-card-header>\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- type of motor -->\r\n                <ion-chip >\r\n                  <ion-icon name=\"car\"></ion-icon>\r\n                  <ion-label >{{item.type_caburant}}</ion-label>\r\n                </ion-chip>\r\n                <!-- Car price-->\r\n                <ion-chip >\r\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\r\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA/ {{ 'DASHBOARD.day' | translate }}</ion-label>\r\n                </ion-chip> <br>\r\n                <!-- Number of Seats-->\r\n                <ion-chip >\r\n                  <ion-icon name=\"person\"></ion-icon>\r\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\r\n                </ion-chip>\r\n                <!-- car color -->\r\n              <ion-chip>\r\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \r\n              </ion-chip>\r\n\r\n          </ion-card-subtitle>\r\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n               <!-- More-->\r\n             <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" >\r\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\r\n                <ion-icon name=\"chevron-forward\"></ion-icon>\r\n            </ion-chip>\r\n\r\n      \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/premium/premium-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/premium/premium-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PremiumPageRoutingModule */

  /***/
  function srcAppPagesPremiumPremiumRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumPageRoutingModule", function () {
      return PremiumPageRoutingModule;
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


    var _premium_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./premium.page */
    "./src/app/pages/premium/premium.page.ts");

    var routes = [{
      path: '',
      component: _premium_page__WEBPACK_IMPORTED_MODULE_3__["PremiumPage"]
    }];

    var PremiumPageRoutingModule = function PremiumPageRoutingModule() {
      _classCallCheck(this, PremiumPageRoutingModule);
    };

    PremiumPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PremiumPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/premium/premium.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/premium/premium.module.ts ***!
    \*************************************************/

  /*! exports provided: PremiumPageModule */

  /***/
  function srcAppPagesPremiumPremiumModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumPageModule", function () {
      return PremiumPageModule;
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


    var _premium_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./premium-routing.module */
    "./src/app/pages/premium/premium-routing.module.ts");
    /* harmony import */


    var _premium_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./premium.page */
    "./src/app/pages/premium/premium.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    var PremiumPageModule = function PremiumPageModule() {
      _classCallCheck(this, PremiumPageModule);
    };

    PremiumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"], _premium_routing_module__WEBPACK_IMPORTED_MODULE_5__["PremiumPageRoutingModule"]],
      declarations: [_premium_page__WEBPACK_IMPORTED_MODULE_6__["PremiumPage"]]
    })], PremiumPageModule);
    /***/
  },

  /***/
  "./src/app/pages/premium/premium.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/premium/premium.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPremiumPremiumPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlbWl1bS9EOlxcaW9uaWM0XFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXHByZW1pdW1cXHByZW1pdW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmVtaXVtL3ByZW1pdW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUVJLGNBQUE7QUNMSjs7QURRQTtFQUVJLFlBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZW1pdW0vcHJlbWl1bS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWNoaXAsaW9uLWJ1dHRvblxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uXHJcbntcclxuICAgIGNvbG9yIDogI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGVcclxue1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxufVxyXG4iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsIGlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/premium/premium.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/premium/premium.page.ts ***!
    \***********************************************/

  /*! exports provided: PremiumPage */

  /***/
  function srcAppPagesPremiumPremiumPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumPage", function () {
      return PremiumPage;
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


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");

    var PremiumPage = /*#__PURE__*/function () {
      function PremiumPage(route, router, webService) {
        _classCallCheck(this, PremiumPage);

        this.route = route;
        this.router = router;
        this.webService = webService;
        this.show = false; //////////////////////////////search bar elements for cars ////////////
        //////////////////////////////////////////////////////////////////////////////

        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [{
          'modele': '',
          'id': '',
          'per_day': '',
          'per_hour': '',
          'airport': ''
        }];
      }

      _createClass(PremiumPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //get family class cars list
          this.webService.presentLoading(); //to start loader

          this.webService.getCarClass(1).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var index, i, j, k, _loop, _i;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //console.log("getting business voitures : \n ",res); 
                      if (res) {
                        index = 0;

                        for (i = 0; i < res.length; i++) {
                          // console.log("class ",i)
                          for (j = 0; j < res[i].modeles.length; j++) {
                            // console.log("Modele ",i,j)
                            for (k = 0; k < res[i].modeles[j].voitures.length; k++) {
                              // console.log("car ",i,j,k)
                              //console.log(" voitures : \n ",res[i].modeles[j].voitures[k]);
                              this.filterData[index] = res[i].modeles[j].voitures[k];
                              index = index + 1;
                            }
                          } // console.log("business voitures : \n ",res.modeles.voitures);

                        }

                        console.log(this.filterData); //get the different prices of every car

                        _loop = function _loop(_i) {
                          _this2.webService.getPriceCar(_this2.filterData[_i].id).subscribe(function (resp) {
                            _this2.filterData[_i].per_day = resp[0].prix;
                            _this2.filterData[_i].per_hour = resp[1].prix;
                            _this2.filterData[_i].airport = resp[2].prix;
                          });
                        };

                        for (_i = 0; _i < this.filterData.length; _i++) {
                          _loop(_i);
                        }

                        this.webService.stopLoading(); //to stop loading

                        this.show = true;
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        } //////////////////////////////////////////////////////
        //this method is used to print the details of a selected car //////////////

      }, {
        key: "carDetails",
        value: function carDetails(carID) {
          //call another page and fetch the details of the car
          this.router.navigate(['car-details'], {
            queryParams: {
              id: carID,
              prev: "/premium"
            }
          });
        }
      }]);

      return PremiumPage;
    }();

    PremiumPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]
      }];
    };

    PremiumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-premium',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./premium.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./premium.page.scss */
      "./src/app/pages/premium/premium.page.scss"))["default"]]
    })], PremiumPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-premium-premium-module-es5.js.map