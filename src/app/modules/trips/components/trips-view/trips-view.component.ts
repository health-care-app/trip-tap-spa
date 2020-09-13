import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TripsFacade } from '../../store/trips.facade';

@Component({
  selector: 'trip-trips-view',
  templateUrl: './trips-view.component.html',
  styleUrls: ['./trips-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsViewComponent implements OnInit {

  public constructor(
    private readonly tripsFacade: TripsFacade,
  ) {
  }

  public ngOnInit(): void {
    this.tripsFacade.getTrip(1);
  }
}
