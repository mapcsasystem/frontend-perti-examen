import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[errorImage]',
})
export class ErrorImageDirective {
  constructor(private el: ElementRef) {}
  @HostListener('error')
  onError(): void {
    this.el.nativeElement.src = 'assets/no-image-available.jpg';
  }
}
