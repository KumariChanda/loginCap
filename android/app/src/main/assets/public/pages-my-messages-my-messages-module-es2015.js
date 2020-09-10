(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-messages-my-messages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-messages/my-messages.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-messages/my-messages.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n       <ion-item>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title> {{\"DASHBOARD.my_testimonial\" | translate}} </ion-title>\r\n    </ion-item> \r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"show\">\r\n\r\n          <!-- -------------------------------------------------------------------------------------- -->\r\n        <!-- Start contact -->\r\n       <ion-card *ngFor=\"let item of filterData \" >\r\n             <ion-card-header>\r\n                    <ion-card-title style=\"font-size: medium;\">{{item.text}}</ion-card-title>\r\n              <ion-card-subtitle>\r\n\r\n                  \r\n               <!-- Status -->\r\n                <ion-item>\r\n                    <ion-label > Status : </ion-label>\r\n                    <ion-chip slot=\"end\" style=\"color:green;border:1px,solid,green\"> Active </ion-chip>\r\n                  </ion-item>\r\n                <!-- Starting date -->\r\n                <ion-item>\r\n                    <ion-label > Date : </ion-label>\r\n                    <ion-chip slot=\"end\"> {{item.date}}</ion-chip>\r\n                </ion-item>\r\n                 \r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n      </ion-card>\r\n        <!-- Stop Contact -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/my-messages/my-messages-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/my-messages/my-messages-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyMessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMessagesPageRoutingModule", function() { return MyMessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-messages.page */ "./src/app/pages/my-messages/my-messages.page.ts");




const routes = [
    {
        path: '',
        component: _my_messages_page__WEBPACK_IMPORTED_MODULE_3__["MyMessagesPage"]
    }
];
let MyMessagesPageRoutingModule = class MyMessagesPageRoutingModule {
};
MyMessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyMessagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-messages/my-messages.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-messages/my-messages.module.ts ***!
  \*********************************************************/
/*! exports provided: MyMessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMessagesPageModule", function() { return MyMessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-messages-routing.module */ "./src/app/pages/my-messages/my-messages-routing.module.ts");
/* harmony import */ var _my_messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-messages.page */ "./src/app/pages/my-messages/my-messages.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let MyMessagesPageModule = class MyMessagesPageModule {
};
MyMessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyMessagesPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_my_messages_page__WEBPACK_IMPORTED_MODULE_6__["MyMessagesPage"]]
    })
], MyMessagesPageModule);



/***/ }),

/***/ "./src/app/pages/my-messages/my-messages.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-messages/my-messages.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktbWVzc2FnZXMvRDpcXGlvbmljNFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxteS1tZXNzYWdlc1xcbXktbWVzc2FnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1tZXNzYWdlcy9teS1tZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFFSSxjQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1tZXNzYWdlcy9teS1tZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbVxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcclxufVxyXG5cclxuaW9uLWJ1dHRvblxyXG57XHJcbiAgY29sb3I6IGJsYWNrOyBcclxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xyXG5cclxufVxyXG5cclxuaW9uLWNoaXBcclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/my-messages/my-messages.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-messages/my-messages.page.ts ***!
  \*******************************************************/
/*! exports provided: MyMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMessagesPage", function() { return MyMessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let MyMessagesPage = class MyMessagesPage {
    constructor(webservice, router) {
        this.webservice = webservice;
        this.router = router;
        this.show = false;
        this.filterData = [
            {
                text: "",
                date: '',
                //status : 1
                client: 1
            },
        ];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //start laoder
            this.webservice.presentLoading();
            //get token
            this.token = (yield Storage.get({ key: 'accessToken' })).value;
            //get user id
            this.userId = JSON.parse((yield Storage.get({ key: "user_infos" })).value).id;
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            //get testimonial list
            this.webservice.getFeedbacks(this.userId, this.token).subscribe(res => {
                if (res.detail) {
                    if (this.lang == "fr") {
                        alert("Aucun témoignage \n Retour à la page accueil");
                    }
                    else {
                        alert("No testimony \ n Back Home Page");
                    }
                    this.router.navigateByUrl("/dashboard");
                }
                else {
                    if (res.length == 0) {
                        if (this.lang == "fr") {
                            alert("Votre Liste de Temoignage est vide !! ");
                        }
                        else {
                            alert(" Your Testimonial List is Empty !!");
                        }
                        //stop loader
                        this.show = true;
                        this.webservice.stopLoading();
                        this.router.navigateByUrl("/dashboard");
                    }
                    else {
                        this.filterData = res;
                    }
                }
                //stop loader
                this.show = true;
                this.webservice.stopLoading();
            });
            ///end get testimonial
        });
    }
};
MyMessagesPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MyMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-messages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-messages/my-messages.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-messages.page.scss */ "./src/app/pages/my-messages/my-messages.page.scss")).default]
    })
], MyMessagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-messages-my-messages-module-es2015.js.map