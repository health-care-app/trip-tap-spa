import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleRoutes } from '@Enums/routes.enum';
import { AuthGuard } from '@Guards/auth.guard';
import { Module } from '@Types/module.types';

const routes: Routes = [
  {
    path: ModuleRoutes.Auth,
    loadChildren: (): Promise<Module> => import('./modules/auth/auth.module')
      .then((module: Module): Module => module.AuthModule),
    canActivate: [AuthGuard],
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
