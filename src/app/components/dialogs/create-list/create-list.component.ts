import {Component, OnInit} from '@angular/core';
import {ListCreateRequest} from '../../../models/ListCreateRequest';
import {MatDialog} from '@angular/material/dialog';
import {ListService} from '../../../services/list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  listCreateRequest = new ListCreateRequest('');

  constructor(
    private matDialog: MatDialog,
    private listService: ListService
  ) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.listService.postList(this.listCreateRequest);
  }

  onClose(): void {
    this.matDialog.closeAll();
  }
}
