import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathMasterpageComponent} from "@masterpages/math-masterpage/math-masterpage.component";
import {MathMasterpageModule} from "@masterpages/math-masterpage/math-masterpage.module";
import {DependentMasterpageComponent} from "@masterpages/dependent-masterpage/dependent-masterpage.component";
import {DependentMasterpageModule} from "@masterpages/dependent-masterpage/dependent-masterpage.module";

const MATH_ROUTES: Routes = [
  {
    path: '',
    component: MathMasterpageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@pages/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        data: { breadcrumb: 'О проекте' },
        loadChildren: () => import('@pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'features',
        data: { breadcrumb: 'Разработка' },
        loadChildren: () => import('@pages/features/features.module').then(m => m.FeaturesModule)
      }
    ]
  },
  {
    path: 'dependent-integrals',
    component: DependentMasterpageComponent,
    children: [
      {
        path: '',
        data: { breadcrumb: 'Зависящие интегралы' },
        loadChildren: () => import('@pages/dependent-integrals/dependent-integrals.module').then(m => m.DependentIntegralsModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('@masterpages/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    MathMasterpageModule,
    DependentMasterpageModule,
    RouterModule.forChild(MATH_ROUTES)
  ]
})
export class MathRoutingModule { }
