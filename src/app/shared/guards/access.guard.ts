import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AccessTokenService } from '@Services/access-token.service';

@Injectable()
export class AccessGuard implements CanActivate {
  public readonly accessToken: string = this.accessTokenService.getAccessToken();

  public constructor(
    private readonly accessTokenService: AccessTokenService,
  ) {
  }

  public canActivate(): boolean {
    return !!this.accessToken;
  }
}
