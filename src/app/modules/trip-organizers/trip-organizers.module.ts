import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { ModuleRoutes } from '@Enums/routes.enum';
import { ComponentsType, ModulesType } from '@Types/module.types';

import { TripsListComponent } from './components/trips-list/trips-list.component';
import { TripOrganizersRepository } from './shared/trip-organizers.repository';
import { TripOrganizersEffects } from './store/trip-organizers.effects';
import { TripOrganizersFacade } from './store/trip-organizers.facade';
import { tripOrganizersReducer } from './store/trip-organizers.reducers';
import { TripOrganizersRoutingModule } from './trip-organizers-routing.module';

const components: ComponentsType = [
  TripsListComponent,
];

const modules: ModulesType = [
  CommonModule,
  TripOrganizersRoutingModule,
  TranslateModule.forChild({}),
  EffectsModule.forFeature([TripOrganizersEffects]),
  StoreModule.forFeature(ModuleRoutes.TripOrganizers, tripOrganizersReducer),
];

const services: Provider[] = [
  TripOrganizersFacade,
  TripOrganizersRepository,
];

@NgModule({
  declarations: [ ...components ],
  imports: [ ...modules ],
  providers: [ ...services ],
})
export class TripOrganizersModule {
}
