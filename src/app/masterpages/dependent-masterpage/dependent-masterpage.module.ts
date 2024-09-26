import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependentMasterpageComponent } from './dependent-masterpage.component';
import {BreadcrumbsModule} from "../../core/breadcrumbs/breadcrumbs.module";
import {FooterModule} from "../../core/common-ui/footer/footer.module";
import {NavigationModule} from "../../core/common-ui/navigation/navigation.module";
import {RouterOutlet} from "@angular/router";
import {MathNavModule} from "../../components/math-nav/math-nav.module";



@NgModule({
  declarations: [
    DependentMasterpageComponent
  ],
  exports: [DependentMasterpageComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    FooterModule,
    NavigationModule,
    RouterOutlet,
    MathNavModule
  ]
})
export class DependentMasterpageModule { }
