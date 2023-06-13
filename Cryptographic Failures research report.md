# Cryptographic failures

## Context


Cryptografische failures, zoals gedefinieerd door OWASP (Open Web Application Security Project), verwijzen naar kwetsbaarheden en tekortkomingen in het gebruik van cryptografische technieken en protocollen in webtoepassingen. Cryptografie speelt een cruciale rol bij het waarborgen van de vertrouwelijkheid, integriteit en authenticiteit van gegevens in moderne informatiesystemen. (OWASP)

In de context van webtoepassingen kunnen cryptografische failures leiden tot ernstige beveiligingslekken en kunnen aanvallers gevoelige informatie onderscheppen, manipuleren of onthullen. OWASP identificeert verschillende typen cryptografische failures, waaronder:

* __Zwakke algoritmen:__ Het gebruik van verouderde of bekende zwakke cryptografische algoritmen kan de veiligheid van gegevens in gevaar brengen. OWASP benadrukt het belang van het gebruik van sterke en gevalideerde algoritmen die bestand zijn tegen aanvallen.

* __Onjuiste sleutelbeheer:__ Een zwak sleutelbeheerproces kan leiden tot het compromitteren van versleutelde gegevens. Het opslaan, genereren, delen of beheren van sleutels op een onveilige manier kan cryptografische kwetsbaarheden creëren.

* __Slechte configuratie:__ Onjuiste configuratie van cryptografische protocollen, zoals SSL/TLS, kan resulteren in mislukte beveiliging. Het niet inschakelen van de juiste beveiligingsparameters of het gebruik van verouderde versies van protocollen kan tot kwetsbaarheden leiden.

* __Gebrek aan sterke willekeurige getallen:__ Het genereren van sterke willekeurige getallen is essentieel voor de veiligheid van cryptografische sleutels en andere kritieke parameters. Een gebrek aan voldoende willekeurigheid kan de voorspelbaarheid en veiligheid van het cryptografische systeem in gevaar brengen.

## Strategie

Als ik een cryptografisch veilig programma wil maken, kan ik de "library" strategie toepassen. Dit houdt in dat ik gebruik maak van bestaande en goed geteste cryptografische bibliotheken. Ik identificeer eerst geschikte cryptografische bibliotheken die voldoen aan mijn beveiligingsstandaarden. Populaire bibliotheken zoals OpenSSL, Bouncy Castle of libsodium kunnen goede keuzes zijn (OpenSSL) (Bouncy Castle).

Vervolgens beoordeel ik de documentatie en ondersteuning van de gekozen bibliotheken. Het is belangrijk dat ze goed gedocumenteerd zijn en regelmatig updates en patches uitbrengen om eventuele kwetsbaarheden aan te pakken.

Daarna integreer ik de gekozen cryptografische bibliotheek in mijn programma door gebruik te maken van de API's en functies die worden aangeboden. Ik volg de richtlijnen en best practices die door de bibliotheek worden aanbevolen om de beveiliging te waarborgen.

Bij het implementeren van de bibliotheek pas ik de juiste configuratie toe, zoals het inschakelen van sterke cipher suites, het instellen van de juiste sleutellengtes en het vermijden van verouderde algoritmen. Ik zorg ervoor dat ik de documentatie van de bibliotheek raadpleeg om de juiste configuratieopties te begrijpen en toe te passen.

## Huidige situatie

In mijn project maak ik gebruik van een inlogsysteem. Gebruikers kunnen dus zelf een wachtwoord aanmaken en deze gebruiken om in te loggen. Dit gaat in combinatie met hun email adress. Hieronder staat een afbeelding met daarop de database voor het onderzoek.

![image info](/Documentatie/database.jpg)

Zoals je kunt zien staat alles in plaintext. Dit betekent dat er geen enkele vorm van cryptografie op mijn data zit. Dit is natuurlijk gevaarlijk, wanneer iemand toegang kan krijgen tot de database is het maar een kwestie van kopiëren en plakken om de data op te slaan. Als je dus kijkt naar de vier punten van eerder ontbreekt eigenlijk alles.

## Implementatie

Gezien tijdnood kan ik deze functies niet daadwerkelijk meer implementeren. Ik wil het wel kort hebben over hoe ik deze functies/libraries zou implementeren in mijn programma en waarom;

### Backend

Ik heb gekozen voor de System.Security.Cryptography-bibliotheek omdat het een betrouwbare en goed onderhouden standaardbibliotheek is die wordt geleverd met het .NET Framework. Gezien mijn backend in ASP.net gemaakt is, wordt het implementeren hiervan heel simpel. Ook heb ik ervaring met deze library omdat ik deze eerder gebruikt heb. Het biedt cryptografische functies en algoritmen die bekend staan om hun beveiliging en betrouwbaarheid. De PBKDF2-implementatie in deze bibliotheek is een geschikte keuze voor het hashen van wachtwoorden, omdat het een hoge mate van beveiliging biedt door iteraties en een random gegenereerde salt te gebruiken (Microsoft).

