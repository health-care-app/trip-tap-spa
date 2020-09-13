import { LOCATION_INITIALIZED } from '@angular/common';
import { APP_INITIALIZER, FactoryProvider, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

import { Profile } from '@Auth/models/profile.model';
import { AuthFacade } from '@Auth/store/auth.facade';
import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { UserTypes } from '@Enums/user-types.enum';
import { AccessTokenService } from '@Services/access-token.service';
import { PromiseFunction } from '@Types/return-function.type';

type HomePageProvider = (
  router: Router,
  injector: Injector,
  authFacade: AuthFacade,
  authService: AccessTokenService,
) => PromiseFunction<void>;

export const appInitializerFactory: HomePageProvider = (
  router: Router,
  injector: Injector,
  authFacade: AuthFacade,
  accessTokenService: AccessTokenService,
): PromiseFunction<void> => async(): Promise<void> => {
  await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

  const accessToken: string = accessTokenService.getAccessToken();

  if (!accessToken) {
    router.navigate([ModuleRoutes.Auth, AuthRoutes.SignIn]);
  } else {
    authFacade.profile$
      .pipe(
        filter(Boolean),
        take(1),
      )
      .subscribe((profile: Profile): void => {
        switch (profile.userType) {
          case UserTypes.customer:
          default:
            router.navigate([ModuleRoutes.Trips]);
        }
      });
  }
};

export const HOME_PAGE_PROVIDER: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitializerFactory,
  deps: [Router, Injector, AuthFacade, AccessTokenService],
  multi: true,
};
