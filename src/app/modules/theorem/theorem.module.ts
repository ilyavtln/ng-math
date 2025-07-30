import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoremComponent } from './theorem.component';



@NgModule({
  declarations: [
    TheoremComponent
  ],
  exports: [
    TheoremComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TheoremModule { }
