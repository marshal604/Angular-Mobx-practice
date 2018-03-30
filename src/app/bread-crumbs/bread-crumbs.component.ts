import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BreadCrumbsStore} from '../store/bread-crumbs.store';
import {Router} from '@angular/router';

@Component({
  selector: 'yur-bread-crumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  constructor(private router: Router, private breadCrumbsStore: BreadCrumbsStore) { }

  ngOnInit() {
  }

  getBreadsCrumbs() {
    return this.breadCrumbsStore.breadsCrumbs;
  }

  goToSelectPage(item) {
    this.breadCrumbsStore.jumpToPos(item);
    const path = this.breadCrumbsStore.breadsCrumbs.filter((el, index) => index > 0).join('/');
    this.router.navigate(['page/' + path]);
  }
}
