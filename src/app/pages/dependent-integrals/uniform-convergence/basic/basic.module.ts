import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import {RouterModule, Routes} from "@angular/router";
import {IntroductionModule} from "@pages/dependent-integrals/components/introduction/introduction.module";
import {MathjaxModule} from "mathjax-angular";
import {LevelDirectiveModule} from "../../../../directives/level/level-directive.module";
import {RemarkModule} from "../../../../modules/remark/remark.module";
import {TheoremModule} from "../../../../modules/theorem/theorem.module";

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
    LevelDirectiveModule,
    RemarkModule,
    TheoremModule
  ]
})
export class BasicModule { }
