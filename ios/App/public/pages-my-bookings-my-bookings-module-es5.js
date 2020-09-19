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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n       <ion-item>\n        <ion-buttons slot=\"start\"  *ngIf=\"reservDetails==null\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n      <!-- prev icon -->\n           <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" *ngIf=\"reservDetails!=null\" ></ion-icon>\n        <ion-title size=\"small\"> {{\"DASHBOARD.my_bookings\" | translate}} </ion-title>\n    </ion-item> \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\">\n\n    <!-- --------------------- if  reservDetails== null----------------------------------------------------------------- -->\n       \n     <div *ngIf=\"reservDetails==null\">\n        <!-- Start reservation -->\n       <ion-card *ngFor=\"let item of filterData ; index as i\" >\n          \n          \n        <img [src]=\"item?.photo_car[0]?.image\" />\n\n            <ion-card-header>\n                    <ion-item> \n                        <ion-card-title >{{item.modele}}</ion-card-title>\n\n                        <ion-icon *ngIf=\"item.etape_location==1\" style=\"color: #ffa60a\" slot=\"end\"\n                          name=\"close-circle-outline\" (click)=\"cancel(i)\">\n                         \n                         </ion-icon>\n                        \n                        <ion-icon *ngIf=\"item.etape_location==5 && (item.note_client == 0 ||item.note_client==null)\" style=\"color:#ffa60a \" slot=\"end\"\n                          name=\"open-outline\" (click)=\"Mark(i)\">\n                         \n                         </ion-icon> \n\n                    </ion-item>\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <ion-item>\n                    <ion-label > {{ \"RESERVECAR.booking_status\" | translate }} </ion-label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\" *ngIf=\"item.etape_location == 1 && lang=='fr'\" > En cours de traitement </label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\" *ngIf=\"item.etape_location == 1 && lang=='en'\"> Being processed </label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\" *ngIf=\"item.etape_location == 2 && lang=='fr'\" > Confirmée </label>\n                    <label  *ngIf=\"item.etape_location == 2 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Confirmed </label>\n                    <label *ngIf=\"item.etape_location == 3 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Rejetée </label>\n                    <label  *ngIf=\"item.etape_location == 3 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Rejected  </label>\n                    <label  *ngIf=\"item.etape_location == 4 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Réservation Débutée </label>\n                    <label  *ngIf=\"item.etape_location == 4 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Reservation started </label>\n                    <label  *ngIf=\"item.etape_location == 5 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Réservation terminée </label>\n                    <label  *ngIf=\"item.etape_location == 5 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\">Reservation completed </label>\n                    <label  *ngIf=\"item.etape_location == 6 && lang=='fr'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Annulée </label>\n                    <label  *ngIf=\"item.etape_location == 6 && lang=='en'\" textWrap=\"true\" style=\"color:white;width: 150px\"> Cancelled </label>\n                  \n                </ion-item>\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > {{ \"RESERVECAR.booking_start_date\" | translate }} </ion-label>\n                    <label textWrap=\"true\" style=\"color:white;width: 150px\"> {{item.date_debut}} </label>\n                </ion-item>\n                  <!-- Destination -->\n            \n               <ion-item>\n                    <label  > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"color:white; width: 150px\"> {{item.destination}} </label>\n                </ion-item>\n\n                \n\n              </ion-card-subtitle>\n            </ion-card-header>\n\n\n            <ion-card-content>\n\n                  <!-- button View details-->\n                  <ion-button  style=\"margin-left:30%\" (click) = \"viewDetails(i)\" >\n                      <ion-label >{{ \"RESERVECAR.booking_view_detail\" | translate }}</ion-label>\n                  </ion-button>\n          \n            </ion-card-content>\n        </ion-card>\n                  <!-- Stop Reservation -->\n      </div>  \n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n    <!-- --------------------- if  reservDetails!= null----------------------------------------------------------------- -->\n       \n     <div *ngIf=\"reservDetails!=null\">\n        <!-- Start reservation -->\n       <ion-card *ngIf=\"reservDetails \" >\n          \n          \n        <img [src]=\"reservDetails?.photo_car[0]?.image\" />\n\n            <ion-card-header>\n                    <ion-card-title >{{reservDetails.modele}}</ion-card-title>\n\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_status\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 1 && lang=='fr'\" > En cours de traitement </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 1 && lang=='en'\" > Being processed </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 2 && lang=='fr'\" > Confirmée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 2 && lang=='en'\" > Confirmed </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 3 && lang=='fr'\"> Rejetée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 3 && lang=='en'\" > Rejected  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 4 && lang=='fr'\" > Réservation Débutée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 4 && lang=='en'\" > Reservation started </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 5 && lang=='fr'\" > Réservation terminée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 5 && lang=='en'\" >Reservation completed </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 6 && lang=='fr'\" > Annulée </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.etape_location == 6 && lang=='en'\" > Cancelled </label>             \n                </ion-item>\n               \n                <!-- Booking Type  -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_type\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  *ngIf=\"reservDetails.type_location == 3\"> {{ \"RESERVECAR.airport_pick\" | translate }}  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.type_location == 2\"> {{ \"RESERVECAR.per_hour\" | translate }}  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.type_location == 1\"> {{ \"RESERVECAR.per_day\" | translate }}   </label>\n                </ion-item>\n                <!-- Location date -->\n                 <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\"  > {{ \"RESERVECAR.booking_date\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_location}} </label>\n                </ion-item>\n                \n                <!-- Starting date -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_debut}} </label>\n                </ion-item>\n                  <!-- Starting time -->\n                <ion-item >\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.start_time\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.heure_debut}} </label>\n                </ion-item>\n                <!-- Return date -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.booking_end_date\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.date_fin}} </label>\n                </ion-item>\n              \n                <!-- Return time -->\n                <ion-item *ngIf=\"reservDetails.type_location == 2\">\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.return_time\" | translate }}</label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.heure_fin}} </label>\n                </ion-item>\n                  <!-- Departure -->\n            \n               <ion-item  *ngIf=\"reservDetails.type_location == 3\">\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.departure\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.depart}} </label>\n                </ion-item>\n                  <!-- Destination -->\n            \n               <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.destination}} </label>\n                </ion-item>\n\n                  <!-- Price -->\n            \n               <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_price\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{reservDetails.montant}} F CFA </label>\n                </ion-item>\n                  <!-- your comment/ message -->\n            \n               <ion-item>\n                    <label > {{ \"RESERVECAR.booking_your_message\" | translate }} </label>\n                </ion-item> \n    \n                <ion-label style=\"color:white;margin-right:10%; margin-left:7%; text-align:justify;\">\n                   {{reservDetails.message}}  \n                </ion-label>\n\n                <!-- your marks: -->\n            \n               <ion-item *ngIf=\"reservDetails.note_client>0\">\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.marks\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==1 && lang == 'fr'\"> Très Mauvais </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==1 && lang == 'en'\"> Very Bad </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==2 && lang == 'fr'\"> Mauvais </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==2 && lang == 'en'\"> Bad </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==3 && lang == 'fr'\"> Moyen </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==3 && lang == 'en'\"> Average </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==4 && lang == 'fr'\"> Bien </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==4 && lang == 'en'\"> Bien </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==5 && lang == 'fr'\"> Très Bien </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" *ngIf=\"reservDetails.note_client==5 && lang == 'en'\"> Very good </label>\n                </ion-item>\n\n                \n\n              </ion-card-subtitle>\n            </ion-card-header>\n\n\n            <ion-card-content>\n  \n            </ion-card-content>\n          </ion-card>\n        <!-- Stop Reservation -->\n      </div>  \n    <!-- -------------------------------------------------------------------------------------- -->\n\n\n\n\n\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-badge {\n  --background: white;\n  color: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL215LWJvb2tpbmdzL215LWJvb2tpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvbXktYm9va2luZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURHQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNIRjs7QURPQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFFSSxjQUFBO0FDTko7O0FEU0E7RUFFSSxZQUFBO0FDUEo7O0FEU0E7RUFFSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1ib29raW5ncy9teS1ib29raW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxufVxuXG5pb24tYmFkZ2VcbntcbiAgICAtLWJhY2tncm91bmQgOiB3aGl0ZTtcbiAgICBjb2xvciA6IGJsYWNrO1xufVxuXG5pb24taXRlbVxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvblxue1xuICBjb2xvcjogYmxhY2s7IFxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xuXG59XG5cbmlvbi1jaGlwXG57XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvblxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGVcbntcbiAgICBjb2xvciA6IHdoaXRlO1xufVxuaW9uLXRpdGxlXG57XG4gICAgbWFyZ2luLWxlZnQgOiAtMTAlO1xuICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1iYWRnZSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";
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
        value: function ngOnInit() {
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
                      console.log(res);

                      if (res.detail) // that means the is error or no value exist for this user
                        {
                          if (_this.lang == "fr") {
                            alert("Aucune Reservation \n Retour à la page accueil");
                          } else {
                            alert("No Booking \n Back Home Page");
                          }

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
                              console.log(car); //pictures of car

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
                                console.log(dest);
                                _this.filterData[i].destination = dest.destination;

                                if (res.depart > 0) {
                                  //get depart
                                  _this.webService.getSingleDestination(res[i].depart).subscribe(function (dep) {
                                    console.log(dep);
                                    _this.filterData[i].depart = dep.destination; //stop loader

                                    _this.show = true;

                                    _this.webService.stopLoading();
                                  }); //end get depart

                                }
                              }); //end get destination
                              //stop loader
                              // this.show = true
                              // this.webService.stopLoading();

                            }); //end get car infos

                          };

                          for (var i = 0; i < res.length; i++) {
                            _loop(i);
                          } //end for loop

                        }
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

          console.log(this.reservDetails);
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
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
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
                          _this2.DataTosend.optionnel = _this2.filterData[id].optionnel;
                          console.log(_this2.DataTosend); //call the EditLocation API 

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
            var _this3 = this;

            var lang, textcancel, textok, message, very_bad, bad, average, good, very_good, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Storage.get({
                      key: LNG_KEY
                    });

                  case 2:
                    lang = _context3.sent.value;

                    if (lang == "fr") {
                      textcancel = "Annuler ";
                      textok = "Valider ";
                      message = "Comment était le trajet ? ";
                      very_bad = "Très Mauvais ";
                      bad = "Mauvais ";
                      average = "Moyen ";
                      good = "Bien ";
                      very_good = "Très Bien ";
                    } else {
                      textcancel = "Cancel ";
                      textok = "OK ";
                      message = "How was the ride ?";
                      very_bad = "Very Bad ";
                      bad = "Bad ";
                      average = "Average ";
                      good = "Good ";
                      very_good = "Very Good ";
                    }

                    _context3.next = 6;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: message,
                      inputs: [{
                        name: very_good,
                        type: 'radio',
                        label: very_good,
                        value: 5,
                        checked: true
                      }, {
                        name: good,
                        type: 'radio',
                        label: good,
                        value: 4
                      }, {
                        name: average,
                        type: 'radio',
                        label: average,
                        value: 3
                      }, {
                        name: bad,
                        type: 'radio',
                        label: bad,
                        value: 2
                      }, {
                        name: very_bad,
                        type: 'radio',
                        label: very_bad,
                        value: 1
                      }],
                      buttons: [{
                        text: textcancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: textok,
                        handler: function handler(data) {
                          console.log('Radio', data); //change the  Marks given by the customer ;

                          _this3.filterData[id].note_client = data; //   this.DataTosend.id = this.filterData[id].id;

                          _this3.DataTosend.date_location = _this3.filterData[id].date_location + "T" + _this3.filterData[id].heure_debut + ".961Z";
                          _this3.DataTosend.date_debut = _this3.filterData[id].date_debut + "T" + _this3.filterData[id].heure_debut + ".961Z";
                          _this3.DataTosend.date_fin = _this3.filterData[id].date_fin + "T" + _this3.filterData[id].heure_fin + ".961Z";
                          _this3.DataTosend.montant = _this3.filterData[id].montant;
                          _this3.DataTosend.message = _this3.filterData[id].message;
                          _this3.DataTosend.note_client = data;
                          _this3.DataTosend.client = _this3.filterData[id].client;
                          _this3.DataTosend.voiture = _this3.filterData[id].voiture;
                          _this3.DataTosend.type_location = _this3.filterData[id].type_location;
                          _this3.DataTosend.depart = _this3.filterData[id].depart_id;
                          _this3.DataTosend.destination = _this3.filterData[id].destination_id;
                          _this3.DataTosend.etape_location = _this3.filterData[id].etape_location;
                          _this3.DataTosend.optionnel = _this3.filterData[id].optionnel;
                          console.log(_this3.DataTosend); //call the EditLocation API 

                          _this3.webService.presentLoading(); // present loader


                          _this3.webService.EditLocation(id, _this3.token, _this3.filterData[id]).subscribe(function (res) {
                            if (res.id) {
                              _this3.webService.stopLoading();

                              _this3.myAlert(0, _this3.lang);
                            } else {
                              _this3.webService.stopLoading();

                              _this3.myAlert(1, _this3.lang);
                            }
                          }, function (error) {
                            _this3.webService.stopLoading();

                            _this3.myAlert(1, _this3.lang);
                          });
                        }
                      }]
                    });

                  case 6:
                    alert = _context3.sent;
                    _context3.next = 9;
                    return alert.present();

                  case 9:
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