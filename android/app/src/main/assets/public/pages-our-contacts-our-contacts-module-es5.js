function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-our-contacts-our-contacts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-contacts/our-contacts.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-contacts/our-contacts.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOurContactsOurContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n       <ion-item>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'DASHBOARD.our_contact' | translate }} </ion-title>\r\n    </ion-item> \r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n        <!-- Start contact -->\r\n       <ion-card *ngFor=\"let contact of mycontact; \" >\r\n          \r\n            <ion-card-content>\r\n\r\n\r\n\r\n               <div >\r\n              <ion-grid >\r\n                 <!--  Address -->\r\n                  <ion-row>\r\n                  \r\n                    <ion-col size=\"2\" style=\"font:30vw\" >\r\n\r\n                        <ion-icon name=\"pin-outline\"></ion-icon>\r\n          \r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"8\">\r\n                      <b>  {{contact.adresse}}  </b> \r\n                    </ion-col>\r\n\r\n                  </ion-row> \r\n              \r\n\r\n              </ion-grid>  \r\n                             \r\n              </div>\r\n\r\n                <!-- Postal Address -->\r\n\r\n                    <ion-item>\r\n                        <ion-icon name=\"mail-outline\"></ion-icon>\r\n                        <ion-label style=\"size: 20vw;\">&nbsp;&nbsp;&nbsp; <b> {{contact.adresse_postal}}</b></ion-label>\r\n                    </ion-item>\r\n\r\n\r\n                <!-- Telephone-->\r\n                  <!-- <ion-item>\r\n                      <ion-icon name=\"call-outline\"></ion-icon>\r\n                      <ion-label style=\"size: 20vw;\">&nbsp;&nbsp;&nbsp; <b> {{contact.telephone}}  </b></ion-label>\r\n                  </ion-item>   -->\r\n\r\n                  <ion-item>\r\n                      <ion-icon name=\"call-outline\"></ion-icon>\r\n                      <ion-label style=\"size: 20vw;\"  (click)=\"callNumber(phone)\" *ngFor=\"let phone of contact.telephone\">&nbsp;&nbsp;&nbsp;\r\n                        <b> {{phone}}</b>\r\n                       </ion-label>\r\n                  </ion-item> \r\n                \r\n               <!-- Whatsapp -->\r\n                    <!-- <ion-item>\r\n                        <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n                        <ion-label style=\"size: 20vw;\">&nbsp;&nbsp;&nbsp; <b> {{contact.whatsapp}}</b></ion-label>\r\n                    </ion-item>  -->\r\n                    <ion-item>\r\n                        <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n                        <!-- <a href=\"whatsapp://send?phone=8559080443\">8559080443</a> -->\r\n                        <ion-label style=\"size: 20vw;\" tappable (click)=\"openWhatsapp(whatPhone)\" *ngFor=\"let whatPhone of contact.whatsapp\">&nbsp;&nbsp;&nbsp; \r\n                          <b>{{whatPhone}}</b>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n                <!-- Email -->\r\n\r\n                   <ion-item>\r\n                        <ion-icon name=\"at-outline\"></ion-icon>\r\n                        <ion-label style=\"size: 20vw;\"  tappable (click)=\"openGmail(contact.email)\">&nbsp;&nbsp;&nbsp; <b> {{contact.email}}</b></ion-label>\r\n                    </ion-item>\r\n\r\n                <!-- Our Website -->\r\n\r\n                   <ion-item>\r\n                        <ion-icon name=\"globe-outline\"></ion-icon>\r\n                        <ion-label style=\"size: 20vw;\"  tappable (click)=\"openNyokah()\">&nbsp;&nbsp;&nbsp; <b> www.nyokah.ci </b></ion-label>\r\n                    </ion-item>\r\n              \r\n                \r\n                \r\n                   \r\n              \r\n               \r\n\r\n          \r\n            </ion-card-content>\r\n      </ion-card>\r\n        <!-- Stop Contact -->\r\n    <!-- -------------------------------------------------------------------------------------- -->\r\n\r\n      \r\n          <!-- Start : Fab button links -->\r\n          <ion-fab vertical=\"bottom\" horizontal=\"end\">\r\n              <ion-fab-button><ion-icon name=\"share-social-outline\"></ion-icon></ion-fab-button>\r\n              <ion-fab-list side=\"start\">\r\n                <!-- facebook -->\r\n                <ion-fab-button (click)=\"openFacebook()\">\r\n                  <ion-icon name=\"logo-facebook\" ></ion-icon>\r\n                </ion-fab-button >\r\n                \r\n                  <!-- linkedin -->\r\n                <ion-fab-button (click)=\"openLinkedin()\">\r\n                  <ion-icon name=\"logo-linkedin\"></ion-icon>\r\n                </ion-fab-button>\r\n                <!-- instagram -->\r\n                <ion-fab-button (click)=\"openInstagram()\">\r\n                  <ion-icon name=\"logo-instagram\"></ion-icon>\r\n                </ion-fab-button>\r\n               \r\n              </ion-fab-list>\r\n\r\n          </ion-fab>\r\n        <!-- End Fab button list -->\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/our-contacts/our-contacts-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/our-contacts/our-contacts-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OurContactsPageRoutingModule */

  /***/
  function srcAppPagesOurContactsOurContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurContactsPageRoutingModule", function () {
      return OurContactsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _our_contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./our-contacts.page */
    "./src/app/pages/our-contacts/our-contacts.page.ts");

    var routes = [{
      path: '',
      component: _our_contacts_page__WEBPACK_IMPORTED_MODULE_3__["OurContactsPage"]
    }];

    var OurContactsPageRoutingModule = function OurContactsPageRoutingModule() {
      _classCallCheck(this, OurContactsPageRoutingModule);
    };

    OurContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OurContactsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/our-contacts/our-contacts.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/our-contacts/our-contacts.module.ts ***!
    \***********************************************************/

  /*! exports provided: OurContactsPageModule */

  /***/
  function srcAppPagesOurContactsOurContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurContactsPageModule", function () {
      return OurContactsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _our_contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./our-contacts-routing.module */
    "./src/app/pages/our-contacts/our-contacts-routing.module.ts");
    /* harmony import */


    var _our_contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./our-contacts.page */
    "./src/app/pages/our-contacts/our-contacts.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var OurContactsPageModule = function OurContactsPageModule() {
      _classCallCheck(this, OurContactsPageModule);
    };

    OurContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _our_contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["OurContactsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_our_contacts_page__WEBPACK_IMPORTED_MODULE_6__["OurContactsPage"]]
    })], OurContactsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/our-contacts/our-contacts.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/our-contacts/our-contacts.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOurContactsOurContactsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-card {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-item, ion-fab-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-button {\n  color: black;\n  --background: #ffa60a;\n}\n\nion-chip {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-label {\n  color: white;\n}\n\nion-label, ion-icon {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3VyLWNvbnRhY3RzL0Q6XFxpb25pY2FwcFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxvdXItY29udGFjdHNcXG91ci1jb250YWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL291ci1jb250YWN0cy9vdXItY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7QUNBSjs7QURFQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFRSxZQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURRQTtFQUdJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7RUFFSSxZQUFBO0FDUko7O0FEV0E7RUFFSSxjQUFBO0FDVEo7O0FEWUE7RUFFSSxZQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXItY29udGFjdHMvb3VyLWNvbnRhY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyLGlvbi1zZWdtZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXG59XG5pb24tY2FyZFxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yIDogI2ZmYTYwYTtcbn1cblxuXG5cbmlvbi1pdGVtLCBpb24tZmFiLWJ1dHRvblxue1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxuICAgIGNvbG9yOiAgI2ZmYTYwYTtcbn1cblxuaW9uLWJ1dHRvblxue1xuICBjb2xvcjogYmxhY2s7IFxuICAtLWJhY2tncm91bmQ6ICAjZmZhNjBhO1xuXG59XG5cbmlvbi1jaGlwXG57XG5cbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbGFiZWxcbntcbiAgICBjb2xvciA6IHdoaXRlO1xuICAgIFxufVxuaW9uLWxhYmVsLGlvbi1pY29uXG57XG4gICAgY29sb3IgOiAjZmZhNjBhO1xufVxuXG5pb24tY2FyZC10aXRsZVxue1xuICAgIGNvbG9yIDogd2hpdGU7XG59IiwiaW9uLXRvb2xiYXIsIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWl0ZW0sIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwsIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/our-contacts/our-contacts.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/our-contacts/our-contacts.page.ts ***!
    \*********************************************************/

  /*! exports provided: OurContactsPage */

  /***/
  function srcAppPagesOurContactsOurContactsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurContactsPage", function () {
      return OurContactsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage;

    var OurContactsPage = /*#__PURE__*/function () {
      function OurContactsPage(iab, webService, callnumber, composer) {
        _classCallCheck(this, OurContactsPage);

        this.iab = iab;
        this.webService = webService;
        this.callnumber = callnumber;
        this.composer = composer;
        this.show = false;
      }

      _createClass(OurContactsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 2:
                    this.lang = _context.sent.value;
                    //start loader
                    this.webService.presentLoading(); /////////////////////////////////////////////////     
                    ///// start : get our contact

                    this.webService.getContacts().subscribe(function (res) {
                      //console.log(" contact  ",res);
                      if (res) {
                        _this.mycontact = res;
                      } else {// alert no response from server
                      } //Stop loader


                      _this.webService.stopLoading();

                      _this.show = true;
                    }); ///// end : get our contact
                    /////////////////////////////////////////////////   

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } ///////////////////////////////////////

      }, {
        key: "openFacebook",
        value: function openFacebook() {
          //console.log("facebook")
          this.iab.create('https://www.facebook.com/Nyokah-111809566836023/', '_blank'); //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_system')
        } //  ///////////////////////////////////////

      }, {
        key: "openTwitter",
        value: function openTwitter() {//console.log("twitter")
          //this.iab.create('https://www.facebook.com/Nyokah-111809566836023/','_blank')
        } //  ///////////////////////////////////////

      }, {
        key: "openLinkedin",
        value: function openLinkedin() {
          //console.log("Linkedin")
          this.iab.create('https://www.linkedin.com/company/nyokah', '_blank');
        } //  ///////////////////////////////////////

      }, {
        key: "openInstagram",
        value: function openInstagram() {
          // console.log("Instagram")
          this.iab.create('https://instagram.com/nyokah_infos?igshid=1d2kvuj8z5sgr', '_blank');
        } //////////////////////////////////////////////////////

      }, {
        key: "openWhatsapp",
        value: function openWhatsapp(number) {
          //console.log("Number : ",no);
          //  this.iab.create('https://wa.me/+916284134683','_blank');
          if (this.lang == 'en') {
            this.iab.create("https://wa.me/" + number + "?text= Hi! I'm%20interested%20in%20your%20car%20for%20rent.", '_system');
          } else if (this.lang == 'fr') {
            this.iab.create("https://wa.me/" + number + "?text=Salut!%20Je%20suis%20intéressé%20par%20votre%20voiture%20à%20louer.", '_system');
          } //this.iab.create('https://wa.me/0916284134683/','_system');

        } //////////////////////////////////////////////////////

      }, {
        key: "callNumber",
        value: function callNumber(number) {
          this.callnumber.callNumber(number, true) // .then(res => console.log('Launched dialer!', res))
          // .catch(err => console.log('Error launching dialer', err));
          .then(function (res) {})["catch"](function (err) {});
        } /////////////////////////////////////////////////////////////

      }, {
        key: "openNyokah",
        value: function openNyokah() {
          // console.log("Nyokah")
          this.iab.create('https://www.nyokah.ci', '_blank');
        } ////////////////////////////////////////////////////////////////

      }, {
        key: "openGmail",
        value: function openGmail(email) {
          //console.log("email :",email);
          if (this.lang == 'en') {
            this.composer.open({
              to: email,
              subject: 'Car Booking',
              body: ' Hi, i am interested in your car for booking ...',
              isHtml: true
            });
          } else if (this.lang == 'fr') {
            this.composer.open({
              to: email,
              subject: 'Reservation de Voiture',
              body: ' Salut, je suis intéressé par une de vos voitures...',
              isHtml: true
            });
          }
        }
      }]);

      return OurContactsPage;
    }();

    OurContactsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_3__["AppServiceService"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__["EmailComposer"]
      }];
    };

    OurContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-our-contacts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./our-contacts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/our-contacts/our-contacts.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./our-contacts.page.scss */
      "./src/app/pages/our-contacts/our-contacts.page.scss"))["default"]]
    })], OurContactsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-our-contacts-our-contacts-module-es5.js.map