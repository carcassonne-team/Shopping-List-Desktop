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
    this.http.get(this.baseURL + 'products').toPromise()
      .then(response => {
        products = response;
      })
      .catch(error => {
        this.snackBar.open('Products loading failed.', 'Close');
      });
    return products;
  }
}
