function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-car-details-car-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-details/car-details.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-details/car-details.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCarDetailsCarDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n      <ion-item>\r\n\r\n        <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\r\n        <ion-title>{{ 'CARDETAILS.title' | translate }}</ion-title>\r\n\r\n      </ion-item>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  *ngIf=\"show\">\r\n\r\n\r\n        <!-- slider images -->\r\n\r\n        <ion-slides [options]=\"slideOptions\"  #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\r\n             <ion-slide *ngFor=\"let item of car.photo\">\r\n                <img [src]=\"item.image\" />\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <!-- tile or designation of the car -->\r\n          <br>\r\n        <strong class=\"ion-text-center\">\r\n            <ion-label style=\"margin-left:5%; \"> {{car.modele.libelle}} </ion-label> \r\n         </strong>\r\n\r\n            <!-- Description of the car -->\r\n\r\n     <ion-card>\r\n     \r\n        <ion-card-header>\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- type of motor -->\r\n                <ion-chip >\r\n                  <ion-icon name=\"car\"></ion-icon>\r\n                  <ion-label > {{car.type_caburant}}</ion-label>\r\n                </ion-chip> \r\n                <!-- Car Color-->\r\n                <ion-chip >\r\n                  <ion-icon name=\"medal\" ></ion-icon>\r\n                  <ion-label  textWrap=\"true\"> {{ 'DASHBOARD.color' | translate }} {{car.couleur}} </ion-label>\r\n                </ion-chip> <br>\r\n                <!-- Number of Seats-->\r\n                <ion-chip >\r\n                  <ion-icon name=\"person\"></ion-icon>\r\n                  <ion-label >{{car.passager}} {{ 'CARDETAILS.seats' | translate }}</ion-label>\r\n                </ion-chip>\r\n\r\n                    <!-- number of baggages -->\r\n              <ion-chip>\r\n                <ion-icon name=\"briefcase\"></ion-icon>\r\n                <ion-label > {{car.bagage}} {{ 'CARDETAILS.baggages' | translate }} </ion-label> \r\n              </ion-chip> <br>\r\n                    <!-- Car Number-->\r\n              <ion-chip>\r\n                <ion-label > {{ 'CARDETAILS.carnumber' | translate }} {{car.immatriculation}}  </ion-label> \r\n              </ion-chip>\r\n\r\n          </ion-card-subtitle>\r\n          <ion-card-title>Description</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"text-align : justify \" >\r\n                            \r\n            {{car.description}}\r\n            \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n    \r\n        <!-- Accessories     -->\r\n    \r\n     <ion-card>\r\n     \r\n        <ion-card-header>\r\n          <ion-card-title>{{ 'CARDETAILS.accessories' | translate }}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n\r\n              <ion-grid>\r\n                 <!-- print each element -->\r\n                <ion-row *ngFor=\"let item of car.accessoire ;  index as i\">\r\n                   <!-- column has the name of the accessory -->\r\n                      <ion-col col-auto class=\"cell-class\">\r\n                            {{ item.libelle }}\r\n                      </ion-col>\r\n                        <!-- column 2 has the status of the accessory -->\r\n                      <ion-col   text-right  class=\"cell-yes\"   >\r\n                           <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                      </ion-col>\r\n                      <!-- <ion-col  *ngIf=\"item.status == 'yes' \" text-right  class=\"cell-yes\"   >\r\n                           <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n\r\n                      </ion-col>\r\n                         column 2 has the status of the accessory -->\r\n                     <!--  <ion-col  *ngIf=\"item.status == 'no' \"   text-right  class=\"cell-no\"  >\r\n                           {{ item.status }}\r\n\r\n                      </ion-col> -->\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <!-- login to reserve or reserve if logged in  -->\r\n    <!-- <ion-button *ngIf=\"token==null\" expand=\"round\" class=\"center-button\">Login To Reserve</ion-button> -->\r\n       <!-- if the token is not null -->\r\n    <!-- <ion-button *ngIf=\"token!=null\" expand=\"round\" class=\"center-button\" (click)=\"goToReservation()\">Reserve Now</ion-button> -->\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"show\" >\r\n  <!-- <ion-toolbar> -->\r\n          <!-- login to reserve or reserve if logged in  -->\r\n    <ion-button *ngIf=\"token==null\" expand=\"full\" (click)=\"goToLogin()\" >{{\"CARDETAILS.logintoreserve\" | translate}}</ion-button>\r\n       <!-- if the token is not null -->\r\n    <ion-button *ngIf=\"token!=null\" expand=\"full\"  (click)=\"goToReservation( car.id)\">{{\"CARDETAILS.reservenow\" | translate}}</ion-button>\r\n\r\n\r\n  <!-- </ion-toolbar> -->\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/car-details/car-details-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/car-details/car-details-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CarDetailsPageRoutingModule */

  /***/
  function srcAppPagesCarDetailsCarDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarDetailsPageRoutingModule", function () {
      return CarDetailsPageRoutingModule;
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


    var _car_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./car-details.page */
    "./src/app/pages/car-details/car-details.page.ts");

    var routes = [{
      path: '',
      component: _car_details_page__WEBPACK_IMPORTED_MODULE_3__["CarDetailsPage"]
    }];

    var CarDetailsPageRoutingModule = function CarDetailsPageRoutingModule() {
      _classCallCheck(this, CarDetailsPageRoutingModule);
    };

    CarDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CarDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/car-details/car-details.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/car-details/car-details.module.ts ***!
    \*********************************************************/

  /*! exports provided: CarDetailsPageModule */

  /***/
  function srcAppPagesCarDetailsCarDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarDetailsPageModule", function () {
      return CarDetailsPageModule;
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


    var _car_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./car-details-routing.module */
    "./src/app/pages/car-details/car-details-routing.module.ts");
    /* harmony import */


    var _car_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./car-details.page */
    "./src/app/pages/car-details/car-details.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CarDetailsPageModule = function CarDetailsPageModule() {
      _classCallCheck(this, CarDetailsPageModule);
    };

    CarDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _car_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarDetailsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_car_details_page__WEBPACK_IMPORTED_MODULE_6__["CarDetailsPage"]]
    })], CarDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/car-details/car-details.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/car-details/car-details.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCarDetailsCarDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cell-class {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n}\n\n.cell-yes {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  color: #ffa60a;\n  text-align: right;\n}\n\n.cell-no {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  color: red;\n  text-align: right;\n}\n\n.center-button {\n  margin-left: 25%;\n  margin-right: 17%;\n}\n\nion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-card-content {\n  color: white;\n}\n\nion-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyLWRldGFpbHMvRDpcXGlvbmljNFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxjYXItZGV0YWlsc1xcY2FyLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXItZGV0YWlscy9jYXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFBb0IsbUJBQUE7QUNFeEI7O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFBb0IsbUJBQUE7RUFDcEIsY0FBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFBb0IsbUJBQUE7RUFDcEIsVUFBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FEREU7RUFFRSxtQkFBQTtBQ0dKOztBRENBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBRUksY0FBQTtBQ0RKOztBRElBO0VBRUksWUFBQTtBQ0ZKOztBREtBO0VBRUUsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyLWRldGFpbHMvY2FyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbGwtY2xhc3Mge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjazsgXHJcbiAgICBib3JkZXItd2lkdGg6IC4wMWVtOyBcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgbWFyZ2luLWJvdHRvbSA6IC0xcHg7XHJcbiAgfVxyXG5cclxuICAuY2VsbC15ZXN7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrOyBcclxuICAgIGJvcmRlci13aWR0aDogLjAxZW07IFxyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcclxuICAgIGNvbG9yOiAjZmZhNjBhO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jZWxsLW5ve1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjazsgXHJcbiAgICBib3JkZXItd2lkdGg6IC4wMWVtOyBcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgbWFyZ2luLWJvdHRvbSA6IC0xcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jZW50ZXItYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTclO1xyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG5cclxuICBpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tY2hpcCxpb24tYnV0dG9uXHJcbntcclxuICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24saW9uLWNhcmQtdGl0bGVcclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50XHJcbntcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbFxyXG57XHJcbiAgY29sb3IgOiBibGFjaztcclxufVxyXG4iLCIuY2VsbC1jbGFzcyB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMC4wMWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4uY2VsbC15ZXMge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgY29sb3I6ICNmZmE2MGE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VsbC1ubyB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMC4wMWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRlci1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDE3JTtcbn1cblxuaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiwgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/car-details/car-details.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/car-details/car-details.page.ts ***!
    \*******************************************************/

  /*! exports provided: CarDetailsPage */

  /***/
  function srcAppPagesCarDetailsCarDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarDetailsPage", function () {
      return CarDetailsPage;
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

    var CarDetailsPage = /*#__PURE__*/function () {
      function CarDetailsPage(router, route, webservice) {
        _classCallCheck(this, CarDetailsPage);

        this.router = router;
        this.route = route;
        this.webservice = webservice; //used for auomatic slider

        this.slideOptions = {
          initialSlide: 0,
          speed: 400
        }; //dummy images of a car

        this.myImages = ['../assets/images/car1.jpg', '../assets/images/car2.jpg', '../assets/images/car3.jpg', '../assets/images/car4.jpg', '../assets/images/car5.jpg']; //my car : this var will receive the car with all its details

        this.car = {
          'modele': {
            'libelle': ''
          },
          'per_day': '',
          'per_hour': '',
          'airport': '',
          'photo': [{
            'image': ''
          }],
          'type_caburant': '',
          'couleur': '',
          'passager': '',
          'bagage': '',
          'immatriculation': '',
          'description': '',
          'id': '',
          'accessoire ': [{
            'libelle': ''
          }]
        }; /////////////////////////////////////////////////////

        this.show = false; //is to show page content
        //prev page

        this.page_prev = "";
      }

      _createClass(CarDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.webservice.presentLoading();
          this.getCurrentToken();
          this.subscription = this.route.queryParams.subscribe(function (data) {
            console.log("selected ->", typeof data.id); //receive the  prev page 

            _this.page_prev = data.prev; //get the details of the car
            //receive the  prev page 

            _this.page_prev = data.prev; //get the details of the car

            _this.webservice.getCarDetails(data.id).subscribe(function (res) {
              _this.car = res;
              console.log(res); // get the differents pice of the car

              _this.webservice.getPriceCar(data.id).subscribe(function (resp) {
                _this.car.per_day = resp[0].prix;
                _this.car.per_hour = resp[1].prix;
                _this.car.airport = resp[2].prix; //stop loading

                _this.webservice.stopLoading(); //show the list


                _this.show = true;
              }); //end get prices

            });
          });
        } //this is used for the auto slider

      }, {
        key: "slidesDidLoad",
        value: function slidesDidLoad(slides) {
          slides.startAutoplay();
        } /////////////////////////////////////////
        //get current token

      }, {
        key: "getCurrentToken",
        value: function getCurrentToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var ret;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    ret = Storage.get({
                      key: 'accessToken'
                    });
                    _context.next = 3;
                    return ret;

                  case 3:
                    this.token = _context.sent.value;
                    console.log("token   ", this.token); //  return (await ret).value;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //////////////////////////////////////////////////////////////
        ////back to home ///

      }, {
        key: "prev",
        value: function prev() {
          this.router.navigateByUrl(this.page_prev);
        } ////////////////////////////////////////////////////////////
        /// call the reservation page  ////////////////////////////

      }, {
        key: "goToReservation",
        value: function goToReservation(carID) {
          // this.router.navigateByUrl("/reservation-page")
          //console.log("car id", carID);
          //call another page and make the reservation of the car
          this.router.navigate(['reservation-page'], {
            queryParams: {
              id: carID,
              prev: this.page_prev
            }
          });
        } ////////////////////////////////////////////////////////////
        /// call the login page  ////////////////////////////

      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigateByUrl("/login");
        }
      }]);

      return CarDetailsPage;
    }();

    CarDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"]
      }];
    };

    CarDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-car-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./car-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-details/car-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./car-details.page.scss */
      "./src/app/pages/car-details/car-details.page.scss"))["default"]]
    })], CarDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-car-details-car-details-module-es5.js.map