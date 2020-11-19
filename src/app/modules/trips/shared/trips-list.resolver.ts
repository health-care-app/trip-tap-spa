import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, mapTo, switchMap, take, tap } from 'rxjs/operators';

import { UserTypes } from '@Enums/user-types.enum';
import { Profile } from '@Modules/auth/models/profile.model';
import { AuthFacade } from '@Modules/auth/store/auth.facade';

import { TripsFacade } from '../store/trips.facade';

@Injectable()
export class TripsListResolver implements Resolve<Observable<void>> {
  public constructor(
    private readonly authFacade: AuthFacade,
    private readonly tripsFacade: TripsFacade,
  ) {
  }

  public resolve(): Observable<void> {
    return this.authFacade.profile$
      .pipe(
        filter((profile: Profile): boolean => !!profile),
        tap((profile: Profile): void => {
          switch (profile.userType) {
            case UserTypes.tripOrganizer:
              this.tripsFacade.getTripsList();
              break;
            case UserTypes.customer:
            default:
              this.tripsFacade.getTripsList(true);
          }
        }),
        switchMap((): Observable<boolean> => this.tripsFacade.tripsPending$),
        filter((pending: boolean): boolean => !pending),
        mapTo(null),
        take(1),
      );
  }
}
