import {Component, OnInit} from '@angular/core';
import {ListService} from '../../../services/list.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateListComponent} from '../../dialogs/create-list/create-list.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private listService: ListService,
    private matDialog: MatDialog
  ) {
  }

  lists: Array<any> = [];

  ngOnInit(): void {
    this.lists = [];
    this.listService.getLists()
      .then(lists => {
          this.lists.push(lists);
        }
      );
  }

  onCreate(): void {
    this.matDialog.open(CreateListComponent);
  }


}
