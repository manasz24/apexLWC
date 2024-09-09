/**
* @File Name : PS_SalesforceTokenWrapper.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : August 31, 2024
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | August 31, 2024 |   | Initial Version
**/

public with sharing class PS_SalesforceTokenWrapper {
    public String access_token;
    public String refresh_token;
    public String signature;
    public String scope;
    public String id_token;
    public String instance_url;
    public String id;
    public String token_type;
    public String issued_at;
}