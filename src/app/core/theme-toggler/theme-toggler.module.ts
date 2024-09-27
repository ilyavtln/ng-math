import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeTogglerComponent } from './theme-toggler.component';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ThemeTogglerComponent
  ],
  exports: [
    ThemeTogglerComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggle,
    FormsModule
  ]
})
export class ThemeTogglerModule { }
