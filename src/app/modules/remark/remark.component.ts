import {Component, Input} from '@angular/core';

@Component({
    selector: 'math-remark',
    templateUrl: './remark.component.html',
    styleUrl: './remark.component.scss',
    standalone: false
})
export class RemarkComponent {
  @Input() title = 'Замечание';
  @Input() mathjax = false;
}
