(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-feedbacks-send-feedbacks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n      <ion-item >\n\n         <!-- menu icon -->\n        <ion-buttons  slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <!-- title -->\n        <ion-title size=\"small\" >{{ 'DASHBOARD.send_feedback' | translate }}</ion-title>\n        <!-- <ion-title >POST TESTIMONIAL</ion-title> -->\n      </ion-item>\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n        <!-- profile Image -->\n       \n\n   <ion-card>\n\n      \n      <ion-card-header>\n        <ion-card-subtitle>\n           \n         \n        </ion-card-subtitle>\n        <!-- <ion-card-title class=\"divloginbtn\" > {{ 'DASHBOARD.post_a_testimonial' | translate }}</ion-card-title> -->\n        <!-- <ion-card-title  > POST A TESTIMONIAL :</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n                <!-- name      -->\n              <ion-label style=\"font-size: 5vw;\">&nbsp; <b> {{ 'DASHBOARD.testimonial' | translate }} : </b></ion-label>\n              <!-- <ion-label style=\"size: 20vw;\">&nbsp; <b> Testimonial : </b></ion-label> -->\n              <br>   \n              <!-- <ion-input  type=\"text\" [(ngModel)]=\"feedback\"  placeholder=\"First name\"></ion-input> -->\n              <ion-textarea style=\"border:solid 1px gray; border-radius: 5vw;\" rows=\"6\" cols=\"50\" [(ngModel)]=\"feedback\" placeholder=\"Enter any text here...\"></ion-textarea>\n              <br>\n           \n            \n      </ion-card-content>\n    </ion-card>\n\n  <!-- </ion-item> -->\n\n\n\n\n</ion-content>\n<ion-footer>\n  <!-- <ion-toolbar> -->\n       <!-- if the token is not null -->\n    <ion-button  expand=\"full\"  [ngClass]=\"{'loginbtn_black':btnClicked == true,\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"save()\">{{ 'DASHBOARD.post_testimonial' | translate }}</ion-button>\n\n\n  <!-- </ion-toolbar> -->\n</ion-footer>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-label {\n  color: #ffa60a;\n}\n\n.image-icon {\n  height: 90px;\n  width: 200px;\n  border-radius: 50px;\n}\n\nion-input {\n  border-radius: 30px;\n  color: black;\n  background-color: white;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.loginbtn_black {\n  background-color: black;\n  color: #ffa60a;\n  font-weight: 800;\n}\n\n.loginbtn_yellow {\n  background-color: #ffa60a;\n  color: black;\n  font-weight: 800;\n}\n\nion-textarea {\n  color: white;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZmVlZGJhY2tzL3NlbmQtZmVlZGJhY2tzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VuZC1mZWVkYmFja3Mvc2VuZC1mZWVkYmFja3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUVJLGNBQUE7QUNMSjs7QURRQTtFQUVJLGNBQUE7QUNOSjs7QURRQTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURRQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtBQ05KOztBRFFFO0VBRUksdUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNSTjs7QURpQkk7RUFFRSx5QkFBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBQ2pCTjs7QUQwQkE7RUFFRSxZQUFBO0FDeEJGOztBRDBCQTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUN4QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZW5kLWZlZWRiYWNrcy9zZW5kLWZlZWRiYWNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxufVxuXG5cblxuaW9uLWl0ZW0saW9uLW1lbnUtYnV0dG9uXG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG4gICAgY29sb3I6ICAjZmZhNjBhO1xufVxuXG5pb24tY2hpcCxpb24tYnV0dG9uXG57XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLGlvbi1jYXJkLXRpdGxlIFxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWxhYmVsXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuLmltYWdlLWljb24ge1xuXG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG5pb24taW5wdXRcbntcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBtYXJnaW46IDV2dyAzNXZ3O1xufVxuLmRpdmxvZ2luYnRue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubG9naW5idG5fYmxhY2tcbiAge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgLy8gICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgICAgY29sb3I6ICNmZmE2MGE7XG4gICAgICAvL2ZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAvL2xpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIC8vICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vICAgcGFkZGluZzogM3Z3IDN2dzs7XG4gICAgLy8gICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXIgMHM7XG4gICAgLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC8vICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luYnRuX3llbGxvd1xuICB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjBhO1xuICAgIC8vICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIC8vZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgLy8gICBtYXJnaW46IGF1dG87XG4gICAgLy8gICBwYWRkaW5nOiAzdncgM3Z3OztcbiAgICAvLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLy8gICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xuICAgIH1cblxuaW9uLXRleHRhcmVhXG57XG4gIGNvbG9yIDogd2hpdGVcbn1cbmlvbi10aXRsZVxue1xuICAgIG1hcmdpbi1sZWZ0IDogLTEwJTtcbiAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSIsImlvbi1jYXJkLCBpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24taXRlbSwgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwLCBpb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiwgaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbi5pbWFnZS1pY29uIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5kaXZsb2dpbmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luYnRuX2JsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubG9naW5idG5feWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYwYTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */");

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
        console.log("btnClicked : ", this.btnClicked);
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
                    console.log("done successfully");
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