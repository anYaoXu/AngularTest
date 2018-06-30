
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {SassHomeComponent} from './sassHome.component';
import {SassAComponent} from './sassA/sassA.component';
import {SassFunctionComponent} from './sassB/sassFunction.component';



export const sassRoutes: Routes = [
  {
    path: '',
    component: SassHomeComponent,
    children: [
      {
        path: 'sassA',
        component: SassAComponent
      },
      {
        path: 'sassB',
        component: SassFunctionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sassRoutes)
  ],
  declarations: [
    SassHomeComponent,
    SassAComponent,
    SassFunctionComponent
  ],
})
export class SassHomeModule { }
