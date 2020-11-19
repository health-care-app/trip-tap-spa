import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ModuleRoutes, TripsRoutes } from '@Enums/routes.enum';

import { Trip } from '../../models/trip.model';
import { TripsFacade } from '../../store/trips.facade';

@Component({
  selector: 'trip-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsListComponent {
  public tripList$: Observable<Trip[]> = this.tripsFacade.tripsList$;

  public constructor(
    private readonly router: Router,
    private readonly tripsFacade: TripsFacade,
  ) {
  }

  public createTrip(): void {
    this.router.navigate([ModuleRoutes.Trips, TripsRoutes.Create]);
  }
}
