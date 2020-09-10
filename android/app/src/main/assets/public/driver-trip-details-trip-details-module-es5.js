function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-trip-details-trip-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/trip-details/trip-details.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/trip-details/trip-details.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDriverTripDetailsTripDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n      <ion-item>\r\n\r\n        <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\r\n        <ion-title>Trip Details</ion-title>\r\n\r\n      </ion-item>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- Trip/voyage Details -->\r\n \r\n\r\n\r\n     <ion-card *ngFor=\"let item of filterData\">\r\n    \r\n        <img [src]=\"item.picture\" />\r\n        <ion-card-header>\r\n                 <ion-card-title >{{item.title}}</ion-card-title>\r\n\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- Car Number -->\r\n            \r\n               <ion-item>\r\n                    <ion-label > Car Number : </ion-label>\r\n                    <ion-chip slot=\"end\"> PB 00125 </ion-chip>\r\n                </ion-item>\r\n\r\n                <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <ion-label > Destination : </ion-label>\r\n                    <ion-chip slot=\"end\"> Daoukro </ion-chip>\r\n                </ion-item>\r\n\r\n               <!-- Reservation Type -->\r\n                <ion-item>\r\n                    <ion-label > Booking Type : </ion-label>\r\n                    <ion-chip slot=\"end\"> Per Hour </ion-chip>\r\n                </ion-item>\r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <ion-label > Start Date : </ion-label>\r\n                    <ion-chip slot=\"end\"> 12 Aug 2020 </ion-chip>\r\n                </ion-item>\r\n                \r\n                <!-- Starting time -->\r\n                <ion-item>\r\n                    <ion-label > Start Time : </ion-label>\r\n                    <ion-chip slot=\"end\"> 12 : 10 </ion-chip>\r\n                </ion-item>\r\n               \r\n                <!-- Return date -->\r\n                <ion-item>\r\n                    <ion-label > Return Date : </ion-label>\r\n                    <ion-chip slot=\"end\"> 13 Aug 2020 </ion-chip>\r\n                </ion-item>\r\n                \r\n                <!-- Return time -->\r\n                <ion-item>\r\n                    <ion-label > Return Time : </ion-label>\r\n                    <ion-chip slot=\"end\"> 12 : 10 </ion-chip>\r\n                </ion-item>\r\n               \r\n\r\n                <!-- Client name -->\r\n                <ion-item>\r\n                    <ion-label > Client Name: </ion-label>\r\n                    <ion-chip slot=\"end\"> Oumarou Toto </ion-chip>\r\n                </ion-item>\r\n                <!-- Motor Type -->\r\n                <ion-item>\r\n                    <ion-label > Motor Type: </ion-label>\r\n                    <ion-chip slot=\"end\"> Diesel </ion-chip>\r\n                </ion-item>\r\n                <!-- Seat number -->\r\n                <ion-item>\r\n                    <ion-label > Seat Number: </ion-label>\r\n                    <ion-chip slot=\"end\"> 9 </ion-chip>\r\n                </ion-item>\r\n\r\n               \r\n\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n        \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <!-- <ion-toolbar> -->\r\n          <!-- Start the trip  -->\r\n    <ion-button expand=\"full\"  >Start The Trip </ion-button>\r\n   \r\n  <!-- </ion-toolbar> -->\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/driver/trip-details/trip-details-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/driver/trip-details/trip-details-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: TripDetailsPageRoutingModule */

  /***/
  function srcAppDriverTripDetailsTripDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDetailsPageRoutingModule", function () {
      return TripDetailsPageRoutingModule;
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


    var _trip_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./trip-details.page */
    "./src/app/driver/trip-details/trip-details.page.ts");

    var routes = [{
      path: '',
      component: _trip_details_page__WEBPACK_IMPORTED_MODULE_3__["TripDetailsPage"]
    }];

    var TripDetailsPageRoutingModule = function TripDetailsPageRoutingModule() {
      _classCallCheck(this, TripDetailsPageRoutingModule);
    };

    TripDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TripDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/driver/trip-details/trip-details.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/driver/trip-details/trip-details.module.ts ***!
    \************************************************************/

  /*! exports provided: TripDetailsPageModule */

  /***/
  function srcAppDriverTripDetailsTripDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDetailsPageModule", function () {
      return TripDetailsPageModule;
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


    var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./trip-details-routing.module */
    "./src/app/driver/trip-details/trip-details-routing.module.ts");
    /* harmony import */


    var _trip_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./trip-details.page */
    "./src/app/driver/trip-details/trip-details.page.ts");

    var TripDetailsPageModule = function TripDetailsPageModule() {
      _classCallCheck(this, TripDetailsPageModule);
    };

    TripDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripDetailsPageRoutingModule"]],
      declarations: [_trip_details_page__WEBPACK_IMPORTED_MODULE_6__["TripDetailsPage"]]
    })], TripDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/driver/trip-details/trip-details.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/driver/trip-details/trip-details.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDriverTripDetailsTripDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpdmVyL3RyaXAtZGV0YWlscy9EOlxcaW9uaWM0XFxsb2dpbkNhcC9zcmNcXGFwcFxcZHJpdmVyXFx0cmlwLWRldGFpbHNcXHRyaXAtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RyaXZlci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRFFBO0VBRUksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUVJLGNBQUE7QUNQSjs7QURVQTtFQUVJLFlBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tYnV0dG9uXHJcbntcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XHJcblxyXG59XHJcblxyXG5pb24tY2hpcFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/driver/trip-details/trip-details.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/driver/trip-details/trip-details.page.ts ***!
    \**********************************************************/

  /*! exports provided: TripDetailsPage */

  /***/
  function srcAppDriverTripDetailsTripDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDetailsPage", function () {
      return TripDetailsPage;
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

    var TripDetailsPage = /*#__PURE__*/function () {
      function TripDetailsPage(router) {
        _classCallCheck(this, TripDetailsPage);

        this.router = router;
        this.logo1 = '../assets/images/logo1.jpg';
        this.dataToSend = {
          "name": "",
          "alias": " "
        }; //////////////////////////////search barelements
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
        }];
      }

      _createClass(TripDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //////////////////////////////////////////////////////////////
        ////back to home ///

      }, {
        key: "prev",
        value: function prev() {
          this.router.navigateByUrl("/home");
        }
      }]);

      return TripDetailsPage;
    }();

    TripDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TripDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trip-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./trip-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/trip-details/trip-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./trip-details.page.scss */
      "./src/app/driver/trip-details/trip-details.page.scss"))["default"]]
    })], TripDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=driver-trip-details-trip-details-module-es5.js.map