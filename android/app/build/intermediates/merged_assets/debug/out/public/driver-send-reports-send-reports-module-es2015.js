(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-send-reports-send-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-reports/send-reports.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-reports/send-reports.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n      <ion-item>\r\n\r\n        <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\r\n        <ion-title style=\"margin-left:15%\">{{\"DASHBOARD.my_report\" | translate }}</ion-title>\r\n\r\n      </ion-item>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\">\r\n\r\n    <!-- Trip/voyage Details -->\r\n \r\n\r\n\r\n     <ion-card >\r\n    \r\n        <ion-card-header>\r\n                 <ion-card-title style=\" margin-left:15%; margin-bottom: 3%;font-size:1.2em\" >{{\"DASHBOARD.question\" | translate}}</ion-card-title>\r\n\r\n          <ion-card-subtitle>\r\n             \r\n                \r\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"marks\"  >\r\n                   \r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.very_good\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value='5'></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.good\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value='4'></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.average\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value='3'></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.bad\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value='2'></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.very_bad\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value='1'></ion-radio>\r\n                    </ion-item>\r\n\r\n                  </ion-radio-group>\r\n           \r\n\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n                <ion-textarea [(ngModel)]=\"comment\" auto-grow=\"true\"  placeholder=\"{{'DASHBOARD.comment'| translate}}\"></ion-textarea>\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <!-- <ion-toolbar> -->\r\n          <!-- Start the trip  -->\r\n    <ion-button expand=\"full\" *ngIf=\"filterData.etape_location == 4\" (click)=\"end()\" >{{\"DASHBOARD.end_trip\" | translate }} </ion-button>\r\n    <ion-button expand=\"full\" *ngIf=\"userType=='client'\" (click)=\"end()\" >{{\"RESERVECAR.btn_submit\" | translate }} </ion-button>\r\n   \r\n  <!-- </ion-toolbar> -->\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/driver/send-reports/send-reports-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SendReportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportsPageRoutingModule", function() { return SendReportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _send_reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-reports.page */ "./src/app/driver/send-reports/send-reports.page.ts");




const routes = [
    {
        path: '',
        component: _send_reports_page__WEBPACK_IMPORTED_MODULE_3__["SendReportsPage"]
    }
];
let SendReportsPageRoutingModule = class SendReportsPageRoutingModule {
};
SendReportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendReportsPageRoutingModule);



/***/ }),

/***/ "./src/app/driver/send-reports/send-reports.module.ts":
/*!************************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports.module.ts ***!
  \************************************************************/
/*! exports provided: SendReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportsPageModule", function() { return SendReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _send_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-reports-routing.module */ "./src/app/driver/send-reports/send-reports-routing.module.ts");
/* harmony import */ var _send_reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-reports.page */ "./src/app/driver/send-reports/send-reports.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let SendReportsPageModule = class SendReportsPageModule {
};
SendReportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _send_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendReportsPageRoutingModule"]
        ],
        declarations: [_send_reports_page__WEBPACK_IMPORTED_MODULE_6__["SendReportsPage"]]
    })
], SendReportsPageModule);



/***/ }),

/***/ "./src/app/driver/send-reports/send-reports.page.scss":
/*!************************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title, ion-textarea {\n  color: white;\n}\n\nlabel {\n  font-size: 0.89em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJpdmVyL3NlbmQtcmVwb3J0cy9EOlxcaW9uaWNhcHBcXGxvZ2luQ2FwL3NyY1xcYXBwXFxkcml2ZXJcXHNlbmQtcmVwb3J0c1xcc2VuZC1yZXBvcnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZHJpdmVyL3NlbmQtcmVwb3J0cy9zZW5kLXJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBRUUsWUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FEUUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBRUksY0FBQTtBQ1BKOztBRFVBO0VBRUksWUFBQTtBQ1JKOztBRFVBO0VBRUksaUJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlci9zZW5kLXJlcG9ydHMvc2VuZC1yZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tYnV0dG9uXHJcbntcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XHJcblxyXG59XHJcblxyXG5pb24tY2hpcFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlLGlvbi10ZXh0YXJlYVxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59XHJcbmxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTowLjg5ZW07XHJcbn1cclxuIiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSwgaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44OWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/driver/send-reports/send-reports.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/driver/send-reports/send-reports.page.ts ***!
  \**********************************************************/
