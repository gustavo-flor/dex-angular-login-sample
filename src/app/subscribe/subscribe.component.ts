import { Component } from '@angular/core';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrl: './subscribe.component.css'
})
export class SubscribeComponent {
    name = ''
    email = ''
    password = ''

    onSubmit() {
        alert(`Subscription sent!`)
        this.name = ''
        this.email = ''
        this.password = ''
    }
}
