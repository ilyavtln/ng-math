import { Component } from '@angular/core';
import * as content from './math-nav.config';
import { INavmenuItem } from 'src/app/core/interfaces/navmenuItem.interface';
import { LevelService } from '../../services/level/level.service'; // Импортируйте LevelService

@Component({
  selector: 'math-nav',
  templateUrl: './math-nav.component.html',
  styleUrls: ['./math-nav.component.scss'] // Исправлено на styleUrls
})
export class MathNavComponent {
  readonly content = content;

  activeSubMenu: INavmenuItem | null = null;
  activeSubMenuIndex: number | null = null; // Индекс активного пункта меню

  constructor(private levelService: LevelService) {} // Внедрите LevelService

  ngAfterViewInit() {
    const levelSelect = document.getElementById('level') as HTMLSelectElement;
    levelSelect.addEventListener('change', (event) => {
      const level = (event.target as HTMLSelectElement).value as 'easy' | 'normal' | 'hard'; // Приведение типа
      this.levelService.changeLevel(level); // Вызов метода changeLevel из LevelService
    });

    // Инициализация начального уровня
    levelSelect.dispatchEvent(new Event('change'));
  }

  showSubMenu(index: number, item: INavmenuItem) {
    if (this.activeSubMenuIndex === index) {
      this.activeSubMenuIndex = null; // Закрываем подменю при повторном клике
    } else {
      this.activeSubMenuIndex = index; // Устанавливаем активный пункт меню
    }
    this.activeSubMenu = item;
  }

  closeSubMenu() {
    this.activeSubMenuIndex = null; // Закрываем подменю
    this.activeSubMenu = null;
  }

  isActive(index: number): boolean {
    return this.activeSubMenuIndex === index; // Проверяем, активен ли пункт меню
  }
}
