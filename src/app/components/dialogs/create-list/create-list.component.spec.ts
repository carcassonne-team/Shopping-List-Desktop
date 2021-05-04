import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListComponent } from './create-list.component';
import {MaterialModule} from '../../../material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from '../../../services/authentication.service';

describe('CreateListComponent', () => {
  let component: CreateListComponent;
  let fixture: ComponentFixture<CreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
