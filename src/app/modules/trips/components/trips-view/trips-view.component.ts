import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { filter } from 'rxjs/operators';

import { CURRENCY_OPTIONS } from '@Consts/currency-options.const';
import { Currencies } from '@Enums/currencies.enum';
import { Option } from '@Models/option.model';
import { DisplayTrip, Trip } from '@Modules/trips/models/trip.model';
import { DurationService } from '@Services/duration.service';

import { TripsFacade } from '../../store/trips.facade';

type CurrencyOption = Option<Currencies>;

@Component({
  selector: 'trip-trips-view',
  templateUrl: './trips-view.component.html',
  styleUrls: ['./trips-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsViewComponent implements OnInit {
  public trip: DisplayTrip = null;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly tripsFacade: TripsFacade,
    private readonly durationService: DurationService,
  ) {
  }

  public ngOnInit(): void {
    this.tripsFacade.trip$
      .pipe(filter((trip: Trip): boolean => !!trip))
      .subscribe((trip: Trip): void => {
        const currencyOption: CurrencyOption = CURRENCY_OPTIONS.find((option: CurrencyOption): boolean => option.value === trip.currency);

        this.trip = {
          ...trip,
          currency: <Currencies>currencyOption.label || trip.currency,
          availableDates: trip.availableDates.map((availableDate: number): string => moment.unix(availableDate).format('DD.MM')),
          startTime: moment.unix(trip.startTime).format('hha'),
          duration: this.durationService.getHourDuration(trip.duration),
        };
      });
  }
}
