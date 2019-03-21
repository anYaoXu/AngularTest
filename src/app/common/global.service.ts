import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalService {
  public configObservable = new Subject<any>();
  public sheetConfig: any;

  emitConfig(val: any) {
    this.configObservable.next(val);
  }
}
