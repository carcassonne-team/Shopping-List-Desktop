import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  categories: any = [];
  name = '';
  id = '';

  constructor(
    private matDialog: MatDialog,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productService.getCategories()
      .then(response => {
        this.categories = response as [];
        console.log(this.categories);
      });

  }

  onCreate(): void {
    this.productService.postProduct(this.name, this.id);
  }

  onClose(): void {
    this.matDialog.closeAll();
  }
}
