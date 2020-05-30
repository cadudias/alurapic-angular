import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationMessageModule } from '../shared/validation-message/validation-message.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [ 
        SignInComponent, 
        SignUpComponent, 
        HomeComponent 
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        ValidationMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService // se algum compnent precisar desse servico injetado ele vai estar disponivel pra todos os modulos que o home module usa
    ]
})
export class HomeModule {  }