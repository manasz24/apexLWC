import { LightningElement } from "lwc";

export default class C2pParentComponenet extends LightningElement {
  showModal = false;

  handleClick(event) {
    this.showModal = true;
  }
  cancelHandler(event) {
    this.showModal = false;
    console.log(event.detail);
  }
}
