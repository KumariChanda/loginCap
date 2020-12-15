(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-item>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title> {{ 'DASHBOARD.about_us' | translate }}</ion-title>\n    </ion-item>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\">\n\n    <!-- ///////////////////////////////////////////////////////////////////////////////// -->\n            <!-- about us text -->\n       <ion-card >\n          \n            <ion-card-content>\n                <ion-label [innerHTML]=\"about_us\">          \n                  <!-- {{about_us}} -->\n                </ion-label> \n            </ion-card-content>\n      </ion-card>\n<!-- /////////////////////////////////////////////////////////////////////////////////////////// -->\n\n\n\n\n\n         <!-- Start our team -->\n              <!-- english -->\n        <ion-list-header *ngIf=\"lang=='en'\" style=\" margin-left:28%\"> \n              <ion-chip > Our Team   <br>\n                <ion-icon   name=\"caret-down-sharp\"></ion-icon>\n              </ion-chip >\n            \n        </ion-list-header>\n                <!-- french -->\n        <ion-list-header *ngIf=\"lang=='fr' \" style=\" margin-left:25%\"> \n              <ion-chip > Notre Equipe   <br>\n                <ion-icon   name=\"caret-down-sharp\"></ion-icon>\n              </ion-chip >\n\n        </ion-list-header>\n\n              <!-- Team list -->\n        <ion-card *ngFor=\"let team of myteam; \" >\n        \n            <div  > \n              \n              <img  [src]= \"team.photo\" />\n              \n            </div>\n          \n            <ion-card-content>\n                            \n                \n                <!-- Full Name -->\n                <ion-item>\n                  <strong>\n                      <ion-label> {{team.nom}} {{team.prenom}}</ion-label>\n                  </strong>\n                </ion-item>\n                <!-- Position -->\n                <ion-item>\n                    <ion-label > {{team.poste}} </ion-label>\n                </ion-item>\n                \n                <!-- Email -->\n                <ion-item>\n                    <ion-label >{{team.email}} </ion-label>\n                </ion-item>\n               \n\n          \n            </ion-card-content>\n      </ion-card>\n\n\n\n              <!-- End :  our Team -->\n      \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/about-us/about-us-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/pages/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-icon {\n  color: black;\n}\n\nion-label {\n  color: #ffa60a;\n  text-align: justify;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nimg {\n  border-radius: 0px;\n  border-left: 9px #d39e1a solid;\n  padding: 0%;\n  height: 350px;\n  width: 100%;\n  padding-right: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXGFib3V0LXVzXFxhYm91dC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFFSSxZQUFBO0FDTEo7O0FEUUE7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURRQTtFQUVJLG1CQUFBO0FDTko7O0FEUUE7RUFHRSxrQkFBQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG59XG5cblxuXG5pb24taXRlbSwgaW9uLWZhYi1idXR0b25cbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbiAgICBjb2xvcjogICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLGlvbi1idXR0b25cbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24taWNvblxue1xuICAgIGNvbG9yIDogYmxhY2s7XG59XG5cbmlvbi1sYWJlbFxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW9uLWNhcmQtY29udGVudFxue1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5pbWdcbntcbiAgXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItbGVmdDogOXB4ICNkMzllMWEgc29saWQ7XG4gICAgcGFkZGluZzogMCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0JTtcbn0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0sIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogI2ZmYTYwYTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDlweCAjZDM5ZTFhIHNvbGlkO1xuICBwYWRkaW5nOiAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let AboutUsPage = class AboutUsPage {
    constructor(webService) {
        this.webService = webService;
        this.show = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.src_link = this.webService.base_url;
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            //start loader
            this.webService.presentLoading();
            /////////////////////////////////////////////////     
            ///// start : get about us 
            this.webService.getAboutUs().subscribe(res => {
                //console.log(" about_us  ",res);
                if (res) {
                    this.about_us = res[0].text;
                    /////////////////////////////////////////////////     
                    ///// start : get team 
                    this.webService.getTeam().subscribe(res => {
                        // console.log(" team : ",res);
                        if (res) {
                            this.myteam = res;
                        }
                        else {
                            // alert no response from server
                        }
                        //stop loader
                        this.webService.stopLoading();
                        this.show = true;
                    });
                    ///// end : get team 
                    /////////////////////////////////////////////////  
                }
                else {
                    // alert no response from server
                }
            });
            ///// end : get about us 
            /////////////////////////////////////////////////   
        });
    }
};
AboutUsPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] }
];
AboutUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")).default]
    })
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-us-about-us-module-es2015.js.map