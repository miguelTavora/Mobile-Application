import { Component, Input, OnInit } from '@angular/core';
import { Shoe } from 'src/app/classes/shoe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() shoe: Shoe;

  constructor(private router: Router) { }

  ngOnInit() {}

  redirectToProduct(product) {
    console.log("redirect: ");
    this.router.navigate(['/tabs/product-details'], { state: { product: product } });
  }

}
