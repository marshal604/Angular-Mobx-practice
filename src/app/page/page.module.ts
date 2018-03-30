import {NgModule} from '@angular/core';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './one/two/two.component';
import {ThreeComponent} from './one/two/three/three.component';
import {SharedModule} from '../shared/shared.module';
import {PageRoutingModule} from './page-routing.module';
import {PageComponent} from './page.component';
import { FourComponent } from './one/two/three/four/four.component';

@NgModule({
  declarations: [
    PageComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    SharedModule,
    PageRoutingModule
  ],
  exports: []
})

export class PageModule {}
