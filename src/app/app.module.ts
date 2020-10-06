import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { getInitialState, REDUCER_PROVIDER, reducerToken } from '@AppStore';
import { AuthFacade } from '@Auth/store/auth.facade';
import { HomePageComponent } from '@Components/home-page/home-page.component';
import { ToastComponent } from '@Components/toast/toast.component';
import { AccessGuard } from '@Guards/access.guard';
import { AuthGuard } from '@Guards/auth.guard';
import { AUTH_INTERCEPTOR_PROVIDER } from '@Interceptors/auth.interceptor';
import { ERROR_HANDLING_INTERCEPTOR_PROVIDER } from '@Interceptors/error-handling.interceptor';
import { MultiTranslateLoader } from '@Loaders/multi-translate.loader';
import { PROFILE_PROVIDER } from '@Providers/profile.provider';
import { AccessTokenService } from '@Services/access-token.service';
import { DurationService } from '@Services/duration.service';
import { LocalizationService } from '@Services/localization.service';
import { ValidatorsService } from '@Services/validators.service';
import { ErrorFacade } from '@Store/error/error.facade';
import { ComponentsType, ModulesType } from '@Types/module.types';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const sharedComponents: ComponentsType = [
  ToastComponent,
];

const components: ComponentsType = [
  ...sharedComponents,
  AppComponent,
  HomePageComponent,
];

const modules: ModulesType = [
  ToastModule,
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({ maxAge: 30 }),
  StoreModule.forRoot(reducerToken, { initialState: getInitialState }),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useClass: MultiTranslateLoader,
      deps: [ HttpClient ],
    },
  }),
];

const services: Provider[] = [
  AuthGuard,
  AuthFacade,
  AccessGuard,
  ErrorFacade,
  CookieService,
  MessageService,
  DurationService,
  ValidatorsService,
  AccessTokenService,
  LocalizationService,
];

const providers: Provider[] = [
  ...services,
  PROFILE_PROVIDER,
  REDUCER_PROVIDER,
  AUTH_INTERCEPTOR_PROVIDER,
  ERROR_HANDLING_INTERCEPTOR_PROVIDER,
];

@NgModule({
  declarations: [ ...components ],
  imports: [ ...modules ],
  providers: [ ...providers ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
