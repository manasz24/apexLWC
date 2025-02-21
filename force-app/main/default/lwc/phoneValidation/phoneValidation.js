// phoneValidation.js
const phoneValidation = {
    validate(value) {
        // Simple phone number regex for demonstration
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(value);
    }
};

export default phoneValidation;