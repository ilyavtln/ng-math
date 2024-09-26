import { NgModule } from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormulaDirective} from "../directives/formula/formula.directive";
import {ReactiveFormsModule} from "@angular/forms";

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
    JsonPipe,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule
  ]
})
export class HomeModule { }
