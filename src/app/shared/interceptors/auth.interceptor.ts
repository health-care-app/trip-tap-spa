import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpHeaders } from '@Enums/http-headers.enum';
import { ModuleRoutes } from '@Enums/routes.enum';
import { environment } from '@Environment';
import { AuthService } from '@Modules/auth/shared/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(
    private readonly authService: AuthService,
  ) {
  }

  public intercept(request: HttpRequest<typeof HttpHeaders>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken: string = this.authService.getAccessToken();

    if (!request.url.includes(environment.apiUrl) || request.url.includes(ModuleRoutes.Auth) || !accessToken) {
      return next.handle(request);
    }

    const authReq: HttpRequest<typeof HttpHeaders> = request.clone({
      headers: request.headers.set(HttpHeaders.Authorization, `Bearer ${accessToken}`),
    });

    return next.handle(authReq);
  }
}

export const AUTH_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
