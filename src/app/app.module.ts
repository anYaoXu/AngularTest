import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SassHomeModule } from './sass/sassHome.module';
import { EchartsModule} from './echarts/echarts.module';
import { NgxBootstrapModule} from './ngxBootstrap/ngxBootstrap.module';
import { TestMoudle} from './test/test.module';
import { AngularaOwnModule} from './angular/angular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SassHomeModule,
    EchartsModule,
    RouterModule,
    AppRoutingModule,
    NgxBootstrapModule,
    TestMoudle,
    AngularaOwnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
