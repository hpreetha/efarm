(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"common",
		"auth-auth-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%;\" class=\"root-container\">\r\n  <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n      <span class=\"header\">I Can Help!</span>\r\n      <span class=\"current-user-name\">{{userData?.userInfo?.name}}</span>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container fxFlexFill>\r\n    <mat-sidenav #sidenav>\r\n      <mat-nav-list>\r\n        <div class=\"account-info\">\r\n          <i class=\"material-icons\">account_circle</i>\r\n          <span>Welcome {{userData?.userInfo?.name || 'Guest'}}</span>\r\n        </div>\r\n        <a href=\"javascript: void(0)\" mat-list-item (click)=\"navigate('/dashboard')\">Home <i\r\n            class=\"material-icons\">\r\n            home\r\n          </i></a>\r\n        <a href=\"javascript: void(0)\" mat-list-item (click)=\"navigate('/dashboard/profile')\">Profile <i\r\n            class=\"material-icons\">\r\n            receipt\r\n          </i></a>\r\n        <a href=\"javascript: void(0)\" *ngIf=\"userData?.loggedIn\" (click)=\"navigate('/auth/sign-in', true)\"\r\n          mat-list-item>Sign Out <i class=\"material-icons\">\r\n            power_settings_new\r\n          </i></a>\r\n        <a href=\"javascript: void(0)\" *ngIf=\"!userData?.loggedIn\" (click)=\"navigate('/auth/sign-in')\" mat-list-item>Sign\r\n          In <i class=\"material-icons\">\r\n            exit_to_app\r\n          </i></a>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content fxFlexFill>\r\n      <div class=\"app-container\" id=\"appContainer\" \r\n      (drop)=\"drop($event)\" \r\n      (dragover)=\"allowDrop($event)\" (touchend)=\"drop($event)\">\r\n        <router-outlet></router-outlet>\r\n        <app-spinner></app-spinner>\r\n        <div class=\"notification-container\" *ngIf=\"userData?.loggedIn\" draggable=\"true\" \r\n        (dragstart)=\"drag($event)\" (touchmove)=\"dragMove($event)\" id=\"notificationBell\">\r\n          <button class=\"notification\" [ngbPopover]=\"notificationAcc\" (shown)=\"profileService.readNotificationCount = profileService.notificationDetails?.length\">\r\n            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n            <span *ngIf=\"(profileService.notificationDetails?.length - profileService.readNotificationCount) > 0\"\r\n              class=\"count\">{{profileService.notificationDetails?.length - profileService.readNotificationCount}}</span>\r\n          </button>\r\n        </div>\r\n        <div *ngIf=\"utilService.chatOptions.enable\" class=\"chat-container\">\r\n          <div class=\"chat-content\"\r\n            [ngClass]=\"{'active': utilService.chatOptions.open, 'mimimized': utilService.chatOptions.minimize}\">\r\n            <div class=\"chat-control\" *ngIf=\"utilService.chatOptions.open\">\r\n              <button (click)=\"utilService.chatOptions.minimize = true\" *ngIf=\"!utilService.chatOptions.minimize\"\r\n                class=\"minimized-btn\">\r\n                <i class=\"fa fa-window-minimize\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button (click)=\"utilService.chatOptions.minimize = false\" *ngIf=\"utilService.chatOptions.minimize\">\r\n                <i class=\"fa fa-window-maximize\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button (click)=\"utilService.chatOptions.open = false\"\r\n                (click)=\"utilService.chatOptions.open = false; utilService.chatOptions.minimize = false;\">\r\n                <i class=\"fa fa-close\"></i>\r\n              </button>\r\n            </div>\r\n            <iframe id=\"chat-window\" class=\"chat-window\" [src]=\"loginUrl | safe\">\r\n            </iframe>\r\n          </div>\r\n          <a class=\"chat-icon\" href=\"javascript: void(0)\" (click)=\"utilService.chatOptions.open = true\"\r\n            *ngIf=\"!utilService.chatOptions.open\">\r\n            <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n<ng-template #notificationAcc>\r\n  <div clas=\"notification-content\">\r\n    <div *ngIf=\"profileService.notificationDetails.length else notificationsNotFound\">\r\n        <div *ngFor=\"let item of profileService.notificationDetails | orderBy: notficationDate; let i  index\" class=\"notify-msg\" style =\"background-color: #0b8426d9; color: #fff; margin: 3px; padding: 5px;\" (mouseover)=\"pop($event, 'hover')\" (mouseout)=\"pop($event, 'out')\">\r\n          <a href=\"mailto:{{item.postedUserName}}?Subject=Hi I am available now\" style=\"color: #fff; font-weight: bold; text-decoration: underline;\" target=\"_blank\">{{item.postedUserName}}</a> have notified you on {{item.notficationDate | date:'MMM d, yyyy' }}\r\n        </div>\r\n  </div>\r\n  <ng-template #notificationsNotFound>\r\n      <div class=\"notification-empty\" style=\"color: #6c757d;\r\n      margin: 3px;\r\n      padding: 5px;\r\n      text-align: center;\r\n      font-weight: bold;\">\r\n        You don't have any notifications\r\n      </div>\r\n    </ng-template>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/common-modal/common-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/common-modal/common-modal.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container custom-modal\">\n    <div class=\"modal-body\">\n        <div *ngIf=\"errorObj\">\n            <div class=\"error-icon\" [class.success]=\"errorObj?.isSuccess\">\n                <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\" *ngIf=\"!errorObj?.isSuccess\"></i>\n                <i class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"errorObj?.isSuccess\"></i>\n            </div>\n            <h2 *ngIf=\"errorObj?.header\">{{errorObj.header}}\n                <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i>\n            </h2>\n            <p *ngIf=\"errorObj?.text\">{{errorObj.text}}</p>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" [class.success-btn]=\"errorObj?.isSuccess\" (click)=\"activeModal.close('ok')\">Ok</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/confirm-modal/confirm-modal.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>confirm-modal works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found.</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/spinner/spinner.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/spinner/spinner.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"display\" class=\"spinner-container\" role=\"status\">\r\n    <div class=\"loading\">Loading&#8230;</div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components */ "./src/app/shared/components/index.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'auth',
        'loadChildren': './auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard',
        'loadChildren': './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'not-found',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'not-found'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden;\n}\n\nbody {\n  background: #252525;\n  overflow-y: auto;\n}\n\n.app-container {\n  margin-top: 64px;\n  height: 100%;\n}\n\n.mat-toolbar.mat-primary {\n  position: fixed;\n  top: 0;\n  z-index: 4;\n}\n\nmat-nav-list a .material-icons {\n  margin-top: -3px;\n  margin-left: 4px;\n  /* margin-top: -1px; */\n  display: inline-block;\n}\n\n.mat-drawer-transition .mat-drawer-content {\n  height: 100%;\n}\n\n.mat-drawer:not(.mat-drawer-side) {\n  width: 25%;\n  z-index: 4;\n  top: 64px;\n}\n\n.mat-drawer-container {\n  background-color: #ffffff;\n}\n\n.mat-drawer-container, .mat-drawer-content {\n  position: static;\n}\n\n.mat-icon-button:focus {\n  outline: none;\n}\n\n.mat-icon-button mat-icon.mat-icon.notranslate material-icons:focus {\n  outline: none;\n}\n\n.account-info {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 16px;\n  position: relative;\n  height: inherit;\n}\n\n.account-info i {\n  font-size: 50px;\n  margin-right: 15px;\n}\n\n.mat-toolbar.mat-primary {\n  background: #cc0000;\n}\n\n.chat-container {\n  position: fixed;\n  bottom: 0;\n  right: 90px;\n  z-index: 2;\n}\n\n.chat-container .chat-icon {\n  display: inline-block;\n  width: 55px;\n  height: 55px;\n  background-color: #cc0000;\n  border-radius: 50%;\n  -webkit-animation: animSpin 1.8s ease-in-out forwards infinite, animFade 1.8s ease forwards infinite;\n          animation: animSpin 1.8s ease-in-out forwards infinite, animFade 1.8s ease forwards infinite;\n}\n\n.chat-container .chat-icon i {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  color: #fff;\n  font-size: 45px;\n}\n\n.chat-container .chat-content {\n  width: 0;\n  height: 0;\n  transition: all 1s;\n  position: relative;\n}\n\n.chat-container .chat-content.active {\n  width: 350px;\n  height: calc(100vh - 65px);\n}\n\n.chat-container .chat-content.active .chat-window {\n  visibility: visible;\n  height: calc(100vh - 100px);\n  width: 100%;\n}\n\n.chat-container .chat-content.mimimized {\n  width: 350px;\n  height: 36px;\n}\n\n.chat-container .chat-content .chat-control {\n  display: flex;\n  justify-content: flex-end;\n  background: #212529f7;\n  padding: 6px 10px;\n}\n\n.chat-container .chat-content .chat-control button {\n  background: none;\n  border: 0;\n}\n\n.chat-container .chat-content .chat-control i {\n  color: #fff;\n  padding-left: 10px;\n}\n\n.chat-container .chat-content .chat-control .minimized-btn i {\n  vertical-align: top;\n}\n\n.chat-container .chat-content .chat-window {\n  visibility: hidden;\n}\n\n.notification-container {\n  position: fixed;\n  width: 55px;\n  top: 80px;\n  right: 20px;\n  z-index: 2;\n}\n\n.notification-container button {\n  background: none;\n  border: 0;\n  border: 2px solid #fff;\n  width: 55px;\n  height: 55px;\n  position: relative;\n  background-color: #cc0000;\n  border-radius: 50%;\n}\n\n.notification-container button i {\n  color: #fff;\n  font-size: 25px;\n}\n\n.notification-container .count {\n  font-family: Arial;\n  font-size: 12px;\n  font-weight: 700;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 2px 8px;\n  line-height: 100%;\n  border: 2px #fff solid;\n  border-radius: 63px;\n  background: #3498db;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  transition-timing-function: ease-out;\n  color: #fff;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n@-webkit-keyframes animSpin {\n  0% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(0deg);\n    transform: perspective(120px) rotateY(181deg) rotateX(0deg);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(0deg) rotateX(0deg);\n    transform: perspective(120px) rotateY(0deg) rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg);\n    transform: perspective(120px) rotateY(181deg);\n  }\n}\n\n@keyframes animSpin {\n  0% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(0deg);\n    transform: perspective(120px) rotateY(181deg) rotateX(0deg);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(0deg) rotateX(0deg);\n    transform: perspective(120px) rotateY(0deg) rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg);\n    transform: perspective(120px) rotateY(181deg);\n  }\n}\n\n@-webkit-keyframes animFade {\n  0% {\n    opacity: 0.95;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes animFade {\n  0% {\n    opacity: 0.95;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@media (max-width: 766px) {\n  .app-container {\n    margin-top: 56px;\n  }\n\n  .mat-drawer:not(.mat-drawer-side) {\n    width: 60%;\n    top: 56px;\n    z-index: 4;\n  }\n\n  .chat-container {\n    left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtcXGdpdF9wcm9qZWN0c1xcSGFja2F0aG9uXzIwMjBcXGhhY2thdGhvbl8yMDIwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERFO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDSU47O0FEREs7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0lOOztBRERFO0VBQ0UsWUFBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREpBO0VBQ0UsZ0JBQUE7QUNPRjs7QURIRTtFQUNFLGFBQUE7QUNNSjs7QURKRTtFQUNFLGFBQUE7QUNNSjs7QURIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUY7O0FETEU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURKQTtFQUNFLG1CQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDUUY7O0FEUEU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9HQUFBO1VBQUEsNEZBQUE7QUNTSjs7QURSSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNVTjs7QURQRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFJJO0VBQ0UsWUFBQTtFQUVBLDBCQUFBO0FDU047O0FEUk07RUFDRSxtQkFBQTtFQUVBLDJCQUFBO0VBQ0EsV0FBQTtBQ1NSOztBRE5JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNRTjs7QUROSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNRTjs7QURQTTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQ1NSOztBRFBNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDU1I7O0FETlE7RUFDRSxtQkFBQTtBQ1FWOztBREpJO0VBQ0Usa0JBQUE7QUNNTjs7QURGQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDS0Y7O0FESkU7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDTU47O0FETE07RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ09WOztBREpFO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDTU47O0FESEE7RUFDQztJQUFLLG1FQUFBO0lBQXFFLDJEQUFBO0VDUXpFO0VETkE7SUFBTSxpRUFBQTtJQUFtRSx5REFBQTtFQ1V6RTtFRFJEO0lBQU8scURBQUE7SUFBdUQsNkNBQUE7RUNZN0Q7QUFDRjs7QURsQkE7RUFDQztJQUFLLG1FQUFBO0lBQXFFLDJEQUFBO0VDUXpFO0VETkE7SUFBTSxpRUFBQTtJQUFtRSx5REFBQTtFQ1V6RTtFRFJEO0lBQU8scURBQUE7SUFBdUQsNkNBQUE7RUNZN0Q7QUFDRjs7QURYQTtFQUNDO0lBQUssYUFBQTtFQ2NKO0VEYkQ7SUFBTyxVQUFBO0VDZ0JOO0FBQ0Y7O0FEbkJBO0VBQ0M7SUFBSyxhQUFBO0VDY0o7RURiRDtJQUFPLFVBQUE7RUNnQk47QUFDRjs7QURmQTtFQUNFO0lBQ0UsZ0JBQUE7RUNpQkY7O0VEZkE7SUFDRSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNrQkY7O0VEaEJBO0lBQ0UsVUFBQTtFQ21CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjUyNTI1O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgLmFwcC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLy8gU3R5bGVzIGZvciBzaWRlIGJhciBuYXZpZ2F0aW9uIG1lbnVcclxuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogNDtcclxuICB9XHJcbiAgbWF0LW5hdi1saXN0e1xyXG4gICAgIGEgIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgLyogbWFyZ2luLXRvcDogLTFweDsgKi9cclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAubWF0LWRyYXdlci10cmFuc2l0aW9uIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIHRvcDogNjRweDtcclxufVxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubWF0LWRyYXdlci1jb250YWluZXIsIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUgbWF0ZXJpYWwtaWNvbnM6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuLmFjY291bnQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjY2MwMDAwO1xyXG59XHJcbi5jaGF0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogOTBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIC5jaGF0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltU3BpbiAxLjhzIGVhc2UtaW4tb3V0IGZvcndhcmRzIGluZmluaXRlLCBhbmltRmFkZSAxLjhzIGVhc2UgZm9yd2FyZHMgaW5maW5pdGU7XHJcbiAgICBpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDQ1JTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICB3aWR0aDogNDVweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgLy8gaGVpZ2h0OiA1MzVweDtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XHJcbiAgICAgIC5jaGF0LXdpbmRvdyB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5taW1pbWl6ZWQge1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgIH1cclxuICAgIC5jaGF0LWNvbnRyb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5Zjc7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAubWluaW1pemVkLWJ0biB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoYXQtd2luZG93IHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIHRvcDogODBweDtcclxuICByaWdodDogMjBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmNvdW50IHtcclxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMnB4ICNmZmYgc29saWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDYzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBhbmltU3BpbiB7XHJcblx0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDBkZWcpOyB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MWRlZykgcm90YXRlWCgwZGVnKTsgXHJcbiAgfVxyXG4gIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgwZGVnKSByb3RhdGVYKDBkZWcpOyB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMGRlZyk7IFxyXG4gIH1cclxuXHQxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgxZGVnKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgYW5pbUZhZGUge1xyXG5cdDAlIHsgb3BhY2l0eTogLjk1OyB9XHJcblx0MTAwJSB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY2cHgpIHtcclxuICAuYXBwLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gIH1cclxuICAubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHRvcDogNTZweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgfVxyXG4gIC5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzI1MjUyNTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFwcC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA0O1xufVxuXG5tYXQtbmF2LWxpc3QgYSAubWF0ZXJpYWwtaWNvbnMge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICAvKiBtYXJnaW4tdG9wOiAtMXB4OyAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYXQtZHJhd2VyLXRyYW5zaXRpb24gLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgd2lkdGg6IDI1JTtcbiAgei1pbmRleDogNDtcbiAgdG9wOiA2NHB4O1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIsIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4ubWF0LWljb24tYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tYXQtaWNvbi1idXR0b24gbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUgbWF0ZXJpYWwtaWNvbnM6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWNjb3VudC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbi5hY2NvdW50LWluZm8gaSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjY2MwMDAwO1xufVxuXG4uY2hhdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDkwcHg7XG4gIHotaW5kZXg6IDI7XG59XG4uY2hhdC1jb250YWluZXIgLmNoYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGFuaW1TcGluIDEuOHMgZWFzZS1pbi1vdXQgZm9yd2FyZHMgaW5maW5pdGUsIGFuaW1GYWRlIDEuOHMgZWFzZSBmb3J3YXJkcyBpbmZpbml0ZTtcbn1cbi5jaGF0LWNvbnRhaW5lciAuY2hhdC1pY29uIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDQ1cHg7XG59XG4uY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQuYWN0aXZlIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcbn1cbi5jaGF0LWNvbnRhaW5lciAuY2hhdC1jb250ZW50LmFjdGl2ZSAuY2hhdC13aW5kb3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQubWltaW1pemVkIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAuY2hhdC1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogIzIxMjUyOWY3O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbn1cbi5jaGF0LWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5jaGF0LWNvbnRyb2wgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAwO1xufVxuLmNoYXQtY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLmNoYXQtY29udHJvbCBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jaGF0LWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5jaGF0LWNvbnRyb2wgLm1pbmltaXplZC1idG4gaSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uY2hhdC1jb250YWluZXIgLmNoYXQtY29udGVudCAuY2hhdC13aW5kb3cge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTVweDtcbiAgdG9wOiA4MHB4O1xuICByaWdodDogMjBweDtcbiAgei1pbmRleDogMjtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciBidXR0b24gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciAuY291bnQge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAycHggI2ZmZiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1TcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODFkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMGRlZykgcm90YXRlWCgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODFkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1GYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSB7XG4gIC5hcHAtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICB9XG5cbiAgLm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHRvcDogNTZweDtcbiAgICB6LWluZGV4OiA0O1xuICB9XG5cbiAgLmNoYXQtY29udGFpbmVyIHtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/constants/constants */ "./src/app/shared/constants/constants.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











var AppComponent = /** @class */ (function () {
    function AppComponent(_router, utilService, modalService, ajax, _document, profileService, popOverConfig) {
        this._router = _router;
        this.utilService = utilService;
        this.modalService = modalService;
        this.ajax = ajax;
        this._document = _document;
        this.profileService = profileService;
        this.popOverConfig = popOverConfig;
        this.subscriptions = [];
        popOverConfig.placement = 'bottom-right';
        popOverConfig.popoverClass = 'notification-pop-up';
    }
    AppComponent.prototype.navigate = function (url, signOut) {
        var _this = this;
        if (signOut === void 0) { signOut = false; }
        if (signOut) {
            var payload = {
                request: {
                    userName: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(this.userData, 'userInfo.userName')
                }
            };
            this.ajax.sendRequest('LOGOUT', payload).subscribe(function (data) {
                _this._document.cookie = "nickname=;Path=/; Expires=" + new Date() + ";";
                _this.utilService.clearAllStorageData();
                var modalRef = _this.modalService.open(_shared_components__WEBPACK_IMPORTED_MODULE_5__["CommonModalComponent"], { centered: true });
                modalRef.componentInstance.errorObj = _shared_constants_constants__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].SIGN_OUT;
                _this._router.navigate([url]);
            });
        }
        else {
            this._router.navigate([url]);
        }
        this.sidenavRef.close();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routerSubscription = this._router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            _this.utilService.chatOptions.open = false;
        });
        this.subscriptions.push(routerSubscription);
        var authSubscription = this.utilService.authData.subscribe(function (data) {
            _this.userData = data;
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_this.userData, 'loggedIn', false)) {
                _this.profileService.getProfile(true);
            }
        });
        this.utilService.setUser(this.utilService.getUser());
        this.subscriptions.push(authSubscription);
        var chatSubscription = this.utilService.enableChat.subscribe(function (data) {
            var ele = _this._document.querySelectorAll('iframe');
            if (ele.length) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_8__["each"])(ele, function (el) {
                    if (!!el) {
                        el.remove();
                    }
                });
            }
            _this.utilService.chatOptions.enable = !!data;
            _this.loginUrl = "/chat/chatIndex.html?fromEmail=" + Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_this.userData, 'userInfo.userName') + "&nickname=" + Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_this.userData, 'userInfo.name');
        });
        this.subscriptions.push(chatSubscription);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.map(function (v) { return v.unsubscribe(); });
    };
    AppComponent.prototype.pop = function (event, action) {
        var ele = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(event, 'target', null);
        if (!!ele && ele.classList.contains('notify-msg')) {
            event.target.style.backgroundColor = action == 'hover' ? '#0b8426' : '#0b8426d9';
            event.target.style.transform = action == 'hover' ? 'scale(1.01)' : 'scale(1)';
        }
    };
    AppComponent.prototype.drag = function (event) {
        var style = window.getComputedStyle(event.target, null);
        if (!!event.dataTransfer) {
            event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
        }
    };
    AppComponent.prototype.drop = function (event) {
        if (!!event.dataTransfer) {
            var offset = event.dataTransfer.getData("text/plain").split(',');
            var dm = document.getElementById('notificationBell');
            dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
            dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
        }
        event.preventDefault();
        return false;
    };
    AppComponent.prototype.allowDrop = function (event) {
        event.preventDefault();
        return false;
    };
    AppComponent.prototype.dragMove = function (e) {
        this.notifybell = this._document.getElementById('notificationBell');
        var touchLocation = e.targetTouches[0];
        // assign box new coordinates based on the touch.
        this.notifybell.style.left = touchLocation.pageX + 'px';
        this.notifybell.style.top = touchLocation.pageY + 'px';
    };
    AppComponent.prototype.dragEnd = function (e) {
        var x = parseInt(this.notifybell.style.left);
        var y = parseInt(this.notifybell.style.top);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"],] }] },
        { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverConfig"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"])
    ], AppComponent.prototype, "sidenavRef", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverConfig"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["AjaxService"], Object, _services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverConfig"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_pipes_orderBy_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/pipes/orderBy.pipe */ "./src/app/shared/pipes/orderBy.pipe.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_pipes_orderBy_pipe__WEBPACK_IMPORTED_MODULE_16__["OrderByPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
            ],
            providers: [_services_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpInterceptorService"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(spinner) {
        this.spinner = spinner;
        this._excludedOperations = [];
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        // let reqObj = req.headers['headers'];
        var operationName = req.url.split('/').pop() || null;
        if (this._excludedOperations.indexOf(operationName) !== -1) {
            return next.handle(req);
        }
        this.spinner.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (evt) {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        }, function () { }));
    };
    HttpInterceptorService.ctorParameters = function () { return [
        { type: _spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }
    ]; };
    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var ProfileService = /** @class */ (function () {
    function ProfileService(ajax, util) {
        this.ajax = ajax;
        this.util = util;
        this.profilePosts = [];
        this.readNotificationCount = 0;
    }
    ProfileService.prototype.getProfilePosts = function () {
        var _this = this;
        this.currentUser = this.util.getUser();
        var payload = {
            request: {
                'userName': Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this.currentUser, 'userName')
            }
        };
        this.ajax.sendRequest('PROFILE_POSTS', payload).subscribe(function (data) {
            if (!!data) {
                _this.processPosts(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(data, 'response.details'));
            }
        });
    };
    ProfileService.prototype.getProfile = function (forceFlag) {
        if (forceFlag === void 0) { forceFlag = false; }
        if (forceFlag || !this.profilePosts || !this.profilePosts.length) {
            this.getProfilePosts();
        }
    };
    ProfileService.prototype.processPosts = function (data) {
        if (!!data) {
            this.notificationDetails = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(data, 'notificationDetails', []);
            this.profilePosts = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(data, 'profileDetails', []);
            this.productDetails = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(this.profilePosts, 'postType');
        }
    };
    ProfileService.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] }
    ]; };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["AjaxService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/spinner.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spinner.service.ts ***!
  \*********************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);



