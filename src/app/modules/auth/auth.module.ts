import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ModuleRoutes } from '@Enums/routes.enum';
import { FieldErrorsComponent } from '@Form/components/field-errors/field-errors.component';
import { FieldComponent } from '@Form/components/field/field.component';
import { Module } from '@Types/module.types';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducers';

const primeNgModules: Module[] = [
  ButtonModule,
  InputTextModule,
];

@NgModule({
  declarations: [
    SignInComponent,
    FieldComponent,
    FieldErrorsComponent,
  ],
  imports: [
    ...primeNgModules,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ModuleRoutes.Auth, authReducer),
    EffectsModule.forFeature([AuthEffects]),
    TranslateModule.forChild({}),
  ],
})
export class AuthModule {
}
