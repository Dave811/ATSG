---
layout: home
sidebar_position: 4
---

# Post installation

In this page, you find some little tips and tricks that are needed to do after a fresh Marlin installation (every version).

---

First, you need to know that the compiled Marlin have standard settings for the printer stored in the code base. These settings are mostly correct, for example the bed measurement or the BL-Touch offset to the nozzle. Other settings needed to be calibrated. 

After you have installed the new Marlin version, you need to make a Factory restore with the command `M502`. This command erase all setting stored in EEPROM (The EEPROM stores the settings applied from the user and will be read when a print is happening) and load the settings which are stored in the compiled marlin version.

This command is needed, because sometimes when a new feature is implemented or changed, it is necessary to add the settings stored in the compiled Marlin version to the EEPROM.

Once you have reset the values, you will need to save the changes to the EEPROM. That is done with the `M500` command. **REMEMBER IT!!!** It will become useful when you change other setting later on.

## PID Autotune
This is recommended, so that the temperature of the bed and the nozzle is stable
- This can be done through the display:
- `Menu` --> `Settings` --> `Machine` --> `Tuning` --> `Pid`
- Make sure Nozzle is selected in the bottom left corner
- Adjust the temperature to your printing temperature!!
- click `start` --> `read it` --> click `ok`
- wait
- click `ok` to store the settings to EEPROM

## Heat the bed and nozzle
You need to heat the bed and nozzle for the calibration, because while you print the bed and the nozzle is also hot

This needed to be done, so that you represent the same edge parameter.
- `Menu` --> `Heat/Fan` --> `Preheat` --> make sure that `both` is selected --> `Select your desired profile`
- After you finished the calibration:
- `Menu` --> `Heat/Fan` --> `Cool down`

## Probe offset
The first thing to do is the probe offset!
This ensures, that the nozzle to the BL-TOUCH height offset is nearly correct
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