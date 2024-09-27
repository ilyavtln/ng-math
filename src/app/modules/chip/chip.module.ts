import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip.component';



@NgModule({
  declarations: [
    ChipComponent
  ],
  exports: [
    ChipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChipModule { }
