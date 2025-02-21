import { LightningElement, track } from 'lwc';
import { subscribe, unsubscribe } from 'c/observerService';

export default class SubscriberComponent extends LightningElement {
    @track count = 0;

    connectedCallback() {
        subscribe('countChanged', this.handleCountChange.bind(this));
    }

    disconnectedCallback() {
        unsubscribe('countChanged', this.handleCountChange.bind(this));
    }

    handleCountChange(newCount) {
        this.count = newCount;
    }
}