import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ListService} from '../../../services/list.service';
import {ListViewService} from '../../../services/list-view.service';
import {ListGetResponse} from '../../../models/ListGetResponse';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.scss']
})
export class DeleteListComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private listService: ListService,
    private listViewService: ListViewService
  ) {
  }

  list: ListGetResponse = new ListGetResponse(0, '', '', 0, []);

  ngOnInit(): void {
    this.listViewService.currentListData.subscribe(
      data => {
        this.list = data;
        console.log(data);
      }
    );
  }

  onDismiss(): void {
    this.matDialog.closeAll();
  }

  onAccept(): void {
    this.listService.deleteList(this.list.id.toString());
  }

}
