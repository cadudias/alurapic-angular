import { UserService } from "./user.service"
import { TestBed } from '@angular/core/testing'

describe('o servico UserService', () => {
    let service

    beforeEach(() => {
        // configura a instanciação do servico como se o angular estivesse instanciando
        // é como se fosse um minimodulo
        // temos que instanciar só o que precisamos no teste
        TestBed.configureTestingModule({
            providers: [UserService]
        })
        service = TestBed.get(UserService)
    })

    // fumaça
    it('deve ser instanciado', () => {      
        expect(service).toBeTruthy()
    }) 

    it('deve, atraves de um token, recuperar informações do usuario', () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InJpY2FyZG8iLCJuYmYiOjE1OTA5NTY4MzYsImV4cCI6MTU5MDk2NDAzNiwiaWF0IjoxNTkwOTU2ODM2fQ.HTwi45uOu5BjleeWmG0cvgoejmyvlT1cbxKT2FiG7VQ"
        service.setToken(token)
        expect(service.isLogged()).toBeTruthy()
        expect(service.getUserName()).toBe("ricardo")
    }) 

    it('deve limpar as informações no logout', () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InJpY2FyZG8iLCJuYmYiOjE1OTA5NTY4MzYsImV4cCI6MTU5MDk2NDAzNiwiaWF0IjoxNTkwOTU2ODM2fQ.HTwi45uOu5BjleeWmG0cvgoejmyvlT1cbxKT2FiG7VQ"
        service.setToken(token)
        service.logout()
        expect(service.isLogged()).toBeFalsy()
        expect(service.getUserName()).toBe('')
    })
})