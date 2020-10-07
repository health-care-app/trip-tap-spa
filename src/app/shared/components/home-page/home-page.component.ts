import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { UserTypes } from '@Enums/user-types.enum';
import { Profile } from '@Modules/auth/models/profile.model';
import { AuthFacade } from '@Modules/auth/store/auth.facade';
import { AccessTokenService } from '@Services/access-token.service';

@Component({
  selector: 'trip-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

  public constructor(
    private readonly router: Router,
    private readonly authFacade: AuthFacade,
    private readonly accessTokenService: AccessTokenService,
  ) {
  }

  public ngOnInit(): void {
    const accessToken: string = this.accessTokenService.getAccessToken();

    if (!accessToken) {
      this.router.navigate([ModuleRoutes.Auth, AuthRoutes.SignIn]);
    } else {
      this.authFacade.profile$
        .pipe(
          filter(Boolean),
          take(1),
        )
        .subscribe((profile: Profile): void => {
          switch (profile.userType) {
            case UserTypes.tripOrganizer:
            case UserTypes.customer:
            default:
              this.router.navigate([ModuleRoutes.Trips]);
          }
        });
    }
  }
}
