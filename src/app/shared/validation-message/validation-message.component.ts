import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-validation-message',
    templateUrl: './validation-message.component.html'
})
export class ValidationMessageComponent {
    @Input() text = '';
 }