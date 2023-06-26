# Business  Process Analysis
## Context

Een logistiek bedrijf wilt de status van haar vloot in real-time kunnen monitoren. In het huidige systeem kunnen ze enkel zien of een vrachtwagen onderweg is, bij de klant, bij de leverancier of pauze heeft. De locatie en geschatte aankomsttijd kunnen enkel telefonisch gecommuniceerd worden.

Met het nieuwe systeem kun je als klant zien waar je zending is, hoelang het nog duurt voordat je vracht er is en waar de vracht momenteel is. Als logistiek bedrijf heb je een veel beter beeld van je vloot en kun je mogelijke problemen sneller oplossen en beter communiceren naar de klant.

## Situatie in het verleden:

![image info](/Documentatie/oudprocess.png)

Hier kun je het oude process zien. Wanneer een klant wilt weten hoelang het nog duurt voordat zijn vracht aankomt moet hij contact opnemen met de klantenservice. Dit kan natuurlijk alleen tidjens kantoor uren en wanneer de klantenservice vrij is. Dan kan de klantenservice op zoek gaan naar de juiste chauffeur en zijn contactgegevens. Er kan dan pas contact opgenomen worden met de chauffeur, mits deze vrij is en in staat is om te bellen. In praktijk gaat dit natuurlijk tijdens het rijden zelf. De chauffeur kan dan een schatting hoelang het nog duurt voordat hij bij de klant is. 

### Analyse

In dit process zijn er een paar voorwaarden aanwezig voor een snel en efficient process, voornamelijk dat er contact opgenomen kan worden met de chauffeur en klantenservice. Een extra valkuil kan onverwacht verkeer zijn. Een chauffeur kan hier lastig rekening mee houden (spits natuurlijk wel).


## Nieuwe situatie:

![image info](/Documentatie/nieuwprocess.png)

In het nieuwe process kan de klant via een service systeem inzien waar de vracht is, en wanneer de vracht aankomt. Dit kan 24/7 gemonitord worden, dus ook buiten kantooruren wanneer de klantenservice dit bijvoorbeeld niet meer kan doen. Een GPS systeem dat in elke vrachtwagen zit kan accuraat de locatie en snelheid opgeven. Ook kan het service systeem door middel van verkeersinformatie een betere schatting geven van de aankomsttijd. 

## BPMN

Omdat ik het toch lastig vond om BPMN toe te passen op de bovenste situatie heb ik ervoor gekozen een tweede situatie te schetsen in BPMN. Ik kan hier geen verbetering op toe passen dus het is enkel om BPMN aan te tonen:

![image info](/Documentatie/BPMN.png)

In deze situatie schets ik hoe een order door een bedrijf verwerkt wordt. Een order komt binnen en er wordt gekeken of de betaling ervan geslaagd is. Wanneer dit het geval is kan het door gaan naar het magazijn. Als dit niet het geval is mislukt de order. Het magazijn pickt de order en de bezorger levert het vervolgens af bij de klant waardoor het process afgerond is.

