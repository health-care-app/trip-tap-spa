import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { AccessTokenService } from '@Services/access-token.service';

@Injectable()
export class AccessGuard implements CanActivate {
  public readonly accessToken: string = this.accessTokenService.getAccessToken();

  public constructor(
    private readonly router: Router,
    private readonly accessTokenService: AccessTokenService,
  ) {
  }

  public canActivate(): boolean {
    if (!this.accessToken) {
      this.router.navigate([ModuleRoutes.Auth, AuthRoutes.SignIn]);
    }

    return !!this.accessToken;
  }
}
