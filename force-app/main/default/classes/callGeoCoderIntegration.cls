public class callGeoCoderIntegration {
 public static void getExchangeRates(){

        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.opencagedata.com/geocode/v1/json?q=52.3877830%2C9.7334394&key=0a0e99a070d641b7a3d18f0d0bd87c41');
        req.setHeader('Content-Type','application/json');
        req.setHeader('accept','application/json');
        req.setMethod('GET');
        Http http = new Http();
        HttpResponse res = http.send(req);
        system.debug(res.getStatus());
 }
}