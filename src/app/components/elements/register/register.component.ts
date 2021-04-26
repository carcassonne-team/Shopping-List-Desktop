import { Component, OnInit } from '@angular/core';
import {SignUpRequest} from "../../../models/SignUpRequest";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  signUpRequest = new SignUpRequest("","","","")

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.authenticationService.register(this.signUpRequest)
  }

}
