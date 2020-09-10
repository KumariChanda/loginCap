(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confidentiality-confidentiality-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confidentiality/confidentiality.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n     <ion-item>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'DASHBOARD.confidentiality' | translate }} </ion-title>\r\n    </ion-item> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n     <!-- -------------------------------------------------------------------------------------- -->\r\n        <!-- Start contact -->\r\n       <ion-card *ngFor=\"let conf of myconf; \" >\r\n          \r\n            <ion-card-content>\r\n                          \r\n               \r\n                    {{conf.text}}\r\n          \r\n            </ion-card-content>\r\n      </ion-card>\r\n        <!-- Stop Contact -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-label, ion-icon {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-card-content {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlkZW50aWFsaXR5L0Q6XFxpb25pYzRcXGxvZ2luQ2FwL3NyY1xcYXBwXFxwYWdlc1xcY29uZmlkZW50aWFsaXR5XFxjb25maWRlbnRpYWxpdHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWRlbnRpYWxpdHkvY29uZmlkZW50aWFsaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFHSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKOztBRFdBO0VBRUksY0FBQTtBQ1RKOztBRFlBO0VBRUksWUFBQTtBQ1ZKOztBRFlBO0VBRUksbUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZGVudGlhbGl0eS9jb25maWRlbnRpYWxpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuaW9uLWNhcmRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWl0ZW0sIGlvbi1mYWItYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tYnV0dG9uXHJcbntcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XHJcblxyXG59XHJcblxyXG5pb24tY2hpcFxyXG57XHJcblxyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1sYWJlbFxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuaW9uLWxhYmVsLGlvbi1pY29uXHJcbntcclxuICAgIGNvbG9yIDogI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGVcclxue1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxufVxyXG5pb24tY2FyZC1jb250ZW50XHJcbntcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn0iLCJpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24taXRlbSwgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1sYWJlbCwgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */");

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