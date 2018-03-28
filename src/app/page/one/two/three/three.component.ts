import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yur-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  itemList: Array<object>;

  constructor() {
  }
  ngOnInit() {
    this.itemList = [
      {
        tag: '家電',
        price: '400',
        name: '電視'
      },
      {
        tag: '家電',
        price: '100',
        name: '電鍋'
      },
      {
        tag: '家電',
        price: '1400',
        name: '冰箱'
      },
      {
        tag: '食物',
        price: '40',
        name: '漢堡'
      },

      {
        tag: '食物',
        price: '140',
        name: '披薩'
      },

      {
        tag: '食物',
        price: '700',
        name: '牛排'
      },
      {
        tag: '飲品',
        price: '40',
        name: '青茶'
      },
      {
        tag: '飲品',
        price: '240',
        name: '冠軍茶'
      },
      {
        tag: '飲品',
        price: '80',
        name: '珍珠奶茶'
      },
      {
        tag: '3C',
        price: '400',
        name: 'Mac'
      },
      {
        tag: '3C',
        price: '10400',
        name: 'PS4'
      },
      {
        tag: '3C',
        price: '100',
        name: 'Switch'
      }
      ];
  }

}