var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.displaySpinner = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    SpinnerService.prototype.show = function () {
        this.displaySpinner.next(true);
    };
    SpinnerService.prototype.hide = function () {
        this.displaySpinner.next(false);
    };
    SpinnerService.prototype.load = function () {
        return this.displaySpinner;
    };
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/shared/components/common-modal/common-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/common-modal/common-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-container .modal-body {\n  text-align: center;\n  font-size: 20px;\n}\n.modal-container .modal-body h2 {\n  font-weight: bold;\n}\n.modal-container .error-icon.success i {\n  color: #1fa229;\n}\n.modal-container .error-icon i {\n  font-size: 75px;\n  color: #cc0000;\n  margin: 25px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tbW9uLW1vZGFsL0Q6XFx3b3JrXFxnaXRfcHJvamVjdHNcXEhhY2thdGhvbl8yMDIwXFxoYWNrYXRob25fMjAyMC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxjb21tb24tbW9kYWxcXGNvbW1vbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tbW9uLW1vZGFsL2NvbW1vbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FEQ0k7RUFDSSxpQkFBQTtBQ0NSO0FER0E7RUFDQyxjQUFBO0FDREQ7QURHSTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29tbW9uLW1vZGFsL2NvbW1vbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250YWluZXIge1xyXG4ubW9kYWwtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmVycm9yLWljb24ge1xyXG4mLnN1Y2Nlc3MgaXtcclxuIGNvbG9yOiAjMWZhMjI5OyAgIFxyXG59XHJcbiAgICBpIHtcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxuICAgIGNvbG9yOiAjY2MwMDAwO1xyXG4gICAgbWFyZ2luOiAyNXB4IDA7XHJcbn1cclxufVxyXG59IiwiLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtYm9keSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuZXJyb3ItaWNvbi5zdWNjZXNzIGkge1xuICBjb2xvcjogIzFmYTIyOTtcbn1cbi5tb2RhbC1jb250YWluZXIgLmVycm9yLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgY29sb3I6ICNjYzAwMDA7XG4gIG1hcmdpbjogMjVweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/common-modal/common-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/common-modal/common-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: CommonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModalComponent", function() { return CommonModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var CommonModalComponent = /** @class */ (function () {
    function CommonModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    CommonModalComponent.prototype.ngOnInit = function () {
    };
    CommonModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommonModalComponent.prototype, "errorObj", void 0);
    CommonModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-modal',
            template: __webpack_require__(/*! raw-loader!./common-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/common-modal/common-modal.component.html"),
            styles: [__webpack_require__(/*! ./common-modal.component.scss */ "./src/app/shared/components/common-modal/common-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], CommonModalComponent);
    return CommonModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! raw-loader!./confirm-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/shared/components/confirm-modal/confirm-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: NotFoundComponent, CommonModalComponent, SpinnerComponent, ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });

