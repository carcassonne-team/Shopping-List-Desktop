import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthenticationService} from '../../../services/authentication.service';
import { HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../../../material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [MaterialModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [AuthenticationService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
