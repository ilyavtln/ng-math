import {Component, Input} from '@angular/core';

@Component({
    selector: 'math-theorem',
    templateUrl: './theorem.component.html',
    styleUrl: './theorem.component.scss',
    standalone: false
})
export class TheoremComponent {
  @Input() title = 'Теорема';
}