/* harmony import */ var _common_modal_common_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-modal/common-modal.component */ "./src/app/shared/components/common-modal/common-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonModalComponent", function() { return _common_modal_common_modal_component__WEBPACK_IMPORTED_MODULE_1__["CommonModalComponent"]; });

/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]; });

/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"]; });







/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/components/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-container {\n  height: 100vh;\n  width: 100vw;\n  opacity: 0.8;\n  background: #ecf7e3;\n  z-index: 999;\n  /*  .spinner-border {\n       position: absolute;\n       top: 50%;\n       left: 50%;\n       &.text-success {\n           color: #cc0000 !important;\n       }\n   }\n   span {\n       display: block;\n       position: absolute;\n       top: 56%;\n       left: 49%;\n       color: #cc0000;\n       font-weight: bold;\n   } */\n  /* Absolute Center Spinner */\n  /* Transparent Overlay */\n  /* :not(:required) hides these rules from IE9 and below */\n  /* Animation */\n}\n.spinner-container .loading {\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n.spinner-container .loading:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.spinner-container .loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.spinner-container .loading:not(:required):after {\n  content: \"\";\n  display: block;\n  font-size: 10px;\n  width: 50px;\n  height: 50px;\n  margin-top: -0.5em;\n  border: 6px solid #cc0000;\n  border-radius: 100%;\n  border-bottom-color: transparent;\n  -webkit-animation: spinner 1s linear 0s infinite;\n  animation: spinner 1s linear 0s infinite;\n}\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9EOlxcd29ya1xcZ2l0X3Byb2plY3RzXFxIYWNrYXRob25fMjAyMFxcaGFja2F0aG9uXzIwMjAvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Q7Ozs7Ozs7Ozs7Ozs7OztNQUFBO0VBZ0JDLDRCQUFBO0VBY0Ysd0JBQUE7RUFZQSx5REFBQTtFQXdCQSxjQUFBO0FDOUNGO0FESEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDS0o7QURERTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQ0dKO0FEQ0U7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnREFBQTtFQUNBLHdDQUFBO0FDQUo7QURLRTtFQUNFO0lBQ0UsK0JBQUE7SUFJQSx1QkFBQTtFQ0hKO0VES0U7SUFDRSxpQ0FBQTtJQUlBLHlCQUFBO0VDSEo7QUFDRjtBRHFDRTtFQUNFO0lBQ0UsK0JBQUE7SUFJQSx1QkFBQTtFQ0hKO0VES0U7SUFDRSxpQ0FBQTtJQUlBLHlCQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYmFja2dyb3VuZDogI2VjZjdlMztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgLyogIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAmLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2MwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTYlO1xyXG4gICAgICAgIGxlZnQ6IDQ5JTtcclxuICAgICAgICBjb2xvcjogI2NjMDAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH0gKi9cclxuICAgIC8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXHJcbi5sb2FkaW5nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIG92ZXJmbG93OiBzaG93O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cclxuICAubG9hZGluZzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4gIC5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcclxuICAgIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gICAgZm9udDogMC8wIGE7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjY2MwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMXMgbGluZWFyIDBzIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyIDFzIGxpbmVhciAwcyBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQW5pbWF0aW9uICovXHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBALW8ta2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNwaW5uZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvcGFjaXR5OiAwLjg7XG4gIGJhY2tncm91bmQ6ICNlY2Y3ZTM7XG4gIHotaW5kZXg6IDk5OTtcbiAgLyogIC5zcGlubmVyLWJvcmRlciB7XG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgIHRvcDogNTAlO1xuICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAmLnRleHQtc3VjY2VzcyB7XG4gICAgICAgICAgIGNvbG9yOiAjY2MwMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgfVxuICAgc3BhbiB7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgIHRvcDogNTYlO1xuICAgICAgIGxlZnQ6IDQ5JTtcbiAgICAgICBjb2xvcjogI2NjMDAwMDtcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH0gKi9cbiAgLyogQWJzb2x1dGUgQ2VudGVyIFNwaW5uZXIgKi9cbiAgLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xuICAvKiA6bm90KDpyZXF1aXJlZCkgaGlkZXMgdGhlc2UgcnVsZXMgZnJvbSBJRTkgYW5kIGJlbG93ICovXG4gIC8qIEFuaW1hdGlvbiAqL1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIG92ZXJmbG93OiBzaG93O1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubG9hZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubG9hZGluZzpub3QoOnJlcXVpcmVkKSB7XG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbiAgYm9yZGVyOiA2cHggc29saWQgI2NjMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDFzIGxpbmVhciAwcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDFzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/spinner/spinner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinner, _document) {
        this.spinner = spinner;
        this._document = _document;
        this.display = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        this.initSubscription();
    };
    SpinnerComponent.prototype.initSubscription = function () {
        var _this = this;
        this.subsription = this.spinner.load()
            .subscribe(function (value) {
            _this.display = value;
            _this.handleScroll(value);
        });
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.subsription.unsubscribe();
    };
    SpinnerComponent.prototype.handleScroll = function (flag) {
        if (flag === void 0) { flag = false; }
        var ele = this._document.querySelector('.root-container');
        if (!!ele) {
            ele.style.overflowY = flag ? 'hidden' : 'auto';
        }
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/components/spinner/spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"], Object])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
var CONSTANTS = {
    ERROR_VALUES: {
        signIn: {
            text: 'Please provide valid data for a proper Sign In'
        },
        logout: {
            text: 'We are Sorry, we couldn\'t sign out your session right now. Please try again later'
        },
        postItems: {
            header: 'We are Sorry',
            text: 'we couldn\'t publish your post right now. Please try again later'
        },
        search: {
            header: 'We are Sorry',
            text: 'We couldn\'t process your search right now. Please try again later'
        },
        getProfilePosts: {
            header: 'We are Sorry',
            text: 'We couldn\'t fetch your profile posts right now. Please try again later'
        },
        updatePosts: {
            header: 'We are Sorry',
            text: 'We couldn\'t update your post right now. Please try again later'
        },
        deletePosts: {
            header: 'We are Sorry',
            text: 'We couldn\'t remove your post right now. Please try again later'
        },
        getItem: {
            header: 'We are Sorry',
            text: 'We couldn\'t find any post in your location. Please try again later'
        },
        notificationService: {
            header: 'We are Sorry',
            text: 'We couldn\'t send your notification right now. Please try again later'
        },
        GENERIC_ERROR: {
            header: 'We are Sorry',
            text: 'Something went wrong. Please try again later'
        }
    },
    NOTIFICATION: {
        text: 'Your notification has sent !!'
    },
    SIGN_OUT: {
        text: 'You are logged out.'
    },
    MARKER_CONFIG: {
        DEFAULT_COORD: {
            latitude: '13.047272',
            longitude: '80.095720'
        },
        ICON_CONFIG: {
            url: '/assets/images/default.png',
            scaledSize: {
                height: 40,
                width: 40
            },
            labelOrigin: {
                x: 20,
                y: 15
            }
        },
        BALLOON_COLOR: {
            'ICanHelp': 'http://maps.google.com/mapfiles/ms/icons/green.png',
            'HelpMe': 'http://maps.google.com/mapfiles/ms/icons/red.png',
            'both': 'http://maps.google.com/mapfiles/ms/icons/yellow.png'
        }
    },
    ITEM_INFO: {
        REQUEST_TYPES: [{
                key: 'ICanHelp',
                dispText: 'I Can Help'
            },
            {
                key: 'HelpMe',
                dispText: 'Help Me',
            }],
        TYPES: ['Food', 'Entertainment', 'Hardwares', 'Kids'],
        POST_DISPLAY_TEXT: {
            'ICanHelp': 'I Can Help !',
            'HelpMe': 'Help Me',
            'both': 'I Can Help ! / Help Me'
        }
    },
    CRUD_CONSTANTS: {
        add: {
            serviceName: 'POST_ITEMS',
            heading: 'Publish Post',
            text: 'Post published successfully'
        },
        edit: {
            serviceName: 'UPDATE_ITEMS',
            heading: 'Update Post',
            text: 'Post updated successfully'
        },
        delete: {
            serviceName: 'DELETE_ITEMS',
            heading: 'Do you want to delete this post ?',
            text: 'Post deleted successfully'
        }
    }
};


/***/ }),

