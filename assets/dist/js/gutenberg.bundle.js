/*! For license information please see gutenberg.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/blocks/cta.js":(e,t,r)=>{r.r(t);var n=r("./node_modules/react/index.js"),o=wp.blocks.registerBlockType,a=wp.editor,i=a.PlainText,c=a.RichText,u=a.MediaUpload,l=a.BlockControls,s=a.InspectorControls,f=a.ColorPalette,p=wp.components,d=p.IconButton,y=p.RangeControl,m=p.PanelBody;o("gutenberg-wtso/wtso-cta",{title:"Call to Action",icon:"format-image",category:"layout",attributes:{title:{type:"string",source:"html",selector:"h3"},body:{type:"string",source:"html",selector:"p"},titleColor:{type:"string",default:"white"},bodyColor:{type:"string",default:"white"},overlayColor:{type:"string",default:"black"},overlayOpacity:{type:"number",default:.3},backgroundImage:{type:"string",default:null},url:{type:"string",source:"attribute",selector:"a",attribute:"href"},buttonText:{type:"string",selector:"a",default:"Call to action"}},edit:function(e){var t=e.attributes,r=e.className,o=e.setAttributes,a=t.title,p=t.body,g=t.backgroundImage,v=t.titleColor,b=t.bodyColor,h=t.overlayColor,_=t.overlayOpacity,C=t.url,k=t.buttonText;return(0,n.createElement)("div",null,(0,n.createElement)(s,{style:{marginBottom:"40px"}},(0,n.createElement)(m,{title:"Font Color Settings"},(0,n.createElement)("div",{style:{marginTop:"20px"}},(0,n.createElement)("p",null,(0,n.createElement)("strong",null,"Select a Title color:")),(0,n.createElement)(f,{value:v,onChange:function(e){o({titleColor:e})}})),(0,n.createElement)("div",{style:{marginTop:"20px",marginBottom:"40px"}},(0,n.createElement)("p",null,(0,n.createElement)("strong",null,"Select a Body color:")),(0,n.createElement)(f,{value:b,onChange:function(e){o({bodyColor:e})}}))),(0,n.createElement)(m,{title:"Background Image Settings"},(0,n.createElement)("p",null,(0,n.createElement)("strong",null,"Select a background image:")),(0,n.createElement)(u,{onSelect:function(e){o({backgroundImage:e.sizes.full.url})},type:"image",value:g,render:function(e){var t=e.open;return(0,n.createElement)(d,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:t},"Background Image")}}),(0,n.createElement)("div",{style:{marginTop:"20px",marginBottom:"40px"}},(0,n.createElement)("p",null,(0,n.createElement)("strong",null,"Overlay Color:")),(0,n.createElement)(f,{value:h,onChange:function(e){o({overlayColor:e})}})),(0,n.createElement)(y,{label:"Overlay Opacity",value:_,onChange:function(e){o({overlayOpacity:e})},min:0,max:1,step:.05}))),(0,n.createElement)("div",{className:"cta-container",style:{backgroundImage:"url(".concat(g,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},(0,n.createElement)("div",{className:"cta-overlay",style:{background:h,opacity:_}}),(0,n.createElement)("div",{className:"cta-content"},(0,n.createElement)(c,{key:"editable",tagName:"h3",className:r,placeholder:"Your CTA title",onChange:function(e){o({title:e})},value:a,style:{color:v}}),(0,n.createElement)(l,null),(0,n.createElement)(c,{key:"editable",tagName:"p",className:r,placeholder:"Your CTA Description",onChange:function(e){o({body:e})},value:p,style:{color:b}}),(0,n.createElement)("div",{className:"cta-content-button"},(0,n.createElement)(c,{tagName:"a",onChange:function(e){o({buttonText:e})},title:k,value:k,target:"_blank"})),(0,n.createElement)(i,{style:{color:"#333",fontSize:"12px",padding:"2px"},value:C,onChange:function(e){o({url:e})},placeholder:"http://"}))))},save:function(e){var t=e.attributes,r=t.title,o=t.body,a=t.titleColor,i=t.bodyColor,u=t.overlayColor,l=t.overlayOpacity,s=t.backgroundImage,f=t.url,p=t.buttonText;return(0,n.createElement)("div",{className:"cta-container",style:{backgroundImage:"url(".concat(s,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},(0,n.createElement)("div",{className:"cta-overlay",style:{background:u,opacity:l}}),(0,n.createElement)("div",{className:"cta-content"},(0,n.createElement)("h3",{style:{color:a}},r),(0,n.createElement)(c.Content,{tagName:"p",value:o,style:{color:i}}),(0,n.createElement)("div",{className:"cta-content-button"},(0,n.createElement)(c.Content,{tagName:"a",href:f,title:p,value:p,target:"_blank"}))))}})},"./src/sass/gutenberg.scss":(e,t,r)=>{r.r(t)},"./node_modules/object-assign/index.js":e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,u=o(e),l=1;l<arguments.length;l++){for(var s in i=Object(arguments[l]))r.call(i,s)&&(u[s]=i[s]);if(t){c=t(i);for(var f=0;f<c.length;f++)n.call(i,c[f])&&(u[c[f]]=i[c[f]])}}return u}},"./node_modules/react/cjs/react.development.js":(e,t,r)=>{!function(){var e=r("./node_modules/object-assign/index.js"),n=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,c=60112;t.Suspense=60113;var u=60120,l=60115,s=60116,f=60121,p=60122,d=60117,y=60129,m=60131;if("function"==typeof Symbol&&Symbol.for){var g=Symbol.for;n=g("react.element"),o=g("react.portal"),t.Fragment=g("react.fragment"),t.StrictMode=g("react.strict_mode"),t.Profiler=g("react.profiler"),a=g("react.provider"),i=g("react.context"),c=g("react.forward_ref"),t.Suspense=g("react.suspense"),u=g("react.suspense_list"),l=g("react.memo"),s=g("react.lazy"),f=g("react.block"),p=g("react.server.block"),d=g("react.fundamental"),g("react.scope"),g("react.opaque.id"),y=g("react.debug_trace_mode"),g("react.offscreen"),m=g("react.legacy_hidden")}var v="function"==typeof Symbol&&Symbol.iterator;function b(e){if(null===e||"object"!=typeof e)return null;var t=v&&e[v]||e["@@iterator"];return"function"==typeof t?t:null}var h={current:null},_={current:null},C={},k=null;function w(e){k=e}C.setExtraStackFrame=function(e){k=e},C.getCurrentStack=null,C.getStackAddendum=function(){var e="";k&&(e+=k);var t=C.getCurrentStack;return t&&(e+=t()||""),e};var j={ReactCurrentDispatcher:h,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];R("warn",e,r)}function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];R("error",e,r)}function R(e,t,r){var n=j.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return""+e}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}j.ReactDebugCurrentFrame=C;var S={};function P(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;S[o]||(O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),S[o]=!0)}var x={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){P(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){P(e,"replaceState")},enqueueSetState:function(e,t,r,n){P(e,"setState")}},T={};function $(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}Object.freeze(T),$.prototype.isReactComponent={},$.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},$.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var N={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},I=function(e,t){Object.defineProperty($.prototype,e,{get:function(){E("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var D in N)N.hasOwnProperty(D)&&I(D,N[D]);function F(){}function A(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}F.prototype=$.prototype;var M=A.prototype=new F;function z(e){return e.displayName||"Context"}function B(e){if(null==e)return null;if("number"==typeof e.tag&&O("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case t.Fragment:return"Fragment";case o:return"Portal";case t.Profiler:return"Profiler";case t.StrictMode:return"StrictMode";case t.Suspense:return"Suspense";case u:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case i:return z(e)+".Consumer";case a:return z(e._context)+".Provider";case c:return d=e,m="ForwardRef",g=(y=e.render).displayName||y.name||"",d.displayName||(""!==g?"ForwardRef("+g+")":m);case l:return B(e.type);case f:return B(e._render);case s:var r=e,n=r._payload,p=r._init;try{return B(p(n))}catch(e){return null}}var d,y,m,g;return null}M.constructor=A,e(M,$.prototype),M.isPureReactComponent=!0;var U,q,L,V=Object.prototype.hasOwnProperty,Y={key:!0,ref:!0,__self:!0,__source:!0};function W(e){if(V.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function H(e){if(V.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function J(e,t){var r=function(){U||(U=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function X(e,t){var r=function(){q||(q=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function G(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=B(_.current.type);L[t]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),L[t]=!0)}}L={};var K=function(e,t,r,o,a,i,c){var u={$$typeof:n,type:e,key:t,ref:r,props:c,_owner:i,_store:{}};return Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function Q(e,t,r){var n,o={},a=null,i=null,c=null,u=null;if(null!=t)for(n in W(t)&&(i=t.ref,G(t)),H(t)&&(a=""+t.key),c=void 0===t.__self?null:t.__self,u=void 0===t.__source?null:t.__source,t)V.call(t,n)&&!Y.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(l>1){for(var s=Array(l),f=0;f<l;f++)s[f]=arguments[f+2];Object.freeze&&Object.freeze(s),o.children=s}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&J(o,d),i&&X(o,d)}return K(e,a,i,c,u,_.current,o)}function Z(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,a,i=e({},t.props),c=t.key,u=t.ref,l=t._self,s=t._source,f=t._owner;if(null!=r)for(o in W(r)&&(u=r.ref,f=_.current),H(r)&&(c=""+r.key),t.type&&t.type.defaultProps&&(a=t.type.defaultProps),r)V.call(r,o)&&!Y.hasOwnProperty(o)&&(void 0===r[o]&&void 0!==a?i[o]=a[o]:i[o]=r[o]);var p=arguments.length-2;if(1===p)i.children=n;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];i.children=d}return K(t.type,c,u,l,s,f,i)}function ee(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var te=!1,re=/\/+/g;function ne(e){return e.replace(re,"$&/")}function oe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function ae(e,t,r,a,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u,l,s,f=!1;if(null===e)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case n:case o:f=!0}}if(f){var p=e,d=i(p),y=""===a?"."+oe(p,0):a;if(Array.isArray(d)){var m="";null!=y&&(m=ne(y)+"/"),ae(d,t,m,"",(function(e){return e}))}else null!=d&&(ee(d)&&(u=d,l=r+(!d.key||p&&p.key===d.key?"":ne(""+d.key)+"/")+y,d=K(u.type,l,u.ref,u._self,u._source,u._owner,u.props)),t.push(d));return 1}var g=0,v=""===a?".":a+":";if(Array.isArray(e))for(var h=0;h<e.length;h++)g+=ae(s=e[h],t,r,v+oe(s,h),i);else{var _=b(e);if("function"==typeof _){var C=e;_===C.entries&&(te||E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),te=!0);for(var k,w=_.call(C),j=0;!(k=w.next()).done;)g+=ae(s=k.value,t,r,v+oe(s,j++),i)}else if("object"===c){var O=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}}return g}function ie(e,t,r){if(null==e)return e;var n=[],o=0;return ae(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function ce(e){if(-1===e._status){var t=(0,e._result)(),r=e;r._status=0,r._result=t,t.then((function(t){if(0===e._status){var r=t.default;void 0===r&&O("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t);var n=e;n._status=1,n._result=r}}),(function(t){if(0===e._status){var r=e;r._status=2,r._result=t}}))}if(1===e._status)return e._result;throw e._result}function ue(e){return"string"==typeof e||"function"==typeof e||e===t.Fragment||e===t.Profiler||e===y||e===t.StrictMode||e===t.Suspense||e===u||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===s||e.$$typeof===l||e.$$typeof===a||e.$$typeof===i||e.$$typeof===c||e.$$typeof===d||e.$$typeof===f||e[0]===p)}function le(){var e=h.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return e}var se,fe,pe,de,ye,me,ge,ve=0;function be(){}be.__reactDisabledLog=!0;var he,_e=j.ReactCurrentDispatcher;function Ce(e,t,r){if(void 0===he)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);he=n&&n[1]||""}return"\n"+he+e}var ke,we=!1,je="function"==typeof WeakMap?WeakMap:Map;function Ee(t,r){if(!t||we)return"";var n,o=ke.get(t);if(void 0!==o)return o;we=!0;var a,i=Error.prepareStackTrace;Error.prepareStackTrace=void 0,a=_e.current,_e.current=null,function(){if(0===ve){se=console.log,fe=console.info,pe=console.warn,de=console.error,ye=console.group,me=console.groupCollapsed,ge=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ve++}();try{if(r){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(c,[])}catch(e){n=e}Reflect.construct(t,[],c)}else{try{c.call()}catch(e){n=e}t.call(c.prototype)}}else{try{throw Error()}catch(e){n=e}t()}}catch(e){if(e&&n&&"string"==typeof e.stack){for(var u=e.stack.split("\n"),l=n.stack.split("\n"),s=u.length-1,f=l.length-1;s>=1&&f>=0&&u[s]!==l[f];)f--;for(;s>=1&&f>=0;s--,f--)if(u[s]!==l[f]){if(1!==s||1!==f)do{if(s--,--f<0||u[s]!==l[f]){var p="\n"+u[s].replace(" at new "," at ");return"function"==typeof t&&ke.set(t,p),p}}while(s>=1&&f>=0);break}}}finally{we=!1,_e.current=a,function(){if(0==--ve){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:e({},t,{value:se}),info:e({},t,{value:fe}),warn:e({},t,{value:pe}),error:e({},t,{value:de}),group:e({},t,{value:ye}),groupCollapsed:e({},t,{value:me}),groupEnd:e({},t,{value:ge})})}ve<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=i}var d=t?t.displayName||t.name:"",y=d?Ce(d):"";return"function"==typeof t&&ke.set(t,y),y}function Oe(e,t,r){return Ee(e,!1)}function Re(e,r,n){if(null==e)return"";if("function"==typeof e)return Ee(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Ce(e);switch(e){case t.Suspense:return Ce("Suspense");case u:return Ce("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case c:return Oe(e.render);case l:return Re(e.type,r,n);case f:return Oe(e._render);case s:var o=e,a=o._payload,i=o._init;try{return Re(i(a),r,n)}catch(e){}}return""}ke=new je;var Se,Pe={},xe=j.ReactDebugCurrentFrame;function Te(e){if(e){var t=e._owner,r=Re(e.type,e._source,t?t.type:null);xe.setExtraStackFrame(r)}else xe.setExtraStackFrame(null)}function $e(e){if(e){var t=e._owner;w(Re(e.type,e._source,t?t.type:null))}else w(null)}function Ne(){if(_.current){var e=B(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Ie(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}Se=!1;var De={};function Fe(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Ne();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!De[r]){De[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+B(e._owner.type)+"."),$e(e),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),$e(null)}}}function Ae(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ee(n)&&Fe(n,t)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=b(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ee(a.value)&&Fe(a.value,t)}}function Me(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==c&&r.$$typeof!==l)return;t=r.propTypes}if(t){var n=B(r);!function(e,t,r,n,o){var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var u=Error((n||"React class")+": "+"prop type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(Te(o),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof c),Te(null)),c instanceof Error&&!(c.message in Pe)&&(Pe[c.message]=!0,Te(o),O("Failed %s type: %s",r,c.message),Te(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||Se||(Se=!0,O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",B(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ze(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){$e(e),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),$e(null);break}}null!==e.ref&&($e(e),O("Invalid attribute `ref` supplied to `React.Fragment`."),$e(null))}function Be(e,r,o){var a=ue(e);if(!a){var i="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c,u=Ie(r);i+=u||Ne(),null===e?c="null":Array.isArray(e)?c="array":void 0!==e&&e.$$typeof===n?(c="<"+(B(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,i)}var l=Q.apply(this,arguments);if(null==l)return l;if(a)for(var s=2;s<arguments.length;s++)Ae(arguments[s],e);return e===t.Fragment?ze(l):Me(l),l}var Ue=!1;try{var qe=Object.freeze({});new Map([[qe,null]]),new Set([qe])}catch(e){}var Le=Be,Ve={map:ie,forEach:function(e,t,r){ie(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return ie(e,(function(){t++})),t},toArray:function(e){return ie(e,(function(e){return e}))||[]},only:function(e){if(!ee(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=Ve,t.Component=$,t.PureComponent=A,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,t.cloneElement=function(e,t,r){for(var n=Z.apply(this,arguments),o=2;o<arguments.length;o++)Ae(arguments[o],n.type);return Me(n),n},t.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&O("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:a,_context:r};var n=!1,o=!1,c=!1,u={$$typeof:i,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(u,{Provider:{get:function(){return o||(o=!0,O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return n||(n=!0,O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}},displayName:{get:function(){return r.displayName},set:function(e){c||(E("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),c=!0)}}}),r.Consumer=u,r._currentRenderer=null,r._currentRenderer2=null,r},t.createElement=Le,t.createFactory=function(e){var t=Be.bind(null,e);return t.type=e,Ue||(Ue=!0,E("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return E("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===l?O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?O("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&O("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:c,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,null==e.displayName&&(e.displayName=r)}}),r},t.isValidElement=ee,t.lazy=function(e){var t,r,n={$$typeof:s,_payload:{_status:-1,_result:e},_init:ce};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){ue(e)||O("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:l,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,null==e.displayName&&(e.displayName=t)}}),n},t.useCallback=function(e,t){return le().useCallback(e,t)},t.useContext=function(e,t){var r=le();if(void 0!==t&&O("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},t.useDebugValue=function(e,t){return le().useDebugValue(e,t)},t.useEffect=function(e,t){return le().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return le().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return le().useLayoutEffect(e,t)},t.useMemo=function(e,t){return le().useMemo(e,t)},t.useReducer=function(e,t,r){return le().useReducer(e,t,r)},t.useRef=function(e){return le().useRef(e)},t.useState=function(e){return le().useState(e)},t.version="17.0.2"}()},"./node_modules/react/index.js":(e,t,r)=>{e.exports=r("./node_modules/react/cjs/react.development.js")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};r.r(n),r("./src/js/blocks/cta.js"),r("./src/sass/gutenberg.scss")})();
//# sourceMappingURL=gutenberg.bundle.js.map