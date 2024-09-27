import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {IHeroBanner} from "../../core/interfaces/hero-banner.interface";

@Component({
  selector: 'math-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
  host: { class: 'hero-banner'},
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeroBannerComponent {
  @Input() data!: IHeroBanner;
}
