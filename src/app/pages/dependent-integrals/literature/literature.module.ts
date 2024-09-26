import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteratureComponent } from './literature.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: LiteratureComponent
  },
]

@NgModule({
  declarations: [
    LiteratureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class LiteratureModule { }
