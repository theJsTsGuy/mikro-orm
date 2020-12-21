(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||c;return r?a.a.createElement(u,i(i({ref:t},s),{},{components:r})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},478:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(1086)),o={id:"mysqlexceptionconverter",title:"Class: MySqlExceptionConverter",sidebar_label:"MySqlExceptionConverter"},i={unversionedId:"api/classes/mysqlexceptionconverter",id:"version-4.2/api/classes/mysqlexceptionconverter",isDocsHomePage:!1,title:"Class: MySqlExceptionConverter",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/mysqlexceptionconverter.md",slug:"/api/classes/mysqlexceptionconverter",permalink:"/docs/4.2/api/classes/mysqlexceptionconverter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/mysqlexceptionconverter.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1608573748,sidebar_label:"MySqlExceptionConverter",sidebar:"version-4.2/API",previous:{title:"Class: MySqlDriver",permalink:"/docs/4.2/api/classes/mysqldriver"},next:{title:"Class: MySqlPlatform",permalink:"/docs/4.2/api/classes/mysqlplatform"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"convertException",id:"convertexception",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"ExceptionConverter"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"MySqlExceptionConverter")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"convertexception"},"convertException"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"convertException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"exception"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error")," & ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"),"): DriverException"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/mysql-base/src/MySqlExceptionConverter.ts#L15"}),"packages/mysql-base/src/MySqlExceptionConverter.ts:15"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.mysql.com/doc/refman/5.7/en/error-messages-client.html"}),"http://dev.mysql.com/doc/refman/5.7/en/error-messages-client.html")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.mysql.com/doc/refman/5.7/en/error-messages-server.html"}),"http://dev.mysql.com/doc/refman/5.7/en/error-messages-server.html")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractMySQLDriver.php"}),"https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractMySQLDriver.php")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"exception")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error")," & ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#dictionary"}),"Dictionary"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," DriverException"))}l.isMDXComponent=!0}}]);