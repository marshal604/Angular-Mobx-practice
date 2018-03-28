import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'yur-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  itemList: Array<string>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.itemList = ['家電', '食物', '飲品', '3C'];
  }

  goPrice() {
    this.router.navigate(['page/two']);
  }
}
