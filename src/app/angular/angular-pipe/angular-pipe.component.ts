import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.css']
})
export class AngularPipeComponent implements OnInit {

  // 管道
  pi = 3.14;
  e = 2.718281828459045;
  e2 = 2.71828;
  date = new Date();
  date1 = '2018-05-07 11:04:33';
  date2 = new Date(parseInt('1530501260', 10) * 1000);  // 10位数需要乘以 1000
  date3 = 1530501260;
  public tofixedValue;
  public color='red';
  jsonData = {
    name: '转换成json管道',
    remark: '转换'
  };
  public sliceStr = '对字符串进行剪切';

  public size = 8;
  constructor() { }

  ngOnInit() {
    this.tofixedValue = this.e.toFixed(2);

    const oa = {
      a: '1',
      b: '2'
    };

    const ob = JSON.parse(JSON.stringify(oa));   //可以用来   深度 copy
    ob.a = '3';
    console.log('改变b之后的oa：' + JSON.stringify(oa));

    const oc = oa;
    oc.a = '4';       //c 改变  a 也改变
    console.log('改变c之后的oa：' + JSON.stringify(oa));


    const sa ='aaaa';
    let sb = JSON.parse(JSON.stringify(sa)); 
    sb = 'bbbbb';
    console.log('改变b之后的sa：'+ sa);
    let sc = sa;
    sc = 'ccccc';
    console.log(sc);

  }

}
