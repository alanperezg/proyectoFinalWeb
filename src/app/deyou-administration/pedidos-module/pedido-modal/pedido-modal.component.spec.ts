import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoModalComponent } from './pedido-modal.component';

describe('PedidoModalComponent', () => {
  let component: PedidoModalComponent;
  let fixture: ComponentFixture<PedidoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
