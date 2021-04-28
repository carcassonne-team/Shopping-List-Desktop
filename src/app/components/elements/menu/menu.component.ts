import {Component, OnInit} from '@angular/core';
import {ListService} from '../../../services/list.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateListComponent} from '../../dialogs/create-list/create-list.component';
import {JoinListComponent} from '../../dialogs/join-list/join-list.component';
import {ListGetResponse} from '../../../models/ListGetResponse';
import {ListViewService} from '../../../services/list-view.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private listService: ListService,
    private matDialog: MatDialog,
    private listViewService: ListViewService
  ) {
  }

  lists: Array<ListGetResponse> = [];

  ngOnInit(): void {
    this.lists = [];
    this.listService.getLists()
      .then(response => {
          this.lists = response;
          console.log(response);
        }
      );
  }

  onCreate(): void {
    this.matDialog.open(CreateListComponent);
  }

  onJoin(): void {
    this.matDialog.open(JoinListComponent);
  }

  onList(list: ListGetResponse): void {
    this.listViewService.changeListData(list);
  }

  onCreateProduct(): void {

  }

  onCreateCategory(): void {

  }
}
