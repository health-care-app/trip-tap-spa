import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Error } from '@Models/error.model';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  // tslint:disable: no-any prefer-function-over-method
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse): Observable<never> => {
          let error: Error;

          if (httpErrorResponse.error && httpErrorResponse.error.message) {
            if (Array.isArray(httpErrorResponse.error.message)) {
              error = {
                ...httpErrorResponse.error,
                messages: httpErrorResponse.error.message,
              };
            } else {
              error = {
                ...httpErrorResponse.error,
                messages: [httpErrorResponse.error.message],
              };
            }

            // tslint:disable-next-line: no-string-literal no-dynamic-delete
            delete error['message'];
          } else {
            error = {
              statusCode: httpErrorResponse.status,
              messages: [ httpErrorResponse.message ],
              error: `Error Status: ${httpErrorResponse.status}\nMessage: ${httpErrorResponse.message}`,
            };
          }

          return throwError(error);
        }),
      );
  }
}

export const ERROR_HANDLING_INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorHandlingInterceptor,
  multi: true,
};
