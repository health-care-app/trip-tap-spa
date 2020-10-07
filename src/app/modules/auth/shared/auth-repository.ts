import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ApiUrls } from '@Enums/api-urls.enum';
import { environment } from '@Environment';
import { AccessTokenService } from '@Services/access-token.service';

import { Profile } from '../models/profile.model';
import { SignInCredentials } from '../models/sign-in.model';
import { SignUpCredentials } from '../models/sign-up.model';

interface AccessTokenInterface {
  accessToken: string;
}

@Injectable()
export class AuthRepository {

  public constructor(
    private readonly httpClient: HttpClient,
    private readonly accessTokenService: AccessTokenService,
  ) {
  }

  public signIn(signInCredentials: SignInCredentials): Observable<Profile> {
    return this.httpClient.post<AccessTokenInterface>(`${environment.apiUrl}/${ApiUrls.SignIn}`, signInCredentials)
      .pipe(
        map(({accessToken}: AccessTokenInterface): string => accessToken),
        tap(this.accessTokenService.decodeAccessToken.bind(this.accessTokenService)),
        tap(this.accessTokenService.setAccessToken.bind(this.accessTokenService)),
        map((): Profile => this.accessTokenService.profile),
      );
  }

  public signUp(signUpCredentials: SignUpCredentials): Observable<Profile> {
    return this.httpClient.post<AccessTokenInterface>(`${environment.apiUrl}/${ApiUrls.SignUp}`, signUpCredentials)
      .pipe(
        map(({accessToken}: AccessTokenInterface): string => accessToken),
        tap(this.accessTokenService.decodeAccessToken.bind(this.accessTokenService)),
        tap(this.accessTokenService.setAccessToken.bind(this.accessTokenService)),
        map((): Profile => this.accessTokenService.profile),
      );
  }
}
