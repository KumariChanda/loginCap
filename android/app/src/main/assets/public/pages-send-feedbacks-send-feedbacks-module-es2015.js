(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-feedbacks-send-feedbacks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n      <ion-item >\n\n         <!-- menu icon -->\n        <ion-buttons  slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <!-- title -->\n        <ion-title >{{ 'DASHBOARD.send_feedback' | translate }}</ion-title>\n        <!-- <ion-title >POST TESTIMONIAL</ion-title> -->\n      </ion-item>\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n        <!-- profile Image -->\n       \n\n   <ion-card>\n\n      \n      <ion-card-header>\n        <ion-card-subtitle>\n           \n         \n        </ion-card-subtitle>\n        <!-- <ion-card-title class=\"divloginbtn\" > {{ 'DASHBOARD.post_a_testimonial' | translate }}</ion-card-title> -->\n        <!-- <ion-card-title  > POST A TESTIMONIAL :</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n                <!-- name      -->\n              <ion-label style=\"font-size: 5vw;\">&nbsp; <b> {{ 'DASHBOARD.testimonial' | translate }} : </b></ion-label>\n              <!-- <ion-label style=\"size: 20vw;\">&nbsp; <b> Testimonial : </b></ion-label> -->\n              <br>   \n              <!-- <ion-input  type=\"text\" [(ngModel)]=\"feedback\"  placeholder=\"First name\"></ion-input> -->\n              <ion-textarea style=\"border:solid 1px gray; border-radius: 5vw;\" rows=\"6\" cols=\"50\" [(ngModel)]=\"feedback\" placeholder=\"Enter any text here...\"></ion-textarea>\n              <br>\n           \n            \n      </ion-card-content>\n    </ion-card>\n\n  <!-- </ion-item> -->\n\n\n\n\n</ion-content>\n<ion-footer>\n  <!-- <ion-toolbar> -->\n       <!-- if the token is not null -->\n    <ion-button  expand=\"full\"  [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"save()\">{{ 'DASHBOARD.post_testimonial' | translate }}</ion-button>\n\n\n  <!-- </ion-toolbar> -->\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/send-feedbacks/send-feedbacks-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/send-feedbacks/send-feedbacks-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SendFeedbacksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFeedbacksPageRoutingModule", function() { return SendFeedbacksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _send_feedbacks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-feedbacks.page */ "./src/app/pages/send-feedbacks/send-feedbacks.page.ts");




const routes = [
    {
        path: '',
        component: _send_feedbacks_page__WEBPACK_IMPORTED_MODULE_3__["SendFeedbacksPage"]
    }
];
let SendFeedbacksPageRoutingModule = class SendFeedbacksPageRoutingModule {
};
SendFeedbacksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendFeedbacksPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/send-feedbacks/send-feedbacks.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/send-feedbacks/send-feedbacks.module.ts ***!
  \***************************************************************/
/*! exports provided: SendFeedbacksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFeedbacksPageModule", function() { return SendFeedbacksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _send_feedbacks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-feedbacks-routing.module */ "./src/app/pages/send-feedbacks/send-feedbacks-routing.module.ts");
/* harmony import */ var _send_feedbacks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-feedbacks.page */ "./src/app/pages/send-feedbacks/send-feedbacks.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SendFeedbacksPageModule = class SendFeedbacksPageModule {
};
SendFeedbacksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _send_feedbacks_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendFeedbacksPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_send_feedbacks_page__WEBPACK_IMPORTED_MODULE_6__["SendFeedbacksPage"]]
    })
], SendFeedbacksPageModule);



/***/ }),

