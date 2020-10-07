import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'trip-inline-label-field',
  templateUrl: './inline-label-field.component.html',
  styleUrls: ['./inline-label-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineLabelFieldComponent {
  @Input() public formGroup: FormGroup = null;
  @Input() public label: string = '';
  @Input() public labelFor: string;
  @Input() public addToLabel: string = '';
  @Input() public translationPath: string;
  @Input() public isRequired: boolean = false;
  @Input() public fieldClass: string = '';
}
