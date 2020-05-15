import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photo-list/photo-list.component'
import { PhotoFormComponent } from './photo-form/photo-form.component'
import { NotFoundComponent } from '../errors/not-found/not-found.component'
import { PhotoListResolver } from './photo-list/photo-list.resolver'

const routes: Routes = [
    { 
        path: 'user/:username', 
        component: PhotoListComponent, 
        resolve: {
            photos: PhotoListResolver // manda pro component PhotoListComponent já com a lista de photos ou vazio
        }
    }, 
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    // forRoot seria a rota raiz da nossa aplicacao
    // configura o routerModule levando em consideracao as nossas rotas
    imports: [ RouterModule.forRoot(routes) ],
    // o router-outlet precisa das diretivas que existem aqui, quem importar o AppRoutingModule
    // vai ganhar de quebra o RouterModule
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
