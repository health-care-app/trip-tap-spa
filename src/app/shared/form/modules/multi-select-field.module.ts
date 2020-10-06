import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';

import { ModulesType } from '@Types/module.types';

import { MultiSelectFieldComponent } from '../components/multi-select-field/multi-select-field.component';

const modules: ModulesType = [
  FormsModule,
  CommonModule,
  ButtonModule,
  MultiSelectModule,
  ReactiveFormsModule,
  TranslateModule.forChild({}),
];

@NgModule({
  imports: [ ...modules ],
  declarations: [ MultiSelectFieldComponent ],
  exports: [ MultiSelectFieldComponent ],
})
export class MultiSelectFieldModule {
}
