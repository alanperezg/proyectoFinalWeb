import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeyuoMainComponent } from './deyuo-main.component';

describe('DeyuoMainComponent', () => {
  let component: DeyuoMainComponent;
  let fixture: ComponentFixture<DeyuoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeyuoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeyuoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});