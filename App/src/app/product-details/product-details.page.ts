import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Shoe } from '../classes/shoe';
import { FireserviceService} from '../services/fireservice.service';
import { Wishlist } from '../classes/wishlist';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product: Shoe;
  numbers: Array<number> = [];
  selectedNumber: number = 0;
  warningNumber:boolean;
  warningSuccess:boolean;

  constructor(private router:Router, private activatedRoute:ActivatedRoute,
              private el: ElementRef,private fireservice: FireserviceService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(val => {
      this.product = this.obtainProduct();
      this.warningNumber = false;
      this.warningSuccess = false;
    });
  }

  obtainProduct(): Shoe {
    let nav: Navigation = this.router.getCurrentNavigation();


    if (nav.extras && nav.extras.state && nav.extras.state.product) {
      let product = nav.extras.state.product as Shoe;
      console.log("resoultou: "+product.name);
      this.ObtainIndexes(product);
      return product;
    }
    console.log("não resoultou: ");
    return null;
  }

  ObtainIndexes(products) {
    let size: number = products.sizes.length;

    for(let i = 0; i < size; i++) {
      this.numbers.push(Math.trunc(i/3));
    }
  }

  SetSelectedNumber(number) {
    this.selectedNumber = number;
  }

  // TODO adicionar operação de adicionar na wishlist do utilizador
  AddToWish() {
    if(this.selectedNumber == 0) {
      this.warningNumber = true;

    }
    else {
      this.warningNumber = false;

      let list: Wishlist = { img: this.product.photo, title: this.product.name, size: this.selectedNumber,
        color: this.product.colors[0], price: this.product.price, quantity: 1, $key:''};

      let result = this.fireservice.createWislist(list);
      this.warningSuccess = true;
      this.selectedNumber = 0;
      //console.log("result: "+result);
    }

    
  }

}
