function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-bookings-my-bookings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyBookingsMyBookingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n       <ion-item>\r\n        <ion-buttons slot=\"start\"  *ngIf=\"reservDetails==null\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n      <!-- prev icon -->\r\n           <ion-icon style=\"margin-right:20%\" color=\"light\" name=\"chevron-back\" (click)=\"prev()\" *ngIf=\"reservDetails!=null\" ></ion-icon>\r\n        <ion-title > {{\"DASHBOARD.my_bookings\" | translate}} </ion-title>\r\n    </ion-item> \r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\">\r\n\r\n    <!-- --------------------- if  reservDetails== null----------------------------------------------------------------- -->\r\n       \r\n     <div *ngIf=\"reservDetails==null\">\r\n        <!-- Start reservation -->\r\n       <ion-card *ngFor=\"let item of filterData ; index as i\" >\r\n          \r\n          \r\n        <img [src]=\"item?.photo_car[0]?.image\" />\r\n\r\n            <ion-card-header>\r\n                    <ion-item> \r\n                        <ion-card-title >{{item.modele}}</ion-card-title>\r\n\r\n                        <ion-icon *ngIf=\"item.etape_location==1\" style=\"color: #ffa60a\" slot=\"end\"\r\n                          name=\"close-circle-outline\" (click)=\"cancel(i)\">\r\n                         \r\n                         </ion-icon>\r\n                        \r\n                        <ion-icon *ngIf=\"(item.etape_location==5 && item.note_client == 0) ||(item.etape_location==5 && item.note_client==null)\" style=\"color:#ffa60a \" slot=\"end\"\r\n                          name=\"open-outline\" (click)=\"Mark(i)\">\r\n                         \r\n                         </ion-icon> \r\n\r\n                    </ion-item>\r\n              <ion-card-subtitle>\r\n\r\n                  \r\n               <!-- Status -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\" width: 150px\" > {{ \"RESERVECAR.booking_status\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\" *ngIf=\"item.etape_location == 1 && lang=='fr'\" > En cours de traitement </label>\r\n                    <label textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\" *ngIf=\"item.etape_location == 1 && lang=='en'\"> Being processed </label>\r\n                    <label textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\" *ngIf=\"item.etape_location == 2 && lang=='fr'\" > Confirmée </label>\r\n                    <label  *ngIf=\"item.etape_location == 2 && lang=='en'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Confirmed </label>\r\n                    <label *ngIf=\"item.etape_location == 3 && lang=='fr'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Rejetée </label>\r\n                    <label  *ngIf=\"item.etape_location == 3 && lang=='en'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Rejected  </label>\r\n                    <label  *ngIf=\"item.etape_location == 4 && lang=='fr'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Réservation Débutée </label>\r\n                    <label  *ngIf=\"item.etape_location == 4 && lang=='en'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Reservation started </label>\r\n                    <label  *ngIf=\"item.etape_location == 5 && lang=='fr'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Réservation terminée </label>\r\n                    <label  *ngIf=\"item.etape_location == 5 && lang=='en'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\">Reservation completed </label>\r\n                    <label  *ngIf=\"item.etape_location == 6 && lang=='fr'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Annulée </label>\r\n                    <label  *ngIf=\"item.etape_location == 6 && lang=='en'\" textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> Cancelled </label>\r\n                  \r\n                </ion-item>\r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\" width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left:5%;color:white;width: 150px\"> {{item.date_debut}} </label>\r\n                </ion-item>\r\n                  <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <label textWrap=\"true\" style=\" width: 150px\"  > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\" margin-left:5%; color:white; width: 150px\"> {{item.destination}} </label>\r\n                </ion-item>\r\n\r\n                \r\n\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n\r\n            <ion-card-content>\r\n\r\n                  <!-- button View details-->\r\n                  <ion-button  style=\"margin-left:30%\" (click) = \"viewDetails(i)\" >\r\n                    <ion-label >{{ \"RESERVECAR.booking_view_detail\" | translate }}</ion-label>\r\n                  </ion-button>\r\n          \r\n            </ion-card-content>\r\n        </ion-card>\r\n                  <!-- Stop Reservation -->\r\n      </div>  \r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n    <!-- --------------------- if  reservDetails!= null----------------------------------------------------------------- -->\r\n       \r\n     <div *ngIf=\"reservDetails!=null\">\r\n        <!-- Start reservation -->\r\n       <ion-card *ngIf=\"reservDetails \" >\r\n          \r\n          \r\n        <img [src]=\"reservDetails?.photo_car[0]?.image\" />\r\n\r\n            <ion-card-header>\r\n                    <ion-card-title >{{reservDetails.modele}}</ion-card-title>\r\n\r\n              <ion-card-subtitle>\r\n\r\n                  \r\n               <!-- Status -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_status\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 1 && lang=='fr'\" > En cours de traitement </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 1 && lang=='en'\" > Being processed </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 2 && lang=='fr'\" > Confirmée </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 2 && lang=='en'\" > Confirmed </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 3 && lang=='fr'\"> Rejetée </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 3 && lang=='en'\" > Rejected  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 4 && lang=='fr'\" > Réservation Débutée </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 4 && lang=='en'\" > Reservation started </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 5 && lang=='fr'\" > Réservation terminée </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 5 && lang=='en'\" >Reservation completed </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 6 && lang=='fr'\" > Annulée </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 6 && lang=='en'\" > Cancelled </label>             \r\n                </ion-item>\r\n               \r\n                <!-- Booking Type  -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_type\" | translate }}</label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  *ngIf=\"reservDetails.type_location == 3\"> {{ \"RESERVECAR.airport_pick\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.type_location == 2\"> {{ \"RESERVECAR.per_hour\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.type_location == 1\"> {{ \"RESERVECAR.per_day\" | translate }}   </label>\r\n                </ion-item>\r\n                <!-- Location date -->\r\n                 <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\"  > {{ \"RESERVECAR.booking_date\" | translate }}</label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_location}} </label>\r\n                </ion-item>\r\n                \r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_debut}} </label>\r\n                </ion-item>\r\n                  <!-- Starting time -->\r\n                <ion-item >\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.start_time\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.heure_debut}} </label>\r\n                </ion-item>\r\n                <!-- Return date -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.booking_end_date\" | translate }}</label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_fin}} </label>\r\n                </ion-item>\r\n              \r\n                <!-- Return time -->\r\n                <ion-item *ngIf=\"reservDetails.type_location == 2\">\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.return_time\" | translate }}</label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.heure_fin}} </label>\r\n                </ion-item>\r\n                  <!-- Departure -->\r\n            \r\n               <ion-item  *ngIf=\"reservDetails.type_location == 3\">\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.departure\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.depart}} </label>\r\n                </ion-item>\r\n                  <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.destination}} </label>\r\n                </ion-item>\r\n\r\n                  <!-- Price -->\r\n            \r\n               <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_price\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.montant}} F CFA </label>\r\n                </ion-item>\r\n\r\n                 <!-- your marks: -->\r\n            \r\n               <ion-item *ngIf=\"reservDetails.note_client>0\">\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.marks\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==1 && lang == 'fr'\"> Très Mauvais </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==1 && lang == 'en'\"> Very Bad </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==2 && lang == 'fr'\"> Mauvais </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==2 && lang == 'en'\"> Bad </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==3 && lang == 'fr'\"> Moyen </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==3 && lang == 'en'\"> Average </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==4 && lang == 'fr'\"> Bien </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==4 && lang == 'en'\"> Bien </label>\r\n                    <label 000textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==5 && lang == 'fr'\"> Très Bien </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==5 && lang == 'en'\"> Very good </label>\r\n                </ion-item>\r\n                <label textWrap=\"true\" style=\"margin-left: 5%;color:white;\" *ngIf=\"reservDetails.note_client>0\"> {{reservDetails.commentaire_client}} </label> <br>\r\n\r\n                  <!-- your comment/ message -->\r\n            \r\n               <!-- <ion-item>\r\n                    <label > {{ \"RESERVECAR.booking_your_message\" | translate }} </label>\r\n                </ion-item> \r\n    \r\n                <ion-label style=\"color:white;margin-right:10%; margin-left:7%; text-align:justify;\">\r\n                   {{reservDetails.message}}  \r\n                </ion-label> -->\r\n\r\n               \r\n                \r\n\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n\r\n            <ion-card-content>\r\n  \r\n            </ion-card-content>\r\n          </ion-card>\r\n        <!-- Stop Reservation -->\r\n      </div>  \r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/my-bookings/my-bookings-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/my-bookings/my-bookings-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MyBookingsPageRoutingModule */

  /***/
  function srcAppPagesMyBookingsMyBookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyBookingsPageRoutingModule", function () {
      return MyBookingsPageRoutingModule;
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


    var _my_bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-bookings.page */
    "./src/app/pages/my-bookings/my-bookings.page.ts");

    var routes = [{
      path: '',
      component: _my_bookings_page__WEBPACK_IMPORTED_MODULE_3__["MyBookingsPage"]
    }];

    var MyBookingsPageRoutingModule = function MyBookingsPageRoutingModule() {
      _classCallCheck(this, MyBookingsPageRoutingModule);
    };

    MyBookingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyBookingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-bookings/my-bookings.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/my-bookings/my-bookings.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyBookingsPageModule */

  /***/
  function srcAppPagesMyBookingsMyBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyBookingsPageModule", function () {
      return MyBookingsPageModule;
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


    var _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-bookings-routing.module */
    "./src/app/pages/my-bookings/my-bookings-routing.module.ts");
    /* harmony import */


    var _my_bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-bookings.page */
    "./src/app/pages/my-bookings/my-bookings.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var MyBookingsPageModule = function MyBookingsPageModule() {
      _classCallCheck(this, MyBookingsPageModule);
    };

    MyBookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyBookingsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_my_bookings_page__WEBPACK_IMPORTED_MODULE_6__["MyBookingsPage"]]
    })], MyBookingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-bookings/my-bookings.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/my-bookings/my-bookings.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyBookingsMyBookingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button, ion-chip {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nlabel {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXG15LWJvb2tpbmdzXFxteS1ib29raW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LWJvb2tpbmdzL215LWJvb2tpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVFLFlBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRGVBO0VBRUksY0FBQTtBQ2JKOztBRGdCQTtFQUVJLFlBQUE7QUNkSjs7QURnQkE7RUFFSSxnQkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvbXktYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWl0ZW1cclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbiAgICBjb2xvcjogICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1idXR0b24saW9uLWNoaXBcclxue1xyXG4gIGNvbG9yOiBibGFjazsgXHJcbiAgLS1iYWNrZ3JvdW5kOiAgI2ZmYTYwYTtcclxuXHJcbn1cclxuXHJcbi8vIGlvbi1jaGlwXHJcbi8vIHtcclxuLy8gICAgIGNvbG9yOiBibGFjazsgXHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuLy8gfVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uXHJcbntcclxuICAgIGNvbG9yIDogI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGVcclxue1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxufVxyXG5sYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6MC45ZW07XHJcbn0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiwgaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/my-bookings/my-bookings.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/my-bookings/my-bookings.page.ts ***!
    \*******************************************************/

  /*! exports provided: MyBookingsPage */

  /***/
  function srcAppPagesMyBookingsMyBookingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyBookingsPage", function () {
      return MyBookingsPage;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;
    var LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage

    var MyBookingsPage = /*#__PURE__*/function () {
      function MyBookingsPage(webService, router, alertController) {
        _classCallCheck(this, MyBookingsPage);

        this.webService = webService;
        this.router = router;
        this.alertController = alertController;
        this.show = false;
        this.reservDetails = null;
        this.DataTosend = {
          "date_location": "",
          "date_debut": "",
          "date_fin": "",
          "montant": 0,
          "client": 0,
          "voiture": 0,
          "type_location": 0,
          "depart": null,
          "note_client": null,
          "destination": 0,
          "message": "",
          "etape_location": 0,
          "optionnel": []
        };
        this.filterData = [{
          "id": 0,
          "date_location": "",
          "date_debut": "",
          "date_fin": "",
          "heure_debut": "",
          "heure_fin": "",
          "montant": 0,
          "note_client": 0,
          "commentaire_client": "",
          "note_chauffeur": 0,
          "rapport_chauffeur": "",
          "client": 0,
          "chauffeur": 0,
          "voiture": 0,
          "type_location": 0,
          "depart": 0,
          "depart_id": 0,
          "destination": 0,
          "destination_id": 0,
          "message": "",
          "etape_location": 0,
          "optionnel": [],
          "photo_car": [{
            "image": ""
          }],
          "modele": ""
        }];
      }

      _createClass(MyBookingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.ngOnInit();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //start laoder
                    this.webService.presentLoading(); //get token

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
                    //get Booking list
                    this.webService.getClientReservation(this.userId, this.token).subscribe(function (res) {
                      //console.log(res);
                      if (res.detail) // that means the is error or no value exist for this user
                        {
                          if (_this.lang == "fr") {
                            alert("Aucune Reservation \n Retour à la page accueil");
                          } else {
                            alert("No Booking \n Back Home Page");
                          } //stop loader


                          _this.webService.stopLoading();

                          _this.router.navigateByUrl("/dashboard");
                        } else {
                        //check if the booking list is empty or not
                        if (res.length == 0) {
                          if (_this.lang == "fr") {
                            alert("Votre Liste de Reservation est vide !! ");
                          } else {
                            alert(" Your Booking List is Empty !!");
                          } //stop loader


                          _this.webService.stopLoading();

                          _this.router.navigate(["/dashboard"]);
                        } else {
                          var _loop = function _loop(i) {
                            //receive the res
                            _this.filterData[i] = res[i];
                            _this.filterData[i].heure_debut = res[i].date_debut.split("T")[1].split(".")[0];
                            _this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
                            _this.filterData[i].heure_fin = res[i].date_fin.split("T")[1].split(".")[0];
                            _this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
                            _this.filterData[i].date_location = res[i].date_location.split("T")[0];
                            _this.filterData[i].destination_id = res[i].destination;
                            _this.filterData[i].depart_id = res[i].depart; //call the car according to the id 

                            _this.webService.getCarDetails(res[i].voiture).subscribe(function (car) {
                              // console.log(car)
                              //pictures of car
                              _this.filterData[i].photo_car = car.photo; //modele

                              _this.filterData[i].modele = car.modele.libelle;
                              _this.filterData[i].modele = car.modele.libelle; // //get depart
                              // this.webService.getSingleDestination(res[i].depart).subscribe(dep =>{
                              //     console.log(dep);
                              //   this.filterData[i].depart = dep.destination;
                              // });
                              // //end get depart
                              //get destination

                              _this.webService.getSingleDestination(res[i].destination).subscribe(function (dest) {
                                // console.log(dest);
                                _this.filterData[i].destination = dest.destination;

                                if (res[i].depart > 0) {
                                  //get depart
                                  _this.webService.getSingleDestination(res[i].depart).subscribe(function (dep) {
                                    // console.log(dep);
                                    _this.filterData[i].depart = dep.destination; //stop loader

                                    _this.show = true;

                                    _this.webService.stopLoading();
                                  }); //end get depart

                                } else {
                                  //stop loader
                                  _this.show = true;

                                  _this.webService.stopLoading();
                                }
                              }); //end get destination
                              //stop loader
                              //this.show = true
                              //this.webService.stopLoading();

                            }); //end get car infos

                          };

                          for (var i = 0; i < res.length; i++) {
                            _loop(i);
                          } //end for loop

                        }
                      }
                    }, function (error) {
                      _this.webService.stopLoading();

                      if (_this.lang == "fr") {
                        alert("Erreur Serveur !! ");
                      } else {
                        alert("Server Error!! ");
                      }
                    }); ///end get booking list

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////prev////////////////////////////////////////////////////

      }, {
        key: "prev",
        value: function prev() {
          this.reservDetails = null;
        } ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////view details////////////////////////////////////////

      }, {
        key: "viewDetails",
        value: function viewDetails(i) {
          this.reservDetails = this.filterData[i]; // this.reservDetails.date_location = this.filterData[i].date_location.split("T")[0];
          // this.reservDetails.date_debut = this.filterData[i].date_debut.split(".")[0];
          // this.reservDetails.date_fin = this.filterData[i].date_fin.split(".")[0];
          // this.filterData[i].date_debut = res[i].date_debut.split("T")[0];
          // this.filterData[i].heure_debut = (res[i].date_debut.split("T")[1]).split(".")[0];
          // this.filterData[i].date_fin = res[i].date_fin.split("T")[0];
          // this.filterData[i].heure_fin = (res[i].date_fin.split("T")[1]).split(".")[0];
          //console.log(this.reservDetails)
        } //////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////Cancel ////////////////////////////////////////////////////

      }, {
        key: "cancel",
        value: function cancel(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var lang, textcancel, textok, message, myheader, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Storage.get({
                      key: LNG_KEY
                    });

                  case 2:
                    lang = _context2.sent.value;

                    if (lang == "fr") {
                      textcancel = "Non ";
                      textok = "Oui ";
                      message = "Voulez-vous annuler cette reservation? ";
                      myheader = "Annulation ";
                    } else {
                      textcancel = "No ";
                      textok = "Yes ";
                      message = "Do you want to cancel this Booking? ";
                      myheader = "Cancellation ";
                    }

                    _context2.next = 6;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: myheader,
                      message: '<strong>' + message + '</strong>',
                      buttons: [{
                        text: textcancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: textok,
                        handler: function handler() {
                          //change the location type ;
                          _this2.filterData[id].etape_location = 6; //   this.DataTosend.id = this.filterData[id].id;

                          _this2.DataTosend.date_location = _this2.filterData[id].date_location + "T" + _this2.filterData[id].heure_debut + ".961Z";
                          _this2.DataTosend.date_debut = _this2.filterData[id].date_debut + "T" + _this2.filterData[id].heure_debut + ".961Z";
                          _this2.DataTosend.date_fin = _this2.filterData[id].date_fin + "T" + _this2.filterData[id].heure_fin + ".961Z";
                          _this2.DataTosend.montant = _this2.filterData[id].montant;
                          _this2.DataTosend.message = _this2.filterData[id].message;
                          _this2.DataTosend.note_client = null;
                          _this2.DataTosend.client = _this2.filterData[id].client;
                          _this2.DataTosend.voiture = _this2.filterData[id].voiture;
                          _this2.DataTosend.type_location = _this2.filterData[id].type_location;
                          _this2.DataTosend.depart = _this2.filterData[id].depart_id;
                          _this2.DataTosend.destination = _this2.filterData[id].destination_id;
                          _this2.DataTosend.etape_location = 6;
                          _this2.DataTosend.optionnel = _this2.filterData[id].optionnel; // console.log(this.DataTosend);
                          //call the EditLocation API 

                          _this2.webService.presentLoading(); // present loader


                          _this2.webService.EditLocation(_this2.filterData[id].id, _this2.token, _this2.DataTosend).subscribe(function (res) {
                            if (res.id) {
                              _this2.webService.stopLoading();

                              _this2.myAlert(0, _this2.lang);
                            } else {
                              _this2.webService.stopLoading();

                              _this2.myAlert(1, _this2.lang);
                            }
                          }, function (error) {
                            _this2.webService.stopLoading();

                            _this2.myAlert(1, _this2.lang);
                          });
                        }
                      }]
                    });

                  case 6:
                    alert = _context2.sent;
                    _context2.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////prev////////////////////////////////////////////////////

      }, {
        key: "Mark",
        value: function Mark(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['report-client'], {
                      queryParams: {
                        booked: JSON.stringify(this.filterData[id]),
                        prev: "/my-bookings"
                      }
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //alert 2 method

      }, {
        key: "myAlert",
        value: function myAlert(id, lang) {
          if (id == 0) {
            if (lang == "fr") {
              alert("Votre Requête a été envoyée avec succès !");
            } else {
              alert("Your Request has been sent successfully !");
            }

            this.router.navigateByUrl("/my-bookings");
          } else {
            if (lang == "fr") {
              alert("Désolé, une erreur s'est produite.");
            } else {
              alert("Sorry, an error has occurred.");
            }
          }
        }
      }]);

      return MyBookingsPage;
    }();

    MyBookingsPage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    MyBookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-bookings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-bookings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-bookings/my-bookings.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-bookings.page.scss */
      "./src/app/pages/my-bookings/my-bookings.page.scss"))["default"]]
    })], MyBookingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-my-bookings-my-bookings-module-es5.js.map