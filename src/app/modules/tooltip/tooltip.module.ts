import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import {MathjaxModule} from "mathjax-angular";



@NgModule({
  declarations: [
    TooltipComponent
  ],
  exports: [
    TooltipComponent
  ],
  imports: [
    CommonModule,
    MathjaxModule
  ]
})
export class TooltipModule { }
