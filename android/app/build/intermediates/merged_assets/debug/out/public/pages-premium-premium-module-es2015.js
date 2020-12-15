(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-premium-premium-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-item *ngIf=\"!isSearchbarOpened\">\r\n\r\n           <!-- menu icon -->\r\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n      <!-- title -->\r\n      <ion-title *ngIf=\"!isSearchbarOpened\">{{ 'DASHBOARD.premium_class' | translate }}</ion-title>\r\n\r\n   \r\n       <!-- search bar button -->\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\r\n            <ion-icon color=\"primary\" name=\"search\" *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\"> </ion-icon>\r\n         </ion-button>\r\n      </ion-buttons>\r\n      <!-- Search Bar -->\r\n\r\n\r\n    </ion-item>\r\n\r\n<!-- Search Bar -->\r\n   <ion-searchbar  *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\r\n\r\n     \r\n  </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content  *ngIf=\"show\"  >\r\n\r\n\r\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\r\n    \r\n        <div *ngFor=\"let photo of item.photo; let i = index \" > \r\n          \r\n          <img *ngIf=\"i== 0\"    [src]=\"src_link + photo.image\"/>\r\n          \r\n        </div>\r\n        \r\n        <ion-card-header>\r\n                  <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\r\n\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- type of motor -->\r\n                <ion-chip >\r\n                  <ion-icon name=\"car\"></ion-icon>\r\n                  <ion-label >{{item.type_caburant}}</ion-label>\r\n                </ion-chip>\r\n                <!-- Car price-->\r\n                <ion-chip >\r\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\r\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA/ {{ 'DASHBOARD.day' | translate }}</ion-label>\r\n                </ion-chip> <br>\r\n                <!-- Number of Seats-->\r\n                <ion-chip >\r\n                  <ion-icon name=\"person\"></ion-icon>\r\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\r\n                </ion-chip>\r\n                <!-- car color -->\r\n              <ion-chip>\r\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \r\n              </ion-chip>\r\n\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n                 <!-- More-->\r\n                <ion-button expand=\"block\"  (click)=\"carDetails(item.id)\"> \r\n        \r\n                  <!-- <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" > -->\r\n                      <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\r\n                      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n                  <!-- </ion-chip> -->\r\n                </ion-button> \r\n\r\n\r\n      \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/premium/premium-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/premium/premium-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PremiumPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPageRoutingModule", function() { return PremiumPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _premium_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./premium.page */ "./src/app/pages/premium/premium.page.ts");




const routes = [
    {
        path: '',
        component: _premium_page__WEBPACK_IMPORTED_MODULE_3__["PremiumPage"]
    }
];
let PremiumPageRoutingModule = class PremiumPageRoutingModule {
};
PremiumPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PremiumPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/premium/premium.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/premium/premium.module.ts ***!
  \*************************************************/
/*! exports provided: PremiumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPageModule", function() { return PremiumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _premium_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./premium-routing.module */ "./src/app/pages/premium/premium-routing.module.ts");
/* harmony import */ var _premium_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premium.page */ "./src/app/pages/premium/premium.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");









let PremiumPageModule = class PremiumPageModule {
};
PremiumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _premium_routing_module__WEBPACK_IMPORTED_MODULE_5__["PremiumPageRoutingModule"]
        ],
        declarations: [_premium_page__WEBPACK_IMPORTED_MODULE_6__["PremiumPage"]]
    })
], PremiumPageModule);



/***/ }),

/***/ "./src/app/pages/premium/premium.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/premium/premium.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nimg {\n  height: 250px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlbWl1bS9EOlxcaW9uaWNhcHBcXGxvZ2luQ2FwL3NyY1xcYXBwXFxwYWdlc1xccHJlbWl1bVxccHJlbWl1bS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZW1pdW0vcHJlbWl1bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FEUUE7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBRUksY0FBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKOztBRFVBO0VBRUksYUFBQTtFQUNBLFdBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZW1pdW0vcHJlbWl1bS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuXHJcblxyXG5pb24tY2hpcCxpb24tYnV0dG9uXHJcbntcclxuICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/premium/premium.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/premium/premium.page.ts ***!
  \***********************************************/
