import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TripOrganizersFacade } from '../../store/trip-organizers.facade';

@Component({
  selector: 'trip-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsListComponent implements OnInit {

  public constructor(
    private readonly tripOrganizersFacade: TripOrganizersFacade,
  ) {
  }

  public ngOnInit(): void {
    this.tripOrganizersFacade.getAllTrips();
  }
}
