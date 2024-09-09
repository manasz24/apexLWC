/**
* @File Name : CreateUpdateMetadataUtils.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : September 1, 2024
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | September 1, 2024 |   | Initial Version
**/

public class CreateUpdateMetadataUtils implements Metadata.DeployCallback {
    public static final String JOB_ID = '010080001MbaB]';

    public void handleResult(Metadata.DeployResult result, Metadata.DeployCallbackContext context) {
        if (result.status == Metadata.DeployStatus.Succeeded) {
            // TODO: Fire the Platform Event or Log the Error
            System.debug('Success: ' + result);
        } else {
            System.debug('Fail: ' + result);
        }
    }

    public static void createUpdateMetadata(String fullName, String label, Map<String, Object> fieldWithValuesMap) {
    // Step 1 - Create the Custom Metadata Object from Metadata Namespace
    Metadata.CustomMetadata customMetadata = new Metadata.CustomMetadata();
    customMetadata.fullName = fullName; // API Name - Custom metadata Record
    customMetadata.label = label; // "Salesforce Token"

    for (String key : fieldWithValuesMap.keySet()) {
        // Step 2 - Create the CustomMetadataValue Object from Metadata Namespace
        Metadata.CustomMetadataValue customField = new Metadata.CustomMetadataValue();
        // Step 2.1 - Prepare the field values
        customField.field = key;
        customField.value = fieldWithValuesMap.get(key);
        // Step 2.2 - Add the field values to the custom metadata
        customMetadata.values.add(customField);
    }

    // Step 3 - Create the DeployContainer Object from Metadata Namespace
    Metadata.DeployContainer mdContainer = new Metadata.DeployContainer();
    // Step 4 - Add the metadata under container
    mdContainer.addMetadata(customMetadata);

    CreateUpdateMetadataUtils callback = new CreateUpdateMetadataUtils();
    // Step 5 - Deploy the metadata if test is not running using Operations
    Id jobId = Metadata.Operations.enqueueDeployment(mdContainer, callback);
}

}