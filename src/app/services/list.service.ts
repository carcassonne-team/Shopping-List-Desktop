import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SnackBar} from '../helpers/snack-bar.helper';
import {ListCreateRequest} from '../models/list-create-request';
import {MatDialog} from '@angular/material/dialog';

@Injectable({providedIn: 'root'})
export class ListService {
  constructor(
    private http: HttpClient,
    private snackBar: SnackBar,
    private matDialog: MatDialog
  ) {
  }

  token: string | null = '';
  baseURL = 'http://projekt.shoplist.site:8080/api/';

  async getLists(): Promise<any> {
    this.token = localStorage.getItem('token');
    await this.http.get(this.baseURL + 'lists', {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(
        response => {
          console.log(response);
          return response;
        },
        error => {
          this.snackBar.open(error.message, 'Close');
        }
      );
  }

  async postList(listCreateRequest: ListCreateRequest): Promise<void> {
    await this.http.post(this.baseURL + 'lists/create', listCreateRequest, {headers: {Authorization: `Bearer ${this.token}`}}).toPromise()
      .then(
        response => {
          console.log(response);
          this.matDialog.closeAll();
        },
        error => {
          this.snackBar.open(error.message, 'Close');
        }
      );
  }
}
