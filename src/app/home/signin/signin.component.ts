import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    loginForm: FormGroup
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLElement>

    constructor(private formBuilder: FormBuilder, 
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
    
        this.authService
            .authenticate(userName, password)
            .subscribe( // nos isncrevemos no observable pra que ele seja disparado
                () => {
                    console.log(userName)
                    var page = 1;
                    this.router.navigate(['user', userName])
                    //this.router.navigateByUrl('user/'+ userName)
                },
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus()
                }
            );
    }
}