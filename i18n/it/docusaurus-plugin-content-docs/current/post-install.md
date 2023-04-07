---
layout: principale
sidebar_position: 4
---

# Post installazione

In questa pagina alcuni piccoli consigli post installazione del Marlin (qualsiasi versione).

---

Innanzitutto, devi sapere che il Marlin compilato ha impostazioni standard per la stampante memorizzate nel codice. Queste impostazioni sono per lo più corrette, ad esempio la misura del letto o l'offset del BL-Touch rispetto all'ugello. Altri settaggi necessitano di calibrazione.

Dopo aver installato la nuova versione del Marlin, occorre fare un "Factory Restore" con il comando `M502`. Questo commando cancella i settaggi salvati in EEPROM (l'EEPROM registra i valori impostati dall'utente che poi userà quando andremo a stampare) e carica i settaggi che sono stati impostati durante la confgurazione della nuova versione del Marlin.

Questo commando è necessario in quanto, qualche volta, quando vengono implementate o cambiate nuove funzionalità, risulta necessario aggiungere i nuovi settaggi della nuova versione del Marlin nella EEPROM.

Una volta resettato i valori, t servirà salvare i cambiamenti nella EEPROM. Questo viene fatto attraverso il comando `M500`. **RICORDATELO!!!** ti ritirerà utile quando effettuerai altri cambiamenti in seguito.

## PID Autotune
Questa procedura è raccomandata, così da rendere maggiormente stabili le temperature dell'ugello e del piatto
- Questa si effettua dal display
- `Menu` --> `Settings` --> `Machine` --> `Tuning` --> `Pid`
- Assicurati ce sia selezionato l'ugello nel angolo in basso a sinistra
- Imposta come temperature quelle che userai in stampa!!
- premi `start` --> `leggile` --> e premi `ok`
- attendi
- premi `ok` per salvate nlla EEPROM

## Scalda il piatto e l'ugello
Riscaldare il piatto e l'ugello è necessario in quanto durante le stampe sia il letto che l'ugello saranno caldi

Questo è necessario farlo con gli stessi parametri che userai maggiormente in stampa.
- `Menu` --> `Heat/Fan` --> `Preheat` --> assicuratiassicurati che `entramb` siano selezionti --> `Scegli il tuo profilo di stampa`
- Dopo aver finito la całibrazione:
- `Menu` --> `Heat/Fan` --> `Cool down`

## Probe offset (scostamento del sensore)
Per prima cosa si deve effettuare il probe offset, cioè alzare un po' l'ugello dal piatto! Questo ci assicura appunto che l'ugello non sia ne troppo schiacciato ne troppo dstante
- posiziona un foglio di carta sotto l'ugello **non il BL-TOUCH**
- `Menu` --> `Movement` --> `Bed level` --> `P offset` --> `bottone inferiore sinisto `
- col buttone `up` e `down` muovi s e giù l'ugello fino a che non sentirai una leggera frizione sul foglio di carta
- premi `next` ffin che non leggi `save` premi `save` e `ok`

## Livellamento manuale
Una volta fatto quanto sopra, servirà eseguire il livellamento del piatto, ovvero verificare che i 4 angoli del piatto siano alla stessa distanza dall'ugello.
- Anche questa procedura può essere eseguita dal display:
- `Menu` --> `Movement` --> `Leveling`
- Eseguila per tutti i punti con il solito foglio di carta verificando che gli attriti nei 4 punti siano il più possibile uguali
- Se senti differenze regola la vite sotto l'angolo in esame, esegui la procedura un paio di volte per una maggiore accuratezza

## Auto Bed Leveling
Terminata la procedura precedente, lancia l'Auto Bed Leveling!!
- Ancora una volta attraverso il display:
- `Menu` --> `Movement` --> `Bed level` --> `ABL`
- Premi `start`
- Termanato il ciclo di misurazione `save`

## Il primo layer è IMPORTANTE
Questo è importante affinché l'ugello non graffi il piatto!!!
- Vsita il sito https://teachingtechyt.github.io/calibration.html#firstlayer
- Leggilo bene e modifica i settaggi nella pagina, scarica il file col GCODE e mettilo in una chiavetta USB
- Comincia a stampare
- premi `baby step` --> sistemali gradualmente da `0.01mm` fino a `1mm`
- Ora sistema coi baby step mentre sta lavorando!!!
- Può accadere che l'ugello strisci la superficie del piatto, alzalo con o baby step!!!
  - premi `up` se senti grattare
- Se la stampa è avvenuta correttamente lo saprai confrontando la stampa con altre come descritto nel sito summenzionato
- cambia il valore `1mm` con valori minori per avere aggiustamenti più precisi
- Nella parte inferiore del sito troverai immagini di come deve apparire il primo layer
- Sstema i baby step ffino a xhe non risulterà ` migliore `
- in fine premi `save` --> `ok` per salvare i baby step nella EEPROM


Ben fatto! Ora puoi cominciare a stampare o, se lo ritieni necessario sistemarla ancora meglio

## Buone stampe!