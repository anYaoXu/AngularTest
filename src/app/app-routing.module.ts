import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SassAComponent} from './sass/sassA/sassA.component';
import {SassFunctionComponent} from './sass/sassB/sassFunction.component';
import {SassHomeComponent} from './sass/sassHome.component';
import {EchartsComponent} from './echarts/echarts.component';
import {NgxBootstrapComponent} from './ngxBootstrap/ngxBootstrap.component';
import { TestComponent } from './test/test.component';
import {AngularComponent} from "./angular/angular.component";
import {AngularPipeComponent} from "./angular/angular-pipe/angular-pipe.component";

const routes: Routes = [
  {
    path: 'sassHome', component: SassHomeComponent,
    children: [
      {
        path: 'sassA', component: SassAComponent
      },
      {
        path: 'sassFunction', component: SassFunctionComponent
      }
    ]
  },
  {
    path: 'echarts', component: EchartsComponent
  },
  {
    path: 'ngxBootstrap', component: NgxBootstrapComponent
  },
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'angular', component: AngularComponent,
    children: [
      {
        path: 'pipe', component: AngularPipeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
