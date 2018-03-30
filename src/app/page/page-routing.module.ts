import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './one/two/two.component';
import {ThreeComponent} from './one/two/three/three.component';
import {FourComponent} from './one/two/three/four/four.component';


const pageRoute: Routes = [
  {path: '', component: OneComponent},
  {path: ':id', component: TwoComponent},
  {path: ':id/:id', component: ThreeComponent},
  {path: ':id/:id/:id', component: FourComponent}
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
