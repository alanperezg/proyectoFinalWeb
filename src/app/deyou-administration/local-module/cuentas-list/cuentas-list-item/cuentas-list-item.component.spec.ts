import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasListItemComponent } from './cuentas-list-item.component';

describe('CuentasListItemComponent', () => {
  let component: CuentasListItemComponent;
  let fixture: ComponentFixture<CuentasListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
