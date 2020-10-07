import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripsRoutes } from '@Enums/routes.enum';

import { TripsCreateComponent } from './components/trips-create/trips-create.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { TripsViewComponent } from './components/trips-view/trips-view.component';

const routes: Routes = [
  {
    path: TripsRoutes.Create,
    component: TripsCreateComponent,
  },
  {
    path: TripsRoutes.List,
    component: TripsListComponent,
  },
  {
    path: TripsRoutes.Id,
    component: TripsViewComponent,
  },
  {
    path: TripsRoutes.Root,
    pathMatch: 'full',
    redirectTo: TripsRoutes.List,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsRoutingModule {
}
