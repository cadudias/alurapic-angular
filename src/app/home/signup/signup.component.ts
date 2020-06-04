import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken-validator.service';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ] // esse component que prove o servico
})
export class SignUpComponent implements OnInit{ 

    signupForm: FormGroup
    @ViewChild('emailInput') emailInput: ElementRef<HTMLElement>

    constructor(
        private formBuilder: FormBuilder, 
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService){}
    
    ngOnInit(): void {
       this.signupForm = this.formBuilder.group({
           email: [
               '',  
                [   
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: [
                '',  
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30)          
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                [this.userNotTakenValidatorService.checkUserNameTaken()]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(14)
                ]
            ]
       })

       this.platformDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus()
    }

    signup() 
    {
        // todo - descobrir pq essa validacao nao funciona nos testes
        //if (!this.signupForm.invalid || this.signupForm.pending) 
        //{
            const newUser = this.signupForm.getRawValue() as NewUser;

            this.signUpService.signup(newUser).subscribe(
              () => this.router.navigate(['']),
              (err) => {
                console.log(err);
              }
            );
       // }
    }
}