import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectFieldComponent } from './multi-select-field.component';

describe('MultiSelectFieldComponent', (): void => {
  let component: MultiSelectFieldComponent;
  let fixture: ComponentFixture<MultiSelectFieldComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectFieldComponent ],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(MultiSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
