import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { getInitialState, REDUCER_PROVIDER, reducerToken } from '@AppStore';
import { ToastComponent } from '@Components/toast/toast.component';
import { AUTH_INTERCEPTOR_PROVIDER } from '@Interceptors/auth.interceptor';
import { ERROR_HANDLING_INTERCEPTOR_PROVIDER } from '@Interceptors/error-handling.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiTranslateLoader } from './shared/loaders/multi-translate.loader';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
  ],
  imports: [
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      reducerToken,
      { initialState: getInitialState },
    ),
    StoreDevtoolsModule.instrument({ maxAge: 30 }),
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: MultiTranslateLoader,
        deps: [ HttpClient ],
      },
    }),
  ],
  providers: [
    REDUCER_PROVIDER,
    AUTH_INTERCEPTOR_PROVIDER,
    ERROR_HANDLING_INTERCEPTOR_PROVIDER,
    MessageService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
