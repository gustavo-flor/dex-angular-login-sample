import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
    @Input() label = 'Password'
    @Input() password = ''
    @Output() passwordChange = new EventEmitter<string>()

    showPassword: boolean = false

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword
    }

    onPasswordInput(event: Event) {
        const input = event.target as HTMLInputElement
        this.password = input.value
        this.passwordChange.emit(this.password)
    }
}
