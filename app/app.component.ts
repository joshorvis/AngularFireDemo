import { Component,OnInit } from '@angular/core';

import { AngularFire,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><pre>{{info | json}}</pre>`,
})
export class AppComponent implements OnInit {
  name = 'Angular';
  
  info: any;
  
  constructor(private af:AngularFire) {
   
  }
  
  ngOnInit() {
    console.log('inited');
    // Initialize Firebase
    this.af.database.list('/').subscribe(data => this.info = data);
    
  }
}
