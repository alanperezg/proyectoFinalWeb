import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaModuleComponent } from './cuenta-module.component';

describe('CuentaModuleComponent', () => {
  let component: CuentaModuleComponent;
  let fixture: ComponentFixture<CuentaModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
