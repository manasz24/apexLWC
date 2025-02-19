import { LightningElement } from 'lwc';
import Singleton from './singleton';
export default class SingletonDesignPaturnLWC extends LightningElement {

    singleInstance = 'initialvalue';
    connectedCallback() {
        
        const singletonInstance = Singleton.getInstance(); 
        console.log('singleInstance : ',this.singleInstance); 
        this.singleInstance = singletonInstance.getData(); 
        console.log('singleInstance : ',this.singleInstance);

    }

}