import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import { loadStyle } from 'lightning/platformResourceLoader';
//import customCss from '@salesforce/resourceUrl/customCss';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationService extends NavigationMixin(LightningElement) {

    navigateToHome(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
            })
        }
            


}