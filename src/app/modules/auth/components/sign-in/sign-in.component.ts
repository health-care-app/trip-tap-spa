import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SignInCredentials } from '@Auth/shared/models/sign-in.model';
import { AuthFacade } from '@Auth/store/auth.facade';
import { FieldsNames } from '@Form/enums/field-names.enum';

@Component({
  selector: 'trip-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup = null;

  public readonly FieldsNames: typeof FieldsNames = FieldsNames;

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
      [FieldsNames.Password]: [ '', [ Validators.required, Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/) ] ],
    });
  }
}
