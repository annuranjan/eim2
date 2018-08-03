import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeMainPageComponent } from './add-employee-main-page.component';

describe('AddEmployeeMainPageComponent', () => {
  let component: AddEmployeeMainPageComponent;
  let fixture: ComponentFixture<AddEmployeeMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
