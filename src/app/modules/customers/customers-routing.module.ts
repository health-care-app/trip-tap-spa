import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersRoutes } from '@Enums/routes.enum';

import { TripsListComponent } from './components/trips-list/trips-list.component';
import { TripsViewComponent } from './components/trips-view/trips-view.component';

const routes: Routes = [
  {
    path: CustomersRoutes.Trips,
    children: [
      {
        path: CustomersRoutes.Root,
        component: TripsListComponent,
      },
      {
        path: CustomersRoutes.Id,
        component: TripsViewComponent,
      },
    ],
  },
  {
    path: CustomersRoutes.Root,
    pathMatch: 'full',
    redirectTo: CustomersRoutes.Trips,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {
}
