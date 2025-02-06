import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/sampleMessageChannel__c";
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputvalue;

    @wire(MessageContext)
    Context;

    inputHandler(event){
        this.inputvalue=event.target.value;
    }

    sendMessage(){
        const message ={
            messageToSend :{
                value: this.inputvalue
            }

        }
        publish(this.Context, SAMPLEMC, message);
    }

}