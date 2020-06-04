import { AuthService } from "./auth.service"
import { TestBed, tick, fakeAsync } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserService } from '../user/user.service'

describe('o servico AuthService', () => {
    let service
    let httpMock: HttpTestingController
    let userService: UserService

    beforeEach(() => {
        // configura a instanciação do servico como se o angular estivesse instanciando
        // é como se fosse um minimodulo
        // temos que instanciar só o que precisamos no teste
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        })
        service = TestBed.get(AuthService)
        httpMock = TestBed.get(HttpTestingController)
        userService = TestBed.get(UserService) // da pra pegar o servico que o Testbed ja criou
    })

    // fumaça
    it('deve ser instanciado', () => {      
        expect(service).toBeTruthy()
    }) 

    // simula a passagem de tempo quando queremnos simular o tempo mde resposta do servidor 
    // usamos o tick
    it('deve autenticar o usuario', fakeAsync(() => {      
        const fakeBody = {
            userName: 'ricardo',
            token: 'testeToken'
        }

        // duble para metodos que nao queremos testar
        const spy = spyOn(userService, "setToken").and.returnValue(null)

        service.authenticate('ricardo', '1234').subscribe(authenticatedUser => {
            // mais recomendado para objetos é o toEqual e nao o toBe
            expect(authenticatedUser).toEqual(fakeBody)
            expect(spy).toHaveBeenCalledWith('testeToken')
        })

        // expectOne - algum metodo do teste executou uma chamada http
        const request = httpMock.expectOne((req) => {
            return req.method === "POST"
        })

        // flush é o retorno da requisicao
        request.flush(fakeBody)

        // não é uum sleep, nao para a execucao
        // simula uma passagem de tempo de um metodo
        tick()
    }))
})