import {Component, OnInit} from '@angular/core';
import {SignInRequest} from "../../../models/sign-in-request";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true
  signInRequest: SignInRequest = new SignInRequest("", "")

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

  }

  onLogin() {
    this.authenticationService.logIn(this.signInRequest)
  }

}
