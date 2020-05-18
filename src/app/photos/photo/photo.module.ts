import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PhotoComponent],
    imports: [ 
        CommonModule,
        HttpClientModule
    ],
    exports: [PhotoComponent] // pro PhotosModule conseguir usar esse compoennte precisamos exporta-lo
})
export class PhotoModule { }