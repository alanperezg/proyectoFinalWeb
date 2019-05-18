import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeyouAdministrationComponent } from './deyou-administration.component';

describe('DeyouAdministrationComponent', () => {
  let component: DeyouAdministrationComponent;
  let fixture: ComponentFixture<DeyouAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeyouAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeyouAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
