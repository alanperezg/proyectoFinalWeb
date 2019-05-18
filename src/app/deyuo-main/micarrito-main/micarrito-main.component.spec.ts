import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicarritoMainComponent } from './micarrito-main.component';

describe('MicarritoMainComponent', () => {
  let component: MicarritoMainComponent;
  let fixture: ComponentFixture<MicarritoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicarritoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicarritoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
