import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { ModuleRoutes } from '@Enums/routes.enum';

import { TripsListComponent } from './components/trips-list/trips-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersEffects } from './store/customers.effects';
import { customersReducer } from './store/customers.reducers';

@NgModule({
  declarations: [
    TripsListComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature(ModuleRoutes.Customers, customersReducer),
    EffectsModule.forFeature([CustomersEffects]),
    TranslateModule.forChild({}),
  ],
})
export class CustomersModule {
}
