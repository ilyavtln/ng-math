import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProperIntegralsComponent } from './proper-integrals.component';
import {RouterModule, Routes} from "@angular/router";
import {IntroductionModule} from "@pages/dependent-integrals/components/introduction/introduction.module";

const ROUTES: Routes = [
  {
    path: '',
    component: ProperIntegralsComponent
  },
]

@NgModule({
  declarations: [
    ProperIntegralsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    IntroductionModule,
  ]
})
export class ProperIntegralsModule { }
