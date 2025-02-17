import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class WireGetObjectInfosApi extends LightningElement {
    objectInfos;
    
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountInfo;
    

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];
    
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfo({ error, data }) {
        if (data) {
            this.objectInfos = data;
            console.log('Data => ', data);
        } else if (error) {
            console.error('Error => ', error);
        }
    }


}