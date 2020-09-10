function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-feedbacks-send-feedbacks-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSendFeedbacksSendFeedbacksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n      <ion-item >\r\n\r\n         <!-- menu icon -->\r\n        <ion-buttons  slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <!-- title -->\r\n        <ion-title >{{ 'DASHBOARD.send_feedback' | translate }}</ion-title>\r\n        <!-- <ion-title >POST TESTIMONIAL</ion-title> -->\r\n      </ion-item>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n        <!-- profile Image -->\r\n       \r\n\r\n   <ion-card>\r\n\r\n      \r\n      <ion-card-header>\r\n        <ion-card-subtitle>\r\n           \r\n         \r\n        </ion-card-subtitle>\r\n        <!-- <ion-card-title class=\"divloginbtn\" > {{ 'DASHBOARD.post_a_testimonial' | translate }}</ion-card-title> -->\r\n        <!-- <ion-card-title  > POST A TESTIMONIAL :</ion-card-title> -->\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n                <!-- name      -->\r\n              <ion-label style=\"font-size: 5vw;\">&nbsp; <b> {{ 'DASHBOARD.testimonial' | translate }} : </b></ion-label>\r\n              <!-- <ion-label style=\"size: 20vw;\">&nbsp; <b> Testimonial : </b></ion-label> -->\r\n              <br>   \r\n              <!-- <ion-input  type=\"text\" [(ngModel)]=\"feedback\"  placeholder=\"First name\"></ion-input> -->\r\n              <ion-textarea style=\"border:solid 1px gray; border-radius: 5vw;\" rows=\"6\" cols=\"50\" [(ngModel)]=\"feedback\" placeholder=\"Enter any text here...\"></ion-textarea>\r\n              <br>\r\n           \r\n            \r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  <!-- </ion-item> -->\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <!-- <ion-toolbar> -->\r\n       <!-- if the token is not null -->\r\n    <ion-button  expand=\"full\"  [ngClass]=\"{'loginbtn_black':btnClicked == true,\r\n    'loginbtn_yellow':btnClicked == false}\" (click)=\"save()\">{{ 'DASHBOARD.post_testimonial' | translate }}</ion-button>\r\n\r\n\r\n  <!-- </ion-toolbar> -->\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/send-feedbacks/send-feedbacks-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/send-feedbacks/send-feedbacks-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SendFeedbacksPageRoutingModule */

  /***/
  function srcAppPagesSendFeedbacksSendFeedbacksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendFeedbacksPageRoutingModule", function () {
      return SendFeedbacksPageRoutingModule;
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


    var _send_feedbacks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./send-feedbacks.page */
    "./src/app/pages/send-feedbacks/send-feedbacks.page.ts");

    var routes = [{
      path: '',
      component: _send_feedbacks_page__WEBPACK_IMPORTED_MODULE_3__["SendFeedbacksPage"]
    }];

    var SendFeedbacksPageRoutingModule = function SendFeedbacksPageRoutingModule() {
      _classCallCheck(this, SendFeedbacksPageRoutingModule);
    };

    SendFeedbacksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendFeedbacksPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/send-feedbacks/send-feedbacks.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/send-feedbacks/send-feedbacks.module.ts ***!
    \***************************************************************/

  /*! exports provided: SendFeedbacksPageModule */

  /***/
  function srcAppPagesSendFeedbacksSendFeedbacksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendFeedbacksPageModule", function () {
      return SendFeedbacksPageModule;
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


    var _send_feedbacks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./send-feedbacks-routing.module */
    "./src/app/pages/send-feedbacks/send-feedbacks-routing.module.ts");
    /* harmony import */


    var _send_feedbacks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./send-feedbacks.page */
    "./src/app/pages/send-feedbacks/send-feedbacks.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SendFeedbacksPageModule = function SendFeedbacksPageModule() {
      _classCallCheck(this, SendFeedbacksPageModule);
    };

    SendFeedbacksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _send_feedbacks_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendFeedbacksPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_send_feedbacks_page__WEBPACK_IMPORTED_MODULE_6__["SendFeedbacksPage"]]
    })], SendFeedbacksPageModule);
    /***/
  },

  /***/
  "./src/app/pages/send-feedbacks/send-feedbacks.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/send-feedbacks/send-feedbacks.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSendFeedbacksSendFeedbacksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button, ion-card-title {\n  color: #ffa60a;\n}\n\nion-label {\n  color: #ffa60a;\n}\n\n.image-icon {\n  height: 90px;\n  width: 200px;\n  border-radius: 50px;\n}\n\nion-input {\n  border-radius: 30px;\n  color: black;\n  background-color: white;\n}\n\n.divloginbtn {\n  text-align: center;\n}\n\n.loginbtn_black {\n  background-color: black;\n  color: #ffa60a;\n  font-weight: 800;\n}\n\n.loginbtn_yellow {\n  background-color: #ffa60a;\n  color: black;\n  font-weight: 800;\n}\n\nion-textarea {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VuZC1mZWVkYmFja3MvRDpcXGlvbmljNFxcbG9naW5DYXAvc3JjXFxhcHBcXHBhZ2VzXFxzZW5kLWZlZWRiYWNrc1xcc2VuZC1mZWVkYmFja3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZW5kLWZlZWRiYWNrcy9zZW5kLWZlZWRiYWNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBRUksY0FBQTtBQ0xKOztBRFFBO0VBRUksY0FBQTtBQ05KOztBRFFBO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFFBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0FDTko7O0FEUUU7RUFFSSx1QkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ1JOOztBRGlCSTtFQUVFLHlCQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FDakJOOztBRDBCSTtFQUVFLFlBQUE7QUN4Qk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZW5kLWZlZWRiYWNrcy9zZW5kLWZlZWRiYWNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCxpb24tdG9vbGJhcixpb24tc2VnbWVudFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrOyBcclxufVxyXG5cclxuXHJcblxyXG5pb24taXRlbSxpb24tbWVudS1idXR0b25cclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbiAgICBjb2xvcjogICNmZmE2MGE7XHJcbn1cclxuXHJcbmlvbi1jaGlwLGlvbi1idXR0b25cclxue1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbixpb24tY2FyZC10aXRsZSBcclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tbGFiZWxcclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcbi5pbWFnZS1pY29uIHtcclxuXHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuaW9uLWlucHV0XHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIG1hcmdpbjogNXZ3IDM1dnc7XHJcbn1cclxuLmRpdmxvZ2luYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9naW5idG5fYmxhY2tcclxuICB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgICBjb2xvcjogI2ZmYTYwYTtcclxuICAgICAgLy9mb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAvLyAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vICAgcGFkZGluZzogM3Z3IDN2dzs7XHJcbiAgICAvLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vICAgYm94LXNoYWRvdzogMCAycHggMCAjZDM5ZTFhLCAwIDNweCAwcHggI2U0ZTRlNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luYnRuX3llbGxvd1xyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYwYTtcclxuICAgIC8vICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgLy9saW5lLWhlaWdodDogMzBweDtcclxuICAgIC8vICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gICBwYWRkaW5nOiAzdncgM3Z3OztcclxuICAgIC8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgLy8gICBib3gtc2hhZG93OiAwIDJweCAwICNkMzllMWEsIDAgM3B4IDBweCAjZTRlNGU0O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10ZXh0YXJlYVxyXG4gICAge1xyXG4gICAgICBjb2xvciA6IHdoaXRlXHJcbiAgICB9IiwiaW9uLWNhcmQsIGlvbi10b29sYmFyLCBpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbmlvbi1pdGVtLCBpb24tbWVudS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNoaXAsIGlvbi1idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2ZmYTYwYTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLCBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZhNjBhO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuLmltYWdlLWljb24ge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmRpdmxvZ2luYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5idG5fYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5sb2dpbmJ0bl95ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjBhO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/send-feedbacks/send-feedbacks.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/send-feedbacks/send-feedbacks.page.ts ***!
    \*************************************************************/

  /*! exports provided: SendFeedbacksPage */

  /***/
  function srcAppPagesSendFeedbacksSendFeedbacksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendFeedbacksPage", function () {
      return SendFeedbacksPage;
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


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var SendFeedbacksPage = /*#__PURE__*/function () {
      function SendFeedbacksPage(webService, router) {
        _classCallCheck(this, SendFeedbacksPage);

        this.webService = webService;
        this.router = router;
        this.btnClicked = false; //data to be sent

        this.dataToSend = {
          "client": 0,
          "text": "string",
          "is_active": true
        };
      }

      _createClass(SendFeedbacksPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Storage.get({
                      key: 'accessToken'
                    });

                  case 2:
                    this.token = _context.sent.value;
                    _context.next = 5;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 5:
                    this.lang = _context.sent.value;
                    _context.t0 = JSON;
                    _context.next = 9;
                    return Storage.get({
                      key: "user_infos"
                    });

                  case 9:
                    _context.t1 = _context.sent.value;
                    this.userInfo = _context.t0.parse.call(_context.t0, _context.t1);
                    // get the user id and set client into data to send
                    this.dataToSend.client = this.userInfo.id;

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this = this;

          this.btnClicked = true;
          console.log("btnClicked : ", this.btnClicked);
          setTimeout(function () {
            _this.btnClicked = false; // this.editableText=true;
          }, 1000);

          if (this.feedback && this.feedback !== "") {
            // set text
            this.dataToSend.text = this.feedback; //call post feedbacks service

            this.webService.postFeedbacks(this.dataToSend, this.token).subscribe(function (resp) {
              if (resp) {
                console.log("done successfully");
              }

              _this.myAlert(0, _this.lang);
            }, function (error) {
              _this.myAlert(1, _this.lang);
            });
          } else {
            if (this.lang == "fr") {
              alert("Remplissez le champ message SVP! ");
            } else {
              alert("Please,fill the message field !");
            }
          }
        } //alert  method

      }, {
        key: "myAlert",
        value: function myAlert(id, lang) {
          if (id == 0) {
            if (lang == "fr") {
              alert("Votre Requête a été envoyée avec succès !");
            } else {
              alert("Your Request has been sent successfully !");
            }

            this.router.navigateByUrl("/dashboard");
          } else {
            if (lang == "fr") {
              alert("Désolé, une erreur s'est produite, veuillez vérifier à nouveau votre saisie.");
            } else {
              alert("Sorry, an error has occurred please, check your entry again.");
            }
          }
        }
      }]);

      return SendFeedbacksPage;
    }();

    SendFeedbacksPage.ctorParameters = function () {
      return [{
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SendFeedbacksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-feedbacks',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./send-feedbacks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send-feedbacks/send-feedbacks.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./send-feedbacks.page.scss */
      "./src/app/pages/send-feedbacks/send-feedbacks.page.scss"))["default"]]
    })], SendFeedbacksPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-send-feedbacks-send-feedbacks-module-es5.js.map