/***/ "./src/app/shared/constants/service.constants.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/constants/service.constants.ts ***!
  \*******************************************************/
/*! exports provided: SERVICE_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_CONSTANTS", function() { return SERVICE_CONSTANTS; });
var SERVICE_CONSTANTS = {
    REQUEST_PARAM: {
        'LOGIN': {
            serviceName: 'auth', operationName: 'signIn', method: 'POST'
        },
        'LOGOUT': {
            serviceName: 'auth', operationName: 'logout', method: 'POST'
        },
        'GET_ITEMS_LIST': {
            serviceName: 'product', operationName: 'getItem', method: 'POST'
        },
        'POST_ITEMS': {
            serviceName: 'product', operationName: 'postItems', method: 'POST'
        },
        'SEARCH_POSTS': {
            serviceName: 'product', operationName: 'search', method: 'POST'
        },
        'PROFILE_POSTS': {
            serviceName: 'profile', operationName: 'getProfilePosts', method: 'POST'
        },
        'UPDATE_ITEMS': {
            serviceName: 'profile', operationName: 'updatePosts', method: 'POST'
        },
        'DELETE_ITEMS': {
            serviceName: 'profile', operationName: 'deletePosts', method: 'POST'
        },
        'NOTIFICATION': {
            serviceName: 'auth', operationName: 'notificationService', method: 'POST'
        }
    }
};


/***/ }),

