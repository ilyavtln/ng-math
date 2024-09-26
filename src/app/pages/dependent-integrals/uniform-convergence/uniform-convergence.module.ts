import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniformConvergenceComponent } from './uniform-convergence.component';
import {RouterModule, Routes} from "@angular/router";
import {DependentIntegralsComponent} from "@pages/dependent-integrals/dependent-integrals.component";
import {LevelDirective} from "../../../directives/level/level.directive";

const ROUTES: Routes = [
  {
    path: '',
    component:UniformConvergenceComponent
  },
  {
    path: 'basic',
    data: { breadcrumb: 'Основные понятия' },
    loadChildren: () => import('@pages/dependent-integrals/uniform-convergence/basic/basic.module').then(m => m.BasicModule),
  },
  {
    path: 'properties',
    data: { breadcrumb: 'Свойства' },
    loadChildren: () => import('@pages/dependent-integrals/uniform-convergence/properties/properties.module').then(m => m.PropertiesModule),
  },
]

@NgModule({
  declarations: [
    UniformConvergenceComponent,
    LevelDirective
  ],
  exports: [
    LevelDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class UniformConvergenceModule { }
