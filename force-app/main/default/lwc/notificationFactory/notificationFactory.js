import { ErrorNotification,WarningNotification,SuccessNotification } from 'c/notification';

export default class notificationFactory {
    constructor() {
        console.log('NotificationFactory instantiated');
    }

    static createNotification(type,message){
        //let notif = null;
        //console.log(this.message)


        switch(type){
            case 'error':
                return new ErrorNotification(message);
                 
            case 'warning':
                return new WarningNotification(message);
                 
            case 'success':
                return new SuccessNotification(message);
                
            default:
                throw new Error(`Invalid type : ${type}`);   
        }
    }

    
}