import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoModalProductosListComponent } from './add-producto-modal-productos-list.component';

describe('AddProductoModalProductosListComponent', () => {
  let component: AddProductoModalProductosListComponent;
  let fixture: ComponentFixture<AddProductoModalProductosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductoModalProductosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoModalProductosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
