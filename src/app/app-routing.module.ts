import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@Components/home-page/home-page.component';
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
    path: ModuleRoutes.Trips,
    loadChildren: (): Promise<Module> => import('./modules/trips/trips.module')
      .then((module: Module): Module => module.TripsModule),
    canActivate: [AccessGuard],
    },
  {
    path: ModuleRoutes.Root,
    pathMatch: 'full',
    component: HomePageComponent,
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
