# Frontend-Entwicklungsprojekt mit JavaScript - Abgabe

## Wähle deine Sprache

- 🇪🇸 [Spanisch](README.es.md)
- 🇺🇸 [Englisch](README.md)

## Erlernte Kenntnisse

- Grundlegende Funktionsweise eines Browsers.
- Browser Object Model (BOM):
  - Navigation
  - Location
  - Window
- Document Object Model (DOM), seine Knoten und Elemente.
- Knoten auswählen.
- Erstellen und Entfernen von DOM-Elementen.
- Manipulation von DOM-Attributen sowie deren Stilen und CSS-Klassen.
- DOM-Ereignisbehandlung.
- Standardverhalten in HTML-Komponenten.
- Event Bubbling & Capturing.
- Promises und deren Zustände: *pending*, *fulfilled* und *rejected*.
- HTTP-Anfragen mit `fetch`.
- `localStorage` und `sessionStorage`.
- Lokale Datenspeicherung in HTML5: Cookies, Storage und IndexedDB.

## Projektbeschreibung

Um das in den virtuellen Kursen erlernte Wissen zu üben und zu demonstrieren, besteht dieses Projekt darin, eine Webanwendung zu entwickeln, die Wallapop ähnlich ist. Die Verwendung von JavaScript-Bibliotheken oder -Frameworks ist nicht gestattet, externe CSS-Utilities können jedoch verwendet werden.  
Zusätzlich muss eine `db.json`-Datei für das Backend mit den Beispiel-Daten bereitgestellt werden, die für die Korrektur der Aufgabe erforderlich sind.

### 1. Anzeigenliste

- Jede Anzeige sollte ihr Bild (falls vorhanden), den Namen, die Beschreibung, den Preis und die Angabe, ob es sich um einen Kauf oder Verkauf handelt, anzeigen.  
- Die Anzeigen müssen über ein Endpoint abgerufen werden.  
- Der Listenscreen muss alle Zustände der Benutzeroberfläche verwalten:

  - **Leer** (keine Anzeigen).
  - **Fehler** (beim Laden der Anzeigen).
  - **Laden** (während die Anzeigen geladen werden).
  - **Erfolg** (wenn die Anzeigen erfolgreich abgerufen wurden).

- Durch Klicken auf eine Anzeige sollte der Benutzer zum Detailbildschirm dieser Anzeige weitergeleitet werden.  
- Wenn der Benutzer angemeldet ist, sollte eine Schaltfläche angezeigt werden, um zum Bildschirm zur Erstellung von Anzeigen zu gelangen.

### 2. Anzeigendetail

- Es sollte das Bild (falls vorhanden), den Namen, die Beschreibung, den Preis und die Angabe, ob es sich um einen Kauf oder Verkauf handelt, anzeigen.  
- Es sollte alle Zustände der Benutzeroberfläche verwalten:

  - **Leer** (die Anzeige existiert nicht).
  - **Fehler** (beim Laden der Anzeigedaten).
  - **Laden** (während die Daten geladen werden).
  - **Erfolg** (wenn die Daten erfolgreich abgerufen wurden).

- Wenn der Benutzer authentifiziert ist und die Anzeige ihm gehört, sollte eine Schaltfläche zum Löschen der Anzeige angezeigt werden (mit Bestätigung).

### 3. Erstellung einer Anzeige

- Es sollte ein Formular mit den folgenden Feldern enthalten:
  - **Foto** (optional).
  - **Name** (erforderlich).
  - **Beschreibung** (erforderlich).
  - **Preis** (erforderlich).
  - **Kauf/Verkauf** (erforderlich).

- Beim Absenden des Formulars sollte eine Anfrage an das Backend gesendet werden, um die Anzeige zu speichern.  
- Die Benutzeroberfläche muss folgende Zustände verwalten:

  - **Fehler** (beim Speichern der Anzeige).
  - **Laden** (während die Anzeige gespeichert wird).
  - **Erfolg** (wenn die Anzeige erfolgreich gespeichert wurde).

