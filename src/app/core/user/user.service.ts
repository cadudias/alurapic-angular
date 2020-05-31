import { Injectable } from '@angular/core';
import { TokenService } from '../auth/token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService 
{
    //no BehaviourSubject ja informamos um padrao que vai ser emitido logo na criacao dele
    //O behaviour é mais poderoso pq ele emite um valor mas esse valor continua sendo emitido para que
    //quem fizer subscribe mesmo que depois da emissao possa continuar escutando essa emissao
    private userSubject = new BehaviorSubject<User>(null)

    private userName: string = ''

    // quando entra no sistema o servico é criado, se tem token chama o decodeAndNotify
    constructor(private tokenService: TokenService) { 
        this.tokenService.hasToken() && this.decodeAndNotify()
    }
    
    setToken(token: any) {
        this.tokenService.setToken(token)
        this.decodeAndNotify()
    }

    // quem chamar getUser recebe um observale e consegue fazer o subscribe nele
    getUser() {
        return this.userSubject.asObservable()
    }

    decodeAndNotify() {
        const token = this.tokenService.getToken()
        
        const user = jwt_decode(token) as User
        
        this.userName = user.unique_name

        // dispara um evento pro header 
        this.userSubject.next(user)
    }

    isLogged() { 
        return this.tokenService.hasToken()
    }

    logout() {
        this.tokenService.removeToken()
        this.userSubject.next(null)
    }

    getUserName(){
        return this.userName
    }
}