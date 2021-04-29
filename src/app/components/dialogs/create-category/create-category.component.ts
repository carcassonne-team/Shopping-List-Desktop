import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  name = '';

  constructor(
    private matDialog: MatDialog,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log(this.name);
    this.productService.postCategory(this.name);
  }

  onClose(): void {
    this.matDialog.closeAll();
  }
}
