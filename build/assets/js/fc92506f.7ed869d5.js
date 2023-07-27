"use strict";(self.webpackChunkkaboomdocs=self.webpackChunkkaboomdocs||[]).push([[6095],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return a?r.createElement(k,n(n({ref:t},u),{},{components:a})):r.createElement(k,n({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<i;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const i={},n="4.2. Arhitektira i implementacija projekta",l={unversionedId:"izvedba-projekta/arhitektura",id:"izvedba-projekta/arhitektura",title:"4.2. Arhitektira i implementacija projekta",description:"4.2.1. Baza podataka",source:"@site/docs/izvedba-projekta/arhitektura.md",sourceDirName:"izvedba-projekta",slug:"/izvedba-projekta/arhitektura",permalink:"/${projectName}/docs/izvedba-projekta/arhitektura",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/izvedba-projekta/arhitektura.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.1. Kori\u0161teni alati i tehnologije",permalink:"/${projectName}/docs/izvedba-projekta/koristeni-alati"},next:{title:"5. Zaklju\u010dak",permalink:"/${projectName}/docs/zakljucak"}},p={},c=[{value:"4.2.1. Baza podataka",id:"421-baza-podataka",level:2},{value:"4.2.2. ViewModel",id:"422-viewmodel",level:2}],u={toc:c},d="wrapper";function s(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"42-arhitektira-i-implementacija-projekta"},"4.2. Arhitektira i implementacija projekta"),(0,o.kt)("h2",{id:"421-baza-podataka"},"4.2.1. Baza podataka"),(0,o.kt)("p",null,"Za bazu podataka koristili smo SQL Server, najvi\u0161e zbog jednostavnosti implementiranja s Entity Framework Core-om te zato \u0161to je najjeftinija opcija na Azure-u. Budu\u0107i da nam je cijela aplikacija Microsoft oriented MsSQL se \u010dinio najboljom opcijom."),(0,o.kt)("h2",{id:"422-viewmodel"},"4.2.2. ViewModel"),(0,o.kt)("p",null,"MVVM arhitektura je ne\u0161to kompliciranija za implementaciju, ve\u0107inom zato \u0161to nije standardna i \u010desto kori\u0161tena kao sto je MVC. Odabrali smo koristiti ViewModele za aplikaciju zbog toga \u0161to bi takav backend bio znatno jednostavniji za povezivanje s frontendom aplikacija drugih platformi, ne samo web-a. Ve\u0107inom smo razmi\u0161ljali u smjeru kreiranja mobilne aplikacije nekad u budu\u0107nosti, a .NET Maui se \u010dini kao odli\u010dan kandidat za takvo ne\u0161to. Upravo za to \u0107e nam MVVM arhitektura uvelike olak\u0161ati budu\u0107e pothvate."),(0,o.kt)("p",null,"Dijagram view modela"))}s.isMDXComponent=!0}}]);