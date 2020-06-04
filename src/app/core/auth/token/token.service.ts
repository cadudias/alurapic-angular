import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {

    private chave = 'authToken'

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        localStorage.setItem(this.chave, token)
    }

    getToken() {
        return localStorage.getItem(this.chave);
    }

    removeToken() {
        localStorage.removeItem(this.chave);
    }
}