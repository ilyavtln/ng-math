import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathMasterpageComponent } from './math-masterpage.component';
import { RouterModule } from "@angular/router";
import {NavigationModule} from "../../core/common-ui/navigation/navigation.module";
import {FooterModule} from "../../core/common-ui/footer/footer.module";
import {BreadcrumbsModule} from "../../core/breadcrumbs/breadcrumbs.module";



@NgModule({
  declarations: [
    MathMasterpageComponent
  ],
  exports: [MathMasterpageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    FooterModule,
    BreadcrumbsModule
  ]
})
export class MathMasterpageModule { }
