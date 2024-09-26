import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties.component';
import {RouterModule, Routes} from "@angular/router";
import {LevelDirectiveModule} from "../../../../directives/level/level-directive.module";

const ROUTES: Routes = [
  {
    path: '',
    component: PropertiesComponent
  },
]

@NgModule({
  declarations: [
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    LevelDirectiveModule,
  ]
})
export class PropertiesModule { }
