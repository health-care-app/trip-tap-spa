import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TripsFacade } from '../../store/trips.facade';

@Component({
  selector: 'trip-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsListComponent implements OnInit {

  public constructor(
    private readonly tripsFacade: TripsFacade,
  ) {
  }

  public ngOnInit(): void {
    this.tripsFacade.getTripsList(true);
  }
}
