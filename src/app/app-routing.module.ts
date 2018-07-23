import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EchartsComponent} from './echarts/echarts.component';
import {NgxBootstrapComponent} from './ngxBootstrap/ngxBootstrap.component';
import { TestComponent } from './test/test.component';

/*oadChildren是延迟加载子模块,这对于加载页面的性能有很好的提升。
通俗的讲就是说进入主模块的时候,子模块不加载,等需要进入子模块的时候才加载。
项目划分模块的时候,使用loadChildren配置路由是最佳选择方案。*/

const routes: Routes = [
  {
    path: 'sassHome',
    loadChildren: './sass/sassHome.module#SassHomeModule'
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
    path: 'angular',
    loadChildren: './angular/angular.module#AngularaOwnModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
