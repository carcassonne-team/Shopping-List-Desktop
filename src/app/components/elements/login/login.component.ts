import {Component, OnInit} from '@angular/core';
import {SignInRequest} from '../../../models/SignInRequest';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  signInRequest: SignInRequest = new SignInRequest('', '');

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

  }

  onLogin(): void {
    this.authenticationService.logIn(this.signInRequest);
  }

}
