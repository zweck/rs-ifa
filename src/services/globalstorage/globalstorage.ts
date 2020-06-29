import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable()
export class GlobalStorage {
  public loading:boolean = false;
  public connection: {online: boolean, loginVars: boolean, type: string} = {
    online: true,
    loginVars: false,
    type: ""
  };
  public primaryDomain: string = 'http://178.62.54.34:4000/';
  public baseUrl: string = `${this.primaryDomain}/api`;
  public user: any;

  public authHelper = () => {
    let date = Math.floor(new Date().getTime() / 1000).toString();
    let pubkey = localStorage.getItem('public_key');
    let privkey = localStorage.getItem('private_key') || '';

    if (!privkey) {
      localStorage.clear();
      delete this.user;
    }

    var hashed = CryptoJS.PBKDF2(date, privkey, {
      keySize: 256 / 32,
      iterations: 256,
      hasher: CryptoJS.algo.SHA256
    })
      .toString();

    return {
      auth: hashed,
      timestamp: date,
      pubkey: pubkey
    };
  };

  public getAuthHelper = () =>  {
    var data = this.authHelper();
    var out = [];

    for (var key in data) {
      out.push(key + '=' + encodeURIComponent(data[key]));
    }

    return out.join('&');
  };

  public isOnline = () => {
    if ((<any>window).cordova && (<any>window).Connection && (<any>navigator).connection.type == (<any>window).Connection.NONE) {
      return false;
    }
    return true;
  }
}
