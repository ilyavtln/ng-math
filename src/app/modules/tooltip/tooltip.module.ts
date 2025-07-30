import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';



@NgModule({
  declarations: [
    TooltipComponent
  ],
  exports: [
    TooltipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TooltipModule { }
