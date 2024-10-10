#   QR Codes in Bulk

 NodeJS based script to create QR Codes in bulk using the [QR Code API](https://help.branch.io/developers-hub/reference/createqrcode) from Branch.io.

 ## Features
 
 1. Creates bulk QR Codes in one go. 
 2. The QR Codes are made sequentially so there are no ratelimits that are breached.
 3. Every QR Code can be customised from the input CSV file.
 4. Configuration first design. Most of the functionality can be controlled with configuring ```config.js```.

 ## Configuration Specifications. 

The configuration file contains the parameters required by the scripts to function as expected. Here is a list of such parameters - 

| Name    | Key | Description|
| -------- | ------- | ----|
| Branch Key   | branchKey    |Branch Key for the account where QR code API is provisioned|
| Input CSV File | inputCSVFile |The CSV file that contains link data for every QR Code. You can even add Custom QR Code appearance params to the CSV.|
| QR Code Identifier    | qrIdentifier    |The identifier column from the CSV that is used to name the QR code files.|
|Output Folder|outputFolder|Relative path to where the QR Codes will be stored.|
|QR Code Settings|qrCodeSettings|Default appearance settings for the QR Codes. Can be overriden on per QR basis.|  

 
## How to use ?

1. Update the configuration file with appropriate values.
2. Run the index.js. 
3. The script will create QR Codes and save it in the output folder.

