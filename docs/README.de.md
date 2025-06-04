# Abgabe Frontend-Entwicklungsprojekt mit JavaScript

**KeepCoding Projekte - Web 18**  
Die vollständige Liste der Repositories und Beschreibungen findest du in [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Wähle deine Sprache

- 🇺🇸 [Englisch](README.md)
- 🇪🇸 [Spanisch](README.es.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Projektziel

Zur Übung und Demonstration des im Online-Unterricht erworbenen Wissens besteht dieses Projekt darin, eine Webanwendung ähnlich wie Wallapop zu entwickeln. Die Verwendung von JavaScript-Bibliotheken oder -Frameworks ist nicht erlaubt, allerdings dürfen externe CSS-Utilities verwendet werden.  
Zusätzlich muss eine `db.json`-Datei für das Backend bereitgestellt werden, die die notwendigen Beispieldaten für die Korrektur enthält.

<!-- ------------------------------------------------------------------------------------------- -->

## Erlerntes und Angewandtes Wissen

- Grundlegende Funktionsweise eines Browsers.
- Browser Object Model (BOM):
  - Navigation
  - Location
  - Window
- Document Object Model (DOM), seine Knoten und Elemente.
- Auswahl von DOM-Knoten.
- Erstellen und Entfernen von DOM-Elementen.
- Manipulation von Attributen, Stilen und CSS-Klassen im DOM.
- Umgang mit DOM-Events.
- Standardverhalten von HTML-Komponenten.
- Event-Bubbling und Capturing.
- Promises und ihre Zustände: _pending_, _fulfilled_, _rejected_.
- HTTP-Anfragen mit `fetch`.
- `localStorage` und `sessionStorage`.
- Lokale Datenspeicherung in HTML5: Cookies, Storage und IndexedDB.

<!-- ------------------------------------------------------------------------------------------- -->

## Projektdetails

### 1. Post-Übersicht

- Jeder Post soll ein Bild (falls vorhanden), Name, Beschreibung, Preis und ob es sich um Kauf oder Verkauf handelt anzeigen.
- Die Posts müssen über einen _Endpoint_ geladen werden.
- Die Übersichtsseite muss alle UI-Zustände handhaben:
  - **Leer** (keine Posts vorhanden).
  - **Fehler** (beim Laden der Posts).
  - **Ladevorgang** (während die Posts geladen werden).
  - **Erfolg** (Posts erfolgreich geladen).
- Beim Klicken auf einen Post soll die Detailseite geöffnet werden.
- Wenn der Benutzer eingeloggt ist, soll ein Button zum Erstellen neuer Posts angezeigt werden.

### 2. Post-Detailansicht

- Zeigt Bild (falls vorhanden), Name, Beschreibung, Preis und ob Kauf oder Verkauf.
- Muss alle UI-Zustände behandeln:
  - **Leer** (Post existiert nicht).
  - **Fehler** (beim Laden der Daten).
  - **Ladevorgang** (während Daten geladen werden).
  - **Erfolg** (Daten erfolgreich geladen).
- Wenn der Benutzer angemeldet ist und der Besitzer des Posts ist, soll ein Lösch-Button mit Bestätigung angezeigt werden.

### 3. Erstellung eines Posts

- Muss ein Formular mit folgenden Feldern enthalten:
  - **Foto** (optional).
  - **Name** (Pflichtfeld).
  - **Beschreibung** (Pflichtfeld).
  - **Preis** (Pflichtfeld).
  - **Kauf/Verkauf** (Pflichtfeld).
- Beim Absenden des Formulars wird ein Request an das Backend gesendet, um den Post zu speichern.
- Die UI-Zustände müssen behandelt werden:
  - **Fehler** (beim Speichern).
  - **Ladevorgang** (beim Speichern).
  - **Erfolg** (Post erfolgreich gespeichert).
- Nur eingeloggte Benutzer haben Zugriff auf diese Seite. Andernfalls erfolgt eine Weiterleitung zur Übersicht mit Hinweis.

### 4. Login

- Zeigt ein Formular mit Benutzername und Passwort.
- Beim Absenden wird der Benutzer über das Backend authentifiziert und ein JWT-Token empfangen.
- UI-Zustände: Laden, Fehler, Erfolg.

### 5. Registrierung

- Ähnlich wie die Login-Seite.
- Registriert den Benutzer im Backend.
- UI-Zustände: Laden, Fehler, Erfolg.

### 6. Optionale Ziele

- Paginierung der Posts in der Übersicht (API liefert standardmäßig nur 10).
- Post-Suchfunktion.
- Bearbeitung von Posts (nur wenn Benutzer Eigentümer ist).
- Filterung nach statischen _Tags_.
- Dynamische _Tags_ ermöglichen.

<!-- ------------------------------------------------------------------------------------------- -->

## Verwendete Technologien

### Sprachen

- **HTML**: Strukturierung des Inhalts und Aufbau der Seitenstruktur.
- **CSS**: Design und visuelle Gestaltung der Seite für ein ansprechendes Nutzererlebnis.
- **JavaScript**: Interaktivität und dynamische Funktionalitäten wie Formularvalidierung, Animationen und Event-Handling.

### Abhängigkeiten

Keine

<!-- ------------------------------------------------------------------------------------------- -->

## Installations- und Nutzungshinweise

### Softwareanforderungen

- **[Git](https://git-scm.com/downloads)** (getestet mit Version **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (getestet mit Version **1.99.0**)
- **[Sparrest (REST-API)](https://github.com/kasappeal/sparrest.js)** (entwickelt von **Alberto Casero** – **KeepCoding**)
- **Live Server** (VS Code addon, _optional_)

### Repository-Klonen

- **API REST Sparrest**

```bash
git clone https://github.com/kasappeal/sparrest.js.git
```

- **Projekt**

```bash
git clone https://github.com/pablo-sch/keepcoding-05-frontend-javascript.git
```

- **Demo**

![Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

### Schritte zur Nutzung des Projekts

Der Server muss gestartet werden, um die REST-API zu aktivieren und mit der simulierten Datenbank zu interagieren.

1. Lade das Projekt als ZIP-Datei von GitHub herunter oder klone es mit SourceTree.
2. Füge es in Visual Studio Code zu deinem Workspace hinzu.
3. Nachdem du Sparrest heruntergeladen hast, installiere die Abhängigkeiten. Ersetze dann die generierte `db.json` durch die Datei aus diesem Projekt.

Zum Starten der Datenbank führe folgenden Befehl im Sparrest-Verzeichnis aus:

```bash
npm start
```

### Hinweise

- Sobald das Repository geklont wurde, kannst du die `.html`-Dateien mit **Live Server** öffnen, um sie im Browser vorzuschauen.

- Die Datei `db.json` enthält drei Benutzerkonten und 14 Posts. Hier sind die Zugangsdaten, um sich anzumelden und vorhandene Posts zu bearbeiten:

- [pablsch.it@gmail.com](mailto:pablsch.it@gmail.com) / Passwort: 123456
- [Pedro.it@gmail.com](mailto:Pedro.it@gmail.com) / Passwort: 123456
- [jose.JJ@gmail.com](mailto:jose.JJ@gmail.com) / Passwort: 123456

<!-- ------------------------------------------------------------------------------------------- -->

## Projektvorschau

### Startseite

![Home](../etc/preview_images/home.png)

### Startseite Mobil

![Home Mobile](../etc/preview_images/home_mobile.png)

### Post erstellen

![Create Post](../etc/preview_images/create_post.png)

### Post-Detail

![Post Detail](../etc/preview_images/post_detail.png)

### Post bearbeiten

![Edit Post](../etc/preview_images/post_edit.png)

<!-- ------------------------------------------------------------------------------------------- -->

## Beiträge und Lizenz

Dieses Projekt enthält keine externen Beiträge und steht unter keiner Lizenz.
