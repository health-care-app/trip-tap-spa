import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { ModuleRoutes } from '@Enums/routes.enum';
import { ComponentsType, ModulesType } from '@Types/module.types';

import { TripsListComponent } from './components/trips-list/trips-list.component';
import { TripsViewComponent } from './components/trips-view/trips-view.component';
import { TripsRepository } from './shared/trips.repository';
import { TripsEffects } from './store/trips.effects';
import { TripsFacade } from './store/trips.facade';
import { tripsReducer } from './store/trips.reducers';
import { TripsRoutingModule } from './trips-routing.module';

const component: ComponentsType = [
  TripsListComponent,
  TripsViewComponent,
];

const modules: ModulesType = [
  CommonModule,
  TripsRoutingModule,
  TranslateModule.forChild({}),
  EffectsModule.forFeature([TripsEffects]),
  StoreModule.forFeature(ModuleRoutes.Trips, tripsReducer),
];

const services: Provider[] = [
  TripsFacade,
  TripsRepository,
];

@NgModule({
  declarations: [ ...component ],
  imports: [ ...modules ],
  providers: [ ...services ],
})
export class TripsModule {
}
