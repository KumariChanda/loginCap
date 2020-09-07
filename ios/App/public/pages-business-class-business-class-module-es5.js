function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-business-class-business-class-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/business-class/business-class.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/business-class/business-class.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBusinessClassBusinessClassPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-item *ngIf=\"!isSearchbarOpened\">\n           <!-- menu icon -->\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n    \n      <!-- title -->\n      <ion-title *ngIf=\"!isSearchbarOpened\">{{ 'DASHBOARD.business_class' | translate }}</ion-title>\n\n   \n       <!-- search bar button -->\n      <ion-buttons slot=\"end\">\n        <!-- <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" > -->\n            <ion-icon color=\"primary\" name=\"search\" *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\"> </ion-icon>\n         <!-- </ion-button> -->\n      </ion-buttons>\n      <!-- Search Bar -->\n\n\n    </ion-item>\n\n<!-- Search Bar -->\n   <ion-searchbar color=\"primary\" *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\n\n     \n  </ion-toolbar>\n    \n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n\n\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\n    \n        <div *ngFor=\"let photo of item.photo; let i = index \" > \n          \n          <img *ngIf=\"i== 0\"  [src]=\"src_link+photo.image\" />\n          \n        </div>\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n                <!-- type of motor -->\n                <ion-chip >\n                  <ion-icon name=\"car\"></ion-icon>\n                  <ion-label >{{item.type_caburant}}</ion-label>\n                </ion-chip>\n                <!-- Car price-->\n                <ion-chip >\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA / {{ 'DASHBOARD.day' | translate }}</ion-label>\n                </ion-chip> <br>\n                <!-- Number of Seats-->\n                <ion-chip >\n                  <ion-icon name=\"person\"></ion-icon>\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\n                </ion-chip>\n                <!-- car color -->\n              <ion-chip>\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \n              </ion-chip>\n\n          </ion-card-subtitle>\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n                        \n               <!-- More-->\n             <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" >\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\n                <ion-icon name=\"chevron-forward\"></ion-icon>\n            </ion-chip>\n\n      \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n \n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/business-class/business-class-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/business-class/business-class-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: BusinessClassPageRoutingModule */

  /***/
  function srcAppPagesBusinessClassBusinessClassRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessClassPageRoutingModule", function () {
      return BusinessClassPageRoutingModule;
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


    var _business_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./business-class.page */
    "./src/app/pages/business-class/business-class.page.ts");

    var routes = [{
      path: '',
      component: _business_class_page__WEBPACK_IMPORTED_MODULE_3__["BusinessClassPage"]
    }];

    var BusinessClassPageRoutingModule = function BusinessClassPageRoutingModule() {
      _classCallCheck(this, BusinessClassPageRoutingModule);
    };

    BusinessClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BusinessClassPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/business-class/business-class.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/business-class/business-class.module.ts ***!
    \***************************************************************/

  /*! exports provided: BusinessClassPageModule */

  /***/
  function srcAppPagesBusinessClassBusinessClassModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessClassPageModule", function () {
      return BusinessClassPageModule;
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


    var _business_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./business-class-routing.module */
    "./src/app/pages/business-class/business-class-routing.module.ts");
    /* harmony import */


    var _business_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./business-class.page */
    "./src/app/pages/business-class/business-class.page.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var BusinessClassPageModule = function BusinessClassPageModule() {
      _classCallCheck(this, BusinessClassPageModule);
    };

    BusinessClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _business_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessClassPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
      declarations: [_business_class_page__WEBPACK_IMPORTED_MODULE_6__["BusinessClassPage"]]
    })], BusinessClassPageModule);
    /***/
  },

  /***/
  "./src/app/pages/business-class/business-class.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/business-class/business-class.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBusinessClassBusinessClassPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-radio {\n  background-color: white;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nimg {\n  height: 250px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2J1c2luZXNzLWNsYXNzL2J1c2luZXNzLWNsYXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYnVzaW5lc3MtY2xhc3MvYnVzaW5lc3MtY2xhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUssdUJBQUE7QUNKTDs7QURPQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFFSSxjQUFBO0FDTko7O0FEU0E7RUFFSSxZQUFBO0FDUEo7O0FEU0E7RUFFSSxhQUFBO0VBQ0EsV0FBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnVzaW5lc3MtY2xhc3MvYnVzaW5lc3MtY2xhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtLGlvbi1tZW51LWJ1dHRvblxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLXJhZGlvXG57XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2hpcCxpb24tYnV0dG9uXG57XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59XG5pbWdcbntcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtLCBpb24tbWVudS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLXJhZGlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/business-class/business-class.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/business-class/business-class.page.ts ***!
    \*************************************************************/

  /*! exports provided: BusinessClassPage */

  /***/
  function srcAppPagesBusinessClassBusinessClassPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessClassPage", function () {
      return BusinessClassPage;
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
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage;

    var BusinessClassPage = /*#__PURE__*/function () {
      function BusinessClassPage(router, webService) {
        _classCallCheck(this, BusinessClassPage);

        this.router = router;
        this.webService = webService;
        this.show = false; // used to show page content
        //////////////////////////////search bar elements for cars ////////////
        //////////////////////////////////////////////////////////////////////////////

        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [{
          "libelle": "",
          "classe": 3,
          'modele': [{}],
          'id': 0,
          'per_day': '',
          'per_hour': '',
          'airport': ''
        }];
      }

      _createClass(BusinessClassPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //basic link
                    this.src_link = this.webService.base_url; //get Language

                    _context2.next = 3;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 3:
                    this.lang = _context2.sent.value;
                    //get Business class cars list
                    this.webService.presentLoading(); //to start loader

                    this.webService.getCarClass(4).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var index, i, j, k, _loop, _i;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log("getting business voitures : \n ", res);

                                if (!res.detail) {
                                  if (res.length == 0) {
                                    //no  cars
                                    if (this.lang == "fr") {
                                      alert("La Liste de voitures est vide \n Retour à la page accueil");
                                    } else {
                                      alert("The List of cars is Empty \n Back to Home Page");
                                    }

                                    this.router.navigateByUrl("/dashboard");
                                    this.webService.stopLoading(); //to stop loading
                                  } else {
                                    index = 0;

                                    for (i = 0; i < res.length; i++) {
                                      // console.log("class ",i)
                                      for (j = 0; j < res[i].modeles.length; j++) {
                                        // console.log("Modele ",i,j)
                                        for (k = 0; k < res[i].modeles[j].voitures.length; k++) {
                                          // console.log("car ",i,j,k)
                                          console.log(" voitures : \n ", res[i].modeles[j].voitures[k]);
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

                                    this.show = true; // used to show page content
                                  }
                                } else {
                                  //no  cars
                                  if (this.lang == "fr") {
                                    alert("Erreur code  voiture !!  \n Retour à la page accueil");
                                  } else {
                                    alert("Car code error !! \n Back to Home Page");
                                  }

                                  this.router.navigateByUrl("/dashboard");
                                  this.webService.stopLoading(); //to stop loading
                                }

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //////////////////////////////////////////////////////
        //this method is used to print the details of a selected car //////////////

      }, {
        key: "carDetails",
        value: function carDetails(carID) {
          //call another page and fetch the details of the car
          this.router.navigate(['car-details'], {
            queryParams: {
              id: carID,
              prev: "/business-class"
            }
          });
        }
      }]);

      return BusinessClassPage;
    }();

    BusinessClassPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]
      }];
    };

    BusinessClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-business-class',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./business-class.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/business-class/business-class.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./business-class.page.scss */
      "./src/app/pages/business-class/business-class.page.scss"))["default"]]
    })], BusinessClassPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-business-class-business-class-module-es5.js.map