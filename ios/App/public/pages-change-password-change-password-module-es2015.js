(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n   <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title class=\"register\">{{'Password.change_password' | translate }}</ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content >\n  <div class=\"backgroundcss\">\n    <div id=\"container\">\n      <ion-card class=\"cardcss\" >\n           <hr/>\n        <ion-card-content>\n           <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)] = \"old_password\" placeholder=\"{{'Password.old_password' | translate }}\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)] = \"new_password\"  placeholder=\"{{'Password.new_password' | translate }}\"></ion-input>\n          <br>\n          <ion-input class=\"inputcomp\" type=\"password\" [(ngModel)] = \"confirm_pass\" placeholder=\"{{'Password.confirm_password' | translate }}\"></ion-input>\n          <br>\n          <div class=\"divloginbtn\">\n            <br>\n            <button [ngClass]=\"{'loginbtn_black':btnClicked == false,\n            'loginbtn_yellow':btnClicked == true}\" (click)=\"changePassword()\">{{'Password.change_password_btn' | translate }}</button>\n           </div>\n           <br>  \n          <br>\n        </ion-card-content>\n      </ion-card>\n     </div>\n\n    </div>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/change-password/change-password-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/change-password/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/change-password/change-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/pages/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/change-password/change-password.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/pages/change-password/change-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-55%);\n}\n\n.loginbtn_black {\n  background-color: black;\n  border: medium none;\n  color: #d39e1a;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.loginbtn_yellow {\n  background-color: #d39e1a;\n  border: medium none;\n  color: black;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 30px;\n  padding-top: 3vw;\n  padding-right: 20vw;\n  padding-bottom: 3vw;\n  padding-left: 20vw;\n  transition: all 0.3s linear 0s;\n  border-radius: 30px;\n  box-shadow: 0 2px 0 #d39e1a, 0 3px 0px #e4e4e4;\n}\n\n.inputcomp {\n  border-radius: 30px;\n  color: black;\n  background-color: #EEEEEE;\n  padding-left: 20px;\n}\n\n.cardcss {\n  border-radius: 45px;\n  margin-top: 50vw;\n  margin-bottom: 22vw;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.register {\n  color: #d39e1a;\n}\n\n.backgroundcss {\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\nion-toolbar, ion-segment, ion-content {\n  --background: black;\n}\n\nion-buttons {\n  color: #ffa60a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUdJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNKUjs7QURRSTtFQUVJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ1BSOztBRFVNO0VBRUUseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0QsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDVFI7O0FEb0JNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2pCUjs7QURzQk07RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQlI7O0FEdUJNO0VBQ0Usa0JBQUE7QUNwQlI7O0FEdUJNO0VBQ0UsY0FBQTtBQ3BCUjs7QUQ4Qkk7RUFFRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUM3Qk47O0FEaUNJO0VBRUksbUJBQUE7QUMvQlI7O0FEaUNJO0VBRUksY0FBQTtBQy9CUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAvLyBwYWdlLWhvbWUge1xuICBcbiAgICAjY29udGFpbmVyIHtcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTU1JSk7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICAgIH1cbiAgICBcbiAgICAubG9naW5idG5fYmxhY2tcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgICAgICBjb2xvcjogI2QzOWUxYTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgLy8gbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogM3Z3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwdnc7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmxvZ2luYnRuX3llbGxvd1xuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgLy8gbWFyZ2luOiBhdXRvO1xuICAgICAgICAgcGFkZGluZy10b3A6IDN2dztcbiAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwdnc7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG4gICAgICB9XG4gICAgXG4gICAgLy8gLmxvZ2luTGFiZWxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICAvLyAgICAgY29sb3I6IGJsYWNrO1xuICAgIC8vICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gICB9XG4gICAgXG4gICAgICAuaW5wdXRjb21we1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgICAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xuICAgICAgfVxuICAgIFxuICAgICAgLmNhcmRjc3N7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwdnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIydnc7XG4gICAgICB9XG4gICAgICAgXG4gICAgXG4gICAgICAuZGl2bG9naW5idG57XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5yZWdpc3RlcntcbiAgICAgICAgY29sb3I6I2QzOWUxYTtcbiAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDN2dyFpbXBvcnRhbnQ7ICAgIFxuICAgICAgfVxuICAgIFxuICAgIC8vICAgZGl2LmxhYmVsVGV4dHsgICAgICAgXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG4gICAgLy8gfVxuICAgIFxuICAgIC5iYWNrZ3JvdW5kY3Nze1xuICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIG1hcmdpbjogMHZ3O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLy8gb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICBcbiAgICBpb24tdG9vbGJhcixpb24tc2VnbWVudCxpb24tY29udGVudFxuICAgIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgfVxuICAgIGlvbi1idXR0b25zXG4gICAge1xuICAgICAgICBjb2xvcjogICNmZmE2MGE7XG4gICAgfVxuICAgICIsIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NSUpO1xufVxuXG4ubG9naW5idG5fYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICNkMzllMWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAzdnc7XG4gIHBhZGRpbmctcmlnaHQ6IDIwdnc7XG4gIHBhZGRpbmctYm90dG9tOiAzdnc7XG4gIHBhZGRpbmctbGVmdDogMjB2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUxYTtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3Z3O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xuICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xuICBwYWRkaW5nLWxlZnQ6IDIwdnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbn1cblxuLmlucHV0Y29tcCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2FyZGNzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDUwdnc7XG4gIG1hcmdpbi1ib3R0b206IDIydnc7XG59XG5cbi5kaXZsb2dpbmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgY29sb3I6ICNkMzllMWE7XG59XG5cbi5iYWNrZ3JvdW5kY3NzIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdG9vbGJhciwgaW9uLXNlZ21lbnQsIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBjb2xvcjogI2ZmYTYwYTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/change-password/change-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let ChangePasswordPage = class ChangePasswordPage {
    constructor(webService, router) {
        this.webService = webService;
        this.router = router;
        this.btnClicked = false;
        this.old_password = "";
        this.new_password = "";
        this.confirm_pass = "";
        this.dataToSend = {
            "email": "",
            "password": "",
            "first_name": "",
            "last_name": "",
            "birth_date": "",
            "telephone": "",
            "address": "",
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //get token
            this.token = (yield Storage.get({ key: 'accessToken' })).value;
            //get user Infos
            this.userInfo = JSON.parse((yield Storage.get({ key: "user_infos" })).value);
            console.log("Storage : ", this.userInfo);
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
        });
    }
    /////////////////////////////////////////////////////
    changePassword() {
        this.btnClicked = true;
        setTimeout(() => {
            this.btnClicked = false;
        }, 1000);
        /////////////////////////////////
        if (this.old_password && this.new_password && this.confirm_pass) {
            if (this.new_password == this.confirm_pass) {
                if (this.old_password == this.userInfo.password) {
                    // if all the fields are correct
                    //data to be sent
                    // console.log(typeof(this.mobilenumber.toString( )))
                    this.dataToSend.email = this.userInfo.email,
                        this.dataToSend.password = this.new_password,
                        //present loader
                        this.webService.presentLoading();
                    //call the web service
                    this.webService.changeClientPasssword(this.userInfo.id, this.token, this.dataToSend).subscribe(res => {
                        //check if action failed or not
                        if (!res.details) {
                            console.log(res);
                            this.webService.stopLoading();
                            if (this.lang == "fr") {
                                alert("Opération réussie!!!");
                            }
                            else {
                                alert("Successful operation!!!");
                            }
                            this.router.navigateByUrl("/dashboard");
                        }
                        else {
                            this.webService.stopLoading();
                            if (this.lang == "fr") {
                                alert("Opération pas réussie!!!");
                            }
                            else {
                                alert("Unsuccessful operation!!!");
                            }
                            // this.router.navigateByUrl("/dashboard");
                        }
                    }, error => {
                        this.webService.stopLoading();
                        if (this.lang == "fr") {
                            alert("Opération pas réussie!!!");
                        }
                        else {
                            alert("Unsuccessful operation!!!");
                        }
                        // this.router.navigateByUrl("/dashboard");               
                    });
                }
                else {
                    if (this.lang == "fr") {
                        alert("Ancien mot de passe incorrect !! ");
                    }
                    else {
                        alert("Incorrect old password!! ");
                    }
                }
            }
            else {
                //alert to tell that password and confrim password should be same 
                if (this.lang == "fr") {
                    alert("Le champ nouveau mot de passe doit être egal au champ confirmez mot de passe !! ");
                }
                else {
                    alert("New Password and Confirm Pasword Should be same !! ");
                }
            }
        }
        else {
            // alert to ask the user to fill all the fields
            if (this.lang == "fr") {
                alert("Remplir tous les champs obligatoires (*)  ");
            }
            else {
                alert("Fill All the mandatory fields (*) ");
            }
        }
        ////////////////////////////
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/change-password/change-password.page.scss")).default]
    })
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-change-password-change-password-module-es2015.js.map