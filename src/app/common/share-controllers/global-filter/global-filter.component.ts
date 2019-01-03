import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  SimpleChange,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.css']
})
export class GlobalFilterComponent implements OnInit, OnChanges, DoCheck {

  @Input() public value = '这是默认值';
  @Output() btnEmit = new EventEmitter();
  @Input() public obj;
  public sv = '123';
  @ViewChild('searchBox') searchDiv: ElementRef;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    console.log(this.value);
  }

  // 检测父组件给子组件传值改变  出发范围是指令和组件
  /*OnChanges只对输入的不可变对象起作用。
  输入属性以前说过，使用@Input装饰的属性，这里还需要注意不可变对象，在Angular中，典型的不可变对象是string类型，
  但所有自定义对象均为可变对象，如：user:{name:string}，可变对象即使被定义为输入属性，也不会触发OnChanges方法。*/
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (!changes['obj']) {
      return;
    } else {
      console.log(this.obj);
      alert(JSON.stringify(this.obj));
    }

  }

  //对性能要求大  一个系统中不能同时出现 ngOnchanges 和 ngDocheck
  ngDoCheck() {
    // console.log(this.obj);
  }

  public btnClick() {
    this.sv = '231';  // 不会出发检查机制
    const element = this.el.nativeElement.querySelector("#searchBox");
    console.log(element);   // element 对象
    console.log(this.searchDiv); // elemetRef对象
    console.log(this.searchDiv.nativeElement);  // element对象
    this.btnEmit.emit(this.value);
  }

  public childRun() {
    alert('提供给父组件主动调用的方法');
  }
}

