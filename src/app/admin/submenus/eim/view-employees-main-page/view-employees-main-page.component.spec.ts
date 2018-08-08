import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeesMainPageComponent } from './view-employees-main-page.component';

describe('ViewEmployeesMainPageComponent', () => {
  let component: ViewEmployeesMainPageComponent;
  let fixture: ComponentFixture<ViewEmployeesMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeesMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
