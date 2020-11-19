import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { TabViewModule } from 'primeng/tabview';

import { ModuleRoutes } from '@Enums/routes.enum';
import { FieldModule } from '@Form/modules/field.module';
import { MultiSelectFieldModule } from '@Form/modules/multi-select-field.module';
import { ComponentsType, ModulesType } from '@Types/module.types';

import { TripsCreateComponent } from './components/trips-create/trips-create.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { TripsViewComponent } from './components/trips-view/trips-view.component';
import { TripDetailsResolver } from './shared/trip-details.resolver';
import { TripsListResolver } from './shared/trips-list.resolver';
import { TripsRepository } from './shared/trips.repository';
import { TripsEffects } from './store/trips.effects';
import { TripsFacade } from './store/trips.facade';
import { tripsReducer } from './store/trips.reducers';
import { TripsRoutingModule } from './trips-routing.module';

const component: ComponentsType = [
  TripsListComponent,
  TripsViewComponent,
  TripsCreateComponent,
];

const primengModules: ModulesType = [
  SliderModule,
  TabViewModule,
  CalendarModule,
  CheckboxModule,
  DropdownModule,
  InputTextModule,
  FileUploadModule,
  MultiSelectModule,
  AutoCompleteModule,
  InputTextareaModule,
];

const modules: ModulesType = [
  ...primengModules,
  FieldModule,
  CommonModule,
  TripsRoutingModule,
  ReactiveFormsModule,
  MultiSelectFieldModule,
  TranslateModule.forChild({}),
  EffectsModule.forFeature([TripsEffects]),
  StoreModule.forFeature(ModuleRoutes.Trips, tripsReducer),
];

const services: Provider[] = [
  TripsFacade,
  TripsRepository,
  TripsListResolver,
  TripDetailsResolver,
];

@NgModule({
  declarations: [ ...component ],
  imports: [ ...modules ],
  providers: [ ...services ],
})
export class TripsModule {
}
