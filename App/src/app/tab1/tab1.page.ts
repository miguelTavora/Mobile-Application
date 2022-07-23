import { Component } from '@angular/core';
import { SHOES } from '../classes/shoes';
import { Shoe } from '../classes/shoe';
import { ActivatedRoute, Router } from '@angular/router';
import { GENDER } from '../classes/gender';
import { FireserviceService} from '../services/fireservice.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //shoes: Shoe[] = Object.assign([], SHOES);//SHOES;
  shoes1: Array<Shoe[]> = [];
  filters: Array<string> = [];
  shoes2: Array<any> = [];

  constructor(private route: ActivatedRoute, private router: Router,
              private fireservice: FireserviceService) {}

  EvenShoes() {
    for (let i = 0; i < this.shoes2.length; i+=2) {
      if(this.shoes2.length > i+1 ) {
        this.shoes1.push([this.shoes2[i], this.shoes2[i+1]]);
      }
      else {
        this.shoes1.push([this.shoes2[i]]);
      }
    }
  }

  OrderByQuantitySelled(shoes: Shoe[]) {
    let result = shoes.sort((a, b) => b.selled -a.selled);
    return result;
  }

  ngOnInit(): void {
    this.ObtainProducts();
    
    this.route.params.subscribe(params => {
      for(let i = 0; i < 100; i++) {
        if(params[''+ i] != undefined) {
          this.filters.push(params[''+ i]);
        }
      }
      console.log(this.filters);
    });
    console.log(this.shoes2.length);

    this.FilterOrderProducts();

    // create db with the products
    //this.CreateProducts();
  }

  detectGender() {
    let man:number = this.filters.indexOf(GENDER[0]);
    let woman:number = this.filters.indexOf(GENDER[1]);
    let child:number = this.filters.indexOf(GENDER[2]);


    let selected: string;
    if(man != -1) {
      selected = this.filters[man];
    }

    else if(woman != -1) {
      selected = this.filters[woman];
    }

    else if(child != -1) {
      selected = this.filters[child];
    }

    let indexes: Array<number> = [];
    for(let i = 0; i < this.shoes2.length; i++) {
      let genders = this.shoes2[i].gender;
      for(let j = 0; j < genders.length; j++) {
        if(genders[j] == selected) {
          indexes.push(i);
          break;
        }
      }

    }

    let result: Array<Shoe> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(indexes.indexOf(i) > -1) {
        result.push(this.shoes2[i]);
      }
    }
    return result;

  }

  /*CreateProducts() {
    console.log(this.shoes.length);
    //this.fireservice.setProduct(this.shoes[0].$key, this.shoes[0]);
    for(let i = 0; i < this.shoes.length; i++) {
      this.fireservice.setProduct(this.shoes[i].$key, this.shoes[i]);
    }
  }*/

  ObtainProducts() {
    let result = this.fireservice.getProducts().subscribe(data => {
      this.shoes2 = [];
      this.shoes1 = [];
      console.log("tamanho; "+this.shoes2.length);
      this.shoes2 = data.map(e => { 
        return { 
          $key: e.payload.doc.id, 
          brand: e.payload.doc.data()['brand'], 
          colors: e.payload.doc.data()['colors'],
          description: e.payload.doc.data()['description'], 
          gender: e.payload.doc.data()['gender'], 
          name: e.payload.doc.data()['name'],
          photo: e.payload.doc.data()['photo'],
          price: e.payload.doc.data()['price'],
          selled: e.payload.doc.data()['selled'],
          sizes: e.payload.doc.data()['sizes'],
          stock: e.payload.doc.data()['stock'],
          type: e.payload.doc.data()['type'],
          video: e.payload.doc.data()['video'],
        }; 
      });
      console.log(this.shoes2);
      console.log("obtain products");
      //result.unsubscribe();

      this.FilterOrderProducts();
      
    }); 
  }

  FilterOrderProducts() {
    if(this.filters.length > 0) {
      // detects the name
      if(this.filters[0].startsWith('name;')) {
        this.shoes2 = this.detectName();
      }
      // detect minimum price
      else if(this.filters[0].startsWith('min;')) {
        this.shoes2 = this.detectMinPrice();
      }
      // detect maximum price
      else if(this.filters[0].startsWith('max;')) {
        this.shoes2 = this.detectMaxPrice();
      }
      // detect type of shoes
      else if(this.filters[0].startsWith('type;')) {
        this.shoes2 = this.detectType();
      }
      // detect the brand
      else if(this.filters[0].startsWith('brand;')) {
        this.shoes2 = this.detectBrand();
      }
      // detect the color
      else if(this.filters[0].startsWith('color;')) {
        this.shoes2 = this.detectColor();
      }
      // detects gender
      else {
        this.shoes2 = this.detectGender();
      }
      
    }

    // sort by selled quantity
    this.shoes2 = this.OrderByQuantitySelled(this.shoes2);
    // to show
    this.EvenShoes();
  }


  detectName() {
    let name = this.filters[0].replace('name;', '');

    let indexes: Array<number> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(this.shoes2[i].name.toLowerCase().includes(name)) {
        indexes.push(i);
      }
    }

    let result: Array<Shoe> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(indexes.indexOf(i) > -1) {
        result.push(this.shoes2[i]);
      }
    }
    return result;
  }
  
  detectMinPrice() {
    let min = this.filters[0].replace('min;', '');

    let indexes: Array<number> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(this.shoes2[i].price >= min) {
        indexes.push(i);
      }
    }

    let result: Array<Shoe> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(indexes.indexOf(i) > -1) {
        result.push(this.shoes2[i]);
      }
    }
    return result;
  }

  detectMaxPrice() {
    let max = this.filters[0].replace('max;', '');

    let indexes: Array<number> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(this.shoes2[i].price <= max) {
        indexes.push(i);
      }
    }

    let result: Array<Shoe> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(indexes.indexOf(i) > -1) {
        result.push(this.shoes2[i]);
      }
    }
    return result;
  }

  detectType() {
    let typeShoe = this.filters[0].replace('type;', '');

    let indexes: Array<number> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(this.shoes2[i].type.includes(typeShoe)) {
        indexes.push(i);
      }
    }

    let result: Array<Shoe> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(indexes.indexOf(i) > -1) {
        result.push(this.shoes2[i]);
      }
    }
    return result;
  }

  detectBrand() {
    let brand = this.filters[0].replace('brand;', '');

    let indexes: Array<number> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(this.shoes2[i].brand.includes(brand)) {
        indexes.push(i);
      }
    }

    let result: Array<Shoe> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(indexes.indexOf(i) > -1) {
        result.push(this.shoes2[i]);
      }
    }
    return result;
  }

  detectColor() {
    let color = this.filters[0].replace('color;', '');
    console.log("color");

    let indexes: Array<number> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      console.log(this.shoes2[i].colors);
      for(let j = 0; j < this.shoes2[i].colors.length; j++) {
        if(this.shoes2[i].colors[j].includes(color)) {
          indexes.push(i);
        }
      }
    }

    let result: Array<Shoe> = [];

    for(let i = 0; i < this.shoes2.length; i++) {
      if(indexes.indexOf(i) > -1) {
        result.push(this.shoes2[i]);
      }
    }
    return result;
  }

}
