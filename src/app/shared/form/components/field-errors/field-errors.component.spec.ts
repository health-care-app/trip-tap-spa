import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl } from '@angular/forms';

import { FieldErrorsComponent } from './field-errors.component';

describe('FieldErrorsComponent', (): void => {
  let component: FieldErrorsComponent;
  let fixture: ComponentFixture<FieldErrorsComponent>;
  const mockedFieldControl: FormControl = new FormBuilder().control('');

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ FieldErrorsComponent ],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(FieldErrorsComponent);
    component = fixture.componentInstance;
    component.fieldControl = mockedFieldControl;

    fixture.detectChanges();
  });

  describe('fieldControl setter', (): void => {
    it('should set control property', (): void => {
      component.fieldControl = mockedFieldControl;

      expect(component.fieldControl).toEqual(mockedFieldControl);
    });

    it('shouldn\'t call control.markAsTouched', (): void => {
      const markAsTouchedSpy: jasmine.Spy = spyOn(mockedFieldControl, 'markAsTouched');
      component.markAsTouched = false;

      component.fieldControl = mockedFieldControl;

      expect(markAsTouchedSpy).not.toHaveBeenCalled();
    });

    it('should call control.markAsTouched', (): void => {
      const markAsTouchedSpy: jasmine.Spy = spyOn(mockedFieldControl, 'markAsTouched');
      component.markAsTouched = true;

      component.fieldControl = mockedFieldControl;

      expect(markAsTouchedSpy).toHaveBeenCalledTimes(1);
    });
  });
});
