webpackJsonp([0],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TourPage = (function () {
    function TourPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.dashboardPage = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
    }
    return TourPage;
}());
TourPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tour',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/tour/tour.html"*/'<ion-header></ion-header>\n\n<ion-content city-bg>\n  <ion-slides pager>\n    <ion-slide>\n      <a class="skip-link" [navPush]="dashboardPage">\n        Skip\n      </a>\n      <div class="title">Welcome</div>\n      <div class="description">\n        IFA Connect is the easy way to earn cash-back from your Referrals\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <a class="skip-link" [navPush]="dashboardPage">\n        Skip\n      </a>\n      <img src="assets/imgs/step-lead.png" />\n      <div class="title">Add a Referral</div>\n      <p class="description">Easily add a referral for your chosen service</p>\n    </ion-slide>\n\n    <ion-slide>\n      <a class="skip-link" [navPush]="dashboardPage">\n        Skip\n      </a>\n      <img src="assets/imgs/step-track.png" />\n      <div class="title">Track Referral Submissions</div>\n      <p class="description">\n        Review how your submitted Referrals are progressing, and which have\n        converted\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <a class="skip-link" [navPush]="dashboardPage">\n        Skip\n      </a>\n      <img src="assets/imgs/step-withdraw.png" />\n      <div class="title">Withdraw Earnings</div>\n      <p class="description">\n        Withdraw the commission you have earned from your converted referrals\n      </p>\n      <a\n        [navPush]="dashboardPage"\n        class="transparent-rounded-button"\n        style="margin-top: 2rem;"\n      >\n        done\n      </a>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/tour/tour.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], TourPage);

//# sourceMappingURL=tour.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Cache = (function () {
    function Cache() {
        var _this = this;
        this.updateOfflineCache = function () {
        };
        this.getCache = function () {
            return localStorage.getItem('cache') ? JSON.parse(localStorage.getItem('cache')) : {};
        };
        this.getData = function (key) {
            var cache = JSON.parse(localStorage.getItem('cache'));
            return cache[key];
        };
        this.setData = function (key, data) {
            var cache = _this.getCache();
            cache[key] = data;
            localStorage.setItem('cache', JSON.stringify(cache));
        };
        this.getLeads = function () {
            return JSON.parse(localStorage.getItem('leads')) ? JSON.parse(localStorage.getItem('leads')) : [];
        };
        this.storeLeads = function (leads) {
            localStorage.setItem('leads', JSON.stringify(leads));
        };
        this.storeLead = function (lead) {
            var leads = _this.getLeads();
            leads.push(lead);
            _this.storeLeads(leads);
        };
        this.storeLea = function (lead) {
            var leads = _this.getLeads();
            leads.push(lead);
            localStorage.setItem('leads', JSON.stringify(leads));
        };
    }
    return Cache;
}());
Cache = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Cache);

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_api__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TermsPage = (function () {
    function TermsPage(navCtrl, storage, loadingCtrl, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.dashboardPage = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.tos = '';
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present();
        this.api.getTOS()
            .then(function (response) {
            loader.dismiss();
            if (response['error']['code'] != 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: response['error']['message'],
                    buttons: ['Ok']
                });
                alert_1.present();
            }
            else {
                _this.tos = response['response'];
            }
        }, function () {
            loader.dismiss();
        });
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/terms/terms.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Terms of Service</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div\n    class="mine"\n    [innerHTML]="tos | safeHtml"\n  ></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/terms/terms.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_api__["a" /* Api */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ProfilePage = (function () {
    function ProfilePage(navCtrl, storage, http, loadingCtrl, api, alertCtrl, actionSheetCtrl, camera, transfer, file, filePath, platform, toastCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.onlyLettersRegEx = /^[a-zA-Z ]+$/;
        this.phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        this.passwordsMatchingPattern = /^{this.user.password}/;
        this.emailRegEx = /^.*@.*\..*$/;
        this.submited = false;
        this.user = {
            first_name: '',
            last_name: '',
            email_address: '',
            mobile: '',
            company: '',
            current_password: '',
            new_password: '',
            new_password_confirmation: '',
            profile_photo: ''
        };
        this.connection = storage.connection;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.user = JSON.parse(localStorage.getItem('User'));
    };
    ProfilePage.prototype.submit = function (form) {
        var _this = this;
        this.submited = true;
        if (form.valid) {
            this.storage.loading = true;
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var loader_1 = this.loadingCtrl.create({
                content: 'Connecting to the server...'
            });
            loader_1.present();
            this.http.post(this.storage.baseUrl + "/updateUser?" + this.storage.getAuthHelper(), Object['entries']({
                first_name: this.user.first_name,
                last_name: this.user.last_name,
                email_address: this.user.email_address,
                mobile: this.user.mobile,
                company: this.user.company,
                current_password: this.user.current_password || '',
                new_password: this.user.new_password || '',
                new_password_confirmation: this.user.new_password_confirmation || ''
            }).map(function (_a) {
                var k = _a[0], v = _a[1];
                return k + "=" + encodeURIComponent(v);
            }).join('&'), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.storage.loading = false;
                if (response.error.code != 0) {
                    var alert_1 = _this.alertCtrl.create({
                        title: response['error']['message'],
                        subTitle: response.response,
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    localStorage.setItem('User', JSON.stringify(_this.user));
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Settings Updated',
                        subTitle: 'You have successfully updated your settings.',
                        buttons: ['Ok']
                    });
                    alert_2.present();
                }
            }, function (error) {
                _this.storage.loading = false;
                var alert = _this.alertCtrl.create({
                    title: 'Error connecting to our server',
                    subTitle: 'We seem to be having some difficulties contacting our servers at this moment. Please wait a few minutes.',
                    buttons: ['Ok']
                });
                alert.present();
            }, function () {
                _this.storage.loading = false;
                loader_1.dismiss();
            });
        }
    };
    ProfilePage.prototype.uploadImage = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (!file)
            return false;
        var loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        loading.present();
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function () {
            // Destination URL
            var data = new FormData();
            data.set('file', file, file.name);
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(_this.storage.baseUrl + "/uploadAvatar?" + _this.storage.getAuthHelper(), data).then(function (res) {
                _this.user.profile_photo = res.data.response.avatar;
                localStorage.setItem('User', JSON.stringify(_this.user));
                loading.dismissAll();
            });
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
            loading.dismissAll();
            alert('Error while uploading file.');
        };
    };
    // Create a new name for the image
    ProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    ProfilePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ProfilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return window['cordova']['file']['dataDirectory'] + img;
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Profile</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <small [hidden]="connection.online">\n    You are currently offline. For the best experience please connect to the internet.\n    <a href="#/app/offline">More Information</a>\n  </small>\n\n\n  <form\n    (ngSubmit)="submit(form)"\n    novalidate\n    name="form.registerForm"\n    id="register-form"\n    #form="ngForm"\n  >\n    <div class="avatar-wrapper">\n      <img\n        [src]="user.profile_photo"\n      />\n      <input\n        (change)="uploadImage($event)"\n        type="file"\n        id="avatar-upload"\n        name="avatar"\n        accept="image/png, image/jpeg">\n    </div>\n\n    <ion-row>\n      <ion-col col-6 style="padding-left: 0">\n        <input\n          type="text"\n          placeholder="Forename"\n          [(ngModel)]="user.first_name"\n          name="first_name"\n          required\n          [pattern]="onlyLettersRegEx"\n          #firstName="ngModel"\n        >\n        <div role="alert" [hidden]="!(firstName.invalid && (firstName.dirty || firstName.touched || submited))">\n          <div [hidden]="!firstName.hasError(\'required\')" class="error">Please enter a value.</div>\n          <div [hidden]="!firstName.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n        </div>\n      </ion-col>\n      <ion-col col-6 style="padding-right: 0">\n        <input\n          type="text"\n          placeholder="Surname"\n          [(ngModel)]="user.last_name"\n          name="last_name"\n          required\n          [pattern]="onlyLettersRegEx"\n          #surName="ngModel"\n        >\n        <div role="alert" [hidden]="!(surName.invalid && (surName.dirty || surName.touched || submited))">\n          <div [hidden]="!surName.hasError(\'required\')" class="error">Please enter a value.</div>\n          <div [hidden]="!surName.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <input\n      type="text"\n      placeholder="Email Address"\n      [(ngModel)]="user.email_address"\n      name="email_address"\n      required\n      [pattern]="emailRegEx"\n      #email="ngModel"\n    >\n    <div role="alert" [hidden]="!(email.invalid && (email.dirty || email.touched || submited))">\n      <div [hidden]="!email.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!email.hasError(\'pattern\')" class="error">Please enter a valid email address.</div>\n    </div>\n\n\n    <input\n      type="tel"\n      placeholder="Mobile"\n      [(ngModel)]="user.mobile"\n      name="mobile"\n      required\n      [pattern]="phoneRegEx"\n      #mobile="ngModel"\n    >\n    <div role="alert" [hidden]="!(mobile.invalid && (mobile.dirty || mobile.touched || submited))">\n      <div [hidden]="!mobile.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!mobile.hasError(\'pattern\')" class="error">Please enter a valid phone number.</div>\n    </div>\n\n\n    <input\n      type="text"\n      placeholder="Company"\n      [(ngModel)]="user.company"\n      name="company"\n      #company="ngModel"\n    >\n\n    <div\n      class="form-label"\n    >\n      Password\n    </div>\n\n    <input\n      type="password"\n      placeholder="Current Password"\n      [(ngModel)]="user.current_password"\n      name="current_password"\n      #current_password="ngModel"\n    >\n\n    <input\n      type="password"\n      placeholder="New Password"\n      [(ngModel)]="user.new_password"\n      name="new_password"\n      #new_password="ngModel"\n    >\n\n    <input\n      type="password"\n      placeholder="Confirm New Password"\n      [(ngModel)]="user.new_password_confirmation"\n      name="new_password_confirmation"\n      #new_password_confirmation="ngModel"\n    >\n\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n      style="margin-top: 20px"\n    >\n      Update\n    </button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaypalSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaypalSettingsPage = (function () {
    function PaypalSettingsPage(navCtrl, storage, http, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.onlyNumbersRegEx = /^[0-9]+$/;
        this.submited = false;
        this.user = {
            bank_id: '',
            bank_account_id: ''
        };
        this.connection = storage.connection;
    }
    PaypalSettingsPage.prototype.ionViewDidLoad = function () {
        // this.user = JSON.parse(localStorage.getItem('User'));
    };
    PaypalSettingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present();
        this.http.get(this.storage.baseUrl + "/getBankAccount?" + this.storage.getAuthHelper())
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            loader.dismiss();
            _this.user = {
                bank_id: response['response']['bankId'],
                bank_account_id: response['response']['bankAccountId'],
            };
        }, function (error) {
            loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Error connecting to our server',
                subTitle: 'We seem to be having some difficulties contacting our servers at this moment. Please wait a few minutes.',
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    PaypalSettingsPage.prototype.submit = function (form) {
        var _this = this;
        this.submited = true;
        if (form.valid) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var loader_1 = this.loadingCtrl.create();
            loader_1.present();
            this.http.post(this.storage.baseUrl + "/setBankAccount?" + this.storage.getAuthHelper(), "bank_id=" + encodeURIComponent(this.user.bank_id) + "&bank_account_id=" + encodeURIComponent(this.user.bank_account_id), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                loader_1.dismiss();
                if (response['error']['code'] != 0) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error when updating profile',
                        subTitle: response['response'],
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Settings Updated',
                        subTitle: 'You have successfully updated your settings.',
                        buttons: ['Ok']
                    });
                    alert_2.present();
                }
            }, function (error) {
                loader_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Error connecting to our server',
                    subTitle: 'We seem to be having some difficulties contacting our servers at this moment. Please wait a few minutes.',
                    buttons: ['Ok']
                });
                alert.present();
            });
        }
    };
    return PaypalSettingsPage;
}());
PaypalSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paypal-settings',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/paypalSettings/paypalSettings.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Bank Account Settings</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <form\n    (ngSubmit)="submit(form)"\n    novalidate\n    name="form.paypalForm"\n    id="paypal-form"\n    #form="ngForm"\n  >\n\n    <!--<div class="text-center">-->\n      <!--<img-->\n        <!--class="logo"-->\n        <!--src="assets/imgs/hyperwallet-logo.png"-->\n      <!--/>-->\n    <!--</div>-->\n\n    <p>Please enter your bank account details.</p>\n    <!--<p>If you do not have a HyperWallet account please register here <a href="http://www.hyperwallet.com">www.hyperwallet.com</a>.</p>-->\n\n    <input\n      type="tel"\n      placeholder="Bank ID"\n      [(ngModel)]="user.bank_id"\n      name="bank_id"\n      required\n      #bank_id="ngModel"\n      [pattern]="onlyNumbersRegEx"\n      minlength="6"\n    >\n    <div role="alert" [hidden]="!(bank_id.invalid && (bank_id.dirty || bank_id.touched) && submited)">\n      <div [hidden]="!bank_id.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!bank_id.hasError(\'pattern\')" class="error">Please enter numbers only.</div>\n      <div [hidden]="!bank_id.hasError(\'minlength\')" class="error">Minimum length is 6 numbers.</div>\n    </div>\n\n    <input\n      type="tel"\n      placeholder="Bank account ID"\n      [(ngModel)]="user.bank_account_id"\n      name="bank_account_id"\n      required\n      #bank_account_id="ngModel"\n      [pattern]="onlyNumbersRegEx"\n      minlength="8"\n    >\n    <div role="alert" [hidden]="!(bank_account_id.invalid && (bank_account_id.dirty || bank_account_id.touched) && submited)">\n      <div [hidden]="!bank_account_id.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!bank_account_id.hasError(\'pattern\')" class="error">Please enter numbers only.</div>\n      <div [hidden]="!bank_account_id.hasError(\'minlength\')" class="error">Minimum length is 8 numbers.</div>\n    </div>\n\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n      style="margin-top: 20px"\n    >\n      Save\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/paypalSettings/paypalSettings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PaypalSettingsPage);

