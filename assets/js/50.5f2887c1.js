(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[50],{3053:(e,t,n)=>{"use strict";n.d(t,{A:()=>$});var r=n(6540),o=n(4676),l=n(8168),a=n(53);const c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var s={Prism:n(1258).A,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var u=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?p({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=p({},h(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,c=[],s=[c];a>-1;){for(;(l=r[a]++)<o[a];){var i=void 0,p=t[a],h=n[a][l];if("string"==typeof h?(p=a>0?p:["plain"],i=h):(p=d(p,h.type),h.alias&&(p=d(p,h.alias)),i=h.content),"string"==typeof i){var m=i.split(u),g=m.length;c.push({types:p,content:m[0]});for(var f=1;f<g;f++)y(c),s.push(c=[]),c.push({types:p,content:m[f]})}else a++,t.push(p),n.push(i),r.push(0),o.push(i.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return y(c),s}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const g=m;var f=n(8426),b=n.n(f);const v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var k=n(4785),j=n(3155);const E=()=>{const{prism:e}=(0,j.pN)(),{isDarkTheme:t}=(0,k.A)(),n=e.theme||v,r=e.darkTheme||n;return t?r:n};var O=n(4798);const T="codeBlockContainer_J+bg",A="codeBlockContent_csEI",x="codeBlockTitle_oQzk",N="codeBlock_rtdJ",w="codeBlockWithTitle_ZT05",P="copyButton_M3SB",C="codeBlockLines_1zSZ",S=/{([\d,-]+)}/,B=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)};function D(e){let{children:t,className:n,metastring:o,title:c}=e;const{prism:i}=(0,j.pN)(),[p,u]=(0,r.useState)(!1),[y,d]=(0,r.useState)(!1);(0,r.useEffect)((()=>{d(!0)}),[]);const h=(0,j.wt)(o)||c,m=(0,r.useRef)(null);let f=[];const v=E(),k=Array.isArray(t)?t.join(""):t;if(o&&S.test(o)){const e=o.match(S)[1];f=b()(e).filter((e=>e>0))}let D=n&&n.replace(/language-/,"");!D&&i.defaultLanguage&&(D=i.defaultLanguage);let _=k.replace(/\n$/,"");if(0===f.length&&void 0!==D){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return B(["js","jsBlock"]);case"jsx":case"tsx":return B(["js","jsBlock","jsx"]);case"html":return B(["js","jsBlock","html"]);case"python":case"py":return B(["python"]);default:return B()}})(D),n=k.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const l=o+1,a=n[o].match(t);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":r=l;break;case"highlight-end":e+=`${r}-${l-1},`}n.splice(o,1)}else o+=1}f=b()(e),_=n.join("\n")}const $=()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),l=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus()}(_),u(!0),setTimeout((()=>u(!1)),2e3)};return r.createElement(g,(0,l.A)({},s,{key:String(y),theme:v,code:_,language:D}),(e=>{let{className:t,style:n,tokens:o,getLineProps:c,getTokenProps:s}=e;return r.createElement("div",{className:T},h&&r.createElement("div",{style:n,className:x},h),r.createElement("div",{className:(0,a.A)(A,D)},r.createElement("pre",{tabIndex:0,className:(0,a.A)(t,N,"thin-scrollbar",{[w]:h}),style:n},r.createElement("code",{className:C},o.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=c({line:e,key:t});return f.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,l.A)({key:t},n),e.map(((e,t)=>r.createElement("span",(0,l.A)({key:t},s({token:e,key:t}))))))})))),r.createElement("button",{ref:m,type:"button","aria-label":(0,O.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.A)(P,"clean-btn"),onClick:$},p?r.createElement(O.A,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(O.A,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var _=n(6287);const $={code:e=>{const{children:t}=e;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(D,e):r.createElement("code",e)},a:e=>r.createElement(o.A,e),pre:e=>{const{children:t}=e;return(0,r.isValidElement)(t?.props?.children)?t?.props.children:r.createElement(D,(0,r.isValidElement)(t)?t?.props:{children:t})},h1:(0,_.A)("h1"),h2:(0,_.A)("h2"),h3:(0,_.A)("h3"),h4:(0,_.A)("h4"),h5:(0,_.A)("h5"),h6:(0,_.A)("h6")}},5680:(e,t,n)=>{"use strict";n.d(t,{xA:()=>p,yg:()=>h});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||y[d]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6287:(e,t,n)=>{"use strict";n.d(t,{e:()=>p,A:()=>u});var r=n(8168),o=n(6540),l=n(53),a=n(4798),c=n(3155);const s="enhancedAnchor_WiXH",i="h1Heading_dC7a",p=function(e){let{...t}=e;return o.createElement("header",null,o.createElement("h1",(0,r.A)({},t,{id:void 0,className:i}),t.children))},u=e=>{return"h1"===e?p:(t=e,function(e){let{id:n,...r}=e;const{navbar:{hideOnScroll:i}}=(0,c.pN)();return n?o.createElement(t,r,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.A)("anchor",{[s]:!i}),id:n}),r.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,a.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,r)});var t}},8426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);