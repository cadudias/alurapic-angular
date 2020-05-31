import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {

    private chave = 'authToken'

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        localStorage.setItem(this.chave, JSON.stringify(token))
    }

    getToken() {
        return window.localStorage.getItem(this.chave);
    }

    removeToken() {
        window.localStorage.removeItem(this.chave);
    }
}