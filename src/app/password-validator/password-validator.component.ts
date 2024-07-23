import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-password-validator',
    templateUrl: './password-validator.component.html',
    styleUrls: ['./password-validator.component.css']
})
export class PasswordValidatorComponent implements OnChanges {
    @Input() password: string = '';

    isValidLength: boolean = false;
    hasUpperCase: boolean = false;
    hasLowerCase: boolean = false;
    hasNumber: boolean = false;
    hasSpecialCharacter: boolean = false;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['password']) {
            this.validatePassword();
        }
    }

    validatePassword() {
        this.isValidLength = this.password.length >= 8;
        this.hasUpperCase = /[A-Z]/.test(this.password);
        this.hasLowerCase = /[a-z]/.test(this.password);
        this.hasNumber = /[0-9]/.test(this.password);
        this.hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    }
}
