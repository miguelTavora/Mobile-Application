import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import FormsModule here
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { SETTINGS } from '@angular/fire/compat/firestore';

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyCRrB3C_u06xqWR9JJ_M9ifTVyFNQdMVng",
  authDomain: "ionic-tuga.firebaseapp.com",
  projectId: "ionic-tuga",
  storageBucket: "ionic-tuga.appspot.com",
  messagingSenderId: "976530347593",
  appId: "1:976530347593:web:623fb2e9fb4175e082d198"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { provide: SETTINGS, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
