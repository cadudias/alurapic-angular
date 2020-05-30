import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        {
            // toda vez que um http interceptor for solicitado é pra usar o meu interceptor
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true // se tiver outro interceptador é pra jogar pra ele
        }
    ]
})
export class HeaderModule {}