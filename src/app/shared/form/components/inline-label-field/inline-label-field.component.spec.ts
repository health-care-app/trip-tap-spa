import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineLabelFieldComponent } from './inline-label-field.component';

describe('InlineLabelFieldComponent', (): void => {
  let component: InlineLabelFieldComponent;
  let fixture: ComponentFixture<InlineLabelFieldComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ InlineLabelFieldComponent ],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(InlineLabelFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
