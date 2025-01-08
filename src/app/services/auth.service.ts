import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FireserviceService } from './fireservice.service'; 
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  webClientId = "976530347593-vtck97h9vppf9736isnj1hj4brb20tjp.apps.googleusercontent.com";

  constructor(public firebaseService: FireserviceService, public afAuth: AngularFireAuth){} 

  doRegister(value){ 
    return new Promise<any>((resolve, reject) => { 
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res => resolve(res), err => reject(err))}) 
  }
  
  
  doLogin(value){ 
    return new Promise<any>((resolve, reject) => { 
      this.afAuth.signInWithEmailAndPassword(value.email, value.password) 
      .then(res => resolve(res), err => reject(err))});
  }

  doLogout(){ 
    return new Promise((resolve, reject) => { 
      this.afAuth.signOut().then((res) => {
        this.firebaseService.unsubscribeOnLogOut();
        resolve(res);
      }).catch((error) => { 
          console.log(error); 
          reject();
      });
    }) 
  }

  doLoginGoogle() {
    let x = new firebase.auth.GoogleAuthProvider();

    return new Promise<any>((resolve, reject) => { 
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) 
      .then(res => resolve(res), err => reject(err))});
  }
}


