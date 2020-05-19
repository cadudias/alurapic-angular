import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    logInForm: FormGroup

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.logInForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
}