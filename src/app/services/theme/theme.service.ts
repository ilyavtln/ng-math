import { Injectable } from '@angular/core';
import { DARK_THEME, LIGHT_THEME } from "./config";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightTheme = LIGHT_THEME;

  private darkTheme = DARK_THEME;

  // Применить тему
  applyTheme(theme: 'light' | 'dark'): void {
    const themeColors = theme === 'light' ? this.lightTheme : this.darkTheme;

    Object.keys(themeColors).forEach((key) => {
      const colorKey = key as keyof typeof themeColors;
      document.documentElement.style.setProperty(`--${key}`, themeColors[colorKey]);
    });
  }
}
