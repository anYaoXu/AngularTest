
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularComponent} from './angular.component';
import {AngularPipeComponent} from './angular-pipe/angular-pipe.component';
import { FPipePipe } from '../pipe/f-pipe.pipe';
import {AngularClassStyleComponent} from "./angular-class-style/angular-class-style.component";




export const angularRoutes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: 'pipe',
        component: AngularPipeComponent
      },
      {
        path: 'classStyle',
        component: AngularClassStyleComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(angularRoutes)
  ],
  declarations: [
    AngularComponent,
    AngularPipeComponent,
    FPipePipe,
    AngularClassStyleComponent
  ],
})
export class AngularaOwnModule { }
