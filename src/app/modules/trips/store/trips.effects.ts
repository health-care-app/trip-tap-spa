import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { finalize, map, mapTo, switchMap, take, tap } from 'rxjs/operators';

import { ModuleRoutes } from '@Enums/routes.enum';

import { CreateTripProps, GetTripProps, GetTripsListProps, TripProps } from '../models/action-props.model';
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
          take(1),
          finalize(this.setPendingToFalse.bind(this)),
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
          take(1),
          finalize(this.setPendingToFalse.bind(this)),
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
          take(1),
          finalize(this.setPendingToFalse.bind(this)),
          map((trip: Trip): CreateTripSuccessActionType => createTripSuccess({trip})),
        )
    ),
  );

  public createTripSuccess$: CreateEffectMetadata = createEffect(
    (): Observable<void> => (
      this.actions$
        .pipe(
          ofType(TripsActionsTypes.CreateTripSuccess),
          map((action: TripProps): number => action.trip.id),
          tap(this.navigateToTrip.bind(this)),
          mapTo(null),
        )
    ),
    { dispatch: false },
  );

  public constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly tripsFacade: TripsFacade,
    private readonly tripsRepository: TripsRepository,
  ) {
  }

  private setPendingToFalse(): void {
    this.tripsFacade.setPendingState(false);
  }

  private navigateToTrip(tripId: number): void {
    this.router.navigate([ModuleRoutes.Trips, tripId]);
  }
}
