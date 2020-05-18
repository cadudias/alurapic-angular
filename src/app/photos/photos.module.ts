
import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

// esse modulo é um agregador pra que outros modulos possam importar isso
@NgModule({
    imports: [ 
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule {}