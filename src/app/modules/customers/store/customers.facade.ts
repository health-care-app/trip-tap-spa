import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '@Models/store.model';

import { Trip } from '../models/trip.model';
import { getAllTrips, setPendingState } from './customers.actions';
import { customersSelectors } from './customers.selectors';

@Injectable({ providedIn: 'root' })
export class CustomersFacade {
  public allTrips$: Observable<Trip[]> = this.store.pipe(select(customersSelectors.selectCustomersAllTrips));
  public customersPending$: Observable<boolean> = this.store.pipe(select(customersSelectors.selectCustomersPending));

  public constructor(
    private readonly store: Store<State>,
  ) {
  }

  public setPendingState(isPending: boolean): void {
    this.store.dispatch(setPendingState({isPending}));
  }

  public getAllTrips(active?: boolean): void {
    this.store.dispatch(getAllTrips({active}));
  }
}
