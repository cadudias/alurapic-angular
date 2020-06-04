import { RouterTestingModule } from '@angular/router/testing'
import { TestBed } from '@angular/core/testing'
import { UserNotTakenValidatorService } from './user-not-taken-validator.service'
import { SignUpService } from './signup.service'
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service'
import { SignUpComponent } from './signup.component'
import { ValidationMessageModule } from 'src/app/shared/validation-message/validation-message.module'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router'
import { of } from 'rxjs/internal/observable/of'
import { throwError } from 'rxjs'

describe('o formulário de signup', () => {

    let component: SignUpComponent
    let router: Router 
    let signupService: SignUpService

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
                ValidationMessageModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [
                UserNotTakenValidatorService,
                SignUpService,
                PlatformDetectorService
            ],
            declarations: [SignUpComponent]
        }).compileComponents() // compileComponents é async entao precisamos encapsular ele num async e nao o fakeAsync que me possibilita controlar a passagem de tempo em um teste
    })

    beforeEach(() => {
        router = TestBed.get(Router)
        signupService = TestBed.get(SignUpService)

        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('deve ser instanciado', () => {
        expect(component).toBeTruthy()
    })

    it('deve cadastrar um usuario', () => {

        const navigateSpy = spyOn(router, 'navigate')
        const signupSpy = spyOn(signupService, 'signup').and.returnValues(of(null))

        component.signupForm.get('email').setValue('ricardo@teste.com')
        component.signupForm.get('fullName').setValue('Ricardo Dias')
        component.signupForm.get('userName').setValue('ricardo')
        component.signupForm.get('password').setValue('12345678')
        
        component.signup()

        expect(navigateSpy).toHaveBeenCalledWith([''])
        expect(signupSpy).toHaveBeenCalled()
    })

    it('deve logar erro em caso de erro', () => { 
        spyOn(signupService, 'signup').and.returnValues(throwError("erro de servidor"))
        const spyLog = spyOn(console, 'log')
        
        component.signupForm.get('email').setValue('ricardo@teste.com')
        component.signupForm.get('fullName').setValue('Ricardo Dias')
        component.signupForm.get('userName').setValue('ricardo')
        component.signupForm.get('password').setValue('12345678')
        
        component.signup()

        expect(spyLog).toHaveBeenCalledWith("erro de servidor")
    })
})
