import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {MatDialog} from '@angular/material/dialog';
import {ListService} from '../../../services/list.service';
import {ListViewService} from '../../../services/list-view.service';

@Component({
  selector: 'app-add-product-to-list',
  templateUrl: './add-product-to-list.component.html',
  styleUrls: ['./add-product-to-list.component.scss']
})
export class AddProductToListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private listViewService: ListViewService,
    private listService: ListService,
    private matDialog: MatDialog
  ) {
  }

  categories: any = [];
  products: any = [];
  id = '';
  disabled = false;
  productID = '';
  listID = '';

  ngOnInit(): void {
    this.listViewService.currentListData.subscribe(
      data => {
        this.listID = data.id.toString();
      }
    );
    this.productService.getCategories()
      .then(response => this.categories = response);
  }

  onSelect(): void {
    this.productService.getProductsOfCategory(this.id)
      .then(
        response => {
          this.products = response;
          this.disabled = true;
        }
      );
  }

  onAdd(): void {
    this.listService.postProductToList(this.listID, this.productID);
  }

  onClose(): void {
    this.matDialog.closeAll();
  }
}
