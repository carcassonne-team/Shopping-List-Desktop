import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentComponent } from './dashboard-content.component';
import {MaterialModule} from '../../../material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from '../../../services/authentication.service';
import {ListViewService} from '../../../services/list-view.service';

describe('DashboardContentComponent', () => {
  let component: DashboardContentComponent;
  let fixture: ComponentFixture<DashboardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [ListViewService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
