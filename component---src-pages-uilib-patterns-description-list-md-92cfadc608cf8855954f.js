(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(78),n(52),n(297);var r=s(n(0)),a=n(291),i=s(n(959));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components;o(e,["components"]);return r.default.createElement(a.MDXTag,{name:"wrapper",components:t},r.default.createElement(i.default,null))};t._frontmatter={header:"UI Library",title:"DescriptionList",draft:!1,status:"wip",order:3}},319:function(e,t,n){"use strict";n(76);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("g",{clipPath:"url(#clip0)",fillRule:"evenodd",clipRule:"evenodd"},a.a.createElement("path",{d:"M6.614 10.447a.75.75 0 0 0-1.061-1.06L1.5 13.438v-1.522a.75.75 0 0 0-1.5 0v3.333a.747.747 0 0 0 .218.529l.002.001.001.002A.75.75 0 0 0 .75 16h3.333a.75.75 0 0 0 0-1.5H2.561l4.053-4.053zM15.943.463a.75.75 0 0 0-.161-.242L15.78.22 15.78.218A.748.748 0 0 0 15.25 0h-3.333a.75.75 0 0 0 0 1.5h1.522L9.386 5.553a.75.75 0 1 0 1.061 1.06L14.5 2.562v1.522a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.057-.287zM.057.463A.748.748 0 0 0 0 .75v3.333a.75.75 0 1 0 1.5 0V2.561l4.053 4.053a.75.75 0 1 0 1.06-1.061L2.562 1.5h1.522a.75.75 0 1 0 0-1.5H.75a.748.748 0 0 0-.693.463zM10.447 9.386a.75.75 0 1 0-1.06 1.061l4.052 4.053h-1.522a.75.75 0 1 0 0 1.5h3.333a.75.75 0 0 0 .525-.215l.01-.01A.748.748 0 0 0 16 15.25v-3.333a.75.75 0 0 0-1.5 0v1.522l-4.053-4.053z"})),a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip0"},a.a.createElement("path",{d:"M0 0h16v16H0z"}))))}},320:function(e,t,n){"use strict";n(76);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.875a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75zM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm.75 5.375a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75z"}))}},322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(76);var r=n(80);n(79);var a=p(n(0)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(800)),s=p(n(408)),o=n(801),c=p(n(327));function p(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.language,n=e.children,p=e.reactLive,u=e.className;return t||(t=((u||"").split(/-/)||[null,"jsx"])[1]),p&&"jsx"===t?a.default.createElement(o.LiveProvider,{code:"string"==typeof n?String(n).trim():null},a.default.createElement(o.LiveEditor,null),a.default.createElement(o.LiveError,null),a.default.createElement(o.LivePreview,null)):a.default.createElement(i.default,l({},i.defaultProps,{code:String(n).trim(),language:t,theme:s.default}),function(e){var t=e.className,n=e.style,i=e.tokens,s=e.getLineProps,o=e.getTokenProps;return a.default.createElement(c.default,{className:(0,r.merge)((0,r.css)(n)+" "+t)},d(i).map(function(e,t){return a.default.createElement("div",s({line:e,key:t}),e.map(function(e,t){return a.default.createElement("span",o({token:e,key:t}))}))}))})};t.default=u;var d=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(78),n(52),n(297),n(287),n(288),n(286),n(83),n(802),n(34),n(82);var r=n(304),a=f(n(367)),i=f(n(0)),s=_(n(366)),o=n(369),c=_(n(11)),p=_(n(1)),l=n(289),u=n(35),d=n(365);function _(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){if("undefined"==typeof window)return null;var e=window.location,t=e.pathname,n=e.search,r=e.hash;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){g(e,t,n[t])})}return e}({},(0,u.parsePath)(t.replace(new RegExp("/eufemia","g"),"")),{search:n,hash:r})},b=(0,l.css)(".fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),v=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=y(t).call(this,e),n=!a||"object"!==j(a)&&"function"!=typeof a?h(r):a,g(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),g(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),g(h(h(n)),"openFullscreen",function(){var e=E();e&&(0,u.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),g(h(h(n)),"quitFullscreen",function(){var e=E();e&&(0,u.navigate)([e.pathname,e.hash].join(""))}),n._id="item-wrapper";var i=E();return i&&(n.state.wasFullscreen=/fullscreen/.test(i.search)),n}var n,p,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,i.PureComponent),n=t,(p=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=E();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,p=t.id,l=t.tabs,u=t.hideTabs,_=t.ExampleCode,f=t.Description,j=t.Details,m=t.DemoComponent,y=t.CodeComponent,S=t.callback,h=String((/<div>(.*?)<\/div>/g.exec(s.default.renderToStaticMarkup(i.default.createElement(j,null)))||[])[1]||"").trim(),g=String(s.default.renderToStaticMarkup(i.default.createElement(y,null))).trim(),E=[l[0]],v=[];return this.isActive("demo")&&v.push(i.default.createElement(r.Tabs.TabContent,{key:"demo",id:this._id,selection_key:"demo"},!u&&i.default.createElement(f,null),i.default.createElement(m,null),S&&S.demo&&i.default.createElement(S.demo,{CodeRenderer:a.CodeRenderer}))),(h||S&&S.info||_)&&(E.push(l.find(function(e){return"info"===e.key})),this.isActive("info")&&v.push(i.default.createElement(r.Tabs.TabContent,{key:"info",id:this._id,selection_key:"info"},i.default.createElement(j,null),S&&S.info&&i.default.createElement(S.info,{CodeRenderer:a.CodeRenderer}),_&&i.default.createElement(i.Fragment,null,i.default.createElement("h3",null,"JSX Example"),i.default.createElement(a.CodeRenderer,{language:"jsx"},_))))),(g||S&&S.code)&&(E.push(l.find(function(e){return"code"===e.key})),this.isActive("code")&&v.push(i.default.createElement(r.Tabs.TabContent,{key:"code",id:this._id,selection_key:"code"},i.default.createElement(a.default,{source:y}),S&&S.code&&i.default.createElement(S.code,{CodeRenderer:a.CodeRenderer})))),i.default.createElement("div",{className:"wrapped-item"},u?i.default.createElement("h4",null,i.default.createElement(c.default,{to:"/uilib/components/".concat(p)},n)):i.default.createElement("h1",null,n),!u&&i.default.createElement(r.Tabs,{id:this._id,do_set_hash:!0,data:E,on_change:this.openTab,render:function(t){var n=t.Wrapper,a=t.TabsList,s=t.Tabs;return i.default.createElement(n,{className:b},i.default.createElement(a,null,i.default.createElement(s,null),e.state.wasFullscreen?i.default.createElement(o.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen"}):i.default.createElement(r.Button,{on_click:e.openFullscreen,variant:"secondary",title:"Fullscreen",icon:d.fullscreen})))}}),v)}}])&&m(n.prototype,p),l&&m(n,l),t}();g(v,"propTypes",{ExampleCode:p.default.string,Description:p.default.func.isRequired,Details:p.default.func.isRequired,DemoComponent:p.default.func.isRequired,CodeComponent:p.default.func.isRequired,callback:p.default.shape({demo:p.default.oneOfType([p.default.func,p.default.node]),info:p.default.oneOfType([p.default.func,p.default.node]),code:p.default.oneOfType([p.default.func,p.default.node])}),hideTabs:p.default.bool,title:p.default.string.isRequired,id:p.default.string.isRequired,tabs:p.default.array}),g(v,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var x=v;t.default=x},327:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n(289))&&r.__esModule?r:{default:r}).default)("pre",{target:"ew8f31h0"})("padding:1rem;");t.default=a},365:function(e,t,n){"use strict";n.r(t);var r=n(319);n.d(t,"fullscreen",function(){return r.a});var a=n(320);n.d(t,"hamburger",function(){return a.a})},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(287),n(288),n(36),n(286),n(34),n(803);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=p(n(368)),i=p(n(1)),s=p(n(366)),o=p(n(806)),c=p(n(322));function p(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(p){return void n(p)}o.done?t(c):Promise.resolve(c).then(r,a)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function j(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;d(this,t),g(h(h(n=j(this,m(t).call(this,e)))),"state",{codeString:""}),g(h(h(n)),"_isMounted",!1);var a=n.props.source;return n.beautify(r.default.createElement(a,null)),n}return y(t,r.PureComponent),f(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=s.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,a.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,o.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function s(e){u(i,r,a,s,o,"next",e)}function o(e){u(i,r,a,s,o,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.codeString?r.default.createElement(b,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=E,g(E,"propTypes",{language:i.default.string,raw:i.default.string,source:i.default.oneOfType([i.default.node,i.default.func]).isRequired}),g(E,"defaultProps",{language:"html",raw:""});var b=function(e){function t(){return d(this,t),j(this,m(t).apply(this,arguments))}return y(t,r.PureComponent),f(t,[{key:"render",value:function(){return r.default.createElement(c.default,this.props)}}]),t}();t.CodeRenderer=b,g(b,"propTypes",{language:i.default.string,children:i.default.oneOfType([i.default.string,i.default.node,i.default.func]).isRequired}),g(b,"defaultProps",{language:"jsx"})},368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(36);var r,a=(r=n(804))&&r.__esModule?r:{default:r};var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":a.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=i},369:function(e,t,n){"use strict";n.r(t);var r=n(293);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},409:function(e,t,n){var r={"./Binary_Property/ASCII.js":410,"./Binary_Property/ASCII_Hex_Digit.js":411,"./Binary_Property/Alphabetic.js":412,"./Binary_Property/Any.js":413,"./Binary_Property/Assigned.js":414,"./Binary_Property/Bidi_Control.js":415,"./Binary_Property/Bidi_Mirrored.js":416,"./Binary_Property/Case_Ignorable.js":417,"./Binary_Property/Cased.js":418,"./Binary_Property/Changes_When_Casefolded.js":419,"./Binary_Property/Changes_When_Casemapped.js":420,"./Binary_Property/Changes_When_Lowercased.js":421,"./Binary_Property/Changes_When_NFKC_Casefolded.js":422,"./Binary_Property/Changes_When_Titlecased.js":423,"./Binary_Property/Changes_When_Uppercased.js":424,"./Binary_Property/Dash.js":425,"./Binary_Property/Default_Ignorable_Code_Point.js":426,"./Binary_Property/Deprecated.js":427,"./Binary_Property/Diacritic.js":428,"./Binary_Property/Emoji.js":429,"./Binary_Property/Emoji_Component.js":430,"./Binary_Property/Emoji_Modifier.js":431,"./Binary_Property/Emoji_Modifier_Base.js":432,"./Binary_Property/Emoji_Presentation.js":433,"./Binary_Property/Extended_Pictographic.js":434,"./Binary_Property/Extender.js":435,"./Binary_Property/Grapheme_Base.js":436,"./Binary_Property/Grapheme_Extend.js":437,"./Binary_Property/Hex_Digit.js":438,"./Binary_Property/IDS_Binary_Operator.js":439,"./Binary_Property/IDS_Trinary_Operator.js":440,"./Binary_Property/ID_Continue.js":441,"./Binary_Property/ID_Start.js":442,"./Binary_Property/Ideographic.js":443,"./Binary_Property/Join_Control.js":444,"./Binary_Property/Logical_Order_Exception.js":445,"./Binary_Property/Lowercase.js":446,"./Binary_Property/Math.js":447,"./Binary_Property/Noncharacter_Code_Point.js":448,"./Binary_Property/Pattern_Syntax.js":449,"./Binary_Property/Pattern_White_Space.js":450,"./Binary_Property/Quotation_Mark.js":451,"./Binary_Property/Radical.js":452,"./Binary_Property/Regional_Indicator.js":453,"./Binary_Property/Sentence_Terminal.js":454,"./Binary_Property/Soft_Dotted.js":455,"./Binary_Property/Terminal_Punctuation.js":456,"./Binary_Property/Unified_Ideograph.js":457,"./Binary_Property/Uppercase.js":458,"./Binary_Property/Variation_Selector.js":459,"./Binary_Property/White_Space.js":460,"./Binary_Property/XID_Continue.js":461,"./Binary_Property/XID_Start.js":462,"./General_Category/Cased_Letter.js":463,"./General_Category/Close_Punctuation.js":464,"./General_Category/Connector_Punctuation.js":465,"./General_Category/Control.js":466,"./General_Category/Currency_Symbol.js":467,"./General_Category/Dash_Punctuation.js":468,"./General_Category/Decimal_Number.js":469,"./General_Category/Enclosing_Mark.js":470,"./General_Category/Final_Punctuation.js":471,"./General_Category/Format.js":472,"./General_Category/Initial_Punctuation.js":473,"./General_Category/Letter.js":474,"./General_Category/Letter_Number.js":475,"./General_Category/Line_Separator.js":476,"./General_Category/Lowercase_Letter.js":477,"./General_Category/Mark.js":478,"./General_Category/Math_Symbol.js":479,"./General_Category/Modifier_Letter.js":480,"./General_Category/Modifier_Symbol.js":481,"./General_Category/Nonspacing_Mark.js":482,"./General_Category/Number.js":483,"./General_Category/Open_Punctuation.js":484,"./General_Category/Other.js":485,"./General_Category/Other_Letter.js":486,"./General_Category/Other_Number.js":487,"./General_Category/Other_Punctuation.js":488,"./General_Category/Other_Symbol.js":489,"./General_Category/Paragraph_Separator.js":490,"./General_Category/Private_Use.js":491,"./General_Category/Punctuation.js":492,"./General_Category/Separator.js":493,"./General_Category/Space_Separator.js":494,"./General_Category/Spacing_Mark.js":495,"./General_Category/Surrogate.js":496,"./General_Category/Symbol.js":497,"./General_Category/Titlecase_Letter.js":498,"./General_Category/Unassigned.js":499,"./General_Category/Uppercase_Letter.js":500,"./Script/Adlam.js":501,"./Script/Ahom.js":502,"./Script/Anatolian_Hieroglyphs.js":503,"./Script/Arabic.js":504,"./Script/Armenian.js":505,"./Script/Avestan.js":506,"./Script/Balinese.js":507,"./Script/Bamum.js":508,"./Script/Bassa_Vah.js":509,"./Script/Batak.js":510,"./Script/Bengali.js":511,"./Script/Bhaiksuki.js":512,"./Script/Bopomofo.js":513,"./Script/Brahmi.js":514,"./Script/Braille.js":515,"./Script/Buginese.js":516,"./Script/Buhid.js":517,"./Script/Canadian_Aboriginal.js":518,"./Script/Carian.js":519,"./Script/Caucasian_Albanian.js":520,"./Script/Chakma.js":521,"./Script/Cham.js":522,"./Script/Cherokee.js":523,"./Script/Common.js":524,"./Script/Coptic.js":525,"./Script/Cuneiform.js":526,"./Script/Cypriot.js":527,"./Script/Cyrillic.js":528,"./Script/Deseret.js":529,"./Script/Devanagari.js":530,"./Script/Dogra.js":531,"./Script/Duployan.js":532,"./Script/Egyptian_Hieroglyphs.js":533,"./Script/Elbasan.js":534,"./Script/Ethiopic.js":535,"./Script/Georgian.js":536,"./Script/Glagolitic.js":537,"./Script/Gothic.js":538,"./Script/Grantha.js":539,"./Script/Greek.js":540,"./Script/Gujarati.js":541,"./Script/Gunjala_Gondi.js":542,"./Script/Gurmukhi.js":543,"./Script/Han.js":544,"./Script/Hangul.js":545,"./Script/Hanifi_Rohingya.js":546,"./Script/Hanunoo.js":547,"./Script/Hatran.js":548,"./Script/Hebrew.js":549,"./Script/Hiragana.js":550,"./Script/Imperial_Aramaic.js":551,"./Script/Inherited.js":552,"./Script/Inscriptional_Pahlavi.js":553,"./Script/Inscriptional_Parthian.js":554,"./Script/Javanese.js":555,"./Script/Kaithi.js":556,"./Script/Kannada.js":557,"./Script/Katakana.js":558,"./Script/Kayah_Li.js":559,"./Script/Kharoshthi.js":560,"./Script/Khmer.js":561,"./Script/Khojki.js":562,"./Script/Khudawadi.js":563,"./Script/Lao.js":564,"./Script/Latin.js":565,"./Script/Lepcha.js":566,"./Script/Limbu.js":567,"./Script/Linear_A.js":568,"./Script/Linear_B.js":569,"./Script/Lisu.js":570,"./Script/Lycian.js":571,"./Script/Lydian.js":572,"./Script/Mahajani.js":573,"./Script/Makasar.js":574,"./Script/Malayalam.js":575,"./Script/Mandaic.js":576,"./Script/Manichaean.js":577,"./Script/Marchen.js":578,"./Script/Masaram_Gondi.js":579,"./Script/Medefaidrin.js":580,"./Script/Meetei_Mayek.js":581,"./Script/Mende_Kikakui.js":582,"./Script/Meroitic_Cursive.js":583,"./Script/Meroitic_Hieroglyphs.js":584,"./Script/Miao.js":585,"./Script/Modi.js":586,"./Script/Mongolian.js":587,"./Script/Mro.js":588,"./Script/Multani.js":589,"./Script/Myanmar.js":590,"./Script/Nabataean.js":591,"./Script/New_Tai_Lue.js":592,"./Script/Newa.js":593,"./Script/Nko.js":594,"./Script/Nushu.js":595,"./Script/Ogham.js":596,"./Script/Ol_Chiki.js":597,"./Script/Old_Hungarian.js":598,"./Script/Old_Italic.js":599,"./Script/Old_North_Arabian.js":600,"./Script/Old_Permic.js":601,"./Script/Old_Persian.js":602,"./Script/Old_Sogdian.js":603,"./Script/Old_South_Arabian.js":604,"./Script/Old_Turkic.js":605,"./Script/Oriya.js":606,"./Script/Osage.js":607,"./Script/Osmanya.js":608,"./Script/Pahawh_Hmong.js":609,"./Script/Palmyrene.js":610,"./Script/Pau_Cin_Hau.js":611,"./Script/Phags_Pa.js":612,"./Script/Phoenician.js":613,"./Script/Psalter_Pahlavi.js":614,"./Script/Rejang.js":615,"./Script/Runic.js":616,"./Script/Samaritan.js":617,"./Script/Saurashtra.js":618,"./Script/Sharada.js":619,"./Script/Shavian.js":620,"./Script/Siddham.js":621,"./Script/SignWriting.js":622,"./Script/Sinhala.js":623,"./Script/Sogdian.js":624,"./Script/Sora_Sompeng.js":625,"./Script/Soyombo.js":626,"./Script/Sundanese.js":627,"./Script/Syloti_Nagri.js":628,"./Script/Syriac.js":629,"./Script/Tagalog.js":630,"./Script/Tagbanwa.js":631,"./Script/Tai_Le.js":632,"./Script/Tai_Tham.js":633,"./Script/Tai_Viet.js":634,"./Script/Takri.js":635,"./Script/Tamil.js":636,"./Script/Tangut.js":637,"./Script/Telugu.js":638,"./Script/Thaana.js":639,"./Script/Thai.js":640,"./Script/Tibetan.js":641,"./Script/Tifinagh.js":642,"./Script/Tirhuta.js":643,"./Script/Ugaritic.js":644,"./Script/Vai.js":645,"./Script/Warang_Citi.js":646,"./Script/Yi.js":647,"./Script/Zanabazar_Square.js":648,"./Script_Extensions/Adlam.js":649,"./Script_Extensions/Ahom.js":650,"./Script_Extensions/Anatolian_Hieroglyphs.js":651,"./Script_Extensions/Arabic.js":652,"./Script_Extensions/Armenian.js":653,"./Script_Extensions/Avestan.js":654,"./Script_Extensions/Balinese.js":655,"./Script_Extensions/Bamum.js":656,"./Script_Extensions/Bassa_Vah.js":657,"./Script_Extensions/Batak.js":658,"./Script_Extensions/Bengali.js":659,"./Script_Extensions/Bhaiksuki.js":660,"./Script_Extensions/Bopomofo.js":661,"./Script_Extensions/Brahmi.js":662,"./Script_Extensions/Braille.js":663,"./Script_Extensions/Buginese.js":664,"./Script_Extensions/Buhid.js":665,"./Script_Extensions/Canadian_Aboriginal.js":666,"./Script_Extensions/Carian.js":667,"./Script_Extensions/Caucasian_Albanian.js":668,"./Script_Extensions/Chakma.js":669,"./Script_Extensions/Cham.js":670,"./Script_Extensions/Cherokee.js":671,"./Script_Extensions/Common.js":672,"./Script_Extensions/Coptic.js":673,"./Script_Extensions/Cuneiform.js":674,"./Script_Extensions/Cypriot.js":675,"./Script_Extensions/Cyrillic.js":676,"./Script_Extensions/Deseret.js":677,"./Script_Extensions/Devanagari.js":678,"./Script_Extensions/Dogra.js":679,"./Script_Extensions/Duployan.js":680,"./Script_Extensions/Egyptian_Hieroglyphs.js":681,"./Script_Extensions/Elbasan.js":682,"./Script_Extensions/Ethiopic.js":683,"./Script_Extensions/Georgian.js":684,"./Script_Extensions/Glagolitic.js":685,"./Script_Extensions/Gothic.js":686,"./Script_Extensions/Grantha.js":687,"./Script_Extensions/Greek.js":688,"./Script_Extensions/Gujarati.js":689,"./Script_Extensions/Gunjala_Gondi.js":690,"./Script_Extensions/Gurmukhi.js":691,"./Script_Extensions/Han.js":692,"./Script_Extensions/Hangul.js":693,"./Script_Extensions/Hanifi_Rohingya.js":694,"./Script_Extensions/Hanunoo.js":695,"./Script_Extensions/Hatran.js":696,"./Script_Extensions/Hebrew.js":697,"./Script_Extensions/Hiragana.js":698,"./Script_Extensions/Imperial_Aramaic.js":699,"./Script_Extensions/Inherited.js":700,"./Script_Extensions/Inscriptional_Pahlavi.js":701,"./Script_Extensions/Inscriptional_Parthian.js":702,"./Script_Extensions/Javanese.js":703,"./Script_Extensions/Kaithi.js":704,"./Script_Extensions/Kannada.js":705,"./Script_Extensions/Katakana.js":706,"./Script_Extensions/Kayah_Li.js":707,"./Script_Extensions/Kharoshthi.js":708,"./Script_Extensions/Khmer.js":709,"./Script_Extensions/Khojki.js":710,"./Script_Extensions/Khudawadi.js":711,"./Script_Extensions/Lao.js":712,"./Script_Extensions/Latin.js":713,"./Script_Extensions/Lepcha.js":714,"./Script_Extensions/Limbu.js":715,"./Script_Extensions/Linear_A.js":716,"./Script_Extensions/Linear_B.js":717,"./Script_Extensions/Lisu.js":718,"./Script_Extensions/Lycian.js":719,"./Script_Extensions/Lydian.js":720,"./Script_Extensions/Mahajani.js":721,"./Script_Extensions/Makasar.js":722,"./Script_Extensions/Malayalam.js":723,"./Script_Extensions/Mandaic.js":724,"./Script_Extensions/Manichaean.js":725,"./Script_Extensions/Marchen.js":726,"./Script_Extensions/Masaram_Gondi.js":727,"./Script_Extensions/Medefaidrin.js":728,"./Script_Extensions/Meetei_Mayek.js":729,"./Script_Extensions/Mende_Kikakui.js":730,"./Script_Extensions/Meroitic_Cursive.js":731,"./Script_Extensions/Meroitic_Hieroglyphs.js":732,"./Script_Extensions/Miao.js":733,"./Script_Extensions/Modi.js":734,"./Script_Extensions/Mongolian.js":735,"./Script_Extensions/Mro.js":736,"./Script_Extensions/Multani.js":737,"./Script_Extensions/Myanmar.js":738,"./Script_Extensions/Nabataean.js":739,"./Script_Extensions/New_Tai_Lue.js":740,"./Script_Extensions/Newa.js":741,"./Script_Extensions/Nko.js":742,"./Script_Extensions/Nushu.js":743,"./Script_Extensions/Ogham.js":744,"./Script_Extensions/Ol_Chiki.js":745,"./Script_Extensions/Old_Hungarian.js":746,"./Script_Extensions/Old_Italic.js":747,"./Script_Extensions/Old_North_Arabian.js":748,"./Script_Extensions/Old_Permic.js":749,"./Script_Extensions/Old_Persian.js":750,"./Script_Extensions/Old_Sogdian.js":751,"./Script_Extensions/Old_South_Arabian.js":752,"./Script_Extensions/Old_Turkic.js":753,"./Script_Extensions/Oriya.js":754,"./Script_Extensions/Osage.js":755,"./Script_Extensions/Osmanya.js":756,"./Script_Extensions/Pahawh_Hmong.js":757,"./Script_Extensions/Palmyrene.js":758,"./Script_Extensions/Pau_Cin_Hau.js":759,"./Script_Extensions/Phags_Pa.js":760,"./Script_Extensions/Phoenician.js":761,"./Script_Extensions/Psalter_Pahlavi.js":762,"./Script_Extensions/Rejang.js":763,"./Script_Extensions/Runic.js":764,"./Script_Extensions/Samaritan.js":765,"./Script_Extensions/Saurashtra.js":766,"./Script_Extensions/Sharada.js":767,"./Script_Extensions/Shavian.js":768,"./Script_Extensions/Siddham.js":769,"./Script_Extensions/SignWriting.js":770,"./Script_Extensions/Sinhala.js":771,"./Script_Extensions/Sogdian.js":772,"./Script_Extensions/Sora_Sompeng.js":773,"./Script_Extensions/Soyombo.js":774,"./Script_Extensions/Sundanese.js":775,"./Script_Extensions/Syloti_Nagri.js":776,"./Script_Extensions/Syriac.js":777,"./Script_Extensions/Tagalog.js":778,"./Script_Extensions/Tagbanwa.js":779,"./Script_Extensions/Tai_Le.js":780,"./Script_Extensions/Tai_Tham.js":781,"./Script_Extensions/Tai_Viet.js":782,"./Script_Extensions/Takri.js":783,"./Script_Extensions/Tamil.js":784,"./Script_Extensions/Tangut.js":785,"./Script_Extensions/Telugu.js":786,"./Script_Extensions/Thaana.js":787,"./Script_Extensions/Thai.js":788,"./Script_Extensions/Tibetan.js":789,"./Script_Extensions/Tifinagh.js":790,"./Script_Extensions/Tirhuta.js":791,"./Script_Extensions/Ugaritic.js":792,"./Script_Extensions/Vai.js":793,"./Script_Extensions/Warang_Citi.js":794,"./Script_Extensions/Yi.js":795,"./Script_Extensions/Zanabazar_Square.js":796,"./index.js":797,"./unicode-version.js":798};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=409},805:function(e,t){},959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(287),n(288),n(76),n(286);var r=u(n(0)),a=l(n(1)),i=l(n(324)),s=u(n(960)),o=l(n(961)),c=l(n(962)),p=l(n(963));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,m(t).apply(this,arguments))}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.PureComponent),n=t,(a=[{key:"render",value:function(){return r.default.createElement(i.default,_({},t.defaultProps,this.props))}}])&&f(n.prototype,a),s&&f(n,s),t}();t.default=h,S(h,"propTypes",{title:a.default.string,id:a.default.string,Description:a.default.func,Details:a.default.func,DemoComponent:a.default.func,CodeComponent:a.default.func,hideTabs:a.default.bool}),S(h,"defaultProps",{title:"DescriptionList",id:"description-list",ExampleCode:p.default,Description:o.default,Details:c.default,DemoComponent:s.default,CodeComponent:s.Example,callback:s.Example.AdditionalCallback||null,hideTabs:!1})},960:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return c});var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(302),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return s.a.createElement(i.Fragment,null,s.a.createElement(o.a,{info:"* Du må alltid ta høyde for en renteøkning på 5%. Samtidig må du også vurdere hvordan lånekostnadene vil påvirke din økonomi.",data:JSON.stringify([{title:"Månedskostnad",value:"19 200 kr"},{title:"Månedkostnad ved 5% renteøkning",value:"31 500 kr*"}])}))},t}(i.PureComponent);t.default=function(){return s.a.createElement(c,null)}},961:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(77),a=n.n(r),i=n(0),s=n.n(i),o=n(291);t.default=function(e){var t=e.components;a()(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:t},s.a.createElement(o.MDXTag,{name:"p",components:t},"The description list component is a simplified version of a table.\nUse it when you want a crossover between a list and a table where you've got the key on the left hand side and description on the right hand side."))};var c={status:"wip"}},962:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(77),a=n.n(r),i=n(0),s=n.n(i),o=n(291);t.default=function(e){var t=e.components;a()(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:t},s.a.createElement(o.MDXTag,{name:"table",components:t},s.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),s.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"data")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," defines the data structure to load as a JSON. e.g. ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"[{title: '...',value: '...'}]"))),s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"info")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," shows a reference info text on the bottom")))),s.a.createElement(o.MDXTag,{name:"table",components:t},s.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Data Parameters"),s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),s.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"title")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the title that shows on the table main info field")),s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"value")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," use this property for more info/description style of content")))))};var c={}},963:function(e,t){e.exports='<DescriptionList\n  info="* Du må alltid ta høyde for en renteøkning på 5%. Samtidig må du også vurdere hvordan lånekostnadene vil påvirke din økonomi."\n  data={JSON.stringify([\n    {\n      title: "Månedskostnad",\n      value: "19 200 kr"\n    },\n    {\n      title: "Månedkostnad ved 5% renteøkning",\n      value: "31 500 kr*"\n    }\n  ])}\n/>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-patterns-description-list-md-92cfadc608cf8855954f.js.map