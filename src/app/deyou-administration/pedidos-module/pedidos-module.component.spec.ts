import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosModuleComponent } from './pedidos-module.component';

describe('PedidosModuleComponent', () => {
  let component: PedidosModuleComponent;
  let fixture: ComponentFixture<PedidosModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
