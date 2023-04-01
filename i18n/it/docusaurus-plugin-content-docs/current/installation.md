---
layout: home
nav_order: 3
permalink: /installa
---

# Installazione
## Cosa ti serve:
- Per ora :
  - Artillery Sidewinder X1 o X2 con sensore di livellamento del piatto
  - Artilllery Genius o Genius Pro con sensore di livellamento del piatto
- SD-Card
  - Formattala a FAT32 (formato di Windows)
  - Se la SD-Card funzionerà, dovresti essere in grado di leggerne il contenuto (se non è vuota) direttamente dalla stampante. Per poter leggere la SD-Card devi andare neldisplay della stampante e selezionare, dall'apposito menù, la voce Micro SD, se vedrai dei file,significherà che il formato è quello giusto.
    - Altrimenti dovrai procedere a riformattare la SD-Card!
- Computer

## Preparativi
- Scarica il giusto file da qui: [Downloads]({% link pages/download.html %}#aux-links)
  - Per farlo utilizza uno o più filtri nella parte superiore della tabella
  - Se non conosci quale sia il tuo Display (TFT) scarica anche il file DisplayCombo.zip
- Dopo aver scaricato il file zip, scompattalo
- In seguito, per cambiare il firmware Marlin ti servirà questo software  [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software)
---
## Tft
### Se conosci l'esatto modello del tuo TFT dvi scegliere la cartella esatta che conterrà:
- Vecchio TFT
  - Cartella TFT28
  - config.ini
  - mkstft28.bin
- Se invece possiedi il nuovo TFT
  - Cartella:mks_font
  - Cartella: mks_pic
  - Cartella:TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin
- Ora copia i files e le cartelle, come da schema sopra, nella SD-Card formattata FAT3FAT32
- Inserisci la SD-Card nella stampante 3D
- Se la stampante è accesa
  - premi il tastino reset che si trova a fianco del Display in basso a destra
- s la stampante è spenta
  - accendila e la procedura inizierà
- Vedrai una scritta "Updating..." sul Display
  - Se il Display si sta aggiornando leggerai "Updating..." sul Display

### Se non conosci quale sia il modello del tuo TFT

- Scarica il DisplayCpmbo.zip e la variante a seconda della stampante (es. Sidewinder o GeniusPro)
- Scompatta entrambi i files
- Nel file DisplayCpmbi ci dovrebbero essere 3 cartelle numerate
- A cominciare dalla prima metti:
  - Cartella: TFT28
  - config.ini
  - mkstft28.bin
- Una delle varianti conterrà i seguenti flles:
  - Cartella: mks_font
  - Cartella: mks_pic
  - Cartella: TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin
- nella SD-Card che avevi formattato FAT32
- Se il Display si sta aggiornando leggerai "Updating..." sul Display
  - Così saprai quale modello di TFT ha la tua stampante, annotalo per ricordartelo!!!
- Se il Display invece, parte con il logo ed il menù, devi procedere a scaricare sulla S-Card la seconda cartella
- S dopo aver testato tutte e 4 le possibilità, non sei riuscito ad aggiornare il firmware, chiedi aiuto qui [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)

---
## Marlin
- Installa il programma STM32CubeProgrammer ed aprilo
- Connetti la stampante 3d al PC
- Ora devi mandare un GCode M997 ala stampante
- La maniera più facile e veloce per inviare il comando è usare o Pronterface, Octoprint o Repetier Host
  - Vai su "Menu" -> "Terminal"
  - Inserisci il codice "M997"
- Cambia il programma sul tuo PC
- usa STM32CubeProgrammer e dal menù a tendina scegi "USB" (immagine 1)
- Quindi clicca il bottone di refresh (immagine 2)
- Ciicca su "Connect" (immagne 3)
- Ancora clicca sul bottone "Download" (immagine 4)
- Controlla che la spunta "Verify programming" sia attiva (immagine 5)
- Ora seleziona dalla finestra apposita il file di Marlin da caricare, nella cartella Marlin che si trova nel file zip omonimo (immagine 6)
- Premi "Start Programming" (image 7)
- Attendi fino a quando compariranno due finestre (immagine 8)
- Infine sconnetti la stampante e spegnila
- Se qualcosa va storto cerca aiuto qua: [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)

## Congratulazioni ce l'hai fatta! ;)

## Immagini

![printer01](pathname://assets/installation/STM32/printer01.png) ![printer02](pathname://assets/installation/STM32/printer02.png) ![printer03](pathname://assets/installation/STM32/printer03.png) ![printer04](pathname://assets/installation/STM32/printer04.png) ![printer05](pathname://assets/installation/STM32/printer05.png) ![printer06](pathname://assets/installation/STM32/printer06.png) ![printer07](pathname://assets/installation/STM32/printer07.png) ![printer08](pathname://assets/installation/STM32/printer08.png)
