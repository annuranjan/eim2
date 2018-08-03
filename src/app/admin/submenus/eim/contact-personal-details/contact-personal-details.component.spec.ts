import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonalDetailsComponent } from './contact-personal-details.component';

describe('ContactPersonalDetailsComponent', () => {
  let component: ContactPersonalDetailsComponent;
  let fixture: ComponentFixture<ContactPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
