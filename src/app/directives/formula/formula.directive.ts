import {AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[mathFormula]'
})
export class FormulaDirective implements AfterViewInit {
  @Input('mathFormula') inputText: string = '';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.inputText = this.inputText.replaceAll('<<', '{{')

    this._renderer.setProperty(this._el.nativeElement, 'innerHTML', this.inputText);

    console.log(this.inputText);

    // Или, если нужно применить форматирование:
    // this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.inputText);
  }

}
