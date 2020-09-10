(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seetings-seetings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seetings/seetings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seetings/seetings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n       <ion-title size=\"small\">{{'LANGUAGE.title' | translate}}</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n     <ion-list>\n    <ion-item>\n      <ion-label>{{'LANGUAGE.select_lang' | translate}}</ion-label>\n      <ion-select placeholder=\"Select One\" [value]=\"selectedLanguage\"  [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\">\n        <ion-select-option value=\"en\">{{'LANGUAGE.english' | translate}}</ion-select-option>\n        <ion-select-option value=\"fr\">{{'LANGUAGE.french' | translate}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/seetings/seetings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/seetings/seetings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SeetingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeetingsPageRoutingModule", function() { return SeetingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _seetings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seetings.page */ "./src/app/pages/seetings/seetings.page.ts");




const routes = [
    {
        path: '',
        component: _seetings_page__WEBPACK_IMPORTED_MODULE_3__["SeetingsPage"]
    }
];
let SeetingsPageRoutingModule = class SeetingsPageRoutingModule {
};
SeetingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeetingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/seetings/seetings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/seetings/seetings.module.ts ***!
  \***************************************************/
/*! exports provided: SeetingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeetingsPageModule", function() { return SeetingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _seetings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seetings-routing.module */ "./src/app/pages/seetings/seetings-routing.module.ts");
/* harmony import */ var _seetings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seetings.page */ "./src/app/pages/seetings/seetings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SeetingsPageModule = class SeetingsPageModule {
};
SeetingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seetings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeetingsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_seetings_page__WEBPACK_IMPORTED_MODULE_6__["SeetingsPage"]]
    })
], SeetingsPageModule);



/***/ }),

/***/ "./src/app/pages/seetings/seetings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/seetings/seetings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3NlZXRpbmdzL3NlZXRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VldGluZ3Mvc2VldGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBRUksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VldGluZ3Mvc2VldGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cbmlvbi1pdGVtXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tdGl0bGVcbntcbiAgICBtYXJnaW4tbGVmdCA6IC0xMCU7XG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuICAiLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/seetings/seetings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/seetings/seetings.page.ts ***!
  \*************************************************/
/*! exports provided: SeetingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeetingsPage", function() { return SeetingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
const LNG_KEY = 'SELECTED LANGUAGE';
let SeetingsPage = class SeetingsPage {
    constructor(router, webService) {
        this.router = router;
        this.webService = webService;
        this.getcurrentlang();
    }
    ngOnInit() {
    }
    ////////////
    getcurrentlang() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var ret = Storage.get({ key: LNG_KEY });
            var val = (yield ret).value;
            this.selectedLanguage = val;
            //console.log("selected language ",this.selectedLanguage ,typeof(this.selectedLanguage ));
        });
    }
    //////////////////////
    languageChanged() {
        this.webService.setLanguage(this.selectedLanguage);
        //  Storage.set({key:LNG_KEY, value:this.selectedLanguage}); 
        //send the language for menu updation
        this.webService.sendMessage({ 'language': this.selectedLanguage });
        // this.router.navigateByUrl("/dashboard");
    }
};
SeetingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"] }
];
SeetingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seetings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seetings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seetings/seetings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seetings.page.scss */ "./src/app/pages/seetings/seetings.page.scss")).default]
    })
], SeetingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-seetings-seetings-module-es2015.js.map