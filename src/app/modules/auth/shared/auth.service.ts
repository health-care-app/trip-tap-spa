import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AuthRoutes } from '@Enums/routes.enum';
import { TokenKeys } from '@Enums/tokens.enum';

@Injectable({ providedIn: 'root' })
export class AuthService {

  public constructor(
    private readonly router: Router,
    private readonly cookieService: CookieService,
  ) {
  }

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  public unauthorize(): void {
    this.clearAccessToken();
    this.router.navigate([AuthRoutes.SignIn]);
  }

  public setAccessToken(jwtCookie: string, expirationDate: Date): void {
    this.cookieService.set(TokenKeys.JwtCookie, jwtCookie, expirationDate);
  }

  public getAccessToken(): string {
    return this.cookieService.get(TokenKeys.JwtCookie);
  }

  private clearAccessToken(): void {
    this.cookieService.delete(TokenKeys.JwtCookie);
  }
}
