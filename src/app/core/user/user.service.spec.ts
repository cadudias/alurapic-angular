import { UserService } from "./user.service"
import { TokenService } from "../auth/token/token.service"

describe('o servico UserService', () => {
    beforeEach(() => {

    })

    // fumaça
    it('deve ser instanciado', () => {
        const tokenService = new TokenService()
        const service = new UserService(tokenService)
        expect(service).toBeTruthy()
    }) 
})