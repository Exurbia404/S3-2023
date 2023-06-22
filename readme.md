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
    - [Tests:](#tests)
  - [Software quality](#software-quality)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Agile method](#agile-method)
  - [Scrum Principles](#scrum-principles)
  - [Scrum Steps](#scrum-steps)
  - [Lean Principles](#lean-principles)
  - [Lean Steps](#lean-steps)
  - [CI/CD](#cicd)
  - [Cultural differences and ethics](#cultural-differences-and-ethics)
  - [Requirements and design](#requirements-and-design)
    - [User stories:](#user-stories)
    - [Contextdiagram:](#contextdiagram)
    - [Containerdiagram:](#containerdiagram)
    - [Database diagram:](#database-diagram)
    - [Groepsproject designs:](#groepsproject-designs)
  - [Business processes](#business-processes)
  - [Professional](#professional)
 
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

__Usability Testing:__

Usability Testing houdt in dat je feedback van gebruikers verzamelt terwijl ze omgaan met je product/prototype. Gebruikers krijgen een specifieke taak of functionaliteit om uit te testen, terwijl onderzoekers kijken naar hoe ze handelen, waar ze vastlopen en waar ze aan denken terwijl ze hun taak uitvoeren. Dit helpt bij het identificeren van bruikbaarheidsproblemen en een beter inzicht te krijgen van hoe gebruikers omgaan met een product/prototype.

__A/B Testing:__

Bij A/B Testing vergelijk je twee varianten van een ontwerp/functionaliteit om te bepalen welke het beste presteert en in de smaak valt bij gebruikers. Gebruikers krijgen willekeurige taken en willekeurige versies te zien en moeten hun taak voltooien. Hier kun je ook weer kijken naar allerlei factoren om te bepalen welke versie/functionaliteit beter presteert.

__Thinking out Loud:__

Bij de Thinking Aloud-methode wordt aan de deelnemers gevraagd om hun gedachten en handelingen hardop uit te spreken terwijl ze omgaan met een product/functionaliteit. Ze worden aangemoedigd om te delen wat er in hun hoofd omgaat, inclusief hun overwegingen, reacties en eventuele problemen die ze tegenkomen. Deze methode biedt inzicht in de manier waarop gebruikers denken, de beslissingen die ze nemen en de uitdagingen waarmee ze worden geconfronteerd tijdens het gebruik van een product of interface.

### Tests:

__Test scenarios:__

__1. Een specifiek product vinden__

Ik heb aan mijn Oma gevraagd of zij de "Philips Receiver 1" kon vinden. Ze begon op de homepage. Ze probeerde eerst op het Philips logo te klikken om zo bij de Philips producten te komen, deze functionaliteit is er echter niet. Toen dat niet werkte klikte ze op producten en scrollde toen tot ze de Philips Receiver 1 zag. 

Ik vroeg haar waarom ze niet een filter gebruikte om sneller te zoeken. Omdat de filters dichtbij de navbar stonden dacht ze dat het onderdeel was van de navbar. Tot slot was het heel makkelijk geweest als de brands carousel direct door ging naar alle Philips producten. Dit is een functionaliteit die ik er graag wil implementeren.

__2. Een nieuwe gebruiker aanmaken en inloggen__

Aan mijn zus vroeg ik of ze een nieuwe gebruiker kon maken. Ze drukte op de sign in knop en daarna op "dont have an account? sing up here". Voerde vervolgens haar gegevens in en drukte op op complete. De website logt niet automatisch in maar dit had ze vrij snel door. Ze drukte vervolgens op log in en gebruikte haar net ingevoerde gegevens om succesvol in te loggen.

Het zou fijn zijn als de gebruiker meteen ingelogd wordt wanneer ze een nieuwe gebruiker aanmaakt. 

__3. Kijken of de UI in de smaak valt__

Tot slot mijn vader, iemand die veel naar audophile producten kijkt en vaak op Discogs.com zit. Hij vond de witte stijl van mijn ontwerp wel fijn maar had graag iets grotere letters gezien en de optie om naar meerdere plaatjes te kijken voordat je naar de productspecificpage gaat.

## Software quality

**You use software tooling and methodology that continuously monitors and improve the software quality during software development.**

### Backend
![image info](/Documentatie/testexplorer.png)
Ik heb voor mijn backend, voor alle controllers unit tests geschreven. Hierdoor is mijn test coverage >95%.

![image info](/Documentatie/actiondiagram.png)
Wanneer ik push naar mijn git wordt er automatisch een build gemaakt, en worden al mijn tests gerund. Het was de bedoeling dat er automatisch een test result plan wordt geupload naar mijn git voor analyse maar dit is mij tot op heden niet gelukt werkend te krijgen. Het lukt wel om mijn solution te builden, te testen en te publishen.

![image info](/Documentatie/Codemetricsbackend.png)

Tot slot heb ik een codescan los laten gaan op mijn backend. Zoals je kan zien is mijn backend in een goede staat. Met een gemiddelde van 89 bij de maintainibility Index mag ik erg tevreden zijn.

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

Ik gebruik een Trello kanban bord om mijn project te managen. Een uitnodiging om deel te nemen aan de workspace is [Hier](https://trello.com/invite/b/0F2U4pv4/ATTI6facbb6aaba9b42c7fe6c076f33f3b2168DBE687/soundsensei "Trello invite") te vinden. Ik gebruik in het kanban bord labels om duidelijk aan te geven welk item bij welk onderdeel van mijn project hoort.

## Scrum Principles

1. **Empirical Process Control**: Embrace the fact that knowledge emerges through experience and make decisions based on observations and feedback.
2. **Self-Organization**: Encourage the team to self-organize and collaborate to deliver value.
3. **Iterative and Incremental Delivery**: Break the project into small, manageable iterations or sprints to deliver value incrementally.
4. **Collaboration**: Foster open communication and collaboration between the Scrum team, stakeholders, and customers.

## Scrum Steps

1. **Product Backlog**: Create and maintain a prioritized list of all desired features, enhancements, and bug fixes called the Product Backlog.

2. **Sprint Planning**: Select a set of items from the Product Backlog for the upcoming Sprint. Collaboratively define the Sprint Goal and create a Sprint Backlog, which includes tasks necessary to deliver the selected items.

3. **Sprint**: Execute the Sprint by working on the tasks defined in the Sprint Backlog. The team holds daily stand-up meetings to synchronize and discuss progress, challenges, and adaptations.

4. **Sprint Review**: At the end of the Sprint, hold a Sprint Review meeting to demonstrate the completed work to stakeholders and gather feedback.

5. **Sprint Retrospective**: Conduct a Sprint Retrospective meeting where the team reflects on the Sprint, identifies areas for improvement, and defines actions to enhance future Sprints.

6. **Repeat**: Repeat the Sprint cycle by conducting subsequent Sprints, refining the Product Backlog, and continuously delivering value in incremental iterations.

7. **Release**: When the Product Owner determines that the product has reached a sufficient level of quality and value, a release may be planned to deliver the product increment to customers.

8. **Monitor and Adapt**: Continuously monitor progress, gather feedback, and adapt the product, backlog, and processes to optimize value delivery.

__Kanban:__ 

 Kanban is an approach to project management and workflow visualization that originated from lean manufacturing principles. It helps teams improve efficiency, productivity, and transparency by visualizing work and limiting work in progress. Here are the key steps involved in implementing Kanban:

1. Visualize the Workflow: The first step in Kanban is to create a visual representation of your workflow. This can be done using a Kanban board, which typically consists of columns representing different stages of work, such as "To Do," "In Progress," and "Done." Each work item is represented by a card or sticky note.

2. Limit Work in Progress (WIP): One of the fundamental principles of Kanban is to limit the number of tasks or work items that can be in progress at any given time. This helps prevent overloading the team and promotes a smooth flow of work.

3. Define Work Item Types: Categorize your work items into different types or classes. For example, you could have user stories, bugs, or new features. Assign unique attributes and characteristics to each type to provide more context.

4. Set Work-in-Progress Limits: Determine the maximum number of work items that can be in progress at each stage of your workflow. These limits prevent bottlenecks and encourage better focus and collaboration.

5. Visualize Work Items: Place work items on the Kanban board, starting from the "To Do" column. As work progresses, move items across the columns to reflect their current status. This visual representation helps team members understand the overall workflow and individual responsibilities.

6. Manage Flow and Pull System: Kanban operates on a "pull" system, where team members pull work from the previous stage when they have capacity. This approach avoids overburdening team members and promotes a smooth, continuous flow of work.

7. Measure and Optimize: Continuously monitor the flow of work, collect relevant metrics, and analyze them to identify areas for improvement. Metrics such as cycle time (time taken to complete a work item) and throughput (number of items completed over a period) can provide valuable insights.

8. Collaborate and Improve: Encourage collaboration and transparency within the team. Regularly review the Kanban board together, identify bottlenecks, and discuss potential improvements. Continuously adapt and refine your Kanban system based on feedback and lessons learned.

__Lean:__ 

## Lean Principles

1. **Value**: Focus on understanding and delivering customer value.
2. **Value Stream**: Identify and analyze the end-to-end value stream to eliminate waste and improve efficiency.
3. **Flow**: Strive to create a smooth and continuous flow of work, minimizing interruptions and delays.
4. **Pull**: Implement a pull system where work is pulled based on customer demand, reducing overproduction.
5. **Perfection**: Continuously seek perfection by relentlessly improving processes and eliminating waste.

## Lean Steps

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

![image info](/Documentatie/contextdiagram.png)

In mijn contextdiagram kun je zien dat er 3 systemen zien;

__Hi-Fi informatie systeem__

Dit is in feite mijn frontend. Hier kan de gebruiker mee omgaan en allerlei handelingen verrichten.

__Data opslag systeem__

Dit is een onderdeel van mijn backend dat communiceert met mijn database. Hierin staat plaintext informatie en de gegevens over de user

__Hi-Fi documentatie systeem__

Hierin komt al mijn documentatie te staan. Dit kan ik niet in plain-text opslaan. Daarom gaat het in een ander systeem opgeslagen worden.

### Containerdiagram:

![image info](/Documentatie/containerdiagram.png)

Hier kun je de daadwerkelijke containers zien van mijn programma. Helaas ontbreekt mijn server container omdat ik deze niet op tijd werkend gekregen heb. Ik heb toch nog 3 containers:

__Web app__

Hier wordt mijn react.js frontend gehost door Azure, gebruikers kunnen hierbij door middel van een url in hun browser. Tailwind CSS maakt het voor mij als developer makkelijker om frontend updates te doen.

__API application__

In deze container staat mijn ASP.net applicatie. Deze zorgt voor de communicatie tussen de frontend en de database. Ik gebruik hier Microsoft Entity Framework Core voor.

__Database__

Tot slot heb ik nog mijn database staan. Deze wordt door middel van AzureMySQL gehost en kan door de API aangeroepen worden.

### Database diagram:

![image info](/Documentatie/databasediagram.png)

### Groepsproject designs:

Ook hebben wij voor het groepsproject ontwerpen gemaakt. Deze hebben wij zoveel mogelijk gebaseerd op de ontwerpen van onze Finse groepsgenoten. Wij hebben dus dezelfde kleuren en fonts gebruikt. Tot slot hebben we met simpele react.js code de UI gemaakt voor een webapp.

![image info](/Documentatie/swipperhomepage.png)

![image info](/Documentatie/swippersearch.png)

![image info](/Documentatie/swipperfavourites.png)

## Business processes
**You can explain simple business processes and relate them to the development of your software project.**

Ik heb in mijn 'business analyis.md' document een analyse gemaakt van een fictief project in de logistiek. Ik heb een oude en een nieuwe situatie gemodelleerd en een verbetering toegepast.

## Professional
**You act in a professional manner during software development and learning.**

Ik heb dit semester gebruik gemaakt van Trello om mijn persoonlijke project te managen. Ook hebben wij in het groepsproject gebruik gemaakt van Trello en aan het einde YouTracker.

Ik communiceerde tijdig met met mijn klasgenoten online en offline over mijn voortgang en helpte wanneer nodig was. Het Finse groepje complimenteerde mij over mijn snelle implementatie van nieuwe features die zij nodig hadden.

Ook ben ik met regelmaat naar Jean Paul geweest om mijn persoonlijke project te bespreken, feedback noteerde ik altijd in Feedpulse en ik probeerde zo vaak mogelijk afspraken te maken over wat ik in het volgende gesprek zou laten zien.

Tot slot heb ik twee onderzoeken gemaakt om mijn onderzoeksvaardigheid aan te tonen, zie: Persoonlijkonderzoek.md en Cryptographic Failures Research Rapport.md. Hier maakte ik gebruik van het DOT-framework om een probleem te analyseren en op te lossen in mijn project.