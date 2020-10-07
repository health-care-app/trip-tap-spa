import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidatorsService {
  public static minHoursDuration(minDuration: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const validationError: ValidationErrors = { minHoursDuration: { minHoursDuration: minDuration, actual: control.value } };

      if (control.value && control.value >= minDuration) {
        return null;
      }

      return validationError;
    };
  }
}
