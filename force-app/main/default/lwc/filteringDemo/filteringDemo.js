import { LightningElement, wire, track } from "lwc";
import getContactList from "@salesforce/apex/ContactController.getContactList";
export default class FilteringDemo extends LightningElement {
  timer;
  fullTableData = [];
  @track filteredData = [];
  headings = ["Id", "Name", "Title", "Email"];
  searchKey = "";
  filterBy = "Name";
  @wire(getContactList)
  contactHandler({ error, data }) {
    if (data) {
      this.fullTableData = data;
      this.filteredData = data;
      console.log("Contact List: ", this.contactList);
    } else if (error) {
      console.error("Error fetching contacts: ", error);
    }
  }

  handleSearchKeyChange(event) {
    this.searchKey = event.target.value;
    console.log("Search Key: ", this.searchKey);
    this.filterData();
  }

  filterData() {
    console.log("Filtering data with search key: ", this.searchKey);
    const searchKeyLower = this.searchKey ? this.searchKey.toLowerCase() : "";
    if (this.searchKey !== "") {
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => {
        this.filteredData = this.fullTableData.filter((contact) => {
          return (
            (contact.Id && contact.Id.toLowerCase().includes(searchKeyLower) && this.filterBy == "Id") ||
            (contact.Name && contact.Name.toLowerCase().includes(searchKeyLower) && this.filterBy == "Name") ||
            (contact.Title && contact.Title.toLowerCase().includes(searchKeyLower) && this.filterBy == "Title") ||
            (contact.Email && contact.Email.toLowerCase().includes(searchKeyLower) && this.filterBy == "Email")
          );
        });
      }, 1000);
    } else {
      this.filteredData = this.fullTableData;
    }
    console.log("Filtered Data: ", this.filteredData);
  }

  get FilterByOptions() {
    return [
      { label: "Id", value: "Id" },
      { label: "Name", value: "Name" },
      { label: "Title", value: "Title" },
      { label: "Email", value: "Email" }
    ];
  }

  handleFilterChange(event) {
    this.filterBy = event.detail.value;
  }
}
