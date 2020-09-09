import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';

import { GetAllTripsProps } from '../models/action-props.model';
import { Trip } from '../models/trip.model';
import { CustomersRepository } from '../shared/customers-repository';
import { GetAllTripsSuccessActionType } from '../types/action.types';
import { CustomersActionsTypes, getAllTripsSuccess } from './customers.actions';
import { CustomersFacade } from './customers.facade';

@Injectable({ providedIn: 'root' })
export class CustomersEffects {
  public getAllTrips$: CreateEffectMetadata = createEffect(
    (): Observable<GetAllTripsSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(CustomersActionsTypes.GetAllTrips),
          switchMap((action: GetAllTripsProps): Observable<Trip[]> => this.customersRepository.getAllTrips(action.active)),
          finalize((): void => {
            this.customersFacade.setPendingState(false);
          }),
          map((trips: Trip[]): GetAllTripsSuccessActionType => getAllTripsSuccess({trips})),
        )
    ),
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly customersFacade: CustomersFacade,
    private readonly customersRepository: CustomersRepository,
  ) {
  }
}
