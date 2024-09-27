import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../../services/theme/theme.service";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'math-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Загрузка темы из localStorage при инициализации компонента
    const storedTheme = localStorage.getItem('theme');
    this.isDarkTheme = storedTheme === 'dark';
    this.themeService.applyTheme(this.isDarkTheme ? 'dark' : 'light');
  }

  switchTheme(event: MatSlideToggleChange): void {
    this.isDarkTheme = event.checked; // Установка значения из события
    const theme = this.isDarkTheme ? 'dark' : 'light';
    this.themeService.applyTheme(theme);

    // Сохранение выбранной темы в localStorage
    localStorage.setItem('theme', theme);
  }
}
