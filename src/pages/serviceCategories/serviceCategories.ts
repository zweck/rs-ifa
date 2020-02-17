import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { GlobalStorage } from '../../services/globalstorage/globalstorage';
import { Api } from '../../services/api/api';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ReferralDetailsPage } from './../referralDetails/referralDetails';

@Component({
  selector: 'page-service-categories',
  templateUrl: 'serviceCategories.html',
})
export class ServiceCategoriesPage {


  faqs = [];
  currentIndex;
  onlyFavourites = false;
  vendors = [];
  selectedVendor;
  search = '';

  constructor(
    public navCtrl: NavController,
    public storage: GlobalStorage,
    public api: Api,
    public loadingCtrl: LoadingController,
    public http: Http
  ) {

  }

  public handleSectionClick(index){
    if(this.currentIndex == index){
      this.currentIndex = null;
    }else{
      this.currentIndex = index;
    }
  }

  ionViewDidLoad(){
    this.getVendors();
  }

  addToFavourites(vendor){
    let loader = this.loadingCtrl.create();
    loader.present();

    this.http.get(
      `${this.storage.baseUrl}/favourite/${vendor.id}?${ this.storage.getAuthHelper() }`
    )
      .map((res:Response) => res.json())
      .subscribe(
        response => {
          vendor.favourite = response['response']['new_value'];
        },
        error => {

        },
        () => {
          loader.dismiss();
        }
      );
  }

  showFavouritesOnly() {
    this.onlyFavourites = !this.onlyFavourites;
  }

  selectVendor(vendor, vendorCategory){
    if(this.selectedVendor && this.selectedVendor.vendor.id == vendor.id){
      this.selectedVendor = null;
    }else{
      this.selectedVendor = { vendor, vendorCategory };
    }
  }

  getVendors(){
    this.api.getVendors().then(response => {
      this.vendors = response['response'];

      this.vendors.sort((a: any, b: any) => {
        if (a.VendorCategory.name < b.VendorCategory.name) {
          return -1;
        } else if (a.VendorCategory.name > b.VendorCategory.name) {
          return 1;
        } else {
          return 0;
        }
      });

      this.api.getFavourites().then(response => {
        const favourites = response['response'];
        this.vendors = this.vendors.map(({ Vendor, ...vendorObject }) => {
          return {
            ...vendorObject,
            Vendor: Vendor.map(
                vendor => ({ ...vendor, favourite: favourites.includes(parseInt(vendor.id)) })
            )
          }
        });
      });
    });

  }

    shouldHideVendorGroup(vendorGroup){
        return !(
            (this.onlyFavourites ? vendorGroup.Vendor.find(({ favourite }) => favourite) : true) &&
                vendorGroup.Vendor.find(vendor => vendor.company_name.includes(this.search))
        )
    }

  shouldHideVendor(vendor){
    return !((this.onlyFavourites ? vendor.favourite : true) && vendor.company_name.includes(this.search))
  }

  goToReferralDetails(){
    this.navCtrl.push(ReferralDetailsPage, {vendor: this.selectedVendor})
  }
}
