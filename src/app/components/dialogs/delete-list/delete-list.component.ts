import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.scss']
})
export class DeleteListComponent implements OnInit {
  constructor(
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  onDismiss(): void {
    this.matDialog.closeAll();
  }

  onAccept(): void {

  }

}
