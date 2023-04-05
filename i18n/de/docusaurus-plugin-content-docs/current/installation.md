---
layout: haus
sidebar_position: 3
---

# Installation
## Anforderungen
- Vorerst ein:
  - Artillery SidewinderX1/2 mit Bettniveausensor
  - Artillery Genius(Pro) mit Bettniveausensor
- SD-Karte
  - Fat32 formatiert
  - Die SD-Karte sollte funktionieren, wenn Sie den Inhalt der SD-Karte in Ihrem 3D-Drucker sehen können, also gehen Sie am besten zu (TODO) Drucken -> Wechseln Sie bei Bedarf von USB auf SD -> Öffnen Sie die SD-Karte -> Sie sollten Dateien sehen
    - Wenn nicht, müssen Sie die SD-Karte neu formatieren oder eine neue versuchen!
- Computer

## Vorbereiten
- Laden Sie die richtigen Dateien von herunter [Downloads](downloads.mdx)
  - Verwenden Sie dazu die Filter über der Tabelle
  - Wenn Sie nicht wissen, welches Display (TFT) Sie haben, laden Sie auch die DisplayCombo.zip herunter
- Nachdem Sie die Dateien heruntergeladen haben, entpacken Sie sie
- Um Marlin später zu flashen, benötigen Sie diese Software [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software)
---
## TFT
### Wenn Sie wissen, welche TFT-Variante Sie haben, wählen Sie den richtigen Ordner, der Folgendes enthält:
- Älteres TFT
  - Ordner:TFT28
  - config.ini
  - mkstft28.bin
- Wenn Sie das neueste TFT haben:
  - Ordner:mks_font
  - Ordner:mks_pic
  - Ordner:TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin
- Kopieren Sie dann diese Dateien und Ordner auf eine SD-Karte, die Fat32-formatiert ist
- Stecken Sie die SD-Karte in Ihren 3D-Drucker
- Wenn der Drucker online ist
  - Drücken Sie die Reset-Taste neben dem Display
- Wenn der Drucker offline ist
  - Drucker einschalten
- Auf dem Display sollte "Updating..." angezeigt werden
  - Wenn Ihre Anzeige die Aktualisierung beendet hat, sind Sie mit der Anzeige fertig (TODO)

### Wenn Sie nicht wissen, welche TFT-Variante Sie haben:

- Laden Sie die DisplayCombo.zip und die Variante herunter (ex. Sidewinder oder GeniusPro)
- Entpacken Sie beide Zip Dateien
- In Display Combo sollten Sie 3 Ordner sehen, die mit einer entsprechenden Nummer beginnen
- Beginnen Sie mit dem ersten und geben Sie den Inhalt ein:
  - Ordner:TFT28
  - config.ini
  - mkstft28.bin
- Eine Variante kann diese Dateien enthalten:
  - Ordner:mks_font
  - Ordner:mks_pic
  - Ordner:TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin
- auf einer mit Fat32 formatierten SD-Karte
- Wenn das Display aktualisiert wird und Sie „Updating...“ im Display sehen können
  - Dann weißt du welche TFT-Variante du hast und solltest sie dir notieren bzw. merken!!!
- Wenn das Display direkt in das Display-Menü startet, müssen Sie den gleichen Vorgang mit einem anderen Ordner versuchen
- Wenn Sie alle 4 Varianten getestet haben und es immer noch nicht funktioniert, wenden Sie sich an hier, um Hilfe zu erhalten [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)

---
## Marlin
- Installieren Sie die STM32CubeProgrammer-Software und öffnen Sie sie
- Verbinden Sie Ihren 3D-Drucker mit Ihrem PC
- Jetzt müssen Sie M997 an den Drucker senden
- Am einfachsten ist es, das Display zu verwenden, aber Sie können auch Pronterface oder Octoprint verwenden
  - Gehe zu: "Menu" --> "Terminal"
  - Eingeben: "M997"
- Wechseln Sie zu Ihrem PC
- In STM32CubeProgrammer aus dem Dropdown "USB"(image 1)
- Klicken Sie dann auf die Schaltfläche Aktualisieren (image 2)
- Klicken Sie dann auf Verbinden (image 3)
- Klicken Sie dann auf die Schaltfläche "Download". (image 4)
- Überprüfen Sie, ob das Kontrollkästchen Programmierung überprüfen aktiviert ist (image 5)
- Wählen Sie dann mit durchsuchen die Firmware im Marlin-Ordner (der extrahierte Ordner aus dem heruntergeladenen Zip)
- Dann zuschlagen "Start Programming" (image 7)
- Und warten Sie, bis Sie 2 Dialogfelder erhalten (image 8)
- Trennen Sie schließlich den Drucker und schalten Sie ihn aus!
- Wenn etwas schief gelaufen ist, melden Sie sich hier [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)

## Post installation
Go to the [post installation](post-install.md) page and continue there!
## Images

![printer01](pathname://assets/installation/STM32/printer01.png) ![printer02](pathname://assets/installation/STM32/printer02.png) ![printer03](pathname://assets/installation/STM32/printer03.png) ![printer04](pathname://assets/installation/STM32/printer04.png) ![printer05](pathname://assets/installation/STM32/printer05.png) ![printer06](pathname://assets/installation/STM32/printer06.png) ![printer07](pathname://assets/installation/STM32/printer07.png) ![printer08](pathname://assets/installation/STM32/printer08.png)
