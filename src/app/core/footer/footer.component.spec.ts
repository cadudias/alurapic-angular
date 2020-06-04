import { TestBed } from '@angular/core/testing'
import { FooterComponent } from './footer.component'
import { RouterTestingModule } from '@angular/router/testing'
import { UserService } from '../user/user.service'
import { of } from 'rxjs/internal/observable/of'

describe('o componente footer', () => {
    let component: FooterComponent

    // é recomendando a montagem de componentes utilizando beforeEach assincronos
    // (compile module)
    // o componente pode ser grande entao é recomendada
    // a divisão da criação do componente de tela em 2 beforeEach

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            // o footer usa o servico de usuario pra buscar infos do usuario
            providers: [UserService],
            declarations: [FooterComponent]
        }).compileComponents() // compileComponents é async entao precisamos encapsular ele num async e nao o fakeAsync que me possibilita controlar a passagem de tempo em um teste
    })

    beforeEach(() => {
        const userService = TestBed.get(UserService)

        // o retorno da getUser é um observable entao usamos o 
        // of pra retornar um observable
        spyOn(userService, "getUser").and.returnValue(
            of({
                id: 1,
                unique_name: 'ricardo',
                email: 'teste@teste.com'
            })
        )

        const fixture = TestBed.createComponent(FooterComponent)
        component = fixture.componentInstance
        fixture.detectChanges() // executa o ciclo de vida do angular
    })

    it('deve ser instanciado', () => {
        expect(component).toBeTruthy()
    })
})