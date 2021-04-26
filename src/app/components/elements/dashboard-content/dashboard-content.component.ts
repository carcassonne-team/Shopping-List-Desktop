import {Component, OnInit} from '@angular/core';
import {ListViewService} from '../../../services/list-view.service';
import {ListGetResponse} from '../../../models/ListGetResponse';
import {MatDateFormats} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteListComponent} from '../../dialogs/delete-list/delete-list.component';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  constructor(
    private listViewService: ListViewService,
    private matDialog: MatDialog
  ) {
  }

  list: ListGetResponse = new ListGetResponse(0, '', '', 0, []);

  ngOnInit(): void {
    this.listViewService.currentListData.subscribe(
      data => this.list = data
    );
  }

  checkIfChosen(): boolean {
    return this.list.name === '';
  }

  onBin(): void {
    this.matDialog.open(DeleteListComponent);
  }
}

