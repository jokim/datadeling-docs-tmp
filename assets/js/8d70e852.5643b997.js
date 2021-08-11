"use strict";(self.webpackChunkdatadeling=self.webpackChunkdatadeling||[]).push([[1525],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=d(t),k=a,u=p["".concat(o,".").concat(k)]||p[k]||m[k]||i;return t?r.createElement(u,l(l({ref:n},g),{},{components:t})):r.createElement(u,l({ref:n},g))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9592:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return g},default:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],s={title:"Sanntidsoppdatering"},o="Sanntidsoppdatering",d={unversionedId:"datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering",id:"datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering",isDocsHomePage:!1,title:"Sanntidsoppdatering",description:"Meldingsk\xf8er kan benyttes til forskjellige form\xe5l, men i utgangspunktet skiller vi mellom tynne og tykke meldinger. Det henviser til om meldingen er informasjonsb\xe6rende, eller om innholdet i meldingen bare er en peker til der informasjonen er \xe5 finne. I UH:IntArk har vi valgt \xe5 g\xe5 for tynne meldinger, slik at mange typer meldinger kan g\xe5 til samme k\xf8en. Granulert tilgangskontroll gj\xf8res i WS. Alternativet (litt satt p\xe5 spissen) er en k\xf8 per meldingstype, per konsument, noe som vil \xf8ke kompleksiteten.",source:"@site/docs/datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering.md",sourceDirName:"datadeling/veiledere/annet/anskaffelse",slug:"/datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering",permalink:"/datadeling-docs-tmp/docs/datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering.md",version:"current",frontMatter:{title:"Sanntidsoppdatering"},sidebar:"tutorialSidebar",previous:{title:"Provisjonering",permalink:"/datadeling-docs-tmp/docs/datadeling/veiledere/annet/anskaffelse/provisjonering"},next:{title:"Trelagsarkitektur",permalink:"/datadeling-docs-tmp/docs/datadeling/veiledere/annet/anskaffelse/trelagsarkitektur"}},g=[],m={toc:g};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sanntidsoppdatering"},"Sanntidsoppdatering"),(0,i.kt)("p",null,"Meldingsk\xf8er kan benyttes til forskjellige form\xe5l, men i utgangspunktet skiller vi mellom tynne og tykke meldinger. Det henviser til om meldingen er informasjonsb\xe6rende, eller om innholdet i meldingen bare er en peker til der informasjonen er \xe5 finne. I UH:IntArk har vi valgt \xe5 g\xe5 for tynne meldinger, slik at mange typer meldinger kan g\xe5 til samme k\xf8en. Granulert tilgangskontroll gj\xf8res i WS. Alternativet (litt satt p\xe5 spissen) er en k\xf8 per meldingstype, per konsument, noe som vil \xf8ke kompleksiteten."),(0,i.kt)("p",null,"Akkurat som med WS, er det aspekter rundt sanntidsoppdatering og meldingsk\xf8 man m\xe5 ta med i betrakningen n\xe5r man skal anskaffe eller integrere."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sanntidsoppdatering er ikke synonymt med meldingsk\xf8. Begrepet brukes om andre teknologier (som RSS, SOAP og Web push), om tjenester som deler datalager eller benytter katalogtjenester i bakkant"),(0,i.kt)("li",{parentName:"ul"},"Det er p\xe5 ingen m\xe5te selvsagt at programvare man anskaffer kommer med st\xf8tte for verken \xe5 sende eller hente meldinger til MQ. Dessuten er det vanligste (n\xe5r funksjonaliteten tilbys) at systemet sender tykke meldinger"),(0,i.kt)("li",{parentName:"ul"},"For \xe5 selv bygge noe som sender ut meldinger ved endring, b\xf8r applikasjonen v\xe6re hendelsesbasert. Dvs. at data sendes (fra bruker/presentasjonslag) gjennom standardiserte API som gj\xf8r at man har kontroll p\xe5 akkurat hvor i databasen/datalageret endring av data skjer henger sammen med hverandre, (og ikke m\xe5 gj\xf8res med logiske valideringer (gjetninger) i database/-lager ut fra tidspunkt eller annet)."),(0,i.kt)("li",{parentName:"ul"},"Sanntidsoppdatering av skytjenester skjer som oftest gjennom at man m\xe5 dytte data til dem gjennom deres WS. Dvs. at konsumentens MQ-klient (som som oftest m\xe5 v\xe6re egenutviklet) m\xe5 hente meldingen fra MQ og poste den til skytjenesten fremfor eget API eller database")),(0,i.kt)("p",null,"Vi har laget meldingsk\xf8agenter for Linux og Windows. Dette er kode som i stor grad kan gjenbrukes. S\xe5 \xe5 egenutvikle en meldingsk\xf8agent er en overkommelig oppgave. Videre er det mulig \xe5 lage tjenester som konverter fra det leverand\xf8ren tilbyr (f.eks. RSS) til v\xe5r meldingsk\xf8. Videre kan det v\xe6re hindre som i hvilken grad det i utgangspunktet tilbys, om hvor enkelt det er \xe5 hente meldinger, og lisensmessige aspekter for i hvilken grad man har lov til \xe5 lage egne integrasjoner. For skytjenester er man ofte helt begrenset til data tilbudt i deres standard API."))}p.isMDXComponent=!0}}]);