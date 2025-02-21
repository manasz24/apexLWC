// textValidation.js
const textValidation = {
    validate(value) {
        // Basic non-empty string validation
        return value.trim().length > 0;
    }
};

export default textValidation;