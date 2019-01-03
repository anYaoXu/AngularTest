import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { EchartsComponent } from './echarts.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HttpClientModule, NgxEchartsModule, CommonModule],
  declarations: [EchartsComponent]
})
export class EchartsModule {}