//# sourceMappingURL=paypalSettings.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GlobalStorage = (function () {
    function GlobalStorage() {
        var _this = this;
        this.loading = false;
        this.connection = {
            online: true,
            loginVars: false,
            type: ""
        };
        this.primaryDomain = 'http://157.245.36.90:4000/';
        this.baseUrl = this.primaryDomain + "/api";
        this.authHelper = function () {
            var date = Math.floor(new Date().getTime() / 1000).toString();
            var pubkey = localStorage.getItem('public_key');
            var privkey = localStorage.getItem('private_key') || '';
            if (!privkey) {
                localStorage.clear();
                delete _this.user;
            }
            var hashed = __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.PBKDF2(date, privkey, {
                keySize: 256 / 32,
                iterations: 256,
                hasher: __WEBPACK_IMPORTED_MODULE_1_crypto_js___default.a.algo.SHA256
            })
                .toString();
            return {
                auth: hashed,
                timestamp: date,
                pubkey: pubkey
            };
        };
        this.getAuthHelper = function () {
            var data = _this.authHelper();
            var out = [];
            for (var key in data) {
                out.push(key + '=' + encodeURIComponent(data[key]));
            }
            return out.join('&');
        };
        this.isOnline = function () {
            if (window.cordova && window.Connection && navigator.connection.type == window.Connection.NONE) {
                return false;
            }
            return true;
        };
    }
    return GlobalStorage;
}());
GlobalStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], GlobalStorage);

//# sourceMappingURL=globalstorage.js.map

/***/ }),

/***/ 207:
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
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotPasswordThanks_forgotPasswordThanks__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, storage, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.auth = { email: '' };
        this.formError = '';
        this.connection = storage.connection;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('User')) {
            // this.navCtrl.setRoot(DashboardPage);
        }
    };
    ForgotPasswordPage.prototype.submit = function () {
        var _this = this;
        console.log('HEeeeeewwwdsfdfads=======');
        this.storage.loading = true;
        if (this.auth.email.trim() == '') {
            this.storage.loading = false;
            this.formError = 'Please complete the form';
            return;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var loader = this.loadingCtrl.create({
            content: 'Connecting to the server...'
        });
        loader.present();
        this.http.post(this.storage.baseUrl + "/forgotPassword", "email=" + encodeURIComponent(this.auth.email), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            _this.storage.loading = false;
            loader.dismiss();
            if (response.error.code != 0) {
                _this.formError = response.error.message;
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgotPasswordThanks_forgotPasswordThanks__["a" /* ForgotPasswordThanksPage */]);
            }
        }, function (error) {
            _this.storage.loading = false;
            loader.dismiss();
            _this.formError = 'There was a problem resetting your password.';
        });
    };
    ForgotPasswordPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/forgotPassword/forgotPassword.html"*/'<ion-header></ion-header>\n\n<ion-content city-bg>\n  <div class="logo">\n    <img src="assets/imgs/catex-logo.png">\n    <p>The professional referral app</p>\n  </div>\n\n    <!-- form -->\n  <form\n    method="post"\n    novalidate=""\n    (ngSubmit)="submit()"\n    name="form.loginForm"\n    #form="ngForm"\n  >\n\n    <input\n      type="email"\n      name="email"\n      [(ngModel)]="auth.email"\n      placeholder="Email Address"\n      required\n      [email]="true"\n      #email="ngModel"\n    />\n\n    <div role="alert" *ngIf="email.invalid && (email.dirty || email.touched)">\n      <div *ngIf="email.errors.required" class="error">Please enter a value for this field.</div>\n      <div *ngIf="email.errors.email" class="error">This field must be a valid email address.</div>\n    </div>\n\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n    >\n      Submit\n    </button>\n\n    <div\n      *ngIf="form_error"\n      class="error"\n    >\n      {{form_error}}\n    </div>\n\n    <a\n      (click)="goBack()"\n      class="transparent-rounded-button"\n    >\n      cancel\n    </a>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/forgotPassword/forgotPassword.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgotPassword.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordThanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordThanksPage = (function () {
    function ForgotPasswordThanksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ForgotPasswordThanksPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return ForgotPasswordThanksPage;
}());
ForgotPasswordThanksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot-password-thanks',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/forgotPasswordThanks/forgotPasswordThanks.html"*/'<ion-header></ion-header>\n\n<ion-content city-bg>\n  <div class="logo">\n    <img src="assets/imgs/catex-logo.png">\n    <p>The professional referral app</p>\n  </div>\n\n\n  <h4 class="title">We have just emailed you a password reset</h4>\n\n  <h5 class="text">Follow the link to reset your password and get back to adding referrals!</h5>\n\n  <a\n    (click)="goBack()"\n    class="transparent-rounded-button"\n  >\n    Back to Login\n  </a>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/forgotPasswordThanks/forgotPasswordThanks.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ForgotPasswordThanksPage);

