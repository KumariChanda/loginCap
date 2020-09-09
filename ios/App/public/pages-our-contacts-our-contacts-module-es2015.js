(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-our-contacts-our-contacts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-contacts/our-contacts.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-contacts/our-contacts.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n       <ion-item>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'DASHBOARD.our_contact' | translate }} </ion-title>\n    </ion-item> \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\" >\n\n    <!-- -------------------------------------------------------------------------------------- -->\n        <!-- Start contact -->\n       <ion-card *ngFor=\"let contact of mycontact; \" >\n          \n            <ion-card-content>\n\n\n\n               <div >\n              <ion-grid >\n                 <!--  Address -->\n                  <ion-row>\n                  \n                    <ion-col size=\"2\" style=\"font:30vw\" >\n\n                        <ion-icon name=\"pin-outline\"></ion-icon>\n          \n                    </ion-col>\n\n                    <ion-col size=\"8\">\n                      <b>  {{contact.adresse}}  </b> \n                    </ion-col>\n\n                  </ion-row> \n              \n\n              </ion-grid>  \n                             \n              </div>\n\n                <!-- Postal Address -->\n\n                    <ion-item>\n                        <ion-icon name=\"mail-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp;&nbsp;&nbsp; <b> {{contact.adresse_postal}}</b></ion-label>\n                    </ion-item>\n\n\n                <!-- Telephone-->\n                  <!-- <ion-item>\n                      <ion-icon name=\"call-outline\"></ion-icon>\n                      <ion-label style=\"size: 20vw;\">&nbsp;&nbsp;&nbsp; <b> {{contact.telephone}}  </b></ion-label>\n                  </ion-item>   -->\n\n                  <ion-item>\n                      <ion-icon name=\"call-outline\"></ion-icon>\n                      <ion-label style=\"size: 20vw;\"  (click)=\"callNumber(phone)\" *ngFor=\"let phone of contact.telephone\">&nbsp;&nbsp;&nbsp;\n                        <b> {{phone}}</b>\n                       </ion-label>\n                  </ion-item> \n                \n               <!-- Whatsapp -->\n                    <!-- <ion-item>\n                        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\">&nbsp;&nbsp;&nbsp; <b> {{contact.whatsapp}}</b></ion-label>\n                    </ion-item>  -->\n                    <ion-item>\n                        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n                        <!-- <a href=\"whatsapp://send?phone=8559080443\">8559080443</a> -->\n                        <ion-label style=\"size: 20vw;\" tappable (click)=\"openWhatsapp(whatPhone)\" *ngFor=\"let whatPhone of contact.whatsapp\">&nbsp;&nbsp;&nbsp; \n                          <b>{{whatPhone}}</b>\n                        </ion-label>\n                    </ion-item>\n\n                <!-- Email -->\n\n                   <ion-item>\n                        <ion-icon name=\"at-outline\"></ion-icon>\n                        <ion-label style=\"size: 20vw;\"  tappable (click)=\"openGoogleplus()\">&nbsp;&nbsp;&nbsp; <b> {{contact.email}}</b></ion-label>\n                    </ion-item>\n              \n                \n                \n                   \n              \n               \n\n          \n            </ion-card-content>\n      </ion-card>\n        <!-- Stop Contact -->\n    <!-- -------------------------------------------------------------------------------------- -->\n\n      \n          <!-- Start : Fab button links -->\n          <ion-fab vertical=\"bottom\" horizontal=\"end\">\n              <ion-fab-button><ion-icon name=\"share-social-outline\"></ion-icon></ion-fab-button>\n              <ion-fab-list side=\"start\">\n                <!-- facebook -->\n                <ion-fab-button (click)=\"openFacebook()\">\n                  <ion-icon name=\"logo-facebook\" ></ion-icon>\n                </ion-fab-button >\n                  <!-- twitter -->\n                <ion-fab-button (click)=\"openTwitter()\">\n                  <ion-icon name=\"logo-twitter\"></ion-icon>\n                </ion-fab-button>\n                  <!-- linkedin -->\n                <ion-fab-button (click)=\"openLinkedin()\">\n                  <ion-icon name=\"logo-linkedin\"></ion-icon>\n                </ion-fab-button>\n                <!-- instagram -->\n                <ion-fab-button (click)=\"openInstagram()\">\n                  <ion-icon name=\"logo-instagram\"></ion-icon>\n                </ion-fab-button>\n                <!-- google plus -->\n                <ion-fab-button (click)=\"openGoogleplus()\">\n                  <ion-icon name=\"logo-google\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab-list>\n\n          </ion-fab>\n        <!-- End Fab button list -->\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/our-contacts/our-contacts-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/our-contacts/our-contacts-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OurContactsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurContactsPageRoutingModule", function() { return OurContactsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _our_contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-contacts.page */ "./src/app/pages/our-contacts/our-contacts.page.ts");