/*! exports provided: SendReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportsPage", function() { return SendReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");






const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage
let SendReportsPage = class SendReportsPage {
    constructor(router, route, webService, alertController) {
        this.router = router;
        this.route = route;
        this.webService = webService;
        this.alertController = alertController;
        this.show = false;
        this.DataTosend = {
            "date_location": "",
            "date_debut": "",
            "date_fin": "",
            "montant": 0,
            "client": 0,
            "voiture": 0,
            "type_location": 0,
            "depart": null,
            "destination": 0,
            "message": "",
            "etape_location": 0,
            "optionnel": [],
            "note_chauffeur": null,
            "rapport_chauffeur": null
        };
        this.filterData = {
            "id": 0,
            "date_location": "",
            "date_debut": "",
            "date_fin": "",
            "heure_debut": "",
            "heure_fin": "",
            "montant": 0,
            "note_client": 0,
            "commentaire_client": "",
            "note_chauffeur": 0,
            "rapport_chauffeur": "",
            "client": 0,
            "clientname": "",
            "chauffeur": 0,
            "voiture": 0,
            "type_location": 0,
            "depart": 0,
            "depart_id": 0,
            "destination": 0,
            "destination_id": 0,
            "message": "",
            "photo": [{ "image": "" }],
            "modele": "",
            "etape_location": 0,
            "optionnel": [],
        };
        this.marks = "";
        this.comment = "";
        this.userType = "";
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //start laoder
            // this.webService.presentLoading();
            //get token
            this.token = (yield Storage.get({ key: 'accessToken' })).value;
            //get user id
            this.userId = JSON.parse((yield Storage.get({ key: "user_infos" })).value).id;
            //get Language
            this.lang = (yield Storage.get({ key: 'SELECTED LANGUAGE' })).value;
            //get data from prev page
            this.subscription = this.route.queryParams.subscribe((data) => {
                // console.log("selected ->", typeof(data.id));
                //receive the  prev page 
                this.page_prev = data.prev;
                //get the details of the car
                //receive the data infos
                this.filterData = JSON.parse(data.booked);
                console.log("Filterdata", this.filterData);
                this.show = true;
                //start stop loader
                // this.webService.stopLoading();
            });
        });
    }
    //////////////////////////////////////////////////////////////
    ////back to home ///
    prev() {
        this.router.navigateByUrl(this.page_prev);
    }
    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////Cancel ////////////////////////////////////////////////////
    end() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.marks != "") {
                var lang = (yield Storage.get({ key: LNG_KEY })).value;
                if (lang == "fr") {
                    var textcancel = "Non ";
                    var textok = "Oui ";
                    var message = "Voulez-vous Terminer ce trajet? ";
                    var myheader = "Validation ";
                }
                else {
                    var textcancel = "No ";
                    var textok = "Yes ";
                    var message = "Do you want to End this Trip? ";
                    var myheader = "Validation ";
                }
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: myheader,
                    message: '<strong>' + message + '</strong>',
                    buttons: [
                        {
                            text: textcancel,
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                //console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: textok,
                            handler: () => {
                                //change the location type ;
                                this.filterData.etape_location = 3;
                                this.DataTosend.date_location = this.filterData.date_location + "T" + this.filterData.heure_debut + ".961Z";
                                this.DataTosend.date_debut = this.filterData.date_debut + "T" + this.filterData.heure_debut + ".961Z";
                                this.DataTosend.date_fin = this.filterData.date_fin + "T" + this.filterData.heure_fin + ".961Z";
                                this.DataTosend.montant = this.filterData.montant;
                                this.DataTosend.message = this.filterData.message;
                                this.DataTosend.client = this.filterData.client;
                                this.DataTosend.voiture = this.filterData.voiture;
                                this.DataTosend.type_location = this.filterData.type_location;
                                this.DataTosend.depart = this.filterData.depart_id;
                                this.DataTosend.destination = this.filterData.destination_id;
                                this.DataTosend.etape_location = 3;
                                this.DataTosend.optionnel = this.filterData.optionnel;
                                this.DataTosend.note_chauffeur = parseInt(this.marks);
                                this.DataTosend.rapport_chauffeur = this.comment;
                                console.log(this.DataTosend, "\n");
                                //call the EditLocation API 
                                this.webService.presentLoading(); // present loader
                                this.webService.EditLocation(this.filterData.id, this.token, this.DataTosend).subscribe(res => {
                                    //  console.log(res)
                                    if (res.id) {
                                        this.webService.stopLoading();
                                        this.myAlert(0, this.lang);
                                    }
                                    else {
                                        this.webService.stopLoading();
                                        this.myAlert(1, this.lang);
                                    }
                                }, error => {
                                    this.webService.stopLoading();
                                    this.myAlert(1, this.lang);
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                if (lang == 'fr') {
                    alert("SVP\n Attribuez une note au trajet. ");
                }
                else {
                    alert("Please\n Mark  the ride. ");
                }
            }
        });
    }
    ////////////////////////////////////////
    //alert 2 method
    myAlert(id, lang) {
        if (id == 0) {
            if (lang == "fr") {
                alert("Merci pour votre contribution !");
            }
            else {
                alert("Thank you for your contribution !");
            }
            this.router.navigateByUrl("/home");
        }
        else {
            if (lang == "fr") {
                alert("Désolé, une erreur s'est produite.");
            }
            else {
                alert("Sorry, an error has occurred.");
            }
        }
    }
};
SendReportsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SendReportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./send-reports.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/driver/send-reports/send-reports.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./send-reports.page.scss */ "./src/app/driver/send-reports/send-reports.page.scss")).default]
    })
], SendReportsPage);



/***/ })

}]);
//# sourceMappingURL=driver-send-reports-send-reports-module-es2015.js.map