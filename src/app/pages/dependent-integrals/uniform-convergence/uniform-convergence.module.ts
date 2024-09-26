import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniformConvergenceComponent } from './uniform-convergence.component';
import {RouterModule, Routes} from "@angular/router";
import {LevelDirectiveModule} from "../../../directives/level/level-directive.module";

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    LevelDirectiveModule
  ]
})
export class UniformConvergenceModule { }
