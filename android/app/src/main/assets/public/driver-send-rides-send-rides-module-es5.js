function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-send-rides-send-rides-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-rides/send-rides.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-rides/send-rides.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDriverSendRidesSendRidesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-item *ngIf=\"!isSearchbarOpened\">\n\n           <!-- menu icon -->\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n      <!-- title -->\n      <ion-title *ngIf=\"!isSearchbarOpened\" >{{ 'DASHBOARD.my_rides' | translate }}</ion-title>\n\n   \n       <!-- search bar button -->\n       <ion-buttons slot=\"end\">\n          <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\n              <ion-icon color=\"primary\" name=\"search\"> </ion-icon>\n          </ion-button>\n      </ion-buttons>\n\n\n    </ion-item>\n\n<!-- Search Bar -->\n   <ion-searchbar *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\n\n     \n  </ion-toolbar>\n    \n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n\n\n    \n<!-- Default Segment / Search for the car according to the type of reservation -->\n <!--   First main Search  -->\n\n    <ion-card  *ngIf=\"nbr==0\"> \n          \n        <label textWrap=\"true\" style=\"margin-bottom: 20%; margin-top: 20%;margin-left: 40%;color:white;\">  \n            {{\"DASHBOARD.empty_list\" | translate}}\n        \n         </label> \n    \n     </ion-card>\n\n     \n     \n\n     <ion-card *ngFor=\"let item of filterData | filter:term ; index as i\">\n       <div  *ngIf=\"item.etape_location == 5\">\n        <!-- <img [src]=\"item?.photo[0]?.image\" /> -->\n        <ion-card-header>\n                 <!-- <ion-card-title >{{item.modele}}</ion-card-title> -->\n\n          <ion-card-subtitle>\n\n             \n              <!-- Car title -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.car\" | translate }} </label>\n                   <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{item.modele}}  </label>\n     \n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\n                </ion-item>\n              <!-- Reservation Type -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 120px\"> {{ \"RESERVECAR.booking_type\" | translate }} </label>\n                   <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\"  *ngIf=\"item.type_location == 3\"> {{ \"RESERVECAR.airport_pick\" | translate }}  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"item.type_location == 2\"> {{ \"RESERVECAR.per_hour\" | translate }}  </label>\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"item.type_location == 1\"> {{ \"RESERVECAR.per_day\" | translate }}   </label>\n                \n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\n                </ion-item>\n              <!-- Depart -->\n                <ion-item  *ngIf=\"item.type_location == 3\">\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.departure\" | translate }} </label>\n                   <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{ item.depart }}  </label>\n                \n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\n                </ion-item>\n\n\n                <!-- Destination -->\n            \n               <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{item.destination}}  </label>\n\n                    <!-- <ion-chip slot=\"end\"> Daoukro </ion-chip> -->\n                </ion-item>\n\n              \n                <!-- Starting date -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{item.date_debut}} </label>\n                </ion-item>\n                \n                <!-- Starting time -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.start_time\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{item.heure_debut}} </label>\n\n                    <!-- <ion-chip slot=\"end\"> 12 : 10 </ion-chip> -->\n                </ion-item>\n               \n\n                <!-- Client name -->\n                <ion-item>\n                    <label textWrap=\"true\" style=\"width: 150px\"  > {{ \"RESERVECAR.clientname\" | translate }} </label>\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{item.clientname}} </label>\n                    <!-- <ion-chip slot=\"end\"> Oumarou Toto </ion-chip> -->\n                </ion-item>\n\n               \n\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n                        \n               <!-- button view more and start the trip-->\n             <ion-button  *ngIf=\"item.etape_location == 2 \" style=\"margin-left:18%\" (click)=\"tripDetails(i)\" >\n                <ion-label>{{\"DASHBOARD.start_trip\" | translate }}</ion-label>\n               \n            </ion-button>\n               <!-- button end the trip -->\n             <ion-button  *ngIf=\"item.etape_location == 4 \" style=\"margin-left:18%\"  >\n                <ion-label > {{\"DASHBOARD.end_trip\" | translate }}</ion-label>\n            </ion-button>\n               <!-- button View details-->\n             <ion-button  *ngIf=\"item.etape_location == 5 \" style=\"margin-left:30%\"  >\n                <ion-label *ngIf=\"item.etape_location == 5 \">{{\"DASHBOARD.btn_view_details\" | translate }}</ion-label>\n            </ion-button>\n\n      \n        </ion-card-content>\n         \n     </div>\n\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/driver/send-rides/send-rides-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/driver/send-rides/send-rides-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: SendRidesPageRoutingModule */

  /***/
  function srcAppDriverSendRidesSendRidesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendRidesPageRoutingModule", function () {
      return SendRidesPageRoutingModule;
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


    var _send_rides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./send-rides.page */
    "./src/app/driver/send-rides/send-rides.page.ts");

    var routes = [{
      path: '',
      component: _send_rides_page__WEBPACK_IMPORTED_MODULE_3__["SendRidesPage"]
    }];

    var SendRidesPageRoutingModule = function SendRidesPageRoutingModule() {
      _classCallCheck(this, SendRidesPageRoutingModule);
    };

    SendRidesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendRidesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/driver/send-rides/send-rides.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/driver/send-rides/send-rides.module.ts ***!
    \********************************************************/

  /*! exports provided: SendRidesPageModule */

  /***/
  function srcAppDriverSendRidesSendRidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendRidesPageModule", function () {
      return SendRidesPageModule;
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


    var _send_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./send-rides-routing.module */
    "./src/app/driver/send-rides/send-rides-routing.module.ts");
    /* harmony import */


    var _send_rides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./send-rides.page */
    "./src/app/driver/send-rides/send-rides.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    var SendRidesPageModule = function SendRidesPageModule() {
      _classCallCheck(this, SendRidesPageModule);
    };

    SendRidesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"], _send_rides_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendRidesPageRoutingModule"]],
      declarations: [_send_rides_page__WEBPACK_IMPORTED_MODULE_6__["SendRidesPage"]]
    })], SendRidesPageModule);
    /***/
  },

  /***/
  "./src/app/driver/send-rides/send-rides.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/driver/send-rides/send-rides.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDriverSendRidesSendRidesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nlabel {\n  font-size: 0.89em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpdmVyL3NlbmQtcmlkZXMvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxcZHJpdmVyXFxzZW5kLXJpZGVzXFxzZW5kLXJpZGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZHJpdmVyL3NlbmQtcmlkZXMvc2VuZC1yaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFFSSxjQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUko7O0FEV0E7RUFFSSxpQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvZHJpdmVyL3NlbmQtcmlkZXMvc2VuZC1yaWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgY29sb3I6IGJsYWNrOyBcclxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xyXG5cclxufVxyXG5cclxuaW9uLWNoaXBcclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn1cclxuXHJcbmxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTowLjg5ZW07XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg5ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/driver/send-rides/send-rides.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/driver/send-rides/send-rides.page.ts ***!
    \******************************************************/

  /*! exports provided: SendRidesPage */

  /***/
  function srcAppDriverSendRidesSendRidesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendRidesPage", function () {
      return SendRidesPage;
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
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var SendRidesPage = /*#__PURE__*/function () {
      function SendRidesPage(route, router, webService) {
        var _this = this;

        _classCallCheck(this, SendRidesPage);

        //language
        // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.route = route;
        this.router = router;
        this.webService = webService;
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
          "clientname": "",
          "chauffeur": 0,
          "voiture": 0,
          "type_location": 0,
          "depart": 0,
          "depart_id": 0,
          "destination": 0,
          "destination_id": 0,
          "message": "",
          "photo": [{
            "image": ""
          }],
          "modele": "",
          "etape_location": 0,
          "optionnel": []
        }]; ///////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////// data for destination //////////////////////////////////////////////////

        this.rent_type = "hour";
        this.list_original = [];
        this.list_to_show = [];
        this.selected_index = -1;
        this.show_list = false;
        this.show = false;
        this.nbr = 0; // date

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

      _createClass(SendRidesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Storage.get({
                      key: 'accessToken'
                    });

                  case 2:
                    this.token = _context2.sent.value;
                    _context2.t0 = JSON;
                    _context2.next = 6;
                    return Storage.get({
                      key: "user_infos"
                    });

                  case 6:
                    _context2.t1 = _context2.sent.value;
                    this.userId = _context2.t0.parse.call(_context2.t0, _context2.t1).id;
                    _context2.next = 10;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 10:
                    this.lang = _context2.sent.value;
                    //present loading
                    this.webService.presentLoading();
                    this.webService.getDriverRide(this.userId, this.token).subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this3 = this;

                        var _loop, i;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log("getting Rides : ", res);

                                if (!res.detail) {
                                  this.filterData = res;

                                  _loop = function _loop(i) {
                                    if (_this3.filterData[i].etape_location == 5) {
                                      _this3.nbr = _this3.nbr + 1;
                                    } //call the car according to the id 


                                    _this3.webService.getCarDetails(res[i].voiture).subscribe(function (car) {
                                      console.log(car); //pictures of car

                                      _this3.filterData[i].photo = car.photo; //modele

                                      _this3.filterData[i].modele = car.modele.libelle; //receive the res

                                      _this3.filterData[i] = res[i];
                                      _this3.filterData[i].heure_debut = res[i].date_debut.split("T")[1].split(".")[0];
                                      _this3.filterData[i].date_debut = res[i].date_debut.split("T")[0];
                                      _this3.filterData[i].heure_fin = res[i].date_fin.split("T")[1].split(".")[0];
                                      _this3.filterData[i].date_fin = res[i].date_fin.split("T")[0];
                                      _this3.filterData[i].date_location = res[i].date_location.split("T")[0];
                                      _this3.filterData[i].destination_id = res[i].destination;
                                      _this3.filterData[i].depart_id = res[i].depart; //get the client name

                                      _this3.webService.getClient(res[i].client, _this3.token).subscribe(function (resp) {
                                        console.log("client", resp);
                                        _this3.filterData[i].clientname = resp.first_name + " " + resp.last_name; //get destination

                                        _this3.webService.getSingleDestination(res[i].destination).subscribe(function (dest) {
                                          console.log(dest);
                                          _this3.filterData[i].destination = dest.destination;

                                          if (res[i].depart > 0) {
                                            //get depart
                                            _this3.webService.getSingleDestination(res[i].depart).subscribe(function (dep) {
                                              console.log(dep);
                                              _this3.filterData[i].depart = dep.destination;
                                              _this3.list_original = _this3.filterData; //stop loader

                                              _this3.show = true;

                                              _this3.webService.stopLoading();
                                            }); //end get depart

                                          }
                                        }); //end get destination

                                      }); //end get client name

                                    });
                                  };

                                  for (i = 0; i < res.length; i++) {
                                    _loop(i);
                                  }
                                } else {
                                  this.webService.stopLoading();

                                  if (this.lang == "fr") {
                                    alert("Aucun Trajet disponible !! ");
                                  } else {
                                    alert("No Ride available !!  ");
                                  }
                                }

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      _this2.webService.stopLoading();

                      if (_this2.lang == "fr") {
                        alert("Erreur Serveur !! ");
                      } else {
                        alert("Server Error!! ");
                      }
                    });

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } ///////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////
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
        value: function tripDetails(id) {
          console.log("selected : -> ", this.filterData[id].id); //call another page and fetch the details of the car
          //this.router.navigateByUrl("/trip-details")
          //call another page and fetch the details of the car

          this.router.navigate(['trip-details'], {
            queryParams: {
              id: this.filterData[id].id,
              prev: "/home"
            }
          });
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

      return SendRidesPage;
    }();

    SendRidesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"]
      }];
    };

    SendRidesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-rides',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./send-rides.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-rides/send-rides.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./send-rides.page.scss */
      "./src/app/driver/send-rides/send-rides.page.scss"))["default"]]
    })], SendRidesPage);
    /***/
  }
}]);
//# sourceMappingURL=driver-send-rides-send-rides-module-es5.js.map