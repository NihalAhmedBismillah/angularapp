import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appMyhighlight]"
})
export class MyhighlightDirective {

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
