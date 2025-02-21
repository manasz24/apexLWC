import { LightningElement } from 'lwc';
import { notify } from 'c/observerService';

export default class PublisherComponent extends LightningElement {
    count = 0;

    handleIncrement() {
        this.count += 1;
        notify('countChanged', this.count);
    }
}