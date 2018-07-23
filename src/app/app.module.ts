import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EchartsModule} from './echarts/echarts.module';
import { NgxBootstrapModule} from './ngxBootstrap/ngxBootstrap.module';
import { TestModule} from './test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    EchartsModule,
    RouterModule,
    AppRoutingModule,
    NgxBootstrapModule,
    TestModule,
    // AngularaOwnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
