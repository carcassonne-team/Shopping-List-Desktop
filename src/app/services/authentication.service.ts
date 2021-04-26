import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SnackBar} from '../helpers/snack-bar.helper';
import {SignInRequest} from '../models/SignInRequest';
import {SignUpRequest} from '../models/SignUpRequest';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              public snackBar: SnackBar
  ) {
  }

  baseURL = 'http://projekt.shoplist.site:8080/api/';

  async logIn(signInRequest: SignInRequest): Promise<any> {
    await this.http.post(this.baseURL + 'auth/login', signInRequest).toPromise()
      .then(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.snackBar.open('Successfully signed in!', 'Close');
          this.router.navigate(['d']);
        },
        (error: any) => {
          this.snackBar.open(error.message, 'Close');
        }
      );
  }

  async register(signUpRequest: SignUpRequest): Promise<void> {
    await this.http.post(this.baseURL + 'auth/register', signUpRequest).toPromise()
      .then(
        (response: any) => {
          this.snackBar.open('Successfully signed up!', 'Close');
        },
        (error: any) => {
          this.snackBar.open(error.message, 'Close');
        }
      );
  }

}