//# sourceMappingURL=forgotPasswordThanks.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache_cache__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Api = (function () {
    function Api(storage, alertCtrl, http, cache) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.cache = cache;
        this.getBalance = function () {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/getBalance?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('balance', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('balance');
                    if (!response) {
                        _this.alertNoCache();
                    }
                }, function () {
                });
            });
        };
        this.getVendors = function () {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/getVendors?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('vendors', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('vendors');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getFavourites = function () {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/favourites?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('favourites', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('favourites');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getUser = function () {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/getUser?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('user', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('user');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getLeadCount = function () {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/getLeadCount?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('leadCount', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('leadCount');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getLeadHistory = function (params) {
            console.log(params);
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(_this.storage.baseUrl + "/getEarningsHistory?" + _this.storage.getAuthHelper(), Object.entries(params).map(function (_a) {
                    var k = _a[0], v = _a[1];
                    return k + "=" + v;
                }).join('&'), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('earningHistory', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('earningHistory');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getWithdraw = function (params) {
            if (params === void 0) { params = {}; }
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(_this.storage.baseUrl + "/getWithdrawalMethods?" + _this.storage.getAuthHelper(), params, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('withdraw', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('withdraw');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getVendorQuestions = function (vendor) {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/getVendorQuestions/" + vendor + "?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('vendorQuestions' + vendor, response);
                    resolve(response);
                }, function (error) {
                }, function () {
                });
            });
        };
        this.postLead = function (data) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return _this.http.post(_this.storage.baseUrl + "/addLead?" + _this.storage.getAuthHelper(), data, options);
        };
        this.getEarningHistory = function (userID) {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(_this.storage.baseUrl + "/getEarningsHistory?" + _this.storage.getAuthHelper(), { user_id: userID }, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('EarningsHistory', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('EarningsHistory');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getWithdrawalHistory = function (userID) {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(_this.storage.baseUrl + "/getWithdrawalHistory?" + _this.storage.getAuthHelper(), { user_id: userID }, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('EarningsHistory', response);
                    resolve(response);
                }, function (error) {
                }, function () {
                });
            });
        };
        this.getFAQ = function () {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/faqs?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('faqs', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('faqs');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
        this.getTOS = function () {
            return new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(_this.storage.baseUrl + "/termsConditions?" + _this.storage.getAuthHelper(), options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    _this.cache.setData('termsConditions', response);
                    resolve(response);
                }, function (error) {
                    var response = _this.cache.getData('termsConditions');
                    if (!response) {
                        _this.alertNoCache();
                        return false;
                    }
                }, function () {
                });
            });
        };
    }
    Api.prototype.alertNoCache = function () {
        console.trace();
        var alert = this.alertCtrl.create({
            title: 'No cached data',
            subTitle: 'You must use the app online at least once',
            buttons: ['Ok']
        });
        alert.present();
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__cache_cache__["a" /* Cache */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tour_tour__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_terms__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupPage = (function () {
    function SignupPage(navCtrl, storage, http, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.onlyLettersRegEx = /^[a-zA-Z ]+$/;
        this.phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        this.passwordsMatchingPattern = /^{this.user.password}/;
        this.emailRegEx = /^.*@.*\..*$/;
        this.submited = false;
        this.termsPage = __WEBPACK_IMPORTED_MODULE_7__terms_terms__["a" /* TermsPage */];
        this.user = {
            first_name: '',
            surname: '',
            email: '',
            mobile: '',
            company: '',
            club_code: '',
            password: '',
            conf_password: ''
        };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('User')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
        }
    };
    SignupPage.prototype.submit = function (form) {
        var _this = this;
        this.submited = true;
        if (form.valid && this.user.password == this.user.conf_password) {
            this.storage.loading = true;
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var loader_1 = this.loadingCtrl.create({
                content: 'Connecting to the server...'
            });
            loader_1.present();
            this.http.post(this.storage.baseUrl + "/register", "first_name=" + encodeURIComponent(this.user.first_name) + "&last_name=" + encodeURIComponent(this.user.surname) + "&email_address=" + encodeURIComponent(this.user.email) + "&mobile=" + encodeURIComponent(this.user.mobile) + "&company=" + encodeURIComponent(this.user.company) + "&password=" + encodeURIComponent(this.user.password) + "&club_code=" + encodeURIComponent(this.user.club_code), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.storage.loading = false;
                if (response.error.code != 0) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error when registering you',
                        subTitle: response.response,
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    //if we have a user etc., put in da session, and then move to the avatar creation screen
                    localStorage.setItem('User', JSON.stringify(response.response.User));
                    localStorage.setItem('public_key', response.response.public_auth_key);
                    localStorage.setItem('private_key', response.response.private_auth_key);
                    _this.storage.user = response.response.User;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tour_tour__["a" /* TourPage */]);
                }
            }, function (error) {
                _this.storage.loading = false;
                var alert = _this.alertCtrl.create({
                    title: 'Error connecting to our server',
                    subTitle: 'We seem to be having some difficulties contacting our servers at this moment. Please wait a few minutes.',
                    buttons: ['Ok']
                });
                alert.present();
            }, function () {
                _this.storage.loading = false;
                loader_1.dismiss();
            });
        }
    };
    SignupPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/signup/signup.html"*/'<ion-header></ion-header>\n\n<ion-content city-bg>\n  <div class="logo">\n    <img src="assets/imgs/catex-logo.png">\n    <p>The professional referral app</p>\n  </div>\n\n  <form\n    (ngSubmit)="submit(form)"\n    novalidate\n    name="form.registerForm"\n    id="register-form"\n    #form="ngForm"\n  >\n    <ion-row>\n      <ion-col col-6 style="padding-left: 0">\n        <input\n          type="text"\n          placeholder="Forename"\n          [(ngModel)]="user.first_name"\n          name="first_name"\n          required\n          [pattern]="onlyLettersRegEx"\n          #firstName="ngModel"\n        >\n        <div role="alert" [hidden]="!(firstName.invalid && (firstName.dirty || firstName.touched || submited))">\n          <div [hidden]="!firstName.hasError(\'required\')" class="error">Please enter a value.</div>\n          <div [hidden]="!firstName.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n        </div>\n      </ion-col>\n      <ion-col col-6 style="padding-right: 0">\n        <input\n          type="text"\n          placeholder="Surname"\n          [(ngModel)]="user.surname"\n          name="surname"\n          required\n          [pattern]="onlyLettersRegEx"\n          #surName="ngModel"\n        >\n        <div role="alert" [hidden]="!(surName.invalid && (surName.dirty || surName.touched || submited))">\n          <div [hidden]="!surName.hasError(\'required\')" class="error">Please enter a value.</div>\n          <div [hidden]="!surName.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <input\n      type="text"\n      placeholder="Email Address"\n      [(ngModel)]="user.email"\n      name="email"\n      required\n      [pattern]="emailRegEx"\n      #email="ngModel"\n    >\n    <div role="alert" [hidden]="!(email.invalid && (email.dirty || email.touched || submited))">\n      <div [hidden]="!email.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!email.hasError(\'pattern\')" class="error">Please enter a valid email address.</div>\n    </div>\n\n\n    <input\n      type="tel"\n      placeholder="Mobile"\n      [(ngModel)]="user.mobile"\n      name="mobile"\n      required\n      [pattern]="phoneRegEx"\n      #mobile="ngModel"\n    >\n    <div role="alert" [hidden]="!(mobile.invalid && (mobile.dirty || mobile.touched || submited))">\n      <div [hidden]="!mobile.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!mobile.hasError(\'pattern\')" class="error">Please enter a valid phone number.</div>\n    </div>\n\n\n    <input\n      type="text"\n      placeholder="Company"\n      [(ngModel)]="user.company"\n      name="company"\n      #company="ngModel"\n    >\n\n\n    <input\n      type="text"\n      placeholder="Club Code (optional)"\n      [(ngModel)]="user.club_code"\n      name="club_code"\n      #clubCode="ngModel"\n    >\n\n\n    <input\n      type="password"\n      placeholder="Password"\n      [(ngModel)]="user.password"\n      name="password"\n      required\n      #password="ngModel"\n    >\n    <div role="alert" [hidden]="!(password.invalid && (password.dirty || password.touched || submited))">\n      <div [hidden]="!password.hasError(\'required\')" class="error">Please enter a value.</div>\n    </div>\n\n\n    <input\n      type="password"\n      placeholder="Confirm Password"\n      [(ngModel)]="user.conf_password"\n      name="conf_password"\n      required\n      #conf_password="ngModel"\n    >\n    <div role="alert" [hidden]="!((conf_password.invalid || user.password != user.conf_password) && (conf_password.dirty || conf_password.touched || submited))">\n      <div [hidden]="!conf_password.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="user.password == user.conf_password" class="error">The two passwords do not match.</div>\n    </div>\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n    >\n      Register\n    </button>\n\n    <a\n      [navPush]="termsPage"\n      href="#/app/tos"\n      class="terms-link"\n    >\n      By continuing with your registration, you are agreeing<br/> to our <span>Terms &amp; Conditions.</span>\n    </a>\n\n    <a\n      (click)="goBack()"\n      class="transparent-rounded-button"\n    >\n      cancel\n    </a>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tour_tour__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FAQ_FAQ__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__terms_terms__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__paypalSettings_paypalSettings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notificationsSettings_notificationsSettings__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__leadHistory_leadHistory__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__withdrawalHistory_withdrawalHistory__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SettingsPage = (function () {
    function SettingsPage(navCtrl, storage, http, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.current_user = {};
        this.tourPage = __WEBPACK_IMPORTED_MODULE_6__tour_tour__["a" /* TourPage */];
        this.faqPage = __WEBPACK_IMPORTED_MODULE_8__FAQ_FAQ__["a" /* FAQPage */];
        this.termsPage = __WEBPACK_IMPORTED_MODULE_9__terms_terms__["a" /* TermsPage */];
        this.profilePage = __WEBPACK_IMPORTED_MODULE_10__profile_profile__["a" /* ProfilePage */];
        this.paypalSettingsPage = __WEBPACK_IMPORTED_MODULE_11__paypalSettings_paypalSettings__["a" /* PaypalSettingsPage */];
        this.notificationsSettingsPage = __WEBPACK_IMPORTED_MODULE_12__notificationsSettings_notificationsSettings__["a" /* NotificationsSettingsPage */];
        this.leadHistoryPage = __WEBPACK_IMPORTED_MODULE_13__leadHistory_leadHistory__["a" /* LeadHistoryPage */];
        this.withdrawalHistoryPage = __WEBPACK_IMPORTED_MODULE_14__withdrawalHistory_withdrawalHistory__["a" /* WithdrawalHistoryPage */];
        this.connection = this.storage.connection;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.current_user = JSON.parse(localStorage.getItem('User'));
        // this.navCtrl.push(WithdrawalHistoryPage)
    };
    SettingsPage.prototype.ionViewDidEnter = function () {
        this.current_user = JSON.parse(localStorage.getItem('User'));
    };
    SettingsPage.prototype.logout = function () {
        localStorage.clear();
        delete this.storage.user;
        this.http.get(this.storage.baseUrl + "/logout?" + this.storage.getAuthHelper());
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Settings</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n    <!--<small class="alert text-center mb3 bg-silver black rounded block" *ngIf="!connection.online">-->\n      <!--You are currently offline. For the best experience please connect to the internet. <a-->\n      <!--href="#/app/offline">More Information</a>-->\n    <!--</small>-->\n\n  <section\n    [navPush]="profilePage"\n  >\n    <a>\n      <img [src]="current_user.profile_photo"/>\n      <div class="name">\n        <div class="name">{{current_user.first_name}} {{current_user.last_name}}</div>\n        <div class="company">{{current_user.company}}</div>\n      </div>\n    </a>\n  </section>\n\n  <section>\n    <ul>\n      <li\n        [navPush]="profilePage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            Edit Profile\n            <small>Unavailable offline</small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          Edit Profile\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n\n\n      <li\n        [navPush]="paypalSettingsPage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            Bank Account Settings\n            <small>Unavailable offline</small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          Bank Account Settings\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n\n\n      <li\n        [navPush]="notificationsSettingsPage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            Notifications Settings\n            <small>Notifications Settings</small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          Notifications Settings\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n\n\n      <li\n        [navPush]="leadHistoryPage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            Earnings History\n            <small></small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          Earnings History\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n\n\n      <li\n        [navPush]="withdrawalHistoryPage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            Withdrawal History\n            <small>Withdrawal History</small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          Withdrawal History\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <section>\n    <ul>\n      <li\n        [navPush]="faqPage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            Frequently Asked Questions\n            <small>Unavailable offline</small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          Frequently Asked Questions\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n\n\n      <li\n        [navPush]="termsPage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            Terms &amp; Conditions\n            <small>Unavailable offline</small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          Terms &amp; Conditions\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n\n\n      <li\n        [navPush]="tourPage"\n      >\n        <div\n          *ngIf="!connection.online">\n          <div>\n            About this App\n            <small>Notifications Settings</small>\n          </div>\n        </div>\n        <a\n          *ngIf="connection.online"\n        >\n          About this App\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <!-- Button (grey) -->\n  <button\n    class="submit-button gray"\n    (click)="logout()"\n  >\n    Log Out\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_api__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FAQPage = (function () {
    function FAQPage(navCtrl, storage, api) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.dashboardPage = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.faqs = [];
    }
    FAQPage.prototype.handleSectionClick = function (index) {
        if (this.currentIndex == index) {
            this.currentIndex = null;
        }
        else {
            this.currentIndex = index;
        }
    };
    FAQPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.loading = true;
        this.api.getFAQ().then(function (res) {
            _this.storage.loading = false;
            _this.faqs = res['response'];
        });
    };
    return FAQPage;
}());
FAQPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-faq',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/FAQ/FAQ.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Frequently asked questions</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ul class="list">\n    <li\n      *ngFor="let faq of faqs; let i = index"\n      [attr.data-index]="i"\n      (click)="handleSectionClick(i)"\n      [className]="currentIndex == i ? \'active\' : \'\'"\n    >\n      <a>\n        <i\n          [className]="currentIndex == i ? \'fa fa-minus\' : \'fa fa-plus\'"\n        ></i>\n        {{faq.question}}\n      </a>\n\n      <div [hidden]="currentIndex != i" [innerHTML]="faq.answer"></div>\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/FAQ/FAQ.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_api__["a" /* Api */]])
], FAQPage);

//# sourceMappingURL=FAQ.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsSettingsPage = (function () {
    function NotificationsSettingsPage(navCtrl, storage, http, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.emailRegEx = /^.*@.*\..*$/;
        this.submited = false;
        this.user = {
            notification_setting_id: ''
        };
        this.connection = storage.connection;
    }
    NotificationsSettingsPage.prototype.ionViewDidLoad = function () {
        this.user = JSON.parse(localStorage.getItem('User'));
    };
    NotificationsSettingsPage.prototype.submit = function (form) {
        var _this = this;
        this.submited = true;
        if (form.valid) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var loader_1 = this.loadingCtrl.create();
            loader_1.present();
            this.http.post(this.storage.baseUrl + "/updateUser?" + this.storage.getAuthHelper(), "notification_setting_id=" + encodeURIComponent(this.user.notification_setting_id), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                _this.storage.loading = false;
                if (response.error.code != 0) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error when updating profile',
                        subTitle: response.response,
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    localStorage.setItem('User', JSON.stringify(response['response']['User']));
                }
            }, function (error) {
                _this.storage.loading = false;
                var alert = _this.alertCtrl.create({
                    title: 'Error connecting to our server',
                    subTitle: 'We seem to be having some difficulties contacting our servers at this moment. Please wait a few minutes.',
                    buttons: ['Ok']
                });
                alert.present();
            }, function () {
                _this.storage.loading = false;
                loader_1.dismiss();
            });
        }
    };
    return NotificationsSettingsPage;
}());
NotificationsSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications-settings',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/notificationsSettings/notificationsSettings.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Notifications</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <form\n    (ngSubmit)="submit(form)"\n    novalidate\n    name="form.paypalForm"\n    id="paypal-form"\n    #form="ngForm"\n  >\n\n    <p>Funds that are being processed, will only be deducted from your dashboard amount once paid</p>\n\n    <ion-list\n      radio-group\n      [(ngModel)]="user.notification_setting_id"\n      name="notification_setting_id"\n      (ngModelChange)="submit(form)"\n    >\n      <ion-item>\n        <ion-label>Send me Weekly updates</ion-label>\n        <ion-radio value="1"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Send me Monthly Updates</ion-label>\n        <ion-radio value="2"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Don\'t send me notifications</ion-label>\n        <ion-radio value="3"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/notificationsSettings/notificationsSettings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], NotificationsSettingsPage);

