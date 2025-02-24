public with sharing class refreshContactController {

    @AuraEnabled(cacheable=true)
    public static list<Contact> getContactlist() {
        return [SELECT Id, FirstName,LastName, Email, Phone FROM Contact limit 10];
    }
}