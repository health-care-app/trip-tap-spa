import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleRoutes } from '@Enums/routes.enum';
import { AccessGuard } from '@Guards/access.guard';
import { AuthGuard } from '@Guards/auth.guard';
import { Module } from '@Types/module.types';

const routes: Routes = [
  {
    path: ModuleRoutes.Auth,
    loadChildren: (): Promise<Module> => import('./modules/auth/auth.module')
      .then((module: Module): Module => module.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: ModuleRoutes.Customers,
    loadChildren: (): Promise<Module> => import('./modules/customers/customers.module')
      .then((module: Module): Module => module.CustomersModule),
    canActivate: [AccessGuard],
  },
  {
    path: ModuleRoutes.TripOrganizers,
    loadChildren: (): Promise<Module> => import('./modules/trip-organizers/trip-organizers.module')
      .then((module: Module): Module => module.TripOrganizersModule),
    canActivate: [AccessGuard],
  },
  {
    path: ModuleRoutes.Root,
    pathMatch: 'full',
    redirectTo: ModuleRoutes.Auth,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
