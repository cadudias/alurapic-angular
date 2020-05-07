import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ PhotoComponent ],
    exports: [ PhotoComponent ],
    imports: [ HttpClientModule ]
})
export class PhotosModule {}