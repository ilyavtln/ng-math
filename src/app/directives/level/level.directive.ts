import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LevelService } from '../../services/level/level.service';

@Directive({
  selector: '[mathLevel]'
})
export class LevelDirective implements OnInit {
  @Input('mathLevel') levelClass!: string; // Принимает уровень видимости для элемента

  constructor(private el: ElementRef, private levelService: LevelService) {}

  ngOnInit() {
    this.levelService.level$.subscribe(currentLevel => {
      this.updateVisibility(currentLevel as 'easy' | 'normal' | 'hard'); // Приведение типа
    });
    this.updateVisibility(this.levelService.levelSubject.getValue() as 'easy' | 'normal' | 'hard'); // Приведение типа
  }

  private updateVisibility(currentLevel: 'easy' | 'normal' | 'hard') {
    const levels: { [key in 'easy' | 'normal' | 'hard']: string[] } = {
      easy: ['only-easy', 'up-easy'],
      normal: ['only-normal', 'up-easy', 'up-normal'],
      hard: ['only-hard', 'up-easy', 'up-normal'],
    };

    this.el.nativeElement.style.display = levels[currentLevel].includes(this.levelClass) ? '' : 'none';
  }
}
