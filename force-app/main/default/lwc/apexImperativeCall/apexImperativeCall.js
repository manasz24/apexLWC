import { LightningElement,track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class ApexImperativeCall extends LightningElement {

    @track accounts;

    fetchAccount() {
        getAccountList()
            .then(result => {
                this.accounts = result;
                console.log('results are:', result);
                console.log('Accounts received: ' + JSON.stringify(result));
            })
            .catch(error => {
                console.error('Error in getting accounts:', error);
            });
    }
}