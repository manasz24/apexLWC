public with sharing class MD_AccountUtils {
    public static void createAccount(String Name, String Rating) {

        Salesforce_Config__mdt config = Salesforce_Config__mdt.getInstance(System.label.MD_SalesforceTokenLabel);
        If(config != null){
            String endPoint = config.instanceurl__c + '/services/data/v60.0/sobjects/Account/';
            String body = '{'+
		'  "Name": "'+Name+'",'+
		'  "Rating": "'+Rating+'",'+
		'  "Phone": "9078543210",'+
		'  "Industry": "Education",'+
		'  "Active__c": "Yes"'+
		'}';
            HttpRequest httpreq = MD_callOutUtils.prepareRequest(endPoint, 'POST', '', 'application/json', 'application/json');
            httpreq.setheader('Authorization', 'Bearer '+config.access_token__c);
            try{
                HttpResponse httpres = (new http()).send(httpreq);
                if(httpres.getStatusCode() == 200 || httpres.getStatusCode() == 201){
                    System.debug('Account Created \n'+httpres.getBody());
                }else{
                    System.debug('Error \n : ' + httpres.getBody());
                }
            }catch(exception ex){

            }
            

        }

        
    }
}