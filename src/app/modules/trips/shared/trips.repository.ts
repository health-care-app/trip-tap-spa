import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from '@Enums/api-urls.enum';
import { environment } from '@Environment';

import { CreateTrip } from '../models/create-trip.model';
import { Trip } from '../models/trip.model';

@Injectable()
export class TripsRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public getTripsList(active: boolean): Observable<Trip[]> {
    let activeAsString: string;

    try {
      activeAsString = active.toString();
    // tslint:disable-next-line: no-empty
    } catch {
    }

    return this.httpClient.get<Trip[]>(
      `${environment.apiUrl}/${ApiUrls.Trips}`,
      { params: {
        ...activeAsString ? { active: activeAsString } : {},
      } },
    );
  }

  public getTrip(tripId: number): Observable<Trip> {
    return this.httpClient.get<Trip>(`${environment.apiUrl}/${ApiUrls.Trips}/${tripId}`);
  }

  public createTrip(trip: CreateTrip): Observable<Trip> {
    return this.httpClient.post<Trip>(
      `${environment.apiUrl}/${ApiUrls.Trips}`,
      trip,
    );
  }
}
