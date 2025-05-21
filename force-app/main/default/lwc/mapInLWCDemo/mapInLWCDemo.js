import { LightningElement, wire } from "lwc";
import getAccount from "@salesforce/apex/MapController.getAccount";

export default class MapInLWCDemo extends LightningElement {
  mapMarkers = [];
  markersTitle = "Account Locations";
  selectedMarker;
  @wire(getAccount)
  wireHandler({ data, error }) {
    if (data) {
      console.log("Account data: ", data);
      this.mapMarkers = data.map((account) => {
        return {
          location: {
            Street: account.BillingStreet,
            PostalCode: account.BillingPostalCode,
            City: account.BillingCity,
            State: account.BillingState,
            Country: account.BillingCountry
          },
          title: account.Name,
          description: account.Description,
          clickable: true,
          icon: "utility:salesforce1",
          value: account.Id
        };
      });
      this.selectedMarker = this.mapMarkers[0].value; // Set the first marker as selected by default
    }
    if (error) {
      console.error("Error fetching account data: ", error);
    }
  }

  handleMarkerSelect(event) {
    const selectedMarker = event.detail.selectedMarkerValue;
    console.log("Selected marker value: ", selectedMarker);
    // Handle the marker selection logic here
  }
}