const routes = [
    {
        path: '',
        component: _our_contacts_page__WEBPACK_IMPORTED_MODULE_3__["OurContactsPage"]
    }
];
let OurContactsPageRoutingModule = class OurContactsPageRoutingModule {
};
OurContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OurContactsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/our-contacts/our-contacts.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/our-contacts/our-contacts.module.ts ***!
  \***********************************************************/
/*! exports provided: OurContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurContactsPageModule", function() { return OurContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _our_contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./our-contacts-routing.module */ "./src/app/pages/our-contacts/our-contacts-routing.module.ts");
/* harmony import */ var _our_contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-contacts.page */ "./src/app/pages/our-contacts/our-contacts.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let OurContactsPageModule = class OurContactsPageModule {
};
OurContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _our_contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["OurContactsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_our_contacts_page__WEBPACK_IMPORTED_MODULE_6__["OurContactsPage"]]
    })
], OurContactsPageModule);



/***/ }),

/***/ "./src/app/pages/our-contacts/our-contacts.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/our-contacts/our-contacts.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-label, ion-icon {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL291ci1jb250YWN0cy9vdXItY29udGFjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vdXItY29udGFjdHMvb3VyLWNvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FERUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFHSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKOztBRFdBO0VBRUksY0FBQTtBQ1RKOztBRFlBO0VBRUksWUFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3VyLWNvbnRhY3RzL291ci1jb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcixpb24tc2VnbWVudFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxufVxuaW9uLWNhcmRcbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbiAgICBjb2xvciA6ICNmZmE2MGE7XG59XG5cblxuXG5pb24taXRlbSwgaW9uLWZhYi1idXR0b25cbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcbiAgICBjb2xvcjogICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b25cbntcbiAgY29sb3I6IGJsYWNrOyBcbiAgLS1iYWNrZ3JvdW5kOiAgI2ZmYTYwYTtcblxufVxuXG5pb24tY2hpcFxue1xuXG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsXG57XG4gICAgY29sb3IgOiB3aGl0ZTtcbiAgICBcbn1cbmlvbi1sYWJlbCxpb24taWNvblxue1xuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGVcbntcbiAgICBjb2xvciA6IHdoaXRlO1xufSIsImlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1pdGVtLCBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG59XG5cbmlvbi1jaGlwIHtcbiAgY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxhYmVsLCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/our-contacts/our-contacts.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/our-contacts/our-contacts.page.ts ***!
  \*********************************************************/
/*! exports provided: OurContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurContactsPage", function() { return OurContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");





let OurContactsPage = class OurContactsPage {
    constructor(iab, webService, callnumber) {
        this.iab = iab;
        this.webService = webService;
        this.callnumber = callnumber;
        this.show = false;
    }
    ngOnInit() {
        //start loader
        this.webService.presentLoading();
        /////////////////////////////////////////////////     
        ///// start : get our contact
        this.webService.getContacts().subscribe(res => {
            console.log(" contact  ", res);
            if (res) {
                this.mycontact = res;
            }
            else {
                // alert no response from server
            }
            //Stop loader
            this.webService.stopLoading();
            this.show = true;
        });
        ///// end : get our contact
        /////////////////////////////////////////////////   
    }
    ///////////////////////////////////////
    openFacebook() {
        console.log("facebook");
        this.iab.create('https://www.facebook.com/Nyokah-111809566836023/', '_blank');
        //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_system')
    }
    //  ///////////////////////////////////////
    openTwitter() {
        console.log("twitter");
        //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
    }
    //  ///////////////////////////////////////
    openLinkedin() {
        console.log("Linkedin");
        // this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
    }
    //  ///////////////////////////////////////
    openInstagram() {
        console.log("Instagram");
        //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
    }
    //  ///////////////////////////////////////
    openGoogleplus() {
        console.log("Google plus");
        this.iab.create('https://mail.google.com/', '_system');
    }
    //////////////////////////////////////////////////////
    openWhatsapp(number) {
        //console.log("Number : ",no);
        //  this.iab.create('https://wa.me/+916284134683','_blank');
        this.iab.create("https://wa.me/" + number + "?text=I'm%20interested%20in%20your%20car%20for%20rent.", '_system');
        //this.iab.create('https://wa.me/0916284134683/','_system');
    }
    //////////////////////////////////////////////////////
    callNumber(number) {
        this.callnumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
};
OurContactsPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] }
];
OurContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./our-contacts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-contacts/our-contacts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./our-contacts.page.scss */ "./src/app/pages/our-contacts/our-contacts.page.scss")).default]
    })
], OurContactsPage);



/***/ })

}]);
//# sourceMappingURL=pages-our-contacts-our-contacts-module-es2015.js.map