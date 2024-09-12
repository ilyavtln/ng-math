import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormulaDirective} from "../directives/formula/formula.directive";

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    FormulaDirective
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule { }
