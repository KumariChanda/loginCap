(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-report-client-report-client-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report-client/report-client.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report-client/report-client.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n      <ion-item>\n\n        <ion-icon color=\"light\" name=\"chevron-back\" (click)=\"prev()\" ></ion-icon>\n        <ion-title style=\"margin-left:15%\">{{\"DASHBOARD.my_report\" | translate }}</ion-title>\n\n      </ion-item>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"show\">\n\n    <!-- Trip/voyage Details -->\n \n\n\n     <ion-card >\n    \n        <ion-card-header>\n                 <ion-card-title style=\" margin-left:15%; margin-bottom: 3%;font-size:1.2em\" >{{\"DASHBOARD.question\" | translate}}</ion-card-title>\n\n          <ion-card-subtitle>\n             \n                \n                <ion-radio-group allow-empty-selection [(ngModel)]=\"marks\"  >\n                   \n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.very_good\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=5></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.good\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=4></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.average\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=3></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.bad\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=2></ion-radio>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>{{\"DASHBOARD.very_bad\" | translate}}</ion-label>\n                      <ion-radio slot=\"end\" color=\"primary\" value=1></ion-radio>\n                    </ion-item>\n\n                  </ion-radio-group>\n           \n\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n                        \n                <ion-textarea [(ngModel)]=\"comment\" auto-grow=\"true\"  placeholder=\"{{'DASHBOARD.comment'| translate}}\"></ion-textarea>\n\n        </ion-card-content>\n      </ion-card>\n\n    <!-- </ion-item> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-toolbar> -->\n          <!-- end the trip  -->\n    <ion-button expand=\"full\"  (click)=\"end()\" >{{\"RESERVECAR.btn_submit\" | translate }} </ion-button>\n   \n  <!-- </ion-toolbar> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/report-client/report-client-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/report-client/report-client-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReportClientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportClientPageRoutingModule", function() { return ReportClientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _report_client_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-client.page */ "./src/app/pages/report-client/report-client.page.ts");




const routes = [
    {
        path: '',
        component: _report_client_page__WEBPACK_IMPORTED_MODULE_3__["ReportClientPage"]
    }
];
let ReportClientPageRoutingModule = class ReportClientPageRoutingModule {
};
ReportClientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportClientPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/report-client/report-client.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/report-client/report-client.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportClientPageModule", function() { return ReportClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _report_client_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-client-routing.module */ "./src/app/pages/report-client/report-client-routing.module.ts");
/* harmony import */ var _report_client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-client.page */ "./src/app/pages/report-client/report-client.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ReportClientPageModule = class ReportClientPageModule {
};
ReportClientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _report_client_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportClientPageRoutingModule"]
        ],
        declarations: [_report_client_page__WEBPACK_IMPORTED_MODULE_6__["ReportClientPage"]]
    })
], ReportClientPageModule);



/***/ }),

/***/ "./src/app/pages/report-client/report-client.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/report-client/report-client.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: white;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title, ion-textarea {\n  color: white;\n}\n\nlabel {\n  font-size: 0.89em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0LWNsaWVudC9EOlxcaW9uaWNhcHBcXGxvZ2luQ2FwL3NyY1xcYXBwXFxwYWdlc1xccmVwb3J0LWNsaWVudFxccmVwb3J0LWNsaWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlcG9ydC1jbGllbnQvcmVwb3J0LWNsaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFFSSxjQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUko7O0FEVUE7RUFFSSxpQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwb3J0LWNsaWVudC9yZXBvcnQtY2xpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLGlvbi10b29sYmFyLGlvbi1zZWdtZW50XHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1pdGVtXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tYnV0dG9uXHJcbntcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIC0tYmFja2dyb3VuZDogICNmZmE2MGE7XHJcblxyXG59XHJcblxyXG5pb24tY2hpcFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvciA6ICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlLGlvbi10ZXh0YXJlYVxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59XHJcbmxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZTowLjg5ZW07XHJcbn1cclxuIiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZSwgaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44OWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/report-client/report-client.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/report-client/report-client.page.ts ***!
  \***********************************************************/
/*! exports provided: ReportClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportClientPage", function() { return ReportClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/appService/app-service.service */ "./src/app/service/appService/app-service.service.ts");






const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
const LNG_KEY = 'SELECTED LANGUAGE'; // this is used to fetch or manipulate the var(containing the selected language) present in the storage
let ReportClientPage = class ReportClientPage {
    constructor(webService, router, route, alertController) {
        this.webService = webService;
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.show = false;
        this.logo1 = '../assets/images/logo1.jpg';
        this.DataTosend1 = {
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
            "note_client": null,
            "commentaire_client": null
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
        this.reservID = 0;
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
    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////prev////////////////////////////////////////////////////
    prev() {
        this.router.navigateByUrl(this.page_prev);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    end() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var lang = (yield Storage.get({ key: LNG_KEY })).value;
            if (lang == "fr") {
                var textcancel = "Non ";
                var textok = "Oui ";
                var message = " ";
                var myheader = "Confirmation ";
            }
            else {
                var textcancel = "No ";
                var textok = "Yes ";
                var message = " ";
                var myheader = "Confirmation ";
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
                            //this.filterData.etape_location = 5;
                            //   this.DataTosend.id = this.filterData[id].id;
                            this.DataTosend1.date_location = this.filterData.date_location + "T" + this.filterData.heure_debut + ".961Z";
                            this.DataTosend1.date_debut = this.filterData.date_debut + "T" + this.filterData.heure_debut + ".961Z";
                            this.DataTosend1.date_fin = this.filterData.date_fin + "T" + this.filterData.heure_fin + ".961Z";
                            this.DataTosend1.montant = this.filterData.montant;
                            this.DataTosend1.message = this.filterData.message;
                            this.DataTosend1.client = this.userId;
                            this.DataTosend1.voiture = this.filterData.voiture;
                            this.DataTosend1.type_location = this.filterData.type_location;
                            this.DataTosend1.depart = this.filterData.depart_id;
                            this.DataTosend1.destination = this.filterData.destination_id;
                            this.DataTosend1.etape_location = this.filterData.etape_location;
                            this.DataTosend1.optionnel = this.filterData.optionnel;
                            this.DataTosend1.note_client = parseInt(this.marks);
                            this.DataTosend1.commentaire_client = this.comment;
                            console.log(this.DataTosend1, "\n");
                            //call the EditLocation API 
                            this.webService.presentLoading(); // present loader
                            this.webService.EditLocation(this.filterData.id, this.token, this.DataTosend1).subscribe(res => {
                                console.log(res);
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
            this.router.navigateByUrl("/my-bookings");
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
ReportClientPage.ctorParameters = () => [
    { type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_5__["AppServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ReportClientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-client',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report-client.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report-client/report-client.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./report-client.page.scss */ "./src/app/pages/report-client/report-client.page.scss")).default]
    })
], ReportClientPage);



/***/ })

}]);
//# sourceMappingURL=pages-report-client-report-client-module-es2015.js.map