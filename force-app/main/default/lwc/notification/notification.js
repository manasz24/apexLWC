class Notification{
    constructor(message){
        this.message = message
    }
    
    show(){
       throw 'you have to implement the show method';
    }
}

class ErrorNotification extends Notification{
    show(){
        console.error(`Error :${this.message}`);
    }
}

class SuccessNotification extends Notification{
    show(){
        console.log(`Success :${this.message}`);
    }
}

class WarningNotification extends Notification{
    show(){
        console.warn(`Warning :${this.message}`);
    }
}

export {ErrorNotification, SuccessNotification, WarningNotification, Notification};