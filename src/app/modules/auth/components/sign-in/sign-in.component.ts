import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REGEX } from '@Consts/regex.const';
import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { FieldsNames } from '@Form/enums/field-names.enum';

import { SignInCredentials } from '../../models/sign-in.model';
import { AuthFacade } from '../../store/auth.facade';

@Component({
  selector: 'trip-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup = null;

  public readonly FieldsNames: typeof FieldsNames = FieldsNames;
  public readonly signInLink: string = `/${ModuleRoutes.Auth}/${AuthRoutes.SignUp}`;

  public constructor(
    private readonly authFacade: AuthFacade,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.signInForm = this.createSignInForm();
  }

  public signIn(signInForm: SignInCredentials): void {
    this.authFacade.signIn(signInForm);
  }

  private createSignInForm(): FormGroup {
    return this.formBuilder.group({
      [FieldsNames.Email]: [ '', [ Validators.required, Validators.email ] ],
      [FieldsNames.Password]: [ '', [ Validators.required, Validators.pattern(REGEX.password) ] ],
    });
  }
}
