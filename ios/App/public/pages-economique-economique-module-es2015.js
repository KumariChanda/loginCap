(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-economique-economique-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/economique/economique.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/economique/economique.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    \n    <ion-item *ngIf=\"!isSearchbarOpened\">\n           <!-- menu icon -->\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n      <!-- title -->\n      <ion-title  *ngIf=\"!isSearchbarOpened\">{{ 'DASHBOARD.economic_class' | translate }}</ion-title>\n\n   \n       <!-- search bar button -->\n      <ion-buttons slot=\"end\">\n        <!-- <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" > -->\n            <ion-icon color=\"primary\" name=\"search\" *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\"> </ion-icon>\n         <!-- </ion-button> -->\n      </ion-buttons>\n      <!-- Search Bar -->\n\n\n    </ion-item>\n\n<!-- Search Bar -->\n   <ion-searchbar color=\"primary\" *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\n\n     \n  </ion-toolbar>\n    \n</ion-header>\n\n<ion-content  *ngIf=\"show\"  >\n\n\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\n    \n        <div *ngFor=\"let photo of item.photo; let i = index \" > \n          \n          <img *ngIf=\"i== 0\"  [src]=\"src_link + photo.image\" />\n          \n        </div>\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n                <!-- type of motor -->\n                <ion-chip >\n                  <ion-icon name=\"car\"></ion-icon>\n                  <ion-label >{{item.type_caburant}}</ion-label>\n                </ion-chip>\n                <!-- Car price-->\n                <ion-chip >\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA/ {{ 'DASHBOARD.day' | translate }}</ion-label>\n                </ion-chip> <br>\n                <!-- Number of Seats-->\n                <ion-chip >\n                  <ion-icon name=\"person\"></ion-icon>\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\n                </ion-chip>\n                <!-- car color -->\n              <ion-chip>\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \n              </ion-chip>\n\n          </ion-card-subtitle>\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n                        \n               <!-- More-->\n             <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" >\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\n                <ion-icon name=\"chevron-forward\"></ion-icon>\n            </ion-chip>\n\n      \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n \n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/economique/economique-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/economique/economique-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EconomiquePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomiquePageRoutingModule", function() { return EconomiquePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _economique_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./economique.page */ "./src/app/pages/economique/economique.page.ts");




const routes = [
    {
        path: '',
        component: _economique_page__WEBPACK_IMPORTED_MODULE_3__["EconomiquePage"]
    }
];
let EconomiquePageRoutingModule = class EconomiquePageRoutingModule {
};
EconomiquePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EconomiquePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/economique/economique.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/economique/economique.module.ts ***!
  \*******************************************************/
/*! exports provided: EconomiquePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomiquePageModule", function() { return EconomiquePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _economique_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./economique-routing.module */ "./src/app/pages/economique/economique-routing.module.ts");
/* harmony import */ var _economique_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./economique.page */ "./src/app/pages/economique/economique.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");









let EconomiquePageModule = class EconomiquePageModule {
};
EconomiquePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _economique_routing_module__WEBPACK_IMPORTED_MODULE_5__["EconomiquePageRoutingModule"]
        ],
        declarations: [_economique_page__WEBPACK_IMPORTED_MODULE_6__["EconomiquePage"]]
    })
], EconomiquePageModule);



/***/ }),

/***/ "./src/app/pages/economique/economique.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/economique/economique.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-radio {\n  background-color: white;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nimg {\n  height: 250px;\n  width: 100%;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2Vjb25vbWlxdWUvZWNvbm9taXF1ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vjb25vbWlxdWUvZWNvbm9taXF1ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFSyx1QkFBQTtBQ0pMOztBRE9BO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURRQTtFQUVJLGNBQUE7QUNOSjs7QURTQTtFQUVJLFlBQUE7QUNQSjs7QURTQTtFQUVJLGFBQUE7RUFDQSxXQUFBO0FDUEo7O0FEVUE7RUFFSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lY29ub21pcXVlL2Vjb25vbWlxdWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtLGlvbi1tZW51LWJ1dHRvblxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLXJhZGlvXG57XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2hpcCxpb24tYnV0dG9uXG57XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59XG5pbWdcbntcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG5pb24tdGl0bGVcbntcbiAgICBtYXJnaW4tbGVmdCA6IC0xMCU7XG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0sIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tcmFkaW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNoaXAsIGlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/economique/economique.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/economique/economique.page.ts ***!
  \*****************************************************/
/*! exports provided: EconomiquePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomiquePage", function() { return EconomiquePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let EconomiquePage = class EconomiquePage {
    constructor(route, router, webService) {
        this.route = route;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //get family class cars list
            this.webService.presentLoading(); //to start loader
            //basic link
            this.src_link = this.webService.base_url;
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            this.webService.getCarClass(2).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //console.log("getting business voitures : \n ",res); 
                if (!res.detail) {
                    if (res.length == 0) {
                        //no  cars
                        if (this.lang == "fr") {
                            alert("La Liste de voitures est vide \n Retour à la page accueil");
                        }
                        else {
                            alert("The List of cars is Empty \ n Back Home Page");
                        }
                        this.router.navigateByUrl("/dashboard");
                        this.webService.stopLoading(); //to stop loading
                    }
                    else {
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
                        this.webService.stopLoading(); //to stop loading
                        this.show = true;
                    }
                }
                else {
                    //no  cars
                    if (this.lang == "fr") {
                        alert("Erreur code  voiture !!  \n Retour à la page accueil");
                    }
                    else {
                        alert("Car code error !! \ n Back Home Page");
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
        this.router.navigate(['car-details'], { queryParams: { id: carID, prev: "/economique" } });
    }
};
EconomiquePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] }
];
EconomiquePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-economique',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./economique.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/economique/economique.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./economique.page.scss */ "./src/app/pages/economique/economique.page.scss")).default]
    })
], EconomiquePage);



/***/ })

}]);
//# sourceMappingURL=pages-economique-economique-module-es2015.js.map