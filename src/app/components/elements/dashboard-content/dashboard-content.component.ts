import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListViewService} from '../../../services/list-view.service';
import {ListGetResponse} from '../../../models/ListGetResponse';
import {MatDialog} from '@angular/material/dialog';
import {DeleteListComponent} from '../../dialogs/delete-list/delete-list.component';
import {AddProductToListComponent} from '../../dialogs/add-product-to-list/add-product-to-list.component';
import {ListService} from '../../../services/list.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit, OnDestroy {
  constructor(
    private listViewService: ListViewService,
    private matDialog: MatDialog,
    private listService: ListService,
  ) {
  }

  list: ListGetResponse = new ListGetResponse(0, '', '', 0, []);

  ngOnInit(): void {
    this.listViewService.currentListData.subscribe(
      data => {
        this.list = data;
        console.log('current list: ', data);
      }
    );
  }

  ngOnDestroy(): void {
  }

  checkIfChosen(): boolean {
    return this.list.name === '';
  }

  onBin(): void {
    this.matDialog.open(DeleteListComponent);
  }

  onAdd(): void {
    this.matDialog.open(AddProductToListComponent);
  }

  onDelete(id: string): void {
    this.listService.deleteProductFromList(id);
  }
}

