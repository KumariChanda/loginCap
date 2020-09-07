function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservation-page-reservation-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReservationPageReservationPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n      <ion-item>\n          <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n          <ion-title>{{\"RESERVECAR.title\"| translate}}</ion-title>\n      </ion-item>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\">\n\n\n\n\n\n       <ion-card>\n        <ion-card-header>\n\n         <ion-card-title > RESERVATION </ion-card-title>\n              <!-- Label only -->\n          <ion-segment [(ngModel)]=\"rent_type\">\n            <ion-segment-button  value=\"hour\">\n              <ion-label>{{\"RESERVECAR.per_hour\"| translate}} </ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"day\">\n              <ion-label>{{\"RESERVECAR.per_day\"| translate}}</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"airport\">\n              <label textWrap=\"true\" style=\"font-size:0.9em\">{{\"RESERVECAR.airport_pick\"| translate}}</label>\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-card-header>\n\n        <ion-card-content>\n             \n              <!-- Search Bar -->\n               <ion-searchbar placeholder=\"Destination (*) \"[(ngModel)]=\"searchQuery\" (click)=\"click_bar()\" (ionCancel)=\"onCancel($event)\" (ionClear)\t=\"onCancel($event)\" (ngModelChange)=\"change_query($event)\" showCancelButton=\"focus\"></ion-searchbar>\n                \n                <ion-list *ngIf=\"show_list\">\n                   <ion-item *ngFor=\"let item of list_to_show; let i = index\">\n                       <ion-label (click)=\"click_item(i, item.id,item.coefficient)\"  > {{item.destination}} </ion-label>\n                   </ion-item>\n                </ion-list>\n\n\n                <!-- Price -->\n\n                <ion-item>\n                    <ion-label > {{\"RESERVECAR.price\"| translate}}</ion-label>\n                   \n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='day'\"> {{car.per_day}} F CFA </ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='hour'\"> {{car.per_hour}} F CFA</ion-chip>\n                    <ion-chip slot=\"end\"    *ngIf=\"rent_type =='airport'\"> {{car.airport}} F CFA </ion-chip>\n\n                </ion-item>\n\n            <!-- ----------------------------------------------------------------------------------- -->\n            <!-- ----------------------START rent type = \"per hour\"------------------------------- -->\n              <div *ngIf=\"rent_type =='hour'\">\n                <!-- start date -->\n                <ion-item  >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime readonly [min]=\"today\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\" ></ion-datetime>\n                </ion-item>\n                <!-- start time -->\n                <ion-item >\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" (ionChange)=\"change('hour')\"   [(ngModel)]=\"start_time\" ></ion-datetime>\n                </ion-item>\n                 <!-- return time -->\n                <ion-item  *ngIf=\"hourNbr > 0\" >\n                  <ion-label>{{\"RESERVECAR.return_time\"| translate}}</ion-label>\n                  <ion-datetime readonly display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\"  [min]=\"end_time\" [(ngModel)]=\"end_time\"> </ion-datetime>\n                </ion-item>\n                <!-- Number of Time-->\n                <ion-item >\n                  <ion-label>{{\"RESERVECAR.number_hour\"| translate}}</ion-label>\n                  <ion-input type=\"number\"  style=\"width: 100px; margin-left : 40%\" (ionChange)=\"change('hour')\"  placeholder=\"0\"  [(ngModel)]=\"hourNbr\" ></ion-input>\n                </ion-item>\n                \n               </div>\n\n\n            <!-- ----------------------STOP rent type = \"per hour\"------------------------------------------------------------------ -->\n            <!-- ------------------------------------------------------------------------------------------ -->\n\n            <!-- ----------------------------------------------------------------------------------- -->\n            <!-- ----------------------START rent type = \"per day\"------------------------------- -->\n              <div *ngIf=\"rent_type =='day'\">\n                <!-- start date -->\n                <ion-item  >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime [min]=\"today\" [max]=\"maxdate\" (ionChange)=\"change('day')\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\"></ion-datetime>\n                </ion-item>\n                 <!-- return date  -->\n                <ion-item  >\n                  <ion-label>{{\"RESERVECAR.return_date\"| translate}}</ion-label>\n                  <ion-datetime [min]=\"min_retunDate\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"end_date\"></ion-datetime>\n                </ion-item>\n                <!-- start time -->\n                <ion-item >\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\" (ionChange)=\"end_time = start_time\"   [min]=\"start_time\" [(ngModel)]=\"start_time\"></ion-datetime>\n                </ion-item>\n                 <!-- return time -->\n                <ion-item >\n                  <ion-label>{{\"RESERVECAR.return_time\"| translate}}</ion-label>\n                  <ion-datetime  display-format=\"HH:mm\t\" picker-format=\"HH:mm\t\"   [(ngModel)]=\"end_time\"></ion-datetime>\n                </ion-item>\n               </div>\n\n\n            <!-- ----------------------STOP rent type = \"per day\"------------------------------------------------------------------ -->\n            <!-- ------------------------------------------------------------------------------------------ -->\n           \n            <!-- ----------------------------------------------------------------------------------- -->\n            <!-- ----------------------START rent type = \"airport\"------------------------------- -->\n              <div *ngIf=\"rent_type =='airport'\">\n                <!-- start date -->\n                <ion-item  >\n                  <ion-label>{{\"RESERVECAR.start_date\"| translate}}</ion-label>\n                  <ion-datetime [value]=\"today\" [min]=\"today\" [max]=\"maxdate\" placeholder=\"Select Date\" [(ngModel)]=\"start_date\"></ion-datetime>\n                </ion-item>\n                <!-- start time -->\n                <ion-item >\n                  <ion-label>{{\"RESERVECAR.start_time\"| translate}}</ion-label>\n                  <ion-datetime display-format=\"HH:mm\t\" picker-format=\"HH:mm\" [(ngModel)]=\"start_time\" ></ion-datetime>\n                </ion-item>\n                 <!-- departure -->\n                <ion-item  *ngIf=\"rent_type =='airport' \">\n                  <ion-input [(ngModel)]= \"depart_venue\"  placeholder='{{\"RESERVECAR.departure_venue\"| translate}}' ></ion-input>\n                </ion-item>\n\n                \n               </div>\n\n\n            <!-- ----------------------STOP rent type = \"airport\"------------------------------------------------------------------ -->\n            <!-- ------------------------------------------------------------------------------------------ -->\n\n\n                \n                \n\n        </ion-card-content>\n      \n  </ion-card>\n      \n      <!-- type of reservation -->\n\n\n  <!-- optional services -->\n       <ion-card>\n     \n        <ion-card-header>\n          <ion-card-title>{{\"RESERVECAR.otherservices\"| translate}}  </ion-card-title>\n        </ion-card-header>\n        <ion-card-content *ngFor=\"let item of option\">\n                  \n                <!-- <strong> <ion-label style=\"text-decoration: underline; margin-left:4%\"> Optional Services : </ion-label> </strong> -->\n                  \n                  <!-- baby seats -->\n                <ion-item>\n                    <ion-checkbox color=\"primary\" [(ngModel)] =\"item.checked\" slot=\"end\"></ion-checkbox>\n                    <label  textWrap=\"true\">{{item.libelle}}  -   {{item.prix}}F cfa/ {{\"RESERVECAR.day\"| translate}} </label>\n                </ion-item>\n                \n            \n        </ion-card-content>\n        </ion-card>\n\n       \n\n        <!-- Message -->\n        <ion-card  style=\"height: 255px;\">\n     \n            <ion-card-header>\n              <ion-card-title>{{\"RESERVECAR.message\"| translate}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content >\n                \n                  <ion-textarea [(ngModel)]=\"message\" class=\"cell-input\" auto-grow=\"true\" maxlength=\"400\" placeholder=\"{{'RESERVECAR.messageplaceholder'| translate}}\"></ion-textarea>\n\n            </ion-card-content>\n\n        </ion-card>\n\n           <!-- submit your reservation -->\n        <!-- <ion-button expand=\"round\" class=\"center-button\" >Submit</ion-button> -->\n\n\n</ion-content>\n<ion-footer *ngIf=\"show\">\n  <!-- <ion-toolbar> -->\n      <ion-button  (click)=\"submit(car.id)\" expand=\"full\"> {{\"RESERVECAR.btn_submit\"| translate}} </ion-button>\n  <!-- </ion-toolbar> -->\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/reservation-page/reservation-page-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/reservation-page/reservation-page-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ReservationPagePageRoutingModule */

  /***/
  function srcAppPagesReservationPageReservationPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationPagePageRoutingModule", function () {
      return ReservationPagePageRoutingModule;
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


    var _reservation_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reservation-page.page */
    "./src/app/pages/reservation-page/reservation-page.page.ts");

    var routes = [{
      path: '',
      component: _reservation_page_page__WEBPACK_IMPORTED_MODULE_3__["ReservationPagePage"]
    }];

    var ReservationPagePageRoutingModule = function ReservationPagePageRoutingModule() {
      _classCallCheck(this, ReservationPagePageRoutingModule);
    };

    ReservationPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReservationPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/reservation-page/reservation-page.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/reservation-page/reservation-page.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ReservationPagePageModule */

  /***/
  function srcAppPagesReservationPageReservationPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationPagePageModule", function () {
      return ReservationPagePageModule;
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


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _reservation_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reservation-page-routing.module */
    "./src/app/pages/reservation-page/reservation-page-routing.module.ts");
    /* harmony import */


    var _reservation_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reservation-page.page */
    "./src/app/pages/reservation-page/reservation-page.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ReservationPagePageModule = function ReservationPagePageModule() {
      _classCallCheck(this, ReservationPagePageModule);
    };

    ReservationPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _reservation_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReservationPagePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
      declarations: [_reservation_page_page__WEBPACK_IMPORTED_MODULE_7__["ReservationPagePage"]]
    })], ReservationPagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/reservation-page/reservation-page.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/reservation-page/reservation-page.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReservationPageReservationPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center-button {\n  margin-left: 35%;\n  margin-right: 30%;\n}\n\n.cell-input {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n}\n\nion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card-title {\n  margin-left: 30%;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title, ion-textarea {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9uLXBhZ2UvcmVzZXJ2YXRpb24tcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc2VydmF0aW9uLXBhZ2UvcmVzZXJ2YXRpb24tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFBb0IsbUJBQUE7QUNDeEI7O0FERUU7RUFFRSxtQkFBQTtBQ0FKOztBREVBO0VBRUksZ0JBQUE7QUNBSjs7QURJQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBRUksWUFBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0E7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBRUksY0FBQTtBQ0pKOztBRE9BO0VBRUksWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXJ2YXRpb24tcGFnZS9yZXNlcnZhdGlvbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIFxuICB9XG5cbiAgLmNlbGwtaW5wdXQge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxuICAgIGJvcmRlci13aWR0aDogLjAxZW07IFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgbWFyZ2luLWJvdHRvbSA6IC0xcHg7XG4gIH1cblxuICBpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxufVxuaW9uLWNhcmQtdGl0bGVcbntcbiAgICBtYXJnaW4tbGVmdDozMCVcbn1cblxuXG5pb24taXRlbVxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXBcbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tYnV0dG9uXG57XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSxpb24tdGV4dGFyZWFcbntcbiAgICBjb2xvciA6IHdoaXRlO1xufSIsIi5jZW50ZXItYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5jZWxsLWlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwLjAxZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbmlvbi1jYXJkLCBpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSwgaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/reservation-page/reservation-page.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/reservation-page/reservation-page.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ReservationPagePage */

  /***/
  function srcAppPagesReservationPageReservationPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationPagePage", function () {
      return ReservationPagePage;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage;
    var LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage

    var ReservationPagePage = /*#__PURE__*/function () {
      function ReservationPagePage(router, route, webservice, alertController) {
        _classCallCheck(this, ReservationPagePage);

        this.router = router;
        this.route = route;
        this.webservice = webservice;
        this.alertController = alertController;
        this.list_original = [{
          'id': '',
          'destination': '',
          'coefficient': ''
        }];
        this.list_to_show = [{
          'id': '',
          'destination': '',
          'coefficient': ''
        }];
        this.selected_index = -1;
        this.show_list = false; ///////////////////////end data for destination search ///////////////////
        //////////////////////////////////////////////////
        //my car : this var will receive the car with all its details

        this.car = {
          'id': '',
          'modele': '',
          'per_day': 0,
          'per_hour': 0,
          'airport': 0
        }; //car ID

        this.carID = ""; //prev page

        this.page_prev = ""; /////////////////////////////////////
        ////var data to be sent //////////

        this.rent_type = "hour";
        this.hourNbr = 0; // coef of number of hour for reservation per hour
        ////////////////////////////////////////////////////////
        //this is the object we have to send to the API

        this.dataToSend = {
          "date_location": "",
          "date_debut": "",
          "date_fin": "",
          "montant": 0,
          "note_client": null,
          "commentaire_client": "",
          "note_chauffeur": null,
          "rapport_chauffeur": "",
          "client": 0,
          "chauffeur": null,
          "voiture": 0,
          "type_location": 1,
          "destination": 0,
          "etape_location": 1,
          //"lieu_depart": "",
          "optionnel": []
        }; //end of object to send
        /////////////////////////////////////////////////////

        this.show = false; //is to show page content
        // date

        this.setDate();
      }

      _createClass(ReservationPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Storage.get({
                      key: LNG_KEY
                    });

                  case 2:
                    this.lang = _context2.sent.value;
                    // //present loading
                    this.webservice.presentLoading(); ////////////////////////////////////////////////////////////////
                    ///////////////receive car id/////////////////////////////////////////////////

                    this.subscription = this.route.queryParams.subscribe(function (data) {
                      console.log("selected ->", typeof data.id); //set the prev page

                      _this.page_prev = data.prev; //set the Car ID 

                      _this.carID = data.id; ////////////////////////////////////////////////////////////////////////////   
                      //get Destination list

                      _this.webservice.getDestinations().subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  console.log("getting Destinations : ", res);

                                  if (res) {
                                    this.list_original = res;
                                  } ////////////////////////////////////////////////////////////////////////////////////////////////
                                  ////////////////////////Start : Get Optionnels/////////////////////////////////////////////////


                                  this.webservice.getOption().subscribe(function (resp) {
                                    _this2.option = resp;
                                    console.log(resp); ///////////////////////////////////////////////////////////////////////////////////////////
                                    //////////////////Start : Get Car details/////////////////////////////////////////////////

                                    _this2.webservice.getCarDetails(data.id).subscribe(function (res) {
                                      _this2.car = res; // get the differents pice of the car

                                      _this2.webservice.getPriceCar(data.id).subscribe(function (resp) {
                                        _this2.car.per_day = resp[0].prix;
                                        _this2.car.per_hour = resp[1].prix;
                                        _this2.car.airport = resp[2].prix; //stop loading

                                        _this2.webservice.stopLoading();

                                        _this2.show = true;
                                      }); //end get prices


                                      console.log(res);
                                    }); //////////////////Stop : Get Car details//////////////////////////////////////////////////
                                    /////////////////////////////////////////////////////////////////////////////////////////

                                  }); //////////////////////////Stop : Get  Optionnels//////////////////////////////////////////////////
                                  /////////////////////////////////////////////////////////////////////////////////////////

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }); //// end get destinations
                      ////////////////////////////////////////////////////////////////////

                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } ////////////////////////////////////////////////////////////////////////////////    

      }, {
        key: "setDate",
        value: function setDate() {
          var date = new Date();
          var month, day; //set min date for return date reserv per day

          this.min_retunDate = new Date();
          this.min_retunDate.setDate(this.min_retunDate.getDate() + 1);
          this.min_retunDate = this.min_retunDate.toISOString(); ///////////////////////today's date or reservation date //////////////////////////

          this.dataToSend.date_location = date.toISOString(); //today's date

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

          this.today = date.getFullYear() + "-" + month + "-" + day;
          this.start_date = this.today;
          this.end_date = this.start_date;
          this.start_time = "09:00";
          this.end_time = "10:00"; //maximum date

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
          console.log("Today = " + this.today + " \n MAX DATE : " + this.maxdate);
        } //////////////////////////////////////////////////////////////
        ////back to prev ///

      }, {
        key: "prev",
        value: function prev() {
          //call another page and make the reservation of the car
          this.router.navigate(['car-details'], {
            queryParams: {
              id: this.carID,
              prev: this.page_prev
            }
          });
        } ////////////////////////////////////////////////////////////////////////
        /////////////////Submit reservation///////////////////////////////////////////////////////

      }, {
        key: "submit",
        value: function submit(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var ret, date1, date2, Difference_In_Time, Difference_In_Days, index, i;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.destination) {
                      _context3.next = 52;
                      break;
                    }

                    //////////////////////////car id ///////////////////////////////////////////////
                    this.dataToSend.voiture = id;
                    console.log("id : ", id, "\n coef : ", this.coef); /////////////////////////////////user id ///////////////////////////////////////////////  

                    _context3.t0 = JSON;
                    _context3.next = 6;
                    return Storage.get({
                      key: "user_infos"
                    });

                  case 6:
                    _context3.t1 = _context3.sent.value;
                    ret = _context3.t0.parse.call(_context3.t0, _context3.t1);
                    // console.log("user : ", ret);
                    this.dataToSend.client = ret.id; //////////////////////////////get token storage////////////////////////////////////////

                    _context3.next = 11;
                    return Storage.get({
                      key: 'accessToken'
                    });

                  case 11:
                    this.token = _context3.sent.value;
                    console.log("Token : ", this.token); /////////////////// set start date /////////////////////////////////////////////////////
                    //this.dataToSend.date_debut = this.start_date

                    this.start_date = this.start_date.split("T")[0];
                    this.dataToSend.date_debut = this.start_date + "T" + this.start_time + ":44.625Z"; //////////////////// set start hour /////////////////////////////////////////////////////
                    // this.dataToSend.heure_debut = this.start_time;     
                    ///////////////////////////////////////////////////////////////////////////////////////////

                    if (!(this.rent_type == "hour")) {
                      _context3.next = 26;
                      break;
                    }

                    if (!(this.hourNbr > 0)) {
                      _context3.next = 22;
                      break;
                    }

                    ///////set type rent to hour id 
                    this.dataToSend.type_location = 2; /////////////////// set end hour /////////////////////////////////////////////////////
                    //this.dataToSend.heure_fin = this.end_time;
                    /////// set the end date to "";

                    this.dataToSend.date_fin = this.start_date + "T" + this.end_time + ":44.625Z"; //this.dataToSend.date_fin = ""+ " "+this.end_time;
                    /////// set depart venue  (for airoort type)
                    //this.dataToSend.lieu_depart = "";
                    //////price with number of hour and destination coef included 

                    this.price = this.car.per_hour * (1 + this.coef) * this.hourNbr;
                    _context3.next = 24;
                    break;

                  case 22:
                    if (this.lang == "fr") {
                      alert("Entrez le nombre d'heure ! ( > 0) ");
                    } else {
                      alert("Enter the number of Hour ! ( > 0) ");
                    }

                    return _context3.abrupt("return");

                  case 24:
                    _context3.next = 43;
                    break;

                  case 26:
                    if (!(this.rent_type == "day")) {
                      _context3.next = 42;
                      break;
                    }

                    /////coef of the number of day
                    // To set two dates to two variables 
                    date1 = new Date(this.start_date);
                    date2 = new Date(this.end_date); // To calculate the time difference of two dates 

                    Difference_In_Time = date2.getTime() - date1.getTime(); // To calculate the no. of days between two dates 

                    Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

                    if (!(Difference_In_Days > 0)) {
                      _context3.next = 38;
                      break;
                    }

                    ///////set type rent to day id 
                    this.dataToSend.type_location = 1; //////////////////////set end date ///////////////////////////////////////////////////////
                    // this.dataToSend.date_fin = this.end_date

                    this.end_date = this.end_date.split("T")[0];
                    this.dataToSend.date_fin = this.end_date + "T" + this.end_time + ":44.625Z"; /////////////////// set end hour /////////////////////////////////////////////////////
                    // this.dataToSend.heure_fin = this.end_time;
                    /////// set depart venue 
                    //this.dataToSend.lieu_depart = "";

                    this.price = this.car.per_day * (1 + this.coef) * Difference_In_Days;
                    _context3.next = 40;
                    break;

                  case 38:
                    if (this.lang == "fr") {
                      alert("Le Nombre de jour doit être > 0 ");
                    } else {
                      alert("Number of Day Should be > 0");
                    }

                    return _context3.abrupt("return");

                  case 40:
                    _context3.next = 43;
                    break;

                  case 42:
                    if (this.rent_type == "airport") {
                      ///////set type rent to airport id 
                      this.dataToSend.type_location = 3;
                      this.dataToSend.date_fin = this.start_date + "T" + this.start_time + ":44.625Z"; /// set end time /////////////////////////

                      this.dataToSend.date_fin = "" + " " + this.end_time + "T" + this.start_time + ":44.625Z"; //////////////////////set departure venue ///////////////////////////////////////////////////////
                      //this.dataToSend.lieu_depart = this.depart_venue;

                      this.price = this.car.airport * (1 + this.coef);
                    }

                  case 43:
                    ///////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////get the selected option and add price /////////////////////////////////////
                    index = 0;

                    for (i = 0; i < this.option.length; i++) {
                      if (this.option[i].checked) {
                        ////////////////////////////////////////////////////////////////////
                        if (this.rent_type == "hour") {
                          console.log("price : ", typeof this.price, "\n option price : ", typeof this.option[i].prix);
                          this.price = parseFloat(this.price) + this.option[i].prix; //add the optionnel id into the dataTosend field array

                          this.dataToSend.optionnel[index] = this.option[i].id;
                          index = index + 1;
                        } else if (this.rent_type == "day") {
                          this.price = this.price + this.option[i].prix; //add the optionnel id into the dataTosend field array

                          this.dataToSend.optionnel[index] = this.option[i].id;
                          index = index + 1;
                        } else if (this.rent_type == "airport") {
                          this.price = this.price + this.option[i].prix; //add the optionnel id into the dataTosend field array

                          this.dataToSend.optionnel[index] = this.option[i].id;
                          index = index + 1;
                        } //////////////////////////////////////////////////////////////


                        console.log(this.option[i]);
                      }
                    } //////////////////set destination ////////////////////////////////////////////


                    this.dataToSend.destination = this.destination; /////////////////////set price ///////////////////////////////////////////////////

                    this.dataToSend.montant = this.price; /////////////////////set commentaire client ///////////////////////////////////////////////////

                    this.dataToSend.commentaire_client = this.message;
                    console.log("\n data to send : \n", this.dataToSend); // present alert

                    this.presentAlertConfirm(this.price, this.start_date, this.end_date);
                    _context3.next = 53;
                    break;

                  case 52:
                    if (this.lang == "fr") {
                      alert("Remplissez le champ Destination !");
                    } else {
                      alert("Fill the Destination Field !");
                    }

                  case 53:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } ////// present Confirmation alert///////////
        // present alert

      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(price, start_date, end_date) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var lang, text, alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Storage.get({
                      key: LNG_KEY
                    });

                  case 2:
                    lang = _context4.sent.value;

                    if (lang == "fr") {
                      text = "Prix Total : ";
                    } else {
                      text = "Total Price : ";
                    }

                    _context4.next = 6;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Validation!!',
                      message: '<strong>' + text + '</strong>' + price + ' F CFA',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          console.log('Confirm Okay'); ////send the data to the API

                          _this3.webservice.postReservation(_this3.token, _this3.dataToSend).subscribe(function (res) {
                            console.log(res);

                            if (res) {
                              console.log("done");

                              _this3.myAlert(0, lang);
                            }
                          }, function (error) {
                            console.log("error : \n", error);

                            _this3.myAlert(1, lang);
                          });
                        }
                      }]
                    });

                  case 6:
                    alert = _context4.sent;
                    _context4.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } //alert 2 method

      }, {
        key: "myAlert",
        value: function myAlert(id, lang) {
          if (id == 0) {
            if (lang == "fr") {
              alert("Votre Requête a été envoyée avec succès !");
            } else {
              alert("Your Request has been sent successfully !");
            } //  this.router.navigateByUrl("/dashboard");


            this.prev();
          } else {
            if (lang == "fr") {
              alert("Désolé, une erreur s'est produite, veuillez vérifier à nouveau votre saisie.");
            } else {
              alert("Sorry, an error has occurred please, check your entry again.");
            }
          }
        } ////////////////change end time

      }, {
        key: "change",
        value: function change(type) {
          ////per hour
          if (type == "hour") {
            // console.log("start : ",this.start_time,"\n type time :",typeof(this.start_time));
            var x = parseInt(this.start_time.split(":")[0]) + this.hourNbr;
            var y = parseInt(this.start_time.split(":")[1]);

            if (x <= 23 && y <= 59) {
              if (x < 10) {
                if (y < 10) {
                  this.end_time = "0" + x + ":0" + y;
                } else {
                  this.end_time = "0" + x + ":" + y;
                }
              } else {
                if (y < 10) {
                  this.end_time = "" + x + ":0" + y;
                } else {
                  this.end_time = "" + x + ":" + y;
                }
              }
            } else {
              this.hourNbr = 0;

              if (this.lang == "fr") {
                alert("Désolé, l'heure de retour Max  est :  23 Hr : 59 min ");
              } else {
                alert("Sorry, the maximum return time is: 11 : 59 PM ");
              }
            }
          } ////per day


          if (type == "day") {
            // Create new Date instance
            var date = new Date(this.start_date); // Add a day

            date.setDate(date.getDate() + 1);
            this.end_date = date.toISOString();
            this.min_retunDate = date.toISOString();
          }
        } /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////Search methods //////////////////////////////

      }, {
        key: "onCancel",
        value: function onCancel(val) {
          this.show_list = false;
          this.list_to_show = [{
            'id': '',
            'destination': '',
            'coefficient': ''
          }];
        }
      }, {
        key: "click_bar",
        value: function click_bar() {
          this.list_to_show = [{
            'id': '',
            'destination': '',
            'coefficient': ''
          }];
          this.show_list = true;
        }
      }, {
        key: "click_item",
        value: function click_item(val, id, coef) {
          //set destination
          this.destination = id; //set coef 

          this.coef = parseFloat(coef);

          for (var i = 0; i < this.list_original.length; i++) {
            if (this.list_to_show[val].destination.toUpperCase() === this.list_original[i].destination.toUpperCase()) {
              this.selected_index = i; //print the selected destination

              this.searchQuery = this.list_to_show[val].destination; // set the destinatination to be search

              this.destination_to_be_search = this.list_to_show[val];
              break;
            }
          }

          this.show_list = false;
        }
      }, {
        key: "change_query",
        value: function change_query(query) {
          var k = 0;
          this.list_to_show = [{
            'id': '',
            'destination': '',
            'coefficient': ''
          }];

          for (var i = 0; i < this.list_original.length; i++) {
            if (this.list_original[i].destination.toUpperCase().includes(query.toUpperCase())) {
              this.list_to_show[k] = this.list_original[i];
              k += 1;
            }
          }
        }
      }]);

      return ReservationPagePage;
    }();

    ReservationPagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    ReservationPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reservation-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reservation-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reservation-page/reservation-page.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reservation-page.page.scss */
      "./src/app/pages/reservation-page/reservation-page.page.scss"))["default"]]
    })], ReservationPagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-reservation-page-reservation-page-module-es5.js.map