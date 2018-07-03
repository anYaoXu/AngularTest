import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.css']
})
export class GlobalFilterComponent implements OnInit {

  @Input() public value = '这是默认值';
  @Output() btnEmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.value);
  }

  public btnClick(){
    this.btnEmit.emit(this.value);
  }
}
