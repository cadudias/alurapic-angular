import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';  

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: String = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() : void {
    // pra rota que foi ativada procura se tem a propriedade photos já carregada
    this.photos = this.activatedRoute.snapshot.data.photos

    // debounceTime - ignora todas as emissoes e depois de 300 ms pega o valor
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter)
  }

  // deixa de alocal memoria pro observable
  // se chamasse o .complete() em algum momento nao precisaria
  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }
}
