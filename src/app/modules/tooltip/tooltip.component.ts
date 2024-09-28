import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'math-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  isTooltipVisible = false;

  @HostListener('mouseenter')
  showTooltip(): void {
    if (window.innerWidth >= 768) { // Порог для больших экранов
      this.isTooltipVisible = true;
    }
  }

  @HostListener('mouseleave')
  hideTooltip(): void {
    this.isTooltipVisible = false;
  }
}
