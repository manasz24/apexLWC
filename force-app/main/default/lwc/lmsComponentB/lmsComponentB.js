import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/sampleMessageChannel__c";
import { MessageContext, subscribe, unsubscribe ,APPLICATION_SCOPE} from 'lightning/messageService';


export default class LmsComponentB extends LightningElement {
    receivedMessage;
    subs;
    @wire(MessageContext)
    context

    connectedCallback() {
        this.subscribeMessageChannel()
    }

    disconnectedCallback() {
        this.unsubscribeMessageChannel()
    }

    handleMessage(message){
        this.receivedMessage = message.messageToSend.value?message.messageToSend.value:'No Message published';
        console.log('Message received: ' + this.receivedMessage);
    }

    subscribeMessageChannel() {
        this.subs = subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message);
        },{scope:APPLICATION_SCOPE})
    }


    unsubscribeMessageChannel() {
        unsubscribe(this.subs);
    }
}