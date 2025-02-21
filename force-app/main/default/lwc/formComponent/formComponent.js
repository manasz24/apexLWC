import { LightningElement, track } from 'lwc';
import emailValidation from 'c/emailValidation';
import phoneValidation from 'c/phoneValidation';
import textValidation from 'c/textValidation';
import ValidationContext from 'c/validationContext';

export default class FormComponent extends LightningElement {
    @track email = '';
    @track phone = '';
    @track text = '';
    @track emailValid = false;
    @track phoneValid = false;
    @track textValid = false;

    handleInputChange(event) {
        const { name, value } = event.target;
        this[name] = value;

        let validationStrategy;
        switch (name) {
            case 'email':
                validationStrategy = emailValidation;
                break;
            case 'phone':
                validationStrategy = phoneValidation;
                break;
            case 'text':
                validationStrategy = textValidation;
                break;
        }

        const validationContext = new ValidationContext(validationStrategy);
        this[`${name}Valid`] = validationContext.validate(value);
    }

    get emailValidationState() {
        return this.emailValid ? 'Valid' : 'Invalid';
    }

    get phoneValidationState() {
        return this.phoneValid ? 'Valid' : 'Invalid';
    }

    get textValidationState() {
        return this.textValid ? 'Valid' : 'Invalid';
    }

    get emailClass() {
        return this.emailValid ? 'valid' : 'invalid';
    }

    get phoneClass() {
        return this.phoneValid ? 'valid' : 'invalid';
    }

    get textClass() {
        return this.textValid ? 'valid' : 'invalid';
    }
}