//# sourceMappingURL=notificationsSettings.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leadHistoryFilters_leadHistoryFilters__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LeadHistoryPage = (function () {
    function LeadHistoryPage(navCtrl, storage, http, loadingCtrl, api, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.current_user = {};
        this.filtersPage = __WEBPACK_IMPORTED_MODULE_6__leadHistoryFilters_leadHistoryFilters__["a" /* LeadHistoryFiltersPage */];
        this.earnings = [];
        this.earningsCount = 0;
        this.moment = __WEBPACK_IMPORTED_MODULE_7_moment__;
        this.status = '0';
        this.current_user = JSON.parse(localStorage.getItem('User'));
        this.connection = this.storage.connection;
    }
    LeadHistoryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var loader = this.loadingCtrl.create();
        loader.present();
        this.http.post(this.storage.baseUrl + "/getEarningsHistory?" + this.storage.getAuthHelper(), "date_range_id=" + this.status + "&user_id=" + this.current_user.id, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.earnings = response['response'];
            _this.calculateCount();
        }, function (error) {
        }, function () {
            loader.dismiss();
        });
    };
    LeadHistoryPage.prototype.calculateCount = function () {
        var _this = this;
        this.earningsCount = this.earnings.filter(function (i) { return i['LeadStatus']['id'] == _this.status || _this.status == '0'; }).length;
    };
    LeadHistoryPage.prototype.openFilters = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__leadHistoryFilters_leadHistoryFilters__["a" /* LeadHistoryFiltersPage */], {
            status: this.status,
            onStatusChange: function (status) { _this.status = status; }
        });
    };
    return LeadHistoryPage;
}());
LeadHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lead-history',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/leadHistory/leadHistory.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Lead History</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <!--<small class="alert text-center mb3 bg-silver black rounded block" ng-show="!connection.online">-->\n    <!--You are currently offline. For the best experience please connect to the internet. <a-->\n    <!--href="#/app/offline">More Information</a>-->\n  <!--</small>-->\n\n  <section>\n    <ul>\n      <li\n        (click)="openFilters()"\n      >\n        <a>\n          Filter\n          <span *ngIf="status == 1">(Pending)</span>\n          <span *ngIf="status == 2">(Won)</span>\n          <span *ngIf="status == 3">(Lost)</span>\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <div\n    class="form-label"\n  >\n    total earned\n    <div\n      class="right"\n    >\n      {{current_user.total_earned / 100 | currency: \'GBP\': true}}\n    </div>\n  </div>\n\n  <div *ngFor="let lead of earnings">\n    <section *ngIf="lead[\'LeadStatus\'][\'id\'] == status || status == 0">\n      <ul>\n        <li class="item">\n          <div class="name">{{ lead[\'Lead\'][\'first_name\'] }}&nbsp;{{ lead[\'Lead\'][\'last_name\'] }}</div>\n          <div class="company">Service Provider: {{lead[\'Vendor\'][\'company_name\']}}</div>\n          <div class="added">Added: {{ moment(lead[\'Lead\'][\'date_added\'], "YYYY-MM-DD hh:mm:ss").format(\'DD/MM/YYYY, h:mm A\') }}</div>\n          <div class="right-box">\n            <div [ngClass]="{\'label\': true, \'green\': lead[\'LeadStatus\'][\'id\'] == 2, \'red\': lead[\'LeadStatus\'][\'id\'] == 3, \'gray\': lead[\'LeadStatus\'][\'id\'] == 1 }">{{lead[\'LeadStatus\'][\'name\']}}</div>\n            <div class="amount">{{lead.Lead.user_value / 100 | currency: \'GBP\': true}}</div>\n          </div>\n        </li>\n      </ul>\n    </section>\n  </div>\n\n  <section\n    [hidden]="earningsCount > 0"\n  >\n    <ul>\n      <li>\n        <a>\n          You haven\'t earned anything yet\n        </a>\n      </li>\n    </ul>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/leadHistory/leadHistory.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LeadHistoryPage);

//# sourceMappingURL=leadHistory.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadHistoryFiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadHistoryFiltersPage = (function () {
    function LeadHistoryFiltersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = 0;
    }
    LeadHistoryFiltersPage.prototype.ionViewDidLoad = function () {
        this.onStatusChange = this.navParams.get('onStatusChange');
        this.status = this.navParams.get('status');
    };
    LeadHistoryFiltersPage.prototype.submit = function () {
        this.onStatusChange(this.status);
        this.navCtrl.pop();
    };
    return LeadHistoryFiltersPage;
}());
LeadHistoryFiltersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lead-history-filters',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/leadHistoryFilters/leadHistoryFilters.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Filter</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <form\n    (ngSubmit)="submit(form)"\n    novalidate\n    name="form.paypalForm"\n    id="paypal-form"\n    #form="ngForm"\n  >\n    <ion-list\n      radio-group\n      [(ngModel)]="status"\n      name="status"\n    >\n      <ion-item>\n        <ion-label>Display ALL</ion-label>\n        <ion-radio value="0"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pending</ion-label>\n        <ion-radio value="1"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Won</ion-label>\n        <ion-radio value="2"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Lost</ion-label>\n        <ion-radio value="3"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n      style="margin-top: 20px"\n    >\n      Update\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/leadHistoryFilters/leadHistoryFilters.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LeadHistoryFiltersPage);

//# sourceMappingURL=leadHistoryFilters.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__withdrawalHistoryFilters_withdrawalHistoryFilters__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WithdrawalHistoryPage = (function () {
    function WithdrawalHistoryPage(navCtrl, storage, http, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.current_user = {};
        this.filtersPage = __WEBPACK_IMPORTED_MODULE_5__withdrawalHistoryFilters_withdrawalHistoryFilters__["a" /* WithdrawalHistoryFiltersPage */];
        this.earnings = [];
        this.moment = __WEBPACK_IMPORTED_MODULE_6_moment__;
        this.date_range_id = 0;
        this.current_user = JSON.parse(localStorage.getItem('User'));
        this.connection = this.storage.connection;
    }
    WithdrawalHistoryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var loader = this.loadingCtrl.create();
        loader.present();
        this.http.post(this.storage.baseUrl + "/getWithdrawalHistory?" + this.storage.getAuthHelper(), "date_range=" + this.date_range_id + "&user_id=" + this.current_user.id, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.earnings = response['response'];
            _this.calculateCount();
        }, function (error) {
        }, function () {
            loader.dismiss();
        });
    };
    WithdrawalHistoryPage.prototype.calculateCount = function () {
        // this.earningsCount = this.earnings.filter(i => i['LeadStatus']['id'] == this.status || this.status == 0).length
    };
    WithdrawalHistoryPage.prototype.openFilters = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__withdrawalHistoryFilters_withdrawalHistoryFilters__["a" /* WithdrawalHistoryFiltersPage */], {
            date_range_id: this.date_range_id,
            onChange: function (date_range_id) { _this.date_range_id = date_range_id; }
        });
    };
    return WithdrawalHistoryPage;
}());
WithdrawalHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-withdrawal-history',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/withdrawalHistory/withdrawalHistory.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Withdrawal History</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <!--<small class="alert text-center mb3 bg-silver black rounded block" ng-show="!connection.online">-->\n    <!--You are currently offline. For the best experience please connect to the internet. <a-->\n    <!--href="#/app/offline">More Information</a>-->\n  <!--</small>-->\n\n  <section>\n    <ul>\n      <li\n        (click)="openFilters()"\n      >\n        <a>\n          Filter\n          <span *ngIf="date_range_id == 1">(This Week)</span>\n          <span *ngIf="date_range_id == 2">(This Month)</span>\n          <span *ngIf="date_range_id == 4">(3 Months)</span>\n          <span *ngIf="date_range_id == 3">(This Year)</span>\n\n          <span class="fa fa-chevron-right"></span>\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <div\n    class="form-label"\n  >\n    total earned\n    <div\n      class="right"\n    >\n      {{current_user.total_earned / 100 | currency: \'GBP\': true}}\n    </div>\n  </div>\n\n  <div *ngFor="let lead of earnings">\n    <section>\n      <ul>\n        <li class="item">\n          <div class="added">Date Requested: {{ moment(lead[\'Transaction\'][\'created_on\'], "YYYY-MM-DD hh:mm:ss").format(\'DD/MM/YYYY, h:mm A\') }}</div>\n          <div class="added">Date Approved: {{ moment(lead[\'Transaction\'][\'approved_on\'], "YYYY-MM-DD hh:mm:ss").format(\'DD/MM/YYYY, h:mm A\') }}</div>\n          <br/>\n          <div class="right-box">\n            <div [ngClass]="{\'label gray\': true, \'green\': lead[\'Transaction\'][\'status\'] == 2, \'red\': lead[\'Transaction\'][\'status\'] == 3 }">{{lead[\'Transaction\'][\'status\']}}</div>\n            <div class="amount">{{lead[\'Transaction\'][\'amount\'] / 100 | currency: lead[\'Transaction\'][\'currency\']: true}}</div>\n          </div>\n        </li>\n      </ul>\n    </section>\n  </div>\n\n  <section\n    [hidden]="earnings.length > 0"\n  >\n    <ul>\n      <li>\n        <a>\n          You haven\'t earned anything yet\n        </a>\n      </li>\n    </ul>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/withdrawalHistory/withdrawalHistory.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], WithdrawalHistoryPage);

//# sourceMappingURL=withdrawalHistory.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalHistoryFiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithdrawalHistoryFiltersPage = (function () {
    function WithdrawalHistoryFiltersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.date_range_id = '';
    }
    WithdrawalHistoryFiltersPage.prototype.ionViewDidLoad = function () {
        this.onChange = this.navParams.get('onChange');
        this.date_range_id = this.navParams.get('date_range_id');
    };
    WithdrawalHistoryFiltersPage.prototype.submit = function () {
        this.onChange(this.date_range_id);
        this.navCtrl.pop();
    };
    return WithdrawalHistoryFiltersPage;
}());
WithdrawalHistoryFiltersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-withdrawal-history-filters',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/withdrawalHistoryFilters/withdrawalHistoryFilters.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Select Date Range</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <form\n    (ngSubmit)="submit(form)"\n    novalidate\n    name="form.paypalForm"\n    id="paypal-form"\n    #form="ngForm"\n  >\n    <ion-list\n      radio-group\n      [(ngModel)]="date_range_id"\n      name="date_range_id"\n    >\n      <ion-item>\n        <ion-label>This Week</ion-label>\n        <ion-radio value="1"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>This Month</ion-label>\n        <ion-radio value="2"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>3 Months</ion-label>\n        <ion-radio value="4"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>This Year</ion-label>\n        <ion-radio value="3"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>ALL Time</ion-label>\n        <ion-radio value="5"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n      style="margin-top: 20px"\n    >\n      Update\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/withdrawalHistoryFilters/withdrawalHistoryFilters.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], WithdrawalHistoryFiltersPage);

//# sourceMappingURL=withdrawalHistoryFilters.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__referralDetails_referralDetails__ = __webpack_require__(421);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







