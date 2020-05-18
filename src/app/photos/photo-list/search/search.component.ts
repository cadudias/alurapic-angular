import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy 
{    
    @Output() onTyping = new EventEmitter<string>()
    debounce: Subject<string> = new Subject<string>()

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300))
        // quando parar por 300 ms pega o valor que digitei 
        // e emit dispara um evento com esse valor
        // aqui o filter é o $event do html
        .subscribe(filter => {
            //console.log(filter) 
            this.onTyping.emit(filter)
        })
    }
    
    ngOnDestroy(): void {
        this.debounce.unsubscribe()
    }
}