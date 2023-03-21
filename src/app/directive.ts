import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[ans]',
})
export class Directiveclass {
  @HostBinding('attr.enabled') bol: any;
  @HostListener('click')
  clickfunc() {
    let allbtns = document.querySelectorAll('button');
    allbtns.forEach((element) => {
      element.classList.remove('hover');
      element.className == 'correct'
        ? element.classList.add('green')
        : element.classList.add('red');
      element.disabled = true;
      setTimeout(() => {
        element.disabled = false;
      }, 1000);
    });
  }
  @HostListener('mouseover') hover() {
    this.el.nativeElement.classList.add('hover');
  }
  @HostListener('mouseleave') leave() {
    this.el.nativeElement.classList.remove('hover');
  }

  constructor(public el: ElementRef) {}
}
