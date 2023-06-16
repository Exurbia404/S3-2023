# Persoonlijk onderzoek

## Hoofdvraag:

Hoe kan ik documentatie veilig opslaan op een server, zodat het gemakkelijk toegankelijk is voor gebruikers?

### Deelvragen:

Welk typen documenten wil ik ondersteunen?

## Probleem:

Mijn webapp is een soort Tweakers/Discogs voor audio liefhebbers. Het is de bedoeling dat
mensen zelf audioapparatuur kunnen toevoegen aan de database. Om de informatie over zo’n
apparaat zo gedetailleerd mogelijk te maken lijkt het mij goed om ook de mogelijkheid te hebben
om documentatie zoals handleidingen, technische documenten en folders toe te kunnen voegen aan
mijn webapp. Hiervoor zal ik de documentatie moeten opslaan in een server, ik heb dit echter nog
nooit gedaan en zal dus moeten uitzoeken wat hierin het meest geschikte is voor mijn toepassing.


## Onderzoeksmethodiek:
Elk onderzoek heeft zijn onderzoeksmethodiek nodig, daarom heb ik ook gekeken naar
welke onderzoeksmethodieken er zijn en gekeken naar welke het meest geschikt is voor mijn
onderzoek. Vanuit school hebben we de opdracht gekregen om een zogenaamde dotnet-methodiek
uit te kiezen en te gebruiken. Voor dit onderzoek ga ik voornamelijk gebruik maken van de Library
methodiek. Ik kan heel veel bestaande data bestuderen en gebruiken. Met deze data kan ik dan
keuzes maken voor mijn database en mijn onderzoek. Daarnaast ga ik ook gebruik maken van de
Workshop methodiek om mijn server te maken en te testen. Dit testen zal tijdens het uitwerken van mijn project plaatsvinden.


## Welke typen documenten wil ik ondersteunen?

Er zijn veel verschillende manieren om documenten op te slaan en er zijn dus ook veel
verschillende typen. De meest voorkomende zijn .pdf en .docx documenten, denk aan scans en word
documenten. Maar omdat er ook oudere apparaten op mijn webapp komen te staan is het goed om
te kijken naar de document typen van vroeger. Microsoft Word gebruikt bijvoorbeeld voor nieuwere
documenten .docx en voor legacy documenten .doc en Apple Pages gebruikt een ander format
namelijk .pages (fileinfo, 2023). 

Veel digitale scans zullen dus in het .pdf-format zijn, maar het kan ook zeker voorkomen dat
er .doc en .pages bestanden geupload willen worden. Ik kan dus een eis stellen dat alle bestanden
een .pdf zijn om het simpel te houden en ervoor te zorgen dat iedereen de bestanden kan openen.

## Azure Blob Storage

Gezien ik voor mijn front- en backend ook Azure services gebruik kan ik ook Azure Blob Storage gebruiken om .pdf files op te slaan en deze via mijn frontend aan een gebruiker toegankelijk te maken. Hieronder staat een stappenplan om dit mogelijk te maken:

1. Set up an Azure Blob Storage account: Create an Azure account if you don't have one already, and set up an Azure Blob Storage account in the Azure portal. Follow the instructions provided by Microsoft to create a new storage account.

2. Create a container: Within your Azure Blob Storage account, create a container specifically for storing your PDF files. A container is a logical grouping of blobs (files) within Azure Blob Storage.

3. Upload PDF files: Use Azure Blob Storage's APIs or tools (such as the Azure Storage Explorer) to upload your PDF files to the container you created. Make sure to specify the appropriate access controls to restrict or allow access as needed.

4. Generate Shared Access Signature (SAS) URLs: To provide secure access to the PDF files in your React.js frontend, you can generate Shared Access Signature (SAS) URLs for each file. A SAS URL includes an access token with a specific set of permissions and an expiration time. This allows you to control access to the files and set constraints on how they can be accessed.

5. Use SAS URLs in your React.js frontend: In your React.js application, you can use the generated SAS URLs as the download links for your PDF files. When a user clicks on the download button or link, your frontend code can redirect the user to the respective SAS URL, initiating the download of the PDF file.

(Azure Blob)

Door dit stappenplan te volgen kan ik dus pdf documentatie toevoegen. Er ontbreekt echter nog één stap.

## Frontend implementatie

Dat is namelijk ervoor zorgen dat ik daadwerkelijk bestanden kan uploaden en inzien via mijn frontend. In grote lijnen komt het overeen met een database. Een Azure Blob Container heeft ook een connection string die ik kan gebruiken om toegang te krijgen tot de bestanden. Ik zou wel mijn product object moeten aanpassen om een pdfUrl string op te slaan. Voor het inzien is het dan een kwestie van op de link klikken en je download/opent het bestand in je browser. (Azure Blob)

Mocht je zelf een bestand willen toevoegen kun je het volgende component gebruiken:

```
import React from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const UploadForm = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Retrieve the selected file from the form input
    const file = event.target.fileInput.files[0];

    // Create a BlobServiceClient using the connection string
    const blobServiceClient = new BlobServiceClient('<connection_string>');

    // Get a reference to the container where you want to upload the file
    const containerClient = blobServiceClient.getContainerClient('<container_name>');

    // Create a unique name for the blob (file) being uploaded
    const blobName = `${Date.now()}-${file.name}`;

    // Get a block blob client for the blob name
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Upload the file to Azure Blob Storage
    await blockBlobClient.uploadData(file);

    // Handle the successful upload
    console.log('File uploaded successfully!');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" name="fileInput" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;

```
(React) (Azure Javascript SDK)

Er is een BlobServiceClient waar ik makkelijk gebruik van kan maken . Ik moet er wel bij vermelden dat ik tot op heden dit niet heb kunnen implementeren omdat mijn prioritieiten bij documentatie liggen. Maar dankzij dit onderzoek verwacht ik dat het snel geimplementeerd kan worden.

## Bronnenlijst:

- [Azure Blob Storage Documentation](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- [Azure Storage Blob JavaScript SDK - npm](https://www.npmjs.com/package/@azure/storage-blob)
- [React - A JavaScript library for building user interfaces](https://reactjs.org/)
