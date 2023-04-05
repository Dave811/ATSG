---
layout: home
sidebar_position: 3
---
# Installation
## Requirements
- For now an: 
  - Artillery SidewinderX1/2 with Bed level sensor
  - Artillery Genius(Pro) with Bed level sensor
- SD-Card
  - Fat32 formatted
  - The SD-Card should work if you can see the content from the SD-Card in your 3d Printer, so the best option is to go to (TODO) Print -> switch from USB to SD if needed -> open the SD-Card -> you should see files
    - if not then you need to reformat the SD-Card or try a new one!
- Computer

## Prepare
- Download the correct files from [Downloads](downloads.mdx)
  - For that use the filters above the table
  - If you don't know which Display(TFT) you have, download also the DisplayCombo.zip
- After you downloaded the files unpack them
- To flash Marlin later on, you need this software [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html#get-software)
---
## TFT
### If you know which TFT variant you have choose the correct Folder that contains:
- Older TFT
  - Folder:TFT28
  - config.ini
  - mkstft28.bin
- If you have the newest TFT
  - Folder:mks_font
  - Folder:mks_pic
  - Folder:TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin
- Then copy these files and folders to a SD-Card that is Fat32 formatted
- Put the SD-Card in your 3d-printer
- If the printer is online
  - press the reset button next to the Display
- If the printer is offline
  - power on the printer
- You should see "Updating..." in the Display
  - If your display finishes updating you are finished with the display (TODO)

### If you don't know which TFT variant you have:

- Download the DisplayCombo.zip and the variant (ex. Sidewinder or GeniusPro)
- Unzip both zips
- In Display Combo you should see 3 folders starting with a corresponding number
- Start with the first one and put the contents:
  - Folder:TFT28
  - config.ini
  - mkstft28.bin
- One Variant can contain these files:
  - Folder:mks_font
  - Folder:mks_pic
  - Folder:TFT28
  - config.ini
  - mks_config.txt
  - mkstft28.bin
  - mkstft28evo.bin 
- on a SD-Card which is Formatted with Fat32
- If the display updates and you can see "Updating..." in the Display
  - Then you know which TFT variant you have and you should note it down or remember it!!!
- If the display boots straight to the Display menu you need to try the same process with another folder
- If you tested all 4 variants and it still din't work reach out here to get help [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)
    
---
## Marlin
- Install the STM32CubeProgrammer software and open it
- Connect your 3d Printer to your PC
- Now you need to send M997 to the printer
- The easiest way ist to use the display, but you can use also pronterface or octoprint
  - GoTO: "Menu" --> "Terminal"
  - Enter: "M997"
- Switch to your PC
- In STM32CubeProgrammer from the dropdown "USB" (image 1)
- Then click on the refresh button (image 2)
- Then click on connect (image 3)
- Then click on "Download" Button (image 4)
- check the verify programming check box is checked(image 5)
- Then select with browse the firmware in the marlin folder (the extracted folder from the downloaded zip) (image 6)
- Then hit "Start Programming" (image 7)
- And wait till you get 2 dialog boxes (image 8)
- Finally disconnect the printer and turn it off!
- If something went wrong reach out here [New Issue](https://github.com/Dave811/ATSG/issues/new/choose)

## Post installation
Go to the [post installation](post-install.md) page and continue there!
## Images

![printer01](pathname://assets/installation/STM32/printer01.png)
![printer02](pathname://assets/installation/STM32/printer02.png)
![printer03](pathname://assets/installation/STM32/printer03.png)
![printer04](pathname://assets/installation/STM32/printer04.png)
![printer05](pathname://assets/installation/STM32/printer05.png)
![printer06](pathname://assets/installation/STM32/printer06.png)
![printer07](pathname://assets/installation/STM32/printer07.png)
![printer08](pathname://assets/installation/STM32/printer08.png)
