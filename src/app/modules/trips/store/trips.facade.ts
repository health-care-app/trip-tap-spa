import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@Models/store.model';

import { Trip } from '../models/trip.model';
import { getAllTrips, getTrip, setPendingState } from './trips.actions';
import { tripsSelectors } from './trips.selectors';

@Injectable()
export class TripsFacade {
  public trips$: Observable<Trip> = this.store.pipe(select(tripsSelectors.selectTrip));
  public tripsList$: Observable<Trip[]> = this.store.pipe(select(tripsSelectors.selectTripsList));
  public tripsPending$: Observable<boolean> = this.store.pipe(select(tripsSelectors.selectTripsPending));

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public setPendingState(isPending: boolean): void {
    this.store.dispatch(setPendingState({isPending}));
  }

  public getTripsList(active?: boolean): void {
    this.store.dispatch(getAllTrips({active}));
  }

  public getTrip(tripId: number): void {
    this.store.dispatch(getTrip({tripId}));
  }
}
