"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[9549],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(p,".").concat(u)]||d[u]||k[u]||i;return t?r.createElement(m,l(l({ref:n},g),{},{components:t})):r.createElement(m,l({ref:n},g))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3675:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return k}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),l=["components"],o={description:"Hvordan du som konsument kan s\xf8ke om tilgang til et API i Gravitee.",title:"F\xe5 tilgang til et API"},p="F\xe5 tilgang til et API",s={unversionedId:"datadeling/veiledere/api-manager/api-manager-be-om-tilgang",id:"datadeling/veiledere/api-manager/api-manager-be-om-tilgang",title:"F\xe5 tilgang til et API",description:"Hvordan du som konsument kan s\xf8ke om tilgang til et API i Gravitee.",source:"@site/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang.md",sourceDirName:"datadeling/veiledere/api-manager",slug:"/datadeling/veiledere/api-manager/api-manager-be-om-tilgang",permalink:"/datadeling-docs-tmp/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang",editUrl:"https://github.com/jokim/datadelingsdokumentasjon/tree/master/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang.md",tags:[],version:"current",frontMatter:{description:"Hvordan du som konsument kan s\xf8ke om tilgang til et API i Gravitee.",title:"F\xe5 tilgang til et API"},sidebar:"tutorialSidebar",previous:{title:"Web Services for Dummies",permalink:"/datadeling-docs-tmp/docs/datadeling/veiledere/annet/anskaffelse/webservicefordummies"},next:{title:"Registrere et enkelt API",permalink:"/datadeling-docs-tmp/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api"}},g={},k=[{value:"Logg inn",id:"logg-inn",level:3},{value:"Opprette en enkel applikasjon",id:"opprette-en-enkel-applikasjon",level:3},{value:"Opprett en applikasjon som kan abbonnere p\xe5 JWT og OAuth2-planer",id:"opprett-en-applikasjon-som-kan-abbonnere-p\xe5-jwt-og-oauth2-planer",level:3},{value:"S\xf8ke om tilgang etter at man har opprettet en applikasjon",id:"s\xf8ke-om-tilgang-etter-at-man-har-opprettet-en-applikasjon",level:3},{value:"Legge til flere eiere for en applikasjon",id:"legge-til-flere-eiere-for-en-applikasjon",level:3},{value:"Finne API-n\xf8kkel",id:"finne-api-n\xf8kkel",level:3}],d={toc:k};function u(e){var n=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"f\xe5-tilgang-til-et-api"},"F\xe5 tilgang til et API"),(0,i.kt)("p",null,"Hvordan du som konsument kan s\xf8ke om tilgang til et API i Gravitee."),(0,i.kt)("h3",{id:"logg-inn"},"Logg inn"),(0,i.kt)("p",null,"F\xf8lg linken til ",(0,i.kt)("a",{parentName:"p",href:"https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/oversikt.html"},(0,i.kt)("strong",{parentName:"a"},"Oversikt over den tekniske plattformen"))," (URL) p\xe5 UiO sine sider. G\xe5 til API manager for din institusjon, og trykk p\xe5 LOGIN \xf8verst til h\xf8yre. Det kommer opp et pop-up-vindu hvor du blir bedt om \xe5 logge inn med Feide. Om innloggingsvinduet ikke dukker opp sjekk om du har sperret for pop-up-vinduer."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(1710).Z},(0,i.kt)("img",{loading:"lazy",alt:"Innloggingsvindu",src:t(4119).Z,width:"1253",height:"636"}))),(0,i.kt)("h3",{id:"opprette-en-enkel-applikasjon"},"Opprette en enkel applikasjon"),(0,i.kt)("p",null,"Enkle applikasjoner som autentiserer seg ved hjelp av en API-n\xf8kkel. Dette egner seg bra for datadeling internt p\xe5 en institusjon og for utvikling. En API-n\xf8kkel kalles noen ganger for Developer key. API-n\xf8kkelen skal behandles som et passord. Den m\xe5 derfor ikke v\xe6re tilgjengelig for uvedkommende, verken n\xe5r den blir oppbevart eller n\xe5r den blir kopiert."),(0,i.kt)("p",null,'Opprett en applikasjon ved \xe5 trykke p\xe5 brukerikonet \xf8vert til h\xf8yre p\xe5 siden, for s\xe5 \xe5 velge "Applications" i undermenyen. Trykk deretter p\xe5 sirkelen med pluss-tegn. '),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(4373).Z},(0,i.kt)("img",{loading:"lazy",alt:"Opprette ny applikasjon",src:t(2721).Z,width:"506",height:"297"}))),(0,i.kt)("p",null,"Skriv inn navn og beskrivelse av din applikasjon. Her er det viktig \xe5 bruke et godt og beskrivende navn, og en passende og utfyllende beskrivelse. Ta gjerne med lenke til innlogginsside og dokumentasjon i beskrivelsen."),(0,i.kt)("p",null,'I vinduet for Security kan du skrive inn type for ditt API om det er \xf8nskelig, eller velge "SKIP" som setter applikasjonens type til "Simple". '),(0,i.kt)("p",null,'Du kan velge \xe5 enten abonnere p\xe5 API-er n\xe5, eller trykke "SKIP" for \xe5 abonnere p\xe5 API-er senere.'),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(6829).Z},(0,i.kt)("img",{loading:"lazy",alt:"Bildet kan inneholde: tekst, skrift, skjermbilde, programvare, linje.",src:t(5132).Z,width:"1301",height:"966"}))),(0,i.kt)("p",null,'Fullf\xf8r ved \xe5 trykke p\xe5 "CREATE THE APPLICATION". Applikasjonen er n\xe5 registrert i API Manager, og du kan s\xf8ke om tilgang til API-er med denne applikasjonen. Du kan og gi rettigheter til dine kollegaer slik at flere kan s\xf8ke om tilganger, hente ut API-n\xf8kler, se gjennom tilganger og feils\xf8ke.'),(0,i.kt)("h3",{id:"opprett-en-applikasjon-som-kan-abbonnere-p\xe5-jwt-og-oauth2-planer"},"Opprett en applikasjon som kan abbonnere p\xe5 JWT og OAuth2-planer"),(0,i.kt)("p",null,"F\xf8lg samme fremgansgs\xe5te som ved oppretting av enkel applikasjon ovenfor frem til vinduet for Security.  Her m\xe5 man i tillegg registrere en client","_","id. Denne blir ofte autogenerert av OAuth 2 autorisasjon-serveren og kan kopieres derfra. "),(0,i.kt)("p",null,'I tillegg er det lurt \xe5 registrere riktig Type for applikasjonen hvis dette er er noe annet enn "Simple".'),(0,i.kt)("p",null,"Du kan bruke en av:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browser (Angular, React, ...)"),(0,i.kt)("li",{parentName:"ul"},"Web (Java, .Net, ...)"),(0,i.kt)("li",{parentName:"ul"},"Native (iOS, Android, ...)"),(0,i.kt)("li",{parentName:"ul"},"Backend-to-Backend")),(0,i.kt)("p",null,"(TODO: se p\xe5 ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-registration-1_0.html"},"OpenID Connect Dynamic Client Registration"),". )"),(0,i.kt)("h3",{id:"s\xf8ke-om-tilgang-etter-at-man-har-opprettet-en-applikasjon"},"S\xf8ke om tilgang etter at man har opprettet en applikasjon"),(0,i.kt)("p",null,"Samme applikasjon kan gjerne abonnere p\xe5 flere API, samt flere planer for samme API."),(0,i.kt)("p",null,'Ved \xe5 trykke p\xe5 knappen "API GALLERY" \xf8vert til venstre p\xe5 siden kan du s\xf8ke opp API du vil abonnere p\xe5.'),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(7892).Z},(0,i.kt)("img",{loading:"lazy",alt:"API portal",src:t(9089).Z,width:"1306",height:"678"}))),(0,i.kt)("p",null,'Velg API og deretter \xf8nsket plan. Du s\xf8ker om tilgang ved \xe5 trykke p\xe5 "SUBSCRIBE". '),(0,i.kt)("p",null,'Sjekk at riktig applikasjon er valgt, og endre om det ikke er det. Skriv inn en kommentar med forklaring om hvorfor du \xf8nsker tilgang. Har det v\xe6rt m\xf8ter, sak, bestilling e.l. i forbindelese med integrasjonen legg gjerne ved referanser til dette, og gjerne en e-postadresse (f.eks. til e-post-liste) som du kan kontaktes p\xe5.\nTil slutt, trykk p\xe5 "SUBSCRIBE" igjen.\nForesp\xf8rselen vil bli sendt til dataeier for godkjenning.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:t(5439).Z,width:"1329",height:"1146"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:t(730).Z,width:"1326",height:"869"})),(0,i.kt)("h3",{id:"legge-til-flere-eiere-for-en-applikasjon"},"Legge til flere eiere for en applikasjon"),(0,i.kt)("p",null,'G\xe5 til applikasjonen du vil legge til eller fjerne enten eiere eller brukere fra, og trykk deretter p\xe5 "Members" i den venstre sidemenyen.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Bildet kan inneholde: rektangel, font, linje, skjermbilde, programvare.",src:t(9803).Z,width:"1229",height:"714"})),(0,i.kt)("p",null,'Trykk p\xe5 sirkelen med pluss-tegn for \xe5 legge til en ny bruker. S\xf8k opp riktig person, og velg deretter hvorvidt brukeren skal v\xe6re eier ("Owner") eller kun en bruker ("User") som kan se applikasjonen, og velg "ADD".'),(0,i.kt)("p",null,"Eiere kan s\xf8ke om tilgang til API-er p\xe5 vegne av applikasjonen, samt hente ut API-n\xf8kler."),(0,i.kt)("h3",{id:"finne-api-n\xf8kkel"},"Finne API-n\xf8kkel"),(0,i.kt)("p",null,'Etter at tilgang er blitt innvilget kan du se hvilke API og planer du abonnerer p\xe5 under "Subscriptions" i den venstre sidemenyen.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:t(8791).Z,width:"1345",height:"596"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:t(8474).Z,width:"1333",height:"690"})),(0,i.kt)("p",null,'Herfra kan du kopiere API-n\xf8kkelen over krypterte forbindelser. Pass p\xe5 at ingen uvedkommende kan lese n\xf8kkelen der den blir lagret. Om API-n\xf8kkelen er gammel, har kommet p\xe5 avveie eller \xf8nskes byttet, trykk p\xe5 "RENEW API KEY". Det blir da laget en ny n\xf8kkel for API-et. Den gamle n\xf8kkelen vil fortsette \xe5 v\xe6re gyldig i to timer, og vil deretter bli ugydlig.'))}u.isMDXComponent=!0},1710:function(e,n,t){n.Z=t.p+"assets/files/image-20200915143652-1-8ce714c8f8c5a029930debc1e1830d3e.png"},6829:function(e,n,t){n.Z=t.p+"assets/files/image-20200915145345-4-aa229e9a9f31083712321b5e017fe5e5.png"},7892:function(e,n,t){n.Z=t.p+"assets/files/image-20200915150147-1-7bd59f202084172afdfb57c8e2c67e2c.png"},4373:function(e,n,t){n.Z=t.p+"assets/files/image-20200915210106-1-cfb63d04d01be97b4e96d1843eaab0bf.png"},4119:function(e,n,t){n.Z=t.p+"assets/images/image-20200915143652-1-8ce714c8f8c5a029930debc1e1830d3e.png"},5132:function(e,n,t){n.Z=t.p+"assets/images/image-20200915145345-4-aa229e9a9f31083712321b5e017fe5e5.png"},9089:function(e,n,t){n.Z=t.p+"assets/images/image-20200915150147-1-7bd59f202084172afdfb57c8e2c67e2c.png"},5439:function(e,n,t){n.Z=t.p+"assets/images/image-20200915150346-2-7cf938f142a7cc263e76e6c6184313e5.png"},730:function(e,n,t){n.Z=t.p+"assets/images/image-20200915150835-3-f14bde9f7d49d8825bb359e728efc2a4.png"},8791:function(e,n,t){n.Z=t.p+"assets/images/image-20200915151605-4-674a2bd389d4197479d962fd31c01387.png"},8474:function(e,n,t){n.Z=t.p+"assets/images/image-20200915151631-5-6ba9845c074493f558bb09d769c42520.png"},2721:function(e,n,t){n.Z=t.p+"assets/images/image-20200915210106-1-cfb63d04d01be97b4e96d1843eaab0bf.png"},9803:function(e,n,t){n.Z=t.p+"assets/images/image-20210426164906-d34a7bbe1da25b351950d60e4054381f.png"}}]);