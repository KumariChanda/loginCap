function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-car-filter-car-filter-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-filter/car-filter.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-filter/car-filter.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCarFilterCarFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-item *ngIf=\"!isSearchbarOpened\">\r\n           <!-- menu icon -->\r\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n    \r\n      <!-- title -->\r\n      <ion-title *ngIf=\"!isSearchbarOpened\">{{ 'DASHBOARD.title' | translate }}</ion-title>\r\n\r\n   \r\n       <!-- search bar button -->\r\n      <ion-buttons slot=\"end\">\r\n        <!-- <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" > -->\r\n            <ion-icon name=\"search\" *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\"> </ion-icon>\r\n         <!-- </ion-button> -->\r\n      </ion-buttons>\r\n      <!-- Search Bar -->\r\n\r\n\r\n    </ion-item>\r\n\r\n<!-- Search Bar -->\r\n   <ion-searchbar color=\"primary\" *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\r\n\r\n     \r\n  </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n\r\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\r\n    \r\n        <div *ngFor=\"let photo of item.photo; let i = index \" > \r\n          \r\n          <img *ngIf=\"i== 0\"  [src]=\"photo.image\" />\r\n          \r\n        </div>\r\n        \r\n        <ion-card-header>\r\n                  <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\r\n\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- type of motor -->\r\n                <ion-chip >\r\n                  <ion-icon name=\"car\"></ion-icon>\r\n                  <ion-label >{{item.type_caburant}}</ion-label>\r\n                </ion-chip>\r\n                <!-- Car price-->\r\n                <ion-chip *ngIf=\"search_id == '50000+' || search_id == '50000-' \">\r\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\r\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA / {{ 'DASHBOARD.day' | translate }}</ion-label>\r\n                </ion-chip> \r\n\r\n                <ion-chip *ngIf=\"search_id == '5000+' || search_id == '5000-' \">\r\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\r\n                  <ion-label  textWrap=\"true\">{{item.per_hour}} F CFA / {{ 'DASHBOARD.hour' | translate }}</ion-label>\r\n                </ion-chip> \r\n                \r\n                <br>\r\n\r\n\r\n                <!-- Number of Seats-->\r\n                <ion-chip >\r\n                  <ion-icon name=\"person\"></ion-icon>\r\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\r\n                </ion-chip>\r\n                <!-- car color -->\r\n              <ion-chip>\r\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \r\n              </ion-chip>\r\n\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n                 <!-- More-->\r\n                <ion-button expand=\"block\"  (click)=\"carDetails(item.id)\"> \r\n        \r\n                  <!-- <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" > -->\r\n                      <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\r\n                      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n                  <!-- </ion-chip> -->\r\n                </ion-button> \r\n\r\n\r\n      \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/car-filter/car-filter-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/car-filter/car-filter-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CarFilterPageRoutingModule */

  /***/
  function srcAppPagesCarFilterCarFilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarFilterPageRoutingModule", function () {
      return CarFilterPageRoutingModule;
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


    var _car_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./car-filter.page */
    "./src/app/pages/car-filter/car-filter.page.ts");

    var routes = [{
      path: '',
      component: _car_filter_page__WEBPACK_IMPORTED_MODULE_3__["CarFilterPage"]
    }];

    var CarFilterPageRoutingModule = function CarFilterPageRoutingModule() {
      _classCallCheck(this, CarFilterPageRoutingModule);
    };

    CarFilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CarFilterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/car-filter/car-filter.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/car-filter/car-filter.module.ts ***!
    \*******************************************************/

  /*! exports provided: CarFilterPageModule */

  /***/
  function srcAppPagesCarFilterCarFilterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarFilterPageModule", function () {
      return CarFilterPageModule;
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


    var _car_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./car-filter-routing.module */
    "./src/app/pages/car-filter/car-filter-routing.module.ts");
    /* harmony import */


    var _car_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./car-filter.page */
    "./src/app/pages/car-filter/car-filter.page.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CarFilterPageModule = function CarFilterPageModule() {
      _classCallCheck(this, CarFilterPageModule);
    };

    CarFilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _car_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarFilterPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
      declarations: [_car_filter_page__WEBPACK_IMPORTED_MODULE_6__["CarFilterPage"]]
    })], CarFilterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/car-filter/car-filter.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/car-filter/car-filter.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCarFilterCarFilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-radio {\n  background-color: white;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nimg {\n  height: 250px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyLWZpbHRlci9EOlxcaW9uaWNhcHBcXGxvZ2luQ2FwL3NyY1xcYXBwXFxwYWdlc1xcY2FyLWZpbHRlclxcY2FyLWZpbHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nhci1maWx0ZXIvY2FyLWZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFSyx1QkFBQTtBQ0pMOztBRE9BO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURRQTtFQUVJLGNBQUE7QUNOSjs7QURTQTtFQUVJLFlBQUE7QUNQSjs7QURTQTtFQUVJLGFBQUE7RUFDQSxXQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXItZmlsdGVyL2Nhci1maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWl0ZW0saW9uLW1lbnUtYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tcmFkaW9cclxue1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2hpcCxpb24tYnV0dG9uXHJcbntcclxuICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtLCBpb24tbWVudS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLXJhZGlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/car-filter/car-filter.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/car-filter/car-filter.page.ts ***!
    \*****************************************************/

  /*! exports provided: CarFilterPage */

  /***/
  function srcAppPagesCarFilterCarFilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarFilterPage", function () {
      return CarFilterPage;
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

    var CarFilterPage = /*#__PURE__*/function () {
      function CarFilterPage(router, route, webService) {
        _classCallCheck(this, CarFilterPage);

        this.router = router;
        this.route = route;
        this.webService = webService;
        this.show = false; // used to show page content
        //////////////////////////////search bar elements for cars ////////////
        //////////////////////////////////////////////////////////////////////////////

        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData1 = [{
          "libelle": "",
          'modele': '',
          'id': 0,
          'per_day': 0,
          'per_hour': 0,
          'airport': 0,
          'color': '',
          'bagage': 0,
          'passager': 0
        }]; //////////////////

        this.filterData = [{
          "libelle": "",
          'modele': '',
          'id': 0,
          'per_day': 0,
          'per_hour': 0,
          'airport': 0,
          'color': ''
        }];
      }

      _createClass(CarFilterPage, [{
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
                    //get  cars list
                    this.webService.presentLoading(); //to start loader

                    this.subscription = this.route.queryParams.subscribe(function (data) {
                      //get the search type and search id
                      _this.search_type = data.type;
                      _this.search_id = data.id; /////////////////////Get Cars ////////////////

                      _this.webService.getVoitures().subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this2 = this;

                          var nbr, _loop, i;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  //console.log("getting voitures : \n ",res); 
                                  if (!res.detail) {
                                    if (res.length == 0) {
                                      //no  cars
                                      if (this.lang == "fr") {
                                        alert("La Liste de Vehicules est vide \n Retour à la page accueil");
                                      } else {
                                        alert("The Vehicle List is Empty \n Back to Home Page");
                                      }

                                      this.router.navigateByUrl("/dashboard");
                                      this.webService.stopLoading(); //to stop loading
                                    } else {
                                      nbr = 0;
                                      this.filterData1 = res; //console.log("search type : ", this.search_type, "search id : ", this.search_id);
                                      //get the different prices of every car

                                      _loop = function _loop(i) {
                                        // console.log("res pass : ", this.filterData1[i].passager);
                                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        ///if search type is other
                                        if (_this2.search_type == "other") {
                                          if (_this2.search_id == "5p+" && _this2.filterData1[i].passager >= 5) {
                                            _this2.filterData[nbr] = _this2.filterData1[i];
                                            nbr++;
                                          } else if (_this2.search_id == "5p-" && _this2.filterData1[i].passager < 5) {
                                            _this2.filterData[nbr] = _this2.filterData1[i];
                                            nbr++;
                                          } else if (_this2.search_id == "5b+" && _this2.filterData1[i].bagage >= 5) {
                                            _this2.filterData[nbr] = _this2.filterData1[i];
                                            nbr++;
                                          } else if (_this2.search_id == "5b-" && _this2.filterData1[i].bagage < 5) {
                                            //console.log("5b-");
                                            _this2.filterData[nbr] = _this2.filterData1[i];
                                            nbr++;
                                          } else {}

                                          if (i == _this2.filterData1.length - 1 && nbr == 0) {
                                            //no  cars
                                            if (_this2.lang == "fr") {
                                              alert(" Pas de véhicule, veuillez affiner votre recherche.");
                                            } else {
                                              alert(" No vehicle, please refine your search.");
                                            }

                                            _this2.webService.stopLoading(); //to stop loading


                                            _this2.router.navigateByUrl("/dashboard");
                                          } else if (i == _this2.filterData1.length - 1 && nbr > 0) {
                                            //no  cars
                                            _this2.show = true; // used to show page content

                                            _this2.webService.stopLoading(); //to stop loading

                                          }
                                        } //////////////////////////////////////if price/////////////////////////////////////////////////////////////////////////////////          


                                        _this2.webService.getPriceCar(_this2.filterData1[i].id).subscribe(function (resp) {
                                          // this.filterData1[i].per_day =  resp[0].prix;
                                          // this.filterData1[i].per_hour = resp[1].prix;
                                          // this.filterData1[i].airport =  resp[2].prix;
                                          for (var j = 0; j < resp.length; j++) {
                                            if (resp[j].type_location == 1) // par jour
                                              {
                                                _this2.filterData1[i].per_day = resp[j].prix;
                                              } else if (resp[j].type_location == 2) // par heure
                                              {
                                                _this2.filterData1[i].per_hour = resp[j].prix;
                                              } else if (resp[j].type_location == 3) // par airport
                                              {
                                                _this2.filterData1[i].airport = resp[j].prix;
                                              }
                                          } ///////////get cars 
                                          //get  every car


                                          if (_this2.search_type == "price") {
                                            if (_this2.search_id == "50000+" && _this2.filterData1[i].per_day >= parseInt(_this2.search_id.split("+")[0])) {
                                              //console.log("filter data per day : ",this.filterData1[i].per_day);
                                              _this2.filterData[nbr] = _this2.filterData1[i];
                                              nbr++;
                                            } else if (_this2.search_id == "50000-" && _this2.filterData1[i].per_day < parseInt(_this2.search_id.split("-")[0])) {
                                              //console.log("filter data per day : ",this.filterData1[i].per_day);
                                              _this2.filterData[nbr] = _this2.filterData1[i];
                                              nbr++;
                                            } else if (_this2.search_id == "5000+" && _this2.filterData1[i].per_hour >= parseInt(_this2.search_id.split("+")[0])) {
                                              // console.log("filter data per day : ",this.filterData1[i].per_hour);
                                              _this2.filterData[nbr] = _this2.filterData1[i];
                                              nbr++;
                                            } else if (_this2.search_id == "5000-" && _this2.filterData1[i].per_hour < parseInt(_this2.search_id.split("-")[0])) {
                                              //console.log("filter data per hour : ",this.filterData1[i].per_hour);
                                              _this2.filterData[nbr] = _this2.filterData1[i];
                                              nbr++;
                                            } else {//console.log("th ",typeof(parseInt(this.search_id.split("-")[0] )), "\n type : ",typeof(this.filterData1[i].per_day))
                                            } //console.log("data ",i," ", this.filterData[i] );


                                            if (i == _this2.filterData1.length - 1 && nbr == 0) {
                                              //no  cars
                                              if (_this2.lang == "fr") {
                                                alert("Liste Vide !!  \n Retour à la page accueil");
                                              } else {
                                                alert("Empty List !! \n Back to Home Page");
                                              }

                                              _this2.webService.stopLoading(); //to stop loading


                                              _this2.router.navigateByUrl("/dashboard");
                                            } else if (i == _this2.filterData1.length - 1 && nbr > 0) {
                                              //no  cars
                                              _this2.show = true; // used to show page content

                                              _this2.webService.stopLoading(); //to stop loading

                                            }
                                          }
                                        });
                                      };

                                      for (i = 0; i < this.filterData1.length; i++) {
                                        _loop(i);
                                      } //console.log("filter data : ",this.filterData);

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

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }); ///////////////////End Get Cars//////////////  

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
              type: this.search_type,
              prev: "/car-filter"
            }
          });
        }
      }]);

      return CarFilterPage;
    }();

    CarFilterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]
      }];
    };

    CarFilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-car-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./car-filter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-filter/car-filter.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./car-filter.page.scss */
      "./src/app/pages/car-filter/car-filter.page.scss"))["default"]]
    })], CarFilterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-car-filter-car-filter-module-es5.js.map