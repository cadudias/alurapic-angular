import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
    if(isLowerCase(control.value)) 
        return { lowerCase: true }     // lowerCase é a propriedade que vai testar no form

    return null;
}

export function isLowerCase(value: string) {
    return value.trim() && /^[a-z0-9_\-]+$/.test(value);
}
