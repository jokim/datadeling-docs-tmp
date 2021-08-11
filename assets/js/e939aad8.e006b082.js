"use strict";(self.webpackChunkdatadeling=self.webpackChunkdatadeling||[]).push([[4870],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(n),u=a,f=k["".concat(s,".").concat(u)]||k[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9245:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={description:"Hjelp til oppsett av Inspera sitt API.\n\n\nTODO: Uavklart, m\xe5 lages",title:"Inspera"},s="Inspera",p={unversionedId:"datadeling/teknisk-plattform/api/inspera",id:"datadeling/teknisk-plattform/api/inspera",isDocsHomePage:!1,title:"Inspera",description:"Hjelp til oppsett av Inspera sitt API.\n\n\nTODO: Uavklart, m\xe5 lages",source:"@site/docs/datadeling/teknisk-plattform/api/inspera.md",sourceDirName:"datadeling/teknisk-plattform/api",slug:"/datadeling/teknisk-plattform/api/inspera",permalink:"/datadeling-docs-tmp/docs/datadeling/teknisk-plattform/api/inspera",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/datadeling/teknisk-plattform/api/inspera.md",version:"current",frontMatter:{description:"Hjelp til oppsett av Inspera sitt API.\n\n\nTODO: Uavklart, m\xe5 lages",title:"Inspera"},sidebar:"tutorialSidebar",previous:{title:"Felles Studentsystem - FS-API",permalink:"/datadeling-docs-tmp/docs/datadeling/teknisk-plattform/api/fs"},next:{title:"Integra",permalink:"/datadeling-docs-tmp/docs/datadeling/teknisk-plattform/api/integra"}},d=[{value:"Om API-ene",id:"om-api-ene",children:[]},{value:"Standardoppsett",id:"standardoppsett",children:[]},{value:"Hvordan sette opp API-ene",id:"hvordan-sette-opp-api-ene",children:[{value:"Hvordan verifisere at API-et fungerer:",id:"hvordan-verifisere-at-api-et-fungerer",children:[]}]}],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inspera"},"Inspera"),(0,i.kt)("p",null,"Hjelp til oppsett av Inspera sitt API."),(0,i.kt)("p",null,"TODO: Uavklart, m\xe5 lages"),(0,i.kt)("h2",{id:"om-api-ene"},"Om API-ene"),(0,i.kt)("p",null,"DF\xd8s l\xf8sninger for \xf8konomi og l\xf8nn brukes av mange i sektoren. DF\xd8 tilbyr API som er felles for sektoren, men der hver institusjon f\xe5r ut sine data."),(0,i.kt)("p",null,"DF\xd8 tilbyr flere ulike API-er for ulike data, som ansattinformasjon, stillingsdata og organisasjonsdata. Se ",(0,i.kt)("a",{parentName:"p",href:"https://api-portal.dfo.no/"},"DF\xd8s API-portal")," for mer informasjon."),(0,i.kt)("p",null,'TODO: For \xe5 kunne bruke DF\xd8s API m\xe5 din institusjon bli "oppgradert" hos DF\xd8. Mange institusjoner m\xe5 i dag forholde seg til CSV-filer fra DF\xd8. Dette m\xe5 gj\xf8res i dialog med DF\xd8, og dette vil kunne ta tid.'),(0,i.kt)("h2",{id:"standardoppsett"},"Standardoppsett"),(0,i.kt)("p",null,"DF\xd8 er en fellestjeneste, og m\xe5/b\xf8r derfor settes opp likt hos alle institusjoner. Du kan sette dette opp ved \xe5 laste inn fil med standardoppsett:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO.json")),(0,i.kt)("h2",{id:"hvordan-sette-opp-api-ene"},"Hvordan sette opp API-ene"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Last ned standardoppsettet over, og opprett tjenesten i API manager. Se ",(0,i.kt)("a",{parentName:"li",href:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/importer-api.html"},"veileder for \xe5 registrere en tjeneste i API manager via fil"),"."),(0,i.kt)("li",{parentName:"ol"},"Registrer DF\xd8 SAP som tjeneste i ",(0,i.kt)("em",{parentName:"li"},"Selvbetjeningsportalen for RabbitMQ")," (se ",(0,i.kt)("a",{parentName:"li",href:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/opprett-tjeneste.html"},"veileder for \xe5 registrere tjenesten"),"). Hent ut tilkoblingsdetaljene som det blir opplyst om."),(0,i.kt)("li",{parentName:"ol"},"Du som er lokal tjenesteier for DF\xd8 m\xe5 kontakte DF\xd8 om API-et. Vanligvis gj\xf8res dette ved \xe5 sende en e-post til ",(0,i.kt)("a",{parentName:"li",href:"mailto:integrasjon@dfo.no"},"integrasjon@dfo.no")," med:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Be om \xe5 f\xe5 API-n\xf8kkel som gir full tilgang til din institusjons data i DF\xd8s API-er."),(0,i.kt)("li",{parentName:"ol"},"Send med tilkoblingsdetaljene for publisering av notifikasjoner fra selvbetjeningsportalen. Passordet b\xf8r sendes p\xe5 andre m\xe5ter enn via e-post."))),(0,i.kt)("li",{parentName:"ol"},"N\xe5r du har f\xe5tt API-n\xf8kler, m\xe5 du legge de inn i API manager. (TODO: Lag veileder for dette?)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Logg p\xe5 API manager"),(0,i.kt)("li",{parentName:"ol"},"G\xe5 til ditt DF\xd8-API"),(0,i.kt)("li",{parentName:"ol"},'G\xe5 til siden "meta" TODO'),(0,i.kt)("li",{parentName:"ol"},"Legg inn API-n\xf8klene i feltet ",(0,i.kt)("strong",{parentName:"li"},"value"),', der name-feltet heter "DF\xd8 ansatt", "DF\xd8 stilling", og "DF\xd8 organisasjon", etc.')))),(0,i.kt)("p",null,"API-et og meldingsh\xe5ndtering er n\xe5 satt opp."),(0,i.kt)("h3",{id:"hvordan-verifisere-at-api-et-fungerer"},"Hvordan verifisere at API-et fungerer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Opprett din egen klient (applikasjon) i API manager, om du ikke har dette allerede.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Be om tilgang til API-et.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Godkjenn tilgangen til API-et. Du har n\xe5 f\xe5tt en egen API-n\xf8kkel for din klient.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bruk klientens API-n\xf8kkel, og sjekk at du f\xe5r hentet ut data:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Med curl (husk \xe5 endre det som st\xe5r i uthevet tekst):")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'\ncurl --include -H "X-Gravitee-Api-Key: **API-n\xf8kkel**" https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1/\n\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Med Powershell (husk \xe5 endre det som st\xe5r i uthevet tekst):")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\n$headers = @{\n  'Accept' = 'application/json'\n  'X-Gravitee-Api-Key' = **API-n\xf8kkel**\n}\nInvoke-WebRequest -Headers $headers -Uri \"https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1\"    \n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Hvis alt er ok kan du forvente \xe5 f\xe5 tilbake noe som starter med "HTTP 200" og JSON-data.')))))}k.isMDXComponent=!0}}]);