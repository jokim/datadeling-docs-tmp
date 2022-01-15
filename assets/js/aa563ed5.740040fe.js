"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[3721],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),k=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=k(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=k(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var k=2;k<i;k++)o[k]=r[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7534:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Tekniske detaljer om IntArk-plattformen"},s=void 0,k={unversionedId:"datadeling/teknisk-plattform/teknisk",id:"datadeling/teknisk-plattform/teknisk",isDocsHomePage:!1,title:"Tekniske detaljer om IntArk-plattformen",description:"Gravitee API Management",source:"@site/docs/datadeling/teknisk-plattform/teknisk.md",sourceDirName:"datadeling/teknisk-plattform",slug:"/datadeling/teknisk-plattform/teknisk",permalink:"/datadeling-docs-tmp/docs/datadeling/teknisk-plattform/teknisk",editUrl:"https://github.com/jokim/datadelingsdokumentasjon/tree/master/docs/datadeling/teknisk-plattform/teknisk.md",version:"current",frontMatter:{title:"Tekniske detaljer om IntArk-plattformen"},sidebar:"tutorialSidebar",previous:{title:"RabbitMQ",permalink:"/datadeling-docs-tmp/docs/datadeling/teknisk-plattform/rabbitmq"},next:{title:"Unntaksh\xe5ndtering i IntArk",permalink:"/datadeling-docs-tmp/docs/datadeling/unntak"}},p=[{value:"Gravitee API Management",id:"gravitee-api-management",children:[]},{value:"RabbitMQ",id:"rabbitmq",children:[]},{value:"Infrastrukturen",id:"infrastrukturen",children:[{value:"OKD OpenShift Kubernetes",id:"okd-openshift-kubernetes",children:[]},{value:"Lastbalanserer",id:"lastbalanserer",children:[]},{value:"IP-ranges",id:"ip-ranges",children:[]}]}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gravitee-api-management"},"Gravitee API Management"),(0,i.kt)("p",null,"IntArk bruker open source versjonen av ",(0,i.kt)("a",{parentName:"p",href:"https://gravitee.io"},"Gravitee API\nmanagement"),". Vi kj\xf8rer kun komponenten som heter ",(0,i.kt)("em",{parentName:"p"},"API\nmanagement"),", ikke ",(0,i.kt)("em",{parentName:"p"},"Access Management")," eller ",(0,i.kt)("em",{parentName:"p"},"Alert Engine"),". Fra starten av 2022\nkj\xf8rer vi versjon 3."),(0,i.kt)("p",null,"Ved hjelp av ",(0,i.kt)("em",{parentName:"p"},"rolling upgrades")," vil Gravitee oppgraderes uten nedetid for ",(0,i.kt)("em",{parentName:"p"},"API\ngateway"),". Det betyr at integrasjoner ikke vil merke noe til oppgraderingene,\nselv om brukergrensesnittet vil kunne trenge noe nedetid."),(0,i.kt)("p",null,"For redundans kj\xf8rer vi 2 eller 3 av alle containere som Gravitee bruker."),(0,i.kt)("p",null,"Gravitee ble valgt som API manager og API gateway i IntArk fordi det er en av\nf\xe5 systemer som st\xf8tter distribuert tilgangsstyring av API-er, slik at du kan\nbestemme hvem som skal kunne administrere og hat tilgang til ditt API, og ikke\nalle hos institusjonen. I tillegg er den open source og har mindre lock in enn\nandre produkter."),(0,i.kt)("p",null,"Det er per i dag ikke st\xf8tte for \xe5 sette opp lokale API gateways. Dette vil\nkunne komme i fremtiden, etter m\xe5lbildet i referansearkitekturen som IntArk\nbaserer seg p\xe5."),(0,i.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,i.kt)("p",null,"IntArk bruker ",(0,i.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/"},"RabbitMQ")," for \xe5 h\xe5ndtere\nmeldingsk\xf8er. Per 2022 kj\xf8rer vi versjon 3.8."),(0,i.kt)("p",null,"Vi bruker prim\xe6rt AMQPS-protokollen for \xe5 sende og motta meldinger."),(0,i.kt)("p",null,"De fleste trenger ikke tilgang til RabbitMQ direkte, men bruker det via\n",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/teknisk-plattform/brom"},"Selvbetjeningsportalen for RabbitMQ"),".\nHver applikasjon opprettet i selvbetjeningsportalen blir registrert som en\nbruker i RabbitMQ, som du ogs\xe5 kan logge p\xe5 med. Brukernavn og passord finner\ndu i selvbetjeningsportalen. Ta kontakt hvis din institusjon trenger egne\nbrukere med andre rettigheter."),(0,i.kt)("p",null,"RabbitMQ kj\xf8rer som et cluster med 3 noder. Du m\xe5 ta h\xf8yde for at en av nodene\nkan v\xe6re nede. Det anbefales \xe5 bruke HA-mode i produksjon. TODO: Eller Quorum?"),(0,i.kt)("p",null,"RabbitMQ har ingen direkte kobling med Gravitee, annet enn at de kj\xf8rer p\xe5 den\nsamme infrastrukturen, og brukes av de samme datatilbydere og konsumenter.\nDette er to helt uavhengige produkter, og blir blant annet oppgradert uavhengig\nav hverandre."),(0,i.kt)("h2",{id:"infrastrukturen"},"Infrastrukturen"),(0,i.kt)("p",null,"IntArk sin tekniske plattform kj\xf8rer p\xe5 en Kubernetes-distribusjon som er\ninstallert i ",(0,i.kt)("a",{parentName:"p",href:"https://nrec.no"},"NREC"),", i osl-sonen."),(0,i.kt)("h3",{id:"okd-openshift-kubernetes"},"OKD OpenShift Kubernetes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://okd.io"},"OKD"),' er "The Community Distribution of Kubernetes that powers\n',(0,i.kt)("a",{parentName:"p",href:"https://www.openshift.com"},"Red Hat OpenShift"),'", og er upstream-versjonen av\nOpenShift. Det blir i dagligtale ofte omtalt som ',(0,i.kt)("em",{parentName:"p"},"OpenShift"),"."),(0,i.kt)("p",null,"IntArk-plattformen har egne clustre som kj\xf8rer p\xe5 NREC i osl-sonen. Per oktober\n2020 brukes versjon 3.11 av OKD, men vi planlegger oppgradere til versjon 4.7 i\nl\xf8pet av sommeren 2021 TODO: Sjekk med Ingvar. De er installert med\n",(0,i.kt)("em",{parentName:"p"},"ovs-multitenant SDN plugin"),", og hvert prosjekt (namespace) er nettverksmessig\nisolert."),(0,i.kt)("p",null,"Hver institusjon som bruker IntArk-plattformen har hvert sitt prosjekt hvor\nGravitee, RabbitMQ og BROM kj\xf8rer."),(0,i.kt)("p",null,"Oppgraderinger av OKD er for versjon 3 basert p\xe5 blue-green-metodikk. Det vil\nsi at oppgraderinger skjer ved \xe5 installere nytt cluster med nyeste versjon av\nalle komponenter, og deretter flytte applikasjonene fra et cluster til et\nannet. Dette betyr at alle tjenester vil bytte IP-adresse ved oppgraderinger."),(0,i.kt)("h3",{id:"lastbalanserer"},"Lastbalanserer"),(0,i.kt)("p",null,"Det st\xe5r en lastbalanserer i forkant som sender trafikk til riktig cluster.\nDenne har samme IP-adresse for alle, og bruker ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Server_Name_Indication"},"Server Name Indication\n(SNI)")," for \xe5 route\ntrafikken til riktig sted. I web-verdenen har dette v\xe6rt standard lenge og man\nbeh\xf8ver vanligvis ikke tenke p\xe5 dette. N\xe5r man skal koble til en meldingsk\xf8 m\xe5\nman derimot ofte spesifisere at man skal bruke SNI."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Tekniske komponenter i IntArk-plattformen",src:r(7287).Z})),(0,i.kt)("h3",{id:"ip-ranges"},"IP-ranges"),(0,i.kt)("p",null,"IntArk sin tekniske plattform kj\xf8rer i regionen ",(0,i.kt)("em",{parentName:"p"},"osl")," til NREC. Hvis du \xf8nsker\n\xe5 lage brannmurregler som ikke trenger hyppige oppdateringer anbefaler vi \xe5\n\xe5pne for alle subnettene til NREC. Se ",(0,i.kt)("a",{parentName:"p",href:"https://iaas.readthedocs.io/team/installation/ip.html"},"NREC sin oversikt hvilke nettverk de\nbruker"),"."),(0,i.kt)("p",null,"Vi anbefaler ",(0,i.kt)("strong",{parentName:"p"},"ikke")," \xe5 sperre ned til spesifikke IP-adresser, fordi:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"IntArk-installasjonene bytter cluster ved oppgraderinger"),(0,i.kt)("li",{parentName:"ol"},"Tjenester kan bytte IP-adresse"),(0,i.kt)("li",{parentName:"ol"},"Cluster utvides fortl\xf8pende med nye servere")),(0,i.kt)("p",null,"Ulempen ved \xe5 \xe5pne for alle subnettene til NREC, eller til et spesifikt\ncluster, er at de deles av andre institusjoner. Hvis du har API med strenge\nkrav til brannmurregler anbefaler vi at du kj\xf8rer dette via en\nhttp-proxy-server som krever brukernavn og passord."))}m.isMDXComponent=!0},7287:function(e,t,r){t.Z=r.p+"assets/images/intark-komponenter-630785cbecd15233752216c5c4523dbd.png"}}]);