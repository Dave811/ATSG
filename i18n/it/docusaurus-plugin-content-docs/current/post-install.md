---
layout: home
sidebar_position: 4
---

# Post installazioe

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
Per prima cosa si deve effettuare il probe offset, cioè alzare un po' l'ugello dal piatto! This ensures, that the nozzle to the BL-TOUCH height offset is nearly correct
- place a piece of paper under the nozzle **not the BL-TOUCH**
- `Menu` --> `Movement` --> `Bed level` --> `P offset` --> `bottom left corner button`
- with the button `up` and `down` move the nozzle down or up until the piece of paper can be slide with very little friction
- click `next` until you see `save` and click `save` and then `ok`

## Bed Screws
After that, you need to make sure that all the corners of your bed are roughly the same height to the nozzle.
- This can be done through the display:
- `Menu` --> `Movement` --> `Leveling`
- Go through each point and slide a paper under the nozzle until all corners feel the same
- When it doesn't feel the same, adjust the Screw of the corner

## Auto Bed Leveling
After that, you need to do an 'Auto Bed Leveling'!!
- This can be done through the display:
- `Menu` --> `Movement` --> `Bed level` --> `ABL`
- Click `start`
- After it finish you need to click `save`

## First layer IMPORTANT
This is essential, so the nozzle don't scratch the bed!!!
- Go to this website https://teachingtechyt.github.io/calibration.html#firstlayer
- Read through it and edit the settings on the page, download the gcode and put it on the USB
- Start the print
- click `babystep` --> adjust the `0.01mm` to `1mm`
- Now you need to adjust the baby steps while it is printing!!!
- It can be, that the nozzle scratches the surface, then you need to lift the nozzle with the baby steps!!!
  - click `up` if it scratches
- If the printer prints, you need to look at the printed part as described on the other website
- adjust the `1mm` value to a smaller value to do the baby steps in small intervals
- On the bottom of the website you find example images how the first layer should look like
- Adjust the baby steps, so it looks `just right`
- finally click: `save` --> `ok` to save the baby steps to the EEPROM


Well done! Now you can start printing or tune the printer even more

## Happy prints!