"use strict";(self.webpackChunkdatadeling=self.webpackChunkdatadeling||[]).push([[7337],{3905:function(e,n,r){r.d(n,{Zo:function(){return k},kt:function(){return p}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},k=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),g=d(r),p=i,m=g["".concat(l,".").concat(p)]||g[p]||u[p]||a;return r?t.createElement(m,o(o({ref:n},k),{},{components:r})):t.createElement(m,o({ref:n},k))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2249:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return k},default:function(){return g}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={description:"TODO: Legg inn forklaringar, erfaringar og anna god praksis rundt notifikasjonar\n\n\nTBD: Er dette riktig, eller blir det endra p\xe5 etter referansearkitekturen?",title:"Hvordan designe dine notifikasjoner"},l="Hvordan designe dine notifikasjoner",d={unversionedId:"datadeling/god-praksis/notifikasjonsdesign/index",id:"datadeling/god-praksis/notifikasjonsdesign/index",isDocsHomePage:!1,title:"Hvordan designe dine notifikasjoner",description:"TODO: Legg inn forklaringar, erfaringar og anna god praksis rundt notifikasjonar\n\n\nTBD: Er dette riktig, eller blir det endra p\xe5 etter referansearkitekturen?",source:"@site/docs/datadeling/god-praksis/notifikasjonsdesign/index.md",sourceDirName:"datadeling/god-praksis/notifikasjonsdesign",slug:"/datadeling/god-praksis/notifikasjonsdesign/index",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/notifikasjonsdesign/index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/datadeling/god-praksis/notifikasjonsdesign/index.md",version:"current",frontMatter:{description:"TODO: Legg inn forklaringar, erfaringar og anna god praksis rundt notifikasjonar\n\n\nTBD: Er dette riktig, eller blir det endra p\xe5 etter referansearkitekturen?",title:"Hvordan designe dine notifikasjoner"},sidebar:"tutorialSidebar",previous:{title:"Integrasjonsm\xf8nstre i UH:IntArk",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/integrasjonsmonster/index"},next:{title:"Elementene i UH:IntArk",permalink:"/datadeling-docs-tmp/docs/datadeling/hva-er/elementene"}},k=[{value:"Anbefalt standard",id:"anbefalt-standard",children:[{value:"Forskjeller i IntArk",id:"forskjeller-i-intark",children:[]}]},{value:"Hva b\xf8r en notifikasjon inneholde?",id:"hva-b\xf8r-en-notifikasjon-inneholde",children:[{value:"Framtidige hendelser",id:"framtidige-hendelser",children:[]}]},{value:"Eksempler",id:"eksempler",children:[]},{value:"Hvorfor tynne meldinger?",id:"hvorfor-tynne-meldinger",children:[]},{value:"Se ogs\xe5",id:"se-ogs\xe5",children:[]}],u={toc:k};function g(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hvordan-designe-dine-notifikasjoner"},"Hvordan designe dine notifikasjoner"),(0,a.kt)("p",null,"TODO: Legg inn forklaringar, erfaringar og anna god praksis rundt notifikasjonar"),(0,a.kt)("p",null,"TBD: Er dette riktig, eller blir det endra p\xe5 etter referansearkitekturen?"),(0,a.kt)("p",null,'Med "notifikasjoner" mener vi her "tynne meldinger" som g\xe5r via en meldingsk\xf8. Se mer i ',(0,a.kt)("a",{parentName:"p",href:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/begreper"},"begrepsoversikten"),". Disse notifikasjonene brukes i hovedsak i integrasjonsm\xf8nsteret ",(0,a.kt)("a",{parentName:"p",href:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/integrasjonsmonster/hendelsesbasert"},"hendelsesbasert provisjonering"),"."),(0,a.kt)("h2",{id:"anbefalt-standard"},"Anbefalt standard"),(0,a.kt)("p",null,"Hver tilbyder st\xe5r selv fritt til \xe5 velge format p\xe5 sine notifikasjoner, men i IntArk anbefaler vi bruk av standarden ",(0,a.kt)("a",{parentName:"p",href:"https://cloudevents.io/"},"CloudEvent"),". Dette fordi det er system- og leverand\xf8ruavhengig standard som kan brukes av alle, og inneholder mange av de samme slutningene som vi har erfart i IntArk."),(0,a.kt)("p",null,"Merk at ogs\xe5 notifikasjoner b\xf8r f\xf8lge samme prinsippene som ",(0,a.kt)("a",{parentName:"p",href:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/api-design"},"utforming av API"),": Vi frar\xe5der \xe5 lage egne notifikasjoner som er skreddersydde for spesifikke konsumenter, men lage notifikasjoner som er generelle og standardiserte nok til \xe5 kunne brukes av alle som \xf8nsker det."),(0,a.kt)("h3",{id:"forskjeller-i-intark"},"Forskjeller i IntArk"),(0,a.kt)("p",null,"I IntArk har vi noen erfaringer som vi anbefaler at blir tatt hensyn til:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TODO: Framtidigie hendingar? anna fr\xe5 cloudevents? Sjekk kva som vart landa i OrgReg, og legg ut d\xf8mer!")),(0,a.kt)("h2",{id:"hva-b\xf8r-en-notifikasjon-inneholde"},"Hva b\xf8r en notifikasjon inneholde?"),(0,a.kt)("p",null,"Meningen med en notifikasjon er \xe5 fortelle konsumenter at noe har skjedd i kildesystemet, slik at de kan vurdere om de skal gj\xf8re noe. Ved at tilbyder selv sier i fra, slipper tilbyder at hver enkelt konsument jevnlig sp\xf8r etter om noe nytt har skjedd siden sist."),(0,a.kt)("p",null,"Notifikasjonen trenger som minimum \xe5 fortelle konsumentene:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hvilket system, instans eller API dette gjelder. S\xe5 konsumenten vet hvor data skal hentes fra."),(0,a.kt)("li",{parentName:"ul"},"Hvilken entitet eller endepunkt endringen gjelder for.")),(0,a.kt)("p",null,"Det er ogs\xe5 en fordel at notifikasjonen ogs\xe5 forteller konsumentene:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hvilken type endring det er snakk om. Er det for eksempel oppretting, endring eller sletting av en entitet?"),(0,a.kt)("li",{parentName:"ul"},"Hvilket tidspunkt gjelder endringen for"),(0,a.kt)("li",{parentName:"ul"},"Hvilke attributter som blir p\xe5virket. Dette gj\xf8r det enklere for konsumenter \xe5 filtrere bort endringer som ikke er relevante for de.")),(0,a.kt)("p",null,"Mye av denne ekstra informasjonen er detaljer som konsumenten kan bruke for \xe5 redusere antal oppslag som m\xe5 gj\xf8res. Det er med andre ord optimalisering."),(0,a.kt)("h3",{id:"framtidige-hendelser"},"Framtidige hendelser"),(0,a.kt)("p",null,"I noen tilfeller vil en endring ikke kunne v\xe6re gydlig f\xf8r etter et tidspunkt fram i tid. Et eksempel p\xe5 dette er at en saksbehandler oppretter en ny ansatt som ikke skal starte f\xf8r neste uke."),(0,a.kt)("p",null,"Tilbyderen m\xe5 sende ut notifikasjon om dette p\xe5 tidspunktet registreringen skjedde. Tilbyderen har ",(0,a.kt)("strong",{parentName:"p"},"ikke")," ansvar for \xe5 sende ut noen notifikasjon p\xe5 tidspunktet slike endringer trer i kraft - dette m\xe5 konsumenten selv ta ansvar for. Bakgrunnen for dette er at det er ulikt hvordan konsumentene forholder seg til dette - et IGA-system vil for eksempel kunne ha behov for \xe5 registrere den ansatte en dag f\xf8r tidspunktetn, mens et rapporteringssystem kanskje vil ha med nye data uavhengig av starttidspunkt."),(0,a.kt)("p",null,"TODO: Skriv bedre."),(0,a.kt)("h2",{id:"eksempler"},"Eksempler"),(0,a.kt)("p",null,"Eksempel p\xe5 hvordan en notifikasjon som bruker CloudEvents-standarden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n{\n    "specversion" : "1.0",\n    "type" : "no.uio.cerebrum.account.create",\n    "source" : "https://cerebrum-uio.uio.no",\n    "subject" : "https://cerebrum-uio.uio.no/api/v2/accounts/123456",\n    "id" : "4d3559ec67504aaba65d40b0363faad8",\n    "time" : "2020-10-29T09:01:14Z",\n}\n')),(0,a.kt)("p",null,'Dette eksempelet er en typisk "tynn melding", som forteller deg at en brukerkonto har blitt opprettet, men ikke stort mer. For \xe5 vite mer om brukerkontoen m\xe5 du snakke med API-et som subject-feltet lenker til.'),(0,a.kt)("p",null,"Eksempel p\xe5 en enklere melding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\naccounts/123456\n")),(0,a.kt)("h2",{id:"hvorfor-tynne-meldinger"},"Hvorfor tynne meldinger?"),(0,a.kt)("p",null,"Tynne meldinger gir en enklere flyt for provisjoneringsl\xf8sninger, som er fokus p\xe5 status her og n\xe5. Meldingen er tynne for \xe5 redusere for eksempel mengden personopplysninger. Det unng\xe5r ogs\xe5 at konsumenter blir forvirret og anser innholdet i meldingen som kildedata - meldingen kan nemlig v\xe6re forsinket og vil derfor kunne inneholde utdaterte data."),(0,a.kt)("h2",{id:"se-ogs\xe5"},"Se ogs\xe5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TODO: Eget integrasjonsm\xf8nster for event streaming?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/integrasjonsmonster/hendelsesbasert"},"Integrasjonsm\xf8nsteret hendelsesbasert provisjonering"),", som bruker notifikasjoner"),(0,a.kt)("li",{parentName:"ul"},"TODO: Detaljer om meldingsk\xf8, td routing topologi")))}g.isMDXComponent=!0}}]);