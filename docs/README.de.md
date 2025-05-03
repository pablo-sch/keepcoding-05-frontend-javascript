# Frontend-Entwicklungsprojekt mit JavaScript - Abgabe

## Wähle deine Sprache

- 🇪🇸 [Spanisch](README.es.md)
- 🇺🇸 [Englisch](README.md)

## Behandelte Themen

- Grundlegende Funktionsweise eines Browsers.
- Browser Object Model (BOM):
  - Navigation
  - Location
  - Window
- Document Object Model (DOM), seine Knoten und Elemente.
- Auswahl von Knoten.
- Erstellen und Entfernen von DOM-Elementen.
- Bearbeiten von DOM-Attributen sowie deren Styles und CSS-Klassen.
- Umgang mit DOM-Ereignissen.
- Standardverhalten von HTML-Komponenten.
- *Event Bubbling* und *Capturing*.
- Promises und ihre Zustände: *pending*, *fulfilled* und *rejected*.
- HTTP-Anfragen mit `fetch`.
- `localStorage` und `sessionStorage`.
- Lokale Datenspeicherung in HTML5: Cookies, Storage und IndexedDB.

## Projektbeschreibung

Ziel dieses Projekts ist es, das im virtuellen Unterricht erworbene Wissen zu üben und zu demonstrieren. Es soll eine Webanwendung entwickelt werden, die ähnlich wie Wallapop funktioniert. Die Verwendung von JavaScript-Bibliotheken oder -Frameworks ist nicht erlaubt, jedoch dürfen externe CSS-Utilities genutzt werden.  
Zusätzlich muss eine Datei `db.json` bereitgestellt werden, die Beispieldaten für die Korrektur enthält.

### 1. Beitrag-Übersicht

- Jeder Beitrag soll ein Bild (falls vorhanden), einen Namen, eine Beschreibung, einen Preis und die Angabe "Kauf" oder "Verkauf" anzeigen.  
- Die Beiträge sollen über einen API-Endpunkt abgerufen werden.  
- Die Benutzeroberfläche muss alle Zustände verwalten:

  - **Leer** (keine Beiträge vorhanden).
  - **Fehler** (beim Laden der Beiträge).
  - **Ladevorgang** (während des Ladens).
  - **Erfolg** (Beiträge wurden erfolgreich geladen).

- Beim Klicken auf einen Beitrag gelangt man zur Detailansicht.  
- Wenn der Benutzer angemeldet ist, soll ein Button zur Beitragserstellung angezeigt werden.

### 2. Beitrags-Details

- Es sollen Bild (falls vorhanden), Name, Beschreibung, Preis und Kauf/Verkauf angezeigt werden.  
- Die Benutzeroberfläche muss alle Zustände verwalten:

  - **Leer** (Beitrag existiert nicht).
  - **Fehler** (beim Laden der Daten).
  - **Ladevorgang** (während des Ladens).
  - **Erfolg** (Informationen wurden erfolgreich geladen).

- Ist der Benutzer authentifiziert und Eigentümer des Beitrags, soll ein Löschbutton mit Bestätigung angezeigt werden.

### 3. Beitrag erstellen

- Ein Formular mit folgenden Feldern muss vorhanden sein:
  - **Foto** (optional)
  - **Name** (Pflichtfeld)
  - **Beschreibung** (Pflichtfeld)
  - **Preis** (Pflichtfeld)
  - **Kauf/Verkauf** (Pflichtfeld)

- Beim Absenden soll der Beitrag über eine API-Anfrage im Backend gespeichert werden.  
- Die Benutzeroberfläche muss folgende Zustände behandeln:

  - **Fehler** (beim Speichern).
  - **Ladevorgang** (während des Speicherns).
  - **Erfolg** (Beitrag wurde erfolgreich gespeichert).

- Diese Seite ist nur für angemeldete Benutzer zugänglich. Andernfalls wird man zur Übersicht umgeleitet und informiert.

### 4. Login

- Es soll ein Formular mit Benutzername und Passwort angezeigt werden.  
- Beim Absenden soll der Benutzer über das Backend authentifiziert werden und ein JWT-Token erhalten.  
- Die Zustände „Laden“, „Fehler“ und „Erfolg“ müssen verwaltet werden.

### 5. Registrierung

- Ähnlich wie der Login-Bildschirm.  
- Der Benutzer soll über das Backend registriert werden.  
- Die Zustände „Laden“, „Fehler“ und „Erfolg“ müssen verwaltet werden.

## Optional

- Paginierung der Beiträge in der Übersicht (API liefert standardmäßig nur 10).
- Suchfunktion für Beiträge.
- Bearbeitung von Beiträgen (nur durch den Eigentümer).
- Filterung nach statischen Tags.
- Dynamische Tags implementieren.

## REST-API zur Projektunterstützung

Zur Simulation einer Datenbank wird **sparrest.js** verwendet — eine vom Dozenten Alberto Casero (KeepCoding) erstellte REST-API, basierend auf `json-server`.

### Repository klonen

```bash
git clone https://github.com/kasappeal/sparrest.js.git
```

Dies startet den Server und stellt die REST-API bereit, sodass du mit der simulierten Datenbank interagieren kannst.

## Verwendete Technologien

- **HTML**: Für die Strukturierung der Inhalte und des Seitenlayouts.
- **CSS**: Für das visuelle Design und die Benutzeroberfläche, um ein konsistentes und attraktives Nutzererlebnis zu bieten.

## Installations- und Nutzungshinweise

### Softwareanforderungen

- **Visual Studio Code** (getestet mit Version 1.99.0)
- **Live Server** (VS Code-Erweiterung, optional)

### Programmbeschreibung

- **Visual Studio Code**: Integrierte Entwicklungsumgebung (IDE) zur Projektausführung. Achte darauf, Version 1.99.0 zu verwenden, um Kompatibilitätsprobleme zu vermeiden.
- **Live Server**: Erweiterung für VS Code, die eine lokale HTML-Vorschau im Browser mit Live-Reload ermöglicht.

### Schritte zur Verwendung des Projekts

1. Lade die Projektdateien als ZIP von GitHub herunter oder klone das Repository mit SourceTree.

2. Öffne das Projekt anschließend in deinem Arbeitsbereich in Visual Studio Code.

3. Nach dem Herunterladen von Sparrest aktualisiere die Abhängigkeiten. Um die in diesem Projekt verwendete Datenbank zu nutzen, kopiere die Datei `db.json` aus dem Projektordner und ersetze die automatisch generierte Datei in Sparrest.

Starte die Datenbank mit folgendem Befehl im Sparrest-Verzeichnis:

```bash
npm start
```

### Hinweise

- Die Datei `db.json` enthält drei Benutzerkonten und 14 Beiträge. Folgende Zugangsdaten können verwendet werden, um sich anzumelden und bestehende Beiträge zu bearbeiten:

- [pablsch.it@gmail.com](mailto:pablsch.it@gmail.com) / Passwort: 123456  
- [Pedro.it@gmail.com](mailto:Pedro.it@gmail.com) / Passwort: 123456  
- [jose.JJ@gmail.com](mailto:jose.JJ@gmail.com) / Passwort: 123456

## Keine Beiträge oder Lizenzen

Dieses Projekt hat derzeit keine externen Beiträge oder eine Lizenz.

## Projektvorschau

...
