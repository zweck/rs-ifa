import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { TourPage } from './../tour/tour';
import { LeadThanksPage } from './../leadThanks/leadThanks';
import { GlobalStorage } from '../../services/globalstorage/globalstorage';
import { Api } from '../../services/api/api';
import { Cache } from '../../services/cache/cache';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
  selector: 'page-referral-details',
  templateUrl: 'referralDetails.html',
})
export class ReferralDetailsPage {
  onlyLettersRegEx = /^[a-zA-Z ]+$/;
  onlyNumbersRegEx = /^\d+$/;
  phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  emailRegEx = /^.*@.*\..*$/;
  postcodeRegEx = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;
  form: any;
  submited = false;
  additional_information = [];
  leadThanksPage = LeadThanksPage;

  vendor;

  lead = {
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

  constructor(
    public navCtrl: NavController,
    public storage: GlobalStorage,
    private http: Http,
    public loadingCtrl: LoadingController,
    public api: Api,
    public rf_cache: Cache,
    public alertCtrl: AlertController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad(){
    this.vendor = this.navParams.get('vendor');
    this.lead.vendor_id = this.vendor.vendor.id;
    this.lead.vendor_category_id = this.vendor.vendorCategory.id;
    this.lead.user_id = JSON.parse(localStorage.getItem('User'))['id'];

    this.api.getVendorQuestions(this.vendor.vendor.id)
      .then(response => {
        if (!response) {
          this.additional_information = [];
        } else {
          if (response['error']['code'] != 0) {
            const alert = this.alertCtrl.create({
              title: 'Error.',
              subTitle: response['error']['message'],
              buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.pop();
          } else {
            this.additional_information = response['response'];
            this.additional_information.forEach(item => {
              item.additional_information = JSON.parse(item.additional_information)
            })
          }
        }
      });


    // this.navCtrl.push(LeadThanksPage)
  }

  submit(form) {
    this.submited = true;
    if (form.valid) {
      if (this.storage.isOnline()) {
        this.submitLead();
      } else {
        this.rf_cache.storeLead(this.lead);
        // $state.go('app.offlineLead');
      }
    }
  }

  submitLead() {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let options = new RequestOptions({ headers: headers });

    let loader = this.loadingCtrl.create({
      content: 'Connecting to the server...'
    });

    let params = (<any>Object).entries(this.lead).map(
        ([key, value]) => `data[Lead][${key}]=${encodeURIComponent(value)}`).join('&');

    loader.present();

    this.api.postLead(params)
      .map((res:Response) => {
        console.log(res)
        return res.json()
      })
      .subscribe(
        response => {
          if (response.error.code != 0) {
            const alert = this.alertCtrl.create({
              title: response['error']['message'],
              subTitle: response['response'],
              buttons: ['Ok']
            });
            alert.present();
          } else {
            let user = JSON.parse(localStorage.getItem('User'));

            user.lead_count = response['response']['User']['lead_count'];
            user.winner_count = response['response']['User']['winner_count'];
            user.current_balance = response['response']['User']['current_balance'];
            user.available_balance = response['response']['User']['available_balance'];

            localStorage.setItem('User', JSON.stringify(user));

            this.navCtrl.push(LeadThanksPage)
          }
        },
        error => {
          const alert = this.alertCtrl.create({
            title: 'Error connecting to our server',
            subTitle: 'There was a problem saving your lead.  Please try again',
            buttons: ['Ok']
          });
          alert.present();
        },
        () => {
          loader.dismiss();
        }
      );
  }

  goBack() {
    this.navCtrl.pop();
  }
}
