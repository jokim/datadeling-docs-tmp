"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[3485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=d(n),k=r,c=f["".concat(l,".").concat(k)]||f[k]||u[k]||i;return n?a.createElement(c,s(s({ref:t},p),{},{components:n})):a.createElement(c,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={slug:"/datadeling/god-praksis/datakvalitet/datasett/",title:"Beskrivelser av datasett"},l=void 0,d={unversionedId:"datadeling/god-praksis/informasjonsforvaltning/datasett",id:"datadeling/god-praksis/informasjonsforvaltning/datasett",title:"Beskrivelser av datasett",description:"Kildedata m\xe5 beskrives. Her beskrives hvordan du gj\xf8r dette i fellestjenesten.",source:"@site/docs/datadeling/god-praksis/informasjonsforvaltning/datasett.md",sourceDirName:"datadeling/god-praksis/informasjonsforvaltning",slug:"/datadeling/god-praksis/datakvalitet/datasett/",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/datakvalitet/datasett/",editUrl:"https://github.com/jokim/datadelingsdokumentasjon/tree/master/docs/datadeling/god-praksis/informasjonsforvaltning/datasett.md",tags:[],version:"current",frontMatter:{slug:"/datadeling/god-praksis/datakvalitet/datasett/",title:"Beskrivelser av datasett"},sidebar:"tutorialSidebar",previous:{title:"Anbefalinger for god datakvalitet",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/datakvalitet/"},next:{title:"Integrasjonsm\xf8nstre i fellestjenesten for Datadeling",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/integrasjonsmonster/"}},p={},u=[{value:"Hvordan beskrive datasett i fellestjenesten?",id:"hvordan-beskrive-datasett-i-fellestjenesten",level:2}],f={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kildedata m\xe5 beskrives. Her beskrives hvordan du gj\xf8r dette i fellestjenesten."),(0,i.kt)("p",null,"Vi anbefaler \xe5 f\xf8lge de nasjonale standardene,\n",(0,i.kt)("a",{parentName:"p",href:"https://data.norge.no/guide/veileder-beskrivelse-av-datasett/"},"DCAT-AP-NO"),"\nversjon 2, for \xe5 beskrive kildedata. Se ",(0,i.kt)("a",{parentName:"p",href:"https://data.norge.no/guide/veileder-beskrivelse-av-datasett/"},"Felles datakatalog sin veileder for\nbeskrivelser av\ndatasett")," for en\ninnf\xf8ring."),(0,i.kt)("p",null,"Den nasjonale standarden har oversikt over hvilke felt som er p\xe5krevd,\nanbefalte og valgfrie i beskrivelsen av datasett. I fellestjenesten anbefaler\nvi spesielt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hvis kildedataen er autoritative, skal feltet ",(0,i.kt)("inlineCode",{parentName:"p"},"dqvno:isAuthoritative")," brukes.\n(I DCAT-AP-NO er dett bare valgfritt).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lisensiering er ",(0,i.kt)("em",{parentName:"p"},"sterkt anbefalt")," \xe5 si noe om, da det gj\xf8r det enklere for\nkonsumentene \xe5 bruke dataene riktig."))),(0,i.kt)("h2",{id:"hvordan-beskrive-datasett-i-fellestjenesten"},"Hvordan beskrive datasett i fellestjenesten?"),(0,i.kt)("p",null,"Dagens API-katalog st\xf8tter ikke DCAT sine filformat ut av boksen. Det er to\nm\xe5ter \xe5 beskrive datasettet i API-katalogen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Beskriv datasettet p\xe5 ",(0,i.kt)("a",{parentName:"p",href:"https://data.norge.no"},"data.norge.no")," eller\ntilsvarende tjenester, og lenk til denne fra API-katalogen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Beskriv datasettet i et vanlig dokument under API-et i API-katalogen."))))}k.isMDXComponent=!0}}]);