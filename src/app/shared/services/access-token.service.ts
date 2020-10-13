import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';

import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { TokenKeys } from '@Enums/tokens.enum';
import { JwtData } from '@Models/jwt-data.model';

import { Profile } from '../../modules/auth/models/profile.model';

@Injectable()
export class AccessTokenService {
  public get profile(): Profile {
    return this.accessTokenData.profile;
  }

  private accessTokenData: JwtData;

  public constructor(
    private readonly router: Router,
    private readonly cookieService: CookieService,
  ) {
  }

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  public decodeAccessToken(accessToken: string): void {
    const decodedAccessToken: JwtData = jwtDecode(accessToken);

    this.accessTokenData = {
      profile: decodedAccessToken.profile,
      // tslint:disable-next-line: no-string-literal
      expiryDate: moment.unix(decodedAccessToken['exp']).toDate(),
    };
  }

  public setAccessToken(accessToken: string): void {
    this.cookieService.set(TokenKeys.JwtCookie, accessToken, this.accessTokenData.expiryDate, '/');
  }

  public getAccessToken(): string {
    const accessToken: string = this.cookieService.get(TokenKeys.JwtCookie);

    return accessToken;
  }
}
