import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BreadCrumbsStore} from '../../../store/bread-crumbs.store';

@Component({
  selector: 'yur-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  itemList: Array<string>;

  constructor(private router: Router, private breadCrumbsStore: BreadCrumbsStore, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.itemList = ['0 ~ 50', '50 ~ 200', '200 ~ 1000', '1000 up'];
    this.activatedRoute.url.subscribe((el) => {
      this.breadCrumbsStore.resetPos();
      el.map((url) => {
        this.addPos(url.path);
      });
    });
  }

  goItem(price: string) {
    this.router.navigate([price], {relativeTo: this.activatedRoute});
    this.addPos(price);
  }

  addPos(price: string) {
    this.breadCrumbsStore.addPos(price);
  }
}
