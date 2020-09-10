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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n       <ion-item>\r\n        <ion-buttons slot=\"start\"  *ngIf=\"reservDetails==null\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n      <!-- prev icon -->\r\n           <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" *ngIf=\"reservDetails!=null\" ></ion-icon>\r\n        <ion-title> {{\"DASHBOARD.my_bookings\" | translate}} </ion-title>\r\n    </ion-item> \r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\">\r\n\r\n    <!-- --------------------- if  reservDetails== null----------------------------------------------------------------- -->\r\n       \r\n     <div *ngIf=\"reservDetails==null\">\r\n        <!-- Start reservation -->\r\n       <ion-card *ngFor=\"let item of filterData ; index as i\" >\r\n          \r\n          \r\n        <img [src]=\"item?.photo_car[0]?.image\" />\r\n\r\n            <ion-card-header>\r\n                    <ion-card-title >{{item.modele}}</ion-card-title>\r\n\r\n              <ion-card-subtitle>\r\n\r\n                  \r\n               <!-- Status -->\r\n                <ion-item>\r\n                    <ion-label > Status : </ion-label>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 1 && lang=='fr'\" style=\"color:orange\"> En cours de traitement </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 1 && lang=='en'\" style=\"color:orange\"> Being processed </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 2 && lang=='fr'\" style=\"color:purple\"> Confirmée </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 2 && lang=='en'\" style=\"color:purple\"> Confirmed </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 3 && lang=='fr'\" style=\"color:red\"> Rejetée pour défaut paiement</ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 3 && lang=='en'\" style=\"color:red\"> Rejected for default of payment </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 4 && lang=='fr'\" style=\"color:blue\"> Réservation Débutée </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 4 && lang=='en'\" style=\"color:blue\"> Reservation started </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 5 && lang=='fr'\" style=\"color:green\"> Réservation terminée </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 5 && lang=='en'\" style=\"color:green\">Reservation completed </ion-chip>\r\n                   \r\n                </ion-item>\r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <ion-label > Start Date : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{item.date_debut}} </ion-chip>\r\n                </ion-item>\r\n                  <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <ion-label > Destination : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{item.destination}} </ion-chip>\r\n                </ion-item>\r\n\r\n                \r\n\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n\r\n            <ion-card-content>\r\n                                        \r\n                   <!-- button View details-->\r\n                  <ion-button  style=\"margin-left:30%\" (click) = \"viewDetails(i)\" >\r\n                      <ion-label >View details</ion-label>\r\n                  </ion-button>\r\n          \r\n          \r\n            </ion-card-content>\r\n      </ion-card>\r\n        <!-- Stop Reservation -->\r\n      </div>  \r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n    <!-- --------------------- if  reservDetails!= null----------------------------------------------------------------- -->\r\n       \r\n     <div *ngIf=\"reservDetails!=null\">\r\n        <!-- Start reservation -->\r\n       <ion-card *ngIf=\"reservDetails \" >\r\n          \r\n          \r\n        <img [src]=\"reservDetails?.photo_car[0]?.image\" />\r\n\r\n            <ion-card-header>\r\n                    <ion-card-title >{{reservDetails.modele}}</ion-card-title>\r\n\r\n              <ion-card-subtitle>\r\n\r\n                  \r\n               <!-- Status -->\r\n                <ion-item>\r\n                    <ion-label > Status : </ion-label>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 1 && lang=='fr'\" style=\"color:orange\"> En cours de traitement </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 1 && lang=='en'\" style=\"color:orange\"> Being processed </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 2 && lang=='fr'\" style=\"color:purple\"> Confirmée </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 2 && lang=='en'\" style=\"color:purple\"> Confirmed </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 3 && lang=='fr'\" style=\"color:red\"> Rejetée pour défaut paiement</ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 3 && lang=='en'\" style=\"color:red\"> Rejected for default of payment </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 4 && lang=='fr'\" style=\"color:blue\"> Réservation Débutée </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 4 && lang=='en'\" style=\"color:blue\"> Reservation started </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 5 && lang=='fr'\" style=\"color:green\"> Réservation terminée </ion-chip>\r\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 5 && lang=='en'\" style=\"color:green\">Reservation completed </ion-chip>\r\n                   \r\n                </ion-item>\r\n               \r\n                <!-- Location date -->\r\n                <ion-item>\r\n                    <ion-label > Booking Date : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{reservDetails.date_location}} </ion-chip>\r\n                </ion-item>\r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <ion-label > Start Date : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{reservDetails.date_debut}} </ion-chip>\r\n                </ion-item>\r\n                <!-- Return date -->\r\n                <ion-item>\r\n                    <ion-label > Return Date : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{reservDetails.date_fin}} </ion-chip>\r\n                </ion-item>\r\n                  <!-- Destination -->\r\n            \r\n               <ion-item>\r\n                    <ion-label > Destination : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{reservDetails.destination}} </ion-chip>\r\n                </ion-item>\r\n                  <!-- Price -->\r\n            \r\n               <ion-item>\r\n                    <ion-label > Montant : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{reservDetails.montant}} F CFA </ion-chip>\r\n                </ion-item>\r\n                  <!-- your comment/ message -->\r\n            \r\n               <ion-item>\r\n                    <ion-label > Your Message : </ion-label>\r\n                </ion-item> \r\n    \r\n                <ion-label style=\"color:white;margin-right:10%; margin-left:7%; text-align:justify;\">\r\n                   {{reservDetails.commentaire_client}}  \r\n                </ion-label>\r\n\r\n                \r\n\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n\r\n            <ion-card-content>\r\n                                        \r\n                  \r\n            </ion-card-content>\r\n      </ion-card>\r\n        <!-- Stop Reservation -->\r\n      </div>  \r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvRDpcXGlvbmljNFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxteS1ib29raW5nc1xcbXktYm9va2luZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1ib29raW5ncy9teS1ib29raW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFFSSxjQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1ib29raW5ncy9teS1ib29raW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgY29sb3I6IGJsYWNrOyBcclxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xyXG5cclxufVxyXG5cclxuaW9uLWNoaXBcclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
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

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var MyBookingsPage = /*#__PURE__*/function () {
      function MyBookingsPage(webService, router) {
        _classCallCheck(this, MyBookingsPage);

        this.webService = webService;
        this.router = router;
        this.show = false;
        this.reservDetails = null;
        this.filterData = [{
          "id": 0,
          "date_location": "",
          "date_debut": "",
          "date_fin": "",
          "montant": 0,
          "note_client": 0,
          "commentaire_client": null,
          "note_chauffeur": 0,
          "rapport_chauffeur": "",
          "client": 0,
          "chauffeur": 0,
          "voiture": 0,
          "type_location": 0,
          "destination": "",
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


                          _this.show = true;

                          _this.webService.stopLoading();

                          _this.router.navigateByUrl("/dashboard");
                        } else {
                          var _loop = function _loop(i) {
                            //receive the res
                            _this.filterData[i] = res[i];
                            _this.filterData[i].date_debut = res[i].date_debut.split("T")[0]; //call the car according to the id 

                            _this.webService.getCarDetails(res[i].voiture).subscribe(function (car) {
                              console.log(car); //pictures of car

                              _this.filterData[i].photo_car = car.photo; //modele

                              _this.filterData[i].modele = car.modele.libelle; //get destination

                              _this.webService.getSingleDestination(res[i].destination).subscribe(function (dest) {
                                console.log(dest);
                                _this.filterData[i].destination = dest.destination;
                              }); //end get destination
                              //stop loader


                              _this.show = true;

                              _this.webService.stopLoading();
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
          this.reservDetails = this.filterData[i];
          this.reservDetails.date_location = this.filterData[i].date_location.split("T")[0];
          this.reservDetails.date_debut = this.filterData[i].date_debut.split(".")[0];
          this.reservDetails.date_fin = this.filterData[i].date_fin.split(".")[0];
          console.log(this.reservDetails);
        }
      }]);

      return MyBookingsPage;
    }();

    MyBookingsPage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
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