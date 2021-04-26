import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ListGetResponse} from '../models/ListGetResponse';

@Injectable()
export class ListViewService {
  first = new ListGetResponse(0, '', '', 0, []);
  private listSource = new BehaviorSubject(this.first);
  currentListData = this.listSource.asObservable();

  changeListData(newList: ListGetResponse): void {
    this.listSource.next(newList);
  }
}
