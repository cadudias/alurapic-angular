import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

// pra usar a diretiva como atributo precisamos colocar o selector entre colchetes
@Directive({
    selector: '[apDarkenOnHover]' 
})
export class DarkenOnHoverDirective 
{
    @Input() brigthness = '70%';
    // ElementRef - pega o eleemnto do dom no qual a diretiva esta adicionada
    // é uma casca de proteção do angular antes de tocarmos no eleemnto nativo
    // Renderer - permite manipular o dom garantimos que esse codigo nao da problema na hora de uma renderizacao pelo backend
    constructor(private el: ElementRef, private render: Renderer){}

    // HostListener -  qual evento queremos responder pro evento do host que nesse caso é o elemento
    // hospedeiro no qual a diretiva esta colocada
    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brigthness})`)
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
    }
}