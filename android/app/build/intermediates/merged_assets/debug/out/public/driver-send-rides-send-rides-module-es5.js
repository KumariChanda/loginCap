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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-item *ngIf=\"!isSearchbarOpened\">\r\n\r\n           <!-- menu icon -->\r\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n      <!-- title -->\r\n      <ion-title *ngIf=\"!isSearchbarOpened\" >{{ 'DASHBOARD.my_rides' | translate }}</ion-title>\r\n\r\n   \r\n       <!-- search bar button -->\r\n       <ion-buttons slot=\"end\">\r\n          <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\r\n              <ion-icon color=\"primary\" name=\"search\"> </ion-icon>\r\n          </ion-button>\r\n      </ion-buttons>\r\n\r\n\r\n    </ion-item>\r\n\r\n<!-- Search Bar -->\r\n   <ion-searchbar *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\r\n\r\n     \r\n  </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n\r\n    \r\n<!-- Default Segment / Search for the car according to the type of reservation -->\r\n <!--   First main Search  -->\r\n\r\n    <ion-card  *ngIf=\"nbr==0\"> \r\n          \r\n        <label textWrap=\"true\" style=\"margin-bottom: 20%; margin-top: 20%;margin-left: 40%;color:white;\">  \r\n            {{\"DASHBOARD.empty_list\" | translate}}\r\n        \r\n         </label> \r\n    \r\n     </ion-card>\r\n\r\n     \r\n     \r\n\r\n     <ion-card *ngFor=\"let item of filterData | filter:term ; index as i\">\r\n       <div  *ngIf=\"item.etape_location == 5\">\r\n        <!-- <img [src]=\"item?.photo[0]?.image\" /> -->\r\n        <ion-card-header>\r\n                 <!-- <ion-card-title >{{item.modele}}</ion-card-title> -->\r\n\r\n          <ion-card-subtitle>\r\n\r\n             \r\n              <!-- Car title -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.car\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{item.modele}}  </label>\r\n     \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n              <!-- Reservation Type -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 120px\"> {{ \"RESERVECAR.booking_type\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\"  *ngIf=\"item.type_location == 3\"> {{ \"RESERVECAR.airport_pick\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"item.type_location == 2\"> {{ \"RESERVECAR.per_hour\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"item.type_location == 1\"> {{ \"RESERVECAR.per_day\" | translate }}   </label>\r\n                \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n              <!-- Depart -->\r\n                <ion-item  *ngIf=\"item.type_location == 3\">\r\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.departure\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{ item.depart }}  </label>\r\n                \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n\r\n\r\n                <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{item.destination}}  </label>\r\n\r\n                    <!-- <ion-chip slot=\"end\"> Daoukro </ion-chip> -->\r\n                </ion-item>\r\n\r\n              \r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{item.date_debut}} </label>\r\n                </ion-item>\r\n                \r\n                <!-- Starting time -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.start_time\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{item.heure_debut}} </label>\r\n\r\n                    <!-- <ion-chip slot=\"end\"> 12 : 10 </ion-chip> -->\r\n                </ion-item>\r\n               \r\n\r\n                <!-- Client name -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\"  > {{ \"RESERVECAR.clientname\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{item.clientname}} </label>\r\n                    <!-- <ion-chip slot=\"end\"> Oumarou Toto </ion-chip> -->\r\n                </ion-item>\r\n\r\n               \r\n\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n             \r\n               <!-- button View details-->\r\n             <ion-button  *ngIf=\"item.etape_location == 5 \" style=\"margin-left:30%\" (click)=\"tripDetails(i)\" >\r\n                <ion-label *ngIf=\"item.etape_location == 5 \">{{\"DASHBOARD.btn_view_details\" | translate }}</ion-label>\r\n            </ion-button>\r\n\r\n      \r\n        </ion-card-content>\r\n         \r\n     </div>\r\n\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
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
        _classCallCheck(this, SendRidesPage);

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
        this.nbr = 0;
      }

      _createClass(SendRidesPage, [{
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
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var i, _loop, _i;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (res.detail) {
                                  _context.next = 13;
                                  break;
                                }

                                this.filterData = res;
                                i = 0;

                              case 3:
                                if (!(i < res.length)) {
                                  _context.next = 10;
                                  break;
                                }

                                if (!(this.filterData[i].etape_location == 5)) {
                                  _context.next = 7;
                                  break;
                                }

                                this.nbr = this.nbr + 1;
                                return _context.abrupt("break", 10);

                              case 7:
                                i++;
                                _context.next = 3;
                                break;

                              case 10:
                                //
                                if (this.nbr > 0) {
                                  _loop = function _loop(_i) {
                                    //call the car according to the id 
                                    _this2.webService.getCarDetails(res[_i].voiture).subscribe(function (car) {
                                      // console.log(car)
                                      //pictures of car
                                      _this2.filterData[_i].photo = car.photo; //modele

                                      _this2.filterData[_i].modele = car.modele.libelle; //receive the res

                                      _this2.filterData[_i] = res[_i];
                                      _this2.filterData[_i].heure_debut = res[_i].date_debut.split("T")[1].split(".")[0];
                                      _this2.filterData[_i].date_debut = res[_i].date_debut.split("T")[0];
                                      _this2.filterData[_i].heure_fin = res[_i].date_fin.split("T")[1].split(".")[0];
                                      _this2.filterData[_i].date_fin = res[_i].date_fin.split("T")[0];
                                      _this2.filterData[_i].date_location = res[_i].date_location.split("T")[0];
                                      _this2.filterData[_i].destination_id = res[_i].destination;
                                      _this2.filterData[_i].depart_id = res[_i].depart; //get the client name

                                      _this2.webService.getClient(res[_i].client, _this2.token).subscribe(function (resp) {
                                        //console.log("client", resp);
                                        _this2.filterData[_i].clientname = resp.first_name + " " + resp.last_name; //get destination

                                        _this2.webService.getSingleDestination(res[_i].destination).subscribe(function (dest) {
                                          //console.log(dest);
                                          _this2.filterData[_i].destination = dest.destination;

                                          if (res[_i].depart > 0) {
                                            //get depart
                                            _this2.webService.getSingleDestination(res[_i].depart).subscribe(function (dep) {
                                              //console.log(dep);
                                              _this2.filterData[_i].depart = dep.destination;
                                              _this2.list_original = _this2.filterData; //stop loader

                                              _this2.show = true;

                                              _this2.webService.stopLoading();
                                            }); //end get depart

                                          } else {
                                            //stop loader
                                            _this2.show = true;

                                            _this2.webService.stopLoading();
                                          }
                                        }); //end get destination

                                      }); //end get client name

                                    });
                                  };

                                  for (_i = 0; _i < res.length; _i++) {
                                    _loop(_i);
                                  }
                                } else {
                                  this.show = true;
                                  this.webService.stopLoading();
                                }

                                _context.next = 15;
                                break;

                              case 13:
                                this.webService.stopLoading();

                                if (this.lang == "fr") {
                                  alert("Aucun Trajet disponible !! ");
                                } else {
                                  alert("No Ride available !!  ");
                                }

                              case 15:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      _this.webService.stopLoading();

                      if (_this.lang == "fr") {
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
        //////////////////////////////////////////////////////
        //this method is used to print the details of a selected trip //////////////

      }, {
        key: "tripDetails",
        value: function tripDetails(id) {
          // console.log("selected : -> ", this.filterData[id].id);
          //call another page and fetch the details of the car
          //this.router.navigateByUrl("/trip-details")
          //call another page and fetch the details of the car
          this.router.navigate(['trip-details'], {
            queryParams: {
              id: this.filterData[id].id,
              prev: "/send-rides"
            }
          });
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