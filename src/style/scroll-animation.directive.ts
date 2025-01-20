import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true  // Add this line to make the directive standalone

})
export class ScrollAnimationDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialStyles();
  }

  private setInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 1.5s ease-out, transform 1.5s ease-out');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isElementInViewport()) {
      this.showElement();
    } else {
      this.hideElement();
    }
  }

  private isElementInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.bottom >= 0;
  }

  private showElement() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
  }

  private hideElement() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(50px)');
  }
}
