import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { REGEX } from '@Consts/regex.const';
import { AuthRoutes, ModuleRoutes } from '@Enums/routes.enum';
import { FieldsNames } from '@Form/enums/field-names.enum';

import { SignUpCredentials } from '../../models/sign-up.model';
import { AuthFacade } from '../../store/auth.facade';

@Component({
  selector: 'trip-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup = null;

  public readonly fieldsNames: typeof FieldsNames = FieldsNames;
  public readonly signInLink: string = `/${ModuleRoutes.Auth}/${AuthRoutes.SignIn}`;

  public constructor(
    private readonly authFacade: AuthFacade,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.signUpForm = this.createSignUpForm();

    this.signUpForm.get(FieldsNames.IsTripOrganizer).valueChanges
      .subscribe((isTripOrganizer: boolean): void => {
        if (isTripOrganizer) {
          this.signUpForm.addControl(FieldsNames.PhoneNumber, this.formBuilder.control('', [ Validators.required ]));
          this.signUpForm.addControl(FieldsNames.FacebookId, this.formBuilder.control(''));
          this.signUpForm.addControl(FieldsNames.InstagramId, this.formBuilder.control(''));
        } else {
          this.signUpForm.removeControl(FieldsNames.PhoneNumber);
          this.signUpForm.removeControl(FieldsNames.FacebookId);
          this.signUpForm.removeControl(FieldsNames.InstagramId);
        }
      });
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
