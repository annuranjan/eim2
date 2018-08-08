import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
    selector: '[appGrade]'
})
export class GradeDirective {

    private regex: RegExp = new RegExp(/^[a-fA-f]$/g);
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-'];

    constructor(private el: ElementRef) { }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }

        let current: string = this.el.nativeElement.value;
        current = current.toUpperCase();
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
    @HostListener('keyup', ['$event'])
    onkeyup(event: KeyboardEvent) {
        this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }
}
