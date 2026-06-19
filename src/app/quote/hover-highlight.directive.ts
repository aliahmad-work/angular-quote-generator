import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive ({ selector: '[appHoverHighlight]' })

export class HoverHighlightDirective {

    @HostBinding('style.backgroundColor')
    background = '';

    @HostListener('mouseenter') onMouseEnter() {
        this.background = 'lightyellow';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.background = '';
    }
}