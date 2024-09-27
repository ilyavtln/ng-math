import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import {RouterLink} from "@angular/router";
import {ThemeTogglerModule} from "../../theme-toggler/theme-toggler.module";



@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ThemeTogglerModule
  ]
})
export class NavigationModule { }