var ServiceCategoriesPage = (function () {
    function ServiceCategoriesPage(navCtrl, storage, api, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.faqs = [];
        this.onlyFavourites = false;
        this.vendors = [];
        this.search = '';
    }
    ServiceCategoriesPage.prototype.handleSectionClick = function (index) {
        if (this.currentIndex == index) {
            this.currentIndex = null;
        }
        else {
            this.currentIndex = index;
        }
    };
    ServiceCategoriesPage.prototype.ionViewDidLoad = function () {
        this.getVendors();
    };
    ServiceCategoriesPage.prototype.addToFavourites = function (vendor) {
        var loader = this.loadingCtrl.create();
        loader.present();
        this.http.get(this.storage.baseUrl + "/favourite/" + vendor.id + "?" + this.storage.getAuthHelper())
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            vendor.favourite = response['response']['new_value'];
        }, function (error) {
        }, function () {
            loader.dismiss();
        });
    };
    ServiceCategoriesPage.prototype.showFavouritesOnly = function () {
        this.onlyFavourites = !this.onlyFavourites;
    };
    ServiceCategoriesPage.prototype.selectVendor = function (vendor, vendorCategory) {
        if (this.selectedVendor && this.selectedVendor.vendor.id == vendor.id) {
            this.selectedVendor = null;
        }
        else {
            this.selectedVendor = { vendor: vendor, vendorCategory: vendorCategory };
        }
    };
    ServiceCategoriesPage.prototype.getVendors = function () {
        var _this = this;
        this.api.getVendors().then(function (response) {
            _this.vendors = response['response'];
            _this.vendors.sort(function (a, b) {
                if (a.VendorCategory.name < b.VendorCategory.name) {
                    return -1;
                }
                else if (a.VendorCategory.name > b.VendorCategory.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.api.getFavourites().then(function (response) {
                var favourites = response['response'];
                _this.vendors = _this.vendors.map(function (_a) {
                    var Vendor = _a.Vendor, vendorObject = __rest(_a, ["Vendor"]);
                    return __assign({}, vendorObject, { Vendor: Vendor.map(function (vendor) { return (__assign({}, vendor, { favourite: favourites.includes(parseInt(vendor.id)) })); }) });
                });
            });
        });
    };
    ServiceCategoriesPage.prototype.shouldHideVendorGroup = function (vendorGroup) {
        var _this = this;
        return !((this.onlyFavourites ? vendorGroup.Vendor.find(function (_a) {
            var favourite = _a.favourite;
            return favourite;
        }) : true) &&
            vendorGroup.Vendor.find(function (vendor) { return vendor.company_name.includes(_this.search); }));
    };
    ServiceCategoriesPage.prototype.shouldHideVendor = function (vendor) {
        return !((this.onlyFavourites ? vendor.favourite : true) && vendor.company_name.includes(this.search));
    };
    ServiceCategoriesPage.prototype.goToReferralDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__referralDetails_referralDetails__["a" /* ReferralDetailsPage */], { vendor: this.selectedVendor });
    };
    return ServiceCategoriesPage;
}());
ServiceCategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-categories',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/serviceCategories/serviceCategories.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Service Categories</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <div\n    class="search-container"\n  >\n    <input\n      type="text"\n      [(ngModel)]="search"\n      placeholder="Search Service Providers"\n    />\n    <i class="fa fa-search"></i>\n  </div>\n\n  <div\n    class="container"\n  >\n    <a\n      class="gray-button"\n      (click)="showFavouritesOnly()"\n    >\n      {{ onlyFavourites ? "Show All" : "Show Favourites Only" }}\n    </a>\n\n    <p\n      class="center"\n    >\n      (Expand a category, and select a Service Provider)\n    </p>\n\n    <ul class="list">\n      <li\n        *ngFor="let vendorCategoryGroup of vendors; let i = index"\n        [hidden]="shouldHideVendorGroup(vendorCategoryGroup)"\n        [attr.data-index]="i"\n        [className]="currentIndex === i ? \'active\' : \'\'"\n      >\n        <a\n          (click)="handleSectionClick(i)"\n        >\n          <i\n            class="fa fa-chevron-down"\n          ></i>\n          {{vendorCategoryGroup.VendorCategory.name}}\n        </a>\n\n        <div\n          *ngFor="let vendor of vendorCategoryGroup.Vendor; let idx = index"\n          [hidden]="currentIndex !== i || shouldHideVendor(vendor)">\n          <div class="header">\n            <i\n              class="fa fa-heart"\n              (click)="addToFavourites(vendor)"\n              [ngClass]="{\'fa\': true, \'fa-heart-o black\': !vendor.favourite, \'fa-heart red\': vendor.favourite}"\n            ></i>\n            <div class="title">{{ vendor.company_name }}</div>\n            <a\n              class="select-button"\n              (click)="selectVendor(vendor, vendorCategoryGroup.VendorCategory)"\n              [ngClass]="{\'selected\': selectedVendor && vendor.id == selectedVendor.id }"\n            >\n              select\n            </a>\n          </div>\n          <div class="blurb">{{ vendor.blurb }}</div>\n          <pre class="description">{{ vendor.description }}</pre>\n          <video\n            controls\n            preload="none"\n            [poster]="storage.primaryDomain + vendor.video_thumb"\n            *ngIf="vendor.video_url"\n          >\n            <source\n              [src]="storage.primaryDomain + vendor.video_url"\n              type="video/mp4"\n            >\n            <p>Video not supported.</p>\n          </video>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n</ion-content>\n\n<div\n  class="bottom-button"\n  *ngIf="selectedVendor"\n  (click)="goToReferralDetails()"\n>\n  Next\n</div>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/serviceCategories/serviceCategories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], ServiceCategoriesPage);

//# sourceMappingURL=serviceCategories.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leadThanks_leadThanks__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cache_cache__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReferralDetailsPage = (function () {
    function ReferralDetailsPage(navCtrl, storage, http, loadingCtrl, api, rf_cache, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.rf_cache = rf_cache;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.onlyLettersRegEx = /^[a-zA-Z ]+$/;
        this.onlyNumbersRegEx = /^\d+$/;
        this.phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        this.emailRegEx = /^.*@.*\..*$/;
        this.postcodeRegEx = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;
        this.submited = false;
        this.additional_information = [];
        this.leadThanksPage = __WEBPACK_IMPORTED_MODULE_2__leadThanks_leadThanks__["a" /* LeadThanksPage */];
        this.lead = {
            vendor_id: '',
            vendor_category_id: '',
            user_id: '',
            first_name: '',
            last_name: '',
            company: '',
            email_address: '',
            mobile_number: '',
            phone_number: '',
            address1: '',
            address2: '',
            town: '',
            county: '',
            post_code: '',
            budget: '',
            additional_information: ''
        };
    }
    ReferralDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.vendor = this.navParams.get('vendor');
        this.lead.vendor_id = this.vendor.vendor.id;
        this.lead.vendor_category_id = this.vendor.vendorCategory.id;
        this.lead.user_id = JSON.parse(localStorage.getItem('User'))['id'];
        this.api.getVendorQuestions(this.vendor.vendor.id)
            .then(function (response) {
            if (!response) {
                _this.additional_information = [];
            }
            else {
                if (response['error']['code'] != 0) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error.',
                        subTitle: response['error']['message'],
                        buttons: ['Ok']
                    });
                    alert_1.present();
                    _this.navCtrl.pop();
                }
                else {
                    _this.additional_information = response['response'];
                    _this.additional_information.forEach(function (item) {
                        item.additional_information = JSON.parse(item.additional_information);
                    });
                }
            }
        });
        // this.navCtrl.push(LeadThanksPage)
    };
    ReferralDetailsPage.prototype.submit = function (form) {
        this.submited = true;
        if (form.valid) {
            if (this.storage.isOnline()) {
                this.submitLead();
            }
            else {
                this.rf_cache.storeLead(this.lead);
                // $state.go('app.offlineLead');
            }
        }
    };
    ReferralDetailsPage.prototype.submitLead = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var loader = this.loadingCtrl.create({
            content: 'Connecting to the server...'
        });
        var params = Object.entries(this.lead).map(function (_a) {
            var key = _a[0], value = _a[1];
            return "data[Lead][" + key + "]=" + encodeURIComponent(value);
        }).join('&');
        loader.present();
        this.api.postLead(params)
            .map(function (res) {
            console.log(res);
            return res.json();
        })
            .subscribe(function (response) {
            if (response.error.code != 0) {
                var alert_2 = _this.alertCtrl.create({
                    title: response['error']['message'],
                    subTitle: response['response'],
                    buttons: ['Ok']
                });
                alert_2.present();
            }
            else {
                var user = JSON.parse(localStorage.getItem('User'));
                user.lead_count = response['response']['User']['lead_count'];
                user.winner_count = response['response']['User']['winner_count'];
                user.current_balance = response['response']['User']['current_balance'];
                user.available_balance = response['response']['User']['available_balance'];
                localStorage.setItem('User', JSON.stringify(user));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__leadThanks_leadThanks__["a" /* LeadThanksPage */]);
            }
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Error connecting to our server',
                subTitle: 'There was a problem saving your lead.  Please try again',
                buttons: ['Ok']
            });
            alert.present();
        }, function () {
            loader.dismiss();
        });
    };
    ReferralDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return ReferralDetailsPage;
}());
ReferralDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-referral-details',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/referralDetails/referralDetails.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Referral Details</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <form\n    (ngSubmit)="submit(form)"\n    novalidate\n    name="form.registerForm"\n    id="register-form"\n    #form="ngForm"\n  >\n    <div class="form-label">Basic info</div>\n\n    <ion-row>\n      <ion-col col-6 style="padding-left: 0">\n        <input\n          type="text"\n          placeholder="Forename*"\n          [(ngModel)]="lead.first_name"\n          name="firstname"\n          required\n          [pattern]="onlyLettersRegEx"\n          #firstName="ngModel"\n        >\n        <div role="alert" [hidden]="!(firstName.invalid && (firstName.dirty || firstName.touched || submited))">\n          <div [hidden]="!firstName.hasError(\'required\')" class="error">Please enter a value.</div>\n          <div [hidden]="!firstName.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n        </div>\n      </ion-col>\n      <ion-col col-6 style="padding-right: 0">\n        <input\n          type="text"\n          placeholder="Surname*"\n          [(ngModel)]="lead.last_name"\n          name="surname"\n          required\n          [pattern]="onlyLettersRegEx"\n          #surName="ngModel"\n        >\n        <div role="alert" [hidden]="!(surName.invalid && (surName.dirty || surName.touched || submited))">\n          <div [hidden]="!surName.hasError(\'required\')" class="error">Please enter a value.</div>\n          <div [hidden]="!surName.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <input\n      type="text"\n      placeholder="Company Name"\n      [(ngModel)]="lead.company"\n      name="company"\n      #company="ngModel"\n    >\n\n    <input\n      type="text"\n      placeholder="Email Address*"\n      [(ngModel)]="lead.email_address"\n      name="email"\n      required\n      [pattern]="emailRegEx"\n      #email="ngModel"\n    >\n    <div role="alert" [hidden]="!(email.invalid && (email.dirty || email.touched || submited))">\n      <div [hidden]="!email.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!email.hasError(\'pattern\')" class="error">Please enter a valid email address.</div>\n    </div>\n\n    <input\n      type="tel"\n      placeholder="Mobile Number*"\n      [(ngModel)]="lead.mobile_number"\n      name="mobile"\n      [pattern]="onlyNumbersRegEx"\n      required\n      #mobile="ngModel"\n    >\n    <div role="alert" [hidden]="!(mobile.invalid && (mobile.dirty || mobile.touched || submited))">\n      <div [hidden]="!mobile.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!mobile.hasError(\'pattern\')" class="error">Please enter a valid phone number.</div>\n    </div>\n\n    <input\n      type="tel"\n      placeholder="Phone Number*"\n      [(ngModel)]="lead.phone_number"\n      name="phone"\n      required\n      [pattern]="onlyNumbersRegEx"\n      #phone="ngModel"\n    >\n    <div role="alert" [hidden]="!(phone.invalid && (phone.dirty || phone.touched || submited))">\n      <div [hidden]="!phone.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!phone.hasError(\'pattern\')" class="error">Please enter a valid phone number.</div>\n    </div>\n\n    <input\n      type="text"\n      placeholder="Budget (GBP)"\n      [(ngModel)]="lead.budget"\n      name="budget"\n      [pattern]="onlyNumbersRegEx"\n      required\n      #budget="ngModel"\n    >\n    <div class="form-label">Address info</div>\n\n    <input\n      type="text"\n      placeholder="Address line 1*"\n      [(ngModel)]="lead.address1"\n      name="address1"\n      required\n      #address1="ngModel"\n    >\n    <div role="alert" [hidden]="!(address1.invalid && (address1.dirty || address1.touched || submited))">\n      <div [hidden]="!address1.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!address1.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n    </div>\n\n    <input\n      type="text"\n      placeholder="Address line 2"\n      [(ngModel)]="lead.address2"\n      name="address2"\n      [pattern]="onlyLettersRegEx"\n      #address2="ngModel"\n    >\n    <div role="alert" [hidden]="!(address2.invalid && (address2.dirty || address2.touched || submited))">\n      <div [hidden]="!address2.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n    </div>\n\n    <input\n      type="text"\n      placeholder="Town*"\n      [(ngModel)]="lead.town"\n      name="town"\n      required\n      [pattern]="onlyLettersRegEx"\n      #town="ngModel"\n    >\n    <div role="alert" [hidden]="!(town.invalid && (town.dirty || town.touched || submited))">\n      <div [hidden]="!town.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!town.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n    </div>\n\n    <input\n      type="text"\n      placeholder="County*"\n      [(ngModel)]="lead.county"\n      name="country"\n      required\n      [pattern]="onlyLettersRegEx"\n      #country="ngModel"\n    >\n    <div role="alert" [hidden]="!(country.invalid && (country.dirty || country.touched || submited))">\n      <div [hidden]="!country.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!country.hasError(\'pattern\')" class="error">Please enter letters only.</div>\n    </div>\n\n    <input\n      type="text"\n      placeholder="Postcode*"\n      [(ngModel)]="lead.post_code"\n      name="postcode"\n      required\n      [pattern]="postcodeRegEx"\n      #postcode="ngModel"\n    >\n    <div role="alert" [hidden]="!(postcode.invalid && (postcode.dirty || postcode.touched || submited))">\n      <div [hidden]="!postcode.hasError(\'required\')" class="error">Please enter a value.</div>\n      <div [hidden]="!postcode.hasError(\'pattern\')" class="error">Please enter a valid UK postcode.</div>\n    </div>\n\n    <div class="form-label">Additional info</div>\n\n    <div *ngFor="let question of additional">\n      <div\n        class="question"\n      >\n        <div\n          class="question"\n        >\n          {{ question.question }}\n        </div>\n\n            <select>\n              <option *ngFor="let answer of question.additional">{{answer}}</option>\n            </select>\n\n      </div>\n    </div>\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n    >\n      Add Referral\n    </button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/referralDetails/referralDetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_5__services_cache_cache__["a" /* Cache */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ReferralDetailsPage);

