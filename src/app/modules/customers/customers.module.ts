import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { ModuleRoutes } from '@Enums/routes.enum';
import { ComponentsType, ModulesType } from '@Types/module.types';

import { TripsListComponent } from './components/trips-list/trips-list.component';
import { TripsViewComponent } from './components/trips-view/trips-view.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersRepository } from './shared/customers-repository';
import { CustomersEffects } from './store/customers.effects';
import { CustomersFacade } from './store/customers.facade';
import { customersReducer } from './store/customers.reducers';

const component: ComponentsType = [
  TripsListComponent,
  TripsViewComponent,
];

const modules: ModulesType = [
  CommonModule,
  CustomersRoutingModule,
  TranslateModule.forChild({}),
  EffectsModule.forFeature([CustomersEffects]),
  StoreModule.forFeature(ModuleRoutes.Customers, customersReducer),
];

const services: Provider[] = [
  CustomersFacade,
  CustomersRepository,
];

@NgModule({
  declarations: [ ...component ],
  imports: [ ...modules ],
  providers: [ ...services ],
})
export class CustomersModule {
}
