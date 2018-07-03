import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.css']
})
export class AngularPipeComponent implements OnInit {

  //管道
  pi = 3.14;
  e = 2.718281828459045;
  date = new Date();
  date1 = '2018-05-07 11:04:33';
  date2 = new Date(parseInt('1530501260', 10) * 1000);  //10位数需要乘以 1000
  date3 = 1530501260;
  jsonData = {
    name: '转换成json管道',
    remark: '转换'
  };
  public sliceStr = '对字符串进行剪切';
  constructor() { }

  ngOnInit() {
  }

}
