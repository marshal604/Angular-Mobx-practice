import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'yur-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  itemList: Array<string>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.itemList = ['0 ~ 50', '50 ~ 200', '200 ~ 1000', '1000 up'];
  }

  goItem() {
    this.router.navigate(['page/three']);
  }
}
