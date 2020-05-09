import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Photo } from "./photo";

const API = "http://localhost:3000"

// disponibiliza esse servico na raiz, qualquer parte da aplicacao que precisar desse service consegue usar ele
@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');
    }
}