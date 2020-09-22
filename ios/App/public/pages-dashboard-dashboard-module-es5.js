function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-item *ngIf=\"!isSearchbarOpened\">\r\n\r\n           <!-- menu icon -->\r\n      <ion-buttons *ngIf=\"!isSearchbarOpened\" slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n      <!-- title -->\r\n      <ion-title  *ngIf=\"!isSearchbarOpened\" >{{ 'DASHBOARD.title' | translate }}</ion-title>\r\n\r\n      <!-- search bar button -->\r\n      <ion-buttons slot=\"end\">\r\n        <!-- <ion-button icon-only *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\" > -->\r\n            <ion-icon color=\"primary\" name=\"search\" *ngIf=\"!isSearchbarOpened\" (click)=\"isSearchbarOpened=true\"> </ion-icon>\r\n         <!-- </ion-button> -->\r\n      </ion-buttons>\r\n      <!-- Search Bar -->\r\n\r\n    </ion-item>\r\n\r\n\r\n   <ion-searchbar color=\"primary\"  *ngIf=\"isSearchbarOpened\" placeholder=\"{{ 'DASHBOARD.search_here' | translate }}\" [(ngModel)]=\"term\" animated=\"true\" showCancelButton=\"true\" (ionCancel)=\"isSearchbarOpened=false\"></ion-searchbar>\r\n\r\n     \r\n  </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"show\" >\r\n\r\n\r\n    \r\n<!-- Default Segment / Search for the car according to the type of reservation -->\r\n <!--   First main Search  -->\r\n\r\n  <ion-card  *ngIf=\"!isSearchbarOpened\">\r\n        <ion-card-header>\r\n\r\n         <ion-card-title style=\" margin-left:15%; margin-bottom: 3%;font-size:1.2em\"> {{ 'DASHBOARD.search_car' | translate }} </ion-card-title>\r\n              <!-- Label only -->\r\n          <ion-segment [(ngModel)]=\"search_type\">\r\n            <ion-segment-button  value=\"class\">\r\n              <ion-label>{{ 'DASHBOARD.per_class' | translate }} </ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"price\">\r\n              <ion-label>{{ 'DASHBOARD.per_price' | translate }}</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"other\">\r\n              <label  textWrap=\"true\" style=\"font-size:0.9em\">{{ 'DASHBOARD.other' | translate }}</label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n             \r\n               <!-- ----------------------START search type = \"per class\"------------------------------- -->\r\n              <div *ngIf=\"search_type =='class'\">\r\n                <!-- start date -->\r\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchClass\"  >\r\n                   \r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.business_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"business\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.economic_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"economic\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.premium_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"premium\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{\"DASHBOARD.prestige_class\" | translate}}</ion-label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"prestige\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                  </ion-radio-group>\r\n\r\n                  <!-- button search -->\r\n\r\n                <ion-button style=\"margin-left:15px\" expand=\"block\"  (click)=\"openClass()\"> \r\n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n                      {{ 'DASHBOARD.btn_search' | translate }}\r\n                 </ion-button>\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------END search type = \"per class\"------------------------------------------------------------------ -->\r\n            \r\n               <!-- ----------------------START search type = \"per price\"------------------------------- -->\r\n              <div *ngIf=\"search_type =='price'\">\r\n                <!-- start date -->\r\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchPrice\">\r\n                   \r\n                    <ion-item>\r\n                      <label style=\"text-decoration : underline\" textWrap=\"true\"> {{\"DASHBOARD.per_day\" | translate}} </label>\r\n                      <!-- <ion-radio slot=\"end\" color=\"primary\" value=\"50000+\"></ion-radio> -->\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_sup_day\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"50000+\"></ion-radio>\r\n                    </ion-item>\r\n                     <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_less_day\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"50000-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n\r\n                         <!-- Hour  -->\r\n                    <ion-item>\r\n                      <label style=\"text-decoration : underline\"  textWrap=\"true\"> {{\"DASHBOARD.per_hour\" | translate}} </label>\r\n                      <!-- <ion-radio slot=\"end\" color=\"primary\" value=\"50000-\"></ion-radio> -->\r\n                    </ion-item>\r\n                   \r\n                    \r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.price_sup_hour\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\"  value=\"5000+\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\">{{\"DASHBOARD.price_less_hour\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5000-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    \r\n\r\n                  </ion-radio-group>\r\n\r\n                  <!-- button search -->\r\n\r\n                <ion-button expand=\"block\"  (click)=\"openPrice()\"> \r\n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n                      {{ 'DASHBOARD.btn_search' | translate }}\r\n                 </ion-button>\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------END search type = \"per price\"------------------------------------------------------------------ -->\r\n            \r\n               <!-- ----------------------START search type = \"Other\"------------------------------- -->\r\n              <div *ngIf=\"search_type =='other'\">\r\n                <!-- start date -->\r\n                <ion-radio-group allow-empty-selection [(ngModel)]=\"searchOther\" >\r\n                   \r\n                     <!-- Seats Number -->\r\n                    <ion-item>\r\n                      <label style=\"text-decoration : underline\" textWrap=\"true\"> {{\"DASHBOARD.place_nbr\" | translate}} </label>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.place_sup\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5p+\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.place_less\" | translate}}</label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5p-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                      <!-- Baggage Number -->\r\n                    <ion-item>\r\n                      <label  style=\"text-decoration : underline\" textWrap=\"true\"> {{\"DASHBOARD.baggage_nbr\" | translate}} </label>\r\n                    </ion-item>\r\n                   \r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.baggage_sup\" | translate}} </label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5b+\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item>\r\n                      <label  textWrap=\"true\"> {{\"DASHBOARD.baggage_less\" | translate}}</label>\r\n                      <ion-radio slot=\"end\" color=\"primary\" value=\"5b-\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                   \r\n                    \r\n\r\n                  </ion-radio-group>\r\n\r\n                  <!-- button search -->\r\n\r\n                <ion-button expand=\"block\"  (click)=\"openOther()\"> \r\n                      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n                      {{ 'DASHBOARD.btn_search' | translate }}\r\n                 </ion-button>\r\n                \r\n               </div>\r\n\r\n\r\n            <!-- ----------------------END search type = \"Other\"------------------------------------------------------------------ -->\r\n            \r\n\r\n\r\n                \r\n\r\n        </ion-card-content>\r\n\r\n        <!-- List of cars -->\r\n      \r\n  </ion-card>\r\n\r\n     <ion-list-header  style=\" margin-left:23%\"> \r\n          <ion-chip *ngIf=\"!isSearchbarOpened\" > {{ 'DASHBOARD.our_vehicles' | translate }}  <br>\r\n             <ion-icon   name=\"caret-down-sharp\"></ion-icon>\r\n           </ion-chip >\r\n\r\n    \r\n     </ion-list-header>\r\n\r\n\r\n     <ion-card *ngFor=\"let item of filterData | filter:term\">\r\n    \r\n        <div *ngFor=\"let photo of item.photo; let i = index \" > \r\n          \r\n          <img *ngIf=\"i== 0\"  [src]=\"photo.image\" />\r\n          \r\n        </div>\r\n        \r\n        <ion-card-header>\r\n                   \r\n          <ion-card-title  > {{item.modele.libelle}}</ion-card-title>\r\n\r\n\r\n          <ion-card-subtitle>\r\n             \r\n                <!-- type of motor -->\r\n                <ion-chip >\r\n                  <ion-icon name=\"car\"></ion-icon>\r\n                  <ion-label >{{item.type_caburant}}</ion-label>\r\n                </ion-chip>\r\n                <!-- Car price-->\r\n                <ion-chip >\r\n                  <!-- <ion-icon name=\"medal\" ></ion-icon> -->\r\n                  <ion-label  textWrap=\"true\">{{item.per_day}} F CFA / {{ 'DASHBOARD.day' | translate }}</ion-label>\r\n                </ion-chip> <br>\r\n                <!-- Number of Seats-->\r\n                <ion-chip >\r\n                  <ion-icon name=\"person\"></ion-icon>\r\n                  <ion-label >{{item.passager}} {{ 'DASHBOARD.seats' | translate }} </ion-label>\r\n                </ion-chip>\r\n                <!-- car color -->\r\n              <ion-chip>\r\n                <ion-label >{{ 'DASHBOARD.color' | translate }} {{item.couleur}} </ion-label> \r\n              </ion-chip>\r\n\r\n          </ion-card-subtitle>\r\n\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n                        \r\n               <!-- More-->\r\n          <ion-button expand=\"block\"  (click)=\"carDetails(item.id)\"> \r\n  \r\n             <!-- <ion-chip style=\"margin-left:30%\" (click)=\"carDetails(item.id)\" > -->\r\n                <ion-label >{{ 'DASHBOARD.btn_view_details' | translate }} </ion-label>\r\n                <ion-icon name=\"chevron-forward\"></ion-icon>\r\n            <!-- </ion-chip> -->\r\n           </ion-button> \r\n\r\n      \r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    <!-- </ion-item> -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card, ion-toolbar, ion-segment {\n  --background: black;\n}\n\nion-item, ion-menu-button {\n  --background: black;\n  color: #ffa60a;\n}\n\nion-radio {\n  background-color: white;\n}\n\nion-chip, ion-button {\n  color: black;\n  --background: #ffa60a;\n  border-color: black;\n}\n\nion-segment-button {\n  color: #ffa60a;\n}\n\nion-card-title {\n  color: white;\n}\n\nimg {\n  height: 250px;\n  width: 100%;\n}\n\nion-title {\n  margin-left: -10%;\n  text-overflow: unset;\n  white-space: unset;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcGNraW5nZG9tL0RvY3VtZW50cy9pb25pYy10dXRvcmlhbC1tYXN0ZXIvaW9uaWNfcHJvamVjdC9sb2dpbkNhcC9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FDQUo7O0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNISjs7QURNQTtFQUVLLHVCQUFBO0FDSkw7O0FET0E7RUFFSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBRUksY0FBQTtBQ05KOztBRFNBO0VBRUksWUFBQTtBQ1BKOztBRFNBO0VBRUksYUFBQTtFQUNBLFdBQUE7QUNQSjs7QURVQTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsaW9uLXRvb2xiYXIsaW9uLXNlZ21lbnRcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjazsgXHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWl0ZW0saW9uLW1lbnUtYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7IFxyXG4gICAgY29sb3I6ICAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tcmFkaW9cclxue1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2hpcCxpb24tYnV0dG9uXHJcbntcclxuICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmE2MGE7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b25cclxue1xyXG4gICAgY29sb3IgOiAjZmZhNjBhO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZVxyXG57XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG59XHJcbmltZ1xyXG57XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbmlvbi10aXRsZVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdCA6IC0xMCU7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSIsImlvbi1jYXJkLCBpb24tdG9vbGJhciwgaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5pb24taXRlbSwgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmE2MGE7XG59XG5cbmlvbi1yYWRpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2hpcCwgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZhNjBhO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogI2ZmYTYwYTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/appService/app-service.service */
    "./src/app/service/appService/app-service.service.ts"); //import * as moment from 'moment';


    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(route, router, webService) {
        _classCallCheck(this, DashboardPage);

        //language
        // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.route = route;
        this.router = router;
        this.webService = webService;
        this.logo1 = '../assets/images/logo1.jpg';
        this.dataSaveReturn = ""; //////////////////////////////search bar elements for cars ////////////
        //////////////////////////////////////////////////////////////////////////////

        this.isSearchbarOpened = false;
        this.term = '';
        this.filterData = [{
          'modele': '',
          'id': '',
          'per_day': '',
          'per_hour': '',
          'airport': '',
          'color': ''
        }]; //////////////////////////////////////////////////////////////////////
        ////////////data for destination////////////////////////

        this.search_type = "class";
        this.list_original = [{
          'id': '',
          'destination': '',
          'coefficient': ''
        }];
        this.list_to_show = [{
          'id': '',
          'destination': '',
          'coefficient': ''
        }];
        this.selected_index = -1;
        this.show_list = false; ///////////////////////end data for destination search ///////////////////

        this.show = false; // used to show page content
        // date

        this.setDate();
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Storage.get({
                      key: 'SELECTED LANGUAGE'
                    });

                  case 2:
                    this.lang = _context3.sent.value;
                    ////////////////////////////////////////////
                    //get voitures list
                    //present loading
                    this.webService.presentLoading();
                    this.webService.getVoitures().subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _this2 = this;

                        var _loop, i;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                //console.log("getting voitures : ",res); 
                                if (!res.details) {
                                  if (res.length > 0) {
                                    this.filterData = res; ////get the different prices of every car

                                    _loop = function _loop(i) {
                                      _this2.webService.getPriceCar(_this2.filterData[i].id).subscribe(function (resp) {
                                        _this2.filterData[i].per_day = resp[0].prix; //  this.filterData[i].per_hour = resp[1].prix;
                                        //  this.filterData[i].airport = resp[2].prix;
                                      });
                                    };

                                    for (i = 0; i < this.filterData.length; i++) {
                                      _loop(i);
                                    } /////end get the different price of each car

                                  } else {
                                    //no  cars
                                    if (this.lang == "fr") {
                                      alert("Aucune Voiture Disponible !!! ");
                                    } else {
                                      alert("No Car Available !!! ");
                                    }
                                  }
                                } else {
                                  //no  cars
                                  if (this.lang == "fr") {
                                    alert("Oops une erreur !!! ");
                                  } else {
                                    alert("Oops an Error !!! ");
                                  }
                                } ////////////////////////////////////////////////////////////////////////////   
                                //get Destination list


                                this.webService.getDestinations().subscribe(function (res) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            //console.log("getting Destinations : ",res); 
                                            if (!res.details) {
                                              if (res.length > 0) {
                                                this.list_original = res;
                                                this.show = true;
                                              } else {
                                                //no  cars
                                                if (this.lang == "fr") {
                                                  alert("Aucune Destination Disponible !!! ");
                                                } else {
                                                  alert("No Destination Available !!! ");
                                                }
                                              }
                                            } else {
                                              //no  cars
                                              if (this.lang == "fr") {
                                                alert("Oops une erreur !!! ");
                                              } else {
                                                alert("Oops an Error !!! ");
                                              }
                                            } //  console.log("res : ", this.list_original)


                                            this.webService.stopLoading();

                                          case 2:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee, this);
                                  }));
                                }); //// end get destinations
                                ////////////////////////////////////////////////////////////////////

                              case 2:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, function (error) {
                      _this.webService.stopLoading();

                      if (_this.lang == "fr") {
                        alert("Erreur Serveur !! ");
                      } else {
                        alert("Server Error!! ");
                      }
                    }); /// end get voitures
                    ////////////////////////////////////////////////////

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } //end of ngOnInit
        ///////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////

      }, {
        key: "setDate",
        value: function setDate() {
          var date = new Date();
          var month, day; //today's date

          this.today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

          if (date.getMonth() + 1 < 10) {
            month = "0" + (date.getMonth() + 1);
          } else {
            month = date.getMonth() + 1;
          }

          if (date.getDate() < 10) {
            day = "0" + date.getDate();
          } else {
            day = date.getDate();
          }

          this.today = date.getFullYear() + "-" + month + "-" + day; //maximum date

          var x = new Date().setDate(date.getDate() + 90);
          this.maxdate = new Date(x);

          if (this.maxdate.getMonth() + 1 < 10) {
            month = "0" + (this.maxdate.getMonth() + 1);
          } else {
            month = this.maxdate.getMonth() + 1;
          }

          if (this.maxdate.getDate() < 10) {
            day = "0" + this.maxdate.getDate();
          } else {
            day = this.maxdate.getDate();
          }

          this.maxdate = this.maxdate.getFullYear() + "-" + month + "-" + day; //console.log("Today = " + this.today + " \n MAX DATE : "+ this.maxdate); 
        } ///////////////end set Date////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////
        //this method is used to print the details of a selected car //////////////

      }, {
        key: "carDetails",
        value: function carDetails(carID) {
          //call another page and fetch the details of the car
          this.router.navigate(['car-details'], {
            queryParams: {
              id: carID,
              prev: "/dashboard"
            }
          });
        } //////////////////////end call carDetails///////////////////////////
        //////////////// search class /////////////////////

      }, {
        key: "openClass",
        value: function openClass() {
          //console.log(this.searchClass);
          if (this.searchClass == 'business') {
            this.router.navigateByUrl("/business-class");
          } else if (this.searchClass == 'economic') {
            this.router.navigateByUrl("/economique");
          } else if (this.searchClass == 'premium') {
            this.router.navigateByUrl("/premium");
          } else if (this.searchClass == 'prestige') {
            this.router.navigateByUrl("/prestige");
          } else {
            //no  cars
            if (this.lang == "fr") {
              alert("Faites un choix SVP !!! ");
            } else {
              alert("Make a choice Please !!! ");
            }
          }
        } ////////////////  End search class ////////////////
        //////////////// search per price /////////////////////

      }, {
        key: "openPrice",
        value: function openPrice() {
          // console.log(this.searchPrice);
          if (this.searchPrice == '50000+') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchPrice,
                type: "price"
              }
            });
          } else if (this.searchPrice == '50000-') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchPrice,
                type: "price"
              }
            });
          } else if (this.searchPrice == '5000+') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchPrice,
                type: "price"
              }
            });
          } else if (this.searchPrice == '5000-') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchPrice,
                type: "price"
              }
            });
          } else {
            //no  cars
            if (this.lang == "fr") {
              alert("Faites un choix SVP !!! ");
            } else {
              alert("Make a choice Please !!! ");
            }
          }
        } ////////////////  End search per price ////////////////
        //////////////// search per Other /////////////////////

      }, {
        key: "openOther",
        value: function openOther() {
          //console.log(this.searchOther);
          if (this.searchOther == '5p+') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchOther,
                type: "other"
              }
            });
          } else if (this.searchOther == '5p-') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchOther,
                type: "other"
              }
            });
          } else if (this.searchOther == '5b+') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchOther,
                type: "other"
              }
            });
          } else if (this.searchOther == '5b-') {
            this.router.navigate(['car-filter'], {
              queryParams: {
                id: this.searchOther,
                type: "other"
              }
            });
          } else {
            //no  cars
            if (this.lang == "fr") {
              alert("Faites un choix SVP !!! ");
            } else {
              alert("Make a choice Please !!! ");
            }
          }
        } ////////////////  End search per Other////////////////
        //////////////method for destination search //////////////////
        /////////////////////////////////////////////////////

      }, {
        key: "onCancel",
        value: function onCancel(val) {
          this.show_list = false;
          this.list_to_show = [{
            'id': '',
            'destination': '',
            'coefficient': ''
          }];
        }
      }, {
        key: "click_bar",
        value: function click_bar() {
          this.list_to_show = [{
            'id': '',
            'destination': '',
            'coefficient': ''
          }];
          this.show_list = true;
        }
      }, {
        key: "click_item",
        value: function click_item(val) {
          for (var i = 0; i < this.list_original.length; i++) {
            if (this.list_to_show[val].destination.toUpperCase() === this.list_original[i].destination.toUpperCase()) {
              this.selected_index = i; //print the selected destination

              this.searchQuery = this.list_to_show[val].destination; // set the destinatination to be search

              this.destination_to_be_search = this.list_to_show[val];
              break;
            }
          }

          this.show_list = false;
        }
      }, {
        key: "change_query",
        value: function change_query(query) {
          var k = 0;
          this.list_to_show = [{
            'id': '',
            'destination': '',
            'coefficient': ''
          }];

          for (var i = 0; i < this.list_original.length; i++) {
            if (this.list_original[i].destination.toUpperCase().includes(query.toUpperCase())) {
              this.list_to_show[k] = this.list_original[i];
              k += 1;
            }
          }
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_service_appService_app_service_service__WEBPACK_IMPORTED_MODULE_4__["AppServiceService"]
      }];
    };

    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/pages/dashboard/dashboard.page.scss"))["default"]]
    })], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map