import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImproperIntegralsComponent } from './improper-integrals.component';
import {RouterModule, Routes} from "@angular/router";
import {IntroductionModule} from "@pages/dependent-integrals/components/introduction/introduction.module";

const ROUTES: Routes = [
  {
    path: '',
    component: ImproperIntegralsComponent
  },
]

@NgModule({
  declarations: [
    ImproperIntegralsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    IntroductionModule,
  ]
})
export class ImproperIntegralsModule { }
