import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ApiUrls } from '@Enums/api-urls.enum';
import { environment } from '@Environment';

import { AuthService } from './auth.service';
import { Profile } from './models/profile.model';
import { SignInCredentials } from './models/sign-in.model';
import { SignUpCredentials } from './models/sign-up.model';

interface AccessTokenInterface {
  accessToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthRepository {

  public constructor(
    private readonly httpClient: HttpClient,
    private readonly authService: AuthService,
  ) {
  }

  public signIn(signInCredentials: SignInCredentials): Observable<Profile> {
    return this.httpClient.post<AccessTokenInterface>(`${environment.apiUrl}/${ApiUrls.SignIn}`, signInCredentials)
      .pipe(
        tap(this.setAccessToken.bind(this)),
        map(AuthRepository.getProfile),
      );
  }

  public signUp(signUpCredentials: SignUpCredentials): Observable<Profile> {
    return this.httpClient.post<AccessTokenInterface>(`${environment.apiUrl}/${ApiUrls.SignUp}`, signUpCredentials)
      .pipe(
        tap(this.setAccessToken.bind(this)),
        map(AuthRepository.getProfile),
      );
  }

  private setAccessToken({accessToken}: AccessTokenInterface): void {
    const expirationDate: Date = moment.unix(jwtDecode(accessToken).exp).toDate();

    this.authService.setAccessToken(accessToken, expirationDate);
  }

  private static getProfile({accessToken}: AccessTokenInterface): Profile {
    return jwtDecode(accessToken).profile;
  }
}
