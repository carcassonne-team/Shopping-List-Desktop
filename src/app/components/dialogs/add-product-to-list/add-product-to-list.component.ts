import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-add-product-to-list',
  templateUrl: './add-product-to-list.component.html',
  styleUrls: ['./add-product-to-list.component.scss']
})
export class AddProductToListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    console.log(this.productService.getProducts());
  }

  onAdd(): void {

  }

  onClose(): void {

  }
}
