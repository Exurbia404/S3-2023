# Reader's guide


# Leeruitkomsten

### Web application

**Building a user-friendly full stack web application**

Op het moment ben ik bezig met het maken van SoundSensei, mijn web-based applicatie. Het zal een applicatie zijn waarop mensen audiophile equipment kunnen opzoeken en kunnen toevoegen aan hun want- of have lists. Ook moeten mensen documentatie kunnen toevoegen aan een product.

Ik heb een API geschreven in __ASP.NET 7__. De API maakt gebruik van een __Data - Models - Controller__ structuur. In mijn database bestaan (op 31-5) 3 tabellen; Users, Products en Brands. Hier komen uiteindelijk nog een wantlist en havelist bij. Ik gebruik __Microsoft Entity Framework__ om mijn data op te slaan en uit een database te halen.

De API staat momenteel online op <https://soundsenseiwebapp.azurewebsites.net/swagger/index.html> en wordt via Azure gehost. Ik heb ook een __MySQL database__ via Azure laten hosten waar mijn data in opgeslagen wordt. 

![image info](/Documentatie/ApiProjectFiles.jpg)

In mijn frontend maak ik gebruik van __React.js, Node.js en tailwind__. De frontend staat via Azure online en kan via de volgende link bezocht worden: [SoundSensei](https://zealous-dune-066a9d610.3.azurestaticapps.net "SoundSensei Azure link"). SoundSensei bevat meerdere pagina's:

![image info](/Documentatie/hoofdscherm.png)
Hier zie je het hoofdscherm. Als je de pagina refresht selecteert de pagina 3 willekeurige items van de database om te laten zien. Zo heb je telkens weer wat anders op je hoofdscherm.

![image info](/Documentatie/productpagina.png)
Dit is de productpagina. Hier zijn alle verschillende producten te zien, er zijn ook filters aanwezig om het zoeken naar items makkelijker te maken. Je kunt sorteren en filteren op brand.

![image info](/Documentatie/productinfopagina.png)
Dit is de specifieke informatie die je kan zien per product, er is meer informatie beschikbaar per product dus hier kan nog altijd wat bij. Het liefste gebruik ik meerdere plaatjes en dat is zeker iets wat ik nog kan implementeren.

![image info](/Documentatie/inlogscherm.png)
Hier kan een gebruiker inloggen.

![image info](/Documentatie/signinscherm.png)
Als een gebruiker nog geen account heeft kan hij/zij hier een nieuw account aanmaken.


### Software quality

**You use software tooling and methodology that continuously monitors and improve the software quality during software development.**

#### Backend
![image info](/Documentatie/testexplorer.png)
Ik heb voor mijn backend, voor alle controllers unit tests geschreven. Hierdoor is mijn test coverage >95%.

![image info](/Documentatie/actiondiagram.png)
Wanneer ik push naar mijn git wordt er automatisch een build gemaakt, en worden al mijn tests gerund. Het was de bedoeling dat er automatisch een test result plan wordt geupload naar mijn git voor analyse maar dit is mij tot op heden niet gelukt werkend te krijgen. Het lukt wel om mijn solution te builden, te testen en te publishen.

![image info](/Documentatie/Codemetricsbackend.png)

Tot slot heb ik een codescan los laten gaan op mijn backend. Zoals je kan zien is mijn backend in een goede staat. Met een gemiddelde van 89 bij de maintainibility Index mag ik erg tevreden zijn.

#### Frontend

Tot slot heb ik drie simpele tests geschreven voor mijn ProductsOfTheDay component;

Een simpele API test om te kijken of de component succesvol de data van de API kan fetchen en kan laten zien:
![image info](/Documentatie/apitest.png)

Een test om te zien of er altijd 3 verschillende producten displayed worden:
![image info](/Documentatie/functionalitytest.png)

En een render test waarbij de test kijkt of de component wel fatsoenlijk zonder errors rendert.
![image info](/Documentatie/rendertest.png)

Daarnaast heb ik ook tests geschreven voor mijn Product component

### Agile method

**You can implement the software process for your project according to a given agile software development method.** 

Ik gebruik een Trello kanban bord om mijn project te managen. Een uitnodiging om deel te nemen aan de workspace is [Hier](https://trello.com/invite/b/0F2U4pv4/ATTI6facbb6aaba9b42c7fe6c076f33f3b2168DBE687/soundsensei "Trello invite") te vinden. Ik gebruik in het kanban bord labels om duidelijk aan te geven welk item bij welk onderdeel van mijn project hoort.

Ook heb ik in mijn 'management document.md' een uitleg gegeven over Kanban, Lean en Scrum. 

### CI/CD
**You implement a (semi)automated software release process that matches the needs of the project context.**

![image info](/Documentatie/GithubCICD.jpg)

Ik heb op mijn backend CI/CD kunnen toepassen door middel van github actions and Azure CI/CD, hierdoor kan ik telkens als ik push naar mijn repo builden, testen en dan pas hosten. Zie het stukje Software Quality.

![image info](/Documentatie/frontendbuild.png)

Daarnaast heb ik ook CI/CD geimplementeerd voor mijn frontend, waarbij het zelfde verhaal van toepassing is behalve de tests.



### Cultural differences and ethics
**You recognize and take into account cultural differences when working with multi-site teams, and are aware of ethical aspects in software development.**

Zie Ethics.md and Cultural differences.md


### Requirements and design
**You translate (non-functional) requirements to extend existing (architectural) designs and can validate them using multiple types of test techniques.**

Ik heb user stories gemaakt voor mijn SoundSensei project, wireframe modellen gemaakt voor mijn UI, context en container diagrammen gemaakt;

![image info](/Documentatie/contextdiagram.png)

![image info](/Documentatie/containerdiagram.png)

Zie SoundSenseiProject.md voor de rest

### Business processes
**You can explain simple business processes and relate them to the development of your software project.**

Ik heb in mijn 'business analyis.md' document een analyse gemaakt van een fictief project in de logistiek. Ik heb een oude en een nieuwe situatie gemodelleerd en een verbetering toegepast.

### Professional
**You act in a professional manner during software development and learning.**

Ik heb dit semester gebruik gemaakt van Trello om mijn persoonlijke project te managen. Ook hebben wij in het groepsproject gebruik gemaakt van Trello en aan het einde YouTracker.

Ik communiceerde tijdig met met mijn klasgenoten online en offline over mijn voortgang en helpte wanneer nodig was. Het Finse groepje complimenteerde mij over mijn snelle implementatie van nieuwe features die zij nodig hadden.

Ook ben ik met regelmaat naar Jean Paul geweest om mijn persoonlijke project te bespreken, feedback noteerde ik altijd in Feedpulse en ik probeerde zo vaak mogelijk afspraken te maken over wat ik in het volgende gesprek zou laten zien.

Tot slot heb ik twee onderzoeken gemaakt om mijn onderzoeksvaardigheid aan te tonen, zie: Persoonlijkonderzoek.md en Cryptographic Failures Research Rapport.md. Hier maakte ik gebruik van het DOT-framework om een probleem te analyseren en op te lossen in mijn project.