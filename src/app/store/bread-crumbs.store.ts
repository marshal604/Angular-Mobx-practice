import {observable, autorun, action, computed} from 'mobx';
import {Injectable} from '@angular/core';


@Injectable()

export class BreadCrumbsStore{
  @observable myBreads: string[] = [];
  @observable location: string;

  constructor() {
    this.initMyBreads();
  }

  @action
  addPos(pos: string) {
    this.myBreads.push(pos);
  }

  @action
  removePos(pos: string) {
    const index = this.myBreads.indexOf(pos);
    this.myBreads = this.myBreads.slice(0, index);
  }

  @action
  jumpToPos(pos: string) {
    this.removePos(pos);
    this.addPos(pos);
  }

  @action
  resetPos() {
    this.myBreads = this.myBreads.slice(0, 1);
  }

  @action
  saveLocation(pos: string) {
    this.location = pos;
  }

  @computed
  get breadsCrumbs(): string[] {
    console.count('hi');
    return this.myBreads;
  }

  @computed
  get nowPos(): string {
    const breads = this.breadsCrumbs;
    return breads[breads.length - 1];
  }

  private initMyBreads() {
    this.myBreads.push('首頁');
  }

}
