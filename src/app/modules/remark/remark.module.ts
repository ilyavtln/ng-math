import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemarkComponent } from './remark.component';
import {MathjaxModule} from "mathjax-angular";



@NgModule({
  declarations: [
    RemarkComponent
  ],
  exports: [
    RemarkComponent
  ],
  imports: [
    CommonModule,
    MathjaxModule
  ]
})
export class RemarkModule { }
