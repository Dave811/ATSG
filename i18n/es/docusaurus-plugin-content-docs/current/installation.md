---
layout: home
sidebar_position: 3
---

# Installación
## Lo que necesita
- Ahora :
  - Una impresora Artillery  Sidewinder X1 o X2 con sensor de nivel de la cama
  - Una impresora Artillery Genius o Genius Pro con sensor de nivel para la cama
- Tarjeta Micro-SD
  - Formateado por FAT32
  - La tarjeta SD debería funcionar si puede ver el contenido de la tarjeta SD en su impresora 3D, por lo que la mejor opción es ir a (TODO) Imprimir -> cambiar de USB a SD si es necesario -> abrir la tarjeta SD -> deberías ver los archivos
    - si no es así, ¡necesita volver a formatear la tarjeta SD o probar una nueva!
- Computadora

## Preparar
- Descarga lo archivio corecto da   [Descargar](downloads.mdx)
  - Por hacerlo utiliza los filtros sobra la mesa
  - Si tu no sabe el modelo de tus Pantella (TFT), tu debe descargar el archivio DisplayCombo.zip
- Después de haber descargado abre lo archivio
- Para flashear Marlin más tarde, necesita este software [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software)
---
## TFT
### Si sabe qué variante de TFT tiene, elija la carpeta correcta que contiene:
- Vieco TfT
  - Carpeta TFT28
  - config.ini
  - mkstft28.bin
- Si tu tienes el nuevo TFT
  - Carpeta:mks_font
  - Carpeta:mks_pic
  - Carpeta:TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin
- Luego copie estos archivos y carpetas a una tarjeta SD formateada en Fat32
- Coloque la tarjeta SD en su impresora 3D
- Si la impresora está en línea
  - presione el botón de reinicio al lado de la pantalla
- Si la impresora está fuera de línea
  - encienda la impresora
- Dbria ver "Updating..." en la pantalla
  - Si su pantalla termina de actualizarse, ha terminado con la pantalla (TODO)

### Si no sabe qué variante de TFT tiene:

- Descargue DisplayCombo.zip y la variante (por ejemplo, Sidewinder o GeniusPro)
- Descomprimir ambos zips
- En Display Combo, debería ver 3 carpetas que comienzan con un número correspondiente
- Comienza con el primero y pon el contenido:
  - Carpeta TFT28
  - config.ini
  - mkstft28.bin
- Una variante puede contener estos archivos:
  - Carpeta:mks_font
  - Carpeta:mks_pic
  - Carpeta: TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin
- en una tarjeta SD que está formateada con Fat32
- Si la pantalla se actualiza y puede ver "Updating..."
  - ¡Entonces sabrá qué variante de TFT tiene y debe anotarla o recordarla!
- Si la pantalla se inicia directamente en el menú Pantalla, debe intentar el mismo proceso con otra carpeta
- Si probó las 4 variantes y aún no funciona, comuníquese aquí para obtener ayuda  [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)

---
## Marlin
- Instale el software STM32CubeProgrammer y ábralo
- Conecte su impresora 3D a su Computadora
- Ahora necesita enviar M997 a la impresora
- La forma más fácil es usar la pantalla, pero también puede usar pronterface o octoprint
  - Ir a : "Menu" --> "Terminal"
  - Introduzca: "M997"
- Cambia programe a tu Computdora
- En STM32CubeProgrammer desde el desplegable "USB" (imagen 1)
- Luego haga clic en el botón Actualizar (imagen 2)
- Luego haga clic en conectar (imagen 3)
- Luego haga clic en el botón "Download" (imagen 4)
- verifique que la casilla de verificación de programación esté marcada (imagen 5)
- Luego seleccione con navegar el firmware en la carpeta marlin (la carpeta extraída del zip descargado) (imagen 6)
- Luego presione  "Start Programming" (image 7)
- Y espere hasta que obtenga 2 cuadros de diálogo (imagen 8)
- ¡Finalmente desconecte la impresora y apáguela!
- Si algo salió mal, comuníquese aquí [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)

## Post installation
Go to the [post installation](post-install.md) page and continue there!
## Images

![printer01](pathname://assets/installation/STM32/printer01.png) ![printer02](pathname://assets/installation/STM32/printer02.png) ![printer03](pathname://assets/installation/STM32/printer03.png) ![printer04](pathname://assets/installation/STM32/printer04.png) ![printer05](pathname://assets/installation/STM32/printer05.png) ![printer06](pathname://assets/installation/STM32/printer06.png) ![printer07](pathname://assets/installation/STM32/printer07.png) ![printer08](pathname://assets/installation/STM32/printer08.png)
