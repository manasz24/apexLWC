import { LightningElement,track } from 'lwc';
import { logMethod,logProperty } from 'c/logDecorator';

export default class DecoratedComponent extends LightningElement {

   // @logProperty
    count = 0;


   // @logMethod
    handleIncrement(){
        this.count++;
        return this.count;
    }

}