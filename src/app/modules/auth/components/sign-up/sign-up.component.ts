import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SignUpCredentials } from '@Auth/shared/models/sign-up.model';
import { AuthFacade } from '@Auth/store/auth.facade';
import { REGEX } from '@Consts/regex.const';
import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { FieldsNames } from '@Form/enums/field-names.enum';

@Component({
  selector: 'trip-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup = null;

  public readonly FieldsNames: typeof FieldsNames = FieldsNames;
  public readonly signInLink: string = `/${ModuleRoutes.Auth}/${AuthRoutes.SignIn}`;

  public constructor(
    private readonly authFacade: AuthFacade,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.signUpForm = this.createSignUpForm();
  }

  public signIn(signUpForm: SignUpCredentials): void {
    this.authFacade.signUp(signUpForm);
  }

  private createSignUpForm(): FormGroup {
    return this.formBuilder.group({
      [FieldsNames.FirstName]: [ '', [ Validators.required, Validators.pattern(REGEX.name) ] ],
      [FieldsNames.LastName]: [ '', [ Validators.required, Validators.pattern(REGEX.name) ] ],
      [FieldsNames.Email]: [ '', [ Validators.required, Validators.email ] ],
      [FieldsNames.Password]: [ '', [ Validators.required, Validators.pattern(REGEX.password) ] ],
      [FieldsNames.IsTripOrganizer]: [ false ],
    });
  }
}
