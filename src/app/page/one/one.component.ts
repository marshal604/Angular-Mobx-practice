import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BreadCrumbsStore} from '../../store/bread-crumbs.store';

@Component({
  selector: 'yur-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  itemList: Array<string>;

  constructor(private router: Router, private breadCrumbsStore: BreadCrumbsStore) {
  }

  ngOnInit() {
    this.itemList = ['家電', '食物', '飲品', '3C'];
    this.breadCrumbsStore.resetPos();
  }

  goPrice(tags: string) {
    this.router.navigate(['page', tags]);
    this.addPos(tags);
  }

  addPos(tags: string) {
    this.breadCrumbsStore.addPos(tags);
  }
}
