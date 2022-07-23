import { Component } from '@angular/core';
import { SHOE_TYPE } from '../classes/shoe_type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  shoeTypes:string[] = SHOE_TYPE;
  filters: any;

  info = {
    name: '',
    minimum: '',
    maximum: '',
  };

  constructor(private router: Router) {}

  FilterShow(filter) {
    this.filters = [filter];
    this.router.navigate(['/tabs/tab1', this.filters]);
  }

  NameSearch(keyCode) {
    if(keyCode == 13) {
      this.filters = ['name;'+this.info.name];
      this.router.navigate(['/tabs/tab1', this.filters]);
    }
  }

  PriceMinSearch(keyCode) {
    if(keyCode == 13) {
      this.filters = ['min;'+this.info.minimum];
      this.router.navigate(['/tabs/tab1', this.filters]);
    }
  }

  PriceMaxSearch(keyCode) {
    if(keyCode == 13) {
      this.filters = ['max;'+this.info.maximum];
      this.router.navigate(['/tabs/tab1', this.filters]);
    }
  }

  TypeShoe(type) {
    this.filters = ['type;'+type];
    this.router.navigate(['/tabs/tab1', this.filters]);
  }

  BrandShoe(brand) {
    this.filters = ['brand;'+brand];
    this.router.navigate(['/tabs/tab1', this.filters]);
  }

  ColorShoe(color) {
    this.filters = ['color;'+color];
    this.router.navigate(['/tabs/tab1', this.filters]);
  }
}
