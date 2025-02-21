// validationContext.js
class ValidationContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    validate(value) {
        return this.strategy.validate(value);
    }
}

export default ValidationContext;