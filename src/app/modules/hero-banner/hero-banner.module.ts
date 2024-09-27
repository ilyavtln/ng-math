import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeroBannerComponent } from './hero-banner.component';
import {RouterLink} from "@angular/router";
import {ChipModule} from "../chip/chip.module";



@NgModule({
  declarations: [
    HeroBannerComponent
  ],
  exports: [
    HeroBannerComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    ChipModule
  ]
})
export class HeroBannerModule { }
