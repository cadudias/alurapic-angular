import { isLowerCase } from './lower-case.validator' 

describe('A função isLowerCase', () => {
    it('deve confirmar quando recebe um texto em caixa baixa', () => {
        const resultado = isLowerCase("mario")
        expect(resultado).toBeTruthy()
    })

    it('deve validar quando o valor enviado for caixa alta', () => {
        const resultado = isLowerCase("Mario")
        expect(resultado).toBeFalsy()
    })
})