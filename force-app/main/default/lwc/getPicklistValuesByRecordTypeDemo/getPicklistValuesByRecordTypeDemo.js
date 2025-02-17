import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    ratingOptions
    industryOptions
    selectedRating
    selectedIndustry

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountInfo;

    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$accountInfo.data.defaultRecordTypeId' })
    wiredPicklistValues({ error, data }) {
        if (data) {
            this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating);
            this.industryOptions =this.picklistGenerator(data.picklistFieldValues.Industry);
            console.log('ratingOptions :'+this.ratingOptions);
            console.log('industryOptions :'+this.industryOptions);
        } else if (error) {
            console.error('Error => ', error);
        }
    }

    picklistGenerator(data){
        return data.values.map(item=>({"label":item.label, "value":item.value}))
    }

    handleChange(event){
        const {name, value} = event.target
        console.log(name +'==>' +value)
        if(name === 'industry'){
            this.selectedIndustry = value
        }
        if(name === 'rating'){
            this.selectedRating = value
        }
    }



}