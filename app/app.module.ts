import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirebaseConfig } from './configs/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { HomeComponent } from './core/home/home.component'



@NgModule({
  imports:      [ BrowserModule,AngularFireModule.initializeApp(FirebaseConfig),NgbModule.forRoot() ],//
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
