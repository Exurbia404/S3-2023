# Portfolio Tom van Heek

## Table of contents:

- [Portfolio Tom van Heek](#portfolio-tom-van-heek)
  - [Table of contents:](#table-of-contents)
  - [Web application](#web-application)
    - [Omschrijving:](#omschrijving)
    - [Technische details:](#technische-details)
    - [Designs:](#designs)
  - [UX Testen](#ux-testen)
    - [Test methodieken:](#test-methodieken)
      - [Usability Testing:](#usability-testing)
      - [A/B Testing:](#ab-testing)
      - [Thinking out Loud:](#thinking-out-loud)
    - [Tests:](#tests)
      - [1. Een specifiek product vinden](#1-een-specifiek-product-vinden)
      - [2. Een nieuwe gebruiker aanmaken en inloggen](#2-een-nieuwe-gebruiker-aanmaken-en-inloggen)
      - [3. Kijken of de UI in de smaak valt](#3-kijken-of-de-ui-in-de-smaak-valt)
    - [Reflectie:](#reflectie)
  - [Software quality](#software-quality)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Agile method](#agile-method)
    - [Persoonlijk project:](#persoonlijk-project)
    - [Groepsproject:](#groepsproject)
    - [Scrum Principles](#scrum-principles)
    - [Scrum Steps](#scrum-steps)
    - [Kanban](#kanban)
    - [Lean Principles](#lean-principles)
    - [Lean Steps](#lean-steps)
  - [CI/CD](#cicd)
  - [Cultural differences and ethics](#cultural-differences-and-ethics)
  - [Requirements and design](#requirements-and-design)
    - [User stories:](#user-stories)
    - [Contextdiagram:](#contextdiagram)
    - [Containerdiagram:](#containerdiagram)
    - [Database diagram:](#database-diagram)
    - [Groepsproject:](#groepsproject-1)
      - [Finse ontwerpen:](#finse-ontwerpen)
      - [Onze ontwerpen:](#onze-ontwerpen)
      - [Swipper container diagram:](#swipper-container-diagram)
  - [Business processes](#business-processes)
  - [Professional](#professional)
    - [Persoonlijke onderzoeken](#persoonlijke-onderzoeken)
    - [Zelfreflectie](#zelfreflectie)
 
## Web application

**Building a user-friendly full stack web application**

### Omschrijving:
Voor dit leerdoel heb ik een full-stack applicatie gemaakt genaamd SoundSensei. Het is een applicatie waarop mensen audiophile equipment kunnen opzoeken en kunnen toevoegen aan hun want- of have lists. Ook kunnen mensen documentatie kunnen toevoegen aan een product.

### Technische details:
Ik heb een API geschreven in __ASP.NET 7__. De API maakt gebruik van een __Data - Models - Controller__ structuur. In mijn database bestaan (op 31-5) 3 tabellen; Users, Products en Brands. Hier komen uiteindelijk nog een wantlist en havelist bij. Ik gebruik __Microsoft Entity Framework__ om mijn data op te slaan en uit een database te halen.

De API staat momenteel online op <https://soundsenseiwebapp.azurewebsites.net/swagger/index.html> en wordt via Azure gehost. Ik heb ook een __MySQL database__ via Azure laten hosten waar mijn data in opgeslagen wordt. 

![image info](/Documentatie/ApiProjectFiles.jpg)

In mijn frontend maak ik gebruik van __React.js, Node.js en tailwind__. De frontend staat via Azure online en kan via de volgende link bezocht worden: [SoundSensei](https://zealous-dune-066a9d610.3.azurestaticapps.net "SoundSensei Azure link"). SoundSensei bevat meerdere pagina's:

### Designs:

Ik ben begonnen met het maken van wireframe mockups voor het ontwerp van mijn website. Ik heb ervoor gekozen om zo min mogelijk extra informatie te laten zien bij producten maar pas als je op de productpagina komt kun je alle informatie zien. 

![image info](/Documentatie/homepage-wireframe.png)

Hier zie je het hoofdscherm. Ik heb ervoor gekozen om een navbar te hebben waarmee een user kan navigeren. Linksboven kun je het logo zien van mijn applicatie met daarnaast knoppen om naar alle brands en producten toe te gaan. Helemaal rechts wil ik de userprofile en inlog knop zetten. Onder de navbar kun je een brand carousel zien om alle verschillende brands in één keer te kunnen zien. Tot slot wilde ik wat unieks maken aan mijn homepagina, daarom wil ik 3 willekeurige producten laten zien wanneer je de pagina laadt.

![image info](/Documentatie/productspage-wireframe.png)

Hier kun je de productspage zien, waar je alle producten op de webapp kan zien. Ik vond het belangrijk om meerdere filters te geven zodat een user snel een benodigd item kan vinden. De oroducten laten enkel hun naam en een afbeelding zien.

![image info](/Documentatie/productspecificpage-wireframe.png)

Wanneer je doorklikt kom je op de productspecificpage terecht. Hier moet alle verschillende informatie over een product komen te staan, met een carousel voor meerdere plaatjes.

## UX Testen

### Test methodieken:

#### Usability Testing:

Usability Testing houdt in dat je feedback van gebruikers verzamelt terwijl ze omgaan met je product/prototype. Gebruikers krijgen een specifieke taak of functionaliteit om uit te testen, terwijl onderzoekers kijken naar hoe ze handelen, waar ze vastlopen en waar ze aan denken terwijl ze hun taak uitvoeren. Dit helpt bij het identificeren van bruikbaarheidsproblemen en een beter inzicht te krijgen van hoe gebruikers omgaan met een product/prototype.

#### A/B Testing:

Bij A/B Testing vergelijk je twee varianten van een ontwerp/functionaliteit om te bepalen welke het beste presteert en in de smaak valt bij gebruikers. Gebruikers krijgen willekeurige taken en willekeurige versies te zien en moeten hun taak voltooien. Hier kun je ook weer kijken naar allerlei factoren om te bepalen welke versie/functionaliteit beter presteert.

#### Thinking out Loud:

Bij de Thinking Aloud-methode wordt aan de deelnemers gevraagd om hun gedachten en handelingen hardop uit te spreken terwijl ze omgaan met een product/functionaliteit. Ze worden aangemoedigd om te delen wat er in hun hoofd omgaat, inclusief hun overwegingen, reacties en eventuele problemen die ze tegenkomen. Deze methode biedt inzicht in de manier waarop gebruikers denken, de beslissingen die ze nemen en de uitdagingen waarmee ze worden geconfronteerd tijdens het gebruik van een product of interface.

### Tests:

#### 1. Een specifiek product vinden

Ik heb aan mijn Oma gevraagd of zij de "Philips Receiver 1" kon vinden. Ze begon op de homepage. Ze probeerde eerst op het Philips logo te klikken om zo bij de Philips producten te komen, deze functionaliteit is er echter niet. Toen dat niet werkte klikte ze op producten en scrollde toen tot ze de Philips Receiver 1 zag. 

Ik vroeg haar waarom ze niet een filter gebruikte om sneller te zoeken. Omdat de filters dichtbij de navbar stonden dacht ze dat het onderdeel was van de navbar. Tot slot was het heel makkelijk geweest als de brands carousel direct door ging naar alle Philips producten. Dit is een functionaliteit die ik er graag wil implementeren.

#### 2. Een nieuwe gebruiker aanmaken en inloggen

Aan mijn zus vroeg ik of ze een nieuwe gebruiker kon maken. Ze drukte op de sign in knop en daarna op "dont have an account? sing up here". Voerde vervolgens haar gegevens in en drukte op op complete. De website logt niet automatisch in maar dit had ze vrij snel door. Ze drukte vervolgens op log in en gebruikte haar net ingevoerde gegevens om succesvol in te loggen.

Het zou fijn zijn als de gebruiker meteen ingelogd wordt wanneer ze een nieuwe gebruiker aanmaakt. 

#### 3. Kijken of de UI in de smaak valt

Tot slot mijn vader, iemand die veel naar audophile producten kijkt en vaak op Discogs.com zit. Hij vond de witte stijl van mijn ontwerp wel fijn maar had graag iets grotere letters gezien en de optie om naar meerdere plaatjes te kijken voordat je naar de productspecificpage gaat.

### Reflectie:

## Software quality

**You use software tooling and methodology that continuously monitors and improve the software quality during software development.**

### Backend
![image info](/Documentatie/testexplorer.png)
Ik heb voor mijn backend, voor alle controllers unit tests geschreven. Hierdoor is mijn test coverage >95%.

![image info](/Documentatie/actiondiagram.png)
Wanneer ik push naar mijn git wordt er automatisch een build gemaakt, en worden al mijn tests gerund. Het was de bedoeling dat er automatisch een test result plan wordt geupload naar mijn git voor analyse maar dit is mij tot op heden niet gelukt werkend te krijgen. Het lukt wel om mijn solution te builden, te testen en te publishen.


![image info](/Documentatie/Codemetricsbackend.png)

Tot slot heb ik de build-in Code Metrics Analyzer van Visual Studio los gelaten op mijn code. Ik zal bij elke kolom uitleg geven over de resultaten. Ik geef geen uitleg over 'Lines of Source code' en 'Lines of Executable code' omdat dit meer reflecteert over hoe compact ik code kan schrijven dan de kwaliteit van de code.

__Maintainability Index__

De maintainability index geeft aan, op een schaal van 0-100, hoe onderhoud- en leesbaar een stuk code of klasse is. Met een laagste waarde van 68 in mijn backend (exclusief tests) kan ik tevreden zijn over de onderhoudbaarheid. Zoals te verwachten is, zijn mijn modellen goed leesbaar en mijn controllers gemiddeld. De berekening staat los van eventuele opmerkingen en de benaming van mijn variabelen. In de toekomst, wanneer ik een lage waarde tegen kom, kan ik toekomstige developers helpen door opmerkingen bij mijn code te zetten en kritisch te kijken naar de namen van mijn variabelen.

__Cyclomatic Complexity__

Deze waarde geeft aan hoe complex mijn code/programma is. Een hogere waarde is meer complex en dus lastiger te onderhouden. De meeste complexiteit zit in mijn controllers en verrassend genoeg in mijn models. Mijn controllers zijn in feite nog relatief simpele CRUD's met een beetje logica erdoorheen. Er worden wel veel interacties gedaan met de database, en dit kan mogelijk voor complexiteit zorgen. Mijn modellen zijn erg voor de hand liggend. Er zit geen logica in en het zijn puur data modellen. 

Om een beeld te geven van de hoogte van deze waardes; volgens het internet zijn gemiddelde cyclomatische waarden rond de 10. De meeste van mijn klassen liggen rond deze waarde en een enkeling schiet hierboven uit. In de toekomst kan ik deze richtlijn aanhouden om te kijken naar mogelijk (te) complexe stukken code.  

__Depth of Inheritance__

Depth of Inheritance geeft aan hoeveel afhankelijkheden een klasse heeft. Gezien dit project niet bijzonder complex was zijn eigenlijk alleen mijn controllers afhankelijk van een andere klasse, namelijk de standaard ASP controller. Deze moet niet heel onbekend zijn voor de gemiddelde full-stack developer en met maar een waarde van 2 maak ik mij geen zorgen over de Depth of Inheritance.

__Class Coupling__

Tot slot geeft Class Coupling aan hoeveel andere klasses deze klasse gebruikt. Een hogere waarde kan zorgen voor complexere code en veel zoeken om een functionaliteit te begrijpen. Weer zie je dat mijn controllers een hogere waarde heeft. Dit komt omdat ik de ASP controller klasse gebruik. Hier zit veel functionaliteit in die mijn klasse gebruikt. De meeste functionaliteit binnen mijn controllers zijn vrij standaard dus ook hier ben ik niet bang voor de complexiteit en onderhoudbaarheid.

### Frontend

Tot slot heb ik drie simpele tests geschreven voor mijn ProductsOfTheDay component;

Een simpele API test om te kijken of de component succesvol de data van de API kan fetchen en kan laten zien:
![image info](/Documentatie/apitest.png)

Een test om te zien of er altijd 3 verschillende producten displayed worden:
![image info](/Documentatie/functionalitytest.png)

En een render test waarbij de test kijkt of de component wel fatsoenlijk zonder errors rendert.
![image info](/Documentatie/rendertest.png)

Daarnaast heb ik ook tests geschreven voor mijn Product component

## Agile method

**You can implement the software process for your project according to a given agile software development method.** 

### Persoonlijk project:

![image info](/Documentatie/persoonlijkekanban.png)

Voor mijn persoonlijke project heb ik gebruik gemaakt van de Kanban methodiek. Ik heb een kanban bord gemaakt op Trello en deze telkens bijgewerkt. Wanneer ik een feedback gesprek had, voegde ik nieuwe taken toe en zette ik de juiste kaartjes op done. Ik heb mijn kaartjes gelabeld met welk deel van het project het betreft. Zo kan ik snel zien of ik nog veel moet werken aan frontend, backend of documentatie.

### Groepsproject:

![image info](/Documentatie/swipperkanban.png)

Tijdens het groepsproject hebben wij met Kanban en Scrum gewerkt. Tijdens het samenwerken probeerde wij Scrum toe te passen maar het werd uiteindelijk meer een uitvoering van Kanban. Hierboven kun je ons Kanban bord zien. Ook hier maakte wij gebruik van labels om te laten zien welke taak bij welk deel van het project hoort. Om het overzichtelijker te maken wie aan welke taak werkt hebben wij ook de verantwoordelijke erbij gezet. Pas als een kaart in de __Sprint backlog__ kwam kreeg de taak een verantwoordelijke. In de __Done:__ kolom kun je ook zien dat vrijwel elke kaart een verantwoordelijke heeft.

![image info](/Documentatie/swipperkanbansubtaak.png)

Tot slot hadden sommige taken subtaken. Dit had weer wat weg van Scrum. Subtaken waren kleine onderdelen die samen het geheel van de taak voltooien. Hier kun je bijvoorbeeld zien dat Kacper 3 subtaken had voor zijn 'Profile View UI' taak. Deze kon hij individueel afvinken en op het bord werd dit automatisch bijgehouden.

![image info](/Documentatie/swipperyoutrack.png)

Omdat wij niet voldoende hadden aangetoond dat wij een agile methodiek onder de knie kregen hebben wij van Samuil de opdracht gekregen om te kijken naar andere borden. Wij zijn toen uitgekomen op Youtracker. Hier konden wij fatsoenlijk Scrum aantonen. Wij hadden onze nieuwe userstories voor de laatste twee sprints hier in gezet en zijn met Youtracker aan de slag gegaan.

![Alt text](/Documentatie/burndownchart.png)

Dankzij Youtracker konden wij eindelijk een burndownchart maken. Iets wat niet makkelijk gaat met Trello. Wij hebben elke subtaak van de user stories een geschat aantal uren gegeven. Wanneer de taken voltooid waren konden wij deze naar done slepen. De burndownchart werd dan per dag aangepast om onze voortgang te laten zien. Wij hebben echter de burndownchart allemaal in de laatste twee dagen aangepast en hadden gehoopt dat als wij de taken naar een andere kolom zoals 'busy' en 'in review' zouden verplaatsen dat dit ook gereflecteerd werd in onze burndownchart. Dit was echter niet het geval.


### Scrum Principles

1. **Empirical Process Control**: Embrace the fact that knowledge emerges through experience and make decisions based on observations and feedback.
2. **Self-Organization**: Encourage the team to self-organize and collaborate to deliver value.
3. **Iterative and Incremental Delivery**: Break the project into small, manageable iterations or sprints to deliver value incrementally.
4. **Collaboration**: Foster open communication and collaboration between the Scrum team, stakeholders, and customers.

### Scrum Steps

1. **Product Backlog**: Create and maintain a prioritized list of all desired features, enhancements, and bug fixes called the Product Backlog.

2. **Sprint Planning**: Select a set of items from the Product Backlog for the upcoming Sprint. Collaboratively define the Sprint Goal and create a Sprint Backlog, which includes tasks necessary to deliver the selected items.

3. **Sprint**: Execute the Sprint by working on the tasks defined in the Sprint Backlog. The team holds daily stand-up meetings to synchronize and discuss progress, challenges, and adaptations.

4. **Sprint Review**: At the end of the Sprint, hold a Sprint Review meeting to demonstrate the completed work to stakeholders and gather feedback.

5. **Sprint Retrospective**: Conduct a Sprint Retrospective meeting where the team reflects on the Sprint, identifies areas for improvement, and defines actions to enhance future Sprints.

6. **Repeat**: Repeat the Sprint cycle by conducting subsequent Sprints, refining the Product Backlog, and continuously delivering value in incremental iterations.

7. **Release**: When the Product Owner determines that the product has reached a sufficient level of quality and value, a release may be planned to deliver the product increment to customers.

8. **Monitor and Adapt**: Continuously monitor progress, gather feedback, and adapt the product, backlog, and processes to optimize value delivery.

### Kanban

 Kanban is an approach to project management and workflow visualization that originated from lean manufacturing principles. It helps teams improve efficiency, productivity, and transparency by visualizing work and limiting work in progress. Here are the key steps involved in implementing Kanban:

1. Visualize the Workflow: The first step in Kanban is to create a visual representation of your workflow. This can be done using a Kanban board, which typically consists of columns representing different stages of work, such as "To Do," "In Progress," and "Done." Each work item is represented by a card or sticky note.

2. Limit Work in Progress (WIP): One of the fundamental principles of Kanban is to limit the number of tasks or work items that can be in progress at any given time. This helps prevent overloading the team and promotes a smooth flow of work.

3. Define Work Item Types: Categorize your work items into different types or classes. For example, you could have user stories, bugs, or new features. Assign unique attributes and characteristics to each type to provide more context.

4. Set Work-in-Progress Limits: Determine the maximum number of work items that can be in progress at each stage of your workflow. These limits prevent bottlenecks and encourage better focus and collaboration.

5. Visualize Work Items: Place work items on the Kanban board, starting from the "To Do" column. As work progresses, move items across the columns to reflect their current status. This visual representation helps team members understand the overall workflow and individual responsibilities.

6. Manage Flow and Pull System: Kanban operates on a "pull" system, where team members pull work from the previous stage when they have capacity. This approach avoids overburdening team members and promotes a smooth, continuous flow of work.

7. Measure and Optimize: Continuously monitor the flow of work, collect relevant metrics, and analyze them to identify areas for improvement. Metrics such as cycle time (time taken to complete a work item) and throughput (number of items completed over a period) can provide valuable insights.

8. Collaborate and Improve: Encourage collaboration and transparency within the team. Regularly review the Kanban board together, identify bottlenecks, and discuss potential improvements. Continuously adapt and refine your Kanban system based on feedback and lessons learned.


### Lean Principles

1. **Value**: Focus on understanding and delivering customer value.
2. **Value Stream**: Identify and analyze the end-to-end value stream to eliminate waste and improve efficiency.
3. **Flow**: Strive to create a smooth and continuous flow of work, minimizing interruptions and delays.
4. **Pull**: Implement a pull system where work is pulled based on customer demand, reducing overproduction.
5. **Perfection**: Continuously seek perfection by relentlessly improving processes and eliminating waste.

### Lean Steps

1. **Identify Value**: Identify the specific value that customers expect from your products or services. Understand what they are willing to pay for and what differentiates your offerings.

2. **Map the Value Stream**: Map the end-to-end value stream, including all the steps and processes involved in delivering the product or service. This helps identify non-value-added activities and areas for improvement.

3. **Create Flow**: Analyze the value stream and remove any bottlenecks or obstacles that hinder the flow of work. Optimize the sequence of activities and streamline processes to achieve a smooth flow.

4. **Implement Pull**: Implement a pull system where work is pulled based on customer demand. This means producing or delivering items only when requested, minimizing overproduction and reducing inventory.

5. **Seek Perfection**: Continuously strive for perfection by relentlessly improving processes, eliminating waste, and engaging all team members in the pursuit of excellence.



## CI/CD
**You implement a (semi)automated software release process that matches the needs of the project context.**

![image info](/Documentatie/GithubCICD.jpg)

Ik heb op mijn backend CI/CD kunnen toepassen door middel van github actions and Azure CI/CD, hierdoor kan ik telkens als ik push naar mijn repo builden, testen en dan pas hosten. Zie het stukje Software Quality.

![image info](/Documentatie/frontendbuild.png)

Daarnaast heb ik ook CI/CD geimplementeerd voor mijn frontend, waarbij het zelfde verhaal van toepassing is behalve de tests.


## Cultural differences and ethics
**You recognize and take into account cultural differences when working with multi-site teams, and are aware of ethical aspects in software development.**

Zie Ethics.md and Cultural differences.md


## Requirements and design
**You translate (non-functional) requirements to extend existing (architectural) designs and can validate them using multiple types of test techniques.**

Ik heb voor mijn persoonlijke project wat user stories opgezet om zo functionaliteit te omschrijven, deze zijn als volgt:

### User stories:

__Een product aanmaken__

Als admin wil ik een nieuw product aanmaken zodat er een divers aanbod is op SoundSensei.

__Een product aanpassen__

Als admin wil ik informatie van een product kunnen aanpassen zodat de informatie up-to-date en accuraat blijft.

__Een product toevoegen aan mijn wantlist__

Als audiophile wil ik een lijst kunnen bijhouden met apparatuur die ik wil zodat ik een goed overzicht heb van mijn wensen.

__Een product toevoegen aan mijn havelist__

Als audiotechnicus wil ik een lijst kunnen bijhouden met al het apparatuur dat ik al heb zodat ik goed kan zien wat ik allemaal kan gebruiken voor mijn volgende project.

__Documentatie toevoegen aan een product__

Als admin wil ik documentatie kunnen toevoegen aan een product zodat men een compleet beeld heeft van de functionaliteit van een product.

__Documentatie downloaden/inzien__

Als hobbyist wil ik documentatie van een product kunnen inzien zodat ik bijvoorbeeld reparaties kan uitvoeren m.b.v. officiele documentatie.

Daarnaast heb ik twee diagrammen gemaakt volgens het C4-model om wat context te geven aan mijn project.

### Contextdiagram:

![image info](/Documentatie/soundsenseicontext.png)

In mijn contextdiagram kun je mijn SoundSensei systeem zien en de twee actoren die er mee om zullen gaan. De normale gebruiker die zijn twee lijstjes kan aanvullen met producten die beschikbaar zijn op SoundSensei. En een administrator die de producten kan wijzigen, toevoegen of verwijderen. Hij heeft ook de taak om nieuwe documentatie te beoordelen en te accepteren.

### Containerdiagram:

![image info](/Documentatie/soundsenseicontainer.png)

Als je dan een stapje dieper gaat kijken kun je de verschillende bouwblokken (ofwel containers) van mijn programma zien:

__Frontend app__

Hier wordt mijn react.js frontend gehost door Azure, gebruikers kunnen hierbij door middel van een url in hun browser. Tailwind CSS maakt het voor mij als developer makkelijker om frontend updates te doen.

__SoundSensei API__

In deze container staat mijn ASP.net applicatie. Deze zorgt voor de communicatie tussen de frontend en de database. Ik gebruik hier Microsoft Entity Framework Core voor.

__Documentation server__

Ook wil ik, door middel van een Azure Blob Server, documentatie kunnen opslaan en toegankelijk maken voor een gebruiker. Dit gaat op een aparte server om de grootte van mijn database klein te houden en alles netjes gescheiden te houden.

__Database__

Tot slot heb ik nog mijn database staan. Deze wordt door middel van AzureMySQL gehost en kan door de API aangeroepen worden. Hierin staat informatie over een gebruiker, producten en verschillende merken. 

### Database diagram:

![image info](/Documentatie/databasediagram.png)

### Groepsproject:

#### Finse ontwerpen:

De Finnen hadden besloten om een mobile app te maken omdat zij vorig semester al een webapp hebben gemaakt en dit semester mobile applicaties moesten aantonen. Zij zijn begonnen met allerlei wireframes te maken en deze aan elkaar te koppelen om zo een beeld te krijgen van hoe de frontend in elkaar zit. Hier volgend een paar voorbeelden van hun mockups om deze daarna te vergelijken met onze ontwerpen:

![image info](/Documentatie/FNswipperhomepage.jpg)

![image info](/Documentatie/FNswippersearch.jpg)

![image info](/Documentatie/FNswipperfavourites.jpg)

#### Onze ontwerpen:

Ook hebben wij voor het groepsproject ontwerpen gemaakt. Deze hebben wij zoveel mogelijk gebaseerd op de ontwerpen van onze Finse groepsgenoten. Wij hebben dus dezelfde kleuren en fonts gebruikt. Tot slot hebben we met simpele react.js code de UI gemaakt voor een webapp.

![image info](/Documentatie/swipperhomepage.png)

![image info](/Documentatie/swippersearch.png)

![image info](/Documentatie/swipperfavourites.png)

#### Swipper container diagram:

![image info](/Documentatie/swippercontainerdiagram.png)

Hier is de containerdiagram van ons groepsproject te zien. Er zijn 3 containers en een externe API aanwezig om ons project werkend te krijgen.

__Frontend:__

Wij hebben een eigen frontend gemaakt gebaseerd op React.js. Hier kan de gebruiker dezelfde handelingen doen als in de mobile app die de finnen hadden gemaakt zoals: een nieuw account maken, inloggen, een dier liken, je likes zien, een dier zoeken door middel van filters en je eigen listings aanmaken. 

__API:__

Ons plan was origineel om een Typescript REST API te maken. Dit is echter door tijdsnood en weinig ervaring niet gelukt. Daarom heb ik een ASP.NET API gemaakt en deze online gezet op Azure. De API maakt ook gebruik van Microsoft's Entity Framework Core om communicatie met onze database makkelijk te maken. De API maakt ook gebruik van een andere API, waar ik zo meer over kan vertellen, om standaard data van een dier op te vragen en deze vervolgens in de listings te gebruiken. De eigenaar van de listing kan deze data vervolgens nog aanpassen om een beter beeld te geven van het dier. 

__Database:__

Om onze data ergens op te slaan hebben wij via Azure een MySQL database op kunnen zetten. Hier worden onze gebruikers en listings opgeslagen.

__Externe API:__

Zoals ik eerder al zei maken wij gebruik van een externe API om standaard informatie op te vragen van een dier. Wij hebben vaak geswitcht tussen een specifieke hond API en een generieke animal API. Omdat wij toch meerdere dieren wilde gebruiken in onze webapp maken wij dus gebruik van de generieke API.

## Business processes
**You can explain simple business processes and relate them to the development of your software project.**

Ik heb in mijn 'business analyis.md' document een analyse gemaakt van een fictief project in de logistiek. Ik heb een oude en een nieuwe situatie gemodelleerd en een verbetering toegepast.

## Professional
**You act in a professional manner during software development and learning.**

### Persoonlijke onderzoeken

### Zelfreflectie

__Een korte samenvatting van S3:__

Ik heb gemerkt dat halverwege dit semester mijn motivatie erg laag was en had het gevoel dat ik geen voortgang meer kon maken. Ik probeerde te veel grote dingen tegelijkertijd te doen. 

Ons groepsproject was aan de Nederlandse kant erg mager en niet functioneel genoeg om aan de Finnen te geven. We zouden aan de slag gaan met een Typescript REST API maar dit was voor mij compleet onbekend terrein. Ons hele groepje liep een beetje tegen een muur op gezien veel van het programmeren onbekend was en enkel Alexander de grote problemen kon oplossen. Ik kreeg hierdoor weinig motivatie om serieues te werken aan het groepsproject en ging minder naar school op de groepsdagen.

Toen ik ons groepje een deadline gaf  om een werkend prototype te maken en deze deadline voorbij ging besloot ik om zelf een API te maken met ASP.net omdat ik hier meer ervaring mee had en een beter gevoel had van wat ik aan het doen was. Ik had binnen een korte tijd een werkend prototype en kon deze aan de Finnen presenteren. 

Hierdoor kreeg ik een hoop motivatie om ook mijn eigen project af te maken. Ik deelde alles in kleine stukken op en zette deze op Trello. Ik probeerde alles zo stapgewijs aan te pakken omdat ik bang was om weer tegen een groot probleem aan te lopen. Omdat alles een stuk beter liep begon ik meer naar school te gaan, en meer te communiceren met mijn groepsgenoten en andere klasgenoten. Dit heeft mij op sommige gebieden enorm geholpen en ik ben er zeker van dat ik bepaalde problemen niet tijdig had kunnen oplossen zonder de rest.

Toen de Finnen in Mei in Nederland waren ging onze groepssamenwerking erg goed. In de korte week dat ze er waren konden wij veel implementeren en werd er veel overlegd tussen de Nederlandse en Finse groepen. Ik nam veel van het technische werk op mijzelf omdat ik de backend zelf gemaakt had en hier dus het meeste verstand van had. Ik ben persoonlijk erg trots op het eindresultaat wat wij met de Finnen hebben mogen presenteren.

Nadat de samenwerking met de Finse groep afgelopen was, was er een soort gat wij moesten opvullen voor de proftaak. Wij hadden vrijwel direct besloten om onze eigen (web-based) frontend te maken en onze bestaande API te gebruiken om alles werkend te krijgen. 

Aan de kant van mijn persoonlijke project ging het ook goed, ik maakte grote stappen en kreeg steeds meer af. Het werd langzamerhand wel tijd om testen te gaan schrijven en mijn portfolio/documentatie af te maken. Dit stelde ik telkens weer uit omdat ik veel liever met de technische kant bezig was en er telkens wel een klein nieuw iets was wat ik wilde maken.

Doordat ik mijn documentatie uitstelde kwam ik de laatste weken toch wel in de stress en heb ik snel geprobeerd documentatie te maken. Veelal was er maar het was nog niet op niveau. Dit realiseerde ik mij toen ik de feedback las van Samuil en Jean Paul.

__Wat zou ik anders doen?__

Motivatie en planning zijn grote valkuilen geweest dit semester voor mij. Mijn lak aan motivatie kwam voornamelijk door alles snel en in een keer goed te willen doen. Ik moet mij beseffen dat niet alles in één keer goed kan en dat iteratief werken een stuk beter is. 

Als ik mijn docenten veel meer betrokken houd met de inhoud van mijn werk, dan met wat ik aan het doen ben, hebben zij en ik een goed beeld van hoe ik ervoor sta. Jean Paul beaamde dit in zijn feedback. Het aantal feedback gesprekken waren voldoende maar ik moet meer op inhoud ingaan. Daarom wil ik voortaan punten opstellen die ik wil bespreken met docenten.

Planning is een ander punt, Trello heeft mij in de tweede helft van het semester enorm geholpen met het overzichtelijk maken van wat ik moet doen en waarvoor. In de volgende semesters wil ik dit weer gaan gebruiken, misschien Youtracker vanwege de sprintindelingen, om een goed overzicht te krijgen met hoe ik er voor sta.
