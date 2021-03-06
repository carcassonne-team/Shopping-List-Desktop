import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListService} from '../../../services/list.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateListComponent} from '../../dialogs/create-list/create-list.component';
import {JoinListComponent} from '../../dialogs/join-list/join-list.component';
import {ListGetResponse} from '../../../models/ListGetResponse';
import {ListViewService} from '../../../services/list-view.service';
import {CreateCategoryComponent} from '../../dialogs/create-category/create-category.component';
import {CreateProductComponent} from '../../dialogs/create-product/create-product.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
  }

  onCreate(): void {
    this.matDialog.open(CreateListComponent, {});
  }

  onJoin(): void {
    this.matDialog.open(JoinListComponent, {});
  }

  onCreateProduct(): void {
    this.matDialog.open(CreateProductComponent, {});
  }

  onCreateCategory(): void {
    this.matDialog.open(CreateCategoryComponent, {});
  }

  onList(list: ListGetResponse): void {
    this.listViewService.changeListData(list);
  }
}
