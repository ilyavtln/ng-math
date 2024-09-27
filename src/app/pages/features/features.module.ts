import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  { path: '', component: FeaturesComponent },
]

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class FeaturesModule { }
