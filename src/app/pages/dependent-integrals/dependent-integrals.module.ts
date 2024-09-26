import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependentIntegralsComponent } from './dependent-integrals.component';
import {RouterModule, Routes} from "@angular/router";
import {MathjaxModule} from "mathjax-angular";

const ROUTES: Routes = [
  {
    path: '',
    component: DependentIntegralsComponent
  },
  {
    path: 'basic',
    data: { breadcrumb: 'Основные понятия' },
    loadChildren: () => import('@pages/dependent-integrals/basic/basic.module').then(m => m.BasicModule),
  },
  {
    path: 'uniform-convergence',
    data: { breadcrumb: 'Равномерная сходимость' },
    loadChildren: () => import('@pages/dependent-integrals/uniform-convergence/uniform-convergence.module').then(m => m.UniformConvergenceModule),
  },
  {
    path: 'proper-integrals',
    data: { breadcrumb: 'Собственные интегралы' },
    loadChildren: () => import('@pages/dependent-integrals/proper-integrals/proper-integrals.module').then(m => m.ProperIntegralsModule),
  },
  {
    path: 'improper-integrals',
    data: { breadcrumb: 'Несобственные интегралы' },
    loadChildren: () => import('@pages/dependent-integrals/improper-integrals/improper-integrals.module').then(m => m.ImproperIntegralsModule),
  },
  {
    path: 'literature',
    data: { breadcrumb: 'Литература' },
    loadChildren: () => import('@pages/dependent-integrals/literature/literature.module').then(m => m.LiteratureModule),
  }
]

@NgModule({
  declarations: [
    DependentIntegralsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MathjaxModule,
  ]
})
export class DependentIntegralsModule { }
