"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[1562],{3905:function(e,t,r){r.d(t,{Zo:function(){return k},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),g=m(r),p=i,u=g["".concat(l,".").concat(p)]||g[p]||d[p]||o;return r?n.createElement(u,a(a({ref:t},k),{},{components:r})):n.createElement(u,a({ref:t},k))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3962:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return k},default:function(){return g}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={description:"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.",title:"Mikrotjeneste"},l="Mikrotjeneste",m={unversionedId:"datadeling/begreper/mikrotjeneste",id:"datadeling/begreper/mikrotjeneste",isDocsHomePage:!1,title:"Mikrotjeneste",description:"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.",source:"@site/docs/datadeling/begreper/mikrotjeneste.md",sourceDirName:"datadeling/begreper",slug:"/datadeling/begreper/mikrotjeneste",permalink:"/datadeling-docs-tmp/docs/datadeling/begreper/mikrotjeneste",editUrl:"https://github.com/jokim/datadeling-docs-tmp/tree/gh-pages/docs/datadeling/begreper/mikrotjeneste.md",version:"current",frontMatter:{description:"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.",title:"Mikrotjeneste"},sidebar:"tutorialSidebar",previous:{title:"L\xf8s kobling",permalink:"/datadeling-docs-tmp/docs/datadeling/begreper/los-kobling"},next:{title:"Notifikasjon",permalink:"/datadeling-docs-tmp/docs/datadeling/begreper/notifikasjon"}},k=[{value:"Hva er en mikrotjeneste i IntArk?",id:"hva-er-en-mikrotjeneste-i-intark",children:[]},{value:"Om SOAP og REST",id:"om-soap-og-rest",children:[]},{value:"Om ESB og tette koblinger",id:"om-esb-og-tette-koblinger",children:[]},{value:"Om ESB og voksesmerter",id:"om-esb-og-voksesmerter",children:[]},{value:"Om sentraliserte komponenter i et micro service landskap",id:"om-sentraliserte-komponenter-i-et-micro-service-landskap",children:[]},{value:"Oppsummert",id:"oppsummert",children:[]}],d={toc:k};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mikrotjeneste"},"Mikrotjeneste"),(0,o.kt)("p",null,"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng."),(0,o.kt)("h2",{id:"hva-er-en-mikrotjeneste-i-intark"},"Hva er en mikrotjeneste i IntArk?"),(0,o.kt)("p",null,"En mikrotjeneste er en liten tjeneste som er spesialisert til \xe5 gj\xf8re \xe9n ting. I IntArk-sammenheng bruker vi mikrotjenester som konnektorer der det er n\xf8dvendig."),(0,o.kt)("h2",{id:"om-soap-og-rest"},"Om SOAP og REST"),(0,o.kt)("p",null,'For \xe5 forst\xe5 hvordan begrepet "micro service" vokste frem, m\xe5 vi ta et steg tilbake og se p\xe5 utviklingen av web services. Det finnes to hovedkategorier av web services: REST og SOAP. I begynnelsen var SOAP den dominerende. Dette fordi den vokste ut av objektorientert programmering. Objektorientert programmering var popul\xe6rt fordi man kunne lage objektet, f.eks. bil, og gi det egenskaper (som farge, motor, d\xf8rer, pris). SOAP var utviklet av store akt\xf8rer som IBM, Microsoft og Oracle, med Microsoft i spissen. Dette var i en tid da deres hegemoni var p\xe5 sitt st\xf8rste. REST, p\xe5 sin side, var utviklet av forskere i CERN, alts\xe5 det samme teamet som sto bak WWW. Det tok betydelig med tid f\xf8r teknologien festet seg i forretningstradisjonen. At den fikk grep, skyldtes prim\xe6rt:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Den var mye enklere \xe5 bruke og implementere"),(0,o.kt)("li",{parentName:"ul"},"Det var helt \xe5pen og uavhengig av leverand\xf8r, og enkelt \xe5 benytte p\xe5 tvers av tjenester"),(0,o.kt)("li",{parentName:"ul"},"Den var intuitiv \xe5 forst\xe5 og bruke")),(0,o.kt)("h2",{id:"om-esb-og-tette-koblinger"},"Om ESB og tette koblinger"),(0,o.kt)("p",null,"I den gamle SOAP tiden var integrasjon i st\xf8rre grad overlatt til eksperter. Integrasjoner var gjerne samlet i en kjerne som ga sentral kontroll. Disse kjernene ble kalt Enterprise Service Bus (ESB) eller tjenestebuss. (Disse skiller seg fra UiOs bruk av termen i sin integrasjonsarkitektur, der ESB/tjenestebuss bare betyr at tjenesten er sentralisert). ESB-en tilb\xf8d standardiserte integrasjonsgrensesnitt (API), som konsumentene kunne koble seg opp mot. I SOAP var integrasjoner bygget som kommandoer med argumenter, slik man kjenner fra kommandolinjeprogrammer. For \xe5 gj\xf8re det enklere \xe5 integrere ble det ofte laget egne API-programmer som kj\xf8rte p\xe5 klienten. P\xe5 samme m\xe5te var det flere API p\xe5 bussen som delte biblioteker med programkode. Slik kunne man gjenbruke kode og spare utviklingsarbeid, men det medf\xf8rte ogs\xe5 tette\xa0 koblinger. Tette koblinger vil si at hvis man endrer noe i produsent eller API, m\xe5 det ogs\xe5 samtidig endres i konsumenten. Dvs at om man f.eks. oppgraderer en database fra\xa0 versjon 8 til 9, s\xe5 m\xe5 man ogs\xe5 oppgradere biblioteket i bussen for \xe5 reflektere dette. Siden dette biblioteket kan v\xe6re delt med et annet API, hvor databasen enda ikke er oppgradert, m\xe5 det h\xe5ndteres, ellers vil API-et knekke. Videre m\xe5 klienten/konsumenten oppgradere sitt bibliotek. Hvis konsumenten benytter begge API-er, alts\xe5 b\xe5de det som ble oppgradert til versjon 9 og det som fortsatt er p\xe5 versjon 8, er dette ofte umulig \xe5 samkj\xf8re. Uansett var det komplisert."),(0,o.kt)("p",null,"REST ikke krever noe API-spesifikk program p\xe5 konsumenten, men REST kan likevel benytte delte biblioteker og ha de samme utfordingene i en ESB. En micro service deler ikke biblioteker med andre API. Det er noe av det som gj\xf8r den til en micro service; Man kan gj\xf8re endringer uten at det affekterer noen andre API."),(0,o.kt)("h2",{id:"om-esb-og-voksesmerter"},"Om ESB og voksesmerter"),(0,o.kt)("p",null,'ESB-er hadde/har mye funksjonalitet. De kan se hvor en datapakke skal ved \xe5 se p\xe5 overskrifter, de kan konvertere formater og protokoller, sette sammen data mm. Dette medf\xf8rte at man etter hvert fikk en lock in situasjon mot sin egen ESB, den ble veldig dyr \xe5 skifte ut. Dessuten medf\xf8rte kompleksiteten i ESB-en at integrasjoner krevde h\xf8y grad av spesialkompetanse, men ble s\xe5rbare p\xe5 turn-over, og det tok lang tid \xe5 integrere. Videre har gjerne en ESB mye annen logikk, dvs. vurderinger som :"F\xf8rst skal jeg gj\xf8re det, og hvis svaret er A, s\xe5 skal jeg gj\xf8r ditt, mens hvis svaret er B, s\xe5 skal jeg gj\xf8re datt". Denne type logikk kalles orkestrering. Det er som dirigenten av et orkester, som forteller medlemmene i ensemblet hva de skal gj\xf8re. Et micro service landskap, derimot, er bygget p\xe5 at alle vet bare hva en selv skal gj\xf8re. Vi sier da at l\xf8sningen er koreografert. Dette etter dans, der det ikke er noen dirigent, men hver danser kjenner sin egen rolle. L\xf8sningene kan naturligvis kombineres. Hovedsaken er at man unng\xe5r en endringshemmende lock in situasjonen som oppst\xe5r dersom man orkestrerer mye logikk i en programvaretjeneste.'),(0,o.kt)("h2",{id:"om-sentraliserte-komponenter-i-et-micro-service-landskap"},"Om sentraliserte komponenter i et micro service landskap"),(0,o.kt)("p",null,"For \xe5 lage oversikt og forenkle administrasjon og tilgang, er micro service landskap gjerne samlet bak en s\xe5kalt API Manager (ogs\xe5 kjent som API Gateway eller API Gatekeeper). Foruten \xe5 hjelpe konsumenter med \xe5 finne frem til de data de trenger og utstede adgangsbevis, vil API Gatewayen holde orden p\xe5 hvem som benytter hvilke data. Slik kan man n\xe5 ut til konsumenter i god tid med endringer i API. N\xe5r API endres m\xe5 konsumenten endre i sin ende, og vanligvis l\xf8ses dette ved versjonering. Det inneb\xe6rer at man kj\xf8rer gammelt og nytt API parallelt i en periode (f.eks. 3 eller 6 mnd), hvilket gir konsumenten mulighet til selv \xe5 finne et passende tidspunkt \xe5 flytte over til det nye API-et."),(0,o.kt)("h2",{id:"oppsummert"},"Oppsummert"),(0,o.kt)("p",null,"En micro service har tre hovedkarekteristikker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Den er liten, intuitiv/selvforklarende, og brukes til et spesielt form\xe5l"),(0,o.kt)("li",{parentName:"ul"},"Den har ingen kodeavhengigheter til andre tjenester"),(0,o.kt)("li",{parentName:"ul"},"Den er en del av en koreografert l\xf8sning")))}g.isMDXComponent=!0}}]);