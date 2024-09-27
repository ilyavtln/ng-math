import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathNavComponent } from './math-nav.component';
import { RouterModule } from '@angular/router';
import {ThemeTogglerModule} from "../../core/theme-toggler/theme-toggler.module";



@NgModule({
  declarations: [
    MathNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeTogglerModule
  ],
  exports: [
    MathNavComponent
  ]
})
export class MathNavModule { }
