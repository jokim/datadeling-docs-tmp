"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[3417],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),k=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=k(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=k(t),p=a,u=g["".concat(s,".").concat(p)]||g[p]||m[p]||i;return t?r.createElement(u,l(l({ref:n},d),{},{components:t})):r.createElement(u,l({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var k=2;k<i;k++)l[k]=t[k];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return d},default:function(){return g}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={author:["Mathias Meisfjordskar"],description:"En beskrivelse av hvordan UiOs integrasjonsarkitektur ble satt opp, fra 2017.",title:"Teknisk beskrivelse av UiOs integrasjonsarkitektur"},s="Teknisk beskrivelse av UiOs integrasjonsarkitektur",k={unversionedId:"datadeling/community/uio/om-uio-arkitekturmodell",id:"datadeling/community/uio/om-uio-arkitekturmodell",isDocsHomePage:!1,title:"Teknisk beskrivelse av UiOs integrasjonsarkitektur",description:"En beskrivelse av hvordan UiOs integrasjonsarkitektur ble satt opp, fra 2017.",source:"@site/docs/datadeling/community/uio/om-uio-arkitekturmodell.md",sourceDirName:"datadeling/community/uio",slug:"/datadeling/community/uio/om-uio-arkitekturmodell",permalink:"/datadeling-docs-tmp/docs/datadeling/community/uio/om-uio-arkitekturmodell",editUrl:"https://github.com/jokim/datadeling-docs-tmp/tree/gh-pages/docs/datadeling/community/uio/om-uio-arkitekturmodell.md",version:"current",frontMatter:{author:["Mathias Meisfjordskar"],description:"En beskrivelse av hvordan UiOs integrasjonsarkitektur ble satt opp, fra 2017.",title:"Teknisk beskrivelse av UiOs integrasjonsarkitektur"},sidebar:"tutorialSidebar",previous:{title:"UiB sine f\xf8ringer for navngivning",permalink:"/datadeling-docs-tmp/docs/datadeling/community/uib/uib-iga-naming"},next:{title:"UiO sin Canvas-integrasjon",permalink:"/datadeling-docs-tmp/docs/datadeling/community/uio/uio-canvas"}},d=[{value:"Overordnet",id:"overordnet",children:[]},{value:"Modellen",id:"modellen",children:[{value:"Webservice (WS)",id:"webservice-ws",children:[]},{value:"API manager",id:"api-manager",children:[]},{value:"Meldingsk\xf8 (MQ)",id:"meldingsk\xf8-mq",children:[]}]},{value:"Hvordan modellen fungerer",id:"hvordan-modellen-fungerer",children:[{value:"Provisjonering \u2013 Need to Know",id:"provisjonering--need-to-know",children:[]},{value:"Modul\xe6re applikasjoner",id:"modul\xe6re-applikasjoner",children:[]}]},{value:"Sammendrag",id:"sammendrag",children:[]}],m={toc:d};function g(e){var n=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"teknisk-beskrivelse-av-uios-integrasjonsarkitektur"},"Teknisk beskrivelse av UiOs integrasjonsarkitektur"),(0,i.kt)("p",null,"En beskrivelse av hvordan UiOs integrasjonsarkitektur ble satt opp, fra 2017."),(0,i.kt)("p",null,"UiOs integrasjonsarkitektur har implikasjoner for store deler av virksomheten, men mest har den innvirkning p\xe5 IT-tjenester. Her beskrives de ulike arkitekturkomponentene i integrasjonsarkitekturen, uten detaljer rundt de faktiske tjenestene som er realisert for \xe5 underst\xf8tte arkitekturen."),(0,i.kt)("h2",{id:"overordnet"},"Overordnet"),(0,i.kt)("p",null,"Arkitekturen har som overordnet m\xe5l om \xe5 flytte ansvaret for det \xe5 integrere p\xe5 den part som \xf8nsker \xe5 integrere. Tradisjonelt har integrasjoner ofte v\xe6rt realisert ved at de ansvarlige for en datakilde har m\xe5ttet generere filer basert p\xe5 de data de har i kilden, f\xe5r s\xe5 \xe5 distribuere denne filen. P\xe5 grunn av krav fra prosjekt eller applikasjonseier som \xf8nsker data, samt et krav om ikke \xe5 lekke data,\xa0s\xe5 har disse filene blitt skreddersydd for hver nye konsument. Dette er problematisk av flere \xe5rsaker:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ansvaret for \xe5 integrere ligger da hos de ansvarlige for dataene, ikke de som \xf8nsker dem."),(0,i.kt)("li",{parentName:"ul"},"Neglisjerbar gjenbruksmulighet av slik eksporter."),(0,i.kt)("li",{parentName:"ul"},"Etterhvert som behovet for \xe5 integrere flere applikasjoner \xf8ker, s\xe5 \xf8ker kompleksiteten i datakilden."),(0,i.kt)("li",{parentName:"ul"},"Prosjekter eller applikasjonseiere kan ikke l\xf8se integrasjon selv, de er prisgitt planer og kapasitet hos dem som er ansvarlige for datakilden."),(0,i.kt)("li",{parentName:"ul"},"\xc5 flytte filer er utdatert og ineffektiv teknologi som gir d\xe5rlig datakvalitet og brukeropplevelse.")),(0,i.kt)("p",null,"Deler av arkitekturen er organisatoriske grep for \xe5 definere ansvar og sette ned regler som hele virksomheten skal f\xf8lge. Selv de beste IT-tjenestene kan ikke p\xe5se at arkitekturen f\xf8lges \u2013 arkitekturen\xa0m\xe5 representeres i forretningssiden i virksomheten ogs\xe5. Siden utenforst\xe5ende ikke tradisjonelt har hatt tilgang til datakilden, har integrasjoner v\xe6rt forbeholdt de ansvarlige for kilden. For \xe5 endre p\xe5 dette definerer denne arkitekturen styringsregler som p\xe5legger datakildeeiere/systemeiere \xe5 tilby data via \xe5pne grensesnitt.\xa0"),(0,i.kt)("h2",{id:"modellen"},"Modellen"),(0,i.kt)("p",null,"Den overordnede tekniske modellen som ligger til grunn for UiOs integrasjonsarkitektur, er en distribuert modell. Dette betyr at data og ansvar er distribuert i organisasjonen, men liten grad av sentralisering. Det er flere \xe5rsaker til at dette er valgt modell, men prim\xe6rt kommer dette av hvordan virksomheten er organisert.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bildet kan inneholde: gr\xf8nn, linje, bl\xe5, sirkel, parallell.",src:t(3738).Z}),"\nTjenester, applikasjoner og systemer er i stor grad selvstendige og ansvarlige for \xe5 hente de data de trenger selv.\xa0"),(0,i.kt)("p",null,"Modellen er den mest form\xe5lstjenlige \u2013 organisatoriske \u2013\xa0for UiO, men gir ogs\xe5 noen utfordringer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xd8kt risiko for varierende teknologi og grensesnitt foran applikasjoner"),(0,i.kt)("li",{parentName:"ul"},"Ingen sentral oversikt"),(0,i.kt)("li",{parentName:"ul"},"Ingen sentral kontroll"),(0,i.kt)("li",{parentName:"ul"},"Ingen gevinster gjennom sentralisering og stordrift")),(0,i.kt)("p",null,"For \xe5 adressere disse utfordringene er det definert noen styringsregler og st\xf8ttestjenester."),(0,i.kt)("h3",{id:"webservice-ws"},"Webservice (WS)"),(0,i.kt)("p",null,"En webservice er et teknisk grensesnitt som f\xf8lger bestemte bransjenormer. Gjennom UiO:IntArk har et sett med styringsregler blitt vedtatt for \xe5 standardisere hvordan tjenester og applikasjoner tilbyr grensesnitt. Hensikten med dette er \xe5 standardisere der det er hensiktsmessig, uten \xe5 begrense handlingsrom og innovasjon ute blant tjeneste- og applikasjonseiere.\xa0Det foreligger ogs\xe5 en veiledning\xa0om hvordan man vurderer en eksisterende WS eller designer en.\xa0"),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bildet kan inneholde: bl\xe5, linje, diagram.",src:t(1754).Z}),"\nEn kilde tilbyr sine data gjennom en WS. Konsumenter gis muligheten til \xe5 hente de data de trenger."),(0,i.kt)("p",null,"En WS som tilbyr et RESTful API\xa0gir fordeler:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bransjestandard"),(0,i.kt)("li",{parentName:"ul"},"Gjenbrukbar funksjonalitet"),(0,i.kt)("li",{parentName:"ul"},"Fremmer heller enn hemmer innovasjon")),(0,i.kt)("h3",{id:"api-manager"},"API manager"),(0,i.kt)("p",null,"En API manager er en tjeneste som har til ansvar \xe5 kontrollere tilganger til tjenesters WS-er. Det \xe5 implementere full tilgangskontroll til API-er er en anselig ekstrakostnad for applikasjonsforvaltere som skal tilby en WS. Uten tilgangskontroll vil WS-en tilby alle data for alle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bildet kan inneholde: tekst, linje, diagram.",src:t(8944).Z}),"\nAPI manager gir begrenset tilgang til et API. De ulike konsumentene f\xe5r kun tilgang til de delene av API-et som er godkjent gjennom API manager."),(0,i.kt)("p",null,"Tilgangskontroll til hvert enkelt API er en betydelig besparelse for applikasjonsforvaltere som er ansvarlige for WS-er, men det gir ogs\xe5 en forenkling og en besparelse for konsumenter:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bildet kan inneholde: tekst, linje, diagram, parallell.",src:t(7762).Z}),"\nEn konsument forholder seg kun til API GW, mens bak GW rutes trafikken til multiple API-er."),(0,i.kt)("p",null,"Fordi all trafikk mellom WS og konsument g\xe5r gjennom API manager s\xe5 adresserer man flere av utfordringene med den valgte modellen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sentral oversikt over integrasjoner"),(0,i.kt)("li",{parentName:"ul"},"Sentral kontroll over integrasjoner"),(0,i.kt)("li",{parentName:"ul"},"Stordriftsfordeler ved at tilgangskontroll av tjenester sentraliseres")),(0,i.kt)("p",null,"Gitt retningslinjene for hvordan et API skal utformes s\xe5 vil man ogs\xe5 kunne se hvordan data flyter via integrasjonene.\xa0"),(0,i.kt)("p",null,"API manager er tilrettelagt distribuert forvaltning av API-tilganger slik at den organisatoriske modellen etterleves selv om API manager er en sentral komponent. Dette vil si at applikasjonsforvaltere selv forvalter tilganger til API-er og data i API manager.\xa0"),(0,i.kt)("h3",{id:"meldingsk\xf8-mq"},"Meldingsk\xf8 (MQ)"),(0,i.kt)("p",null,"Meldingsk\xf8en \u2013 MQ \u2013 er en tjeneste for \xe5 fortelle om endringer. WS brukes for \xe5 hente data (evt. skrive), men dette l\xf8ser ikke de situasjoner der en applikasjon\xa0skal fortelle at en endring har skjedd. Man kunne skissert en l\xf8sning der applikasjonen skulle sendt endringen til alle WS-er rundt omkring, men dette er ikke generelt nok og det undergraver prinsippet om \xe5 la de som skal integrere, gj\xf8re integrasjonen selv."),(0,i.kt)("p",null,"L\xf8sningen er \xe5 tilby en sentral meldingsk\xf8 der produsenter sender notifikasjoner om endringer p\xe5 sine data. Produsenten vet ingenting om eventuelle konsumenter av disse notifikasjonene og forholder seg kun til MQ.\xa0"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bildet kan inneholde: diagram, linje, teknologi.",src:t(827).Z}),"\nTre kilder sender inn notifikasjoner til MQ. Tre konsumenter henter notifikasjoner. Konsumenten nede til h\xf8yre konsumerer enkelte notifikasjoner fra alle tre produsenter."),(0,i.kt)("p",null,"MQ vil ta ansvar for mye av logistikken rundt notifikasjoner. Hendelses-basert kommunikasjon er komplekst med flere utfordringer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Oversikt over alle k\xf8er og notifikasjoner"),(0,i.kt)("li",{parentName:"ul"},"Tilgang til k\xf8er og notifikasjoner"),(0,i.kt)("li",{parentName:"ul"},"Oppetidskrav og redundans")),(0,i.kt)("p",null,"MQ l\xf8ser i stor grad disse problemene og gj\xf8r at produsenter kan forenkle notifikasjonsutveksling.\xa0"),(0,i.kt)("p",null,"I UiO:IntArk er innholdet i notifikasjoner ogs\xe5 regulert. Notifikasjoner sendes typisk ikke ut uten innhold, men for MQ s\xe5 er notifikasjoner tenkt brukt kun som et varsko p\xe5 at konsumenter skal unders\xf8ke WS for oppdateringer. Det er flere \xe5rsaker til dette, men de viktigste er:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"En notifikasjon blir aldri komplett. Data er sammensatte og en endring p\xe5 et fakultet kan f\xe5 implikasjoner for tilh\xf8righetene til personer tilknyttet fakultetet."),(0,i.kt)("li",{parentName:"ul"},"Datarike notifikasjoner vil m\xe5tte tilgangskontrolleres. Datafattige notifikasjoner kan publiseres n\xe6rmest fritt.")),(0,i.kt)("p",null,"En notifikasjon gjennom MQ vil typisk si noe om at en ",(0,i.kt)("em",{parentName:"p"},"entitet"),"\xa0er endret. Det vil v\xe6re opp til konsumenten \xe5 finne ut\xa0hva som er endret. Notifikasjonen vil gi indikasjon p\xe5 hvilken entitet som har endret en type data, men vil ikke lekke informasjon som kan identifisere en person. Notifikasjonene vil heller ikke si noe om tidligere eller nytt innhold i data som er endret."),(0,i.kt)("h2",{id:"hvordan-modellen-fungerer"},"Hvordan modellen fungerer"),(0,i.kt)("p",null,"Arkitekturen legger opp til \xe5 sentralisere tjenester som er nyttige, som ikke begrenser handlingsrommet til applikasjonsforvaltere eller prosjekter, og som effektiviserer integrasjon p\xe5 UiO. Det er ikke n\xf8dvendigvis slik at alle applikasjoner vil m\xe5tte forholde seg til alle komponenter i arkitekturen, det er styrt av integrasjonsbehovet for applikasjonen."),(0,i.kt)("h3",{id:"provisjonering--need-to-know"},"Provisjonering \u2013 Need to Know"),(0,i.kt)("p",null,"Provisjonering er det \xe5 sende en mengde data fra en applikasjon til en annen. Hvorfor man \xf8nsker \xe5 gj\xf8re dette kan v\xe6re mange, men tradisjonelt har man basert integrasjoner p\xe5 provisjonering fordi integrasjoner har v\xe6rt tunge, filbaserte batch-oppdateringer. Man har laget store filer med komplette datasett, flyttet disse til konsumenten og der sammenligner man den store filen med konsumentens database for \xe5 se etter endringer. Dette er ikke en effektiv m\xe5te \xe5 integrere p\xe5. Isteden kan slik provisjonering v\xe6re hendelsesdrevne:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bildet kan inneholde: diagram, linje, tekst.",src:t(5679).Z}),"\nEn entitet X oppdateres i Kilde. Kilde sender en notifikasjon til MQ om at entitet X er oppdatert. MQ sender en notifikasjon til konsumenter som abonnerer p\xe5 denne typen notifikasjoner om at entitet X er oppdatert. Konsument vet ingenting om hva endringer best\xe5r i, s\xe5 Konsument kontakter API manager for \xe5 f\xe5 tilgang til Kildens WS for \xe5 sp\xf8rre om data om entitet X."),(0,i.kt)("p",null,"Mange applikasjoner, som i dag er baserte p\xe5 gamle integrasjoner med provisjonering, trenger ikke \xe5 provisjonere data i den nye arkitekturen. Likevel er det et behov for provisjonering i de tilfeller der man lager moderne applikasjoner og integrasjoner. Eksempel: N\xe5r en ny person registreres i HR-systemet s\xe5 er ikke HR-systemet ansvarlig for \xe5 utstede en brukerkonto til personen. Dette er IAM-kjernen (tidligere BAS, IdM) ansvarlig for. IAM-kjernen vet ikke at det er registrert en ny person i HR-systemet f\xf8r HR-systemet gir beskjed. IAM-kjernen vil ikke kopiere alle data om personen fra HR-systemet, men den trenger data om personen for \xe5 lage en brukerkonto til vedkommende og da vil IAM-kjernen provisjonere noe data. IAM-kjernen vil beholde oversikt over hvem som er eier for brukerkonti f.eks. Disse eierne er provisjonert fra HR-systemet."),(0,i.kt)("p",null,"Man kan tenke seg et annet eksempel der flyten er lik som i figuren over, men man ikke provisjonerer\xa0\u2013 integrasjonen er basert p\xe5 Need to Know. Forskjellen p\xe5 provisjonering og Need to Know ligger i om konsumenten lagrer kopier av data fra kilden i sine datalagre. Distinksjonen mellom de to er minimal, men generelt skal man fors\xf8ke \xe5 unng\xe5 mellomlagring av data fra et kildesystem og heller hente disse dataene fra kilden ved behov. Av ulike \xe5rsaker kan dette vise seg vanskelig s\xe5 provisjonering vil forekomme ogs\xe5 i den nye arkitekturen."),(0,i.kt)("h4",{id:"forskjell-fra-difis-enotifikasjon"},"Forskjell fra DiFis eNotifikasjon"),(0,i.kt)("p",null,"Selv om ",(0,i.kt)("em",{parentName:"p"},"Need to know")," kan ligne veldig p\xe5 eNotifikasjon-m\xf8nsteret fra DiFis ",(0,i.kt)("a",{parentName:"p",href:"https://doc.difi.no/nasjonal-arkitektur/nab_referanse_arkitekturer_datautveksling/"},"referansearkitektur for datautveksling"),", er det til dels store avvik i m\xf8nstrene:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Need To Know"),(0,i.kt)("th",{parentName:"tr",align:null},"eNotifikasjon"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"F\xe5r tilsendt en notifikasjon.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Konsumenten kan v\xe6re tilstandsl\xf8s, da konsumenten ikke trenger \xe5 ha begrep om hvilke notifikasjoner som er prosessert."),(0,i.kt)("td",{parentName:"tr",align:null},"M\xe5 hente en liste over notifikasjoner.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null),"Konsumenten m\xe5 lagre tilstand, da eNotifikasjon-m\xf8nsteret forutsetter at konsumenter vet hvilke notifikasjoner som er prosessert.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Notifikasjonen inneholder kun nok informasjon til \xe5 identifisere hva som har endret seg.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null),"Konsumenten m\xe5 utf\xf8re ",(0,i.kt)("a",{parentName:"td",href:"https://doc.difi.no/nasjonal-arkitektur/nab_referanse_arkitekturer_datautveksling/#_eoppslag_generelt_arkitekturm%C3%B8nster"},"eOppslag")," mot kildesystem f\xf8r det kan avgj\xf8res om det skal utf\xf8res en operasjon."),(0,i.kt)("td",{parentName:"tr",align:null},"Notifikasjonen inneholder informasjon om hva som har endret seg, og en identifikator til et ",(0,i.kt)("em",{parentName:"td"},"hendelsesdokument")," som inneholder endrede data.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null),"eNotifikasjonen b\xe6rer nok data til \xe5 avgj\xf8re om det skal utf\xf8res en operasjon.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Rekkef\xf8lgen notifikasjoner ankommer i er ikke garantert \xe5 v\xe6re velordnet og sekvensiell."),(0,i.kt)("td",{parentName:"tr",align:null},"Rekkef\xf8lgen notifikasjoner ankommer i er alltid velordnet og sekvensiell.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"Ingen autorisasjon er n\xf8dvendig da notifikasjoner kun har informasjon om ",(0,i.kt)("em",{parentName:"td"},"hva")," som er endret. Produsenter har ikke begrep om hvem som er konsumenter."),(0,i.kt)("td",{parentName:"tr",align:null},"Autorisasjon kan v\xe6re n\xf8dvendig da notifikasjoner kan inneholde data.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null),"I tilfeller der autorisasjon er n\xf8dvendig, m\xe5 produsenter ha et begrep om hvem som skal kunne konsumere hvilke data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"Need To Know er en implementasjon av ",(0,i.kt)("a",{parentName:"td",href:"https://www.enterpriseintegrationpatterns.com/patterns/conversation/FireAndForget.html"},"Fire And Forget")," og\xa0",(0,i.kt)("a",{parentName:"td",href:"https://doc.difi.no/nasjonal-arkitektur/nab_referanse_arkitekturer_datautveksling/#_eoppslag_generelt_arkitekturm%C3%B8nster"},"eOppslag")," m\xf8nstrene."),(0,i.kt)("td",{parentName:"tr",align:null},"eNotifikasjon er en implementasjon av ",(0,i.kt)("a",{parentName:"td",href:"https://martinfowler.com/eaaDev/EventSourcing.html"},"Event Sourcing")," m\xf8nsteret.")))),(0,i.kt)("h3",{id:"modul\xe6re-applikasjoner"},"Modul\xe6re applikasjoner"),(0,i.kt)("p",null,"Integrasjonsarkitekturen legger ogs\xe5 opp til mer modul\xe6re tjenester som er satt sammen av ulike applikasjoner (eller deler av applikasjoner). Under\xa0",(0,i.kt)("em",{parentName:"p"},"Provisjonering"),"\xa0beskrives en dataflyt mellom to applikasjoner fordi konsumenten skal agere p\xe5 endringer i produsentens data. Man kan tenke seg scenarier der man ikke anser tjenester eller applikasjoner som s\xe5 separate, men heller at applikasjoner\xa0",(0,i.kt)("em",{parentName:"p"},"sammen"),"\xa0utgj\xf8r en tjeneste."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bildet kan inneholde: tekst, linje, diagram.",src:t(7431).Z}),"\nIsteden for \xe5 flytte data fra Kilde til sine interne datalager s\xe5 kommuniserer tjenesten med Kilde i sanntid ved behov."),(0,i.kt)("p",null,"Et eksempel p\xe5 en produsent som vil v\xe6re attraktiv for mange tjenester er e-posttjenesten. Ved \xe5 integrere e-posttjensten i f.eks. l\xe6ringsplatformen f\xe5r studenter en bedre og mer innholdsrik arbeidsflate. LMS-et kan benytte e-post- og kalendertjenesten for meldinger mellom studenter og forelesere, eller kollokvie- og\xa0undervisningsgrupper. Mer tradisjonell integrasjon ved \xe5 kopiere data vil gi d\xe5rligere brukeropplevelse og kompleksitetsproblemer ved en eventuell synkronisering mellom LMS-et og e-posttjenesten."),(0,i.kt)("h2",{id:"sammendrag"},"Sammendrag"),(0,i.kt)("p",null,"UiOs integrasjonsarkitektur er en standardisering av prosess og teknikk for \xe5 effektivisere integrasjoner. Standardisering er, som kjent, et tveegget sverd. Det str\xf8mlinjeformer slik at aktiviteter blir mer effektive, men str\xf8mlinjeformingen\xa0hindrer ogs\xe5 innovasjon og handlingsrom. Tanken bak UiO:IntArk har hele tiden v\xe6rt \xe5 standardisere der det er form\xe5lstjenlig og la felt som krever selvr\xe5derett v\xe6re opp til applikasjonsforvaltere, utviklere og prosjekter.\xa0",(0,i.kt)("em",{parentName:"p"},"Hva"),"man \xf8nsker \xe5 integrere er opp til den enkelte,\xa0",(0,i.kt)("em",{parentName:"p"},"hvordan"),"\xa0man integrerer stilles det krav til."),(0,i.kt)("p",null,"Det \xe5 basere arkitekturen p\xe5 bransjestandard teknologi og inkludere de organisatoriske utfordringene som noe arkitekturen skal adressere har resultert i en arkitektur som posisjonerer UiO i forhold til bransjen, men ikke p\xe5 bekostning av autonomi. Arkitekturen vil kunne erstatte protokoller og tjenester etterhvert som bransjen utvikler seg, men uten \xe5 m\xe5tte omskrive hele arkitekturen. Store systemer kan oppst\xe5 og legges ned uten at arkitekturen p\xe5virkes nevneverdig."))}g.isMDXComponent=!0},3738:function(e,n,t){n.Z=t.p+"assets/images/IA-distribuert-modell-07d86417c6ad644f7a7eb3a856bd53b6.png"},8944:function(e,n,t){n.Z=t.p+"assets/images/api-tilgang-835639dd5dd1efdbfe267a8ed5868bb2.png"},7762:function(e,n,t){n.Z=t.p+"assets/images/api-tilgang2-63ec649013a570f748f2341e0c1b95e3.png"},7431:function(e,n,t){n.Z=t.p+"assets/images/datalager-7a148c7f255482d72e1b8b8a14c37025.png"},827:function(e,n,t){n.Z=t.p+"assets/images/mq-flyt-d61a42ce065ae6cd07265e1b786e6561.png"},1754:function(e,n,t){n.Z=t.p+"assets/images/ws-forklart-cf592fdf5080d788babbbc4fed9e21a9.png"},5679:function(e,n,t){n.Z=t.p+"assets/images/ws-mq-sirkel-4bd045e962bb27a031ce3cb8a351aca0.png"}}]);