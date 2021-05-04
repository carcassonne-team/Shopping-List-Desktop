import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthenticationService} from '../../../services/authentication.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';
import {MaterialModule} from '../../../material.module';
import {NgModule} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ LoginComponent ],
        imports: [MaterialModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
        providers: [AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
