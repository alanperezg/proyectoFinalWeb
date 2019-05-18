import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaModalComponent } from './cuenta-modal.component';

describe('CuentaModalComponent', () => {
  let component: CuentaModalComponent;
  let fixture: ComponentFixture<CuentaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
