function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/home/home.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/home/home.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDriverHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-item *ngIf=\"!isSearchbarOpened\">\n\n           <!-- menu icon -->\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n      <!-- title -->\n      <ion-title *ngIf=\"!isSearchbarOpened\" >{{ 'DASHBOARD.title' | translate }}</ion-title>\n\n   \n       <!-- search bar button -->\n       <ion-buttons slot=\"end\">\n          <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\n              <ion-icon color=\"primary\" name=\"search\"> </ion-icon>\n          </ion-button>\n      </ion-buttons>\n\n\n    </ion-item>\n\n<!-- Search Bar -->\n   <ion-searchbar *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\n\n     \n  </ion-toolbar>\n    \n</ion-header>\n\n<ion-content >\n\n\n    \n<!-- Default Segment / Search for the car according to the type of reservation -->\n <!--   First main Search  -->\n\n\n\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\n    \n        <img [src]=\"item.picture\" />\n        <ion-card-header>\n                 <ion-card-title >{{item.title}}</ion-card-title>\n\n          <ion-card-subtitle>\n             \n                <!-- Destination -->\n            \n               <ion-item>\n                    <ion-label > Destination : </ion-label>\n                    <ion-chip slot=\"end\"> Daoukro </ion-chip>\n                </ion-item>\n\n               <!-- Reservation Type -->\n                <ion-item>\n                    <ion-label > Booking Type : </ion-label>\n                    <ion-chip slot=\"end\"> Per Hour </ion-chip>\n                </ion-item>\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > Start Date : </ion-label>\n                    <ion-chip slot=\"end\"> 12 Aug 2020 </ion-chip>\n                </ion-item>\n                \n                <!-- Starting time -->\n                <ion-item>\n                    <ion-label > Start Time : </ion-label>\n                    <ion-chip slot=\"end\"> 12 : 10 </ion-chip>\n                </ion-item>\n               \n\n                <!-- Client name -->\n                <ion-item>\n                    <ion-label > Client Name: </ion-label>\n                    <ion-chip slot=\"end\"> Oumarou Toto </ion-chip>\n                </ion-item>\n\n               \n\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n                        \n               <!-- button view more and start the trip-->\n             <ion-button  *ngIf=\"item.status == 0 \" style=\"margin-left:3%\" (click)=\"tripDetails(item.title )\" >\n                <ion-label>View more and start the trip</ion-label>\n               \n            </ion-button>\n               <!-- button end the trip -->\n             <ion-button  *ngIf=\"item.status == 1 \" style=\"margin-left:30%\"  >\n                <ion-label *ngIf=\"item.status == 1 \"> End the trip</ion-label>\n            </ion-button>\n               <!-- button View details-->\n             <ion-button  *ngIf=\"item.status == 2 \" style=\"margin-left:30%\"  >\n                <ion-label *ngIf=\"item.status == 2 \">View details</ion-label>\n            </ion-button>\n\n      \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n \n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/driver/home/home-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/driver/home/home-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppDriverHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/driver/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/driver/home/home.module.ts":
  /*!********************************************!*\
    !*** ./src/app/driver/home/home.module.ts ***!
    \********************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppDriverHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/driver/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/driver/home/home-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/driver/home/home.page.scss":
  /*!********************************************!*\
    !*** ./src/app/driver/home/home.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDriverHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL2RyaXZlci9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9kcml2ZXIvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRFFBO0VBRUksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUVJLGNBQUE7QUNQSjs7QURVQTtFQUVJLFlBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uXG57XG4gIGNvbG9yOiBibGFjazsgXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XG5cbn1cblxuaW9uLWNoaXBcbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/driver/home/home.page.ts":
  /*!******************************************!*\
    !*** ./src/app/driver/home/home.page.ts ***!
    \******************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppDriverHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js"); //import * as moment from 'moment';


    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var HomePage = /*#__PURE__*/function () {
      function HomePage(route, router) {
        var _this = this;

        _classCallCheck(this, HomePage);

        //language
        // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.route = route;
        this.router = router;
        this.logo1 = '../assets/images/logo1.jpg';
        this.dataToSend = {
          "name": "",
          "alias": " "
        };
        this.dataSaveReturn = ""; //////////////////////////////search barelements
        //////////////////////////////////////

        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [{
          motorType: 'Diesel',
          model: 'Model 2018',
          seatNumber: '9',
          pricePerDay: '65000',
          title: 'MERCEDEZ BENZ, VEHICULE FAMILIAL',
          picture: '../assets/images/car1.jpg',
          status: 0
        }, {
          motorType: 'Diesel',
          model: 'Model 2016',
          seatNumber: '8',
          pricePerDay: '65000',
          title: 'MERCEDEZ BENZ, MINI BUS METRIS',
          picture: '../assets/images/car2.jpg',
          status: 1
        }, {
          motorType: 'Diesel',
          model: 'Model 2018',
          seatNumber: '5',
          pricePerDay: '90000',
          title: 'MITSUBISHI , PAJERO SUV 4X4',
          picture: '../assets/images/car3.jpg',
          status: 2
        }, {
          motorType: 'Diesel',
          model: 'Model 2019',
          seatNumber: '5',
          pricePerDay: '90000',
          title: 'TOYOTA , Pick up 4X4 SUV',
          picture: '../assets/images/car4.jpg',
          status: 2
        }, {
          motorType: 'Diesel',
          model: 'Model 2016',
          seatNumber: '5',
          pricePerDay: '75000 ',
          title: 'VOLKSWAGEN , CITADINE PSSAT',
          picture: '../assets/images/car5.jpg',
          status: 2
        }]; //////////////////////////////////////////////////////////////////////
        ////////////data for destination

        this.rent_type = "hour";
        this.list_original = ['item 1', 'item 2', 'item 3', 'item 4'];
        this.list_to_show = [];
        this.selected_index = -1;
        this.show_list = false; // date

        var date = new Date();
        var month, day; //today's date

        this.today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

        if (date.getMonth() + 1 < 10) {
          month = "0" + (date.getMonth() + 1);
        } else {
          month = date.getMonth() + 1;
        }

        if (date.getDate() < 10) {
          day = "0" + date.getDate();
        } else {
          day = date.getDate();
        }

        this.today = date.getFullYear() + "-" + month + "-" + day; //maximum date

        var x = new Date().setDate(date.getDate() + 90);
        this.maxdate = new Date(x);

        if (this.maxdate.getMonth() + 1 < 10) {
          month = "0" + (this.maxdate.getMonth() + 1);
        } else {
          month = this.maxdate.getMonth() + 1;
        }

        if (this.maxdate.getDate() < 10) {
          day = "0" + this.maxdate.getDate();
        } else {
          day = this.maxdate.getDate();
        }

        this.maxdate = this.maxdate.getFullYear() + "-" + month + "-" + day;
        console.log("Today = " + this.today + " \n MAX DATE : " + this.maxdate); //receive data from

        this.route.queryParams.subscribe(function (params) {
          if (params && params.special) {
            _this.data = JSON.parse(params.special);
            console.log("Complex :\n" + _this.data.reel + " + i " + _this.data.imag);
          }
        });
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        // async getToken()
        //   {
        //     var ret=Storage.get({ key:'accessToken'});
        //     console.log((await ret).value);
        //   }
        ///////////////////////////////////////////////////

      }, {
        key: "logOut",
        value: function logOut() {
          //call dashboard page and pass data 
          this.router.navigateByUrl("/dashboard"); // empty the token

          Storage.set({
            key: 'accessToken',
            value: null
          });
        } //////////////////////////////////////////////////////
        //this method is used to print the details of a selected trip //////////////

      }, {
        key: "tripDetails",
        value: function tripDetails(carTitle) {
          console.log("selected : -> ", carTitle); //call another page and fetch the details of the car

          this.router.navigateByUrl("/trip-details");
        } //////////////method for destination search //////////////////
        /////////////////////////////////////////////////////

      }, {
        key: "onCancel",
        value: function onCancel(val) {
          this.show_list = false;
          this.list_to_show = [];
        }
      }, {
        key: "click_bar",
        value: function click_bar() {
          this.list_to_show = [];
          this.show_list = true;
        }
      }, {
        key: "click_item",
        value: function click_item(val) {// for (let i = 0 ; i < this.list_original.length; i++)
          // {
          //     if (this.list_to_show[val].toUpperCase() === this.list_original[i].toUpperCase()) {
          //         this.selected_index = i;
          //         break;
          //     }
          // }
          // this.show_list = false;
        }
      }, {
        key: "change_query",
        value: function change_query(query) {
          var k = 0;
          this.list_to_show = [];

          for (var i = 0; i < this.list_original.length; i++) {
            if (this.list_original[i].toUpperCase().includes(query.toUpperCase())) {
              this.list_to_show[k] = this.list_original[i];
              k += 1;
            }
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/driver/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=driver-home-home-module-es5.js.map