import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SignInComponent } from '../home/signin/signin.component'
import { SignUpComponent } from '../home/signup/signup.component'

import { AuthGuard } from '../core/auth/auth.guard'
import { HomeComponent } from '../home/home.component'

// ESSAS ROTAS SAO SUBORDINADAS AS ROTAS DO PAI APP.ROUTING.MODULE
const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard], // se nao ta logado vai pra home
        //Com isso, teremos um caminho para SignInComponent e para SignUpComponent, 
        //e se acessarmos localhost:4200, teremos HomeComponent. 
        //Por conta do seu path, que é igual à da rota filha, o SignInComponent será exibido primeiro. 
        //No entanto, se clicarmos no link de SignInComponent para acessarmos a página de cadastro de usuário, 
        //é o SignUpComponent que será carregado, dentro do Router outlet do HomeComponent.
        children: [
            {
                path: '', // como o path é igual mostra a filha primeiro no router-outlet
                component: SignInComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            }
        ]
    }
]

@NgModule({
    // forChild é usada no carregento dos filhos de uma rota
    // só o pai pode usar o forRoot
    imports: [ RouterModule.forChild(routes) ],
    // o router-outlet precisa das diretivas que existem aqui, quem importar o AppRoutingModule
    // vai ganhar de quebra o RouterModule
    exports: [ RouterModule ]
})
export class HomeRoutingModule {

}
