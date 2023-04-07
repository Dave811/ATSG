---
layout: haus
sidebar_position: 4
---

# Nach der Installation

Auf dieser Seite finden Sie einige kleine Tipps und Tricks, die nach einer frischen Marlin-Installation (jeder Version) zu beachten sind.

---

Zunächst müssen Sie wissen, dass die kompilierten Marlin-Standardeinstellungen für den Drucker in der Codebasis gespeichert sind. Diese Einstellungen sind meistens korrekt, zum Beispiel die Bettmessung oder der BL-Touch Offset zur Düse. Andere Einstellungen mussten kalibriert werden.

Nachdem Sie die neue Marlin-Version installiert haben, müssen Sie mit dem Befehl `M502` eine Werkswiederherstellung durchführen. Dieser Befehl löscht alle im EEPROM gespeicherten Einstellungen (das EEPROM speichert die vom Benutzer vorgenommenen Einstellungen und wird beim Drucken gelesen) und lädt die Einstellungen, die in der kompilierten Marlin-Version gespeichert sind.

Dieser Befehl wird benötigt, da es manchmal erforderlich ist, wenn eine neue Funktion implementiert oder geändert wird, die in der kompilierten Marlin-Version gespeicherten Einstellungen zum EEPROM hinzuzufügen.

Nachdem Sie die Werte zurückgesetzt haben, müssen Sie die Änderungen im EEPROM speichern. Dies geschieht mit dem Befehl `M500`. **MERKEN SIE SICH!!!** Es wird nützlich sein, wenn Sie später andere Einstellungen ändern.

## PID Autotune
Dies wird empfohlen, damit die Temperatur des Betts und der Düse stabil ist
- Dies kann über das Display erfolgen:
- `Menü` --> `Einstellungen` --> `Maschine` --> `Tuning` --> `Pid`
- Stellen Sie sicher, dass Düse in der unteren linken Ecke ausgewählt ist
- Stellen Sie die Temperatur auf Ihre Drucktemperatur ein!!
- klicken Sie auf `Start` --> `lesen` --> klicken Sie auf `ok`
- warten
- klicken Sie auf `ok`, um die Einstellungen im EEPROM zu speichern

## Erhitzen Sie das Bett und die Düse
Sie müssen das Bett und die Düse für die Kalibrierung erwärmen, da beim Drucken das Bett und die Düse ebenfalls heiß sind

Dies musste getan werden, damit Sie denselben Kantenparameter darstellen.
- `Menü` --> `HeatłFan` --> `Preheat` --> Stellen Sie sicher, dass `beide` ausgewählt ist --> `Wählen Sie Ihr gewünschtes Profil aus`
- Nachdem Sie die Kalibrierung abgeschlossen haben:
- `Menu` --> `Heat/Fan` --> `Cool down`

## Probe offset (Sonden-Offset)
Das erste, was zu tun ist, ist der Sondenoffset! Dadurch wird sichergestellt, dass der Höhenversatz der Düse zum BL-TOUCH nahezu korrekt ist
- legen Sie ein Blatt Papier unter die Düse **nicht den BL-TOUCH**
- `Menu` --> `Movement` --> `Bed level` --> `P offset` --> `Schaltfläche in der linken unteren Ecke`
- mit den tasten `up` und `down` bewegen sie die düse nach unten bzw
- klicken Sie auf `next`, bis Sie `save` sehen, und klicken Sie auf `save` und dann auf `Ok`

## Bettschrauben (manuelle Nivellierung)
Danach müssen Sie sicherstellen, dass alle Ecken Ihres Bettes ungefähr die gleiche Höhe zur Düse haben.
- Dies kann über das Display erfolgen:
- `Menu` --> `Movement` --> `Leveling`
- Gehen Sie durch jeden Punkt und schieben Sie ein Papier unter die Düse, bis sich alle Ecken gleich anfühlen
- Wenn es sich nicht gleich anfühlt, stellen Sie die Schraube an der Ecke ein

## Auto Bed Leveling
Danach müssen Sie eine „Automatische Bettnivellierung“ durchführen!!
- Dies kann über das Display erfolgen:
- `Menu` --> `Movement` --> `Bed level` --> `ABL`
- Klicken `start`
- Danach müssen Sie auf `save` klicken

## Erste Schicht WICHTIG
Dies ist wichtig, damit die Düse das Bett nicht zerkratzt!!!
- Gehen Sie zu dieser Website https://teachingtechyt.github.io/calibration.html#firstlayer
- Lesen Sie es durch und bearbeiten Sie die Einstellungen auf der Seite, laden Sie den Gcode herunter und legen Sie ihn auf den USB
- Starten Sie den Druck
- klicken `babystep` --> verstelle die `0.01mm` Zu `1mm`
- Jetzt müssen Sie die Baby step während des Druckens anpassen!!!
- Es kann sein, dass die Düse die Oberfläche zerkratzt, dann muss die Düse mit den Babytritten angehoben werden!!!
  - klicken Sie auf `up`, wenn es kratzt
- Wenn der Drucker druckt, müssen Sie sich den gedruckten Teil ansehen, wie auf der anderen Website beschrieben
- stellen Sie den Wert `1mm` auf einen kleineren Wert ein, um die Baby step in kleinen Intervallen auszuführen
- Unten auf der Website finden Sie Beispielbilder, wie die erste Schicht aussehen sollte
- Passen Sie die kleinen Schritte an, damit es `genau richtig` aussieht
- schließlich klicken: `save` --> `ok` um die kleinen Schritte im EEPROM zu speichern


Gut gemacht! Jetzt können Sie mit dem Drucken beginnen oder den Drucker noch weiter optimieren

## Fröhliche Drucke!