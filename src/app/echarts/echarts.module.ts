
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import {EchartsComponent} from './echarts.component';


@NgModule({
  imports: [
    HttpClientModule,
    NgxEchartsModule
  ],
  declarations: [EchartsComponent],
})
export class EchartsModule { }
