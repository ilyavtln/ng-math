import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathMasterpageComponent} from "../masterpages/math-masterpage/math-masterpage.component";
import {MathMasterpageModule} from "../masterpages/math-masterpage/math-masterpage.module";

const RSHB_ROUTES: Routes = [
  {
    path: '',
    component: MathMasterpageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../pages/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then(m => m.AboutModule)
      }
    ]
  }
  // {
  //   path: '**',
  //   loadChildren: () => import('@masterpages/error/error.module').then(m => m.ErrorModule)
  // }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    MathMasterpageModule,
    RouterModule.forChild(RSHB_ROUTES)
  ]
})
export class MathRoutingModule { }
