import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
export default class WireDemoUserDetail extends LightningElement {

    userId = Id;
    userDetail;


    @wire(getRecord, { recordId: '$userId', fields: [NAME_FIELD, EMAIL_FIELD] })
    userDataHandler({ error, data }) {
        if (data) {
            this.userDetail = data.fields;
            console.log('this.userDetail',this.userDetail);
        } else if (error) {
            console.log('Error: ' + JSON.stringify(error));
        }
    }  
    
    @wire(getRecord, { recordId:'$userId', fields: [NAME_FIELD, EMAIL_FIELD] })
    userDetailProperty



}