import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToListComponent } from './add-product-to-list.component';

describe('AddProductToListComponent', () => {
  let component: AddProductToListComponent;
  let fixture: ComponentFixture<AddProductToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
