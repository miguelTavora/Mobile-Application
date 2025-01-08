import { Component, OnInit } from '@angular/core';
import { Shoe } from '../classes/shoe';
import { SHOES } from '../classes/shoes';
import { FireserviceService} from '../services/fireservice.service';

@Component({
  selector: 'app-change-stock',
  templateUrl: './change-stock.page.html',
  styleUrls: ['./change-stock.page.scss'],
})
export class ChangeStockPage implements OnInit {

  //shoes: Shoe[] = Object.assign([], SHOES);//SHOES;
  shoes2: Array<any> = [];//SHOES;

  shoeSelected: string = "Select Product";
  shoeObj: any;
  stockValue: boolean;

  showCountry: string = "dropdown-content";

  arrowDownCountry: string = "arrow-down";

  warningProduct: boolean = false;
  warningStock: boolean = false;
  successWarning: boolean = false;

  info = {
    stock: '',
    noStock:  ''
  };

  constructor(private fireservice: FireserviceService) { }

  ngOnInit() {
    this.ObtainProducts();
  }

  ShowShoes() {
    if(this.showCountry == "dropdown-content") {
      this.showCountry = "dropdown-show";
    }
    else {
      this.showCountry = "dropdown-content";
    }
    this.arrowDownCountry = (this.arrowDownCountry == "arrow-down" ? "arrow-up" : "arrow-down");
  }

  ChangeShoe(shoe) {
    this.shoeSelected = shoe.name;
    this.shoeObj = shoe;
  }

  SetHasStock(value: boolean) {
    this.stockValue = value;
  }

  // TODO submeter para a base dados
  Submit() {
    if(this.shoeSelected == "Select Product") {
      this.warningProduct =  true;
      this.successWarning = false;
    }  
    else if(this.info.stock == '' && this.info.noStock == ''){
      this.warningStock = true;
      this.warningProduct =  false;
      this.successWarning = false;
    }
    else {
      this.warningProduct =  false;
      this.warningStock = false;

      let product: Shoe = this.shoeObj as Shoe;
      product.stock = this.stockValue;
      console.log("stock: "+product.stock+", "+product.$key);

      //this.fireservice.deleteProduct(product.$key);
      this.fireservice.setProduct(product.$key, product);
      this.shoeSelected = "Select Product";
      this.successWarning = true;
    }
  }

  ObtainProducts() {
    let result = this.fireservice.getProducts().subscribe(data => {
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

      result.unsubscribe();
    }); 
  }

}
