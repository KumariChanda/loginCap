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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n       <ion-item>\n        <ion-buttons slot=\"start\"  *ngIf=\"reservDetails==null\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n      <!-- prev icon -->\n           <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" *ngIf=\"reservDetails!=null\" ></ion-icon>\n        <ion-title> {{\"DASHBOARD.my_bookings\" | translate}} </ion-title>\n    </ion-item> \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\">\n\n    <!-- --------------------- if  reservDetails== null----------------------------------------------------------------- -->\n       \n     <div *ngIf=\"reservDetails==null\">\n        <!-- Start reservation -->\n       <ion-card *ngFor=\"let item of filterData ; index as i\" >\n          \n          \n        <img [src]=\"item?.photo_car[0]?.image\" />\n\n            <ion-card-header>\n                    <ion-card-title >{{item.modele}}</ion-card-title>\n\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <ion-item>\n                    <ion-label > Status : </ion-label>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 1 && lang=='fr'\" style=\"color:orange\"> En cours de traitement </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 1 && lang=='en'\" style=\"color:orange\"> Being processed </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 2 && lang=='fr'\" style=\"color:purple\"> Confirmée </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 2 && lang=='en'\" style=\"color:purple\"> Confirmed </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 3 && lang=='fr'\" style=\"color:red\"> Rejetée pour défaut paiement</ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 3 && lang=='en'\" style=\"color:red\"> Rejected for default of payment </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 4 && lang=='fr'\" style=\"color:blue\"> Réservation Débutée </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 4 && lang=='en'\" style=\"color:blue\"> Reservation started </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 5 && lang=='fr'\" style=\"color:green\"> Réservation terminée </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"item.etape_location == 5 && lang=='en'\" style=\"color:green\">Reservation completed </ion-chip>\n                   \n                </ion-item>\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > Start Date : </ion-label>\n                    <ion-chip slot=\"end\"> {{item.date_debut}} </ion-chip>\n                </ion-item>\n                  <!-- Destination -->\n            \n               <ion-item>\n                    <ion-label > Destination : </ion-label>\n                    <ion-chip slot=\"end\"> {{item.destination}} </ion-chip>\n                </ion-item>\n\n                \n\n              </ion-card-subtitle>\n            </ion-card-header>\n\n\n            <ion-card-content>\n                                        \n                   <!-- button View details-->\n                  <ion-button  style=\"margin-left:30%\" (click) = \"viewDetails(i)\" >\n                      <ion-label >View details</ion-label>\n                  </ion-button>\n          \n          \n            </ion-card-content>\n      </ion-card>\n        <!-- Stop Reservation -->\n      </div>  \n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n    <!-- --------------------- if  reservDetails!= null----------------------------------------------------------------- -->\n       \n     <div *ngIf=\"reservDetails!=null\">\n        <!-- Start reservation -->\n       <ion-card *ngIf=\"reservDetails \" >\n          \n          \n        <img [src]=\"reservDetails?.photo_car[0]?.image\" />\n\n            <ion-card-header>\n                    <ion-card-title >{{reservDetails.modele}}</ion-card-title>\n\n              <ion-card-subtitle>\n\n                  \n               <!-- Status -->\n                <ion-item>\n                    <ion-label > Status : </ion-label>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 1 && lang=='fr'\" style=\"color:orange\"> En cours de traitement </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 1 && lang=='en'\" style=\"color:orange\"> Being processed </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 2 && lang=='fr'\" style=\"color:purple\"> Confirmée </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 2 && lang=='en'\" style=\"color:purple\"> Confirmed </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 3 && lang=='fr'\" style=\"color:red\"> Rejetée pour défaut paiement</ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 3 && lang=='en'\" style=\"color:red\"> Rejected for default of payment </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 4 && lang=='fr'\" style=\"color:blue\"> Réservation Débutée </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 4 && lang=='en'\" style=\"color:blue\"> Reservation started </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 5 && lang=='fr'\" style=\"color:green\"> Réservation terminée </ion-chip>\n                    <ion-chip slot=\"end\" *ngIf=\"reservDetails.etape_location == 5 && lang=='en'\" style=\"color:green\">Reservation completed </ion-chip>\n                   \n                </ion-item>\n               \n                <!-- Location date -->\n                <ion-item>\n                    <ion-label > Booking Date : </ion-label>\n                    <ion-chip slot=\"end\"> {{reservDetails.date_location}} </ion-chip>\n                </ion-item>\n                <!-- Starting date -->\n                <ion-item>\n                    <ion-label > Start Date : </ion-label>\n                    <ion-chip slot=\"end\"> {{reservDetails.date_debut}} </ion-chip>\n                </ion-item>\n                <!-- Return date -->\n                <ion-item>\n                    <ion-label > Return Date : </ion-label>\n                    <ion-chip slot=\"end\"> {{reservDetails.date_fin}} </ion-chip>\n                </ion-item>\n                  <!-- Destination -->\n            \n               <ion-item>\n                    <ion-label > Destination : </ion-label>\n                    <ion-chip slot=\"end\"> {{reservDetails.destination}} </ion-chip>\n                </ion-item>\n                  <!-- Price -->\n            \n               <ion-item>\n                    <ion-label > Montant : </ion-label>\n                    <ion-chip slot=\"end\"> {{reservDetails.montant}} F CFA </ion-chip>\n                </ion-item>\n                  <!-- your comment/ message -->\n            \n               <ion-item>\n                    <ion-label > Your Message : </ion-label>\n                </ion-item> \n    \n                <ion-label style=\"color:white;margin-right:10%; margin-left:7%; text-align:justify;\">\n                   {{reservDetails.commentaire_client}}  \n                </ion-label>\n\n                \n\n              </ion-card-subtitle>\n            </ion-card-header>\n\n\n            <ion-card-content>\n                                        \n                  \n            </ion-card-content>\n      </ion-card>\n        <!-- Stop Reservation -->\n      </div>  \n    <!-- -------------------------------------------------------------------------------------- -->\n\n\n\n\n\n</ion-content>\n";
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


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL215LWJvb2tpbmdzL215LWJvb2tpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvbXktYm9va2luZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBRUksY0FBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktYm9va2luZ3MvbXktYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uXG57XG4gIGNvbG9yOiBibGFjazsgXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XG5cbn1cblxuaW9uLWNoaXBcbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
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


                          _this.webService.stopLoading();

                          _this.router.navigate(["/dashboard"]);
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