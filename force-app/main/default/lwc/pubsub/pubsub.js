const events = {};

/**
 * Registers a callback for a specific event.
 * @param {string} eventName - The event name to register.
 * @param {function} callback - The callback to register.
 */
const registerListener = (eventName, callback) => {
    if (!events[eventName]) {
        events[eventName] = [];
    }
    events[eventName].push(callback);
};

/**
 * Unregisters a callback for a specific event.
 * @param {string} eventName - The event name to unregister.
 * @param {function} callback - The callback to unregister.
 */
const unregisterListener = (eventName, callback) => {
    if (events[eventName]) {
        events[eventName] = events[eventName].filter(listener => listener !== callback);
    }
};

/**
 * Publishes an event to all registered listeners.
 * @param {string} eventName - The event name to publish.
 * @param {*} detail - The event details to pass to the listeners.
 */
const fireEvent = (eventName, detail) => {
    if (events[eventName]) {
        events[eventName].forEach(callback => {
            try {
                callback(detail);
            } catch (error) {
                console.error(error);
            }
        });
    }
};

export { registerListener, unregisterListener, fireEvent };