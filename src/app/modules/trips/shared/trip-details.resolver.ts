import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';

import { TripsFacade } from '../store/trips.facade';

@Injectable()
export class TripDetailsResolver implements Resolve<Observable<void>> {
  public constructor(
    private readonly tripsFacade: TripsFacade,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<void> {
    this.tripsFacade.getTrip(route.params.id);

    return this.tripsFacade.tripsPending$
      .pipe(
        filter((pending: boolean): boolean => !pending),
        mapTo(null),
        take(1),
      );
  }
}
