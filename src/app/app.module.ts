import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { reducers } from '@AppStore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiTranslateLoader } from './shared/loaders/multi-translate.loader';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: MultiTranslateLoader,
        deps: [ HttpClient ],
      },
    }),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
