import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { TranslateTestingModule } from '@Specs/translate.spec';

import { FieldErrorsComponent } from '../field-errors/field-errors.component';
import { ReactiveFieldComponent } from './field.component';

describe('ReactiveFieldComponent', (): void => {
  let component: ReactiveFieldComponent;
  let fixture: ComponentFixture<ReactiveFieldComponent>;

  const initializeTestingComponent: (isVisible: boolean, fieldClass?: string) => void = (isVisible: boolean, fieldClass: string): void => {
    fixture = TestBed.createComponent(ReactiveFieldComponent);
    component = fixture.componentInstance;
    component.isVisible = isVisible;
    component.fieldClass = fieldClass;

    fixture.detectChanges();
  };

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule,
      ],
      declarations: [
        ReactiveFieldComponent,
        MockComponent(FieldErrorsComponent),
      ],
    })
    .compileComponents();
  }));

  describe('div', (): void => {
    let divDebugElement: DebugElement = null;

    it('shouldn\'t be empty', (): void => {
      initializeTestingComponent(true);
      divDebugElement = fixture.debugElement.query(By.css('.form-item'));

      expect(divDebugElement).not.toBeNull();
    });

    it('should be empty', (): void => {
      initializeTestingComponent(false);
      divDebugElement = fixture.debugElement.query(By.css('.form-item'));

      expect(divDebugElement).toBeNull();
    });

    it('should have class name according to the [fieldClass] input', (): void => {
      initializeTestingComponent(true, 'expectedFieldClass');
      divDebugElement = fixture.debugElement.query(By.css('.form-item'));

      expect(divDebugElement.nativeElement.children[0].classList).toContain('expectedFieldClass');
    });
  });
});
