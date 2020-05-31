import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Photo } from "./photo";

const API = "http://localhost:3000"

// disponibiliza esse servico na raiz, qualquer parte da aplicacao que precisar desse service consegue usar ele
@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(API + '/' + userName + '/photos')
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString())
        
        return this.http.get<Photo[]>(API + '/' + userName + '/photos', { params: params })
    }

    upload(description: string, allowComments: boolean, file: File) {
        // tem file entao tem que ser um formData
        const formData = new FormData();
        // o que o backend espera
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        return this.http.post(API + '/photos/upload', formData)
    } 
}