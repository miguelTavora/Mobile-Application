import { Component, OnInit } from '@angular/core';
import { WISHLIST_USERS } from '../classes/list';
import { Wishlist } from '../classes/wishlist';
import { FireserviceService} from '../services/fireservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  //list: Wishlist[] = Object.assign([], WISHLIST_USERS);
  list2: Array<any> = [];
  confirms: Array<boolean> = [];
  warning: boolean = false;

  constructor(private fireservice: FireserviceService) { }

  ngOnInit() {
    this.ObtainWishlist();

  }

  CreateConfirmList() {
    for(let i = 0; i < this.list2.length; i++) {
      this.confirms.push(false);
    }
  }
  
  ObtainWishlist() {
    let result = this.fireservice.getWishlist().subscribe(data => { 
      this.list2 = data.map(e => { 
        return { 
          $key: e.payload.doc.id, 
          color: e.payload.doc.data()['color'], 
          img: e.payload.doc.data()['img'],
          price: e.payload.doc.data()['price'], 
          quantity: e.payload.doc.data()['quantity'], 
          size: e.payload.doc.data()['size'],
          title: e.payload.doc.data()['title'],
        }; 
      });
      console.log(this.list2);
      //result.unsubscribe();
      this.CreateConfirmList();
    }); 
  }

  DeleteItem(item) {
    console.log("remove"+item);

    let index = this.list2.indexOf(item);
    this.confirms[index] = true;
    this.warning = true;

    //
    console.log(this.warning);
  }

  CancelDelete(item) {
    let index = this.list2.indexOf(item);
    this.confirms[index] = false;
    
    this.GrayBackground();
    //this.warning = false;
  }

  ConfirmDelete(item) {
    let index = this.list2.indexOf(item);

    // stop the warning and remove locally and on db
    this.confirms.splice(index, 1);
    //this.list2.splice(index, 1);

    
    this.fireservice.deleteList(item.$key);

    this.GrayBackground();
    //this.warning = false;
  }

  GrayBackground() {
    let canStopGrayBack:boolean = true;
    for(let i = 0; i < this.list2.length; i++) {
      if(this.confirms[i])  {
        canStopGrayBack = false;
      }
    }
    if(canStopGrayBack) {
      this.warning = false;
    }
  }

}
