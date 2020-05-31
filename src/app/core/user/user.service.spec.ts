import { UserService } from "./user.service"
import { TokenService } from "../auth/token/token.service"

describe('o servico UserService', () => {
    let tokenService
    let service

    beforeEach(() => {
        tokenService = new TokenService()
        service = new UserService(tokenService)
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
})