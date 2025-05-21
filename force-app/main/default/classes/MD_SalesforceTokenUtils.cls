public class MD_SalesforceTokenUtils {
  Salesforce_Config__mdt config = Salesforce_Config__mdt.getInstance(System.label.MD_SalesforceTokenLabel);
  String orgURL = config.environment__c == 'Production'
    ? 'https://login.salesforce.com'
    : 'https://test.salesforce.com';
  //System.debug(orgURL);
  String redirecturi = System.URL.getOrgDomainURL().toExternalForm() + '/apex/' + config.page_name__c;

  public PageReference getAuthCode() {
    //https://MyDomainName.my.salesforce.com/services/oauth2/authorize?
    //client_id=3MVG9IHf89I1t8hrvswazsWedXWY0i1qK20PSFaInvUgLFB6vrcb9bbWFTSIHpO8G2jxBLJA6uZGyPFC5Aejq&
    //redirecturi=https://www.mycustomerorderstatus.com/oauth2/callback&
    //response_type=code

    String authorizeUrl =
      orgURL +
      config.auth_url__c +
      '?client_id=' +
      config.client_id__c +
      '&redirect_uri=' +
      redirecturi +
      '&response_type=code' +
      '&code_challenge=';
    //System.debug(authorizeUrl);

    if (config != null) {
      return new PageReference(authorizeUrl);

      //https://www.mycustomerorderstatus.com/oauth2/callback?
      //code=aPrx4sgoM2Nd1zWeFVlOWveD0HhYmiDiLmlLnXEBgX01tpVOQMWVSUuafFPHu3kCSjzk4CUTZg==
    } else {
      return null;
    }
  }

  public void getAccessToken() {
    //POST /services/oauth2/token HTTP/1.1
    //Host: mycompany.my.salesforce.com
    //Content-length: 307
    //Content-type: application/x-www-form-urlencoded
    //grant_type=authorization_code&
    //code=aPrxhgZ2MIpkSy0aOdn07LjKFvsFOis6RGcWXz7p8JQCjcqfed5NQLe7sxWwMY_JQFuLwHRaRA==&
    //client_id=3MVG9IHf89I1t8hrvswazsWedXWY0iqK20PSFaInvUgLFB6vrcb9bbWFTSIHpO8G2jxBLJA6uZGyPFC5Aejq&
    //client_secret=*******************&
    //redirect_uri=https://www.mycustomerorderstatus.com/oauth2/callback

    string code = ApexPages.currentPage().getParameters().get('code');
    system.debug('code :' + code);
    String endpoint = orgURL + config.token_url__c;
    String reqBody =
      'grant_type=authorization_code&' +
      'code=' +
      code +
      '&' +
      'client_id=' +
      config.client_id__c +
      '&' +
      'client_secret=' +
      config.client_secret__c +
      '&' +
      'redirect_uri=' +
      redirect_uri;

    HttpRequest req = new HttpRequest();
    req.setEndpoint(endpoint);
    req.setMethod('POST');
    req.setBody(reqBody);

    req.setheader('Content-Type', 'application/x-www-form-urlencoded');
    req.setheader('Accept', 'application/json');

    Http http = new Http();

    try {
      HttpResponse httpres = Http.send(req);
      if (httpres.getStatusCode() == 200) {
        PS_SalesforceTokenWrapper wrapper = (PS_SalesforceTokenWrapper) System.JSON.Deserialize(
          httpres.getBody(),
          PS_SalesforceTokenWrapper.class
        );

        // TODO: Deploy the Custom Metadata
        // How to Deploy
        // Metadata is a Namespace
        // CustomMetadata - Class
        // CustomMetadataValue - Class
        // Operations - Class
        // DeployCallback - Interface

        String fullName = 'Salesforce_Config.' + System.Label.MD_SalesforceTokenLabel;
        String label = System.Label.MD_SalesforceTokenLabel;
        Map<String, Object> fieldWithValuesMap = new Map<String, Object>();

        fieldWithValuesMap.put('access_token__c', wrapper.access_token);
        // fieldWithValuesMap.put('expires_in__c', wrapper.);
        fieldWithValuesMap.put('expires_in_time__c', System.now().addHours(2));
        fieldWithValuesMap.put('instanceurl__c', wrapper.instance_url);
        fieldWithValuesMap.put('Refresh_Token__c', wrapper.refresh_token);
        fieldWithValuesMap.put('scope__c', wrapper.scope);

        System.debug('success :' + httpres.getBody());

        CreateUpdateMetadataUtils.createUpdateMetadata(fullName, label, fieldWithValuesMap);
        Apexpages.addMessage(new ApexPages.Message(ApexPages.severity.CONFIRM, 'Successful!'));
      } else {
        Apexpages.addMessage(new ApexPages.Message(ApexPages.severity.ERROR, httpRes.getBody()));
      }
    } catch (Exception ee) {
      Apexpages.addMessage(new ApexPages.Message(ApexPages.severity.ERROR, ee.getmessage()));
    }
  }
}
