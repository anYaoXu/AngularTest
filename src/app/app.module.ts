import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SassHomeModule } from './sass/sassHome.module';
import { EchartsModule} from './echarts/echarts.module';
import { NgxBootstrapModule} from './ngxBootstrap/ngxBootstrap.module';

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
    NgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
