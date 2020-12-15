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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n      <ion-item>\r\n\r\n        <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\r\n        <ion-title style=\"margin-left:15%\">{{\"DASHBOARD.trip_details\" | translate }}</ion-title>\r\n\r\n      </ion-item>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\">\r\n\r\n    <!-- Trip/voyage Details -->\r\n \r\n\r\n\r\n     <ion-card >\r\n    \r\n        <img [src]=\"filterData.photo[0]?.image\" />\r\n        <ion-card-header>\r\n                 <ion-card-title >{{filterData.modele}}</ion-card-title>\r\n\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- Reservation Type -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 120px\"> {{ \"RESERVECAR.booking_type\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\"  *ngIf=\"filterData.type_location == 3\"> {{ \"RESERVECAR.airport_pick\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"filterData.type_location == 2\"> {{ \"RESERVECAR.per_hour\" | translate }}  </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 15%;color:white;width: 150px\" *ngIf=\"filterData.type_location == 1\"> {{ \"RESERVECAR.per_day\" | translate }}   </label>\r\n                \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n              <!-- Depart -->\r\n                <ion-item  *ngIf=\"filterData.type_location == 3\">\r\n                    <label textWrap=\"true\" style=\"width: 150px\"> {{ \"RESERVECAR.departure\" | translate }} </label>\r\n                   <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{ filterData.depart }}  </label>\r\n                \r\n                    <!-- <ion-chip slot=\"end\"> Per Hour </ion-chip> -->\r\n                </ion-item>\r\n\r\n\r\n                <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_destination\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{filterData.destination}}  </label>\r\n\r\n                    <!-- <ion-chip slot=\"end\"> Daoukro </ion-chip> -->\r\n                </ion-item>\r\n\r\n              \r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_start_date\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{filterData.date_debut}} </label>\r\n                </ion-item>\r\n                \r\n                <!-- Starting time -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.start_time\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{filterData.heure_debut}} </label>\r\n\r\n                    <!-- <ion-chip slot=\"end\"> 12 : 10 </ion-chip> -->\r\n                </ion-item>\r\n               \r\n\r\n                <!-- Return date -->\r\n                <ion-item  *ngIf=\"filterData.type_location == 1\">\r\n                  <label textWrap=\"true\" style=\"width: 150px\" > {{ \"RESERVECAR.booking_end_date\" | translate }} </label>\r\n                  <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"  > {{filterData.date_fin}} </label>\r\n              \r\n                </ion-item>\r\n                \r\n                <!-- Return time -->\r\n                <ion-item  *ngIf=\"filterData.type_location !=3\">\r\n                     <label textWrap=\"true\" style=\"width: 150px\" > {{ \"DASHBOARD.return_time\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\"> {{filterData.heure_fin}} </label>\r\n\r\n                </ion-item>\r\n              \r\n\r\n\r\n                <!-- Client name -->\r\n                <ion-item>\r\n                    <label textWrap=\"true\" style=\"width: 150px\"  > {{ \"RESERVECAR.clientname\" | translate }} </label>\r\n                    <label textWrap=\"true\" style=\"margin-left: 5%;color:white;width: 150px\" > {{filterData.clientname}} </label>\r\n                    <!-- <ion-chip slot=\"end\"> Oumarou Toto </ion-chip> -->\r\n                </ion-item>\r\n\r\n           \r\n\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n        \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <!-- <ion-toolbar> -->\r\n          <!-- Start the trip  -->\r\n    <ion-button expand=\"full\" *ngIf=\"filterData.etape_location == 6\" (click)=\"start()\" >{{\"DASHBOARD.start_trip\" | translate }} </ion-button>\r\n   \r\n  <!-- </ion-toolbar> -->\r\n</ion-footer>";
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TripDetailsPageModule = function TripDetailsPageModule() {
      _classCallCheck(this, TripDetailsPageModule);
    };

    TripDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripDetailsPageRoutingModule"]],
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


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nlabel {\n  font-size: 0.89em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpdmVyL3RyaXAtZGV0YWlscy9EOlxcaW9uaWNhcHBcXGxvZ2luQ2FwL3NyY1xcYXBwXFxkcml2ZXJcXHRyaXAtZGV0YWlsc1xcdHJpcC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZHJpdmVyL3RyaXAtZGV0YWlscy90cmlwLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBRUksY0FBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKOztBRFVBO0VBRUksaUJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci90cmlwLWRldGFpbHMvdHJpcC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tYnV0dG9uXHJcbntcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XHJcblxyXG59XHJcblxyXG5pb24tY2hpcFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlXHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn1cclxubGFiZWxcclxue1xyXG4gICAgZm9udC1zaXplOjAuODllbTtcclxufVxyXG4iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44OWVtO1xufSJdfQ== */";
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

    var TripDetailsPage = /*#__PURE__*/function () {
      function TripDetailsPage(router, route, webService, alertController) {
        _classCallCheck(this, TripDetailsPage);

        this.router = router;
        this.route = route;
        this.webService = webService;
        this.alertController = alertController;
        this.show = false;
        this.logo1 = '../assets/images/logo1.jpg';
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
          "destination": 0,
          "message": "",
          "etape_location": 0,
          "optionnel": []
        };
        this.filterData = {
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
        }; //////////////////////////////search barelements
        //////////////////////////////////////

        this.isSearchbarOpened = false;
        this.term = '';
      }

      _createClass(TripDetailsPage, [{
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
                    this.subscription = this.route.queryParams.subscribe(function (data) {
                      //console.log("selected ->", typeof(data.id));
                      //receive the  prev page 
                      _this.page_prev = data.prev; //get the details of the car
                      //receive the  prev page 

                      _this.page_prev = data.prev; //present loading

                      _this.webService.presentLoading();

                      _this.webService.getDriverRide(_this.userId, _this.token).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          var _loop, i;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!res.detail) {
                                    _loop = function _loop(i) {
                                      if (data.id == res[i].id) {
                                        _this2.filterData = res[i]; //console.log("getting Ride : ",this.filterData);
                                        //call the car according to the id 

                                        _this2.webService.getCarDetails(res[i].voiture).subscribe(function (car) {
                                          //console.log(car)
                                          //pictures of car
                                          _this2.filterData.photo = car.photo; //modele

                                          _this2.filterData.modele = car.modele.libelle; //receive the res

                                          _this2.filterData = res[i];
                                          _this2.filterData.heure_debut = res[i].date_debut.split("T")[1].split(".")[0];
                                          _this2.filterData.date_debut = res[i].date_debut.split("T")[0];
                                          _this2.filterData.heure_fin = res[i].date_fin.split("T")[1].split(".")[0];
                                          _this2.filterData.date_fin = res[i].date_fin.split("T")[0];
                                          _this2.filterData.date_location = res[i].date_location.split("T")[0];
                                          _this2.filterData.destination_id = res[i].destination;
                                          _this2.filterData.depart_id = res[i].depart; //get the client name

                                          _this2.webService.getClient(res[i].client, _this2.token).subscribe(function (resp) {
                                            //console.log("client", resp);
                                            _this2.filterData.clientname = resp.first_name + " " + resp.last_name; //get destination

                                            _this2.webService.getSingleDestination(res[i].destination).subscribe(function (dest) {
                                              //console.log(dest);
                                              _this2.filterData.destination = dest.destination;

                                              if (res[i].depart > 0) {
                                                //get depart
                                                _this2.webService.getSingleDestination(res[i].depart).subscribe(function (dep) {
                                                  //console.log(dep);
                                                  _this2.filterData.depart = dep.destination; //stop loader

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
                                      }
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

                                case 1:
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
                    }); //end of subscription

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //////////////////////////////////////////////////////////////
        ////back to home ///

      }, {
        key: "prev",
        value: function prev() {
          this.router.navigateByUrl(this.page_prev);
        } //////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////Cancel ////////////////////////////////////////////////////

      }, {
        key: "start",
        value: function start() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var lang, textcancel, textok, message, myheader, alert;
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
                      textcancel = "Non ";
                      textok = "Oui ";
                      message = "Voulez-vous Débuter ce trajet? ";
                      myheader = "Validation ";
                    } else {
                      textcancel = "No ";
                      textok = "Yes ";
                      message = "Do you want to Start this Trip? ";
                      myheader = "Validation ";
                    }

                    _context3.next = 6;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: myheader,
                      message: '<strong>' + message + '</strong>',
                      buttons: [{
                        text: textcancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: textok,
                        handler: function handler() {
                          //change the location type ; started
                          _this3.filterData.etape_location = 4; //   this.DataTosend.id = this.filterData[id].id;

                          _this3.DataTosend.date_location = _this3.filterData.date_location + "T" + _this3.filterData.heure_debut + ".961Z";
                          _this3.DataTosend.date_debut = _this3.filterData.date_debut + "T" + _this3.filterData.heure_debut + ".961Z";
                          _this3.DataTosend.date_fin = _this3.filterData.date_fin + "T" + _this3.filterData.heure_fin + ".961Z";
                          _this3.DataTosend.montant = _this3.filterData.montant;
                          _this3.DataTosend.message = _this3.filterData.message;
                          _this3.DataTosend.client = _this3.filterData.client;
                          _this3.DataTosend.voiture = _this3.filterData.voiture;
                          _this3.DataTosend.type_location = _this3.filterData.type_location;
                          _this3.DataTosend.depart = _this3.filterData.depart_id;
                          _this3.DataTosend.destination = _this3.filterData.destination_id;
                          _this3.DataTosend.etape_location = 4;
                          _this3.DataTosend.optionnel = _this3.filterData.optionnel; //console.log(this.DataTosend);
                          //call the EditLocation API 

                          _this3.webService.presentLoading(); // present loader


                          _this3.webService.EditLocation(_this3.filterData.id, _this3.token, _this3.DataTosend).subscribe(function (res) {
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
        } ////////////////////////////////////////
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

            this.router.navigateByUrl("/home");
          } else {
            if (lang == "fr") {
              alert("Désolé, une erreur s'est produite.");
            } else {
              alert("Sorry, an error has occurred.");
            }
          }
        }
      }]);

      return TripDetailsPage;
    }();

    TripDetailsPage.ctorParameters = function () {
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