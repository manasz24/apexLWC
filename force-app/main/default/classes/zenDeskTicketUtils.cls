public class zenDeskTicketUtils {

        public static void createTicket(){

            String header = System.label.Zendesk +':'+ System.label.Zendesk_api_token;
            String endpoint =  System.label.zenDesk_Endpoint;
            String requestBody = '{"ticket": {"subject": "My printer is on fire!", "comment": {"body": "The smoke is very colorful."}}}'+   
		'';

            HttpRequest req = new HttpRequest();
            req.setEndpoint(endpoint);
            req.setMethod('POST');
            req.setBody(requestBody);

            req.setheader('Content-Type','application/json');
            req.setheader('Accept','application/json');
            req.setheader('Authorization','Basic '+ EncodingUtil.base64Encode(Blob.valueOf(header)));


            Http http = new Http();

            try{
                HttpResponse httpres = Http.send(req);
                if(httpres.getStatusCode() == 201){
                    System.debug(httpres.getBody());

                }else{

                    System.debug(httpres.getBody());
                }
            }catch(Exception ee){
                System.debug(ee);
            }



        }

}