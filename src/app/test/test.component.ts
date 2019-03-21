import { Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../common/global.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('globalFilter') public childFilter: any;
  public isShowTree = false;
  //js 分组方法
  list = [
    { name: 'John', Average: 15, High: 10, DtmStamp: 1358226000000 },
    { name: 'Jane', Average: 16, High: 92, DtmStamp: 1358226000000 },
    { name: 'Jane', Average: 17, High: 45, DtmStamp: 1358226000000 },
    { name: 'John', Average: 18, High: 87, DtmStamp: 1358226000000 },
    { name: 'Jane', Average: 15, High: 10, DtmStamp: 1358226060000 },
    { name: 'John', Average: 16, High: 87, DtmStamp: 1358226060000 },
    { name: 'John', Average: 17, High: 45, DtmStamp: 1358226060000 },
    { name: 'Jane', Average: 18, High: 92, DtmStamp: 1358226060000 }
  ];

  public array = [{ a1: '1' }, { a1: '2' }];

  public groupByList;

  public mytitle = 'title信息';

  public isFirstChildrenShow = false;

  public myObj = {
    a: '1',
    b: '2'
  };

  constructor(protected globalService: GlobalService) {
    // this.globalService.configObservable.subscribe(value => {
    //   console.log('-----------------------------------------------', value);
    // });
  }

  ngOnInit() {
    this.globalService.emitConfig('test');
    this.groupByList = this.groupBy(this.list, function(item) {
      return [item.name];
    });
    console.log(this.groupByList);
    this.childFilter.childRun();
    console.log(this.array);
    this.array.forEach(item => {
      console.log(item);
    });
    //find 数组
    const obj = this.array.find(p => p.a1 === '1');
    console.log('数组find=' + obj);
    const array1 = [1, 1, '1', '1', null, null, undefined, undefined, NaN, NaN];
    console.log('数据去重', new Set(array1));
    console.log('数组去重，返回数组', Array.from(new Set(array1)));
  }

  private groupBy(array, f) {
    console.log(f);
    const groups = {};
    array.forEach(function(o) {
      const group = JSON.stringify(f(o)); // 带入上面的方法得到name
      groups[group] = groups[group] || []; // 没有push过是undefind  push过后将之前信息取出来
      groups[group].push(o);
    });
    const a = [];
    console.log(groups); // 此数组中 是 分组后的list 前面带有key
    // Object.keys(groups)是取出groups对象中的所有key，然后遍历一个个key组成的新数组
    /* Object.keys(groups).map(function(group){
       debugger;
       console.log(group);
       a.push({
         name: group,
         list: groups[group] //后面的数组   在a 这里可以随意拼装数据
       });
       return groups[group];
     });
     console.log(a);
     return groups;*/
    return Object.keys(groups).map(function(group) {
      a.push({
        name: group,
        list: groups[group]
      });
      console.log(a);
      return groups[group];
    });
  }

  public filterClick(data) {
    console.log(data);
  }

  public parentDataChange() {
    this.mytitle = '数据改变了';

    this.myObj = {
      a: '2',
      b: '3'
    };
  }
  public switchValueChange(value) {
    console.log('change', value);
    this.isShowTree = value;
    console.log(this.isShowTree);
  }
  public switchOpen() {}
}
