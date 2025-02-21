import { LightningElement } from 'lwc';
import notificationUtilities from 'c/notificationUtilities';


console.log('notificationUtilities',notificationUtilities);
export default class NotificationComponentModulePattern extends LightningElement {
    connectedCallback() {
        this.showNotification('success', 'This is a success notification');
        this.showNotification('warning', 'This is a warning notification');
        this.showNotification('error', 'This is an error notification');
    }

    showNotification(type, message) {
        try {
            const notification = notificationUtilities.createNotification(type, message);
            notification.show();
        } catch (error) {
            console.error('Error showing notification:', error.message);
        }
    }

}