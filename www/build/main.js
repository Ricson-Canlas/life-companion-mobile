webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderPage = (function () {
    function SliderPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slidesOptions = { initialSlide: 0 };
    }
    SliderPage.prototype.slideNext = function () {
        this.slider.slideNext();
    };
    SliderPage.prototype.slidePrev = function () {
        this.slider.slidePrev();
    };
    SliderPage.prototype.onSlideNext = function (slider) {
        if (slider.isEnd()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */])
    ], SliderPage.prototype, "slider", void 0);
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"C:\xampp\htdocs\life-companion-mobile\src\pages\slider\slider.html"*/`\n\n<!-- <ion-header no-shadow>\n  <ion-navbar>\n    <button class="btn-green" (click)="signUp()">Get Started</button>\n    <button class="btn-green-out" (click)="signIn()">Sign In</button>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content no-bounce class="page-slider text-center">\n  <ion-slides #slider pager="true" (ionSlideNextStart)="onSlideNext($event)">\n    <ion-slide>\n\n      <img class="slider-img main-image" src="assets/imgs/slider-01.jpg" alt="">\n		\n      <span class="slide-nav next" outline (click)="slideNext()" tappable><i class="fa fa-angle-right"></i></span>\n    </ion-slide>\n\n    <ion-slide>\n\n      <img class="slider-img main-image" src="assets/imgs/slider-01.jpg" alt="">\n\n      <span class="slide-nav prev" outline (click)="slidePrev()" tappable><i class="fa fa-angle-left"></i></span>\n      <span class="slide-nav next" outline (click)="slideNext()" tappable><i class="fa fa-angle-right"></i></span>\n    </ion-slide>\n\n    <ion-slide>\n      <img class="slider-img main-image" src="assets/imgs/slider-01.jpg" alt="">\n\n      <span class="slide-nav prev" outline (click)="slidePrev()" tappable><i class="fa fa-angle-left"></i></span>\n      <span class="slide-nav next" outline (click)="slideNext()" tappable><i class="fa fa-angle-right"></i></span>\n    </ion-slide>\n    <ion-slide>\n    </ion-slide>\n  </ion-slides>\n\n  <button class="btn-slider btn-green" (click)="signUp()" tappable>Get Started</button>\n  <button class="btn-slider btn-green-out" (click)="signIn()" tappable>Sign In</button>\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\life-companion-mobile\src\pages\slider\slider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Page

var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.toConfirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */], null, {});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\life-companion-mobile\src\pages\home\home.html"*/`<ion-content>\n  <div class="header-logo">\n    <img src="assets/imgs/main-logo.png">\n  </div> \n  <div class="content container">\n    <div class="box-wrapper">\n      <p class="text-orange text-center">Enter mobile number to continue</p>\n      <form action="">\n        <div class="phone-number">\n          <div class="left">\n            <input type="number">\n          </div>\n          <div class="right">\n            <input type="number">\n          </div>\n        </div>\n      <div>\n        <button (click)="toConfirm()" class="btn-gradient">CONTINUE</button>\n      </div>\n      </form>\n      <p class="continue-text text-center">or continue with</p>\n      <div class="btn-wrapper">\n        <div class="col">\n          <button class="btn-facebook">Facebook</button>\n        </div>\n        <div class="col">\n          <button class="btn-twitter">Twitter</button>\n        </div>     \n      </div>\n      <div class="login-with">\n        <a href="#">Login with LCID</a>\n      </div>\n    </div>\n  </div>\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\life-companion-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userinfo_userinfo__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmPage = (function () {
    function ConfirmPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConfirmPage.prototype.toUserInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__userinfo_userinfo__["a" /* UserInfoPage */], null, {});
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"C:\xampp\htdocs\life-companion-mobile\src\pages\confirm\confirm.html"*/`<ion-content>\n\n  <div class="header-logo">\n\n    <img src="assets/imgs/main-logo.png">\n\n  </div> \n\n  <div class="content container">\n\n    <div class="box-wrapper">\n\n      <p class="text-gray">Waiting to automatically detect an SMS sent to +234 123 1234 1234</p>\n\n      <form action="">\n\n	    <p class="text-orange mb-4">Wrong Number?</p>\n\n	    <div class="six-code">\n\n          <input (click)="toUserInfo()" type="number" maxlength="6" placeholder="_  _  _  _  _  _">\n\n          <p class="text-code text-center">Enter 6-digit code</p>\n\n        </div>\n\n      </form>\n\n      <div class="contact-options mt-5">\n\n  	      <ul class="list-inline">\n\n	      	<li class="list-inline-item mr-2">\n\n	      		<img src="assets/imgs/resend-sms.png" alt="sms">\n\n	      	</li>\n\n	      	<li class="list-inline-item">\n\n	      		<a href="#" class="resend">Resend SMS</a>\n\n	      	</li>\n\n	      	<li class="list-inline-item float-right">\n\n	      		<p class="duration">01:20</p>\n\n	      	</li>\n\n	      </ul>\n\n	      <div class="divider"></div>\n\n	      <ul class="list-inline">\n\n	      	<li class="list-inline-item mr-2">\n\n	      		<img src="assets/imgs/call.png" alt="call">\n\n	      	</li>\n\n	      	<li class="list-inline-item">\n\n	      		<a href="#" class="call">Call me</a>\n\n	      	</li>\n\n	      	<li class="list-inline-item float-right">\n\n	      		<p class="duration text-right">01:20</p>\n\n	      	</li>\n\n	      </ul>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\life-companion-mobile\src\pages\confirm\confirm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verified_verified__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoPage = (function () {
    function UserInfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserInfoPage.prototype.toVerified = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verified_verified__["a" /* VerifiedPage */], null, {});
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userinfo',template:/*ion-inline-start:"C:\xampp\htdocs\life-companion-mobile\src\pages\userinfo\userinfo.html"*/`<ion-content>\n\n	<div class="user-info">\n\n		<div class="header-logo">\n\n			<img src="assets/imgs/userinfo-icon.png">\n\n		</div>\n\n		<div class="user-info-form">\n\n			<p class="mb-5">Please fill the profile details</p>\n\n			<form>\n\n				<input type="text" name="fname" placeholder="First name">\n\n				<input type="text" name="fname" placeholder="Last name">\n\n				<input type="text" name="fname" placeholder="Date of birth">\n\n				<select>\n\n					<option>Male</option>\n\n					<option>Female</option>\n\n				</select>\n\n				<div class="btn-wrapper">\n\n					<button (click)="toVerified()" class="btn-gradient" type="submit">CONTINUE</button>\n\n				</div>			\n\n			</form>\n\n		</div>\n\n	</div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\life-companion-mobile\src\pages\userinfo\userinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=userinfo.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifiedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifiedPage = (function () {
    function VerifiedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerifiedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verified',template:/*ion-inline-start:"C:\xampp\htdocs\life-companion-mobile\src\pages\verified\verified.html"*/`<ion-content>\n\n  <div class="header-logo">\n\n    <img src="assets/imgs/main-logo.png">\n\n  </div> \n\n  <div class="content container">\n\n  	<div class="box-wrapper text-center">\n\n	    <img src="assets/imgs/verified.png" alt="verified check">\n\n	    <p class="text-gray text-verified">Mobile Number verified</p>\n\n	    <p class="text-gray text-lcid">Your Unique LCID is</p>\n\n	    <p class="unique-lcid">0LU0KU000001</p>\n\n	    <button class="btn-gradient btn-next">Next</button>\n\n    </div>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\life-companion-mobile\src\pages\verified\verified.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], VerifiedPage);
    return VerifiedPage;
}());

//# sourceMappingURL=verified.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_userinfo_userinfo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_verified_verified__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//ionic built in plugins





// Main Module

//import { InternationalPhoneModule } from 'ng4-intl-phone';
//Modules





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_userinfo_userinfo__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verified_verified__["a" /* VerifiedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_userinfo_userinfo__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verified_verified__["a" /* VerifiedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_slider_slider__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../pages/home/home';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_slider_slider__["a" /* SliderPage */];
        platform.ready().then(function () {
            console.log('rest');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\life-companion-mobile\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\xampp\htdocs\life-companion-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map