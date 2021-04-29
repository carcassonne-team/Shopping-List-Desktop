import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SnackBar} from '../helpers/snack-bar.helper';
import {MatDialog} from '@angular/material/dialog';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(
    private http: HttpClient,
    private snackBar: SnackBar,
    private matDialog: MatDialog
  ) {
  }

  token = localStorage.getItem('token');
  baseURL = 'http://projekt.shoplist.site:8080/api/';

  getProducts(): object {
    let products: object = [];
    this.http.get(this.baseURL + 'products', {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(response => {
        products = response;
      })
      .catch(error => {
        this.snackBar.open('Products loading failed.', 'Close');
      });
    return products;
  }

  async getCategories(): Promise<object> {
    let categories: object = [];
    await this.http.get(this.baseURL + 'categories', {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(response => {
        categories = response;
      })
      .catch(error => {
        this.snackBar.open('Category creation failed.', 'Close');
      });
    return categories;
  }

  postCategory(name: string): void {
    this.http.post(this.baseURL + 'categories/create', {name}, {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(response => {
        console.log(response);
        this.matDialog.closeAll();
      })
      .catch(error => {
        this.snackBar.open('Category creation failed.', 'Close');
      });
  }

  postProduct(name: string, category_id: string): void {
    this.http.post(this.baseURL + 'products/create', {name, category_id}, {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(response => {
        console.log(response);
        this.matDialog.closeAll();
      })
      .catch(error => {
        this.snackBar.open('Product creation failed.', 'Close');
      });
  }
}
