import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseBannerComponent } from './course-banner.component';
import {ChipModule} from "../chip/chip.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CourseBannerComponent
  ],
  exports: [
    CourseBannerComponent
  ],
  imports: [
    CommonModule,
    ChipModule,
    RouterLink
  ]
})
export class CourseBannerModule { }
