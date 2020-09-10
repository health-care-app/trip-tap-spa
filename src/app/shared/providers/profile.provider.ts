import { LOCATION_INITIALIZED } from '@angular/common';
import { APP_INITIALIZER, FactoryProvider, Injector } from '@angular/core';

import { Profile } from '@Auth/models/profile.model';
import { AuthFacade } from '@Auth/store/auth.facade';
import { AccessTokenService } from '@Services/access-token.service';
import { PromiseFunction } from '@Types/return-function.type';

type ProfileProvider = (
  injector: Injector,
  authFacade: AuthFacade,
  authService: AccessTokenService,
) => PromiseFunction<void>;

export const appInitializerFactory: ProfileProvider = (
  injector: Injector,
  authFacade: AuthFacade,
  accessTokenService: AccessTokenService,
): PromiseFunction<void> => async(): Promise<void> => {
  await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

  const accessToken: string = accessTokenService.getAccessToken();

  if (accessToken) {
    accessTokenService.decodeAccessToken(accessToken);

    const profile: Profile = accessTokenService.profile;

    authFacade.setProfile(profile);
  }
};

export const PROFILE_PROVIDER: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitializerFactory,
  deps: [Injector, AuthFacade, AccessTokenService],
  multi: true,
};
