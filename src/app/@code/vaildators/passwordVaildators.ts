import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_#?!@$ %^&*-]).{8,}$/;
export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return _validate(control.value);
    };
}
function _validate(password) {
    let validResult = null;
    const passwordPattern = new RegExp(passwordRegExp);
    if (password && !passwordPattern.test(password)) {
        validResult = {
            invalidPasswordPattern: true
        };
    }

    return validResult;
}