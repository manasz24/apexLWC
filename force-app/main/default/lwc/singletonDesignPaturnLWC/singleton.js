
export default class Singleton {

    static instance;

    constructor() {
        if (!Singleton.instance) {
            this._data = 'final value';
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    
    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
    }
}

