import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemarkComponent } from './remark.component';



@NgModule({
  declarations: [
    RemarkComponent
  ],
  exports: [
    RemarkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RemarkModule { }
