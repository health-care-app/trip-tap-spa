import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { FieldModule } from '@Form/modules/field.module';
import { ComponentsType, ModulesType } from '@Types/module.types';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRepository } from './shared/auth-repository';
import { AuthEffects } from './store/auth.effects';

const components: ComponentsType = [
  SignInComponent,
  SignUpComponent,
];

const primeNgModules: ModulesType = [
  ButtonModule,
  CheckboxModule,
  InputTextModule,
];

const modules: ModulesType = [
  ...primeNgModules,
  FieldModule,
  CommonModule,
  AuthRoutingModule,
  ReactiveFormsModule,
  TranslateModule.forChild({}),
  EffectsModule.forFeature([AuthEffects]),
];

const services: Provider[] = [
  AuthRepository,
];

@NgModule({
  declarations: [ ...components ],
  imports: [ ...modules ],
  providers: [ ...services ],
})
export class AuthModule {
}
