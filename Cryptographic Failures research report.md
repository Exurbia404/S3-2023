# Cryptographic failures

## Table of contents:
- [Cryptographic failures](#cryptographic-failures)
  - [Table of contents:](#table-of-contents)
  - [Context:](#context)
  - [Onderzoeksmethodiek:](#onderzoeksmethodiek)
  - [Valkuilen:](#valkuilen)
    - [Use of Hard-coded passwords:](#use-of-hard-coded-passwords)
    - [Broken or Risky Crypto Algorithm:](#broken-or-risky-crypto-algorithm)
    - [Insufficient Entropy:](#insufficient-entropy)
  - [Verbeteringen en conclusie:](#verbeteringen-en-conclusie)
    - [Backend:](#backend)
    - [Frontend:](#frontend)
  - [Bronnenlijst:](#bronnenlijst)

## Context:

Voor het persoonlijke project dit semester heb ik ervoor gekozen om een webapp te maken voor audiophiles waar men informatie en documentatie kan opzoeken over bestaande producten. Bij elke applicatie is veiligheid een grote factor. Daarom heb ik vanuit school de opdracht gekregen om een onderzoek te doen naar een security principe. Ik heb ervoor gekozen om onderzoek te doen naar Cryptographic Failures. Omdat dit een van de basics is van een degelijk software programma bouwen, en wat veel te vaak nog mist gaat. Ik heb voor dit onderzoek/project eigenlijk nog geen ervaring opgedaan met security principes en al helemaal niet cryptografie.

## Onderzoeksmethodiek:

Voor dit onderzoek ga ik gebruik maken van één van de bestaande dotnet methodieken. Ik heb ervoor gekozen om de library methodiek te gebruiken om informatie te verzamelen. Dit omdat er al heel veel onderzoek gedaan is naar cryptografie. Ik kan heel erg mijn best doen om zelf iets nieuws te verzinnen om mijn cryptografie te verbeteren maar gezien zelfs grote bedrijven soms last hebben met fatsoenlijke cryptografie kan ik beter kijken naar wat de industriele standaarden zijn, en welke guidelines er bestaan om deze vervolgens over te nemen.

## Valkuilen:

OWASP noemt zelf 3 veel voorkomende valkuilen op het gebied van cryptografie (OWASP, 2021). Ik ga deze kort doornemen en telkens een manier geven om dit te voorkomen. Ook benoem ik of ik voor deze valkuilen ben gevallen (ja).

### Use of Hard-coded passwords:

Volgens CWE, een community die zich focust op Common Weakness Enumartion, zijn er twee vormen van deze fout. Namelijk de inbound, en outbound vormen (CWE-259, 2023).

In de inbound vorm checkt de software een door de gebruiker ingevoerd wachtwoord, of andere vorm van authenticatie, tegen een hard-coded wachtwoord. Het daadwerkelijke wachtwoord staat dus in de logica geschreven. Iemand die toegang heeft tot de applicatie, in bijvoorbeeld .exe vorm, kan gemakkelijk het wachtwoord vinden eruit halen. Detectie hiervan is erg lastig omdat de "aanval" plaatsvind aan de client side.

Ook bestaat er een outbound variant waarbij een programma gebruik maakt van een andere service en hiervoor het wachtwoord hard-code. Een voorbeeld die het CWE geeft is verbinding maken met een database.

```
<connectionStrings>
<add name="ud_DEV" connectionString="connectDB=uDB; uid=db2admin; pwd=password; dbalias=uDB;" providerName="System.Data.Odbc" />
</connectionStrings>
```

Veel mensen gebruik een configuratie bestand om hun configs ergens op te slaan om het overzichtelijk te houden. Maar zoals je kunt zien creeërt dit een valkuil waarbij je al gauw je wachtwoord in plaintext neerzet. Iemand die toegang krijgt tot deze config kan gemakkelijk het wachtwoord eruit plukken.

Ik ben zelf schuldig van het laatste, ik gebruik in meerdere project een configuratie file waarin het wachtwoord in plaintext staat. Het CWE noemt meerde oplossingen hiervoor:

1. Sla wachtwoorden buiten de code op in een encrypted config bestand of database waarvan de toegang enorm gelimiteerd is (CWE-230, 2023).
2. Je kunt de toegang tot een feature limiteren door het enkel via door jou bepaalde manieren toegang kan krijgen. Bijvoorbeeld enkel via de console i.p.v. het internet (CWE-259, 2023).
3. Een oplossing voor inbound authenticatie is om een krachtige one-way hash toe te passen op de wachtwoorden en deze op te slaan in een configuratie file of database (hier kun je vervolgens punt 1 weer op toepassen). Wanneer je een gebruiker wilt authenticeren kun je de hash vergelijken met de hash die je opgeslagen hebt (CWE-259, 2023)

### Broken or Risky Crypto Algorithm:

Het veld van cryptografie verandert vaak en snel. Voor bedrijven is het belangrijk de laatste cryptografie bij te houden en alert te zijn voor algorithmen die ontcijferd worden. Er bestaat een klein lijstje op Wikipedia van 13 (eerst) populaire algorithmen die gekraakt zijn in de loop der tijd (Wiki, 2023).

Dit komt omdat computers steeds krachtiger zijn geworden en dus veel meer computatiekracht beschikbaar is om wachtwoorden te kraken. Iets wat vroeger decennia duurde om te kraken kan tegenwoordig in uren/dagen gekraakt worden. En met Quantumcomputers om de hoek, die exponentieel meer rekenkracht hebben dan een conventionele computer is het belangrijk om een algorithme continu te verbeteren (NewScientist).

Een manier om je hiervan te beschermen is het laatste nieuws te volgen over cryptografische algorithmen en gebruik te maken van de laatste en veiligste algorithmen. Microsoft had heel lang support voor MD5 en DES algorithmen maar nadat deze gekraakt werden moesten ze de standaard Microsoft Libraries aanpassen om een andere variatie van het algoritme te gebruiken. Tegenwoordig geeft de Visual Studio compiler een waarschuwing wanneer je een gedateerd algorithme gebruikt (Microsoft, 2023). 

Ik maak zelf geen gebruik van een algorithme om mijn wachtwoorden te beveiligen. In het groepsproject is herhaaldelijk de suggestie gevallen om OAuth toe te passen, een internationaal standaard om authenticatie te regelen. In de toekomst kan ik voor mijn C# projecten een Microsoft Library gebruiken om deze valkuilen te vermijden.

### Insufficient Entropy:

Insufficient Entropy is wanneer een algoritme te weinig willekeur heeft. Het liefste heb je een algoritme wat heel veel verschillende uitkomsten kan hebben zodat het voorspellen een stuk lastiger wordt. De verantwoordelijkheid hiervan ligt bij de programmeur van het algorithme en degene die het algorithme gebruikt. Je kunt wel een geavanceerd algorithme schrijven maar je als je bijvoorbeeld maar één en telkens dezelfde input geeft kan het voor een hacker makkelijk zijn een voorspelling te maken. Een voorbeeld hiervan is het volgende: 

```
function generateSessionID($userID){
    srand($userID);
    return rand();
}
```

Hier gebruikt iemand de userID als seed voor de rand() functie. Omdat je hierdoor een patroon creeërt waarbij alles afhankelijk is op enkel de userID kan iemand dit patroon snel spotten. 

Een manier om deze valkuil te voorkomen is om zoveel mogelijk inputs te geven aan een algorithme. De meeste algorithme's bieden de mogelijkheid om meerdere inputs te geven, een mogelijkheid is om tijd toe te voegen. Hierdoor kan je de entropy van je programma op voldoende niveau houden.

## Verbeteringen en conclusie:

Nu dat wij een beter beeld hebben van welke valkuilen er bestaan geef ik kort bij elk onderdeel aan hoe ik verbeteringen kan maken aan mijn programma:

### Backend:

- Gebruik maken van beveiligde configuratiefiles.
- Wachtwoorden die opgeslagen moeten worden hashen.
- Gebruik maken van industriele standaard libraries van grote partijen.
- Regelmatig kijken of mijn gebruikte algorithmen nog veilig zijn.

### Frontend:

- In de frontend kan ik gebruik maken van OAuth.
- Functionaliteit zoveel mogelijk beschermen met zogenaamde gates.

Door deze methoden toe te passen kan ik mijn programma op het cryptografische niveau een stuk veiliger maken. Natuurlijk moet ik ook rekening houden met de andere OWASP security problemen. Door tijdnood heb ik deze verbeteringen niet toe kunnen passen maar de basis is er wel. In mijn volgende project zal ik deze zeker meenemen.

## Bronnenlijst:

- [OWASP, 2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)
- [CWE-259, 2023](https://cwe.mitre.org/data/definitions/259.html)
- [CWE-230, 2023](https://cwe.mitre.org/data/definitions/320.html)
- [Wiki, 2023](https://en.wikipedia.org/wiki/Category:Broken_cryptography_algorithms)
- [NewScientist, 2023](https://www.newscientist.com/article/2353376-quantum-computers-can-break-major-encryption-method-researchers-claim/#:~:text=A%20group%20of%20researchers%20has,powerful%20enough%20to%20threaten%20encryption.)
- [Microsoft, 2023](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca5351)
- [CWE-331, 2023](https://cwe.mitre.org/data/definitions/331.html)

