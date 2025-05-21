/**
 * @description       :
 * @author            : Manas Datta
 * @group             :
 * @last modified on  : 19-05-2025
 * @last modified by  : Manas Datta
 * @reviewer          :
 **/

@RestResource(urlMapping='/v1/MD_AccountManager/*')
global with sharing class MD_AccountManager {
  /**
   * @httpGet - GET
   * @httpPost - POST
   * @httpPut - PUT
   * @httpPatch - PATCH
   * @httpDelete - DELETE
   */

  @httpDelete
  global static void deleteRecords() {
    String accountId = RestContext.request.requestURI.substringAfterLast('/');

    if (Schema.sObjectType.Account.isDeletable()) {
      Database.delete(accountId);
    } else {
      throw new System.SecurityException('Insufficient access: cannot delete Account records.');
    }
  }

  @httpGet
  global static Account getAccountList() {
    RestRequest req = RestContext.request;
    System.debug(System.JSON.serializePretty(req));

    RestResponse res = RestContext.response;
    System.debug(System.JSON.serializePretty(res));
    String accountId = req.requestURI.substringAfterLast('/');

    if (!Schema.sObjectType.Account.isAccessible()) {
      throw new System.SecurityException('Insufficient access: cannot read Account records.');
    }

    Account accRecord = [
      SELECT Id, Name, Rating, Phone, Fax, Industry, BillingAddress, ShippingAddress
      FROM Account
      WHERE Id = :accountId
      LIMIT 1
    ];
    return accRecord;
  }

  @httpPatch
  global static Account updateAccount() {
    RestRequest req = RestContext.request;
    String accountId = req.requestURI.substringAfterLast('/');
    String request = req.requestBody.toString();
    Map<String, String> urlParams = req.params;
    Map<String, String> headersMap = req.headers;
    Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(request);

    Account accountToUpdate = new Account(Id = accountId);
    accountToUpdate.Name = (String) responseMap.get('accountName');
    accountToUpdate.Active__c = (String) responseMap.get('active');
    accountToUpdate.Industry = (String) responseMap.get('accountIndustry');
    accountToUpdate.AnnualRevenue = (Decimal) responseMap.get('AnnualRevenue');
    if (Schema.sObjectType.Account.isUpdateable()) {
      Database.update(accountToUpdate);
    } else {
      throw new System.SecurityException('Insufficient access: cannot update Account records.');
    }
    return accountToUpdate;
  }

  /** Create an Account - POST */

  @httpPost
  global static Account createAccount() {
    // method arguments

    /** Get the information about Request */
    RestRequest req = RestContext.request;
    System.debug(System.JSON.serializePretty(req));

    /** get the request body */
    String requestBody = req.requestBody?.toString(); // Convert Blob into String format
    System.debug(requestBody); // JSON Format

    RestResponse res = RestContext.response;
    System.debug(System.JSON.serializePretty(res));

    if (String.isBlank(requestBody)) {
      res.statusCode = 400;
      res.responseBody = Blob.valueOf('{"message": "Request Body can not be blank!"}');
      //return res;
    }

    Account acc = new Account();
    acc.Name = UUID.randomUUID().toString();
    acc.Phone = '98876655623';

    return acc;
  }

  public class AccountWrapper {
    public String id;
    public String name;
    public BillingAddress billigAddress;
  }

  public class BillingAddress {
    public String city;
  }
}
