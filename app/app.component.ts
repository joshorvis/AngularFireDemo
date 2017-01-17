import { Component,OnInit } from '@angular/core';

import { AngularFire,FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  name = 'Angular';
  
  info: any;
  
  constructor(private af:AngularFire) {
   
  }
  
  ngOnInit() {
    // Initialize Firebase
    const info$:FirebaseListObservable<any> = this.af.database.list('/');
    
    info$.subscribe(data => this.popData(data));
    
  }
  
  popData(data:any) {
    this.info = data;
  }
}
