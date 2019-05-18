import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListItemComponent } from './pedidos-list-item.component';

describe('PedidosListItemComponent', () => {
  let component: PedidosListItemComponent;
  let fixture: ComponentFixture<PedidosListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
