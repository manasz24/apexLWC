public class callCurrencyConverterInegration {
 public static void getExchangeRates(){

        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://open.er-api.com/v6/latest/usd');
        req.setHeader('Content-Type','application/json');
        req.setHeader('accept','application/json');
        req.setMethod('GET');
        Http http = new Http();
        HttpResponse res = http.send(req);
        system.debug(res.getStatus());
     	system.debug(res.getStatusCode());
 }
}