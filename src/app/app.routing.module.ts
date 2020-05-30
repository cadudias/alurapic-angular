import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photos/photo-list/photo-list.component'
import { PhotoFormComponent } from './photos/photo-form/photo-form.component'
import { NotFoundComponent } from './errors/not-found/not-found.component'
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full', // tem que ser a rota especifica do path, sem isso se fosse qualquer rota ele ia cair aqui
        redirectTo: 'home', // se for a rota em branco chama a home
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule', // quando a rota home for acessada o angular carrega esse modulo
    },
    { 
        path: 'user/:userName', 
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
