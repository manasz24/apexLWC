import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class WireGetObjectInfoAPi extends LightningElement {

    Data;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({data,error}) {
        if(data) {
            console.log('objectInfo: ', data);
                this.Data=data;
            //console.log('objectInfo: ', data.picklistFieldValues.Industry); // Industry is a picklist field on Account object   
        } else if(error) {
            console.error('Error: ', error);
        }   

     }
}