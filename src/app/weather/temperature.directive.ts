import { Directive, ElementRef, OnInit, HostListener, Renderer2, Attribute, Input } from "@angular/core";

@Directive({
    selector: '.temperature'
})
export class TemperatureDirective {
    private tooltip: HTMLElement = null;
    @Input() temperatureCelsius: number;

    constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}

    @HostListener('mousemove', ['$event']) onMouseOver(event: MouseEvent) {
        if (this.tooltip === null) {
            this.tooltip = this._renderer.createElement('div');
            const text = this._renderer.createText('Fahrenheit: ' + (this.temperatureCelsius * 1.8 + 32));
            this._renderer.appendChild(this.tooltip, text);
            this._renderer.addClass(this.tooltip, 'tooltip');
        }
        this._renderer.setStyle(this.tooltip, 'top', '' + (event.clientY + 3) + 'px');
        this._renderer.setStyle(this.tooltip, 'left', '' + (event.clientX  + 10) + 'px');
        this._renderer.setProperty(this.tooltip, 'hidden', '');
        this._renderer.appendChild(this._elRef.nativeElement, this.tooltip);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._renderer.setProperty(this.tooltip, 'hidden', 'true');
    }


}