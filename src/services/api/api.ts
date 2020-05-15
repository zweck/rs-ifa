import { Injectable } from '@angular/core';
import { GlobalStorage } from '../globalstorage/globalstorage';
import { Cache } from '../cache/cache';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

@Injectable()
export class Api {

  constructor(
    public storage: GlobalStorage,
    public alertCtrl: AlertController,
    public http: Http,
    public cache: Cache
  ) {

  }

  alertNoCache() {
      console.trace()
    const alert = this.alertCtrl.create({
      title: 'No cached data',
      subTitle: 'You must use the app online at least once',
      buttons: ['Ok']
    });
    alert.present();
  }

  public getBalance = () => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/getBalance?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('balance', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('balance');
            if (!response) {
              this.alertNoCache();
            }
          },
          () => {

          }
        );

    });
  }

  public getVendors = () => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/getVendors?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('vendors', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('vendors');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );

    });
  }

  public getFavourites = () => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/favourites?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('favourites', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('favourites');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );

    });
  }

  public getUser = () => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/getUser?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('user', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('user');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );

    });
  }

  public getLeadCount = () => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/getLeadCount?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('leadCount', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('leadCount');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );

    });
  }

  public getLeadHistory = (params) => {
    console.log(params)
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.post(`${this.storage.baseUrl}/getEarningsHistory?${ this.storage.getAuthHelper() }`, (<any>Object).entries(params).map(([k, v]) => `${k}=${v}`).join('&'), options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('earningHistory', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('earningHistory');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );

    });
  }

  public getWithdraw = (params = {}) => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.post(`${this.storage.baseUrl}/getWithdrawalMethods?${ this.storage.getAuthHelper() }`, params, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('withdraw', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('withdraw');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );
    });
  }

  public getVendorQuestions = (vendor) => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/getVendorQuestions/${ vendor }?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('vendorQuestions' + vendor, response);
            resolve(response)
          },
          error => {
          },
          () => {

          }
        );

    });
  }

  public postLead = (data) => {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.storage.baseUrl}/addLead?${ this.storage.getAuthHelper() }`, data, options)
  }

  public getEarningHistory = (userID) => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.post(`${this.storage.baseUrl}/getEarningsHistory?${ this.storage.getAuthHelper() }`, {user_id: userID}, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('EarningsHistory', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('EarningsHistory');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );

    });
  }

  public getWithdrawalHistory = (userID) => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.post(`${this.storage.baseUrl}/getWithdrawalHistory?${ this.storage.getAuthHelper() }`, {user_id: userID}, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('EarningsHistory', response);
            resolve(response)
          },
          error => {
          },
          () => {

          }
        );

    });
  }

  public getFAQ = () => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/faqs?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('faqs', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('faqs');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );

    });
  }

  public getTOS = () => {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      let options = new RequestOptions({ headers: headers });

      this.http.get(`${this.storage.baseUrl}/termsConditions?${ this.storage.getAuthHelper() }`, options)
        .map((res:Response) => res.json())
        .subscribe(
          response => {
            this.cache.setData('termsConditions', response);
            resolve(response)
          },
          error => {
            let response = this.cache.getData('termsConditions');
            if (!response) {
              this.alertNoCache();
              return false;
            }
          },
          () => {

          }
        );
    });
  }

}
