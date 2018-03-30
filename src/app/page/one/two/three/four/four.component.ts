import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BreadCrumbsStore} from '../../../../../store/bread-crumbs.store';

@Component({
  selector: 'yur-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {

  constructor(private breadCrumbsStore: BreadCrumbsStore, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe((el) => {
      this.breadCrumbsStore.resetPos();
      el.map((url) => {
        this.addPos(url.path);
      });
    });
  }

  addPos(item) {
    this.breadCrumbsStore.addPos(item);
  }

  getItem() {
    return this.breadCrumbsStore.nowPos;
  }

}