//# sourceMappingURL=referralDetails.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadThanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__referrals_referrals__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadThanksPage = (function () {
    function LeadThanksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LeadThanksPage.prototype.goToReferralsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__referrals_referrals__["a" /* ReferralsPage */]);
    };
    LeadThanksPage.prototype.goToDashboard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    return LeadThanksPage;
}());
LeadThanksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lead-thanks',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/leadThanks/leadThanks.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Thank you</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="logo">\n    <img src="assets/imgs/catex-logo-dark.png">\n  </div>\n\n\n  <div class="header1">Thank you</div>\n  <div class="header2">\n    Your referral has been added, and will take up\n    to <span class="green">24 hours</span> to be processed\n  </div>\n  <div class="header3">Once a referral has been successfully converted, we will issue you with your referral fee</div>\n\n  <div class="bottom">\n    <a\n      class="transparent-rounded-button small"\n      (click)="goToDashboard()"\n    >\n      Back to Dashboard\n    </a>\n    <a\n      class="transparent-rounded-button small"\n      (click)="goToReferralsPage()"\n    >\n      Track Referrals\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/leadThanks/leadThanks.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], LeadThanksPage);

//# sourceMappingURL=leadThanks.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__withdrawThanks_withdrawThanks__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__paypalSettings_paypalSettings__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WithdrawPage = (function () {
    function WithdrawPage(navCtrl, alertCtrl, api, loadingCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.http = http;
        this.user = {
            id: null,
            available_balance: 0,
            total_earned: null,
            current_balance: null,
            winner_count: null,
            lead_count: null,
            vendor: null
        };
        this.lead_count = 0;
        this.new_count = 0;
        this.active_count = 0;
        this.JSON = JSON;
        this.paypalSettingsPage = __WEBPACK_IMPORTED_MODULE_7__paypalSettings_paypalSettings__["a" /* PaypalSettingsPage */];
    }
    WithdrawPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('User'));
        var loader = this.loadingCtrl.create();
        loader.present();
        if (this.user.vendor) {
            this.api.getLeadCount()
                .then(function (response) {
                if (response['error']['code'] != 0) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: response['error']['message'],
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    _this.lead_count = response['response']['month_count'];
                    _this.new_count = response['response']['new_count'];
                    _this.active_count = response['response']['active_count'];
                }
                loader.dismiss();
            }, function () {
                //ToDo: Load From cache
                loader.dismiss();
            });
        }
        else {
            this.api.getBalance()
                .then(function (response) {
                if (response['error']['code'] != 0) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Error getting your account balance.',
                        subTitle: response['data']['error']['message'],
                        buttons: ['Ok']
                    });
                    alert_2.present();
                }
                else {
                    _this.user.lead_count = response['response']['User']['lead_count'];
                    _this.user.winner_count = response['response']['User']['winner_count'] > 0 ? response['response']['User']['winner_count'] : 0;
                    _this.user.current_balance = response['response']['User']['current_balance'];
                    _this.user.available_balance = response['response']['User']['available_balance'];
                    _this.user.total_earned = response['response']['User']['total_earned'];
                    localStorage.setItem('Balance', JSON.stringify(_this.user));
                }
                loader.dismiss();
            }, function () {
                //ToDo: Load from cache
                loader.dismiss();
            });
        }
        this.withdraw = { user_id: this.user.id, amount: this.user.available_balance };
        this.api.getWithdraw().then(function (response) {
            _this.withdrawal_methods = response;
        });
    };
    WithdrawPage.prototype.withdrawRequest = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get(this.storage.baseUrl + "/withdrawRequest?" + this.storage.getAuthHelper(), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response['error']['code'] != 0) {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Error submitting your request to withdraw.',
                    subTitle: response['error']['message'],
                    buttons: ['Ok']
                });
                alert_3.present();
            }
            else {
                _this.user.lead_count = response['response']['User']['lead_count'];
                _this.user.winner_count = response['response']['User']['winner_count'];
                _this.user.current_balance = response['response']['User']['current_balance'];
                _this.user.available_balance = response['response']['User']['available_balance'];
                localStorage.setItem('User', JSON.stringify(_this.user));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__withdrawThanks_withdrawThanks__["a" /* WithdrawThanksPage */]);
            }
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Error submitting your request to withdraw!',
                subTitle: 'We\'re not too sure what happened! Is your network down? Please try again.',
                buttons: ['Ok']
            });
            alert.present();
        }, function () {
            loader.dismiss();
        });
    };
    ;
    return WithdrawPage;
}());
WithdrawPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-withdraw',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/withdraw/withdraw.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Withdraw</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <p class="header green">\n    {{user.current_balance / 100 | currency: \'GBP\': true}} <br/>Pending Balance\n  </p>\n\n  <div class="outer-circle">\n    <div class="inner-circle">\n      <div class="header green summary">{{user.available_balance / 100 | currency: \'GBP\': true }}</div>\n      <div class="header green logo">Available Balance</div>\n    </div>\n  </div>\n\n  <p class="header3" [hidden]="user.bank_account_token">\n    Unfortunately you cannot withdraw funds as you have not configured your HyperWallet account. Please go to <a\n    [navPush]="paypalSettingsPage">your settings</a> to finish setting up your account.\n  </p>\n\n  <p class="header3" *ngIf="user.available_balance == 0">\n    You do not have funds to withdraw. <br/>Add some referrals\n  </p>\n\n  <button\n    (click)="withdrawRequest()"\n    [disabled]="user.available_balance == 0 || !user.bank_account_token"\n  >\n    Withdraw\n  </button>\n\n  <p class="header3" ng-show="user.bank_account_token">\n    By pressing the button, we will send payment to the HyperWallet account\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/withdraw/withdraw.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], WithdrawPage);

//# sourceMappingURL=withdraw.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawThanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__referrals_referrals__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WithdrawThanksPage = (function () {
    function WithdrawThanksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WithdrawThanksPage.prototype.goToReferralsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__referrals_referrals__["a" /* ReferralsPage */]);
    };
    WithdrawThanksPage.prototype.goToDashboard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    return WithdrawThanksPage;
}());
WithdrawThanksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-withdraw-thanks',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/withdrawThanks/withdrawThanks.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Thank you</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="logo">\n    <img src="assets/imgs/catex-logo-dark.png">\n  </div>\n\n\n  <div class="header1">Thank you</div>\n  <div class="header2">\n    Your withdrawal request has been receeved\n  </div>\n  <div class="header3">\n    We will credit your account as soon as possible. Please not this may take up to 7 working days.\n  </div>\n\n  <div class="bottom">\n    <a\n      class="transparent-rounded-button small"\n      (click)="goToDashboard()"\n    >\n      Back to Dashboard\n    </a>\n    <a\n      class="transparent-rounded-button small"\n      (click)="goToReferralsPage()"\n    >\n      Track Referrals\n    </a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/withdrawThanks/withdrawThanks.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], WithdrawThanksPage);

