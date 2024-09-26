import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathNavComponent } from './math-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MathNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MathNavComponent
  ]
})
export class MathNavModule { }
