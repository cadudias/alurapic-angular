import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
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





