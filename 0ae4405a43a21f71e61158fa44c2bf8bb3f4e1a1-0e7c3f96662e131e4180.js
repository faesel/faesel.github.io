(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/uZM":function(e,t,n){e.exports={container:"layout-module--container--2TGku",content:"layout-module--content--3nIku"}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,A=[];function s(){u=e(A.map((function(e){return e.props}))),E.canUseDOM?t(u):n&&(u=n(u))}var E=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,A=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){A.push(this),s()},c.componentDidUpdate=function(){s()},c.componentWillUnmount=function(){var e=A.indexOf(this);A.splice(e,1),s()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(E,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(E,"canUseDOM",l),E}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("Tgqd"),c=n("aOmW"),l=n.n(c),u=function(){var e=Object(o.useStaticQuery)("3159585216");return a.a.createElement("header",{className:l.a.header},a.a.createElement("span",{className:l.a.title},a.a.createElement(o.Link,{className:l.a.title,to:"/"},e.site.siteMetadata.title," ",a.a.createElement(i.a,null))),a.a.createElement("nav",null,a.a.createElement("div",{className:l.a.navList},a.a.createElement(o.Link,{className:l.a.navItem,activeClassName:l.a.activeNavItem,to:"/"},a.a.createElement("h4",{className:l.a.nav1},"HOME")),a.a.createElement(o.Link,{className:l.a.navItem,activeClassName:l.a.activeNavItem,to:"/blog"},a.a.createElement("h4",{className:l.a.nav2+" pulse"},"BLOG")),a.a.createElement(o.Link,{className:l.a.navItem,activeClassName:l.a.activeNavItem,to:"/about"},a.a.createElement("h4",{className:l.a.nav3},"ABOUT")),a.a.createElement(o.Link,{className:l.a.navItem,activeClassName:l.a.activeNavItem,to:"/projects"},a.a.createElement("h4",{className:l.a.nav4},"PROJECTS")),a.a.createElement(o.Link,{className:l.a.navItem,activeClassName:l.a.activeNavItem,to:"/contact"},a.a.createElement("h4",{className:l.a.nav5},"CONTACT")))))},A=n("rCLJ"),s=n("SxA4"),E=n.n(s),f=function(){var e=Object(o.useStaticQuery)("2833800349");return a.a.createElement("footer",{className:E.a.footer},a.a.createElement("div",{className:E.a.social},a.a.createElement("a",{href:e.site.siteMetadata.social.twitter,rel:"me",target:"_blank"},a.a.createElement(i.l,null)," Twitter"),a.a.createElement("a",{href:e.site.siteMetadata.social.linkedin,rel:"noopener noreferrer",target:"_blank"},a.a.createElement(i.g,null)," Linked In"),a.a.createElement("a",{href:e.site.siteMetadata.social.github,rel:"me",target:"_blank"},a.a.createElement(i.e,null)," GitHub"),a.a.createElement("a",{href:e.site.siteMetadata.social.flickr,rel:"noopener noreferrer",target:"_blank"},a.a.createElement(A.a,null)," Flickr"),a.a.createElement("a",{href:e.site.siteMetadata.rssFeedUrl},a.a.createElement(i.j,null)," RSS")),a.a.createElement("div",{className:E.a.copyright},a.a.createElement("p",null,"© Copyright 2020, ",e.site.siteMetadata.author)))},T=(n("sg+I"),n("/uZM")),p=n.n(T);t.a=function(e){return a.a.createElement("div",{className:p.a.container},a.a.createElement("div",{className:p.a.content},a.a.createElement(u,null),e.children),a.a.createElement(f,null))}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!c(u))return!1;var A=e[u],s=t[u];if(!1===(a=n?n.call(r,A,s,u):void 0)||void 0===a&&A!==s)return!1}return!0}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,l=e.title,u=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},Oezq:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREREREREREREREREREREREAAAABEREREQAAAAERERERAAAAAREREREREQABERERERERAAEREREREREAAAAAEREREQAAAAARERERAAAAABEREREAAREREREREQABERERERERAAAAABEREREAAAAAEREREQAAAAAREREREREREREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},SxA4:function(e,t,n){e.exports={footer:"footer-module--footer--R2bpz",social:"footer-module--social--2HcUH",copyright:"footer-module--copyright--4FyNV"}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n("q1tI")),i=s(n("17x9")),c=s(n("8+s/")),l=s(n("bmMU")),u=n("v1p5"),A=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,d,m,h=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(p=h,m=d=function(e){function t(){return f(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case A.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case A.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case A.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=E(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=E(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},aOmW:function(e,t,n){e.exports={header:"header-module--header--3A712",title:"header-module--title--33kOg",navList:"header-module--nav-list--87D9u",navItem:"header-module--nav-item--1ixk0",activeNavItem:"header-module--active-nav-item--26N0B",nav1:"header-module--nav1--B5KZg",nav2:"header-module--nav2--1f5pf",nav3:"header-module--nav3--2O6Ro",nav4:"header-module--nav4--2W2-h",nav5:"header-module--nav5--gTOUg",pulse:"header-module--pulse--updGC"}},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,A=r(t),s=r(n);if(A&&s){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(A!=s)return!1;var E=t instanceof Date,f=n instanceof Date;if(E!=f)return!1;if(E&&f)return t.getTime()==n.getTime();var T=t instanceof RegExp,p=n instanceof RegExp;if(T!=p)return!1;if(T&&p)return t.toString()==n.toString();var d=a(t);if((l=d.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,d[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=d[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},hIod:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n("Wbzz"),c=n("Oezq"),l=n.n(c);t.a=function(e){var t=e.pageTitle,n=e.title,r=e.url,c=e.description,u=e.imageUrl,A=e.imageAlt,s=e.type,E=e.datePublished,f=e.breadcrumbList,T=Object(i.useStaticQuery)("2040261982"),p={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[f?f.map((function(e,t){return{"@type":"ListItem",position:t+1,name:e.name,item:T.site.siteMetadata.siteUrl+"/"+e.url}})):{"@type":"ListItem",position:1,name:"Home",item:T.site.siteMetadata.siteUrl+"/home"}]},d={"@context":"http://schema.org","@type":""+s,description:""+c,image:{"@type":"ImageObject",url:""+u},mainEntityOfPage:{"@type":"WebPage","@id":""+T.site.siteMetadata.siteUrl},inLanguage:"en",name:""+n,headline:""+n,url:""+r,datePublished:""+E,dateModified:""+E,author:{"@type":"Person",name:""+T.site.siteMetadata.author},publisher:{"@type":"Organization",name:""+T.site.siteMetadata.author,logo:{"@type":"ImageObject",url:"https://images.ctfassets.net/wjg1udsw901v/4RI5COhSqeYFCbvzYFeFZW/af52277ab41da56c1be5f72f316befe9/logo.png"}}};return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Helmet,{title:t+" | "+T.site.siteMetadata.title}),a.a.createElement(o.Helmet,null,a.a.createElement("link",{rel:"icon",href:l.a}),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),"article"===s&&a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:site",contact:T.site.siteMetadata.social.twitterUsername}),a.a.createElement("meta",{name:"twitter:creator",content:T.site.siteMetadata.social.twitterUsername}),a.a.createElement("meta",{name:"twitter:title",content:n}),a.a.createElement("meta",{name:"twitter:description",content:c}),a.a.createElement("meta",{name:"twitter:image",content:u}),a.a.createElement("meta",{property:"og:locale",content:"en_GB"}),a.a.createElement("meta",{property:"og:site_name",content:T.site.siteMetadata.title}),a.a.createElement("meta",{property:"og:title",content:n}),a.a.createElement("meta",{property:"og:url",content:r}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{property:"og:image",content:u}),a.a.createElement("meta",{property:"og:image:alt",content:A}),a.a.createElement("meta",{property:"og:type",content:s})))}},"sg+I":function(e,t,n){},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),i=l(n("YVoz")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,A=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},p=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var A=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][A]&&(r[n][A]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var u=o[l],A=(0,i.default)({},a[u],r[u]);a[u]=A}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){m(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},R=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,A=e.scriptTags,s=e.styleTags,E=e.title,f=e.titleAttributes;O(c.TAG_NAMES.BODY,r),O(c.TAG_NAMES.HTML,a),_(E,f);var T={baseTag:M(c.TAG_NAMES.BASE,n),linkTags:M(c.TAG_NAMES.LINK,o),metaTags:M(c.TAG_NAMES.META,i),noscriptTags:M(c.TAG_NAMES.NOSCRIPT,l),scriptTags:M(c.TAG_NAMES.SCRIPT,A),styleTags:M(c.TAG_NAMES.STYLE,s)},p={},d={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=T[e].oldTags)})),t&&t(),u(e,p,d)},g=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],A=t[u]||"";n.getAttribute(u)!==A&&n.setAttribute(u,A),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var E=o.length-1;E>=0;E--)n.removeAttribute(o[E]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},M=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=N(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),o=g(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+A(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+A(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+A(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){R&&v(R),e.defer?R=y((function(){b(e,(function(){R=null}))})):(b(e),R=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,A=e.styleTags,s=e.title,E=void 0===s?"":s,f=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,a,r),link:I(c.TAG_NAMES.LINK,o,r),meta:I(c.TAG_NAMES.META,i,r),noscript:I(c.TAG_NAMES.NOSCRIPT,l,r),script:I(c.TAG_NAMES.SCRIPT,u,r),style:I(c.TAG_NAMES.STYLE,A,r),title:I(c.TAG_NAMES.TITLE,{title:E,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:p(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:p(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:p(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=S}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=0ae4405a43a21f71e61158fa44c2bf8bb3f4e1a1-0e7c3f96662e131e4180.js.map