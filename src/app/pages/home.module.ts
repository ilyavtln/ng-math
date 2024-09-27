import { NgModule } from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormulaDirective} from "../directives/formula/formula.directive";
import {ReactiveFormsModule} from "@angular/forms";
import {HeroBannerModule} from "../modules/hero-banner/hero-banner.module";
import {CourseBannerModule} from "../modules/course-banner/course-banner.module";

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
    ReactiveFormsModule,
    HeroBannerModule,
    CourseBannerModule
  ]
})
export class HomeModule { }
