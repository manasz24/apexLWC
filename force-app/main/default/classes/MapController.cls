public with sharing class MapController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccount() {
    if (Schema.sObjectType.Account.isAccessible()) {
      return [
        SELECT Id, Name, description, BillingStreet, BillingCountry, BillingCity, BillingState, BillingPostalCode
        FROM Account
        WHERE Id != NULL
        LIMIT 10
      ];
    } else {
      throw new System.SecurityException('Insufficient access: cannot read Account records.');
    }
  }
}
