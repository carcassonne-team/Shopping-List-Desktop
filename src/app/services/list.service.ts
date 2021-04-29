import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SnackBar} from '../helpers/snack-bar.helper';
import {ListCreateRequest} from '../models/ListCreateRequest';
import {MatDialog} from '@angular/material/dialog';
import {ListGetResponse} from '../models/ListGetResponse';

@Injectable({providedIn: 'root'})
export class ListService {
  constructor(
    private http: HttpClient,
    private snackBar: SnackBar,
    private matDialog: MatDialog
  ) {
  }

  token = localStorage.getItem('token');
  baseURL = 'http://projekt.shoplist.site:8080/api/';

  async getLists(): Promise<Array<ListGetResponse>> {
    let lists: Array<ListGetResponse> = [];
    await this.http.get(this.baseURL + 'lists', {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(
        response => {
          lists = response as Array<ListGetResponse>;
        }
      )
      .catch(
        error => {
          this.snackBar.open('List loading failed,', 'Close');
        }
      );
    return lists;
  }

  async postList(listCreateRequest: ListCreateRequest): Promise<void> {
    await this.http.post(this.baseURL + 'lists/create', listCreateRequest, {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(
        response => {
          console.log(response);
          this.matDialog.closeAll();
          location.reload();
        }
      )
      .catch(
        error => {
          this.snackBar.open('List creating failed.', 'Close');
        }
      );
  }

  deleteList(list_id: string): void {
    this.http.delete(this.baseURL + 'lists/' + list_id, {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(
        response => {
          console.log(response);
          location.reload();
        }
      )
      .catch(
        error => {
          this.snackBar.open('List deleting failed.', 'Close');
        }
      );
  }

  postProductToList(product_list_id: string, product_id: string): void {
    this.http.post(
      this.baseURL + 'list_content/add',
      {product_list_id, product_id},
      {headers: {Authorization: `Bearer ${this.token}`}}
    ).toPromise()
      .then(
        response => {
          console.log(response);
          location.reload();
        }
      )
      .catch(
        error => {
          this.snackBar.open('Adding product to list failed.', 'Close');
        }
      );
  }
}
