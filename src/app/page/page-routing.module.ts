import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './one/two/two.component';
import {ThreeComponent} from './one/two/three/three.component';


const pageRoute: Routes = [
  {path: '', redirectTo: 'one'},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent}

];


@NgModule({
  imports: [
    RouterModule.forChild(pageRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class PageRoutingModule {
}
