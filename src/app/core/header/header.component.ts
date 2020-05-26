import { Component } from '@angular/core';
import { User } from '../user/user';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    // quando armazenamos um obsevable a convenção é usar o $
    user$: Observable<User>;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.user$ = userService.getUser();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}