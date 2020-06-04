import { HeaderComponent } from './header.component'
import { RouterTestingModule } from '@angular/router/testing'
import { UserService } from '../user/user.service'
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs/internal/observable/of'
import { Router } from '@angular/router'

describe('o componente header', () => {
    let component: HeaderComponent
    let userService: UserService
    let router: Router

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            // o footer usa o servico de usuario pra buscar infos do usuario
            providers: [UserService],
            declarations: [HeaderComponent]
        }).compileComponents() // compileComponents é async entao precisamos encapsular ele num async e nao o fakeAsync que me possibilita controlar a passagem de tempo em um teste
    })

    beforeEach(() => {
        userService = TestBed.get(UserService)
        router = TestBed.get(Router) // captura o router que o testBed montou

        spyOn(userService, 'getUser').and.returnValue(
            of({
                id: 1,
                unique_name: 'ricardo',
                email: 'teste@teste.com'
            })
        )

        const fixture = TestBed.createComponent(HeaderComponent)
        component = fixture.componentInstance
        fixture.detectChanges() // executa o ciclo de vida do angular
    })

    it('deve ser instanciado', () => {
        expect(component).toBeTruthy()
    })

    it('deve realizar o logout', () => {
        const userServiceSpy = spyOn(userService, 'logout').and.returnValues(null)
        const routerSpy = spyOn(router, 'navigate').and.returnValues(null)
        component.logout()
        expect(userServiceSpy).toHaveBeenCalled()
        expect(routerSpy).toHaveBeenCalledWith([''])
    })
})