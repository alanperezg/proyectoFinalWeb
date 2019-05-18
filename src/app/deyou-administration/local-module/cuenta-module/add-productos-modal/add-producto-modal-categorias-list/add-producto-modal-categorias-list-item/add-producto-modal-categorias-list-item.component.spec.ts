import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoModalCategoriasListItemComponent } from './add-producto-modal-categorias-list-item.component';

describe('AddProductoModalCategoriasListItemComponent', () => {
  let component: AddProductoModalCategoriasListItemComponent;
  let fixture: ComponentFixture<AddProductoModalCategoriasListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductoModalCategoriasListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoModalCategoriasListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
