import {NgModule} from '@angular/core';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './one/two/two.component';
import {ThreeComponent} from './one/two/three/three.component';
import {SharedModule} from '../shared/shared.module';
import {PageRoutingModule} from './page-routing.module';
import {PageComponent} from './page.component';

@NgModule({
  declarations: [
    PageComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    SharedModule,
    PageRoutingModule
  ],
  exports: []
})

export class PageModule {}