//# sourceMappingURL=withdrawThanks.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_safehtml__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tour_tour__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_forgotPassword_forgotPassword__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forgotPasswordThanks_forgotPasswordThanks__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_paypalSettings_paypalSettings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_FAQ_FAQ__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notificationsSettings_notificationsSettings__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_leadHistory_leadHistory__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_leadHistoryFilters_leadHistoryFilters__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_withdrawalHistory_withdrawalHistory__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_withdrawalHistoryFilters_withdrawalHistoryFilters__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_serviceCategories_serviceCategories__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_referralDetails_referralDetails__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_referrals_referrals__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_leadThanks_leadThanks__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_withdraw_withdraw__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_withdrawThanks_withdrawThanks__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_cache_cache__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var imports = [
    __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
    __WEBPACK_IMPORTED_MODULE_16__pages_forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */],
    __WEBPACK_IMPORTED_MODULE_17__pages_forgotPasswordThanks_forgotPasswordThanks__["a" /* ForgotPasswordThanksPage */],
    __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
    __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_dashboard__["a" /* DashboardPage */],
    __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
    __WEBPACK_IMPORTED_MODULE_14__pages_tour_tour__["a" /* TourPage */],
    __WEBPACK_IMPORTED_MODULE_21__pages_FAQ_FAQ__["a" /* FAQPage */],
    __WEBPACK_IMPORTED_MODULE_22__pages_terms_terms__["a" /* TermsPage */],
    __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
    __WEBPACK_IMPORTED_MODULE_20__pages_paypalSettings_paypalSettings__["a" /* PaypalSettingsPage */],
    __WEBPACK_IMPORTED_MODULE_24__pages_notificationsSettings_notificationsSettings__["a" /* NotificationsSettingsPage */],
    __WEBPACK_IMPORTED_MODULE_25__pages_leadHistory_leadHistory__["a" /* LeadHistoryPage */],
    __WEBPACK_IMPORTED_MODULE_26__pages_leadHistoryFilters_leadHistoryFilters__["a" /* LeadHistoryFiltersPage */],
    __WEBPACK_IMPORTED_MODULE_27__pages_withdrawalHistory_withdrawalHistory__["a" /* WithdrawalHistoryPage */],
    __WEBPACK_IMPORTED_MODULE_28__pages_withdrawalHistoryFilters_withdrawalHistoryFilters__["a" /* WithdrawalHistoryFiltersPage */],
    __WEBPACK_IMPORTED_MODULE_29__pages_serviceCategories_serviceCategories__["a" /* ServiceCategoriesPage */],
    __WEBPACK_IMPORTED_MODULE_30__pages_referralDetails_referralDetails__["a" /* ReferralDetailsPage */],
    __WEBPACK_IMPORTED_MODULE_31__pages_referrals_referrals__["a" /* ReferralsPage */],
    __WEBPACK_IMPORTED_MODULE_32__pages_leadThanks_leadThanks__["a" /* LeadThanksPage */],
    __WEBPACK_IMPORTED_MODULE_33__pages_withdraw_withdraw__["a" /* WithdrawPage */],
    __WEBPACK_IMPORTED_MODULE_34__pages_withdrawThanks_withdrawThanks__["a" /* WithdrawThanksPage */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: imports.concat([
            __WEBPACK_IMPORTED_MODULE_7__pipes_safehtml__["a" /* SafeHtmlPipe */]
        ]),
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                backButtonText: '',
                backButtonIcon: 'ios-arrow-back',
                iconMode: 'sm'
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: imports,
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_35__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
            __WEBPACK_IMPORTED_MODULE_36__services_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_37__services_cache_cache__["a" /* Cache */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serviceCategories_serviceCategories__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__withdraw_withdraw__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__referrals_referrals__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DashboardPage = (function () {
    function DashboardPage(navCtrl, api, storage, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.current_user = {
            profile_photo: '',
            current_balance: 0
        };
        this.balance = {
            winner_count: ''
        };
        this.connection = null;
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.serviceCategoriesPage = __WEBPACK_IMPORTED_MODULE_4__serviceCategories_serviceCategories__["a" /* ServiceCategoriesPage */];
        this.referralsPage = __WEBPACK_IMPORTED_MODULE_6__referrals_referrals__["a" /* ReferralsPage */];
        this.withdrawPage = __WEBPACK_IMPORTED_MODULE_5__withdraw_withdraw__["a" /* WithdrawPage */];
        this.profilePage = __WEBPACK_IMPORTED_MODULE_11__profile_profile__["a" /* ProfilePage */];
        this.videoOpened = false;
        this.video = '';
        this.video_webm = '';
        this.thumbnail = '';
        this.connection = storage.connection;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.current_user = localStorage.getItem('User');
        if (!this.current_user) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        this.balance = JSON.parse(localStorage.getItem('Balance')) || {};
        this.api.getUser()
            .then(function (res) {
            localStorage.setItem('User', JSON.stringify(res['response']));
            _this.current_user = res['response'];
            if (res['error']['code'] != 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'You\'ve been logged out!',
                    subTitle: 'Your authentication token seems to have expired, please log in again.',
                    buttons: ['Ok']
                });
                alert_1.present();
                localStorage.clear();
                delete _this.storage.user;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
        });
        this.http.get(this.storage.baseUrl + "/video?" + this.storage.getAuthHelper())
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.videoplayer.nativeElement.oncanplay = function () {
                _this.videoplayer.nativeElement.style.opacity = 1;
            };
            _this.videoplayer.nativeElement.style.opacity = 0;
            _this.videoplayer.nativeElement.src = "" + _this.storage.primaryDomain + response['response'];
            // this.video = `${this.storage.primaryDomain}${response['response']}`;
            // this.video_webm = `${this.storage.primaryDomain}${response['response'].replace(/.mp4/gi, '.webm')}`;
            // this.thumbnail = `${this.storage.primaryDomain}${response['response'].replace(/.mp4/gi, '.jpg')}`;
        }, function (error) {
        });
        // this.navCtrl.push(SettingsPage)
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        this.current_user = JSON.parse(localStorage.getItem('User'));
    };
    DashboardPage.prototype.playVideo = function () {
        this.videoOpened = true;
        this.videoplayer.nativeElement.play();
    };
    DashboardPage.prototype.closeVideo = function () {
        this.videoOpened = false;
        this.videoplayer.nativeElement.pause();
    };
    return DashboardPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('videoPlayer'),
    __metadata("design:type", Object)
], DashboardPage.prototype, "videoplayer", void 0);
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <a\n    class="left"\n    [navPush]="profilePage"\n  >\n    <img [src]="current_user.profile_photo">\n    <div class="name">\n      <div class="name">{{current_user.first_name}}</div>\n      <div class="company">{{current_user.company}}</div>\n    </div>\n  </a>\n\n  <a\n    class="right"\n    [navPush]="settingsPage"\n  >\n  <span\n    class="fa fa-cog"\n  ></span>\n  </a>\n</ion-header>\n\n<ion-content city-bg scrolling=false>\n\n  <div class="logo">\n    <img src="assets/imgs/catex-logo.png">\n  </div>\n\n\n  <small class="alert text-center mb3 bg-silver black rounded block" *ngIf="!connection.online">\n    You are currently offline. For the best experience please connect to the internet. <a\n    href="#/app/offline">More Information</a>\n  </small>\n\n  <div class="out-circle">\n    <div class="inner-circle">\n      <a\n        class="balance"\n        [navPush]="withdrawPage"\n      >\n        <div class="value">{{current_user.current_balance / 100 | currency: \'GBP\': true}}</div>\n        <div class="label">Current Balance</div>\n      </a>\n    </div>\n  </div>\n\n  <div>\n    <table>\n      <tr>\n        <td>\n          <a\n            class="badge blue"\n            [navPush]="referralsPage"\n          >\n            {{current_user.lead_count}} Referral<span ng-if="current_user.lead_count != 1">s</span></a>\n          <a\n            class="badge green"\n            [navPush]="referralsPage"\n          >\n            <span>{{balance.winner_count}}</span> Won\n          </a>\n        </td>\n        <td style="text-align: right">\n          <a\n            class="badge black"\n            (click)="playVideo()">\n            Watch Video\n          </a>\n        </td>\n      </tr>\n    </table>\n\n    <button\n      ion-button\n      [navPush]="serviceCategoriesPage"\n      class="submit-button"\n    >\n      Add Referral\n    </button>\n  </div>\n\n</ion-content>\n\n<div\n  class="video-modal"\n  [hidden]="!videoOpened"\n>\n  <video\n    controls\n    preload="none"\n    id="explain-video"\n    #videoPlayer\n    type="video/webm"\n  >\n\n  </video>\n  <a\n    class="video-modal-close"\n    (click)="closeVideo()"\n  ></a>\n</div>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_8__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]])
], SafeHtmlPipe);

