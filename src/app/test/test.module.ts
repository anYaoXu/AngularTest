import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { GlobalFilterComponent } from '../common/global-filter/global-filter.component';
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CommonSwitchComponent } from '../common/common-switch/common-switch.component';

@NgModule({
  imports: [CommonModule, FormsModule, UiSwitchModule],
  declarations: [TestComponent, GlobalFilterComponent, CommonSwitchComponent]
})
export class TestModule {}
