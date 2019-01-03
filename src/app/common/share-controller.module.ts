import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CommonSwitchComponent } from './share-controllers/common-switch/common-switch.component';
import { GlobalFilterComponent } from './share-controllers/global-filter/global-filter.component';

@NgModule({
  imports: [CommonModule, UiSwitchModule],
  declarations: [CommonSwitchComponent, GlobalFilterComponent],
  exports: [CommonSwitchComponent, GlobalFilterComponent]
})
export class ShareControllerModule {}
