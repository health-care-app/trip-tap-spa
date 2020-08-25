import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleRoutes } from '@Enums/routes.enum';
import { Module } from '@Types/module.types';

const routes: Routes = [
  {
    path: ModuleRoutes.Auth,
    loadChildren: (): Promise<Module> => import('./modules/auth/auth.module')
      .then((module: Module): Module => module.AuthModule),
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
