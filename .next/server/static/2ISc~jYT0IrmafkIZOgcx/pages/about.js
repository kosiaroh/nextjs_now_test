module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},u=!0;try{e[n].call(o.exports,o,o.exports,r),u=!1}finally{u&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function u(t){return e.exports=u=o?n:function(e){return e.__proto__||n(e)},u(t)}e.exports=u},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},0:function(e,t,r){e.exports=r("Juyh")},"0Bsm":function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),u=n(r("/HRN")),i=n(r("WaGi")),a=n(r("ZDA2")),f=n(r("/+P4")),c=n(r("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=l(r("cDcd")),d=s(r("rf6O")),y=s(r("2mql")),h=r("p8BD");t.default=function(e){var t=h.getDisplayName(e),r=function(t){function r(){return(0,u.default)(this,r),(0,a.default)(this,(0,f.default)(r).apply(this,arguments))}return(0,c.default)(r,t),(0,i.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,o.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:d.default.object},r.displayName="withRouter(".concat(t,")"),y.default(r,e)}},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("UWCm"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={};i[n.ForwardRef]={$$typeof:!0,render:!0};var a=Object.defineProperty,f=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var d=s(r);d&&d!==p&&e(t,d,n)}var y=f(r);c&&(y=y.concat(c(r)));for(var h=i[t.$$typeof]||o,v=i[r.$$typeof]||o,b=0;b<y.length;++b){var m=y[b];if(!(u[m]||n&&n[m]||v&&v[m]||h&&h[m])){var x=l(r,m);try{a(t,m,x)}catch(e){}}}return t}return t}},"3Hq7":function(e,t,r){"use strict";var n=r("cDcd"),o=r.n(n),u=r("YFqc"),i=r.n(u),a={marginRight:15},f=function(){return o.a.createElement("div",null,o.a.createElement(i.a,{href:"/"},o.a.createElement("a",{style:a},"Home")),o.a.createElement(i.a,{href:"/about"},o.a.createElement("a",{style:a},"About")))},c={margin:20,padding:20,border:"1px solid #DDD"};t.a=function(e){return o.a.createElement("div",{style:c},o.a.createElement(f,null),e.children)}},"9Jkg":function(e,t,r){e.exports=r("fozc")},Bhuq:function(e,t,r){e.exports=r("/+oN")},Juyh:function(e,t,r){"use strict";r.r(t);var n=r("cDcd"),o=r.n(n),u=r("3Hq7");t.default=function(){return o.a.createElement(u.a,null,o.a.createElement("p",null," This is the about page"))}},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},b3CU:function(e,t,r){var n=r("pbKT"),o=r("vjea");function u(t,r,i){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=u=function(e,t,r){var n=[null];n.push.apply(n,t);var u=new(Function.bind.apply(e,n));return r&&o(u,r.prototype),u}:e.exports=u=n,u.apply(null,arguments)}e.exports=u},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),u=n(r("iZP3")),i=n(r("/HRN")),a=n(r("WaGi")),f=n(r("ZDA2")),c=n(r("/+P4")),l=n(r("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("bzos"),y=s(r("cDcd")),h=(p(r("rf6O")),s(r("20a2"))),v=r("p8BD");var b=function(e){function t(){var e,r,n,o,a;return(0,i.default)(this,t),(e=(0,f.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,u.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,u.default)(t)?v.formatWithValidation(t):t}},n=null,o=null,a=null,function(e,t){if(e===n&&t===o)return a;var u=r(e,t);return n=e,o=t,a=u,u}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var u=e.formatUrls(e.props.href,e.props.as),i=u.href,a=u.as;if(function(e){var t=d.parse(e,!1,!0),r=d.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var f=window.location.pathname;i=d.resolve(f,i),a=a?d.resolve(f,a):i,t.preventDefault();var c=e.props.scroll;null==c&&(c=a.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,a,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=d.resolve(e,t);h.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=y.default.createElement("a",null,t));var u=y.Children.only(t),i={onClick:function(t){u.props&&"function"==typeof u.props.onClick&&u.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==u.type||"href"in u.props)||(i.href=o||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),y.default.cloneElement(u,i)}}]),t}(y.Component);t.default=b},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function u(e){return(u="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof o&&"symbol"===u(n)?e.exports=i=function(e){return u(e)}:e.exports=i=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":u(e)},i(t)}e.exports=i},nOHt:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),u=n(r("iZP3")),i=n(r("b3CU")),a=n(r("hfKm")),f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=f(r("qxCs")),l={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},s=["pathname","route","query","asPath"],p=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function y(){if(!l.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(l,"events",{get:function(){return c.default.events}}),p.concat(s).forEach(function(e){(0,a.default)(l,e,{get:function(){return y(),l.router[e]}})}),d.forEach(function(e){l[e]=function(){var t;return y(),(t=l.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){l.ready(function(){c.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(l[t])try{l[t].apply(l,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=l;var h=r("0Bsm");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return l.router=(0,i.default)(c.default,t),l.readyCallbacks.forEach(function(e){return e()}),l.readyCallbacks=[],l.router},t.Router=c.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<s.length;r++){var n=s[r];"object"!==(0,u.default)(e[n])?t[n]=e[n]:t[n]=(0,o.default)({},e[n])}return t.events=c.default.events,p.forEach(function(r){(0,a.default)(t,r,{get:function(){return e[r]}})}),d.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});