public with sharing class ContactController {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactList() {
    if (!Schema.sObjectType.Contact.isAccessible()) {
      throw new AuraHandledException('You do not have permission to access Contacts.');
    }
    return [SELECT Id, Name, Title, Email FROM Contact];
  }
}
