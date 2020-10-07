import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';

import { CreateTripProps, GetTripProps, GetTripsListProps } from '../models/action-props.model';
import { Trip } from '../models/trip.model';
import { TripsRepository } from '../shared/trips.repository';
import { CreateTripSuccessActionType, GetTripsListSuccessActionType, GetTripSuccessActionType } from '../types/action.types';
import { createTripSuccess, getAllTripsSuccess, getTripSuccess, TripsActionsTypes } from './trips.actions';
import { TripsFacade } from './trips.facade';

@Injectable()
export class TripsEffects {
  public getTripsList$: CreateEffectMetadata = createEffect(
    (): Observable<GetTripsListSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(TripsActionsTypes.GetTripsList),
          switchMap((action: GetTripsListProps): Observable<Trip[]> => this.tripsRepository.getTripsList(action.active)),
          finalize((): void => {
            this.tripsFacade.setPendingState(false);
          }),
          map((trips: Trip[]): GetTripsListSuccessActionType => getAllTripsSuccess({trips})),
        )
    ),
  );

  public getTrip$: CreateEffectMetadata = createEffect(
    (): Observable<GetTripSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(TripsActionsTypes.GetTrip),
          switchMap((action: GetTripProps): Observable<Trip> => this.tripsRepository.getTrip(action.tripId)),
          finalize((): void => {
            this.tripsFacade.setPendingState(false);
          }),
          map((trip: Trip): GetTripSuccessActionType => getTripSuccess({trip})),
        )
    ),
  );

  public createTrip$: CreateEffectMetadata = createEffect(
    (): Observable<CreateTripSuccessActionType> => (
      this.actions$
        .pipe(
          ofType(TripsActionsTypes.CreateTrip),
          switchMap((action: CreateTripProps): Observable<Trip> => this.tripsRepository.createTrip(action.trip)),
          finalize((): void => {
            this.tripsFacade.setPendingState(false);
          }),
          map((trip: Trip): CreateTripSuccessActionType => createTripSuccess({trip})),
        )
    ),
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly tripsFacade: TripsFacade,
    private readonly tripsRepository: TripsRepository,
  ) {
  }
}
