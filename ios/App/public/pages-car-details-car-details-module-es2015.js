(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-car-details-car-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-details/car-details.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-details/car-details.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n      <ion-item>\n\n        <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n        <ion-title>{{ 'CARDETAILS.title' | translate }}</ion-title>\n\n      </ion-item>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  *ngIf=\"show\">\n\n\n        <!-- slider images -->\n\n        <ion-slides [options]=\"slideOptions\"  #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\n             <ion-slide *ngFor=\"let item of car.photo\">\n                <img [src]=\"item.image\" />\n            </ion-slide>\n        </ion-slides>\n\n        <!-- tile or designation of the car -->\n          <br>\n        <strong class=\"ion-text-center\">\n            <ion-label style=\"margin-left:5%; \"> {{car.modele.libelle}} </ion-label> \n         </strong>\n\n            <!-- Description of the car -->\n\n     <ion-card>\n     \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n                <!-- type of motor -->\n                <ion-chip >\n                  <ion-icon name=\"car\"></ion-icon>\n                  <ion-label > {{car.type_caburant}}</ion-label>\n                </ion-chip> \n                <!-- Car Color-->\n                <ion-chip >\n                  <ion-icon name=\"medal\" ></ion-icon>\n                  <ion-label  textWrap=\"true\"> {{ 'DASHBOARD.color' | translate }} {{car.couleur}} </ion-label>\n                </ion-chip> <br>\n                <!-- Number of Seats-->\n                <ion-chip >\n                  <ion-icon name=\"person\"></ion-icon>\n                  <ion-label >{{car.passager}} {{ 'CARDETAILS.seats' | translate }}</ion-label>\n                </ion-chip>\n\n                    <!-- number of baggages -->\n              <ion-chip>\n                <ion-icon name=\"briefcase\"></ion-icon>\n                <ion-label > {{car.bagage}} {{ 'CARDETAILS.baggages' | translate }} </ion-label> \n              </ion-chip> <br>\n                    <!-- Car Number-->\n              <ion-chip>\n                <ion-label > {{ 'CARDETAILS.carnumber' | translate }} {{car.immatriculation}}  </ion-label> \n              </ion-chip>\n\n          </ion-card-subtitle>\n          <ion-card-title>Description</ion-card-title>\n        </ion-card-header>\n        <ion-card-content style=\"text-align : justify \" >\n                            \n            {{car.description}}\n            \n        </ion-card-content>\n      </ion-card>\n\n\n    \n        <!-- Accessories     -->\n    \n     <ion-card>\n     \n        <ion-card-header>\n          <ion-card-title>{{ 'CARDETAILS.accessories' | translate }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n\n              <ion-grid>\n                 <!-- print each element -->\n                <ion-row *ngFor=\"let item of car.accessoire ;  index as i\">\n                   <!-- column has the name of the accessory -->\n                      <ion-col col-auto class=\"cell-class\">\n                            {{ item.libelle }}\n                      </ion-col>\n                        <!-- column 2 has the status of the accessory -->\n                      <ion-col   text-right  class=\"cell-yes\"   >\n                           <ion-icon name=\"checkmark-outline\"></ion-icon>\n                      </ion-col>\n                      <!-- <ion-col  *ngIf=\"item.status == 'yes' \" text-right  class=\"cell-yes\"   >\n                           <ion-icon name=\"checkmark-outline\"></ion-icon>\n\n                      </ion-col>\n                         column 2 has the status of the accessory -->\n                     <!--  <ion-col  *ngIf=\"item.status == 'no' \"   text-right  class=\"cell-no\"  >\n                           {{ item.status }}\n\n                      </ion-col> -->\n                </ion-row>\n              </ion-grid>\n\n        </ion-card-content>\n      </ion-card>\n\n      <!-- login to reserve or reserve if logged in  -->\n    <!-- <ion-button *ngIf=\"token==null\" expand=\"round\" class=\"center-button\">Login To Reserve</ion-button> -->\n       <!-- if the token is not null -->\n    <!-- <ion-button *ngIf=\"token!=null\" expand=\"round\" class=\"center-button\" (click)=\"goToReservation()\">Reserve Now</ion-button> -->\n\n\n\n\n\n</ion-content>\n\n<ion-footer *ngIf=\"show\" >\n  <!-- <ion-toolbar> -->\n          <!-- login to reserve or reserve if logged in  -->\n    <ion-button *ngIf=\"token==null\" expand=\"full\" (click)=\"goToLogin()\" >{{\"CARDETAILS.logintoreserve\" | translate}}</ion-button>\n       <!-- if the token is not null -->\n    <ion-button *ngIf=\"token!=null\" expand=\"full\"  (click)=\"goToReservation( car.id)\">{{\"CARDETAILS.reservenow\" | translate}}</ion-button>\n\n\n  <!-- </ion-toolbar> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/car-details/car-details-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/car-details/car-details-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CarDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsPageRoutingModule", function() { return CarDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-details.page */ "./src/app/pages/car-details/car-details.page.ts");




const routes = [
    {
        path: '',
        component: _car_details_page__WEBPACK_IMPORTED_MODULE_3__["CarDetailsPage"]
    }
];
let CarDetailsPageRoutingModule = class CarDetailsPageRoutingModule {
};
CarDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/car-details/car-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/car-details/car-details.module.ts ***!
  \*********************************************************/
/*! exports provided: CarDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsPageModule", function() { return CarDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _car_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-details-routing.module */ "./src/app/pages/car-details/car-details-routing.module.ts");
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-details.page */ "./src/app/pages/car-details/car-details.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let CarDetailsPageModule = class CarDetailsPageModule {
};
CarDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _car_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarDetailsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_car_details_page__WEBPACK_IMPORTED_MODULE_6__["CarDetailsPage"]]
    })
], CarDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/car-details/car-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/car-details/car-details.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cell-class {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n}\n\n.cell-yes {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  color: #ffa60a;\n  text-align: right;\n}\n\n.cell-no {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  margin-bottom: -1px;\n  color: red;\n  text-align: right;\n}\n\n.center-button {\n  margin-left: 25%;\n  margin-right: 17%;\n}\n\nion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-card-content {\n  color: white;\n}\n\nion-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2Nhci1kZXRhaWxzL2Nhci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyLWRldGFpbHMvY2FyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQW9CLG1CQUFBO0FDRXhCOztBRENFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQW9CLG1CQUFBO0VBQ3BCLGNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQW9CLG1CQUFBO0VBQ3BCLFVBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ01KOztBRERFO0VBRUUsbUJBQUE7QUNHSjs7QURDQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUVJLGNBQUE7QUNESjs7QURJQTtFQUVJLFlBQUE7QUNGSjs7QURLQTtFQUVFLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhci1kZXRhaWxzL2Nhci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZWxsLWNsYXNzIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrOyBcbiAgICBib3JkZXItd2lkdGg6IC4wMWVtOyBcbiAgICBib3JkZXItc3R5bGU6c29saWQ7IG1hcmdpbi1ib3R0b20gOiAtMXB4O1xuICB9XG5cbiAgLmNlbGwteWVze1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7IFxuICAgIGJvcmRlci13aWR0aDogLjAxZW07IFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgbWFyZ2luLWJvdHRvbSA6IC0xcHg7XG4gICAgY29sb3I6ICNmZmE2MGE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLmNlbGwtbm97XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjazsgXG4gICAgYm9yZGVyLXdpZHRoOiAuMDFlbTsgXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBtYXJnaW4tYm90dG9tIDogLTFweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5jZW50ZXItYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNyU7XG4gICAgXG4gIFxuICB9XG5cbiAgaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5pb24taXRlbVxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsaW9uLWJ1dHRvblxue1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbixpb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtY29udGVudFxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59XG5cbmlvbi1sYWJlbFxue1xuICBjb2xvciA6IGJsYWNrO1xufVxuIiwiLmNlbGwtY2xhc3Mge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLmNlbGwteWVzIHtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwLjAxZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGNvbG9yOiAjZmZhNjBhO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbGwtbm8ge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNyU7XG59XG5cbmlvbi1jYXJkLCBpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCwgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24sIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/car-details/car-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/car-details/car-details.page.ts ***!
  \*******************************************************/
/*! exports provided: CarDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailsPage", function() { return CarDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let CarDetailsPage = class CarDetailsPage {
    constructor(router, route, webservice) {
        this.router = router;
        this.route = route;
        this.webservice = webservice;
        //used for auomatic slider
        this.slideOptions = {
            initialSlide: 0,
            speed: 400,
        };
        //dummy images of a car
        this.myImages = [
            '../assets/images/car1.jpg',
            '../assets/images/car2.jpg',
            '../assets/images/car3.jpg',
            '../assets/images/car4.jpg',
            '../assets/images/car5.jpg'
        ];
        //my car : this var will receive the car with all its details
        this.car = {
            'modele': {
                'libelle': ''
            },
            'per_day': '',
            'per_hour': '',
            'airport': '',
            'photo': [{
                    'image': '',
                },],
            'type_caburant': '',
            'couleur': '',
            'passager': '',
            'bagage': '',
            'immatriculation': '',
            'description': '',
            'id': '',
            'accessoire ': [
                { 'libelle': ''
                },
            ],
        };
        /////////////////////////////////////////////////////
        this.show = false; //is to show page content
        //prev page
        this.page_prev = "";
    }
    ngOnInit() {
        this.webservice.presentLoading();
        this.getCurrentToken();
        this.subscription = this.route.queryParams.subscribe((data) => {
            console.log("selected ->", typeof (data.id));
            //receive the  prev page 
            this.page_prev = data.prev;
            //get the details of the car
            //receive the  prev page 
            this.page_prev = data.prev;
            //get the details of the car
            this.webservice.getCarDetails(data.id).subscribe(res => {
                this.car = res;
                console.log(res);
                // get the differents pice of the car
                this.webservice.getPriceCar(data.id).subscribe(resp => {
                    this.car.per_day = resp[0].prix;
                    this.car.per_hour = resp[1].prix;
                    this.car.airport = resp[2].prix;
                    //stop loading
                    this.webservice.stopLoading();
                    //show the list
                    this.show = true;
                }); //end get prices
            });
        });
    }
    //this is used for the auto slider
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    /////////////////////////////////////////
    //get current token
    getCurrentToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var ret = Storage.get({ key: 'accessToken' });
            this.token = (yield ret).value;
            console.log("token   ", this.token);
            //  return (await ret).value;
        });
    }
    //////////////////////////////////////////////////////////////
    ////back to home ///
    prev() {
        this.router.navigateByUrl(this.page_prev);
    }
    ////////////////////////////////////////////////////////////
    /// call the reservation page  ////////////////////////////
    goToReservation(carID) {
        // this.router.navigateByUrl("/reservation-page")
        //console.log("car id", carID);
        //call another page and make the reservation of the car
        this.router.navigate(['reservation-page'], { queryParams: { id: carID, prev: this.page_prev } });
    }
    ////////////////////////////////////////////////////////////
    /// call the login page  ////////////////////////////
    goToLogin() {
        this.router.navigateByUrl("/login");
    }
};
CarDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"] }
];
CarDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./car-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/car-details/car-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./car-details.page.scss */ "./src/app/pages/car-details/car-details.page.scss")).default]
    })
], CarDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-car-details-car-details-module-es2015.js.map