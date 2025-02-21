const observers = {};

const subscribe = (event, callback) => {
    if (!observers[event]) {
        observers[event] = [];
    }
    observers[event].push(callback);
};

const unsubscribe = (event, callback) => {
    if (!observers[event]) return;
    observers[event] = observers[event].filter(subscriber => subscriber !== callback);
};

const notify = (event, data) => {
    if (observers[event]) {
        observers[event].forEach(callback => callback(data));
    }
};

export { subscribe, unsubscribe, notify };