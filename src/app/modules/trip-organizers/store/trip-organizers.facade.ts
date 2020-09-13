import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@Models/store.model';
import { Trip } from '@Models/trip.model';

import { getAllTrips, setPendingState } from './trip-organizers.actions';
import { tripOrganizersSelectors } from './trip-organizers.selectors';

@Injectable()
export class TripOrganizersFacade {
  public allTrips$: Observable<Trip[]> = this.store.pipe(select(tripOrganizersSelectors.selectTripOrganizersAllTrips));
  public tripOrganizersPending$: Observable<boolean> = this.store.pipe(select(tripOrganizersSelectors.selectTripOrganizersPending));

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public setPendingState(isPending: boolean): void {
    this.store.dispatch(setPendingState({isPending}));
  }

  public getAllTrips(): void {
    this.store.dispatch(getAllTrips());
  }
}
