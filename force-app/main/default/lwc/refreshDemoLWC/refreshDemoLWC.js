import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactlist';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
const columns= [
        {label: 'First Name', fieldName: 'FirstName', sortable: true, editable : true},
        {label: 'Last Name', fieldName: 'LastName', sortable: true,editable : true},
        {label: 'Email', fieldName: 'Email', sortable: true},
];
export default class refreshDemoLWC extends LightningElement {
    columns = columns;
    draftValues = [];     

    @wire(getContactList) 
    contacts;

    handleSave(event) {
        this.draftValues = event.detail.draftValues;
        console.log('draftValues => '+JSON.stringify(this.draftValues));
    
        // Iterate through the draft values and update the records
        this.draftValues.forEach((draft) => {
            const fields = Object.keys(draft);
            const record = {};
    
            // Iterate through each field and add it to the record object
            fields.forEach((field) => {
                record[field] = draft[field];
            });
    
            console.log('record => '+JSON.stringify(record));
    
            // Update the record using updateRecord function
            updateRecord({ fields: record })
            .then(() => {
                this.showToast('Success', 'Record updated successfully', 'success');
                // Clear all draft values
                this.draftValues = [];
                return refreshApex(this.contacts);
            })
            .catch((error) => {
                this.showToast('Error', 'Error updating record:', 'error');
                console.error('Error:', error);
            });
    });
}

showToast(title, message, variant) {
    const event = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant,
    });
    this.dispatchEvent(event);
}
}