//# sourceMappingURL=safehtml.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
            statusBar.styleDefault();
            // keyboard.hideKeyboardAccessoryBar(false);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotPassword_forgotPassword__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globalstorage_globalstorage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, storage, http, loadingCtrl, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.auth = { email: '', password: '' };
        this.connection = {
            online: true,
            loginVars: false,
            type: ""
        };
        this.formError = '';
        this.forgotPasswordPage = __WEBPACK_IMPORTED_MODULE_2__forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */];
        this.connection = storage.connection;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.current_user = {};
        if (localStorage.getItem('User')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
        }
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.storage.loading = true;
        if (this.auth.email.trim() == '' || this.auth.password.trim() == '') {
            this.storage.loading = false;
            this.formError = 'Please complete the form';
            return;
        }
        var body = JSON.stringify({
            username: this.auth.email,
            password: this.auth.password,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var loader = this.loadingCtrl.create({
            content: 'Connecting to the server...'
        });
        loader.present();
        this.http.post(this.storage.baseUrl + "/login", "username=" + encodeURIComponent(this.auth.email) + "&password=" + encodeURIComponent(this.auth.password), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response['error']['message']) {
                _this.formError = response['error']['message'];
                loader.dismiss();
                return;
            }
            // if we have a user etc., put in da session, and then move to the avatar creation screen
            localStorage.setItem('public_key', response['response']['public_auth_key']);
            localStorage.setItem('private_key', response['response']['private_auth_key']);
            localStorage.setItem('User', JSON.stringify(response['response']['User']));
            //if we have a vendor, then store that in the session too
            if (response.response.Vendor) {
                localStorage.setItem('Vendor', JSON.stringify(response.response.Vendor));
            }
            _this.storage.user = response.response.User;
            _this.api.getBalance()
                .then(function (response2) {
                _this.storage.loading = false;
                if (response2['error']['code'] != 0) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error getting your account balance.',
                        subTitle: response2['data']['error']['message'],
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                else {
                    //response should contain some more information about the user
                    //lead_count, current_balance and available_balance
                    _this.current_user.lead_count = response2['response']['User']['lead_count'];
                    _this.current_user.winner_count = response2['response']['User']['winner_count'] > 0 ? response2['response']['User']['winner_count'] : 0;
                    _this.current_user.current_balance = response2['response']['User']['current_balance'];
                    _this.current_user.available_balance = response2['response']['User']['available_balance'];
                    _this.current_user.total_earned = response2['response']['User']['total_earned'];
                    localStorage.setItem('Balance', JSON.stringify(_this.current_user));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
                }
            }, function () {
                //Load from cache if we can!
            });
            _this.api.getVendors();
            _this.api.getFavourites();
            _this.api.getUser();
            _this.api.getLeadCount();
            // this.api.getWithdraw();
            // this.api.getVendorQuestions();
            _this.api.getFAQ();
            _this.api.getTOS();
            if (_this.storage.user.id > 0) {
                _this.api.getEarningHistory(_this.storage.user.id);
                _this.api.getWithdrawalHistory(_this.storage.user.id);
                _this.api.getLeadHistory({ user_id: _this.storage.user.id, date_range: 5 });
            }
            loader.dismiss();
        }, function (error) {
            _this.formError = error.message;
            loader.dismiss();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/login/login.html"*/'<ion-header></ion-header>\n\n<ion-content city-bg>\n  <div class="logo">\n    <img src="assets/imgs/catex-logo.png">\n    <p>IFA is the best way to deliver value for your clients</p>\n  </div>\n\n  <div class="alert text-center mb3 bg-silver black rounded" *ngIf="!connection.online">\n    You are currently offline.\n    <span ng-show="!connection.loginVars" class="block">You must login at least once with an internet connection to continue</span>\n  </div>\n\n  <form\n    method="post"\n    novalidate=""\n    (ngSubmit)="loginUser(auth)"\n    name="form.loginForm"\n    #form="ngForm"\n  >\n    <input\n      id="email"\n      type="email"\n      placeholder="Email Address"\n      name="email"\n      [(ngModel)]="auth.email"\n      required\n      [email]="true"\n      #email="ngModel"\n    />\n\n    <div role="alert" *ngIf="email.invalid && (email.dirty || email.touched)">\n      <div *ngIf="email.errors.required" class="error">Please enter a value for this field.</div>\n      <div *ngIf="email.errors.email" class="error">This field must be a valid email address.</div>\n    </div>\n\n    <input\n      id="password"\n      type="password"\n      placeholder="Password"\n      name="password"\n      [(ngModel)]="auth.password"\n      required\n      #password="ngModel"\n    />\n\n    <div role="alert" *ngIf="password.invalid && (password.dirty || password.touched)">\n      <div ng-message="required" class="error">Please enter a value for this field.</div>\n    </div>\n\n    <button\n      class="submit-button"\n      type="submit"\n      ng-disabled="!connection.online"\n    >\n      Sign In\n    </button>\n\n    <a\n      [navPush]="forgotPasswordPage"\n      class="forgot-link"\n      *ngIf="connection.online"\n    >\n      Forgot Password?\n    </a>\n\n    <div\n      [hidden]="!formError"\n      class="error"\n    >\n      Sign in details not recognised. Please check and try again\n    </div>\n\n  </form>\n\n  <a\n    [navPush]="signupPage"\n    class="transparent-rounded-button"\n  >\n    Register\n  </a>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__services_globalstorage_globalstorage__["a" /* GlobalStorage */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__services_api_api__["a" /* Api */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 294,
	"./af.js": 294,
	"./ar": 295,
	"./ar-dz": 296,
	"./ar-dz.js": 296,
	"./ar-kw": 297,
	"./ar-kw.js": 297,
	"./ar-ly": 298,
	"./ar-ly.js": 298,
	"./ar-ma": 299,
	"./ar-ma.js": 299,
	"./ar-sa": 300,
	"./ar-sa.js": 300,
	"./ar-tn": 301,
	"./ar-tn.js": 301,
	"./ar.js": 295,
	"./az": 302,
	"./az.js": 302,
	"./be": 303,
	"./be.js": 303,
	"./bg": 304,
	"./bg.js": 304,
	"./bm": 305,
	"./bm.js": 305,
	"./bn": 306,
	"./bn.js": 306,
	"./bo": 307,
	"./bo.js": 307,
	"./br": 308,
	"./br.js": 308,
	"./bs": 309,
	"./bs.js": 309,
	"./ca": 310,
	"./ca.js": 310,
	"./cs": 311,
	"./cs.js": 311,
	"./cv": 312,
	"./cv.js": 312,
	"./cy": 313,
	"./cy.js": 313,
	"./da": 314,
	"./da.js": 314,
	"./de": 315,
	"./de-at": 316,
	"./de-at.js": 316,
	"./de-ch": 317,
	"./de-ch.js": 317,
	"./de.js": 315,
	"./dv": 318,
	"./dv.js": 318,
	"./el": 319,
	"./el.js": 319,
	"./en-au": 320,
	"./en-au.js": 320,
	"./en-ca": 321,
	"./en-ca.js": 321,
	"./en-gb": 322,
	"./en-gb.js": 322,
	"./en-ie": 323,
	"./en-ie.js": 323,
	"./en-il": 324,
	"./en-il.js": 324,
	"./en-nz": 325,
	"./en-nz.js": 325,
	"./eo": 326,
	"./eo.js": 326,
	"./es": 327,
	"./es-do": 328,
	"./es-do.js": 328,
	"./es-us": 329,
	"./es-us.js": 329,
	"./es.js": 327,
	"./et": 330,
	"./et.js": 330,
	"./eu": 331,
	"./eu.js": 331,
	"./fa": 332,
	"./fa.js": 332,
	"./fi": 333,
	"./fi.js": 333,
	"./fo": 334,
	"./fo.js": 334,
	"./fr": 335,
	"./fr-ca": 336,
	"./fr-ca.js": 336,
	"./fr-ch": 337,
	"./fr-ch.js": 337,
	"./fr.js": 335,
	"./fy": 338,
	"./fy.js": 338,
	"./gd": 339,
	"./gd.js": 339,
	"./gl": 340,
	"./gl.js": 340,
	"./gom-latn": 341,
	"./gom-latn.js": 341,
	"./gu": 342,
	"./gu.js": 342,
	"./he": 343,
	"./he.js": 343,
	"./hi": 344,
	"./hi.js": 344,
	"./hr": 345,
	"./hr.js": 345,
	"./hu": 346,
	"./hu.js": 346,
	"./hy-am": 347,
	"./hy-am.js": 347,
	"./id": 348,
	"./id.js": 348,
	"./is": 349,
	"./is.js": 349,
	"./it": 350,
	"./it.js": 350,
	"./ja": 351,
	"./ja.js": 351,
	"./jv": 352,
	"./jv.js": 352,
	"./ka": 353,
	"./ka.js": 353,
	"./kk": 354,
	"./kk.js": 354,
	"./km": 355,
	"./km.js": 355,
	"./kn": 356,
	"./kn.js": 356,
	"./ko": 357,
	"./ko.js": 357,
	"./ku": 358,
	"./ku.js": 358,
	"./ky": 359,
	"./ky.js": 359,
	"./lb": 360,
	"./lb.js": 360,
	"./lo": 361,
	"./lo.js": 361,
	"./lt": 362,
	"./lt.js": 362,
	"./lv": 363,
	"./lv.js": 363,
	"./me": 364,
	"./me.js": 364,
	"./mi": 365,
	"./mi.js": 365,
	"./mk": 366,
	"./mk.js": 366,
	"./ml": 367,
	"./ml.js": 367,
	"./mn": 368,
	"./mn.js": 368,
	"./mr": 369,
	"./mr.js": 369,
	"./ms": 370,
	"./ms-my": 371,
	"./ms-my.js": 371,
	"./ms.js": 370,
	"./mt": 372,
	"./mt.js": 372,
	"./my": 373,
	"./my.js": 373,
	"./nb": 374,
	"./nb.js": 374,
	"./ne": 375,
	"./ne.js": 375,
	"./nl": 376,
	"./nl-be": 377,
	"./nl-be.js": 377,
	"./nl.js": 376,
	"./nn": 378,
	"./nn.js": 378,
	"./pa-in": 379,
	"./pa-in.js": 379,
	"./pl": 380,
	"./pl.js": 380,
	"./pt": 381,
	"./pt-br": 382,
	"./pt-br.js": 382,
	"./pt.js": 381,
	"./ro": 383,
	"./ro.js": 383,
	"./ru": 384,
	"./ru.js": 384,
	"./sd": 385,
	"./sd.js": 385,
	"./se": 386,
	"./se.js": 386,
	"./si": 387,
	"./si.js": 387,
	"./sk": 388,
	"./sk.js": 388,
	"./sl": 389,
	"./sl.js": 389,
	"./sq": 390,
	"./sq.js": 390,
	"./sr": 391,
	"./sr-cyrl": 392,
	"./sr-cyrl.js": 392,
	"./sr.js": 391,
	"./ss": 393,
	"./ss.js": 393,
	"./sv": 394,
	"./sv.js": 394,
	"./sw": 395,
	"./sw.js": 395,
	"./ta": 396,
	"./ta.js": 396,
	"./te": 397,
	"./te.js": 397,
	"./tet": 398,
	"./tet.js": 398,
	"./tg": 399,
	"./tg.js": 399,
	"./th": 400,
	"./th.js": 400,
	"./tl-ph": 401,
	"./tl-ph.js": 401,
	"./tlh": 402,
	"./tlh.js": 402,
	"./tr": 403,
	"./tr.js": 403,
	"./tzl": 404,
	"./tzl.js": 404,
	"./tzm": 405,
	"./tzm-latn": 406,
	"./tzm-latn.js": 406,
	"./tzm.js": 405,
	"./ug-cn": 407,
	"./ug-cn.js": 407,
	"./uk": 408,
	"./uk.js": 408,
	"./ur": 409,
	"./ur.js": 409,
	"./uz": 410,
	"./uz-latn": 411,
	"./uz-latn.js": 411,
	"./uz.js": 410,
	"./vi": 412,
	"./vi.js": 412,
	"./x-pseudo": 413,
	"./x-pseudo.js": 413,
	"./yo": 414,
	"./yo.js": 414,
	"./zh-cn": 415,
	"./zh-cn.js": 415,
	"./zh-hk": 416,
	"./zh-hk.js": 416,
	"./zh-tw": 417,
	"./zh-tw.js": 417
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 785;

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReferralsPage = (function () {
    function ReferralsPage(navCtrl, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.api = api;
        this.referrals = [];
        this.counter = { leads: 0, won: 0, lost: 0 };
        this.progress = '0%';
        this.moment = __WEBPACK_IMPORTED_MODULE_4_moment__;
        var user = JSON.parse(localStorage.getItem('User'));
        var url = '';
        var params = {};
        if (user.vendor) {
            url = '/getLeadHistory';
            params = {};
        }
        else {
            url = '/getEarningsHistory';
            params = { user_id: user.id, date_range: 5 };
        }
        this.progress = '0%';
        this.api.getLeadHistory(params).then(function (response) {
            console.log(response);
            _this.progress = '30%';
            setTimeout(function () { _this.progress = '100%'; }, 1000);
            _this.referrals = response['response'];
            _this.counter = { leads: _this.referrals.length, won: 0, lost: 0 };
            _this.referrals.forEach(function (val, key) {
                if (val.LeadStatus.id == 2) {
                    _this.counter.won++;
                }
                if (val.LeadStatus.id == 3) {
                    _this.counter.lost++;
                }
            });
        });
    }
    return ReferralsPage;
}());
ReferralsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-referrals',template:/*ion-inline-start:"/Volumes/RS/rs-ifa/src/pages/referrals/referrals.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="ion-title">Track Referrals</div>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<small class="alert text-center mb3 bg-silver black rounded block" ng-show="!connection.online">-->\n    <!--You are currently offline. For the best experience please connect to the internet. <a-->\n    <!--href="#/app/offline">More Information</a>-->\n  <!--</small>-->\n\n  <div class="table">\n    <div class="table-item">\n      <div class="header">{{counter.leads}}</div>\n      <div class="description">Referrals</div>\n    </div>\n    <div class="table-item">\n      <div class="header">{{counter.lost}}</div>\n      <div class="description">Lost</div>\n    </div>\n    <div class="table-item">\n      <div class="header">{{counter.won}}</div>\n      <div class="description">Won</div>\n    </div>\n  </div>\n\n  <div class="progress">\n    <div class="progress-value" [style.width]="progress"></div>\n  </div>\n\n  <section *ngFor="let lead of referrals">\n    <ul>\n      <li class="item">\n        <div class="name">{{ lead[\'Lead\'][\'first_name\'] }}&nbsp;{{ lead[\'Lead\'][\'last_name\'] }}</div>\n        <div class="company">Service Provider: {{lead[\'Vendor\'][\'company_name\']}}</div>\n        <div class="added">Added: {{ moment(lead[\'Lead\'][\'date_added\'], "YYYY-MM-DD hh:mm:ss").format(\'DD/MM/YYYY, h:mm A\') }}</div>\n        <div class="right-box">\n          <div [ngClass]="{\'label\': true, \'green\': lead[\'LeadStatus\'][\'id\'] == 2, \'red\': lead[\'LeadStatus\'][\'id\'] == 3, \'gray\': lead[\'LeadStatus\'][\'id\'] == 1 }">{{lead[\'LeadStatus\'][\'name\']}}</div>\n          <div class="amount">{{lead.Lead.user_value / 100 | currency: \'GBP\': true}}</div>\n        </div>\n      </li>\n    </ul>\n  </section>\n\n  <div\n    class="white-box"\n    [hidden]="referrals.length > 0"\n    style="margin-top: 20px"\n  >\n    You currently have no Referrals\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/RS/rs-ifa/src/pages/referrals/referrals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_api__["a" /* Api */]])
], ReferralsPage);

//# sourceMappingURL=referrals.js.map

/***/ })

},[425]);
//# sourceMappingURL=main.js.map