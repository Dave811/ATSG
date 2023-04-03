"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[111],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={layout:"home",sidebar_position:3},l="Installation",o={unversionedId:"installation",id:"installation",title:"Installation",description:"Requirements",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ATSG/installation",draft:!1,editUrl:"https://github.com/Dave811/ATSG/tree/gh-pages-dev/docs/installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{layout:"home",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Downloads",permalink:"/ATSG/downloads.html"},next:{title:"Credits",permalink:"/ATSG/credits"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Prepare",id:"prepare",level:2},{value:"TFT",id:"tft",level:2},{value:"If you know which TFT variant you have choose the correct Folder that contains:",id:"if-you-know-which-tft-variant-you-have-choose-the-correct-folder-that-contains",level:3},{value:"If you don&#39;t know which TFT variant you have:",id:"if-you-dont-know-which-tft-variant-you-have",level:3},{value:"Marlin",id:"marlin",level:2},{value:"Congratulations you are all set :)",id:"congratulations-you-are-all-set-",level:2},{value:"Images",id:"images",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For now an:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Artillery SidewinderX1/2 with Bed level sensor"),(0,r.kt)("li",{parentName:"ul"},"Artillery Genius(Pro) with Bed level sensor"))),(0,r.kt)("li",{parentName:"ul"},"SD-Card",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fat32 formatted"),(0,r.kt)("li",{parentName:"ul"},"The SD-Card should work if you can see the content from the SD-Card in your 3d Printer, so the best option is to go to (TODO) Print -> switch from USB to SD if needed -> open the SD-Card -> you should see files",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if not then you need to reformat the SD-Card or try a new one!"))))),(0,r.kt)("li",{parentName:"ul"},"Computer")),(0,r.kt)("h2",{id:"prepare"},"Prepare"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the correct files from ",(0,r.kt)("a",{parentName:"li",href:"/ATSG/downloads.html"},"Downloads"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For that use the filters above the table"),(0,r.kt)("li",{parentName:"ul"},"If you don't know which Display(TFT) you have, download also the DisplayCombo.zip"))),(0,r.kt)("li",{parentName:"ul"},"After you downloaded the files unpack them"),(0,r.kt)("li",{parentName:"ul"},"To flash Marlin later on, you need this software ",(0,r.kt)("a",{parentName:"li",href:"https://www.st.com/en/development-tools/stm32cubeprog.html#get-software"},"STM32CubeProgrammer"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tft"},"TFT"),(0,r.kt)("h3",{id:"if-you-know-which-tft-variant-you-have-choose-the-correct-folder-that-contains"},"If you know which TFT variant you have choose the correct Folder that contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Older TFT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Folder:TFT28"),(0,r.kt)("li",{parentName:"ul"},"config.ini"),(0,r.kt)("li",{parentName:"ul"},"mkstft28.bin"))),(0,r.kt)("li",{parentName:"ul"},"If you have the newest TFT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Folder:mks_font"),(0,r.kt)("li",{parentName:"ul"},"Folder:mks_pic"),(0,r.kt)("li",{parentName:"ul"},"Folder:TFT28"),(0,r.kt)("li",{parentName:"ul"},"config.ini"),(0,r.kt)("li",{parentName:"ul"},"mks_config.txt"),(0,r.kt)("li",{parentName:"ul"},"mkstft28.bin"),(0,r.kt)("li",{parentName:"ul"},"mkstft28evo.bin"))),(0,r.kt)("li",{parentName:"ul"},"Then copy these files and folders to a SD-Card that is Fat32 formatted"),(0,r.kt)("li",{parentName:"ul"},"Put the SD-Card in your 3d-printer"),(0,r.kt)("li",{parentName:"ul"},"If the printer is online",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"press the reset button next to the Display"))),(0,r.kt)("li",{parentName:"ul"},"If the printer is offline",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"power on the printer"))),(0,r.kt)("li",{parentName:"ul"},'You should see "Updating..." in the Display',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your display finishes updating you are finished with the display (TODO)")))),(0,r.kt)("h3",{id:"if-you-dont-know-which-tft-variant-you-have"},"If you don't know which TFT variant you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the DisplayCombo.zip and the variant (ex. Sidewinder or GeniusPro)"),(0,r.kt)("li",{parentName:"ul"},"Unzip both zips"),(0,r.kt)("li",{parentName:"ul"},"In Display Combo you should see 3 folders starting with a corresponding number"),(0,r.kt)("li",{parentName:"ul"},"Start with the first one and put the contents:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Folder:TFT28"),(0,r.kt)("li",{parentName:"ul"},"config.ini"),(0,r.kt)("li",{parentName:"ul"},"mkstft28.bin"))),(0,r.kt)("li",{parentName:"ul"},"One Variant can contain these files:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Folder:mks_font"),(0,r.kt)("li",{parentName:"ul"},"Folder:mks_pic"),(0,r.kt)("li",{parentName:"ul"},"Folder:TFT28"),(0,r.kt)("li",{parentName:"ul"},"config.ini"),(0,r.kt)("li",{parentName:"ul"},"mks_config.txt"),(0,r.kt)("li",{parentName:"ul"},"mkstft28.bin"),(0,r.kt)("li",{parentName:"ul"},"mkstft28evo.bin"))),(0,r.kt)("li",{parentName:"ul"},"on a SD-Card which is Formatted with Fat32"),(0,r.kt)("li",{parentName:"ul"},'If the display updates and you can see "Updating..." in the Display',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Then you know which TFT variant you have and you should note it down or remember it!!!"))),(0,r.kt)("li",{parentName:"ul"},"If the display boots straight to the Display menu you need to try the same process with another folder"),(0,r.kt)("li",{parentName:"ul"},"If you tested all 4 variants and it still din't work reach out here to get help ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Dave811/ATSG/issues/new/choose"},"New Issue"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"marlin"},"Marlin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the STM32CubeProgrammer software and open it"),(0,r.kt)("li",{parentName:"ul"},"Connect your 3d Printer to your PC"),(0,r.kt)("li",{parentName:"ul"},"Now you need to send M997 to the printer"),(0,r.kt)("li",{parentName:"ul"},"The easiest way ist to use the display, but you can use also pronterface or octoprint",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'GoTO: "Menu" --\x3e "Terminal"'),(0,r.kt)("li",{parentName:"ul"},'Enter: "M997"'))),(0,r.kt)("li",{parentName:"ul"},"Switch to your PC"),(0,r.kt)("li",{parentName:"ul"},'In STM32CubeProgrammer from the dropdown "USB" (image 1)'),(0,r.kt)("li",{parentName:"ul"},"Then click on the refresh button (image 2)"),(0,r.kt)("li",{parentName:"ul"},"Then click on connect (image 3)"),(0,r.kt)("li",{parentName:"ul"},'Then click on "Download" Button (image 4)'),(0,r.kt)("li",{parentName:"ul"},"check the verify programming check box is checked(image 5)"),(0,r.kt)("li",{parentName:"ul"},"Then select with browse the firmware in the marlin folder (the extracted folder from the downloaded zip) (image 6)"),(0,r.kt)("li",{parentName:"ul"},'Then hit "Start Programming" (image 7)'),(0,r.kt)("li",{parentName:"ul"},"And wait till you get 2 dialog boxes (image 8)"),(0,r.kt)("li",{parentName:"ul"},"Finally disconnect the printer and turn it off!"),(0,r.kt)("li",{parentName:"ul"},"If something went wrong reach out here ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Dave811/ATSG/issues/new/choose"},"New Issue"))),(0,r.kt)("h2",{id:"congratulations-you-are-all-set-"},"Congratulations you are all set :)"),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer01.png",alt:"printer01"})," ",(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer02.png",alt:"printer02"})," ",(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer03.png",alt:"printer03"})," ",(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer04.png",alt:"printer04"})," ",(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer05.png",alt:"printer05"})," ",(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer06.png",alt:"printer06"})," ",(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer07.png",alt:"printer07"})," ",(0,r.kt)("img",{parentName:"p",src:"assets/installation/STM32/printer08.png",alt:"printer08"})))}h.isMDXComponent=!0}}]);