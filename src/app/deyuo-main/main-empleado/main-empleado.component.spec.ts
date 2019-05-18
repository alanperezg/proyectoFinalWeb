import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmpleadoComponent } from './main-empleado.component';

describe('MainEmpleadoComponent', () => {
  let component: MainEmpleadoComponent;
  let fixture: ComponentFixture<MainEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
