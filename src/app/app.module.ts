import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import {SharedModule} from './shared/shared.module';
import {MobxAngularModule} from 'mobx-angular';
import { AppComponent } from './app.component';
import {BreadCrumbsStore} from './store/bread-crumbs.store';


@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MobxAngularModule
  ],
  providers: [
    BreadCrumbsStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
