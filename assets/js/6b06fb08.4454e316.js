"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[7419],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),k=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=k(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=k(n),p=a,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var k=2;k<l;k++)o[k]=n[k];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return k},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={slug:"/datadeling/om/komponenter/",title:"Komponentene i fellestjenesten for datadeling"},s=void 0,k={unversionedId:"datadeling/om/komponenter",id:"datadeling/om/komponenter",title:"Komponentene i fellestjenesten for datadeling",description:"En funksjonell, overordnet beskrivelse av komponentene som fellestjenesten for",source:"@site/docs/datadeling/om/komponenter.md",sourceDirName:"datadeling/om",slug:"/datadeling/om/komponenter/",permalink:"/datadeling-docs-tmp/docs/datadeling/om/komponenter/",editUrl:"https://github.com/jokim/datadelingsdokumentasjon/tree/master/docs/datadeling/om/komponenter.md",tags:[],version:"current",frontMatter:{slug:"/datadeling/om/komponenter/",title:"Komponentene i fellestjenesten for datadeling"},sidebar:"tutorialSidebar",previous:{title:"Bakgrunnen for Fellestjenesten for Datadeling",permalink:"/datadeling-docs-tmp/docs/datadeling/om/bakgrunn/"},next:{title:"Konsekvenser med fellestjenesten for Datadeling",permalink:"/datadeling-docs-tmp/docs/datadeling/om/konsekvenser"}},m={},d=[{value:"Sentral oversikt over data - API-katalog",id:"sentral-oversikt-over-data---api-katalog",level:2},{value:"Sentral kontroll p\xe5 datadeling - API manager",id:"sentral-kontroll-p\xe5-datadeling---api-manager",level:2},{value:"Kontroll over data - API gateway",id:"kontroll-over-data---api-gateway",level:2},{value:"Meldingsk\xf8",id:"meldingsk\xf8",level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"En funksjonell, overordnet beskrivelse av komponentene som fellestjenesten for\ndatadeling best\xe5r av. Se sidene om ",(0,l.kt)("a",{parentName:"p",href:"/docs/datadeling/teknisk-plattform"},"teknisk\nplattform")," for mer detaljer om hvordan\nkomponentene er implementert."),(0,l.kt)("h2",{id:"sentral-oversikt-over-data---api-katalog"},"Sentral oversikt over data - API-katalog"),(0,l.kt)("p",null,"Institusjonen trenger oversikt over sine API og data, og trenger derfor en\nAPI-katalog. Denne skal b\xe5de hjelpe institusjonen \xe5 ha kontroll og oversikt\nover sine data, men skal ogs\xe5 hjelpe konsumenter med \xe5 finne frem til data."),(0,l.kt)("p",null,"En API-katalog m\xe5 blant annet st\xf8tte:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Datatilbyder kan registrere sitt API i en sentral katalog"),(0,l.kt)("li",{parentName:"ul"},"Datatilbyder kan beskrive sitt API og sine data i en sentral katalog"),(0,l.kt)("li",{parentName:"ul"},"At konsumenter kan selv lete etter relevante API")),(0,l.kt)("p",null,"\xc5 sentralisere forvaltningen av API-er gir noen fordeler:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ett sted \xe5 forvalte",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bestilling av flere tilganger i flere API-er kun ett sted"),(0,l.kt)("li",{parentName:"ul"},"forvaltning av tilganger i flere kilder kun ett sted"))),(0,l.kt)("li",{parentName:"ul"},"Sentral oversikt over dataflyt",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bedre sikkerhet"),(0,l.kt)("li",{parentName:"ul"},"oversikt over hele virksomheten"))),(0,l.kt)("li",{parentName:"ul"},"Ett punkt for integrasjon",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"konsumenter m\xe5 ikke lete etter ulike API-er"),(0,l.kt)("li",{parentName:"ul"},"konsumenter kan integrere en gang, ulike kilder gir tilgang")))),(0,l.kt)("h2",{id:"sentral-kontroll-p\xe5-datadeling---api-manager"},"Sentral kontroll p\xe5 datadeling - API manager"),(0,l.kt)("p",null,"Institusjonen m\xe5 ha kontroll p\xe5 hvem som har tilgang til hvilke data. Dette\ngjelder spesielt data med personopplysninger. For \xe5 oppfylle dette kravet, har\nvi behov for en tjeneste der du kan forvalte hvem som har tilganger til dine\ndata. Konsumenter vil ogs\xe5 kunne forvalte sine tilganger her."),(0,l.kt)("p",null,"API manager m\xe5 st\xf8tte:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sentral oversikt over hvem som har tilgang til hvilke API og data"),(0,l.kt)("li",{parentName:"ul"},"Konsument kan selv s\xf8ke om tilgang til data fra et API"),(0,l.kt)("li",{parentName:"ul"},"Datatilbyder kan godkjenne/avsl\xe5 s\xf8knad om tilgang til sine data"),(0,l.kt)("li",{parentName:"ul"},"Datatilbyder har oversikt over hvem som har tilgang til sine data"),(0,l.kt)("li",{parentName:"ul"},"Datatilbyder kan trekke tilbake tilgang til sine data"),(0,l.kt)("li",{parentName:"ul"},"Datatilbyder kan styre hvilke deler av sitt API konsumenter f\xe5r tilgang til")),(0,l.kt)("h2",{id:"kontroll-over-data---api-gateway"},"Kontroll over data - API gateway"),(0,l.kt)("p",null,"Tjenester som tilbyr data m\xe5 v\xe6re sikre p\xe5 at bare autoriserte konsumenter f\xe5r\ntilgang til dataene. Dette kan oppfylles av en ",(0,l.kt)("em",{parentName:"p"},"API gateway"),", som st\xe5r mellom\ndatatilbyders API og konsumenten, og som utf\xf8rer autentisering og\ntilgangskontroll. Du kan se p\xe5 en ",(0,l.kt)("em",{parentName:"p"},"API gateway")," som en smart proxy."),(0,l.kt)("p",null,"API gateway m\xe5 st\xf8tte:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Konsumenter m\xe5 autentiseres.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Konsumenters foresp\xf8rsler m\xe5 tilgangskontrolleres opp mot hva de er blitt\nautorisert for i API manager.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Datatilbyder m\xe5 f\xe5 oversikt over hvem som har hentet ut hvilke data."))),(0,l.kt)("h2",{id:"meldingsk\xf8"},"Meldingsk\xf8"),(0,l.kt)("p",null,'Sluttbrukerne har en forventning om at tjenester er oppdaterte med relevante\ndata, og at en ikke trenger \xe5 for eksempel "vente til neste morgen" f\xf8r\nendringer er tr\xe5dd i kraft. Dette gir behov for en mer effektiv overf\xf8ring av\nkildedata til konsumenter - fellestjenesten anbefaler integrasjonsm\xf8nsteret\n"hendelsesbasert provisjonering" for \xe5 dekke dette behovet. Dette krever bruk\nav en meldingsk\xf8.'),(0,l.kt)("p",null,"Produsenten skal ikke trenger \xe5 forholde seg til hvilke konsumenter som\nabonnerer p\xe5 meldingene. Dette tar meldingsk\xf8en seg av."),(0,l.kt)("p",null,"For \xe5 gj\xf8re hendelsesbasert provisjonering enklere, m\xe5 IntArk tilby en\nsentralisert meldingsk\xf8 som datatilbydere kan publisere til, og konsumenter\nabonnere p\xe5 meldinger fra."),(0,l.kt)("p",null,"Meldingsk\xf8en m\xe5 oppfyller behovene:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Datatilbydere kan registere sin tjeneste som produsent av notifikasjoner."),(0,l.kt)("li",{parentName:"ul"},"Datatilbydere kan sende notifikasjoner - tynne meldinger - til meldingsk\xf8en."),(0,l.kt)("li",{parentName:"ul"},"Konsumenter kan abonnere og lytte p\xe5 meldinger fra de produsentene de \xf8nsker."),(0,l.kt)("li",{parentName:"ul"},"Konsumenter m\xe5 selv kunne lete etter relevante tjenester med meldinger"),(0,l.kt)("li",{parentName:"ul"},"Konsumenter m\xe5 selv kunne s\xf8ke om tilgang til meldinger fra en tjeneste"),(0,l.kt)("li",{parentName:"ul"},"Datatilbydere m\xe5 kunne godkjenne/avsl\xe5 s\xf8knad om tilgang til sine meldinger\nfra konsumenter.")),(0,l.kt)("p",null,"Meldingsk\xf8en er prim\xe6rt ment for integrasjoner som f\xf8lger fellestjenestens\nanbefalte integrasjonsm\xf8nstre. Fellestjenesten legger ikke f\xf8ringer p\xe5 hva\ninstitusjonen gj\xf8r med eventuelt andre meldingsk\xf8er. Institusjonene kan likevel\nogs\xe5 bruke fellestjenestens meldingsk\xf8er for andre form\xe5l."))}p.isMDXComponent=!0}}]);