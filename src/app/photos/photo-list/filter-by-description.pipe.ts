import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform 
{
    // photos - em quem vamos aplicar a transformação
    // 2 parametro: default é ...args: any[] - um array com todos os parametros que forem passados
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase()

        if(descriptionQuery)
        {
            // pra cada foto verifica se a descricao contem o criterio de filtragem que foi passado
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(descriptionQuery))
        }else{
            return photos
        }
    }
}