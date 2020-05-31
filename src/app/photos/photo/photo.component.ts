import { Component, Input } from "@angular/core";

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    
    @Input() description='';
    
    private _url = '';

    // INBOUND PROPERTY PRA UM SETTER
    @Input() set url(url: string) {
        console.log(url)
        this._url = url;
        // if(!url.startsWith('data')) {
        //     this._url = CLOUD + url;
        // } else {
        //     this._url = url;
        // }
    }

    get url() {
        return this._url;
    }
}