/***/ "./src/app/pages/send-feedbacks/send-feedbacks.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/send-feedbacks/send-feedbacks.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-label {\n  color: #ffa60a;\n}\n\n.image-icon {\n  height: 90px;\n  width: 200px;\n  border-radius: 50px;\n}\n\nion-input {\n  border-radius: 30px;\n  color: black;\n  background-color: white;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.loginbtn_black {\n  background-color: black;\n  color: #ffa60a;\n  font-weight: 800;\n}\n\n.loginbtn_yellow {\n  background-color: #ffa60a;\n  color: black;\n  font-weight: 800;\n}\n\nion-textarea {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VuZC1mZWVkYmFja3MvRDpcXGlvbmljYXBwXFxsb2dpbkNhcC9zcmNcXGFwcFxccGFnZXNcXHNlbmQtZmVlZGJhY2tzXFxzZW5kLWZlZWRiYWNrcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZmVlZGJhY2tzL3NlbmQtZmVlZGJhY2tzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFFSSxjQUFBO0FDTEo7O0FEUUE7RUFFSSxjQUFBO0FDTko7O0FEUUE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTko7O0FEUUE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7QUNOSjs7QURRRTtFQUVJLHVCQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FDUk47O0FEaUJJO0VBRUUseUJBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QUNqQk47O0FEMEJJO0VBRUUsWUFBQTtBQ3hCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbmQtZmVlZGJhY2tzL3NlbmQtZmVlZGJhY2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG59XG5cblxuXG5pb24taXRlbSxpb24tbWVudS1idXR0b25cbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbiAgICBjb2xvcjogICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLGlvbi1idXR0b25cbntcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24saW9uLWNhcmQtdGl0bGUgXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tbGFiZWxcbntcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG4uaW1hZ2UtaWNvbiB7XG5cbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cbmlvbi1pbnB1dFxue1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIG1hcmdpbjogNXZ3IDM1dnc7XG59XG4uZGl2bG9naW5idG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5sb2dpbmJ0bl9ibGFja1xuICB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAvLyAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgICBjb2xvcjogI2ZmYTYwYTtcbiAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgLy8gICBtYXJnaW46IGF1dG87XG4gICAgLy8gICBwYWRkaW5nOiAzdncgM3Z3OztcbiAgICAvLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLy8gICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xuICAgIH1cbiAgICBcbiAgICAubG9naW5idG5feWVsbG93XG4gIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MGE7XG4gICAgLy8gICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgLy9mb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgLy9saW5lLWhlaWdodDogMzBweDtcbiAgICAvLyAgIG1hcmdpbjogYXV0bztcbiAgICAvLyAgIHBhZGRpbmc6IDN2dyAzdnc7O1xuICAgIC8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvLyAgIGJveC1zaGFkb3c6IDAgMnB4IDAgI2QzOWUxYSwgMCAzcHggMHB4ICNlNGU0ZTQ7XG4gICAgfVxuXG4gICAgaW9uLXRleHRhcmVhXG4gICAge1xuICAgICAgY29sb3IgOiB3aGl0ZVxuICAgIH0iLCJpb24tY2FyZCwgaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWl0ZW0sIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCwgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24sIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG4uaW1hZ2UtaWNvbiB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZGl2bG9naW5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbmJ0bl9ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxvZ2luYnRuX3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MGE7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/send-feedbacks/send-feedbacks.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/send-feedbacks/send-feedbacks.page.ts ***!
  \*************************************************************/
/*! exports provided: SendFeedbacksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFeedbacksPage", function() { return SendFeedbacksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let SendFeedbacksPage = class SendFeedbacksPage {
    constructor(webService, router) {
        this.webService = webService;
        this.router = router;
        this.btnClicked = false;
        //data to be sent
        this.dataToSend = {
            "client": 0,
            "text": "string",
            "is_active": true
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // get the value of token
            this.token = (yield Storage.get({ key: 'accessToken' })).value;
            //get the current app language 
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            //get user infos and extract user id
            this.userInfo = JSON.parse((yield Storage.get({ key: "user_infos" })).value);
            // get the user id and set client into data to send
            this.dataToSend.client = this.userInfo.id;
        });
    }
    save() {
        this.btnClicked = true;
        //console.log("btnClicked : ",this.btnClicked);     
        setTimeout(() => {
            this.btnClicked = false;
            // this.editableText=true;
        }, 1000);
        if (this.feedback && this.feedback !== "") {
            // set text
            this.dataToSend.text = this.feedback;
            //call post feedbacks service
            this.webService.postFeedbacks(this.dataToSend, this.token).subscribe(resp => {
                if (resp) {
                    // console.log("done successfully");
                }
                this.myAlert(0, this.lang);
            }, error => {
                this.myAlert(1, this.lang);
            });
        }
        else {
            if (this.lang == "fr") {
                alert("Remplissez le champ message SVP! ");
            }
            else {
                alert("Please,fill the message field !");
            }
        }
    }
    //alert  method
    myAlert(id, lang) {
        if (id == 0) {
            if (lang == "fr") {
                alert("Votre Requête a été envoyée avec succès !");
            }
            else {
                alert("Your Request has been sent successfully !");
            }
            this.router.navigateByUrl("/dashboard");
        }
        else {
            if (lang == "fr") {
                alert("Désolé, une erreur s'est produite, veuillez vérifier à nouveau votre saisie.");
            }
            else {
                alert("Sorry, an error has occurred please, check your entry again.");
            }
        }
    }
};
SendFeedbacksPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SendFeedbacksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-feedbacks',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./send-feedbacks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./send-feedbacks.page.scss */ "./src/app/pages/send-feedbacks/send-feedbacks.page.scss")).default]
    })
], SendFeedbacksPage);



/***/ })

}]);
//# sourceMappingURL=pages-send-feedbacks-send-feedbacks-module-es2015.js.map