/*! exports provided: PremiumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumPage", function() { return PremiumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let PremiumPage = class PremiumPage {
    constructor(route, router, webService) {
        this.route = route;
        this.router = router;
        this.webService = webService;
        this.show = false;
        this.emptylist = true;
        //////////////////////////////search bar elements for cars ////////////
        //////////////////////////////////////////////////////////////////////////////
        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [
            {
                'modele': '',
                'id': '',
                'per_day': '',
                'per_hour': '',
                'airport': ''
            }
        ];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //basic link
            this.src_link = this.webService.base_url;
            //console.log(this.src_link);
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            //get Business class cars list
            this.webService.presentLoading(); //to start loader
            this.webService.getCarClass(1).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log("getting business voitures : \n ",res); 
                if (!res.detail) {
                    if (res.length == 0) {
                        //no  cars
                        if (this.lang == "fr") {
                            alert(" Pas de véhicule, veuillez affiner votre recherche.");
                        }
                        else {
                            alert(" No vehicle, please refine your search.");
                        }
                        this.router.navigateByUrl("/dashboard");
                        this.webService.stopLoading(); //to stop loading
                    }
                    else {
                        var index = 0;
                        for (let i = 0; i < res.length; i++) {
                            if (res[i].modeles.length > 0) {
                                this.emptylist = false;
                            }
                            // console.log("class ",i)
                            for (let j = 0; j < res[i].modeles.length; j++) {
                                // console.log("Modele ",i,j)
                                for (let k = 0; k < res[i].modeles[j].voitures.length; k++) {
                                    // console.log("car ",i,j,k)
                                    //console.log(" voitures : \n ",res[i].modeles[j].voitures[k]);
                                    this.filterData[index] = res[i].modeles[j].voitures[k];
                                    index = index + 1;
                                }
                            }
                            // console.log("business voitures : \n ",res.modeles.voitures);
                        }
                        //console.log(this.filterData);
                        //get the different prices of every car
                        for (let i = 0; i < this.filterData.length; i++) {
                            this.webService.getPriceCar(this.filterData[i].id).subscribe(resp => {
                                this.filterData[i].per_day = resp[0].prix;
                                this.filterData[i].per_hour = resp[1].prix;
                                this.filterData[i].airport = resp[2].prix;
                            });
                        }
                        this.webService.stopLoading(); //to stop loading
                        if (!this.emptylist) {
                            this.show = true; // used to show page content
                        }
                        else {
                            //no  cars
                            if (this.lang == "fr") {
                                alert(" Pas de véhicule, veuillez affiner votre recherche.");
                            }
                            else {
                                alert(" No vehicle, please refine your search.");
                            }
                            this.router.navigateByUrl("/dashboard");
                            this.webService.stopLoading(); //to stop loading
                        }
                    }
                }
                else {
                    //no  cars
                    if (this.lang == "fr") {
                        alert("Erreur Serveur \n code vehicule incorrect  ");
                    }
                    else {
                        alert(" Server error \n incorrect vehicle code ");
                    }
                    this.router.navigateByUrl("/dashboard");
                    this.webService.stopLoading(); //to stop loading
                }
            }));
        });
    }
    //////////////////////////////////////////////////////
    //this method is used to print the details of a selected car //////////////
    carDetails(carID) {
        //call another page and fetch the details of the car
        this.router.navigate(['car-details'], { queryParams: { id: carID, prev: "/premium" } });
    }
};
PremiumPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"] }
];
PremiumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-premium',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./premium.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/premium/premium.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./premium.page.scss */ "./src/app/pages/premium/premium.page.scss")).default]
    })
], PremiumPage);



/***/ })

}]);
//# sourceMappingURL=pages-premium-premium-module-es2015.js.map