import { LightningElement, api } from "lwc";
import generatePDF from "@salesforce/apex/pdfController.generatePDF";
export default class PdfGeneration extends LightningElement {
  @api recordId;
  imageUrl = "https://www.sparksuite.com/images/logo.png";

  invoiceData = {
    invoiceNo: "123",
    invoiceCreated: "January 1, 2019",
    invoiceDue: "January 10, 2020",
    companyName: "Sparksuite, Inc.",
    address1: "12345 Sunny Road",
    address2: " Sunnyville, CA 12345"
  };
  clientData = {
    client: "Acme Corp",
    username: "John Doe",
    email: "john@example.com"
  };
  services = [
    { name: "Consultant fee", amount: 1000.0 },
    { name: "Website design", amount: 300.0 },
    { name: "Hosting (3 months)", amount: 75.0 }
  ];

  get totalAmount() {
    return this.services.reduce((total, service) => {
      return (total = total + service.amount);
    }, 0);
  }
  pdfHandler() {
    let content = this.template.querySelector(".container");
    console.log(content.outerHTML);

    generatePDF({ recordId: this.recordId, htmlData: content.outerHTML })
      .then((result) => {
        console.log("attachment id", result);
        window.open(
          `https://brave-wolf-6j3xn2-dev-ed.trailblaze.lightning.force.com/servlet/servlet.FileDownload?file=${result.Id}`
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
