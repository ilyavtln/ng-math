import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelDirective } from './level.directive'

@NgModule({
  declarations: [LevelDirective],
  imports: [CommonModule],
  exports: [LevelDirective] // Экспортируйте директиву, чтобы использовать её в других модулях
})
export class LevelDirectiveModule {}
