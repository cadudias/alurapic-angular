import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit {

  // inbound property pra passar o array de fotos pra esse compoente 
  @Input() photos: Photo[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
