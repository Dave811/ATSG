---
layout: home
sidebar_position: 4
---

# Posterior a la instalación

En esta página, encontrará algunos pequeños consejos y trucos necesarios después de una instalación nueva de Marlin (todas las versiones).

---

Primero, debe saber que el Marlin compilado tiene una configuración estándar para la impresora almacenada en el código base. Estos ajustes son en su mayoría correctos, por ejemplo, la medida del lecho o el desplazamiento del BL-Touch con respecto a la boquilla. Era necesario calibrar otros ajustes.

Después de haber instalado la nueva versión de Marlin, debe realizar una restauración de fábrica con el comando `M502`. Este comando borra todas las configuraciones almacenadas en EEPROM (La EEPROM almacena las configuraciones aplicadas por el usuario y se leerán cuando se realice una impresión) y cargue las configuraciones que están almacenadas en la versión compilada de Marlin.

Este comando es necesario porque, a veces, cuando se implementa o cambia una nueva característica, es necesario agregar la configuración almacenada en la versión compilada de Marlin a la EEPROM.

Una vez que haya restablecido los valores, deberá guardar los cambios en la EEPROM. Eso se hace con el comando `M500`. **¡¡RECUERDALO!! De** Será útil cuando cambie otra configuración más adelante.

## PID Autotune
Esto se recomienda para que la temperatura de la cama y la boquilla sea estable
- Esto se puede hacer a través de la pantalla:
- `Menu` --> `Settings` --> `Machine` --> `Tuning` --> `Pid`
- Asegúrese de que boquilla esté seleccionada en la esquina inferior izquierda
- ¡Ajusta la temperatura a tu temperatura de impresión!!
- click `start` --> ` léelo ` --> click `ok`
- espera
- click `ok` para almacenar la configuración en EEPROM

## Calentar la cama y la boquilla
Debe calentar la cama y la boquilla para la calibración, porque mientras imprime, la cama y la boquilla también están calientes

Esto debía hacerse, de modo que represente el mismo parámetro de borde.
- `Menu` --> `Heat/Fan` --> `Preheat` --> asegura que `ambos` --> es seleccionado ` seleccione su perfil deseado `
- Después de terminar la calibración:
- `Menu` --> `Heat/Fan` --> `Cool down`

## Probe offset (Compensación de sonda)
¡Lo primero que debe hacer es el desplazamiento de la sonda! Esto asegura que la desviación de la altura de la boquilla al BL-TOUCH sea casi correcta
- coloque un trozo de papel debajo de la boquilla **no el BL-TOUCH**
- `Menu` --> `Movement` --> `Bed level` --> `P offset` --> `botón de la esquina inferior izquierda`
- con el botón `up` y `down` mueva la boquilla hacia abajo o hacia arriba hasta que la hoja de papel pueda deslizarse con muy poca fricción
- haz clic en `next/code> hasta que veas <code>save` y haz clic en `save` y luego `ok`

## Bed Screws (nivelación manual)
Después de eso, debe asegurarse de que todas las esquinas de su cama estén aproximadamente a la misma altura que la boquilla.
- Esto se puede hacer a través de la pantalla:
- `Menu` --> `Movement` --> `Leveling`
- Pase por cada punto y deslice un papel debajo de la boquilla hasta que todas las esquinas se sientan iguales
- Cuando no sienta lo mismo, ajuste el Tornillo de la esquina

## Auto Bed Leveling (Nivelación automática de la cama)
¡Después de eso, debe hacer una 'Nivelación automática de la cama'!!
- Esto se puede hacer a través de la pantalla:
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