(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n      <ion-item *ngIf=\"(editableText==true && userType=='client') ||userType=='chauffeur' \">\n\n         <!-- menu icon -->\n        <ion-buttons  slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <!-- title -->\n        <ion-title >{{ 'DASHBOARD.profile' | translate }}</ion-title>\n      </ion-item>\n\n     <!-- ------------------------------------------------------------------------------ -->\n      <!-- ----------------------If edit has been clicked --------------------------------------------- -->\n      <ion-item *ngIf=\"editableText==false && userType=='client'\" >\n\n         <!-- prev icon -->\n         <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n\n        <!-- title -->\n        <ion-title >{{ 'DASHBOARD.edit_profile_title' | translate }}</ion-title>\n      </ion-item>\n\n</ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"show\" >\n \n          <!-- profile Image -->\n         \n     <ion-card>\n\n        \n        <ion-card-header>\n          <ion-card-subtitle>\n             \n            <div >\n              <ion-grid *ngIf=\"editableText==true\">\n                <ion-row>\n                  <ion-col size=\"4\" >\n                    <img   [src]=\"profile\"  class=\"image-icon\" >\n                  </ion-col>\n                   <ion-col size=\"8\">\n                    <div>                \n                       <br><br> <br>\n                       <!-- Full name      -->\n                       <strong> <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.first_name}}  {{profileData.last_name}} </b>\n                       </ion-label> </strong>\n                        <br><br>\n                       \n\n                    </div>                    \n                  </ion-col>\n                  </ion-row> \n                      \n                       <!-- DOB      -->\n                       <ion-item>\n                         <ion-icon name=\"calendar-outline\"></ion-icon>\n                         <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.birth_date}}  </b></ion-label>\n                       </ion-item> \n                       <!-- Email id     -->\n                       <ion-item>\n                          <ion-icon name=\"at-outline\"></ion-icon>\n                          <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.email}}  </b></ion-label>\n                        </ion-item> \n                       <!-- phone number    -->\n                        <ion-item>\n                          <ion-icon name=\"call-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.telephone}}  </b></ion-label>\n                        </ion-item> \n                        <!-- address -->\n                        <ion-item>\n                          <ion-icon name=\"pin-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp; <b> {{profileData.address}}  </b></ion-label>\n                        </ion-item> \n                  </ion-grid>  \n                             \n              </div>\n\n          </ion-card-subtitle>\n          <!-- <ion-card-title  >  My informations :</ion-card-title> -->\n        </ion-card-header>\n        <ion-card-content>\n                \n            <div *ngIf=\"editableText==false && userType=='client'\">\n                  <!-- name      -->\n                <ion-label style=\"size: 20vw;\" >&nbsp; <b>{{\"PROFILE.first_name\"| translate}} : </b></ion-label>\n                <br>   \n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.first_name\"  placeholder=\"First name\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.last_name\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\"  [(ngModel)]=\"profileData.last_name\"  placeholder=\"Last name\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.email_address\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.email\"  placeholder=\"Email Address\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.mobile\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"number\" [(ngModel)]=\"profileData.telephone\" placeholder=\"Mobile number\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.dob\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"date\"  [(ngModel)]=\"profileData.birth_date\" [disabled]=\"editableText\"></ion-input>\n                <br>\n                <ion-label style=\"size: 20vw;\">&nbsp; <b> {{\"PROFILE.address\"| translate}} : </b></ion-label>\n                <br>\n                <ion-input  type=\"text\" [(ngModel)]=\"profileData.address\"  placeholder=\"Address\" [disabled]=\"editableText\"></ion-input>\n                <br>\n               \n\n            </div>     \n                <div class=\"divloginbtn\">\n\n                  <!-- <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\n                 <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n                   'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\n                  -->\n                  </div>\n              \n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n</ion-content>\n<ion-footer *ngIf=\"show\" >\n  <!-- <ion-toolbar> -->\n       <!-- if the token is not null -->\n    <!-- <ion-button  expand=\"full\"  [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"save()\">{{ 'DASHBOARD.post_testimonial' | translate }}</ion-button> -->\n    <button expand=\"full\" [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"editProfile()\" *ngIf=\"editableText==true && userType=='client'\"> {{\"PROFILE.edit_profile\"| translate}}</button>\n  <button [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"saveProfile()\" *ngIf=\"editableText==false && userType=='client'\"> {{ 'DASHBOARD.save_profile' | translate }}</button>\n  \n\n  <!-- </ion-toolbar> -->\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button, ion-icon {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-label {\n  color: #ffa60a;\n}\n\n.image-icon {\n  height: 100px;\n  width: 100px;\n  border-radius: 50px;\n}\n\nion-input {\n  border-radius: 30px;\n  color: black;\n  background-color: white;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.loginbtn_black {\n  background-color: black;\n  color: #ffa60a;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #ffa60a;\n  color: black;\n  font-weight: 800;\n  transition: all 0.3s linear 0s;\n  width: 100vw;\n  height: 10vw;\n  box-shadow: 0 2px 0 #ffa60a, 0 3px 0px #e4e4e4;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBRUksY0FBQTtBQ0xKOztBRFFBO0VBRUksY0FBQTtBQ05KOztBRFFBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFFBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0FDTko7O0FEUUU7RUFFSSx1QkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtFQUlBLDhCQUFBO0VBRUYsWUFBQTtFQUNBLFlBQUE7RUFDRSw4Q0FBQTtBQ1pOOztBRGVJO0VBRUUseUJBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFJQSw4QkFBQTtFQUVGLFlBQUE7RUFDQSxZQUFBO0VBQ0UsOENBQUE7QUNuQk47O0FEcUJBO0VBRUksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbSxpb24tbWVudS1idXR0b24saW9uLWljb25cclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbiAgICBjb2xvcjogICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jaGlwLGlvbi1idXR0b25cclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbixpb24tY2FyZC10aXRsZSBcclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tbGFiZWxcclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcbi5pbWFnZS1pY29uIHtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB9XHJcbmlvbi1pbnB1dFxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xyXG59XHJcbi5kaXZsb2dpbmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvZ2luYnRuX2JsYWNrXHJcbiAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIC8vICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgICAgY29sb3I6ICNmZmE2MGE7XHJcbiAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAvL2xpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgLy8gICBtYXJnaW46IGF1dG87XHJcbiAgICAvLyAgIHBhZGRpbmc6IDN2dyAzdnc7O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XHJcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2ZmYTYwYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbmJ0bl95ZWxsb3dcclxuICB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MGE7XHJcbiAgICAvLyAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgLy9mb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvLyAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vICAgcGFkZGluZzogM3Z3IDN2dzs7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTB2dztcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggMCAjZmZhNjBhLCAwIDNweCAwcHggI2U0ZTRlNDtcclxuICAgIH1cclxuaW9uLXRpdGxlXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0IDogLTEwJTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtLCBpb24tbWVudS1idXR0b24sIGlvbi1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiwgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbi5pbWFnZS1pY29uIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbmJ0bl9ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTB2dztcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZmZhNjBhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MGE7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTB2dztcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZmZhNjBhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

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
            "first_name": "",
            "last_name": "",
            "telephone": "",
            "email": "",
            "birth_date": "",
            "address": "",
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