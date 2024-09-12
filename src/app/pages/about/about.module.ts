import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  { path: '', component: AboutComponent },
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AboutModule { }
