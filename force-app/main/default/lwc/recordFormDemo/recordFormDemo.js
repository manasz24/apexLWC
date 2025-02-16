import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordFormDemo extends LightningElement {

    objectName= ACCOUNT_OBJECT;
     recordId;

    fieldsList = [ACCOUNT_NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD];

    handleSuccess(event) {
        console.log(event.detail.id);
        const toast = new ShowToastEvent({
            title: 'Success',
            message: 'Account created successfully.' + event.detail.id,
            mode: 'dismissable',
            variant: 'success'
        });
        this.dispatchEvent(toast);
        this.recordId = event.detail.id;
    }

    getrecordId(){
        return this.recordId;
    }
}