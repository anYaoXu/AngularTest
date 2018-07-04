
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComponent} from './test.component';
import { GlobalFilterComponent} from '../common/global-filter/global-filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [TestComponent, GlobalFilterComponent],
})
export class TestModule { }
