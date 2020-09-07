function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-economique-economique-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/economique/economique.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/economique/economique.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEconomiqueEconomiquePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    \n    <ion-item *ngIf=\"!isSearchbarOpened\">\n           <!-- menu icon -->\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n      <!-- title -->\n      <ion-title *ngIf=\"!isSearchbarOpened\">{{ 'DASHBOARD.economic_class' | translate }}</ion-title>\n\n   \n       <!-- search bar button -->\n       <ion-buttons slot=\"end\">\n          <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\n              <ion-icon color=\"primary\" name=\"search\"> </ion-icon>\n          </ion-button>\n      </ion-buttons>\n\n\n    </ion-item>\n\n<!-- Search Bar -->\n   <ion-searchbar *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\n\n     \n  </ion-toolbar>\n    \n</ion-header>\n\n<ion-content  *ngIf=\"show\"  >\n\n\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\n    \n        <div *ngFor=\"let photo of item.photo; let i = index \" > \n          \n          <img *ngIf=\"i== 0\"  [src]=\"photo.image\" />\n          \n        </div>\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n                <!-- type of motor -->\n                <ion-chip >\n                  <ion-icon name=\"car\"></ion-icon>\n                  <ion-label >{{item.type_caburant}}</ion-label>\n                </ion-chip>\n                <!-- Car price-->\n                <ion-chip >\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA/ {{ 'DASHBOARD.day' | translate }}</ion-label>\n                </ion-chip> <br>\n                <!-- Number of Seats-->\n                <ion-chip >\n                  <ion-icon name=\"person\"></ion-icon>\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\n                </ion-chip>\n                <!-- car color -->\n              <ion-chip>\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \n              </ion-chip>\n\n          </ion-card-subtitle>\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n                        \n               <!-- More-->\n             <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" >\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\n                <ion-icon name=\"chevron-forward\"></ion-icon>\n            </ion-chip>\n\n      \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n \n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/economique/economique-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/economique/economique-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EconomiquePageRoutingModule */

  /***/
  function srcAppPagesEconomiqueEconomiqueRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EconomiquePageRoutingModule", function () {
      return EconomiquePageRoutingModule;
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


    var _economique_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./economique.page */
    "./src/app/pages/economique/economique.page.ts");

    var routes = [{
      path: '',
      component: _economique_page__WEBPACK_IMPORTED_MODULE_3__["EconomiquePage"]
    }];

    var EconomiquePageRoutingModule = function EconomiquePageRoutingModule() {
      _classCallCheck(this, EconomiquePageRoutingModule);
    };

    EconomiquePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EconomiquePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/economique/economique.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/economique/economique.module.ts ***!
    \*******************************************************/

  /*! exports provided: EconomiquePageModule */

  /***/
  function srcAppPagesEconomiqueEconomiqueModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EconomiquePageModule", function () {
      return EconomiquePageModule;
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


    var _economique_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./economique-routing.module */
    "./src/app/pages/economique/economique-routing.module.ts");
    /* harmony import */


    var _economique_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./economique.page */
    "./src/app/pages/economique/economique.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    var EconomiquePageModule = function EconomiquePageModule() {
      _classCallCheck(this, EconomiquePageModule);
    };

    EconomiquePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"], _economique_routing_module__WEBPACK_IMPORTED_MODULE_5__["EconomiquePageRoutingModule"]],
      declarations: [_economique_page__WEBPACK_IMPORTED_MODULE_6__["EconomiquePage"]]
    })], EconomiquePageModule);
    /***/
  },

  /***/
  "./src/app/pages/economique/economique.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/economique/economique.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEconomiqueEconomiquePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2Vjb25vbWlxdWUvZWNvbm9taXF1ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb25vbWlxdWUvZWNvbm9taXF1ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBRUksY0FBQTtBQ0xKOztBRFFBO0VBRUksWUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWNvbm9taXF1ZS9lY29ub21pcXVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG59XG5cblxuXG5pb24taXRlbVxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsaW9uLWJ1dHRvblxue1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvblxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGVcbntcbiAgICBjb2xvciA6IHdoaXRlO1xufVxuIiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/economique/economique.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/economique/economique.page.ts ***!
    \*****************************************************/

  /*! exports provided: EconomiquePage */

  /***/
  function srcAppPagesEconomiqueEconomiquePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EconomiquePage", function () {
      return EconomiquePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EconomiquePage = /*#__PURE__*/function () {
      function EconomiquePage(route, router, webService) {
        _classCallCheck(this, EconomiquePage);

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

      _createClass(EconomiquePage, [{
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
              prev: "/economique"
            }
          });
        }
      }]);

      return EconomiquePage;
    }();

    EconomiquePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }];
    };

    EconomiquePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-economique',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./economique.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/economique/economique.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./economique.page.scss */
      "./src/app/pages/economique/economique.page.scss"))["default"]]
    })], EconomiquePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-economique-economique-module-es5.js.map