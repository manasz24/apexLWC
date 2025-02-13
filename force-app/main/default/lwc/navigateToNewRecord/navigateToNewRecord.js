import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
import State from '@salesforce/schema/Lead.State';
export default class NavigateToNewRecord extends NavigationMixin(LightningElement) {

    handleClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    handleClick1(){
        const defaultValue = encodeDefaultFieldValues({
                FirstName: 'Hello',
                LastName: 'World'      
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValue
            }
        });
    }

    handleClick2(){

        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Contact_custome_page'
            }
        });
    }


    handleClick3(){

            var def = {
                componentDef :'c:lwcTarget'
            }


        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#'+btoa(JSON.stringify(def))
            }
        });
    }

}