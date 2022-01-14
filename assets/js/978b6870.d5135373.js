"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[4732],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return v}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),v=n,k=c["".concat(l,".").concat(v)]||c[v]||u[v]||i;return a?r.createElement(k,d(d({ref:t},p),{},{components:a})):r.createElement(k,d({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,d=new Array(i);d[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var s=2;s<i;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3321:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),d=["components"],o={slug:"/datadeling/god-praksis/datakvalitet/datasett/",title:"Beskrivelser av datasett i IntArk"},l=void 0,s={unversionedId:"datadeling/god-praksis/datakvalitet/datasett/index",id:"datadeling/god-praksis/datakvalitet/datasett/index",isDocsHomePage:!1,title:"Beskrivelser av datasett i IntArk",description:"Kildedata m\xe5 beskrives. Her beskrives hvordan du gj\xf8r dette i IntArk.",source:"@site/docs/datadeling/god-praksis/datakvalitet/datasett/index.md",sourceDirName:"datadeling/god-praksis/datakvalitet/datasett",slug:"/datadeling/god-praksis/datakvalitet/datasett/",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/datakvalitet/datasett/",editUrl:"https://github.com/jokim/datadelingsdokumentasjon/tree/master/docs/datadeling/god-praksis/datakvalitet/datasett/index.md",version:"current",frontMatter:{slug:"/datadeling/god-praksis/datakvalitet/datasett/",title:"Beskrivelser av datasett i IntArk"},sidebar:"tutorialSidebar",previous:{title:"Webservice \u2013 hva og hvordan",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/bruk-av-webservice"},next:{title:"Anbefalinger for god datakvalitet",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/datakvalitet/"}},p=[{value:"Endringer fra DCAT-AP-NO",id:"endringer-fra-dcat-ap-no",children:[]},{value:"Maler for beskrivelse av datasett",id:"maler-for-beskrivelse-av-datasett",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kildedata m\xe5 beskrives. Her beskrives hvordan du gj\xf8r dette i IntArk."),(0,i.kt)("p",null,"I utgangspunktet f\xf8lger vi de nasjonale standardene, DCAT-AP-NO versjon 2, i hva og hvordan kildedataene skal beskrives, men med noen tilf\xf8yinger."),(0,i.kt)("p",null,"Se ",(0,i.kt)("a",{parentName:"p",href:"https://data.norge.no/guide/veileder-beskrivelse-av-datasett/"},"Felles datakatalog sin veileder for beskrivelser av datasett")," for en innf\xf8ring i hvordan beskrive datasett."),(0,i.kt)("h2",{id:"endringer-fra-dcat-ap-no"},"Endringer fra DCAT-AP-NO"),(0,i.kt)("p",null,"Den nasjonale standarden har oversikt over hvilke felt som er p\xe5krevd, anbefalte og valgfrie i beskrivelsen av datasett."),(0,i.kt)("p",null,"Felt som er p\xe5krevd i IntArk:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hvis kildedataen er autoritative, skal feltet ",(0,i.kt)("inlineCode",{parentName:"li"},"dqvno:isAuthoritative")," brukes.")),(0,i.kt)("p",null,"TODO: Under utarbeiding."),(0,i.kt)("p",null,"TODO: Lisensiering: Vi b\xf8r alltid sei noko om lisensiering. Spesielt for \xe5pne data, men ogs\xe5 for andre data, sidan dei b\xf8r kunne delast. HAr vi ein passande default-lisens \xe5 henvise til, for meir begrensa data? Til d\xf8mes ",(0,i.kt)("a",{parentName:"p",href:"https://data.norge.no/nlod/no/"},"https://data.norge.no/nlod/no/")),(0,i.kt)("h2",{id:"maler-for-beskrivelse-av-datasett"},"Maler for beskrivelse av datasett"),(0,i.kt)("p",null,"TODO: Mal for dokument du kan legge i API-katalogen for \xe5 beskrive kildedataene til et API."))}c.isMDXComponent=!0}}]);