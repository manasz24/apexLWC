// emailValidation.js
const emailValidation = {
    validate(value) {
        // Simple email regex for demonstration
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
};

export default emailValidation;