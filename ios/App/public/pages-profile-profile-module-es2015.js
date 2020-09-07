(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <ion-item *ngIf=\"(editableText==true && userType=='client') ||userType=='chauffeur' \">\n\n           <!-- menu icon -->\n          <ion-buttons  slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n\n          <!-- title -->\n          <ion-title >{{ 'DASHBOARD.profile' | translate }}</ion-title>\n        </ion-item>\n\n       <!-- ------------------------------------------------------------------------------ -->\n        <!-- ----------------------If edit has been clicked --------------------------------------------- -->\n        <ion-item *ngIf=\"editableText==false && userType=='client'\" >\n\n           <!-- prev icon -->\n           <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n\n          <!-- title -->\n          <ion-title >{{ 'DASHBOARD.edit_profile_title' | translate }}</ion-title>\n        </ion-item>\n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n \n          <!-- profile Image -->\n         \n     <ion-card>\n\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n            <div >\n              <ion-grid *ngIf=\"editableText==true && userType=='client'\">\n                <ion-row>\n                  <ion-col size=\"4\" >\n                    <img   [src]=\"profile\"  class=\"image-icon\" >\n                  </ion-col>\n                   <ion-col size=\"8\">\n                    <div>                \n                       <br><br> <br>\n                       <!-- Full name      -->\n                       <strong> <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.first_name}}  {{profileData.last_name}} </b>\n                       </ion-label> </strong>\n                        <br><br>\n                       \n\n                    </div>                    \n                  </ion-col>\n                  </ion-row> \n                      \n                       <!-- DOB      -->\n                       <ion-item>\n                         <ion-icon name=\"calendar-outline\"></ion-icon>\n                         <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.birth_date}}  </b></ion-label>\n                       </ion-item> \n                       <!-- Email id     -->\n                       <ion-item>\n                          <ion-icon name=\"at-outline\"></ion-icon>\n                          <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.email}}  </b></ion-label>\n                        </ion-item> \n                       <!-- phone number    -->\n                        <ion-item>\n                          <ion-icon name=\"call-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.telephone}}  </b></ion-label>\n                        </ion-item> \n                        <!-- address -->\n                        <ion-item>\n                          <ion-icon name=\"pin-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.address}}  </b></ion-label>\n                        </ion-item> \n                  </ion-grid>  \n                             \n              </div>\n\n          </ion-card-subtitle>\n          <!-- <ion-card-title  >  My informations :</ion-card-title> -->\n        </ion-card-header>\n        <ion-card-content>\n                \n            <div *ngIf=\"editableText==false && userType=='client'\">\n                  <!-- name      -->\n                <ion-label style=\"size: 20vw;\" >&nbsp; <b>{{\"PROFILE.first_name\"| translate}} : </b></ion-label>\n                <br>   \n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.first_name\"  placeholder=\"First name\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.last_name\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\"  [(ngModel)]=\"profileData.last_name\"  placeholder=\"Last name\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.email_address\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.email\"  placeholder=\"Email Address\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.mobile\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"number\" [(ngModel)]=\"profileData.telephone\" placeholder=\"Mobile number\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.dob\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"date\"  [(ngModel)]=\"profileData.birth_date\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.address\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.address\"  placeholder=\"Address\" [disabled]=\"editableText\"></ion-input>\n                <br>\n               \n\n            </div>     \n                <div class=\"divloginbtn\">\n\n                  <!-- <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\n                 <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\n                  -->\n                  </div>\n              \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n</ion-content>\n<ion-footer *ngIf=\"show\" >\n  <!-- <ion-toolbar> -->\n       <!-- if the token is not null -->\n    <!-- <ion-button  expand=\"full\"  [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"save()\">{{ 'DASHBOARD.post_testimonial' | translate }}</ion-button> -->\n    <button expand=\"full\" [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\n  <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\n  \n\n  <!-- </ion-toolbar> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button, ion-icon {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-label {\n  color: #ffa60a;\n}\n\n.image-icon {\n  height: 100px;\n  width: 100px;\n  border-radius: 50px;\n}\n\nion-input {\n  border-radius: 30px;\n  color: black;\n  background-color: white;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.loginbtn_black {\n  background-color: black;\n  color: #ffa60a;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #ffa60a;\n  color: black;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBRUksY0FBQTtBQ0xKOztBRFFBO0VBRUksY0FBQTtBQ05KOztBRFFBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFFBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0FDTko7O0FEUUU7RUFFSSx1QkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtFQUlBLDhCQUFBO0VBRUYsWUFBQTtFQUNBLFlBQUE7RUFDRSw4Q0FBQTtBQ1pOOztBRGVJO0VBRUUseUJBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFJQSw4QkFBQTtFQUVGLFlBQUE7RUFDQSxZQUFBO0VBQ0UsOENBQUE7QUNuQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbn1cblxuXG5cbmlvbi1pdGVtLGlvbi1tZW51LWJ1dHRvbixpb24taWNvblxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsaW9uLWJ1dHRvblxue1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbixpb24tY2FyZC10aXRsZSBcbntcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG5cbmlvbi1sYWJlbFxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cbi5pbWFnZS1pY29uIHtcblxuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cbmlvbi1pbnB1dFxue1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIG1hcmdpbjogNXZ3IDM1dnc7XG59XG4uZGl2bG9naW5idG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5sb2dpbmJ0bl9ibGFja1xuICB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAvLyAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgICBjb2xvcjogI2ZmYTYwYTtcbiAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgLy8gICBtYXJnaW46IGF1dG87XG4gICAgLy8gICBwYWRkaW5nOiAzdncgM3Z3OztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTB2dztcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2ZmYTYwYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG4gICAgfVxuICAgIFxuICAgIC5sb2dpbmJ0bl95ZWxsb3dcbiAge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYwYTtcbiAgICAvLyAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAvL2ZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAvL2xpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIC8vICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vICAgcGFkZGluZzogM3Z3IDN2dzs7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwdnc7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAwICNmZmE2MGEsIDAgM3B4IDBweCAjZTRlNGU0O1xuICAgIH0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0sIGlvbi1tZW51LWJ1dHRvbiwgaW9uLWljb24ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsIGlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLCBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuLmltYWdlLWljb24ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5kaXZsb2dpbmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMHZ3O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNmZmE2MGEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYwYTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMHZ3O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNmZmE2MGEsIDAgM3B4IDBweCAjZTRlNGU0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let ProfilePage = class ProfilePage {
    constructor(webService, router) {
        this.webService = webService;
        this.router = router;
        this.profile = '../assets/imgs/profile.png';
        this.btnClicked = false;
        this.editableText = true;
        this.profileData = {
            "first_name": "Chanda",
            "last_name": "Kumari",
            "telephone": "8559080443",
            "email": "kumarichanda658@gmail.com",
            "birth_date": "1996-06-26",
            "address": "A-658",
            "password": "string"
        };
        this.userType = "";
        this.userId = 0;
        this.show = false;
        this.btnClicked = false;
        console.log("Before editableText : ", this.editableText);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.webService.presentLoading();
            this.getdata();
            ////////////////////////////////////////////////
        });
    }
    getdata() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userInfo = JSON.parse((yield Storage.get({ key: "user_infos" })).value);
            console.log("Storage : ", this.userInfo);
            this.profileData.address = this.userInfo.address;
            this.profileData.birth_date = this.userInfo.birth_date;
            this.profileData.email = this.userInfo.email;
            this.profileData.first_name = this.userInfo.first_name;
            this.profileData.last_name = this.userInfo.last_name;
            this.profileData.telephone = this.userInfo.telephone;
            this.userId = this.userInfo.id;
            //get user type
            this.userType = (yield Storage.get({ key: "user_type" })).value;
            // this.webService.stopLoading();
            //get the current language of the app   
            this.webService.getCurrentLanguage().then((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // console.log("home  ",val)
                this.webService.sendMessage({ 'token': "mytoken", 'language': val });
            })); //end get app language
            //show the contain
            this.show = true;
        });
    }
    editProfile() {
        this.btnClicked = true;
        this.editableText = false;
        console.log("btnClicked : ", this.btnClicked);
        console.log("DOB : ", this.userId);
        setTimeout(() => {
            this.btnClicked = false;
            // this.editableText=true;
        }, 1000);
    }
    saveProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("profileData : ", this.profileData);
            this.btnClicked = true;
            console.log("btnClicked : ", this.btnClicked);
            setTimeout(() => {
                this.btnClicked = false;
                // this.editableText=true;
            }, 1000);
            //get token
            this.token = (yield Storage.get({ key: 'accessToken' })).value;
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            if (this.profileData.email) {
                ///start loader
                this.webService.presentLoading();
                //////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////call the edit profile API ////
                this.webService.EditClientProfile(this.userId, this.token, this.profileData).subscribe(res => {
                    //stop loader
                    this.webService.stopLoading();
                    if (res.detail) {
                        if (this.lang == "fr") {
                            alert("La modification a échoué !! ");
                            // alert("Modification réussie avec succès !!");
                        }
                        else {
                            alert("Update Failed !");
                        }
                    }
                    else {
                        //store the new result into userInfos
                        //store user infos in storage 
                        Storage.set({
                            key: "user_infos",
                            value: JSON.stringify(res)
                        }); // end store user 
                        if (this.lang == "fr") {
                            alert("Modification réussie !!");
                        }
                        else {
                            alert("Update Successful !!");
                        }
                        //back to prev page
                        this.prev();
                    }
                }, error => {
                    this.webService.stopLoading();
                    if (this.lang == "fr") {
                        alert("Erreur Serveur, \n Verifiez Votre connexion internet \n Et vos Entrees ");
                        // alert("Modification réussie avec succès !!");
                    }
                    else {
                        alert("Server error, \n please check your internet connection \n and your inputs");
                    }
                });
                ////////////////////////////////////////////////////////////////////////////////////////
            }
            else {
                if (this.lang == "fr") {
                    alert("SVP, Remplissez le champ email !");
                }
                else {
                    alert("Please, Fill the email field !");
                }
            }
        });
    }
    prev() {
        this.editableText = true;
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map