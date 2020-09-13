import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from '@Enums/api-urls.enum';
import { environment } from '@Environment';
import { Trip } from '@Models/trip.model';

@Injectable()
export class TripOrganizersRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public getAllTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(`${environment.apiUrl}/${ApiUrls.Trips}`);
  }
}
