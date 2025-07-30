import { Component} from '@angular/core';
import * as content from './basic.config'

@Component({
    selector: 'math-basic',
    templateUrl: './basic.component.html',
    styleUrl: './basic.component.scss',
    standalone: false
})
export class BasicComponent {
  readonly content = content;
  // ngAfterViewInit() {
  //   (window as any).MathJax.typeset();
  // }
}
