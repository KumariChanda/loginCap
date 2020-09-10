(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-item *ngIf=\"(editableText==true && userType=='client') ||userType=='chauffeur' \">\r\n\r\n           <!-- menu icon -->\r\n          <ion-buttons  slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n\r\n          <!-- title -->\r\n          <ion-title >{{ 'DASHBOARD.profile' | translate }}</ion-title>\r\n        </ion-item>\r\n\r\n       <!-- ------------------------------------------------------------------------------ -->\r\n        <!-- ----------------------If edit has been clicked --------------------------------------------- -->\r\n        <ion-item *ngIf=\"editableText==false && userType=='client'\" >\r\n\r\n           <!-- prev icon -->\r\n           <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\r\n\r\n          <!-- title -->\r\n          <ion-title >{{ 'DASHBOARD.edit_profile_title' | translate }}</ion-title>\r\n        </ion-item>\r\n \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n \r\n          <!-- profile Image -->\r\n         \r\n     <ion-card>\r\n\r\n        \r\n        <ion-card-header>\r\n          <ion-card-subtitle>\r\n             \r\n            <div >\r\n              <ion-grid *ngIf=\"editableText==true && userType=='client'\">\r\n                <ion-row>\r\n                  <ion-col size=\"4\" >\r\n                    <img   [src]=\"profile\"  class=\"image-icon\" >\r\n                  </ion-col>\r\n                   <ion-col size=\"8\">\r\n                    <div>                \r\n                       <br><br> <br>\r\n                       <!-- Full name      -->\r\n                       <strong> <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.first_name}}  {{profileData.last_name}} </b>\r\n                       </ion-label> </strong>\r\n                        <br><br>\r\n                       \r\n\r\n                    </div>                    \r\n                  </ion-col>\r\n                  </ion-row> \r\n                      \r\n                       <!-- DOB      -->\r\n                       <ion-item>\r\n                         <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                         <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.birth_date}}  </b></ion-label>\r\n                       </ion-item> \r\n                       <!-- Email id     -->\r\n                       <ion-item>\r\n                          <ion-icon name=\"at-outline\"></ion-icon>\r\n                          <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.email}}  </b></ion-label>\r\n                        </ion-item> \r\n                       <!-- phone number    -->\r\n                        <ion-item>\r\n                          <ion-icon name=\"call-outline\"></ion-icon>\r\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.telephone}}  </b></ion-label>\r\n                        </ion-item> \r\n                        <!-- address -->\r\n                        <ion-item>\r\n                          <ion-icon name=\"pin-outline\"></ion-icon>\r\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.address}}  </b></ion-label>\r\n                        </ion-item> \r\n                  </ion-grid>  \r\n                             \r\n              </div>\r\n\r\n          </ion-card-subtitle>\r\n          <!-- <ion-card-title  >  My informations :</ion-card-title> -->\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                \r\n            <div *ngIf=\"editableText==false && userType=='client'\">\r\n                  <!-- name      -->\r\n                <ion-label style=\"size: 20vw;\" >&nbsp; <b>{{\"PROFILE.first_name\"| translate}} : </b></ion-label>\r\n                <br>   \r\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.first_name\"  placeholder=\"First name\" [disabled]=\"editableText\"></ion-input>\r\n                <br>\r\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.last_name\"| translate}} : </b></ion-label>\r\n                <br>\r\n                <ion-input  type=\"text\"  [(ngModel)]=\"profileData.last_name\"  placeholder=\"Last name\" [disabled]=\"editableText\"></ion-input>\r\n                <br>\r\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.email_address\"| translate}} : </b></ion-label>\r\n                <br>\r\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.email\"  placeholder=\"Email Address\" [disabled]=\"editableText\"></ion-input>\r\n                <br>\r\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.mobile\"| translate}} : </b></ion-label>\r\n                <br>\r\n                <ion-input  type=\"number\" [(ngModel)]=\"profileData.telephone\" placeholder=\"Mobile number\" [disabled]=\"editableText\"></ion-input>\r\n                <br>\r\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.dob\"| translate}} : </b></ion-label>\r\n                <br>\r\n                <ion-input  type=\"date\"  [(ngModel)]=\"profileData.birth_date\" [disabled]=\"editableText\"></ion-input>\r\n                <br>\r\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.address\"| translate}} : </b></ion-label>\r\n                <br>\r\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.address\"  placeholder=\"Address\" [disabled]=\"editableText\"></ion-input>\r\n                <br>\r\n               \r\n\r\n            </div>     \r\n                <div class=\"divloginbtn\">\r\n\r\n                  <!-- <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\r\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\r\n                 <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\r\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\r\n                  -->\r\n                  </div>\r\n              \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n</ion-content>\r\n<ion-footer *ngIf=\"show\" >\r\n  <!-- <ion-toolbar> -->\r\n       <!-- if the token is not null -->\r\n    <!-- <ion-button  expand=\"full\"  [ngClass]=\"{'loginbtn_black':btnClicked == true,\r\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"save()\">{{ 'DASHBOARD.post_testimonial' | translate }}</ion-button> -->\r\n    <button expand=\"full\" [ngClass]=\"{'loginbtn_black':btnClicked == true,\r\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\r\n  <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\r\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\r\n  \r\n\r\n  <!-- </ion-toolbar> -->\r\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button, ion-icon {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-label {\n  color: #ffa60a;\n}\n\n.image-icon {\n  height: 90px;\n  width: 200px;\n  border-radius: 50px;\n}\n\nion-input {\n  border-radius: 30px;\n  color: black;\n  background-color: white;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.loginbtn_black {\n  background-color: black;\n  color: #ffa60a;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #ffa60a;\n  color: black;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9EOlxcaW9uaWM0XFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUVJLGNBQUE7QUNMSjs7QURRQTtFQUVJLGNBQUE7QUNOSjs7QURRQTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURRQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtBQ05KOztBRFFFO0VBRUksdUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7RUFJQSw4QkFBQTtFQUVGLFlBQUE7RUFDQSxZQUFBO0VBQ0UsOENBQUE7QUNaTjs7QURlSTtFQUVFLHlCQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0VBSUEsOEJBQUE7RUFFRixZQUFBO0VBQ0EsWUFBQTtFQUNFLDhDQUFBO0FDbkJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pdGVtLGlvbi1tZW51LWJ1dHRvbixpb24taWNvblxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWNoaXAsaW9uLWJ1dHRvblxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uLGlvbi1jYXJkLXRpdGxlIFxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1sYWJlbFxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuLmltYWdlLWljb24ge1xyXG5cclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG5pb24taW5wdXRcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gbWFyZ2luOiA1dncgMzV2dztcclxufVxyXG4uZGl2bG9naW5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sb2dpbmJ0bl9ibGFja1xyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAvLyAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjZmZhNjBhO1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgLy9saW5lLWhlaWdodDogMzBweDtcclxuICAgIC8vICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gICBwYWRkaW5nOiAzdncgM3Z3OztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAwICNmZmE2MGEsIDAgM3B4IDBweCAjZTRlNGU0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5idG5feWVsbG93XHJcbiAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjBhO1xyXG4gICAgLy8gICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAvL2xpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLy8gICBtYXJnaW46IGF1dG87XHJcbiAgICAvLyAgIHBhZGRpbmc6IDN2dyAzdnc7O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2ZmYTYwYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgICB9IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtLCBpb24tbWVudS1idXR0b24sIGlvbi1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiwgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbi5pbWFnZS1pY29uIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5kaXZsb2dpbmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMHZ3O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNmZmE2MGEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYwYTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMHZ3O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNmZmE2MGEsIDAgM3B4IDBweCAjZTRlNGU0O1xufSJdfQ== */");

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