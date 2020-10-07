import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DurationService } from '@Services/duration.service';

import { FieldErrors } from '../../enums/field-errors.enum';

@Component({
  selector: 'trip-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldErrorsComponent implements OnDestroy {
  public get hourDuration(): string {
    return this.durationService.getHourDuration(this.control.errors[FieldErrors.MinHoursDuration][FieldErrors.MinHoursDuration]);
  }
  public get fieldControl(): AbstractControl {
    return this.control;
  }

  @Input() public set fieldControl(control: AbstractControl) {
    this.control = control;

    this.controlValueChangeSubscription = control.valueChanges.subscribe((): void => {
      this.changeDetectorRef.markForCheck();
    });

    if (this.markAsTouched) {
      this.control.markAsTouched();
    }
  }
  @Input() public label: string;
  @Input() public errorsTranslationPath: string = 'FORM.ERRORS';
  @Input() public markAsTouched: boolean = false;

  public fieldErrors: typeof FieldErrors = FieldErrors;

  private control: AbstractControl;
  private controlValueChangeSubscription: Subscription;

  public constructor(
    private readonly durationService: DurationService,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  public ngOnDestroy(): void {
    this.controlValueChangeSubscription.unsubscribe();
  }
}
