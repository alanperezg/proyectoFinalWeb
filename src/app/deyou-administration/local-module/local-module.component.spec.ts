import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalModuleComponent } from './local-module.component';

describe('LocalModuleComponent', () => {
  let component: LocalModuleComponent;
  let fixture: ComponentFixture<LocalModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
