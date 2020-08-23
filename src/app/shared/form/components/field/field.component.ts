import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'trip-reactive-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {
  @Input() public translationPath: string;
  @Input() public isVisible: boolean = true;
  @Input() public fieldClass: string = 'form-input';
  @Input() public labelFor: string;
  @Input() public formGroup: FormGroup = null;
  @Input() public label: string = '';
  @Input() public isRequired: boolean = false;
}
