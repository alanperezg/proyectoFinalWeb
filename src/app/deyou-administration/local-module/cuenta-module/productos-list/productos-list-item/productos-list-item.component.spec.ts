import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosListItemComponent } from './productos-list-item.component';

describe('ProductosListItemComponent', () => {
  let component: ProductosListItemComponent;
  let fixture: ComponentFixture<ProductosListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
