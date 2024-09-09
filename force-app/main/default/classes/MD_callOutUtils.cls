public with sharing class MD_callOutUtils {


    public static HttpRequest prepareRequest(String endPoint,String method, String body, String accept, String contentType) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('POST');
        if(!String.isEmpty(body)) {
            req.setBody(body);
        }

        if(!String.isEmpty(accept)){
             req.setHeader('Accept', accept);
        }
        req.setheader('Content-Type', contentType);
        //req.setHeader('Authorization', 'Bearer ' + getSessionId());
        return req;
    }
}