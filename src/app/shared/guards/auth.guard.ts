import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '@Modules/auth/shared/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  public readonly accessToken: string = this.authService.getAccessToken();

  public constructor(
    private readonly authService: AuthService,
  ) {
  }

  public canActivate(): boolean {
    return !this.accessToken;
  }
}
