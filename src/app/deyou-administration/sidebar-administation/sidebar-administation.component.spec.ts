import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdministationComponent } from './sidebar-administation.component';

describe('SidebarAdministationComponent', () => {
  let component: SidebarAdministationComponent;
  let fixture: ComponentFixture<SidebarAdministationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAdministationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdministationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
