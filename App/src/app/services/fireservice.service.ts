

 import { AngularFirestore } from '@angular/fire/compat/firestore' 
 import { Shoe } from '../classes/shoe';
 import { Profile } from '../classes/profile';
 import { Wishlist } from '../classes/wishlist';
 import firebase from 'firebase/compat/app';
 import { Injectable } from '@angular/core';


@Injectable({ 
 providedIn: 'root' 
})


export class FireserviceService { 

  private snapshotChangesSubscription: any;
  productsName: string = 'products';
  usersName: string = 'users';
  listName: string = 'wishlist'

  constructor( public af:AngularFirestore,) {}
  
  getProducts () { 
    return this.af.collection(this.productsName).snapshotChanges(); 
  }

  setProduct (shoeID:any, s:Shoe) { 
    return this.af.collection(this.productsName).doc(shoeID).set(s); 
  }


  deleteProduct(shoeID:any) { 
    return this.af.collection(this.productsName).doc(shoeID).delete(); 
    //this.af.collection('people').doc(currentUser.uid).collection('tasks').doc(TaskID).delete(); 
    //this.af.doc('tasks/' + TaskID).delete(); 
  }
 
  /*createProduct(shoeID:any, s:Shoe) { 
    console.log("CONA");
    return this.af.collection(this.productsName).add(s); 
  }*/

 
  /*changeStockProduct (shoeID:any, s:Shoe){ 
    return this.af.collection(this.productsName).doc(shoeID).set(s); 
  }*/

  




  unsubscribeOnLogOut(){ 
    //remember to unsubscribe from the snapshotChanges    
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
    });
  }




  getProfile() {
    let currentUser = firebase.auth().currentUser; 
    //return this.af.collection('products').doc(currentUser.uid).collection('tasks').add(s); 
    return this.af.collection(this.usersName).doc(currentUser.uid).snapshotChanges(); 
  }

  setProfile(user:Profile) {
    let currentUser = firebase.auth().currentUser;

    return this.af.collection(this.usersName).doc(currentUser.uid).set(user);//.add(user); 
  }






  getWishlist () {
    let currentUser = firebase.auth().currentUser;

    return this.af.collection(this.listName).doc(currentUser.uid).collection(this.listName).snapshotChanges(); 
 }
 
 
  createWislist(s:Wishlist) {
    let currentUser = firebase.auth().currentUser;
    
    return this.af.collection(this.listName).doc(currentUser.uid).collection(this.listName).add(s); 
  }

 
  deleteList(wislistID:any) { 
    let currentUser = firebase.auth().currentUser;
    return this.af.collection(this.listName).doc(currentUser.uid).collection(this.listName).doc(wislistID).delete();
  }


}
