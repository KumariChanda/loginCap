(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-suv-class-suv-class-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suv-class/suv-class.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suv-class/suv-class.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-item *ngIf=\"!isSearchbarOpened\">\n           <!-- menu icon -->\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n    \n      <!-- title -->\n      <ion-title *ngIf=\"!isSearchbarOpened\">{{ 'DASHBOARD.suv_class' | translate }}</ion-title>\n\n   \n       <!-- search bar button -->\n       <ion-buttons slot=\"end\">\n          <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" >\n              <ion-icon color=\"primary\" name=\"search\"> </ion-icon>\n          </ion-button>\n      </ion-buttons>\n\n\n    </ion-item>\n\n<!-- Search Bar -->\n   <ion-searchbar *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\n\n     \n  </ion-toolbar>\n    \n</ion-header>\n\n<ion-content *ngIf=\"show\"  >\n\n\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\n    \n        <div *ngFor=\"let photo of item.photo; let i = index \" > \n          \n          <img *ngIf=\"i== 0\"  [src]=\"photo.image\" />\n          \n        </div>\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n                <!-- type of motor -->\n                <ion-chip >\n                  <ion-icon name=\"car\"></ion-icon>\n                  <ion-label >{{item.type_caburant}}</ion-label>\n                </ion-chip>\n                <!-- Car price-->\n                <ion-chip >\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA / {{ 'DASHBOARD.day' | translate }}</ion-label>\n                </ion-chip> <br>\n                <!-- Number of Seats-->\n                <ion-chip >\n                  <ion-icon name=\"person\"></ion-icon>\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\n                </ion-chip>\n                <!-- car color -->\n              <ion-chip>\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \n              </ion-chip>\n\n          </ion-card-subtitle>\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n                        \n               <!-- More-->\n             <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" >\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\n                <ion-icon name=\"chevron-forward\"></ion-icon>\n            </ion-chip>\n\n      \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n \n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/suv-class/suv-class-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/suv-class/suv-class-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SuvClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuvClassPageRoutingModule", function() { return SuvClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _suv_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suv-class.page */ "./src/app/pages/suv-class/suv-class.page.ts");




const routes = [
    {
        path: '',
        component: _suv_class_page__WEBPACK_IMPORTED_MODULE_3__["SuvClassPage"]
    }
];
let SuvClassPageRoutingModule = class SuvClassPageRoutingModule {
};
SuvClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuvClassPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/suv-class/suv-class.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/suv-class/suv-class.module.ts ***!
  \*****************************************************/
/*! exports provided: SuvClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuvClassPageModule", function() { return SuvClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _suv_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suv-class-routing.module */ "./src/app/pages/suv-class/suv-class-routing.module.ts");
/* harmony import */ var _suv_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suv-class.page */ "./src/app/pages/suv-class/suv-class.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let SuvClassPageModule = class SuvClassPageModule {
};
SuvClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _suv_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuvClassPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_suv_class_page__WEBPACK_IMPORTED_MODULE_6__["SuvClassPage"]]
    })
], SuvClassPageModule);



/***/ }),

/***/ "./src/app/pages/suv-class/suv-class.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/suv-class/suv-class.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3N1di1jbGFzcy9zdXYtY2xhc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXYtY2xhc3Mvc3V2LWNsYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFFSSxjQUFBO0FDTEo7O0FEUUE7RUFFSSxZQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXYtY2xhc3Mvc3V2LWNsYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG59XG5cblxuXG5pb24taXRlbVxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsaW9uLWJ1dHRvblxue1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvblxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGVcbntcbiAgICBjb2xvciA6IHdoaXRlO1xufVxuIiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/suv-class/suv-class.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/suv-class/suv-class.page.ts ***!
  \***************************************************/
/*! exports provided: SuvClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuvClassPage", function() { return SuvClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let SuvClassPage = class SuvClassPage {
    constructor(router, webService) {
        this.router = router;
        this.webService = webService;
        this.show = false;
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
        //get suv class cars list
        this.webService.presentLoading(); //to start loader
        this.webService.getCarClass(2).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log("getting business voitures : \n ",res); 
            if (res) {
                var index = 0;
                for (let i = 0; i < res.length; i++) {
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
                console.log(this.filterData);
                //get the different prices of every car
                for (let i = 0; i < this.filterData.length; i++) {
                    this.webService.getPriceCar(this.filterData[i].id).subscribe(resp => {
                        this.filterData[i].per_day = resp[0].prix;
                        this.filterData[i].per_hour = resp[1].prix;
                        this.filterData[i].airport = resp[2].prix;
                    });
                }
                this.webService.stopLoading(); //stop loader 
                this.show = true;
            }
        }));
    }
    //////////////////////////////////////////////////////
    //this method is used to print the details of a selected car //////////////
    carDetails(carID) {
        //call another page and fetch the details of the car
        this.router.navigate(['car-details'], { queryParams: { id: carID, prev: "/suv-class" } });
    }
};
SuvClassPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] }
];
SuvClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suv-class',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./suv-class.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suv-class/suv-class.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./suv-class.page.scss */ "./src/app/pages/suv-class/suv-class.page.scss")).default]
    })
], SuvClassPage);



/***/ })

}]);
//# sourceMappingURL=pages-suv-class-suv-class-module-es2015.js.map