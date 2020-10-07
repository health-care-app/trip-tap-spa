import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { MultiSelect } from 'primeng/multiselect';

import { DataName } from '@Models/data-name.model';
import { MultiSelectOption, MultiSelectOptionValue } from '@Models/option.model';

@Component({
  selector: 'trip-multi-select-field',
  templateUrl: './multi-select-field.component.html',
  styleUrls: ['./multi-select-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // tslint:disable-next-line: no-forward-ref
      useExisting: forwardRef((): typeof MultiSelectFieldComponent => MultiSelectFieldComponent),
      multi: true,
    },
  ],
})
export class MultiSelectFieldComponent implements AfterViewInit {
  @Input() public labelPrefix: string = '';
  @Input() public canAddNew: boolean = false;
  @Input() public options: MultiSelectOption<string>[];
  @Input() public dataName: DataName = {
    singular: '',
    plural: '',
  };

  public value: string[] = [];
  public selectedOptions: MultiSelectOptionValue<string>[] = [];
  public isOptionsPanelVisible: boolean = false;

  @ViewChild(MultiSelect, {static: true}) public multiSelect: MultiSelect;

  public constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  public ngAfterViewInit(): void {
    if (!this.value || !this.value.length) {
      this.multiSelect.filled = false;
      this.changeDetectorRef.detectChanges();
    }
  }

  // tslint:disable-next-line: no-empty prefer-function-over-method
  public onChange(_value: string[]): void {
  }

  // tslint:disable-next-line: no-empty prefer-function-over-method
  public onTouch(): void {
  }

  public writeValue(value: string[]): void {
    this.value = value;
    this.selectedOptions = this.options
      .map((option: MultiSelectOption<string>): MultiSelectOptionValue<string> => option.value)
      .filter((option: MultiSelectOptionValue<string>): boolean => this.value.includes(option.value));
  }

  public registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public onPanelShow(): void {
    this.isOptionsPanelVisible = true;
    (<HTMLInputElement>this.multiSelect.filterInputChild.nativeElement).addEventListener('keypress', this.onInputEvent.bind(this));
  }

  public onPanelHide(): void {
    this.isOptionsPanelVisible = false;
    (<HTMLInputElement>this.multiSelect.filterInputChild.nativeElement).removeEventListener('keypress', this.onInputEvent.bind(this));
  }

  public change(): void {
    this.value = this.selectedOptions.map((selectedOption: MultiSelectOptionValue<string>): string => selectedOption.value);

    this.onTouch();
    this.onChange(this.value);
  }

  public removeElement(event: Event, elementValue: string): void {
    event.preventDefault();

    const newValue: string[] = this.value.filter((element: string): boolean => element !== elementValue);

    this.onTouch();
    this.value = newValue;
    this.onChange(newValue);
    this.selectedOptions = this.selectedOptions
      .filter((element: MultiSelectOptionValue<string>): boolean => element.value !== elementValue);
  }

  private onInputEvent(event: KeyboardEvent): void {
    if (event.code === 'Enter' && this.canAddNew) {
      const inputElement: HTMLInputElement = <HTMLInputElement>this.multiSelect.filterInputChild.nativeElement;
      const isContainOption: boolean = !!this.options.find((option: MultiSelectOption<string>): boolean => (
        option.value.value === inputElement.value
      ));

      event.preventDefault();

      if (!isContainOption) {
        const newOption: MultiSelectOption<string> = {
          label: inputElement.value,
          value: {
            label: inputElement.value,
            value: inputElement.value,
          },
          selected: true,
        };

        this.options = [ ...this.options, newOption ];

        this.changeDetectorRef.markForCheck();
      }
    }
  }

  public static required(control: AbstractControl): ValidationErrors {
    const validationError: ValidationErrors = { required: true };

    if (control.value && control.value.length > 0) {
      return null;
    }

    return validationError;
  }
}
