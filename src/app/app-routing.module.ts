import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SassAComponent} from './sass/sassA/sassA.component';
import {SassFunctionComponent} from './sass/sassB/sassFunction.component';
import {SassHomeComponent} from './sass/sassHome.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
