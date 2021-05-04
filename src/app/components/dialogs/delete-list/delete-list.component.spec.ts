import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteListComponent } from './delete-list.component';
import {MaterialModule} from '../../../material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from '../../../services/authentication.service';
import {ListViewService} from '../../../services/list-view.service';

describe('DeleteListComponent', () => {
  let component: DeleteListComponent;
  let fixture: ComponentFixture<DeleteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [ListViewService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
