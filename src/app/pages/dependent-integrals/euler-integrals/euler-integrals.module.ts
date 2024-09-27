import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EulerIntegralsComponent } from './euler-integrals.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  { path: '', component:  EulerIntegralsComponent },
]


@NgModule({
  declarations: [
    EulerIntegralsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class EulerIntegralsModule { }
