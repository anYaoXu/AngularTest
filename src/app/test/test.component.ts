import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  pi = 3.14;
  e = 2.718281828459045;
  date = new Date();
  date1 = '2018-05-07 11:04:33';
  date2 = new Date(parseInt('1530501260', 10) * 1000);  //10位数需要乘以 1000
  date3 = 1530501260;

  constructor() {

  }

  ngOnInit() {

    console.log(this.date2);

  }


}
