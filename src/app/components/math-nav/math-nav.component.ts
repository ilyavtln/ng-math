import { Component, HostListener } from '@angular/core';
import * as content from './math-nav.config';
import { INavmenuItem } from 'src/app/core/interfaces/navmenuItem.interface';
import { LevelService } from '../../services/level/level.service';

@Component({
  selector: 'math-nav',
  templateUrl: './math-nav.component.html',
  styleUrls: ['./math-nav.component.scss']
})
export class MathNavComponent {
  readonly content = content;

  activeSubMenu: INavmenuItem | null = null;
  activeSubMenuIndex: number | null = null; // Индекс активного пункта меню

  constructor(private levelService: LevelService) {}

  ngAfterViewInit() {
    const levelSelect = document.getElementById('level') as HTMLSelectElement;
    levelSelect.addEventListener('change', (event) => {
      const level = (event.target as HTMLSelectElement).value as 'easy' | 'normal' | 'hard';
      this.levelService.changeLevel(level);
    });

    // Инициализация начального уровня
    levelSelect.dispatchEvent(new Event('change'));
  }

  showSubMenu(index: number, item: INavmenuItem) {
    if (this.activeSubMenuIndex === index) {
      this.activeSubMenuIndex = null; // Закрываем подменю при повторном клике
    } else {
      this.activeSubMenuIndex = index;
    }
    this.activeSubMenu = item;
  }

  closeSubMenu() {
    this.activeSubMenuIndex = null;
    this.activeSubMenu = null;
  }

  isActive(index: number): boolean {
    return this.activeSubMenuIndex === index || this.isLinkActive(index);
  }

  isLinkActive(index: number): boolean {
    const menuItem = this.content.MAIN_MENU[index];
    // Проверяем, активна ли основная ссылка или любая из подменю
    return menuItem.href === location.pathname || !!(menuItem.subMenu && menuItem.subMenu.some(subItem => subItem.href === location.pathname));
  }


  // Обработчик кликов по всему документу
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    // Проверяем, что клик произошел за пределами элементов меню
    if (!clickedElement.closest('.math-nav') && !clickedElement.closest('.math-nav__submenu')) {
      this.closeSubMenu();
    }
  }
}
