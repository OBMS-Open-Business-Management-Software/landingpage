import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[obmsScrollTo]',
  standalone: true,
})
export class ScrollToDirective {
  @Input() obmsScrollTo = '';

  @HostListener('click')
  onClick() {
    setTimeout(() => {
      const targetElement = document.getElementById(this.obmsScrollTo);

      if (targetElement) {
        const offset = 5 * 16;
        const top =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    });
  }
}
