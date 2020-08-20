import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { FieldErrors } from '../../enums/field-errors.enum';

@Component({
  selector: 'trip-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldErrorsComponent {
  public get fieldControl(): AbstractControl {
    return this.control;
  }

  @Input() public set fieldControl(control: AbstractControl) {
    this.control = control;

    if (this.markAsTouched) {
      this.control.markAsTouched();
    }
  }
  @Input() public label: string;
  @Input() public errorsTranslationPath: string = 'FORM.ERRORS';
  @Input() public markAsTouched: boolean = false;

  public fieldErrors: typeof FieldErrors = FieldErrors;

  private control: AbstractControl;
}
