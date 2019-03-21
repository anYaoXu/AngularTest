import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../app/common/global.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  constructor(protected router: Router, private globalService: GlobalService) {
    this.globalService.configObservable.subscribe(value => {
      this.title = value;
    });
  }
  public toRoute() {
    this.router.navigate(['/test'], {
      queryParams: { id: 1 }
    });
  }
}
