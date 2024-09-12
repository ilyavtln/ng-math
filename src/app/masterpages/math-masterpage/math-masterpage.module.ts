import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathMasterpageComponent } from './math-masterpage.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    MathMasterpageComponent
  ],
  exports: [MathMasterpageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MathMasterpageModule { }
