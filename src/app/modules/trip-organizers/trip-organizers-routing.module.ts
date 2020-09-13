import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripOrganizersRoutes } from '@Enums/routes.enum';

import { TripsListComponent } from './components/trips-list/trips-list.component';

const routes: Routes = [
  {
    path: TripOrganizersRoutes.Trips,
    children: [
      {
        path: TripOrganizersRoutes.Root,
        component: TripsListComponent,
      },
    ],
  },
  {
    path: TripOrganizersRoutes.Root,
    pathMatch: 'full',
    redirectTo: TripOrganizersRoutes.Trips,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripOrganizersRoutingModule {
}
