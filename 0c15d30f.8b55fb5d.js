(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{804:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),b=function(e){var r=c.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=b(e.components);return c.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},m=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(t),m=n,d=l["".concat(a,".").concat(m)]||l[m]||u[m]||o;return t?c.a.createElement(d,i(i({ref:r},p),{},{components:t})):c.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(1),c=t(6),o=(t(0),t(804)),a={id:"queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult"},i={unversionedId:"api/interfaces/queryresult",id:"version-4.2/api/interfaces/queryresult",isDocsHomePage:!1,title:"Interface: QueryResult",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/queryresult.md",slug:"/api/interfaces/queryresult",permalink:"/docs/api/interfaces/queryresult",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/queryresult.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603661655,sidebar_label:"QueryResult",sidebar:"version-4.2/API",previous:{title:"Interface: QueryOrderMap",permalink:"/docs/api/interfaces/queryordermap"},next:{title:"Interface: ReferenceOptions<T, O>",permalink:"/docs/api/interfaces/referenceoptions"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[]},{value:"insertId",id:"insertid",children:[]},{value:"row",id:"row",children:[]},{value:"rows",id:"rows",children:[]}]}],p={rightToc:s};function b(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"QueryResult"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"affectedrows"},"affectedRows"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"affectedRows"),": number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/connections/Connection.ts#L126"}),"packages/core/src/connections/Connection.ts:126"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"insertid"},"insertId"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"insertId"),": number"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/connections/Connection.ts#L127"}),"packages/core/src/connections/Connection.ts:127"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"row"},"row"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"row"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/connections/Connection.ts#L128"}),"packages/core/src/connections/Connection.ts:128"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"rows"},"rows"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"rows"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#dictionary"}),"Dictionary"),"[]"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/connections/Connection.ts#L129"}),"packages/core/src/connections/Connection.ts:129"))))}b.isMDXComponent=!0}}]);