```
using System;
using System.Security.Cryptography;

public class PasswordHelper
{
    private const int SaltSize = 16; // Grootte van de salt in bytes
    private const int HashSize = 32; // Grootte van de gehashte waarde in bytes
    private const int Iterations = 10000; // Aantal iteraties voor de hash-functie

    public static string HashPassword(string password)
    {
        byte[] salt = new byte[SaltSize];
        using (var rng = new RNGCryptoServiceProvider())
        {
            rng.GetBytes(salt);
        }

        byte[] hash = HashPassword(password, salt);

        byte[] hashWithSalt = new byte[SaltSize + HashSize];
        Array.Copy(salt, 0, hashWithSalt, 0, SaltSize);
        Array.Copy(hash, 0, hashWithSalt, SaltSize, HashSize);

        return Convert.ToBase64String(hashWithSalt);
    }

    public static bool VerifyPassword(string password, string hashedPassword)
    {
        byte[] hashWithSalt = Convert.FromBase64String(hashedPassword);
        byte[] salt = new byte[SaltSize];
        byte[] hash = new byte[HashSize];

        Array.Copy(hashWithSalt, 0, salt, 0, SaltSize);
        Array.Copy(hashWithSalt, SaltSize, hash, 0, HashSize);

        byte[] computedHash = HashPassword(password, salt);

        return hash.SequenceEqual(computedHash);
    }

    private static byte[] HashPassword(string password, byte[] salt)
    {
        using (var rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, salt, Iterations))
        {
            return rfc2898DeriveBytes.GetBytes(HashSize);
        }
    }
}
```

### Frontend

Om de veiligheid tussen de frontend en backend te waarborgen, neem ik verschillende maatregelen:

__Beveiligde communicatie:__ Ik zorg ervoor dat de communicatie tussen de frontend en backend plaatsvindt via een beveiligd protocol, zoals HTTPS. HTTPS maakt gebruik van versleuteling om gegevens tijdens de overdracht te beschermen tegen afluisteren en manipulatie (HTTPS).

__Inputvalidatie:__ Ik implementeer strikte validatie aan zowel de frontend- als de backendzijde om ervoor te zorgen dat de ingevoerde gegevens voldoen aan de verwachte indeling en criteria. Dit helpt om kwetsbaarheden zoals SQL-injectie of cross-site scripting (XSS) te voorkomen(OWASP).

__Gebruik van beveiligde sessies:__ Ik maak gebruik van beveiligde sessies om de authenticiteit en integriteit van gebruikers te controleren. Hierbij wordt een unieke sessie-id gegenereerd voor elke gebruiker en op een veilige manier opgeslagen. Dit voorkomt sessiediefstal en vervalsing(OWASP).

__Toegangscontrole en autorisatie:__ Ik implementeer een robuust toegangscontrolebeleid om ervoor te zorgen dat gebruikers alleen toegang hebben tot de gegevens en functionaliteiten die ze nodig hebben. Dit omvat het verifiëren van gebruikersrollen en het toepassen van autorisatieregels op zowel frontend- als backendniveau.

__Bescherming tegen cross-site scripting (XSS) en cross-site request forgery (CSRF):__ Ik implementeer beveiligingsmaatregelen zoals het valideren en filteren van invoer, het gebruik van anti-CSRF-tokens en het toepassen van Content Security Policy (CSP) om XSS- en CSRF-aanvallen te voorkomen.

__Beveiligde opslag van gegevens:__ Ik zorg ervoor dat gevoelige gegevens, zoals wachtwoorden en persoonlijke informatie, op een veilige manier worden opgeslagen in de backend. Dit omvat het gebruik van veilige hash- en salt-algoritmen om wachtwoorden te beschermen en het toepassen van encryptie op gevoelige gegevens(OWASP).

## Bronnen

1. OWASP Crypto Coding Practices Guide: [OWASP Crypto Coding Practices Guide](https://owasp.org/www-project-crypto-coding-practices/)

2. Documentatie van OpenSSL: [OpenSSL Documentation](https://www.openssl.org/docs/)

3. Documentatie van Bouncy Castle: [Bouncy Castle Documentation](https://www.bouncycastle.org/documentation.html)
4. Microsoft Documentation: [Hashing Passwords with Password-Based Key Derivation Function 2 (PBKDF2)](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.rfc2898derivebytes?view=net-5.0)
5. "HTTPS" - OWASP Cheat Sheet: Transport Layer Protection (https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)
6. "Input Validation" - OWASP Cheat Sheet: Input Validation (https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
7.  "Session Management" - OWASP Cheat Sheet: Session Management (https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)


