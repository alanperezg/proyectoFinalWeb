import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoModalProductosListItemComponent } from './add-producto-modal-productos-list-item.component';

describe('AddProductoModalProductosListItemComponent', () => {
  let component: AddProductoModalProductosListItemComponent;
  let fixture: ComponentFixture<AddProductoModalProductosListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductoModalProductosListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoModalProductosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
