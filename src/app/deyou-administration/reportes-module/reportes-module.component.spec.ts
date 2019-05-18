import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesModuleComponent } from './reportes-module.component';

describe('ReportesModuleComponent', () => {
  let component: ReportesModuleComponent;
  let fixture: ComponentFixture<ReportesModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
