import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoModalProductosListItemComponent } from './pedido-modal-productos-list-item.component';

describe('PedidoModalProductosListItemComponent', () => {
  let component: PedidoModalProductosListItemComponent;
  let fixture: ComponentFixture<PedidoModalProductosListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoModalProductosListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoModalProductosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
