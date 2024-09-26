import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import {NavigationModule} from "../../core/common-ui/navigation/navigation.module";
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: ErrorComponent,
  }
]

@NgModule({
  declarations: [
    ErrorComponent
  ],
  exports: [ErrorComponent],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ErrorModule { }
