"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,c=u["".concat(s,".").concat(m)]||u[m]||h[m]||l;return n?i.createElement(c,r(r({ref:t},d),{},{components:n})):i.createElement(c,r({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const l={layout:"home",sidebar_position:4},r="Post installation",o={unversionedId:"post-install",id:"post-install",title:"Post installation",description:"In this page, you find some little tips and tricks that are needed to do after a fresh Marlin installation (every version).",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/post-install.md",sourceDirName:".",slug:"/post-install",permalink:"/ATSG/de/post-install",draft:!1,editUrl:"https://github.com/Dave811/ATSG/tree/gh-pages-dev/docs/post-install.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"home",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/ATSG/de/installation"},next:{title:"Kredite",permalink:"/ATSG/de/credits"}},s={},p=[{value:"PID Autotune",id:"pid-autotune",level:2},{value:"Heat the bed and nozzle",id:"heat-the-bed-and-nozzle",level:2},{value:"Probe offset",id:"probe-offset",level:2},{value:"Bed Screws",id:"bed-screws",level:2},{value:"Auto Bed Leveling",id:"auto-bed-leveling",level:2},{value:"First layer IMPORTANT",id:"first-layer-important",level:2},{value:"Happy prints!",id:"happy-prints",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-installation"},"Post installation"),(0,a.kt)("p",null,"In this page, you find some little tips and tricks that are needed to do after a fresh Marlin installation (every version)."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, you need to know that the compiled Marlin have standard settings for the printer stored in the code base. These settings are mostly correct, for example the bed measurement or the BL-Touch offset to the nozzle. Other settings needed to be calibrated."),(0,a.kt)("p",null,"After you have installed the new Marlin version, you need to make a Factory restore with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"M502"),". This command erase all setting stored in EEPROM (The EEPROM stores the settings applied from the user and will be read when a print is happening) and load the settings which are stored in the compiled marlin version."),(0,a.kt)("p",null,"This command is needed, because sometimes when a new feature is implemented or changed, it is necessary to add the settings stored in the compiled Marlin version to the EEPROM."),(0,a.kt)("p",null,"Once you have reset the values, you will need to save the changes to the EEPROM. That is done with the ",(0,a.kt)("inlineCode",{parentName:"p"},"M500")," command. ",(0,a.kt)("strong",{parentName:"p"},"REMEMBER IT!!!")," It will become useful when you change other setting later on."),(0,a.kt)("h2",{id:"pid-autotune"},"PID Autotune"),(0,a.kt)("p",null,"This is recommended, so that the temperature of the bed and the nozzle is stable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This can be done through the display:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Machine")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Tuning")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Pid")),(0,a.kt)("li",{parentName:"ul"},"Make sure Nozzle is selected in the bottom left corner"),(0,a.kt)("li",{parentName:"ul"},"Adjust the temperature to your printing temperature!!"),(0,a.kt)("li",{parentName:"ul"},"click ",(0,a.kt)("inlineCode",{parentName:"li"},"start")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"read it")," --\x3e click ",(0,a.kt)("inlineCode",{parentName:"li"},"ok")),(0,a.kt)("li",{parentName:"ul"},"wait"),(0,a.kt)("li",{parentName:"ul"},"click ",(0,a.kt)("inlineCode",{parentName:"li"},"ok")," to store the settings to EEPROM")),(0,a.kt)("h2",{id:"heat-the-bed-and-nozzle"},"Heat the bed and nozzle"),(0,a.kt)("p",null,"You need to heat the bed and nozzle for the calibration, because while you print the bed and the nozzle is also hot"),(0,a.kt)("p",null,"This needed to be done, so that you represent the same edge parameter."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Heat/Fan")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Preheat")," --\x3e make sure that ",(0,a.kt)("inlineCode",{parentName:"li"},"both")," is selected --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Select your desired profile")),(0,a.kt)("li",{parentName:"ul"},"After you finished the calibration:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Heat/Fan")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Cool down"))),(0,a.kt)("h2",{id:"probe-offset"},"Probe offset"),(0,a.kt)("p",null,"The first thing to do is the probe offset! This ensures, that the nozzle to the BL-TOUCH height offset is nearly correct"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"place a piece of paper under the nozzle ",(0,a.kt)("strong",{parentName:"li"},"not the BL-TOUCH")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Movement")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Bed level")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"P offset")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom left corner button")),(0,a.kt)("li",{parentName:"ul"},"with the button ",(0,a.kt)("inlineCode",{parentName:"li"},"up")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"down")," move the nozzle down or up until the piece of paper can be slide with very little friction"),(0,a.kt)("li",{parentName:"ul"},"click ",(0,a.kt)("inlineCode",{parentName:"li"},"next")," until you see ",(0,a.kt)("inlineCode",{parentName:"li"},"save")," and click ",(0,a.kt)("inlineCode",{parentName:"li"},"save")," and then ",(0,a.kt)("inlineCode",{parentName:"li"},"ok"))),(0,a.kt)("h2",{id:"bed-screws"},"Bed Screws"),(0,a.kt)("p",null,"After that, you need to make sure that all the corners of your bed are roughly the same height to the nozzle."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This can be done through the display:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Movement")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Leveling")),(0,a.kt)("li",{parentName:"ul"},"Go through each point and slide a paper under the nozzle until all corners feel the same"),(0,a.kt)("li",{parentName:"ul"},"When it doesn't feel the same, adjust the Screw of the corner")),(0,a.kt)("h2",{id:"auto-bed-leveling"},"Auto Bed Leveling"),(0,a.kt)("p",null,"After that, you need to do an 'Auto Bed Leveling'!!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This can be done through the display:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Movement")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"Bed level")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"ABL")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"start")),(0,a.kt)("li",{parentName:"ul"},"After it finish you need to click ",(0,a.kt)("inlineCode",{parentName:"li"},"save"))),(0,a.kt)("h2",{id:"first-layer-important"},"First layer IMPORTANT"),(0,a.kt)("p",null,"This is essential, so the nozzle don't scratch the bed!!!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to this website ",(0,a.kt)("a",{parentName:"li",href:"https://teachingtechyt.github.io/calibration.html#firstlayer"},"https://teachingtechyt.github.io/calibration.html#firstlayer")),(0,a.kt)("li",{parentName:"ul"},"Read through it and edit the settings on the page, download the gcode and put it on the USB"),(0,a.kt)("li",{parentName:"ul"},"Start the print"),(0,a.kt)("li",{parentName:"ul"},"click ",(0,a.kt)("inlineCode",{parentName:"li"},"babystep")," --\x3e adjust the ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01mm")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"1mm")),(0,a.kt)("li",{parentName:"ul"},"Now you need to adjust the baby steps while it is printing!!!"),(0,a.kt)("li",{parentName:"ul"},"It can be, that the nozzle scratches the surface, then you need to lift the nozzle with the baby steps!!!",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"click ",(0,a.kt)("inlineCode",{parentName:"li"},"up")," if it scratches"))),(0,a.kt)("li",{parentName:"ul"},"If the printer prints, you need to look at the printed part as described on the other website"),(0,a.kt)("li",{parentName:"ul"},"adjust the ",(0,a.kt)("inlineCode",{parentName:"li"},"1mm")," value to a smaller value to do the baby steps in small intervals"),(0,a.kt)("li",{parentName:"ul"},"On the bottom of the website you find example images how the first layer should look like"),(0,a.kt)("li",{parentName:"ul"},"Adjust the baby steps, so it looks ",(0,a.kt)("inlineCode",{parentName:"li"},"just right")),(0,a.kt)("li",{parentName:"ul"},"finally click: ",(0,a.kt)("inlineCode",{parentName:"li"},"save")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"ok")," to save the baby steps to the EEPROM")),(0,a.kt)("p",null,"Well done! Now you can start printing or tune the printer even more"),(0,a.kt)("h2",{id:"happy-prints"},"Happy prints!"))}h.isMDXComponent=!0}}]);