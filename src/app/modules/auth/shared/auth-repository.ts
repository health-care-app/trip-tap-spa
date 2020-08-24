import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from '@Enums/api-urls.enum';
import { environment } from '@Environment';

import { Profile } from './models/profile.model';
import { SignInCredentials } from './models/sign-in.model';

@Injectable({ providedIn: 'root' })
export class AuthRepository {

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public signIn(signInCredentials: SignInCredentials): Observable<Profile> {
    return this.httpClient.post<Profile>(`${environment.apiUrl}/${ApiUrls.SignIn}`, signInCredentials);
  }
}
