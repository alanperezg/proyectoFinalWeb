import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeyouAdministrationLoginComponent } from './deyou-administration-login.component';

describe('DeyouAdministrationLoginComponent', () => {
  let component: DeyouAdministrationLoginComponent;
  let fixture: ComponentFixture<DeyouAdministrationLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeyouAdministrationLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeyouAdministrationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
