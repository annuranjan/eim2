import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGeneratorComponent } from './panel-generator.component';

describe('PanelGeneratorComponent', () => {
  let component: PanelGeneratorComponent;
  let fixture: ComponentFixture<PanelGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
