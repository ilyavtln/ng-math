import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import {RouterModule, Routes} from "@angular/router";
import {IntroductionModule} from "@pages/dependent-integrals/components/introduction/introduction.module";
import {MathjaxModule} from "mathjax-angular";
import {LevelDirective} from "../../../../directives/level/level.directive";
import {MathDirectiveModule} from "../../../../directives/math-directive.module";

const ROUTES: Routes = [
  {
    path: '',
    component: BasicComponent
  },
]

@NgModule({
  declarations: [
    BasicComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    IntroductionModule,
    MathjaxModule,
    MathDirectiveModule
  ]
})
export class BasicModule { }