/***/ "./src/app/shared/pipes/orderBy.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/orderBy.pipe.ts ***!
  \**********************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, propertyName) {
        if (propertyName)
            //   return value.sort((a: any, b: any) => b[propertyName].localeCompare(a[propertyName]));
            return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"])(value, new Date(propertyName));
        else
            return value;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy',
            pure: true
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe-html.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/safe-html.pipe.ts ***!
  \************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/ajax.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/ajax.service.ts ***!
  \*************************************************/
/*! exports provided: AjaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxService", function() { return AjaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.service */ "./src/app/shared/services/utility.service.ts");
/* harmony import */ var _constants_service_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/service.constants */ "./src/app/shared/constants/service.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);













var AjaxService = /** @class */ (function () {
    function AjaxService(http, config, modalService) {
        this.http = http;
        this.config = config;
        this.modalService = modalService;
    }
    AjaxService.prototype.sendRequest = function (serviceName, payload, params) {
        var _this = this;
        var serviceObj = _constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["SERVICE_CONSTANTS"].REQUEST_PARAM[serviceName], storagedata = _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].getStorageData(serviceObj.operationName, true);
        if (!!storagedata) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](storagedata);
        }
        else {
            var req = this.getReqObj(serviceName, payload, params);
            return this.http.request(req.method, req.url, req.httpOptions).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_11__["map"])(function (response) {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_12__["get"])(response, 'response.status.statusCode') === '0000') {
                    return response;
                }
                _this.handleError(serviceObj);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (error) {
                _this.handleError(serviceObj);
                throw new Error("error");
            }));
        }
    };
    AjaxService.prototype.handleError = function (serviceObj) {
        if (!!serviceObj) {
            var errorObj = _constants_constants__WEBPACK_IMPORTED_MODULE_9__["CONSTANTS"].ERROR_VALUES[serviceObj.operationName] ||
                _constants_constants__WEBPACK_IMPORTED_MODULE_9__["CONSTANTS"].ERROR_VALUES.GENERIC_ERROR;
            var modalRef = this.modalService.open(_components__WEBPACK_IMPORTED_MODULE_8__["CommonModalComponent"], { centered: true });
            modalRef.componentInstance.errorObj = errorObj;
        }
    };
    AjaxService.prototype.getReqObj = function (servicename, payload, params) {
        var root = this.config.get('root'), serviceObj = _constants_service_constants__WEBPACK_IMPORTED_MODULE_4__["SERVICE_CONSTANTS"].REQUEST_PARAM[servicename], origin = this.config.get('origin');
        var useJson = this.config.get('useJson'), url, httpOptions = {
            headers: {
                'token': _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].getStorageData('token') || '',
                'service': serviceObj.operationName
            }, params: params
        };
        var method = serviceObj.method;
        if (payload) {
            httpOptions['body'] = payload;
        }
        if (!useJson) {
            url = origin + "/" + root + "/" + serviceObj.serviceName + "/" + serviceObj.operationName;
        }
        else {
            url = origin + "/" + root + "/" + serviceObj.operationName + ".json";
        }
        return {
            url: url, httpOptions: httpOptions, method: method
        };
    };
    AjaxService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
    ]; };
    AjaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], AjaxService);
    return AjaxService;
}());



