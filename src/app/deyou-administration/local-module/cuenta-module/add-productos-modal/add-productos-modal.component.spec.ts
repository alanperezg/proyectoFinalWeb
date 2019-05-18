import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductosModalComponent } from './add-productos-modal.component';

describe('AddProductosModalComponent', () => {
  let component: AddProductosModalComponent;
  let fixture: ComponentFixture<AddProductosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
