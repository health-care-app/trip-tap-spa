import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap, take, tap } from 'rxjs/operators';

import { Profile } from '@Auth/models/profile.model';
import { AuthFacade } from '@Auth/store/auth.facade';
import { UserTypes } from '@Enums/user-types.enum';

import { Trip } from '../../models/trip.model';
import { TripsFacade } from '../../store/trips.facade';

@Component({
  selector: 'trip-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsListComponent implements OnInit {
  public tripList: Trip[] = [];

  public constructor(
    private readonly authFacade: AuthFacade,
    private readonly tripsFacade: TripsFacade,
  ) {
  }

  public ngOnInit(): void {
    this.authFacade.profile$
      .pipe(
        filter((profile: Profile): boolean => !!profile),
        take(1),
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
        switchMap((): Observable<Trip[]> => this.tripsFacade.tripsList$),
      )
      .subscribe((trips: Trip[]): void => {
        this.tripList = trips;
      });
  }
}
