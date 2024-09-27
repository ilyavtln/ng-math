import {Component, Input} from '@angular/core';
import {IHeroBanner} from "../../core/interfaces/hero-banner.interface";
import {IBadge} from "../../core/interfaces/badge.interface";

@Component({
  selector: 'math-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input() chip!: IBadge;
}
