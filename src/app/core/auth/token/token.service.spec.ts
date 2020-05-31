import { TokenService } from "./token.service"

describe('o servico token service ', () => {
    let token;
    let service;

    beforeEach(() => {
        token = 'testetoken'
        service = new TokenService()
    })

    // fumaça
    it('deve ser instanciado', () => {
        expect(service).toBeTruthy()
    })

    it('deve guardar o token', () => {
        service.setToken(token)
        expect(service.hasToken()).toBeTruthy()
        // uma boa prática é testar o valor e nao a variavel
        expect(service.getToken()).toBe('testetoken')
    })

    it('deve remover o token', () => {
        service.setToken(token)

        service.removeToken()
        expect(service.hasToken()).toBeFalsy()
        expect(service.getToken()).toBeFalsy()
    })

    afterEach(() => {
        localStorage.clear()
    })
})