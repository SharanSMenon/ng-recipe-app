import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    @HostListener('document:click', ['$event']) click(event: Event) {
        // this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        const item  = this.elRef.nativeElement.querySelector('.dropdown-menu');
        if (this.isOpen && !this.elRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(item, 'show');
            this.isOpen = !this.isOpen;
        }
      }
    @HostListener('click') toggleOpen() {
        const item  = this.elRef.nativeElement.querySelector('.dropdown-menu');
        if (this.isOpen) {
            this.renderer.removeClass(item, 'show');
        } else if (!this.isOpen) {
            this.renderer.addClass(item, 'show');
        }
        this.isOpen = !this.isOpen;
    }
}
