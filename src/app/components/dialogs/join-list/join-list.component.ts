import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-join-list',
  templateUrl: './join-list.component.html',
  styleUrls: ['./join-list.component.scss']
})
export class JoinListComponent implements OnInit {
  code = '';

  constructor(
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.matDialog.closeAll();
  }

  onJoin(): void {

  }
}
