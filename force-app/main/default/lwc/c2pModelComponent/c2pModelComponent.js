import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {

    cancelhandler(){
        const event = new CustomEvent('cancel',{
            detail: 'model closed'
        });
        this.dispatchEvent(event);

    }


}