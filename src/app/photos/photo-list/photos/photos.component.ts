import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnChanges {

  // inbound property pra passar o array de fotos pra esse compoente 
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  // se houver mudanca vai ser ser adicionada dinamicamente uma propriedade com o mesmo nome da inbound property
  // que sofreu a mudança
  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  //O slice() sempre recebe a posição inicial que queremos considerar, e a final não inclusiva, 
  // "fatiando" o array. Ou seja, quando o primeiro index é 0, o outro vale 3, e o slice() pegará a 
  // fatia de 0 a 2. Esta segunda posição não é inclusiva, e se tivéssemos colocado a posição final como 2, 
  // seriam pegos 0 e 1, por isto utilizamos index + 3. 
  // Na passada seguinte, o primeiro index será 3, e o final, 6, sendo pegos 3, 4 e 5.
  groupColumns(photos: Photo[]) {
      const newRows = [];

      for(let index = 0; index < photos.length; index+=3) {
          newRows.push(photos.slice(index, index + 3));
      }
      return newRows;
  }

}
