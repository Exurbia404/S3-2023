# Cryptographic failures

## Context

OWASP A02 focust zich op cryptografie, of de lak daarvan. Dit kan leiden tot gevoelige data die op straat komt te liggen. Het is daarom belangrijk om te kijken of je wel op een juiste manier omgaat met cryptografie. 

## Huidige situatie

In mijn project maak ik gebruik van een inlogsysteem. Gebruikers kunnen dus zelf een wachtwoord aanmaken en deze gebruiken om in te loggen. Dit gaat in combinatie met hun email adress. Hieronder staat een afbeelding met daarop de database voor het onderzoek.

![image info](/Documentatie/database.jpg)

Zoals je kunt zien staat alles in plaintext. Dit betekent dat er geen enkele vorm van cryptografie op mijn data zit. Dit is natuurlijk gevaarlijk, wanneer iemand toegang kan krijgen tot de database is het maar een kwestie van kopiëren en plakken om de data op te slaan.

## Strategie

Om dit probleem aan te pakken ga ik gebruik maken van de 'Library' strategie in het DOT-framework. Ik ga kijken welke bestaande oplossingen er zijn en deze proberen toe te passen in mijn project.


