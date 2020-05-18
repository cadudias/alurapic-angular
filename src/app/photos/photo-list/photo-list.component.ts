import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = []
  filter: string = ''
 
  // o tela de photo-list tem um property binding desse hasMore 
  hasMore: boolean = true
  currentPage: number = 1
  username: string = ''

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.username
    this.photos = this.activatedRoute.snapshot.data['photos']
  }

  load() {
    console.log("load")
    // a cada clique adiciona uma pagina pra buscar mais dados
    // ++this.currentPage - ja carregou uma pagina, se esta tentando carregar mais ja deve ser a segunda
    this.photoService
      .listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
          // desse jeito atribuimos um novo valor pra photos e o angular consegue
          // detectar um changed nessa propriedade e atualizar a lista
          this.photos = this.photos.concat(photos)

          // se não tem mais photos seta o hasMore pra false e esconde o botao
          // débito: esse jeito só é ruim pq o botao aparece mesmo se nao houverem mais itens pra carregar
          // o correto seria que se nao tem mais itens suficientes pra carregar ja nem mostra o botao
          if(!photos.length) this.hasMore = false
      })
  }
}
