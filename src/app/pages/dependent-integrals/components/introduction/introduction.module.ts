import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import {BreadcrumbsModule} from "../../../../core/breadcrumbs/breadcrumbs.module";



@NgModule({
  declarations: [
    IntroductionComponent
  ],
  exports: [
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule
  ]
})
export class IntroductionModule { }
