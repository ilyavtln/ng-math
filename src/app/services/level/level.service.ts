import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levelSubject = new BehaviorSubject<'easy' | 'normal' | 'hard'>('easy'); // Начальный уровень
  level$ = this.levelSubject.asObservable(); // Наблюдаемый поток

  changeLevel(newLevel: 'easy' | 'normal' | 'hard') {
    this.levelSubject.next(newLevel); // Обновляем уровень
  }
}
