import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    email = ''
    password = ''

    onSubmit() {
        alert(`Login attempt with e-mail (${this.email})`)
        this.email = ''
        this.password = ''
    }
}
