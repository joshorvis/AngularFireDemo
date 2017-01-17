import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirebaseConfig } from './configs/firebase.config';
import { AngularFireModule } from 'angularfire2';

import { AppComponent }  from './app.component';



@NgModule({
  imports:      [ BrowserModule,AngularFireModule.initializeApp(FirebaseConfig) ],//
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
