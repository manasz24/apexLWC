import { LightningElement, api } from 'lwc';
import notificationFactory from 'c/notificationFactory';

console.log('NotificationFactory:', notificationFactory);

export default class NotificationComponent extends LightningElement {

    @api message;
    @api type;

    connectedCallback(){
        this.showNotification('success','This is a success message');
        this.showNotification('error','This is a error message');
        this.showNotification('warning','This is a warning message');
    }

    showNotification(type,message){
        //console.log('Type:',type);
        //console.log('Message:',message);
        try{
            let notification = notificationFactory.createNotification(type,message);
            notification.show();
        }catch(error){
            console.log('Error',error.message);
        }
    }
}