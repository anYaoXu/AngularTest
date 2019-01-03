import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { ShareControllerModule } from '../common/share-controller.module';

@NgModule({
  imports: [CommonModule, FormsModule, ShareControllerModule],
  declarations: [TestComponent]
})
export class TestModule {}
