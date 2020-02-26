import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-childcomponent2',
  template: `
  <h2>
  Count in component1   =  {{ count }}
</h2>
<button (click)='nextCount()'>Next Count from component1</button>
  `
})
export class Comp2Component implements OnInit {

  count: number;
  constructor(private appsevice: AppserviceService) {
  }
  ngOnInit() {

    this.appsevice.count.subscribe(c => {
      this.count = c;
    });
  }
  nextCount() {
    this.appsevice.nextCount();
  }

}