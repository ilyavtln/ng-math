import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoremComponent } from './theorem.component';
import {MathjaxModule} from "mathjax-angular";



@NgModule({
  declarations: [
    TheoremComponent
  ],
  exports: [
    TheoremComponent
  ],
  imports: [
    CommonModule,
    MathjaxModule
  ]
})
export class TheoremModule { }