- Dieser Bildschirm kann nur aufgerufen werden, wenn der Benutzer angemeldet ist. Andernfalls wird der Benutzer zum Listenbildschirm weitergeleitet und erhält eine Nachricht mit dem Grund.

### 4. Login

- Es sollte ein Formular mit den Feldern Benutzername und Passwort angezeigt werden.  
- Nach dem Absenden des Formulars sollte der Benutzer gegen das Backend authentifiziert werden, und ein JWT-Token sollte abgerufen werden.  
- Die Zustände: Laden, Fehler und Erfolg müssen verwaltet werden.

### 5. Registrierung

- Ähnlich zum Login-Bildschirm.  
- Der Benutzer sollte im Backend registriert werden.  
- Die Zustände: Laden, Fehler und Erfolg müssen verwaltet werden.

## Optional

- Pagination der Anzeigen in der Liste (die API gibt standardmäßig nur 10 zurück).
- Suchfunktion für Anzeigen.
- Bearbeitung von Anzeigen (nur wenn der Benutzer der Eigentümer ist).
- Filterung nach Tags (Statische Tags).
- Dynamische Tags ermöglichen.

## REST API für das Projekt

Um eine Datenbank zu emulieren, wird **sparrest.js** verwendet, eine REST API, die von Dozent Alberto Casero (KeepCoding) erstellt wurde und auf `json-server` basiert.

### Repository klonen

```bash
git clone https://github.com/kasappeal/sparrest.js.git
```

Dies startet den Server und aktiviert die REST API, sodass Sie mit der simulierten Datenbank interagieren können.

## Verwendete Technologien

- **HTML**: Zur Strukturierung des Inhalts und zum Erstellen des Seitenlayouts.
- **CSS**: Für das Design und die visuelle Gestaltung der Seite, um eine attraktive und konsistente Benutzererfahrung zu gewährleisten.

## Installations- und Nutzungshinweise

### Softwareanforderungen

- **Visual Studio** (Getestet mit Version 1.99.0)
- **Live Server** (Visual Studio Addon, optional)

### Beschreibung der Programme

- **Visual Studio**: Integrierte Entwicklungsumgebung (IDE), die benötigt wird, um das Projekt auszuführen. Stellen Sie sicher, dass Sie Version 1.99.0 verwenden, um Kompatibilitätsprobleme zu vermeiden.
- **Live Server**: Visual Studio-Erweiterung, die es ermöglicht, HTML-Dateien lokal in einem Browser anzuzeigen und Änderungen in Echtzeit anzuzeigen.

### Schritte zur Verwendung dieses Projekts

1. Laden Sie die komprimierte Datei des Projekts von GitHub auf Ihren Computer herunter oder klonen Sie sie über SourceTree.

2. Sobald das Projekt heruntergeladen oder geklont wurde, fügen Sie es zu Ihrem Arbeitsbereich in Visual Studio Code hinzu.

3. Nachdem Sie Sparrest heruntergeladen haben, aktualisieren Sie die Abhängigkeiten. Um die getestete Datenbank in dieses Projekt zu integrieren, kopieren Sie die `db.json`-Datei aus diesem Projekt und ersetzen Sie die Datei, die von Sparrest nach der Initialisierung generiert wird.

Um die Datenbank zu starten, führen Sie einfach den folgenden Befehl im Sparrest-Verzeichnis aus:

```bash
npm start
```

### Hinweise

- Die `db.json`-Datei enthält drei Konten und 14 Beiträge. Dies sind die Anmeldeinformationen für jedes Konto, um sich im Projekt anzumelden und die bereits erstellten Beiträge zu bearbeiten:

- [pablsch.it@gmail.com](mailto:pablsch.it@gmail.com) / pwd: 123456
- [Pedro.it@gmail.com](mailto:Pedro.it@gmail.com) / pwd: 123456
- [jose.JJ@gmail.com](mailto:jose.JJ@gmail.com) / pwd: 123456

## Keine Beiträge oder Lizenzen

Dieses Projekt hat derzeit keine externen Beiträge oder eine Lizenz.

## Projektvorschau

...