/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._selectedEnvironment = {};
        this._config = {
            root: 'api',
            origin: window.location.origin
        };
        this._devConfig = {
            root: 'assets/json',
            useJson: true
        };
        this.getEnvironment();
    }
    ConfigService.prototype.getEnvironment = function () {
        var host = window.location.host;
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])(this._selectedEnvironment, this._config);
        if (host.match('localhost')) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["extend"])(this._selectedEnvironment, this._devConfig);
        }
        return this._selectedEnvironment;
    };
    ConfigService.prototype.get = function (key) {
        return this._selectedEnvironment[key];
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AjaxService, ConfigService, storageMechanism, UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.service */ "./src/app/shared/services/ajax.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AjaxService", function() { return _ajax_service__WEBPACK_IMPORTED_MODULE_0__["AjaxService"]; });

/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]; });

/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.service */ "./src/app/shared/services/utility.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storageMechanism", function() { return _utility_service__WEBPACK_IMPORTED_MODULE_2__["storageMechanism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]; });






/***/ }),

/***/ "./src/app/shared/services/utility.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/utility.service.ts ***!
  \****************************************************/
/*! exports provided: storageMechanism, UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageMechanism", function() { return storageMechanism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var storageMechanism = [
    localStorage,
    sessionStorage
];
var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this.authData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.enableChat = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.chatOptions = {
            enable: false,
            open: false,
            minimize: false
        };
    }
    UtilityService_1 = UtilityService;
    UtilityService.setStorageData = function (sessionData, storageType) {
        if (storageType === void 0) { storageType = 1; }
        if (!sessionData) {
            throw new Error('Invalid session update');
        }
        sessionData.value = typeof sessionData.value === 'string' || sessionData.ignoreStringfy
            ? sessionData.value
            : JSON.stringify(sessionData.value);
        storageMechanism[storageType].setItem(sessionData.key, sessionData.value);
    };
    UtilityService.getStorageData = function (key, parse, storageType) {
        if (parse === void 0) { parse = false; }
        if (storageType === void 0) { storageType = 1; }
        var sessionData = { key: key, value: '' };
        if (!key) {
            return false;
        }
        sessionData.value = storageMechanism[storageType].getItem(key);
        if (parse) {
            sessionData.value = JSON.parse(sessionData.value || null);
        }
        return sessionData.value;
    };
    UtilityService.clearStorageData = function (key, storageType) {
        if (storageType === void 0) { storageType = 1; }
        if (!key) {
            throw new Error('Invalid key');
        }
        storageMechanism[storageType].removeItem(key);
    };
    UtilityService.prototype.clearAllStorageData = function (storageType) {
        if (storageType === void 0) { storageType = 1; }
        storageMechanism[storageType].clear();
        this.chatOptions = {
            enable: false,
            open: false,
            minimize: false
        };
        this.authData.next(null);
        this.enableChat.next(null);
    };
    UtilityService.prototype.setUser = function (data) {
        var token = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(data, 'token', null);
        var val = {
            userInfo: data,
            loggedIn: !!(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(data, 'token', false))
        };
        UtilityService_1.setStorageData({ key: 'token', value: token });
        UtilityService_1.setStorageData({ key: 'user', value: data });
        this.authData.next(val);
        this.enableChat.next(!!token);
    };
    UtilityService.prototype.setLocation = function (data) {
        if (!!data) {
            UtilityService_1.setStorageData({ key: 'location', value: JSON.stringify(data) });
        }
    };
    UtilityService.prototype.getLocation = function () {
        return UtilityService_1.getStorageData('location', true);
    };
    UtilityService.prototype.getUser = function () {
        return UtilityService_1.getStorageData('user', true);
    };
    var UtilityService_1;
    UtilityService = UtilityService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ "./src/app/shared/pipes/safe-html.pipe.ts");





var components = [
    _components__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    _components__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"],
    _components__WEBPACK_IMPORTED_MODULE_3__["CommonModalComponent"],
    _components__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: components.concat([
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]
            ]),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: components.concat([
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]
            ]),
            entryComponents: [
                _components__WEBPACK_IMPORTED_MODULE_3__["CommonModalComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\git_projects\Hackathon_2020\hackathon_2020\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map