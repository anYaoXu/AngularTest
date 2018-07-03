import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fPipe'
})
export class FPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // value 传入的值(| 前面的值)
    // args 传入的格式化的值(| 后面的值)
    if (!args) {
      args = 1;
    }
    return value * args;
  }

}
