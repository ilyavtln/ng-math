import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import {RouterModule, Routes} from "@angular/router";


const ROUTES: Routes = [
  { path: '', component: BasicComponent },
]

@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class BasicModule { }
