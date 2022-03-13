"use strict";(self.webpackChunkprod=self.webpackChunkprod||[]).push([[5647],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),v=r,f=c["".concat(l,".").concat(v)]||c[v]||p[v]||i;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9412:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),s=["components"],o={slug:"/datadeling/god-praksis/datakvalitet/datasett/",title:"Beskrivelser av datasett"},l=void 0,d={unversionedId:"datadeling/god-praksis/datakvalitet/datasett",id:"datadeling/god-praksis/datakvalitet/datasett",title:"Beskrivelser av datasett",description:"Kildedata m\xe5 beskrives. Her beskrives hvordan du gj\xf8r dette i fellestjenesten.",source:"@site/docs/datadeling/god-praksis/datakvalitet/datasett.md",sourceDirName:"datadeling/god-praksis/datakvalitet",slug:"/datadeling/god-praksis/datakvalitet/datasett/",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/datakvalitet/datasett/",editUrl:"https://github.com/jokim/datadelingsdokumentasjon/tree/master/docs/datadeling/god-praksis/datakvalitet/datasett.md",tags:[],version:"current",frontMatter:{slug:"/datadeling/god-praksis/datakvalitet/datasett/",title:"Beskrivelser av datasett"},sidebar:"tutorialSidebar",previous:{title:"Anbefalinger for god datakvalitet",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/datakvalitet/"},next:{title:"Informasjonsforvaltning",permalink:"/datadeling-docs-tmp/docs/datadeling/god-praksis/informasjonsforvaltning/api-tilganger"}},u={},p=[{value:"Hvordan beskrive datasett i fellestjenesten?",id:"hvordan-beskrive-datasett-i-fellestjenesten",level:2}],c={toc:p};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kildedata m\xe5 beskrives. Her beskrives hvordan du gj\xf8r dette i fellestjenesten."),(0,i.kt)("p",null,"Vi anbefaler \xe5 f\xf8lge de nasjonale standardene,\n",(0,i.kt)("a",{parentName:"p",href:"https://data.norge.no/guide/veileder-beskrivelse-av-datasett/"},"DCAT-AP-NO"),"\nversjon 2, for \xe5 beskrive kildedata. Se ",(0,i.kt)("a",{parentName:"p",href:"https://data.norge.no/guide/veileder-beskrivelse-av-datasett/"},"Felles datakatalog sin veileder for\nbeskrivelser av\ndatasett")," for en\ninnf\xf8ring."),(0,i.kt)("p",null,"Den nasjonale standarden har oversikt over hvilke felt som er p\xe5krevd,\nanbefalte og valgfrie i beskrivelsen av datasett. I fellestjenesten anbefaler\nvi spesielt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hvis kildedataen er autoritative, skal feltet ",(0,i.kt)("inlineCode",{parentName:"li"},"dqvno:isAuthoritative")," brukes.\n(I DCAT-AP-NO er dett bare valgfritt).")),(0,i.kt)("h2",{id:"hvordan-beskrive-datasett-i-fellestjenesten"},"Hvordan beskrive datasett i fellestjenesten?"),(0,i.kt)("p",null,"Dagens API-katalog st\xf8tter ikke DCAT sine filformat ut av boksen. Vi anbefaler\nderfor \xe5 bruke tjenester som data.norge.no, og lenke til denne fra\nAPI-katalogen. Datasett kan ogs\xe5 beskrives i et vanlig, enkelt dokument p\xe5\nAPI-ets dokumentasjonsomr\xe5de i API-katalogen."))}v.isMDXComponent=!0}}]);