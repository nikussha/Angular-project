import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ans]',
})
export class AnswersDirective {
  constructor(public el: ElementRef) {}
}
