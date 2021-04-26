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
        },
        error => {
          this.snackBar.open(error.message, 'Close');
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
        },
        error => {
          this.snackBar.open(error.message, 'Close');
        }
      );
  }
}
