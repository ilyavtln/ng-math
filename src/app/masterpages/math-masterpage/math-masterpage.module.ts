import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathMasterpageComponent } from './math-masterpage.component';
import { RouterModule } from "@angular/router";
import {NavigationModule} from "../../core/common-ui/navigation/navigation.module";
import {FooterModule} from "../../core/common-ui/footer/footer.module";



@NgModule({
  declarations: [
    MathMasterpageComponent
  ],
  exports: [MathMasterpageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    FooterModule
  ]
})
export class MathMasterpageModule { }
