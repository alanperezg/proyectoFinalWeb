import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductoModalCategoriasListComponent } from './add-producto-modal-categorias-list.component';

describe('AddProductoModalCategoriasListComponent', () => {
  let component: AddProductoModalCategoriasListComponent;
  let fixture: ComponentFixture<AddProductoModalCategoriasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductoModalCategoriasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoModalCategoriasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
