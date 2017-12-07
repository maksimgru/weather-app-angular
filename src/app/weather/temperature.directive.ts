import { Directive, ElementRef, OnInit, HostListener, Renderer2, Attribute, Input } from "@angular/core";

@Directive({
    selector: '.temperature'
})
export class TemperatureDirective {
    private tooltip: HTMLElement = null;

    @HostListener('mousemove', ['$event']) onMouseOver(event: MouseEvent) {
        if (this.tooltip === null) {
            this.tooltip = this._renderer.createElement(this._elRef.nativeElement, 'div');
        }
        this.tooltip.innerText = 'Fahrenheit: ' + (this.temperatureCelsius * 1.8 + 32);
        this._renderer.addClass(this.tooltip, 'tooltip');
        this._renderer.setStyle(this.tooltip, 'top', '' + (event.clientY + 3));
        this._renderer.setStyle(this.tooltip, 'left', '' + (event.clientX  + 10));
        this._renderer.setProperty(this.tooltip, 'hidden', '');
        console.log(this.tooltip);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._renderer.setProperty(this.tooltip, 'hidden', 'true');
    }
    
    @Input() temperatureCelsius: number;

    constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}
}