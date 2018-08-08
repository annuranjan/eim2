import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaaaaTestComponent } from './aaaaaa-test.component';

describe('AaaaaaTestComponent', () => {
  let component: AaaaaaTestComponent;
  let fixture: ComponentFixture<AaaaaaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaaaaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaaaaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
