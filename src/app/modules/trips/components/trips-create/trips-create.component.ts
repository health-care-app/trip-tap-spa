import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Calendar } from 'primeng/calendar';

import { CALENDAR_LOCALE } from '@Consts/calendar-locale.const';
import { CURRENCY_OPTIONS } from '@Consts/currency-options.const';
import { REGEX } from '@Consts/regex.const';
import { TAG_OPTIONS } from '@Consts/tag-options.const';
import { TRIP_LEVEL_OPTIONS } from '@Consts/trip-level-options.model';
import { Currencies } from '@Enums/currencies.enum';
import { TripLevels } from '@Enums/trip-levels.enum';
import { MultiSelectFieldComponent } from '@Form/components/multi-select-field/multi-select-field.component';
import { FieldsNames } from '@Form/enums/field-names.enum';
import { CalendarLocale } from '@Models/calendar-locale.model';
import { DropdownOption, MultiSelectOption, Option } from '@Models/option.model';
import { DurationService } from '@Services/duration.service';
import { LocalizationService } from '@Services/localization.service';
import { ValidatorsService } from '@Services/validators.service';

import { CreateTrip } from '../../models/create-trip.model';
import { TripsFacade } from '../../store/trips.facade';

@Component({
  selector: 'trip-trips-create',
  templateUrl: './trips-create.component.html',
  styleUrls: ['./trips-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsCreateComponent implements OnInit {
  public selectedDates: string = '';
  public minDuration: number = 0.5;
  public maxDuration: number = 12;
  public selectedDuration: string = '';
  public startTimeMinDate: Date = moment().startOf('date').toDate();
  public startTimeMaxDate: Date = moment().endOf('date').toDate();
  public endTimeMinDate: Date = moment().startOf('date').toDate();
  public endTimeMaxDate: Date = moment().add(this.maxDuration, 'hours').toDate();
  public selectedLevelOption: DropdownOption<TripLevels> = null;
  public createTripForm: FormGroup = null;
  public tagOptions: MultiSelectOption<string>[] = TAG_OPTIONS.map((tagOption: Option<string>): MultiSelectOption<string> => ({
    label: tagOption.label,
    value: { ...tagOption },
  }));

  public readonly currencyOptions: DropdownOption<Currencies>[] = CURRENCY_OPTIONS;
  public readonly tripLevelOptions: DropdownOption<TripLevels>[] = TRIP_LEVEL_OPTIONS;
  public readonly availableDatesMinDate: Date = moment().toDate();
  public readonly calendarLocale: CalendarLocale = CALENDAR_LOCALE[this.localizationService.getLanguage()];
  public readonly fieldsNames: typeof FieldsNames = FieldsNames;

  @ViewChild(Calendar) private readonly calendar: Calendar;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly tripsFacade: TripsFacade,
    private readonly durationService: DurationService,
    private readonly localizationService: LocalizationService,
  ) {
  }

  public ngOnInit(): void {
    const newDuration: number = moment(this.endTimeMinDate).diff(moment(this.endTimeMinDate), 'hours', true);

    this.createTripForm = this.initializeCreateTripForm();
    this.selectedLevelOption = this.getTripLevelOption();

    this.createTripForm.get(FieldsNames.Duration).valueChanges
      .subscribe((duration: number): void => {
        this.selectedDuration = this.durationService.getHourDuration(duration);
      });

    this.createTripForm.get(FieldsNames.Duration).patchValue(newDuration);
  }

  public onCalendarClose(): void {
    const availableDates: Date[] = this.createTripForm.get(FieldsNames.AvailableDates).value;

    this.selectedDates = (availableDates || [])
      .sort((currentDate: Date, nextDate: Date): number => currentDate.valueOf() - nextDate.valueOf())
      .map((availableDate: Date): string => moment(availableDate).format('DD.MM'))
      .join(', ');
  }

  public onFromTimeClose(): void {
    const durationFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.Duration);
    const startTimeFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.StartTime);
    const endTimeFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.EndTime);

    this.endTimeMinDate = moment(startTimeFormControl.value).toDate();
    this.endTimeMaxDate = moment(startTimeFormControl.value).add(this.maxDuration, 'hours').toDate();

    if (moment(this.endTimeMinDate).diff(moment(endTimeFormControl.value), 'minutes') >= 0) {
      durationFormControl.patchValue(0);
      endTimeFormControl.patchValue(this.endTimeMinDate);
    }

    if (moment(endTimeFormControl.value).diff(moment(this.endTimeMaxDate), 'minutes') >= 0) {
      durationFormControl.patchValue(0);
      endTimeFormControl.patchValue(this.endTimeMaxDate);
    }
  }

  public onToTimeClose(): void {
    const durationFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.Duration);
    const startTimeFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.StartTime);
    const endTimeFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.EndTime);
    const duration: number = moment(endTimeFormControl.value).diff(moment(startTimeFormControl.value), 'hours', true);

    durationFormControl.patchValue(duration);
  }

  public onDurationChange(): void {
    const durationFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.Duration);
    const startTimeFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.StartTime);
    const endTimeFormControl: FormControl = <FormControl>this.createTripForm.get(FieldsNames.EndTime);

    endTimeFormControl.patchValue(moment(startTimeFormControl.value).add(durationFormControl.value, 'hours').toDate());
  }

  public onLevelChange(): void {
    this.selectedLevelOption = this.getTripLevelOption();
  }

  public upload(files: File[]): void {
    this.createTripForm.get(FieldsNames.Image).patchValue(files[0]);
  }

  public createTrip(createTripForm: CreateTrip): void {
    this.tripsFacade.createTrip(createTripForm);
  }

  public closeCalendar(): void {
    this.calendar.hideOverlay();
  }

  private initializeCreateTripForm(): FormGroup {
    return this.formBuilder.group({
      [FieldsNames.Image]: [ '', [ Validators.required ] ],
      [FieldsNames.Name]: [ '', [ Validators.required, Validators.pattern(REGEX.name) ] ],
      [FieldsNames.Location]: [ '', [ Validators.required ] ],
      [FieldsNames.Tags]: [ [], [ MultiSelectFieldComponent.required ] ],
      [FieldsNames.Price]: [ 0, [ Validators.required, Validators.min(1) ] ],
      [FieldsNames.Currency]: [ this.currencyOptions[0].value ],
      [FieldsNames.Including]: [ '' ],
      [FieldsNames.AvailableDates]: [ '', [ Validators.required ] ],
      [FieldsNames.StartTime]: [ this.startTimeMinDate, [ Validators.required ] ],
      [FieldsNames.EndTime]: [ this.endTimeMinDate ],
      [FieldsNames.Duration]: [ 0, [ ValidatorsService.minHoursDuration(this.minDuration) ] ],
      [FieldsNames.Level]: [ 0 ],
      [FieldsNames.DogFriendly]: [ false ],
      [FieldsNames.Comments]: [ '' ],
      [FieldsNames.Amenities]: [ '' ],
      [FieldsNames.Materials]: [ '' ],
      [FieldsNames.Description]: [ '' ],
    });
  }

  private getTripLevelOption(): DropdownOption<TripLevels> {
    return this.tripLevelOptions[this.createTripForm.get(FieldsNames.Level).value];
  }
}
