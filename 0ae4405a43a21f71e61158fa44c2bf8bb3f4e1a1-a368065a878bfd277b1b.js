(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/uZM":function(e,t,n){e.exports={container:"layout-module--container--3BoYY",content:"layout-module--content--zUuRj"}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function A(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),A()},c.componentDidUpdate=function(){A()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),A()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",l),f}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("I/Z2"),i=n("Wbzz"),c=n("Tgqd"),l=n("aOmW"),s=n.n(l),u=function(){var e=o.data;return a.a.createElement("header",{className:s.a.header},a.a.createElement("h1",null,a.a.createElement(i.Link,{className:s.a.title,to:"/"},e.site.siteMetadata.title," ",a.a.createElement(c.a,null))),a.a.createElement("nav",null,a.a.createElement("div",{className:s.a.navList},a.a.createElement(i.Link,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/"},a.a.createElement("h4",{className:s.a.nav1},"HOME")),a.a.createElement(i.Link,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/blog"},a.a.createElement("h4",{className:s.a.nav2},"BLOG")),a.a.createElement(i.Link,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/about"},a.a.createElement("h4",{className:s.a.nav3},"ABOUT")),a.a.createElement(i.Link,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/projects"},a.a.createElement("h4",{className:s.a.nav4},"PROJECTS")),a.a.createElement(i.Link,{className:s.a.navItem,activeClassName:s.a.activeNavItem,to:"/contact"},a.a.createElement("h4",{className:s.a.nav5},"CONTACT")))))},A=n("St2N"),f=n("rCLJ"),E=n("SxA4"),T=n.n(E),d=function(){var e=A.data;return a.a.createElement("footer",{className:T.a.footer},a.a.createElement("div",{className:T.a.social},a.a.createElement("a",{href:e.site.siteMetadata.social.twitter,rel:"noopener noreferrer",target:"_blank"},a.a.createElement(c.k,null)," Twitter"),a.a.createElement("a",{href:e.site.siteMetadata.social.linkedin,rel:"noopener noreferrer",target:"_blank"},a.a.createElement(c.e,null)," Linked In"),a.a.createElement("a",{href:e.site.siteMetadata.social.github,rel:"noopener noreferrer",target:"_blank"},a.a.createElement(c.c,null)," GitHub"),a.a.createElement("a",{href:e.site.siteMetadata.social.flickr,rel:"noopener noreferrer",target:"_blank"},a.a.createElement(f.a,null)," Flickr"),a.a.createElement("a",{href:e.site.siteMetadata.rssFeedUrl},a.a.createElement(c.i,null)," RSS")),a.a.createElement("div",{className:T.a.copyright},a.a.createElement("p",null,"© Copyright 2020, ",e.site.siteMetadata.author)))},p=(n("sg+I"),n("/uZM")),m=n.n(p);t.a=function(e){return a.a.createElement("div",{className:m.a.container},a.a.createElement("div",{className:m.a.content},a.a.createElement(u,null),e.children),a.a.createElement(d,null))}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var s=o[l];if(!c(s))return!1;var u=e[s],A=t[s];if(!1===(a=n?n.call(r,u,A,s):void 0)||void 0===a&&u!==A)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},"I/Z2":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"FAESEL.COM"}}}}')},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,l=e.title,s=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},Oezq:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREREREREREREREREREREREAAAABEREREQAAAAERERERAAAAAREREREREQABERERERERAAEREREREREAAAAAEREREQAAAAARERERAAAAABEREREAAREREREREQABERERERERAAAAABEREREAAAAAEREREQAAAAAREREREREREREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),l=n("C/va"),s=r.RegExp,u=s,A=s.prototype,f=/a/g,E=/a/g,T=new s(f)!==f;if(n("nh4g")&&(!T||n("eeVq")((function(){return E[n("K0xU")("match")]=!1,s(f)!=f||s(E)==E||"/a/i"!=s(f,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(T?new u(r&&!o?e.source:e,t):u((r=e instanceof s)?e.source:e,r&&o?l.call(e):t),n?this:A,s)};for(var d=function(e){e in s||o(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},p=i(u),m=0;p.length>m;)d(p[m++]);A.constructor=s,s.prototype=A,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},St2N:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Faesel Saeed","social":{"linkedin":"https://www.linkedin.com/in/faesel-saeed-a97b1614","twitter":"https://twitter.com/@faeselsaeed","github":"https://github.com/faesel","flickr":"https://www.flickr.com/photos/faesel/"},"rssFeedUrl":"/rss.xml"}}}}')},SxA4:function(e,t,n){e.exports={footer:"footer-module--footer--cvZzG",social:"footer-module--social--3FH09",copyright:"footer-module--copyright--6g7tT"}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=A(n("q1tI")),i=A(n("17x9")),c=A(n("8+s/")),l=A(n("bmMU")),s=n("v1p5"),u=n("hFT/");function A(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,p,m,h=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(d=h,m=p=function(e){function t(){return E(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),p.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=d.peek,p.rewind=function(){var e=d.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},aOmW:function(e,t,n){e.exports={header:"header-module--header--2NYIJ",title:"header-module--title--2Ml1U",navList:"header-module--nav-list--1ob9s",navItem:"header-module--nav-item---V6P3",activeNavItem:"header-module--active-nav-item--2MbjT",nav1:"header-module--nav1--JJfJG",nav2:"header-module--nav2--14VZG",nav3:"header-module--nav3--2Lbdw",nav4:"header-module--nav4--1JihG",nav5:"header-module--nav5--34Jo4"}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,s,u=r(t),A=r(n);if(u&&A){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=A)return!1;var f=t instanceof Date,E=n instanceof Date;if(f!=E)return!1;if(f&&E)return t.getTime()==n.getTime();var T=t instanceof RegExp,d=n instanceof RegExp;if(T!=d)return!1;if(T&&d)return t.toString()==n.toString();var p=a(t);if((l=p.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,p[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(s=p[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},hIod:function(e,t,n){"use strict";var r=n("iket"),a=n("q1tI"),o=n.n(a),i=n("TJpk"),c=n("Oezq"),l=n.n(c);t.a=function(e){var t=e.pageTitle,n=e.title,a=e.url,c=e.description,s=e.imageUrl,u=e.imageAlt,A=e.type,f=e.datePublished,E=r.data,T={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:E.site.siteMetadata.siteUrl+"/home"},{"@type":"ListItem",position:2,name:"Blog",item:E.site.siteMetadata.siteUrl+"/blog"},{"@type":"ListItem",position:3,name:"Projects",item:E.site.siteMetadata.siteUrl+"/projects"},{"@type":"ListItem",position:4,name:"Contact",item:E.site.siteMetadata.siteUrl+"/contact"}]},d={"@context":"http://schema.org","@type":""+A,description:""+c,image:{"@type":"ImageObject",url:""+s},mainEntityOfPage:{"@type":"WebPage","@id":""+E.site.siteMetadata.siteUrl},inLanguage:"en",name:""+n,headline:""+n,url:""+a,datePublished:""+f,dateModified:""+f,author:{"@type":"Person",name:""+E.site.siteMetadata.author},publisher:{"@type":"Organization",name:""+E.site.siteMetadata.author,logo:{"@type":"ImageObject",url:"https://images.ctfassets.net/wjg1udsw901v/4RI5COhSqeYFCbvzYFeFZW/af52277ab41da56c1be5f72f316befe9/logo.png"}}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Helmet,{title:t+" | "+E.site.siteMetadata.title}),o.a.createElement(i.Helmet,null,o.a.createElement("link",{rel:"icon",href:l.a}),o.a.createElement("meta",{name:"description",content:c}),o.a.createElement("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(T)),"article"===A&&o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:site",contact:E.site.siteMetadata.social.twitterUsername}),o.a.createElement("meta",{name:"twitter:creator",content:E.site.siteMetadata.social.twitterUsername}),o.a.createElement("meta",{name:"twitter:title",content:n}),o.a.createElement("meta",{name:"twitter:description",content:c}),o.a.createElement("meta",{name:"twitter:image",content:s}),o.a.createElement("meta",{property:"og:locale",content:"en_GB"}),o.a.createElement("meta",{property:"og:site_name",content:E.site.siteMetadata.title}),o.a.createElement("meta",{property:"og:title",content:n}),o.a.createElement("meta",{property:"og:url",content:a}),o.a.createElement("meta",{property:"og:description",content:c}),o.a.createElement("meta",{property:"og:image",content:s}),o.a.createElement("meta",{property:"og:image:alt",content:u}),o.a.createElement("meta",{property:"og:type",content:A})))}},iket:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://www.faesel.com","title":"FAESEL.COM","description":"Personal blog of Faesel Saeed","author":"Faesel Saeed","social":{"twitterUsername":"@faeselsaeed"}}}}}')},"sg+I":function(e,t,n){},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),i=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},A=function(e){var t=p(e,c.TAG_NAMES.TITLE),n=p(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return p(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},d=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var s=o[l],u=(0,i.default)({},a[s],r[s]);a[s]=u}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){m(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},R=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,A=e.styleTags,f=e.title,E=e.titleAttributes;O(c.TAG_NAMES.BODY,r),O(c.TAG_NAMES.HTML,a),_(f,E);var T={baseTag:M(c.TAG_NAMES.BASE,n),linkTags:M(c.TAG_NAMES.LINK,o),metaTags:M(c.TAG_NAMES.META,i),noscriptTags:M(c.TAG_NAMES.NOSCRIPT,l),scriptTags:M(c.TAG_NAMES.SCRIPT,u),styleTags:M(c.TAG_NAMES.STYLE,A)},d={},p={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(p[e]=T[e].oldTags)})),t&&t(),s(e,d,p)},b=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=b(e)),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var A=o.indexOf(s);-1!==A&&o.splice(A,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},M=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=N(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),o=b(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){R&&v(R),e.defer?R=y((function(){g(e,(function(){R=null}))})):(g(e),R=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,A=e.title,f=void 0===A?"":A,E=e.titleAttributes;return{base:w(c.TAG_NAMES.BASE,t,r),bodyAttributes:w(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(c.ATTRIBUTE_NAMES.HTML,a,r),link:w(c.TAG_NAMES.LINK,o,r),meta:w(c.TAG_NAMES.META,i,r),noscript:w(c.TAG_NAMES.NOSCRIPT,l,r),script:w(c.TAG_NAMES.SCRIPT,s,r),style:w(c.TAG_NAMES.STYLE,u,r),title:w(c.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,e),defer:p(e,c.HELMET_PROPS.DEFER),encode:p(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,e),linkTags:d(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:d(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:d(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:A(e),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=S}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=0ae4405a43a21f71e61158fa44c2bf8bb3f4e1a1-a368065a878bfd277b1b.js.map