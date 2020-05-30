import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, first } from 'rxjs/operators';

// asntes era injetado na raiz do app pra que todo mundo pudesse usar mas nao faz sentido pq
// o UserNotTakenValidatorService não é usado em todos os lugares
//@Injectable({ providedIn: 'root' })
@Injectable() 
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => {
                    return this.signUpService.checkUserNameTaken(userName);
                })).pipe(first())
        }
    }
}





