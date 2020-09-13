import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';

import { Trip } from '@Models/trip.model';

import { TripOrganizersRepository } from '../shared/trip-organizers.repository';
import { GetAllTripsSuccessActionType } from '../types/action.types';
import { getAllTripsSuccess, TripOrganizersActionsTypes } from './trip-organizers.actions';
import { TripOrganizersFacade } from './trip-organizers.facade';

@Injectable()
export class TripOrganizersEffects {
  public getAllTrips$: CreateEffectMetadata = createEffect(
    (): Observable<GetAllTripsSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(TripOrganizersActionsTypes.GetAllTrips),
          switchMap((): Observable<Trip[]> => this.tripOrganizersRepository.getAllTrips()),
          finalize((): void => {
            this.tripOrganizersFacade.setPendingState(false);
          }),
          map((trips: Trip[]): GetAllTripsSuccessActionType => getAllTripsSuccess({trips})),
        )
    ),
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly tripOrganizersFacade: TripOrganizersFacade,
    private readonly tripOrganizersRepository: TripOrganizersRepository,
  ) {
  }
}
