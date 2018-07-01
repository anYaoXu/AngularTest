import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  pi: number = 3.14;
  e: number = 2.718281828459045;
  date = new Date();
  date1 = 1530450710
  constructor() {
   
  }

  ngOnInit() {
    

  }

  
}
