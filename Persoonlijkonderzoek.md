# Persoonlijk onderzoek: Het opslaan van documentatie



## Table of contents:

- [Persoonlijk onderzoek: Het opslaan van documentatie](#persoonlijk-onderzoek-het-opslaan-van-documentatie)
  - [Table of contents:](#table-of-contents)
  - [Probleem:](#probleem)
  - [Onderzoeksmethodiek:](#onderzoeksmethodiek)
  - [Hoofdvraag:](#hoofdvraag)
  - [Deelvragen:](#deelvragen)
    - [Welke typen documenten wil ik ondersteunen?](#welke-typen-documenten-wil-ik-ondersteunen)
    - [Welke methoden zijn er om documenten op te slaan?](#welke-methoden-zijn-er-om-documenten-op-te-slaan)
      - [Local File Storage](#local-file-storage)
      - [Database Storage](#database-storage)
      - [Cloud Storage](#cloud-storage)
      - [Conclusie](#conclusie)
      - [Azure Blob Storage implementatie](#azure-blob-storage-implementatie)
    - [Hoe kan een gebruiker deze documenten zien?](#hoe-kan-een-gebruiker-deze-documenten-zien)
      - [React code snippet:](#react-code-snippet)
  - [Conclusie:](#conclusie-1)
  - [Bronnenlijst:](#bronnenlijst)

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

## Hoofdvraag:

Hoe kan ik documentatie veilig opslaan op een server, zodat het gemakkelijk toegankelijk is voor gebruikers?

## Deelvragen:

### Welke typen documenten wil ik ondersteunen?

Er zijn veel verschillende manieren om documenten op te slaan en er zijn dus ook veel
verschillende typen. De meest voorkomende zijn .pdf en .docx documenten, denk aan scans en word
documenten. Maar omdat er ook oudere apparaten op mijn webapp komen te staan is het goed om
te kijken naar de document typen van vroeger. Microsoft Word gebruikt bijvoorbeeld voor nieuwere
documenten .docx en voor legacy documenten .doc en Apple Pages gebruikt een ander format
namelijk .pages (Computerhope, 2023). 

Veel digitale scans zullen dus in het .pdf-format zijn, maar het kan ook zeker voorkomen dat
er .doc en .pages bestanden geupload willen worden. Ik kan dus een eis stellen dat alle bestanden
een .pdf zijn om het simpel te houden en ervoor te zorgen dat iedereen de bestanden kan openen.

### Welke methoden zijn er om documenten op te slaan?

#### Local File Storage

Lokale bestandsopslag is een methode waarbij bestanden rechtstreeks worden opgeslagen op het bestandssysteem van de server. Met deze aanpak worden bestanden georganiseerd in een mapstructuur en worden de bestandspaden of -namen in een database opgeslagen. Lokale bestandsopslag is geschikt voor kleinschalige toepassingen of wanneer de opslagvereisten beperkt zijn. Het kan echter problemen veroorzaken op het gebied van schaalbaarheid en kan een enkelvoudig storingspunt vormen als de server uitvalt (Chris Geelhoed).

Lokale bestandsopslag kan worden gebruikt voor het beheren van bestanden in een webtoepassing, waarbij de bestanden direct op de server worden opgeslagen. Het kan handig zijn voor eenvoudige toepassingen waarbij de bestandsgrootte en -hoeveelheid beperkt zijn. Het opslaan van bestanden op de server maakt het gemakkelijk om de bestanden te organiseren in mappen en de bestandspaden in een database op te slaan. Het kan echter problematisch zijn bij het schalen van de toepassing en kan een enkelvoudig storingspunt vormen als de server crasht of niet beschikbaar is.

#### Database Storage

Databaseopslag is een methode waarbij bestanden worden opgeslagen in een database in plaats van rechtstreeks op het bestandssysteem van de server. In plaats van de bestandsinhoud op te slaan, worden de bestanden geconverteerd naar binair formaat en opgeslagen in een kolom met het binair groot object (BLOB) gegevenstype.

Door bestanden in een database op te slaan, kunnen ze gemakkelijk worden beheerd via het databasebeheersysteem. Je kunt de bestanden opvragen, bijwerken en verwijderen met behulp van databasequery's en transacties. Dit kan handig zijn bij het opzetten van complexe storage solutions, waarbij je de bestanden kunt koppelen met andere gegevens in de database.

Databaseopslag biedt ook voordelen zoals gegevensintegriteit, geavanceerde zoekmogelijkheden en beveiliging. Met databasebeperkingen kun je ervoor zorgen dat de koppeling tussen de bestanden en de bijbehorende gegevens behouden blijft. Ook kun je SQL-query's gebruiken om bestandente filteren en te doorzoeken.

Er zijn echter enkele overwegingen bij het gebruik van databaseopslag. Bestanden die in een database worden opgeslagen, kunnen de grootte van de database vergroten, wat gevolgen kan hebben voor de prestaties en beheerbaarheid ervan. Back-ups en herstel van de database moeten ook worden aangepast om ervoor te zorgen dat de opgeslagen bestanden worden behouden.
(Laravel)(Mukesh Mururgan)

#### Cloud Storage

Cloudopslag is een methode waarbij bestanden worden opgeslagen in de infrastructuur van een cloudserviceprovider, zoals Amazon S3, Google Cloud Storage of Microsoft Azure Blob Storage. Met cloudopslag kunt u bestanden rechtstreeks naar de infrastructuur van de provider uploaden, waarbij de provider zorgt voor redundantie, back-ups en schaalbaarheid. Je kunt bestanden privé opslaan of toegankelijk maken voor het publiek via unieke URL's.

Cloudopslag biedt verschillende voordelen voor webtoepassingen. Het verlicht de belasting op de servers van mijn toepassing, omdat de opslag van bestanden wordt uitbesteed aan de provider. Je kunt gebruik maken van de schaalbaarheid van de cloudinfrastructuur, waarbij je de opslagcapaciteit eenvoudig kunt vergroten naarmate de behoeften groeien. Daarnaast zorgen cloudproviders voor automatische back-ups, replicatie en failover, waardoor de betrouwbaarheid en beschikbaarheid van je bestanden verbeteren.

Cloudopslag biedt ook geavanceerde functies zoals toegangscontroles, versiebeheer en integratie met content delivery networks (CDN's) voor geoptimaliseerde levering van bestanden. Je kunt de toegangsrechten van bestanden beheren en bepalen wie toegang heeft tot welke bestanden. Bovendien kunnen CDNs worden gebruikt om bestanden snel te leveren aan gebruikers over de hele wereld, waardoor de prestaties worden verbeterd.

(Amazon Web Services)(Azure Blob Storage Documentation)

#### Conclusie

Als ik naar de drie opslagmethoden kijk - Local File Storage, Database Storage en Cloud Storage - vind ik Cloud Storage de meest geschikte keuze voor mijn webtoepassing, specifiek Azure Blob Storage. Omdat ik al gebruik maak van meerdere Azure services ben ik al bekend met het systeem en ik hoe deze op moet zetten en eventueel moet implementeren. Tevens kan ik de kosten zo laag mogelijk houden omdat ik Azure Credits heb. Ook kan ik de bestanden in principe direct uploaden naar de cloud storage in plaats van ze omzetten naar Binary object. Ook hoef ik mij geen zorgen te maken over het hosten van een server wat wel bij Local File Storage zo zou zijn. Cloud Storage biedt mij de beste security en implementatie.

#### Azure Blob Storage implementatie

Nu dat ik weet dat ik aan de slag wil gaan met Azure Blob Storage heb ik een stappenplan opgezocht. Hier staat hij (Azure Blob):

1. Set up an Azure Blob Storage account: Create an Azure account if you don't have one already, and set up an Azure Blob Storage account in the Azure portal. Follow the instructions provided by Microsoft to create a new storage account.

2. Create a container: Within your Azure Blob Storage account, create a container specifically for storing your PDF files. A container is a logical grouping of blobs (files) within Azure Blob Storage.

3. Upload PDF files: Use Azure Blob Storage's APIs or tools (such as the Azure Storage Explorer) to upload your PDF files to the container you created. Make sure to specify the appropriate access controls to restrict or allow access as needed.

4. Generate Shared Access Signature (SAS) URLs: To provide secure access to the PDF files in your React.js frontend, you can generate Shared Access Signature (SAS) URLs for each file. A SAS URL includes an access token with a specific set of permissions and an expiration time. This allows you to control access to the files and set constraints on how they can be accessed.

5. Use SAS URLs in your React.js frontend: In your React.js application, you can use the generated SAS URLs as the download links for your PDF files. When a user clicks on the download button or link, your frontend code can redirect the user to the respective SAS URL, initiating the download of the PDF file.

Door dit stappenplan te volgen kan ik dus pdf documentatie toevoegen. Er ontbreekt echter nog één stap.

### Hoe kan een gebruiker deze documenten zien?

#### React code snippet:

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

## Conclusie:

Dankzij dit onderzoek heb ik de basis om een cloud storage solution te gebruiken om documentatie op te slaan op een server. Omdat ik gebruikers forceer een bepaald file format te gebruiken kan ik de complexiteit laag houden, maar toch veel documentatie aanbieden. Omdat ik cloud storage wil gebruiken kan ik ook vertrouwen op externe security features die ik anders niet zou hebben als ik zelf een fileserver zou moeten opzetten. Ook heb ik gekeken naar hoe ik de frontend implementatie kan doen, door middel van een download link of een react.js snippet die de documentatie in de webapp laat zien.

## Bronnenlijst:

- [Computerhope 2023](https://www.computerhope.com/issues/ch001789.htm)
- [MDN Web Docs 2019](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications)
- [Chris Geelhoed 2020]( https://www.geelhoed.dev/nodejs/express/file-upload/)
- [Laravel Documentation 2022](https://laravel.com/docs/8.x/eloquent-mutators#file-uploads)
- [Mukesh Mururgan 2019](https://codewithmukesh.com/blog/file-upload-in-database-aspnet-core/)
- [Amazon Web Services 2023]( https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html)
- [Azure Blob Storage Documentation 2022](https://docs.microsoft.com/en-us/azure/storage/blobs/)
- [Azure Storage Blob JavaScript SDK - npm 2022](https://www.npmjs.com/package/@azure/storage-blob)
- [React - A JavaScript library for building user interfaces 2023](https://reactjs.org/)
