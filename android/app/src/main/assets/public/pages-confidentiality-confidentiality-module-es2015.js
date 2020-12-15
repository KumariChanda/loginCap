(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confidentiality-confidentiality-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n     <ion-item>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'DASHBOARD.confidentiality' | translate }} </ion-title>\n    </ion-item> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n\n     <!-- -------------------------------------------------------------------------------------- -->\n        <!-- Start contact -->\n       <ion-card *ngFor=\"let conf of myconf; \" >\n          \n            <ion-card-content  >\n                          \n               <div [innerHTML]=\"conf.text\">\n                    <!-- {{conf.text}} -->\n               </div>\n            </ion-card-content>\n      </ion-card>\n        <!-- Stop Contact -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/confidentiality/confidentiality-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/confidentiality/confidentiality-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfidentialityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfidentialityPageRoutingModule", function() { return ConfidentialityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confidentiality_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confidentiality.page */ "./src/app/pages/confidentiality/confidentiality.page.ts");




const routes = [
    {
        path: '',
        component: _confidentiality_page__WEBPACK_IMPORTED_MODULE_3__["ConfidentialityPage"]
    }
];
let ConfidentialityPageRoutingModule = class ConfidentialityPageRoutingModule {
};
ConfidentialityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfidentialityPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/confidentiality/confidentiality.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/confidentiality/confidentiality.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfidentialityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfidentialityPageModule", function() { return ConfidentialityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confidentiality_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confidentiality-routing.module */ "./src/app/pages/confidentiality/confidentiality-routing.module.ts");
/* harmony import */ var _confidentiality_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confidentiality.page */ "./src/app/pages/confidentiality/confidentiality.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ConfidentialityPageModule = class ConfidentialityPageModule {
};
ConfidentialityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confidentiality_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfidentialityPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_confidentiality_page__WEBPACK_IMPORTED_MODULE_6__["ConfidentialityPage"]]
    })
], ConfidentialityPageModule);



/***/ }),

/***/ "./src/app/pages/confidentiality/confidentiality.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/confidentiality/confidentiality.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-label, ion-icon {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-card-content {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlkZW50aWFsaXR5L0Q6XFxpb25pY2FwcFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxjb25maWRlbnRpYWxpdHlcXGNvbmZpZGVudGlhbGl0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpZGVudGlhbGl0eS9jb25maWRlbnRpYWxpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUdJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUko7O0FEV0E7RUFFSSxjQUFBO0FDVEo7O0FEWUE7RUFFSSxZQUFBO0FDVko7O0FEWUE7RUFFSSxtQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlkZW50aWFsaXR5L2NvbmZpZGVudGlhbGl0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcixpb24tc2VnbWVudFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxufVxuaW9uLWNhcmRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG5cblxuXG5pb24taXRlbSwgaW9uLWZhYi1idXR0b25cbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbiAgICBjb2xvcjogICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b25cbntcbiAgY29sb3I6IGJsYWNrOyBcbiAgLS1iYWNrZ3JvdW5kOiAgI2ZmYTYwYTtcblxufVxuXG5pb24tY2hpcFxue1xuXG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsXG57XG4gICAgY29sb3IgOiB3aGl0ZTtcbiAgICBcbn1cbmlvbi1sYWJlbCxpb24taWNvblxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGVcbntcbiAgICBjb2xvciA6IHdoaXRlO1xufVxuaW9uLWNhcmQtY29udGVudFxue1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59IiwiaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWl0ZW0sIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwsIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/confidentiality/confidentiality.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/confidentiality/confidentiality.page.ts ***!
  \***************************************************************/
/*! exports provided: ConfidentialityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfidentialityPage", function() { return ConfidentialityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");



let ConfidentialityPage = class ConfidentialityPage {
    constructor(webService) {
        this.webService = webService;
        this.show = false;
    }
    ngOnInit() {
        //start loader
        this.webService.presentLoading();
        /////////////////////////////////////////////////     
        ///// start : get term of usage
        this.webService.getConf().subscribe(res => {
            //console.log(" terms  ",res);
            if (res) {
                this.myconf = res;
            }
            else {
                // alert no response from server
            }
            //Stop loader
            this.webService.stopLoading();
            this.show = true;
        });
        ///// end : get term of usage
        /////////////////////////////////////////////////   
    }
};
ConfidentialityPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] }
];
ConfidentialityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confidentiality',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confidentiality.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confidentiality.page.scss */ "./src/app/pages/confidentiality/confidentiality.page.scss")).default]
    })
], ConfidentialityPage);



/***/ })

}]);
//# sourceMappingURL=pages-confidentiality-confidentiality-module-es2015.js.map