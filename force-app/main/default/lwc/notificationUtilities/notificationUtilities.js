// notificationUtilities.js
class Notification {
    constructor(message) {
        this.message = message;
    }

    show() {
        throw 'You have to implement the method show!';
    }
}

class ErrorNotification extends Notification {
    show() {
        console.error(`Error: ${this.message}`);
    }
}

class WarningNotification extends Notification {
    show() {
        console.warn(`Warning: ${this.message}`);
    }
}

class SuccessNotification extends Notification {
    show() {
        console.log(`Success: ${this.message}`);
    }
}

// Export the specific notification classes and a factory function
export default {
    createNotification: function (type, message) {
        switch (type) {
            case 'error':
                return new ErrorNotification(message);
            case 'warning':
                return new WarningNotification(message);
            case 'success':
                return new SuccessNotification(message);
            default:
                throw new Error(`Unknown notification type: ${type}`);
        }
    }
};