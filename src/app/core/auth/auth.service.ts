import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService 
{
    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    authenticate(userName: string, password: string): Observable<Usuario> {

        // post retorna um observable
        return this.http.post<any>(API_URL + '/user/login', { userName, password })
        .pipe(tap(res => {
            const usuarioAutenticado = {
                userName: res.userName,
                token: res.token
            }

            this.userService.setToken(usuarioAutenticado);

            return usuarioAutenticado
        }))
    }
}