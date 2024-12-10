(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function pu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _l={exports:{}},Si={},Sl={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function kv(){if(Dd)return Z;Dd=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),b=Symbol.iterator;function R(w){return w===null||typeof w!="object"?null:(w=b&&w[b]||w["@@iterator"],typeof w=="function"?w:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,q={};function H(w,T,J){this.props=w,this.context=T,this.refs=q,this.updater=J||V}H.prototype.isReactComponent={},H.prototype.setState=function(w,T){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,T,"setState")},H.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function Q(){}Q.prototype=H.prototype;function ee(w,T,J){this.props=w,this.context=T,this.refs=q,this.updater=J||V}var ae=ee.prototype=new Q;ae.constructor=ee,X(ae,H.prototype),ae.isPureReactComponent=!0;var le=Array.isArray,de=Object.prototype.hasOwnProperty,Ie={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function Fe(w,T,J){var te,ie={},oe=null,he=null;if(T!=null)for(te in T.ref!==void 0&&(he=T.ref),T.key!==void 0&&(oe=""+T.key),T)de.call(T,te)&&!Ce.hasOwnProperty(te)&&(ie[te]=T[te]);var ue=arguments.length-2;if(ue===1)ie.children=J;else if(1<ue){for(var ye=Array(ue),et=0;et<ue;et++)ye[et]=arguments[et+2];ie.children=ye}if(w&&w.defaultProps)for(te in ue=w.defaultProps,ue)ie[te]===void 0&&(ie[te]=ue[te]);return{$$typeof:i,type:w,key:oe,ref:he,props:ie,_owner:Ie.current}}function st(w,T){return{$$typeof:i,type:w.type,key:T,ref:w.ref,props:w.props,_owner:w._owner}}function ht(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function bn(w){var T={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return T[J]})}var kt=/\/+/g;function Ze(w,T){return typeof w=="object"&&w!==null&&w.key!=null?bn(""+w.key):T.toString(36)}function pt(w,T,J,te,ie){var oe=typeof w;(oe==="undefined"||oe==="boolean")&&(w=null);var he=!1;if(w===null)he=!0;else switch(oe){case"string":case"number":he=!0;break;case"object":switch(w.$$typeof){case i:case n:he=!0}}if(he)return he=w,ie=ie(he),w=te===""?"."+Ze(he,0):te,le(ie)?(J="",w!=null&&(J=w.replace(kt,"$&/")+"/"),pt(ie,T,J,"",function(et){return et})):ie!=null&&(ht(ie)&&(ie=st(ie,J+(!ie.key||he&&he.key===ie.key?"":(""+ie.key).replace(kt,"$&/")+"/")+w)),T.push(ie)),1;if(he=0,te=te===""?".":te+":",le(w))for(var ue=0;ue<w.length;ue++){oe=w[ue];var ye=te+Ze(oe,ue);he+=pt(oe,T,J,ye,ie)}else if(ye=R(w),typeof ye=="function")for(w=ye.call(w),ue=0;!(oe=w.next()).done;)oe=oe.value,ye=te+Ze(oe,ue++),he+=pt(oe,T,J,ye,ie);else if(oe==="object")throw T=String(w),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return he}function It(w,T,J){if(w==null)return w;var te=[],ie=0;return pt(w,te,"","",function(oe){return T.call(J,oe,ie++)}),te}function Ge(w){if(w._status===-1){var T=w._result;T=T(),T.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=T)}if(w._status===1)return w._result.default;throw w._result}var Ee={current:null},D={transition:null},G={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:D,ReactCurrentOwner:Ie};function F(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:It,forEach:function(w,T,J){It(w,function(){T.apply(this,arguments)},J)},count:function(w){var T=0;return It(w,function(){T++}),T},toArray:function(w){return It(w,function(T){return T})||[]},only:function(w){if(!ht(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Z.Component=H,Z.Fragment=o,Z.Profiler=u,Z.PureComponent=ee,Z.StrictMode=a,Z.Suspense=g,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Z.act=F,Z.cloneElement=function(w,T,J){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var te=X({},w.props),ie=w.key,oe=w.ref,he=w._owner;if(T!=null){if(T.ref!==void 0&&(oe=T.ref,he=Ie.current),T.key!==void 0&&(ie=""+T.key),w.type&&w.type.defaultProps)var ue=w.type.defaultProps;for(ye in T)de.call(T,ye)&&!Ce.hasOwnProperty(ye)&&(te[ye]=T[ye]===void 0&&ue!==void 0?ue[ye]:T[ye])}var ye=arguments.length-2;if(ye===1)te.children=J;else if(1<ye){ue=Array(ye);for(var et=0;et<ye;et++)ue[et]=arguments[et+2];te.children=ue}return{$$typeof:i,type:w.type,key:ie,ref:oe,props:te,_owner:he}},Z.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:f,_context:w},w.Consumer=w},Z.createElement=Fe,Z.createFactory=function(w){var T=Fe.bind(null,w);return T.type=w,T},Z.createRef=function(){return{current:null}},Z.forwardRef=function(w){return{$$typeof:p,render:w}},Z.isValidElement=ht,Z.lazy=function(w){return{$$typeof:I,_payload:{_status:-1,_result:w},_init:Ge}},Z.memo=function(w,T){return{$$typeof:E,type:w,compare:T===void 0?null:T}},Z.startTransition=function(w){var T=D.transition;D.transition={};try{w()}finally{D.transition=T}},Z.unstable_act=F,Z.useCallback=function(w,T){return Ee.current.useCallback(w,T)},Z.useContext=function(w){return Ee.current.useContext(w)},Z.useDebugValue=function(){},Z.useDeferredValue=function(w){return Ee.current.useDeferredValue(w)},Z.useEffect=function(w,T){return Ee.current.useEffect(w,T)},Z.useId=function(){return Ee.current.useId()},Z.useImperativeHandle=function(w,T,J){return Ee.current.useImperativeHandle(w,T,J)},Z.useInsertionEffect=function(w,T){return Ee.current.useInsertionEffect(w,T)},Z.useLayoutEffect=function(w,T){return Ee.current.useLayoutEffect(w,T)},Z.useMemo=function(w,T){return Ee.current.useMemo(w,T)},Z.useReducer=function(w,T,J){return Ee.current.useReducer(w,T,J)},Z.useRef=function(w){return Ee.current.useRef(w)},Z.useState=function(w){return Ee.current.useState(w)},Z.useSyncExternalStore=function(w,T,J){return Ee.current.useSyncExternalStore(w,T,J)},Z.useTransition=function(){return Ee.current.useTransition()},Z.version="18.3.1",Z}var Ld;function mu(){return Ld||(Ld=1,Sl.exports=kv()),Sl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Iv(){if(Md)return Si;Md=1;var i=mu(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,E){var I,b={},R=null,V=null;E!==void 0&&(R=""+E),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(V=g.ref);for(I in g)a.call(g,I)&&!f.hasOwnProperty(I)&&(b[I]=g[I]);if(p&&p.defaultProps)for(I in g=p.defaultProps,g)b[I]===void 0&&(b[I]=g[I]);return{$$typeof:n,type:p,key:R,ref:V,props:b,_owner:u.current}}return Si.Fragment=o,Si.jsx=h,Si.jsxs=h,Si}var Fd;function Cv(){return Fd||(Fd=1,_l.exports=Iv()),_l.exports}var x=Cv(),Ne=mu();const gu=pu(Ne);var Xo={},El={exports:{}},Je={},kl={exports:{}},Il={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function xv(){return jd||(jd=1,function(i){function n(D,G){var F=D.length;D.push(G);e:for(;0<F;){var w=F-1>>>1,T=D[w];if(0<u(T,G))D[w]=G,D[F]=T,F=w;else break e}}function o(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var G=D[0],F=D.pop();if(F!==G){D[0]=F;e:for(var w=0,T=D.length,J=T>>>1;w<J;){var te=2*(w+1)-1,ie=D[te],oe=te+1,he=D[oe];if(0>u(ie,F))oe<T&&0>u(he,ie)?(D[w]=he,D[oe]=F,w=oe):(D[w]=ie,D[te]=F,w=te);else if(oe<T&&0>u(he,F))D[w]=he,D[oe]=F,w=oe;else break e}}return G}function u(D,G){var F=D.sortIndex-G.sortIndex;return F!==0?F:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var g=[],E=[],I=1,b=null,R=3,V=!1,X=!1,q=!1,H=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(D){for(var G=o(E);G!==null;){if(G.callback===null)a(E);else if(G.startTime<=D)a(E),G.sortIndex=G.expirationTime,n(g,G);else break;G=o(E)}}function le(D){if(q=!1,ae(D),!X)if(o(g)!==null)X=!0,Ge(de);else{var G=o(E);G!==null&&Ee(le,G.startTime-D)}}function de(D,G){X=!1,q&&(q=!1,Q(Fe),Fe=-1),V=!0;var F=R;try{for(ae(G),b=o(g);b!==null&&(!(b.expirationTime>G)||D&&!bn());){var w=b.callback;if(typeof w=="function"){b.callback=null,R=b.priorityLevel;var T=w(b.expirationTime<=G);G=i.unstable_now(),typeof T=="function"?b.callback=T:b===o(g)&&a(g),ae(G)}else a(g);b=o(g)}if(b!==null)var J=!0;else{var te=o(E);te!==null&&Ee(le,te.startTime-G),J=!1}return J}finally{b=null,R=F,V=!1}}var Ie=!1,Ce=null,Fe=-1,st=5,ht=-1;function bn(){return!(i.unstable_now()-ht<st)}function kt(){if(Ce!==null){var D=i.unstable_now();ht=D;var G=!0;try{G=Ce(!0,D)}finally{G?Ze():(Ie=!1,Ce=null)}}else Ie=!1}var Ze;if(typeof ee=="function")Ze=function(){ee(kt)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,It=pt.port2;pt.port1.onmessage=kt,Ze=function(){It.postMessage(null)}}else Ze=function(){H(kt,0)};function Ge(D){Ce=D,Ie||(Ie=!0,Ze())}function Ee(D,G){Fe=H(function(){D(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){X||V||(X=!0,Ge(de))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):st=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return o(g)},i.unstable_next=function(D){switch(R){case 1:case 2:case 3:var G=3;break;default:G=R}var F=R;R=G;try{return D()}finally{R=F}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=R;R=D;try{return G()}finally{R=F}},i.unstable_scheduleCallback=function(D,G,F){var w=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?w+F:w):F=w,D){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=F+T,D={id:I++,callback:G,priorityLevel:D,startTime:F,expirationTime:T,sortIndex:-1},F>w?(D.sortIndex=F,n(E,D),o(g)===null&&D===o(E)&&(q?(Q(Fe),Fe=-1):q=!0,Ee(le,F-w))):(D.sortIndex=T,n(g,D),X||V||(X=!0,Ge(de))),D},i.unstable_shouldYield=bn,i.unstable_wrapCallback=function(D){var G=R;return function(){var F=R;R=G;try{return D.apply(this,arguments)}finally{R=F}}}}(Il)),Il}var zd;function Tv(){return zd||(zd=1,kl.exports=xv()),kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Pv(){if(Ud)return Je;Ud=1;var i=mu(),n=Tv();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,u={};function f(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(u[e]=t,e=0;e<t.length;e++)a.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},b={};function R(e){return g.call(b,e)?!0:g.call(I,e)?!1:E.test(e)?b[e]=!0:(I[e]=!0,!1)}function V(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,r,s){if(t===null||typeof t>"u"||V(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,r,s,l,c,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,ee);H[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,ee);H[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,ee);H[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,t,r,s){var l=H.hasOwnProperty(t)?H[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,r,l,s)&&(r=null),s||l===null?R(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,s=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var le=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),Fe=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),ht=Symbol.for("react.provider"),bn=Symbol.for("react.context"),kt=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),It=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),D=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,w;function T(e){if(w===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var J=!1;function te(e,t){if(!e||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var s=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){s=k}e.call(t.prototype)}else{try{throw Error()}catch(k){s=k}e()}}catch(k){if(k&&s&&typeof k.stack=="string"){for(var l=k.stack.split(`
`),c=s.stack.split(`
`),d=l.length-1,m=c.length-1;1<=d&&0<=m&&l[d]!==c[m];)m--;for(;1<=d&&0<=m;d--,m--)if(l[d]!==c[m]){if(d!==1||m!==1)do if(d--,m--,0>m||l[d]!==c[m]){var v=`
`+l[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=m);break}}}finally{J=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?T(e):""}function ie(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ce:return"Fragment";case Ie:return"Portal";case st:return"Profiler";case Fe:return"StrictMode";case Ze:return"Suspense";case pt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bn:return(e.displayName||"Context")+".Consumer";case ht:return(e._context.displayName||"Context")+".Provider";case kt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case It:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===Fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=ye(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=et(e))}function zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ye(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ts(e,t){var r=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Uu(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bu(e,t){t=t.checked,t!=null&&ae(e,"checked",t,!1)}function Ps(e,t){Bu(e,t);var r=ue(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ns(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ns(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ns(e,t,r){(t!=="number"||Bi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mr=Array.isArray;function tr(e,t,r,s){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function As(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Mr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function $u(e,t){var r=ue(t.value),s=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vi,Ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tm=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function Yu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function Qu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,l=Yu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,l):e[r]=l}}var Pm=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bs(e,t){if(t){if(Pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ds=null;function Ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ms=null,nr=null,rr=null;function qu(e){if(e=si(e)){if(typeof Ms!="function")throw Error(o(280));var t=e.stateNode;t&&(t=fo(t),Ms(e.stateNode,e.type,t))}}function Xu(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Ju(){if(nr){var e=nr,t=rr;if(rr=nr=null,qu(e),t)for(e=0;e<t.length;e++)qu(t[e])}}function Zu(e,t){return e(t)}function ec(){}var Fs=!1;function tc(e,t,r){if(Fs)return e(t,r);Fs=!0;try{return Zu(e,t,r)}finally{Fs=!1,(nr!==null||rr!==null)&&(ec(),Ju())}}function zr(e,t){var r=e.stateNode;if(r===null)return null;var s=fo(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var js=!1;if(p)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){js=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{js=!1}function Nm(e,t,r,s,l,c,d,m,v){var k=Array.prototype.slice.call(arguments,3);try{t.apply(r,k)}catch(P){this.onError(P)}}var Br=!1,Hi=null,$i=!1,zs=null,Am={onError:function(e){Br=!0,Hi=e}};function Om(e,t,r,s,l,c,d,m,v){Br=!1,Hi=null,Nm.apply(Am,arguments)}function bm(e,t,r,s,l,c,d,m,v){if(Om.apply(this,arguments),Br){if(Br){var k=Hi;Br=!1,Hi=null}else throw Error(o(198));$i||($i=!0,zs=k)}}function Rn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function nc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rc(e){if(Rn(e)!==e)throw Error(o(188))}function Rm(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,s=t;;){var l=r.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){r=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===r)return rc(l),e;if(c===s)return rc(l),t;c=c.sibling}throw Error(o(188))}if(r.return!==s.return)r=l,s=c;else{for(var d=!1,m=l.child;m;){if(m===r){d=!0,r=l,s=c;break}if(m===s){d=!0,s=l,r=c;break}m=m.sibling}if(!d){for(m=c.child;m;){if(m===r){d=!0,r=c,s=l;break}if(m===s){d=!0,s=c,r=l;break}m=m.sibling}if(!d)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function ic(e){return e=Rm(e),e!==null?oc(e):null}function oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oc(e);if(t!==null)return t;e=e.sibling}return null}var sc=n.unstable_scheduleCallback,ac=n.unstable_cancelCallback,Dm=n.unstable_shouldYield,Lm=n.unstable_requestPaint,xe=n.unstable_now,Mm=n.unstable_getCurrentPriorityLevel,Us=n.unstable_ImmediatePriority,lc=n.unstable_UserBlockingPriority,Wi=n.unstable_NormalPriority,Fm=n.unstable_LowPriority,uc=n.unstable_IdlePriority,Gi=null,Ct=null;function jm(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Bm,zm=Math.log,Um=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(zm(e)/Um|0)|0}var Ki=64,Yi=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,l=e.suspendedLanes,c=e.pingedLanes,d=r&268435455;if(d!==0){var m=d&~l;m!==0?s=Vr(m):(c&=d,c!==0&&(s=Vr(c)))}else d=r&~l,d!==0?s=Vr(d):c!==0&&(s=Vr(c));if(s===0)return 0;if(t!==0&&t!==s&&!(t&l)&&(l=s&-s,c=t&-t,l>=c||l===16&&(c&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-mt(t),l=1<<r,s|=e[r],t&=~l;return s}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-mt(c),m=1<<d,v=l[d];v===-1?(!(m&r)||m&s)&&(l[d]=Vm(m,t)):v<=t&&(e.expiredLanes|=m),c&=~m}}function Bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cc(){var e=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),e}function Vs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Hr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=r}function $m(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-mt(r),c=1<<l;t[l]=0,s[l]=-1,e[l]=-1,r&=~c}}function Hs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-mt(r),l=1<<s;l&t|e[s]&t&&(e[s]|=t),r&=~l}}var ce=0;function fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dc,$s,hc,pc,mc,Ws=!1,qi=[],Zt=null,en=null,tn=null,$r=new Map,Wr=new Map,nn=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Gr(e,t,r,s,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},t!==null&&(t=si(t),t!==null&&$s(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Gm(e,t,r,s,l){switch(t){case"focusin":return Zt=Gr(Zt,e,t,r,s,l),!0;case"dragenter":return en=Gr(en,e,t,r,s,l),!0;case"mouseover":return tn=Gr(tn,e,t,r,s,l),!0;case"pointerover":var c=l.pointerId;return $r.set(c,Gr($r.get(c)||null,e,t,r,s,l)),!0;case"gotpointercapture":return c=l.pointerId,Wr.set(c,Gr(Wr.get(c)||null,e,t,r,s,l)),!0}return!1}function vc(e){var t=Dn(e.target);if(t!==null){var r=Rn(t);if(r!==null){if(t=r.tag,t===13){if(t=nc(r),t!==null){e.blockedOn=t,mc(e.priority,function(){hc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ds=s,r.target.dispatchEvent(s),Ds=null}else return t=si(r),t!==null&&$s(t),e.blockedOn=r,!1;t.shift()}return!0}function yc(e,t,r){Xi(e)&&r.delete(t)}function Km(){Ws=!1,Zt!==null&&Xi(Zt)&&(Zt=null),en!==null&&Xi(en)&&(en=null),tn!==null&&Xi(tn)&&(tn=null),$r.forEach(yc),Wr.forEach(yc)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ws||(Ws=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Km)))}function Yr(e){function t(l){return Kr(l,e)}if(0<qi.length){Kr(qi[0],e);for(var r=1;r<qi.length;r++){var s=qi[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Zt!==null&&Kr(Zt,e),en!==null&&Kr(en,e),tn!==null&&Kr(tn,e),$r.forEach(t),Wr.forEach(t),r=0;r<nn.length;r++)s=nn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<nn.length&&(r=nn[0],r.blockedOn===null);)vc(r),r.blockedOn===null&&nn.shift()}var ir=le.ReactCurrentBatchConfig,Ji=!0;function Ym(e,t,r,s){var l=ce,c=ir.transition;ir.transition=null;try{ce=1,Gs(e,t,r,s)}finally{ce=l,ir.transition=c}}function Qm(e,t,r,s){var l=ce,c=ir.transition;ir.transition=null;try{ce=4,Gs(e,t,r,s)}finally{ce=l,ir.transition=c}}function Gs(e,t,r,s){if(Ji){var l=Ks(e,t,r,s);if(l===null)ca(e,t,s,Zi,r),gc(e,s);else if(Gm(l,e,t,r,s))s.stopPropagation();else if(gc(e,s),t&4&&-1<Wm.indexOf(e)){for(;l!==null;){var c=si(l);if(c!==null&&dc(c),c=Ks(e,t,r,s),c===null&&ca(e,t,s,Zi,r),c===l)break;l=c}l!==null&&s.stopPropagation()}else ca(e,t,s,null,r)}}var Zi=null;function Ks(e,t,r,s){if(Zi=null,e=Ls(s),e=Dn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=nc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zi=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mm()){case Us:return 1;case lc:return 4;case Wi:case Fm:return 16;case uc:return 536870912;default:return 16}default:return 16}}var rn=null,Ys=null,eo=null;function _c(){if(eo)return eo;var e,t=Ys,r=t.length,s,l="value"in rn?rn.value:rn.textContent,c=l.length;for(e=0;e<r&&t[e]===l[e];e++);var d=r-e;for(s=1;s<=d&&t[r-s]===l[c-s];s++);return eo=l.slice(e,1<s?1-s:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function Sc(){return!1}function tt(e){function t(r,s,l,c,d){this._reactName=r,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(c):c[m]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?no:Sc,this.isPropagationStopped=Sc,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=tt(or),Qr=F({},or,{view:0,detail:0}),qm=tt(Qr),qs,Xs,qr,ro=F({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(qs=e.screenX-qr.screenX,Xs=e.screenY-qr.screenY):Xs=qs=0,qr=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),Ec=tt(ro),Xm=F({},ro,{dataTransfer:0}),Jm=tt(Xm),Zm=F({},Qr,{relatedTarget:0}),Js=tt(Zm),eg=F({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=tt(eg),ng=F({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=tt(ng),ig=F({},or,{data:0}),kc=tt(ig),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ag[e])?!!t[e]:!1}function Zs(){return lg}var ug=F({},Qr,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cg=tt(ug),fg=F({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ic=tt(fg),dg=F({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),hg=tt(dg),pg=F({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),mg=tt(pg),gg=F({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=tt(gg),yg=[9,13,27,32],ea=p&&"CompositionEvent"in window,Xr=null;p&&"documentMode"in document&&(Xr=document.documentMode);var wg=p&&"TextEvent"in window&&!Xr,Cc=p&&(!ea||Xr&&8<Xr&&11>=Xr),xc=" ",Tc=!1;function Pc(e,t){switch(e){case"keyup":return yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function _g(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Tc=!0,xc);case"textInput":return e=t.data,e===xc&&Tc?null:e;default:return null}}function Sg(e,t){if(sr)return e==="compositionend"||!ea&&Pc(e,t)?(e=_c(),eo=Ys=rn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eg[e.type]:t==="textarea"}function Oc(e,t,r,s){Xu(s),t=lo(t,"onChange"),0<t.length&&(r=new Qs("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Jr=null,Zr=null;function kg(e){Qc(e,0)}function io(e){var t=fr(e);if(zu(t))return e}function Ig(e,t){if(e==="change")return t}var bc=!1;if(p){var ta;if(p){var na="oninput"in document;if(!na){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),na=typeof Rc.oninput=="function"}ta=na}else ta=!1;bc=ta&&(!document.documentMode||9<document.documentMode)}function Dc(){Jr&&(Jr.detachEvent("onpropertychange",Lc),Zr=Jr=null)}function Lc(e){if(e.propertyName==="value"&&io(Zr)){var t=[];Oc(t,Zr,e,Ls(e)),tc(kg,t)}}function Cg(e,t,r){e==="focusin"?(Dc(),Jr=t,Zr=r,Jr.attachEvent("onpropertychange",Lc)):e==="focusout"&&Dc()}function xg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(Zr)}function Tg(e,t){if(e==="click")return io(t)}function Pg(e,t){if(e==="input"||e==="change")return io(t)}function Ng(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Ng;function ei(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var l=r[s];if(!g.call(t,l)||!gt(e[l],t[l]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var r=Mc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mc(r)}}function jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Bi(e.document)}return t}function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ag(e){var t=zc(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&jc(r.ownerDocument.documentElement,r)){if(s!==null&&ra(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,c=Math.min(s.start,l);s=s.end===void 0?c:Math.min(s.end,l),!e.extend&&c>s&&(l=s,s=c,c=l),l=Fc(r,c);var d=Fc(r,s);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),c>s?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=p&&"documentMode"in document&&11>=document.documentMode,ar=null,ia=null,ti=null,oa=!1;function Uc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;oa||ar==null||ar!==Bi(s)||(s=ar,"selectionStart"in s&&ra(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ti&&ei(ti,s)||(ti=s,s=lo(ia,"onSelect"),0<s.length&&(t=new Qs("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=ar)))}function oo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var lr={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},sa={},Bc={};p&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function so(e){if(sa[e])return sa[e];if(!lr[e])return e;var t=lr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bc)return sa[e]=t[r];return e}var Vc=so("animationend"),Hc=so("animationiteration"),$c=so("animationstart"),Wc=so("transitionend"),Gc=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){Gc.set(e,t),f(t,[e])}for(var aa=0;aa<Kc.length;aa++){var la=Kc[aa],bg=la.toLowerCase(),Rg=la[0].toUpperCase()+la.slice(1);on(bg,"on"+Rg)}on(Vc,"onAnimationEnd"),on(Hc,"onAnimationIteration"),on($c,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(Wc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function Yc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,bm(s,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],l=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var d=s.length-1;0<=d;d--){var m=s[d],v=m.instance,k=m.currentTarget;if(m=m.listener,v!==c&&l.isPropagationStopped())break e;Yc(l,m,k),c=v}else for(d=0;d<s.length;d++){if(m=s[d],v=m.instance,k=m.currentTarget,m=m.listener,v!==c&&l.isPropagationStopped())break e;Yc(l,m,k),c=v}}}if($i)throw e=zs,$i=!1,zs=null,e}function me(e,t){var r=t[ga];r===void 0&&(r=t[ga]=new Set);var s=e+"__bubble";r.has(s)||(qc(t,e,2,!1),r.add(s))}function ua(e,t,r){var s=0;t&&(s|=4),qc(r,e,s,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[ao]){e[ao]=!0,a.forEach(function(r){r!=="selectionchange"&&(Dg.has(r)||ua(r,!1,e),ua(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,ua("selectionchange",!1,t))}}function qc(e,t,r,s){switch(wc(t)){case 1:var l=Ym;break;case 4:l=Qm;break;default:l=Gs}r=l.bind(null,t,r,e),l=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function ca(e,t,r,s,l){var c=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var m=s.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(d===4)for(d=s.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;d=d.return}for(;m!==null;){if(d=Dn(m),d===null)return;if(v=d.tag,v===5||v===6){s=c=d;continue e}m=m.parentNode}}s=s.return}tc(function(){var k=c,P=Ls(r),N=[];e:{var C=Gc.get(e);if(C!==void 0){var L=Qs,j=e;switch(e){case"keypress":if(to(r)===0)break e;case"keydown":case"keyup":L=cg;break;case"focusin":j="focus",L=Js;break;case"focusout":j="blur",L=Js;break;case"beforeblur":case"afterblur":L=Js;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=hg;break;case Vc:case Hc:case $c:L=tg;break;case Wc:L=mg;break;case"scroll":L=qm;break;case"wheel":L=vg;break;case"copy":case"cut":case"paste":L=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Ic}var z=(t&4)!==0,Te=!z&&e==="scroll",_=z?C!==null?C+"Capture":null:C;z=[];for(var y=k,S;y!==null;){S=y;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,_!==null&&(O=zr(y,_),O!=null&&z.push(ii(y,O,S)))),Te)break;y=y.return}0<z.length&&(C=new L(C,j,null,r,P),N.push({event:C,listeners:z}))}}if(!(t&7)){e:{if(C=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",C&&r!==Ds&&(j=r.relatedTarget||r.fromElement)&&(Dn(j)||j[Mt]))break e;if((L||C)&&(C=P.window===P?P:(C=P.ownerDocument)?C.defaultView||C.parentWindow:window,L?(j=r.relatedTarget||r.toElement,L=k,j=j?Dn(j):null,j!==null&&(Te=Rn(j),j!==Te||j.tag!==5&&j.tag!==6)&&(j=null)):(L=null,j=k),L!==j)){if(z=Ec,O="onMouseLeave",_="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(z=Ic,O="onPointerLeave",_="onPointerEnter",y="pointer"),Te=L==null?C:fr(L),S=j==null?C:fr(j),C=new z(O,y+"leave",L,r,P),C.target=Te,C.relatedTarget=S,O=null,Dn(P)===k&&(z=new z(_,y+"enter",j,r,P),z.target=S,z.relatedTarget=Te,O=z),Te=O,L&&j)t:{for(z=L,_=j,y=0,S=z;S;S=ur(S))y++;for(S=0,O=_;O;O=ur(O))S++;for(;0<y-S;)z=ur(z),y--;for(;0<S-y;)_=ur(_),S--;for(;y--;){if(z===_||_!==null&&z===_.alternate)break t;z=ur(z),_=ur(_)}z=null}else z=null;L!==null&&Xc(N,C,L,z,!1),j!==null&&Te!==null&&Xc(N,Te,j,z,!0)}}e:{if(C=k?fr(k):window,L=C.nodeName&&C.nodeName.toLowerCase(),L==="select"||L==="input"&&C.type==="file")var U=Ig;else if(Ac(C))if(bc)U=Pg;else{U=xg;var $=Cg}else(L=C.nodeName)&&L.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(U=Tg);if(U&&(U=U(e,k))){Oc(N,U,r,P);break e}$&&$(e,C,k),e==="focusout"&&($=C._wrapperState)&&$.controlled&&C.type==="number"&&Ns(C,"number",C.value)}switch($=k?fr(k):window,e){case"focusin":(Ac($)||$.contentEditable==="true")&&(ar=$,ia=k,ti=null);break;case"focusout":ti=ia=ar=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,Uc(N,r,P);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":Uc(N,r,P)}var W;if(ea)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else sr?Pc(e,r)&&(K="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(K="onCompositionStart");K&&(Cc&&r.locale!=="ko"&&(sr||K!=="onCompositionStart"?K==="onCompositionEnd"&&sr&&(W=_c()):(rn=P,Ys="value"in rn?rn.value:rn.textContent,sr=!0)),$=lo(k,K),0<$.length&&(K=new kc(K,e,null,r,P),N.push({event:K,listeners:$}),W?K.data=W:(W=Nc(r),W!==null&&(K.data=W)))),(W=wg?_g(e,r):Sg(e,r))&&(k=lo(k,"onBeforeInput"),0<k.length&&(P=new kc("onBeforeInput","beforeinput",null,r,P),N.push({event:P,listeners:k}),P.data=W))}Qc(N,t)})}function ii(e,t,r){return{instance:e,listener:t,currentTarget:r}}function lo(e,t){for(var r=t+"Capture",s=[];e!==null;){var l=e,c=l.stateNode;l.tag===5&&c!==null&&(l=c,c=zr(e,r),c!=null&&s.unshift(ii(e,c,l)),c=zr(e,t),c!=null&&s.push(ii(e,c,l))),e=e.return}return s}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,r,s,l){for(var c=t._reactName,d=[];r!==null&&r!==s;){var m=r,v=m.alternate,k=m.stateNode;if(v!==null&&v===s)break;m.tag===5&&k!==null&&(m=k,l?(v=zr(r,c),v!=null&&d.unshift(ii(r,v,m))):l||(v=zr(r,c),v!=null&&d.push(ii(r,v,m)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var Lg=/\r\n?/g,Mg=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(Lg,`
`).replace(Mg,"")}function uo(e,t,r){if(t=Jc(t),Jc(e)!==t&&r)throw Error(o(425))}function co(){}var fa=null,da=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(zg)}:pa;function zg(e){setTimeout(function(){throw e})}function ma(e,t){var r=t,s=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(s===0){e.removeChild(l),Yr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=l}while(r);Yr(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),xt="__reactFiber$"+cr,oi="__reactProps$"+cr,Mt="__reactContainer$"+cr,ga="__reactEvents$"+cr,Ug="__reactListeners$"+cr,Bg="__reactHandles$"+cr;function Dn(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Mt]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ef(e);e!==null;){if(r=e[xt])return r;e=ef(e)}return t}e=r,r=e.parentNode}return null}function si(e){return e=e[xt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function fo(e){return e[oi]||null}var va=[],dr=-1;function an(e){return{current:e}}function ge(e){0>dr||(e.current=va[dr],va[dr]=null,dr--)}function pe(e,t){dr++,va[dr]=e.current,e.current=t}var ln={},je=an(ln),Ke=an(!1),Ln=ln;function hr(e,t){var r=e.type.contextTypes;if(!r)return ln;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},c;for(c in r)l[c]=t[c];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ye(e){return e=e.childContextTypes,e!=null}function ho(){ge(Ke),ge(je)}function tf(e,t,r){if(je.current!==ln)throw Error(o(168));pe(je,t),pe(Ke,r)}function nf(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(o(108,he(e)||"Unknown",l));return F({},r,s)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Ln=je.current,pe(je,e),pe(Ke,Ke.current),!0}function rf(e,t,r){var s=e.stateNode;if(!s)throw Error(o(169));r?(e=nf(e,t,Ln),s.__reactInternalMemoizedMergedChildContext=e,ge(Ke),ge(je),pe(je,e)):ge(Ke),pe(Ke,r)}var Ft=null,mo=!1,ya=!1;function of(e){Ft===null?Ft=[e]:Ft.push(e)}function Vg(e){mo=!0,of(e)}function un(){if(!ya&&Ft!==null){ya=!0;var e=0,t=ce;try{var r=Ft;for(ce=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Ft=null,mo=!1}catch(l){throw Ft!==null&&(Ft=Ft.slice(e+1)),sc(Us,un),l}finally{ce=t,ya=!1}}return null}var pr=[],mr=0,go=null,vo=0,at=[],lt=0,Mn=null,jt=1,zt="";function Fn(e,t){pr[mr++]=vo,pr[mr++]=go,go=e,vo=t}function sf(e,t,r){at[lt++]=jt,at[lt++]=zt,at[lt++]=Mn,Mn=e;var s=jt;e=zt;var l=32-mt(s)-1;s&=~(1<<l),r+=1;var c=32-mt(t)+l;if(30<c){var d=l-l%5;c=(s&(1<<d)-1).toString(32),s>>=d,l-=d,jt=1<<32-mt(t)+l|r<<l|s,zt=c+e}else jt=1<<c|r<<l|s,zt=e}function wa(e){e.return!==null&&(Fn(e,1),sf(e,1,0))}function _a(e){for(;e===go;)go=pr[--mr],pr[mr]=null,vo=pr[--mr],pr[mr]=null;for(;e===Mn;)Mn=at[--lt],at[lt]=null,zt=at[--lt],at[lt]=null,jt=at[--lt],at[lt]=null}var nt=null,rt=null,we=!1,vt=null;function af(e,t){var r=dt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,rt=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Mn!==null?{id:jt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=dt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,nt=e,rt=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(we){var t=rt;if(t){var r=t;if(!lf(e,t)){if(Sa(e))throw Error(o(418));t=sn(r.nextSibling);var s=nt;t&&lf(e,t)?af(s,r):(e.flags=e.flags&-4097|2,we=!1,nt=e)}}else{if(Sa(e))throw Error(o(418));e.flags=e.flags&-4097|2,we=!1,nt=e}}}function uf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function yo(e){if(e!==nt)return!1;if(!we)return uf(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=rt)){if(Sa(e))throw cf(),Error(o(418));for(;t;)af(e,t),t=sn(t.nextSibling)}if(uf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){rt=sn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=nt?sn(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=rt;e;)e=sn(e.nextSibling)}function gr(){rt=nt=null,we=!1}function ka(e){vt===null?vt=[e]:vt.push(e)}var Hg=le.ReactCurrentBatchConfig;function ai(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var s=r.stateNode}if(!s)throw Error(o(147,e));var l=s,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(d){var m=l.refs;d===null?delete m[c]:m[c]=d},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ff(e){var t=e._init;return t(e._payload)}function df(e){function t(_,y){if(e){var S=_.deletions;S===null?(_.deletions=[y],_.flags|=16):S.push(y)}}function r(_,y){if(!e)return null;for(;y!==null;)t(_,y),y=y.sibling;return null}function s(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function l(_,y){return _=vn(_,y),_.index=0,_.sibling=null,_}function c(_,y,S){return _.index=S,e?(S=_.alternate,S!==null?(S=S.index,S<y?(_.flags|=2,y):S):(_.flags|=2,y)):(_.flags|=1048576,y)}function d(_){return e&&_.alternate===null&&(_.flags|=2),_}function m(_,y,S,O){return y===null||y.tag!==6?(y=pl(S,_.mode,O),y.return=_,y):(y=l(y,S),y.return=_,y)}function v(_,y,S,O){var U=S.type;return U===Ce?P(_,y,S.props.children,O,S.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ge&&ff(U)===y.type)?(O=l(y,S.props),O.ref=ai(_,y,S),O.return=_,O):(O=Ho(S.type,S.key,S.props,null,_.mode,O),O.ref=ai(_,y,S),O.return=_,O)}function k(_,y,S,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=ml(S,_.mode,O),y.return=_,y):(y=l(y,S.children||[]),y.return=_,y)}function P(_,y,S,O,U){return y===null||y.tag!==7?(y=Wn(S,_.mode,O,U),y.return=_,y):(y=l(y,S),y.return=_,y)}function N(_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=pl(""+y,_.mode,S),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case de:return S=Ho(y.type,y.key,y.props,null,_.mode,S),S.ref=ai(_,null,y),S.return=_,S;case Ie:return y=ml(y,_.mode,S),y.return=_,y;case Ge:var O=y._init;return N(_,O(y._payload),S)}if(Mr(y)||G(y))return y=Wn(y,_.mode,S,null),y.return=_,y;wo(_,y)}return null}function C(_,y,S,O){var U=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:m(_,y,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case de:return S.key===U?v(_,y,S,O):null;case Ie:return S.key===U?k(_,y,S,O):null;case Ge:return U=S._init,C(_,y,U(S._payload),O)}if(Mr(S)||G(S))return U!==null?null:P(_,y,S,O,null);wo(_,S)}return null}function L(_,y,S,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return _=_.get(S)||null,m(y,_,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case de:return _=_.get(O.key===null?S:O.key)||null,v(y,_,O,U);case Ie:return _=_.get(O.key===null?S:O.key)||null,k(y,_,O,U);case Ge:var $=O._init;return L(_,y,S,$(O._payload),U)}if(Mr(O)||G(O))return _=_.get(S)||null,P(y,_,O,U,null);wo(y,O)}return null}function j(_,y,S,O){for(var U=null,$=null,W=y,K=y=0,De=null;W!==null&&K<S.length;K++){W.index>K?(De=W,W=null):De=W.sibling;var se=C(_,W,S[K],O);if(se===null){W===null&&(W=De);break}e&&W&&se.alternate===null&&t(_,W),y=c(se,y,K),$===null?U=se:$.sibling=se,$=se,W=De}if(K===S.length)return r(_,W),we&&Fn(_,K),U;if(W===null){for(;K<S.length;K++)W=N(_,S[K],O),W!==null&&(y=c(W,y,K),$===null?U=W:$.sibling=W,$=W);return we&&Fn(_,K),U}for(W=s(_,W);K<S.length;K++)De=L(W,_,K,S[K],O),De!==null&&(e&&De.alternate!==null&&W.delete(De.key===null?K:De.key),y=c(De,y,K),$===null?U=De:$.sibling=De,$=De);return e&&W.forEach(function(yn){return t(_,yn)}),we&&Fn(_,K),U}function z(_,y,S,O){var U=G(S);if(typeof U!="function")throw Error(o(150));if(S=U.call(S),S==null)throw Error(o(151));for(var $=U=null,W=y,K=y=0,De=null,se=S.next();W!==null&&!se.done;K++,se=S.next()){W.index>K?(De=W,W=null):De=W.sibling;var yn=C(_,W,se.value,O);if(yn===null){W===null&&(W=De);break}e&&W&&yn.alternate===null&&t(_,W),y=c(yn,y,K),$===null?U=yn:$.sibling=yn,$=yn,W=De}if(se.done)return r(_,W),we&&Fn(_,K),U;if(W===null){for(;!se.done;K++,se=S.next())se=N(_,se.value,O),se!==null&&(y=c(se,y,K),$===null?U=se:$.sibling=se,$=se);return we&&Fn(_,K),U}for(W=s(_,W);!se.done;K++,se=S.next())se=L(W,_,K,se.value,O),se!==null&&(e&&se.alternate!==null&&W.delete(se.key===null?K:se.key),y=c(se,y,K),$===null?U=se:$.sibling=se,$=se);return e&&W.forEach(function(Ev){return t(_,Ev)}),we&&Fn(_,K),U}function Te(_,y,S,O){if(typeof S=="object"&&S!==null&&S.type===Ce&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case de:e:{for(var U=S.key,$=y;$!==null;){if($.key===U){if(U=S.type,U===Ce){if($.tag===7){r(_,$.sibling),y=l($,S.props.children),y.return=_,_=y;break e}}else if($.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ge&&ff(U)===$.type){r(_,$.sibling),y=l($,S.props),y.ref=ai(_,$,S),y.return=_,_=y;break e}r(_,$);break}else t(_,$);$=$.sibling}S.type===Ce?(y=Wn(S.props.children,_.mode,O,S.key),y.return=_,_=y):(O=Ho(S.type,S.key,S.props,null,_.mode,O),O.ref=ai(_,y,S),O.return=_,_=O)}return d(_);case Ie:e:{for($=S.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){r(_,y.sibling),y=l(y,S.children||[]),y.return=_,_=y;break e}else{r(_,y);break}else t(_,y);y=y.sibling}y=ml(S,_.mode,O),y.return=_,_=y}return d(_);case Ge:return $=S._init,Te(_,y,$(S._payload),O)}if(Mr(S))return j(_,y,S,O);if(G(S))return z(_,y,S,O);wo(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(r(_,y.sibling),y=l(y,S),y.return=_,_=y):(r(_,y),y=pl(S,_.mode,O),y.return=_,_=y),d(_)):r(_,y)}return Te}var vr=df(!0),hf=df(!1),_o=an(null),So=null,yr=null,Ia=null;function Ca(){Ia=yr=So=null}function xa(e){var t=_o.current;ge(_o),e._currentValue=t}function Ta(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function wr(e,t){So=e,Ia=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Ia!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(So===null)throw Error(o(308));yr=e,So.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var jn=null;function Pa(e){jn===null?jn=[e]:jn.push(e)}function pf(e,t,r,s){var l=t.interleaved;return l===null?(r.next=r,Pa(t)):(r.next=l.next,l.next=r),t.interleaved=r,Ut(e,s)}function Ut(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var cn=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,re&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,Ut(e,r)}return l=s.interleaved,l===null?(t.next=t,Pa(s)):(t.next=l.next,l.next=t),s.interleaved=t,Ut(e,r)}function Eo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Hs(e,r)}}function gf(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var l=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?l=c=d:c=c.next=d,r=r.next}while(r!==null);c===null?l=c=t:c=c.next=t}else l=c=t;r={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ko(e,t,r,s){var l=e.updateQueue;cn=!1;var c=l.firstBaseUpdate,d=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var v=m,k=v.next;v.next=null,d===null?c=k:d.next=k,d=v;var P=e.alternate;P!==null&&(P=P.updateQueue,m=P.lastBaseUpdate,m!==d&&(m===null?P.firstBaseUpdate=k:m.next=k,P.lastBaseUpdate=v))}if(c!==null){var N=l.baseState;d=0,P=k=v=null,m=c;do{var C=m.lane,L=m.eventTime;if((s&C)===C){P!==null&&(P=P.next={eventTime:L,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var j=e,z=m;switch(C=t,L=r,z.tag){case 1:if(j=z.payload,typeof j=="function"){N=j.call(L,N,C);break e}N=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=z.payload,C=typeof j=="function"?j.call(L,N,C):j,C==null)break e;N=F({},N,C);break e;case 2:cn=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,C=l.effects,C===null?l.effects=[m]:C.push(m))}else L={eventTime:L,lane:C,tag:m.tag,payload:m.payload,callback:m.callback,next:null},P===null?(k=P=L,v=N):P=P.next=L,d|=C;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;C=m,m=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);if(P===null&&(v=N),l.baseState=v,l.firstBaseUpdate=k,l.lastBaseUpdate=P,t=l.shared.interleaved,t!==null){l=t;do d|=l.lane,l=l.next;while(l!==t)}else c===null&&(l.shared.lanes=0);Bn|=d,e.lanes=d,e.memoizedState=N}}function vf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=r,typeof l!="function")throw Error(o(191,l));l.call(s)}}}var li={},Tt=an(li),ui=an(li),ci=an(li);function zn(e){if(e===li)throw Error(o(174));return e}function Aa(e,t){switch(pe(ci,t),pe(ui,e),pe(Tt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Os(t,e)}ge(Tt),pe(Tt,t)}function _r(){ge(Tt),ge(ui),ge(ci)}function yf(e){zn(ci.current);var t=zn(Tt.current),r=Os(t,e.type);t!==r&&(pe(ui,e),pe(Tt,r))}function Oa(e){ui.current===e&&(ge(Tt),ge(ui))}var _e=an(0);function Io(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=[];function Ra(){for(var e=0;e<ba.length;e++)ba[e]._workInProgressVersionPrimary=null;ba.length=0}var Co=le.ReactCurrentDispatcher,Da=le.ReactCurrentBatchConfig,Un=0,Se=null,Ae=null,be=null,xo=!1,fi=!1,di=0,$g=0;function ze(){throw Error(o(321))}function La(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!gt(e[r],t[r]))return!1;return!0}function Ma(e,t,r,s,l,c){if(Un=c,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?Yg:Qg,e=r(s,l),fi){c=0;do{if(fi=!1,di=0,25<=c)throw Error(o(301));c+=1,be=Ae=null,t.updateQueue=null,Co.current=qg,e=r(s,l)}while(fi)}if(Co.current=No,t=Ae!==null&&Ae.next!==null,Un=0,be=Ae=Se=null,xo=!1,t)throw Error(o(300));return e}function Fa(){var e=di!==0;return di=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?Se.memoizedState=be=e:be=be.next=e,be}function ct(){if(Ae===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=be===null?Se.memoizedState:be.next;if(t!==null)be=t,Ae=e;else{if(e===null)throw Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},be===null?Se.memoizedState=be=e:be=be.next=e}return be}function hi(e,t){return typeof t=="function"?t(e):t}function ja(e){var t=ct(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=Ae,l=s.baseQueue,c=r.pending;if(c!==null){if(l!==null){var d=l.next;l.next=c.next,c.next=d}s.baseQueue=l=c,r.pending=null}if(l!==null){c=l.next,s=s.baseState;var m=d=null,v=null,k=c;do{var P=k.lane;if((Un&P)===P)v!==null&&(v=v.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),s=k.hasEagerState?k.eagerState:e(s,k.action);else{var N={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};v===null?(m=v=N,d=s):v=v.next=N,Se.lanes|=P,Bn|=P}k=k.next}while(k!==null&&k!==c);v===null?d=s:v.next=m,gt(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseState=d,t.baseQueue=v,r.lastRenderedState=s}if(e=r.interleaved,e!==null){l=e;do c=l.lane,Se.lanes|=c,Bn|=c,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function za(e){var t=ct(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,l=r.pending,c=t.memoizedState;if(l!==null){r.pending=null;var d=l=l.next;do c=e(c,d.action),d=d.next;while(d!==l);gt(c,t.memoizedState)||(Qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,s]}function wf(){}function _f(e,t){var r=Se,s=ct(),l=t(),c=!gt(s.memoizedState,l);if(c&&(s.memoizedState=l,Qe=!0),s=s.queue,Ua(kf.bind(null,r,s,e),[e]),s.getSnapshot!==t||c||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,pi(9,Ef.bind(null,r,s,l,t),void 0,null),Re===null)throw Error(o(349));Un&30||Sf(r,t,l)}return l}function Sf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ef(e,t,r,s){t.value=r,t.getSnapshot=s,If(t)&&Cf(e)}function kf(e,t,r){return r(function(){If(t)&&Cf(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!gt(e,r)}catch{return!0}}function Cf(e){var t=Ut(e,1);t!==null&&St(t,e,1,-1)}function xf(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=Kg.bind(null,Se,e),[t.memoizedState,e]}function pi(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Tf(){return ct().memoizedState}function To(e,t,r,s){var l=Pt();Se.flags|=e,l.memoizedState=pi(1|t,r,void 0,s===void 0?null:s)}function Po(e,t,r,s){var l=ct();s=s===void 0?null:s;var c=void 0;if(Ae!==null){var d=Ae.memoizedState;if(c=d.destroy,s!==null&&La(s,d.deps)){l.memoizedState=pi(t,r,c,s);return}}Se.flags|=e,l.memoizedState=pi(1|t,r,c,s)}function Pf(e,t){return To(8390656,8,e,t)}function Ua(e,t){return Po(2048,8,e,t)}function Nf(e,t){return Po(4,2,e,t)}function Af(e,t){return Po(4,4,e,t)}function Of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,r){return r=r!=null?r.concat([e]):null,Po(4,4,Of.bind(null,t,e),r)}function Ba(){}function Rf(e,t){var r=ct();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&La(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Df(e,t){var r=ct();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&La(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Lf(e,t,r){return Un&21?(gt(r,t)||(r=cc(),Se.lanes|=r,Bn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=r)}function Wg(e,t){var r=ce;ce=r!==0&&4>r?r:4,e(!0);var s=Da.transition;Da.transition={};try{e(!1),t()}finally{ce=r,Da.transition=s}}function Mf(){return ct().memoizedState}function Gg(e,t,r){var s=mn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Ff(e))jf(t,r);else if(r=pf(e,t,r,s),r!==null){var l=$e();St(r,e,s,l),zf(r,t,s)}}function Kg(e,t,r){var s=mn(e),l={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ff(e))jf(t,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,m=c(d,r);if(l.hasEagerState=!0,l.eagerState=m,gt(m,d)){var v=t.interleaved;v===null?(l.next=l,Pa(t)):(l.next=v.next,v.next=l),t.interleaved=l;return}}catch{}finally{}r=pf(e,t,l,s),r!==null&&(l=$e(),St(r,e,s,l),zf(r,t,s))}}function Ff(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function jf(e,t){fi=xo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function zf(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Hs(e,r)}}var No={readContext:ut,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Yg={readContext:ut,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Pf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,To(4194308,4,Of.bind(null,t,e),r)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var r=Pt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Pt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Gg.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:xf,useDebugValue:Ba,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=xf(!1),t=e[0];return e=Wg.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Se,l=Pt();if(we){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Re===null)throw Error(o(349));Un&30||Sf(s,t,r)}l.memoizedState=r;var c={value:r,getSnapshot:t};return l.queue=c,Pf(kf.bind(null,s,c,e),[e]),s.flags|=2048,pi(9,Ef.bind(null,s,c,r,t),void 0,null),r},useId:function(){var e=Pt(),t=Re.identifierPrefix;if(we){var r=zt,s=jt;r=(s&~(1<<32-mt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=di++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=$g++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qg={readContext:ut,useCallback:Rf,useContext:ut,useEffect:Ua,useImperativeHandle:bf,useInsertionEffect:Nf,useLayoutEffect:Af,useMemo:Df,useReducer:ja,useRef:Tf,useState:function(){return ja(hi)},useDebugValue:Ba,useDeferredValue:function(e){var t=ct();return Lf(t,Ae.memoizedState,e)},useTransition:function(){var e=ja(hi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:_f,useId:Mf,unstable_isNewReconciler:!1},qg={readContext:ut,useCallback:Rf,useContext:ut,useEffect:Ua,useImperativeHandle:bf,useInsertionEffect:Nf,useLayoutEffect:Af,useMemo:Df,useReducer:za,useRef:Tf,useState:function(){return za(hi)},useDebugValue:Ba,useDeferredValue:function(e){var t=ct();return Ae===null?t.memoizedState=e:Lf(t,Ae.memoizedState,e)},useTransition:function(){var e=za(hi)[0],t=ct().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:_f,useId:Mf,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Va(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:F({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ao={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=$e(),l=mn(e),c=Bt(s,l);c.payload=t,r!=null&&(c.callback=r),t=fn(e,c,l),t!==null&&(St(t,e,l,s),Eo(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=$e(),l=mn(e),c=Bt(s,l);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=fn(e,c,l),t!==null&&(St(t,e,l,s),Eo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=$e(),s=mn(e),l=Bt(r,s);l.tag=2,t!=null&&(l.callback=t),t=fn(e,l,s),t!==null&&(St(t,e,s,r),Eo(t,e,s))}};function Uf(e,t,r,s,l,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,d):t.prototype&&t.prototype.isPureReactComponent?!ei(r,s)||!ei(l,c):!0}function Bf(e,t,r){var s=!1,l=ln,c=t.contextType;return typeof c=="object"&&c!==null?c=ut(c):(l=Ye(t)?Ln:je.current,s=t.contextTypes,c=(s=s!=null)?hr(e,l):ln),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=c),t}function Vf(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function Ha(e,t,r,s){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Na(e);var c=t.contextType;typeof c=="object"&&c!==null?l.context=ut(c):(c=Ye(t)?Ln:je.current,l.context=hr(e,c)),l.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Va(e,t,c,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ao.enqueueReplaceState(l,l.state,null),ko(e,r,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var r="",s=t;do r+=ie(s),s=s.return;while(s);var l=r}catch(c){l=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:l,digest:null}}function $a(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function Hf(e,t,r){r=Bt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Fo||(Fo=!0,sl=s),Wa(e,t)},r}function $f(e,t,r){r=Bt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;r.payload=function(){return s(l)},r.callback=function(){Wa(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Wa(e,t),typeof s!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Wf(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Xg;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(r)||(l.add(r),e=fv.bind(null,e,t,r),t.then(e,e))}function Gf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kf(e,t,r,s,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Bt(-1,1),t.tag=2,fn(r,t,1))),r.lanes|=1),e)}var Jg=le.ReactCurrentOwner,Qe=!1;function He(e,t,r,s){t.child=e===null?hf(t,null,r,s):vr(t,e.child,r,s)}function Yf(e,t,r,s,l){r=r.render;var c=t.ref;return wr(t,l),s=Ma(e,t,r,s,c,l),r=Fa(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Vt(e,t,l)):(we&&r&&wa(t),t.flags|=1,He(e,t,s,l),t.child)}function Qf(e,t,r,s,l){if(e===null){var c=r.type;return typeof c=="function"&&!hl(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,qf(e,t,c,s,l)):(e=Ho(r.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&l)){var d=c.memoizedProps;if(r=r.compare,r=r!==null?r:ei,r(d,s)&&e.ref===t.ref)return Vt(e,t,l)}return t.flags|=1,e=vn(c,s),e.ref=t.ref,e.return=t,t.child=e}function qf(e,t,r,s,l){if(e!==null){var c=e.memoizedProps;if(ei(c,s)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=s=c,(e.lanes&l)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Vt(e,t,l)}return Ga(e,t,r,s,l)}function Xf(e,t,r){var s=t.pendingProps,l=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(kr,it),it|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(kr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:r,pe(kr,it),it|=s}else c!==null?(s=c.baseLanes|r,t.memoizedState=null):s=r,pe(kr,it),it|=s;return He(e,t,l,r),t.child}function Jf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ga(e,t,r,s,l){var c=Ye(r)?Ln:je.current;return c=hr(t,c),wr(t,l),r=Ma(e,t,r,s,c,l),s=Fa(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Vt(e,t,l)):(we&&s&&wa(t),t.flags|=1,He(e,t,r,l),t.child)}function Zf(e,t,r,s,l){if(Ye(r)){var c=!0;po(t)}else c=!1;if(wr(t,l),t.stateNode===null)bo(e,t),Bf(t,r,s),Ha(t,r,s,l),s=!0;else if(e===null){var d=t.stateNode,m=t.memoizedProps;d.props=m;var v=d.context,k=r.contextType;typeof k=="object"&&k!==null?k=ut(k):(k=Ye(r)?Ln:je.current,k=hr(t,k));var P=r.getDerivedStateFromProps,N=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function";N||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==s||v!==k)&&Vf(t,d,s,k),cn=!1;var C=t.memoizedState;d.state=C,ko(t,s,d,l),v=t.memoizedState,m!==s||C!==v||Ke.current||cn?(typeof P=="function"&&(Va(t,r,P,s),v=t.memoizedState),(m=cn||Uf(t,r,m,s,C,v,k))?(N||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=v),d.props=s,d.state=v,d.context=k,s=m):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{d=t.stateNode,mf(e,t),m=t.memoizedProps,k=t.type===t.elementType?m:yt(t.type,m),d.props=k,N=t.pendingProps,C=d.context,v=r.contextType,typeof v=="object"&&v!==null?v=ut(v):(v=Ye(r)?Ln:je.current,v=hr(t,v));var L=r.getDerivedStateFromProps;(P=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==N||C!==v)&&Vf(t,d,s,v),cn=!1,C=t.memoizedState,d.state=C,ko(t,s,d,l);var j=t.memoizedState;m!==N||C!==j||Ke.current||cn?(typeof L=="function"&&(Va(t,r,L,s),j=t.memoizedState),(k=cn||Uf(t,r,k,s,C,j,v)||!1)?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,j,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,j,v)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=j),d.props=s,d.state=j,d.context=v,s=k):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),s=!1)}return Ka(e,t,r,s,c,l)}function Ka(e,t,r,s,l,c){Jf(e,t);var d=(t.flags&128)!==0;if(!s&&!d)return l&&rf(t,r,!1),Vt(e,t,c);s=t.stateNode,Jg.current=t;var m=d&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&d?(t.child=vr(t,e.child,null,c),t.child=vr(t,null,m,c)):He(e,t,m,c),t.memoizedState=s.state,l&&rf(t,r,!0),t.child}function ed(e){var t=e.stateNode;t.pendingContext?tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tf(e,t.context,!1),Aa(e,t.containerInfo)}function td(e,t,r,s,l){return gr(),ka(l),t.flags|=256,He(e,t,r,s),t.child}var Ya={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function nd(e,t,r){var s=t.pendingProps,l=_e.current,c=!1,d=(t.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),pe(_e,l&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=s.children,e=s.fallback,c?(s=t.mode,c=t.child,d={mode:"hidden",children:d},!(s&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=$o(d,s,0,null),e=Wn(e,s,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Qa(r),t.memoizedState=Ya,e):qa(t,d));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return Zg(e,t,d,s,m,l,r);if(c){c=s.fallback,d=t.mode,l=e.child,m=l.sibling;var v={mode:"hidden",children:s.children};return!(d&1)&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=v,t.deletions=null):(s=vn(l,v),s.subtreeFlags=l.subtreeFlags&14680064),m!==null?c=vn(m,c):(c=Wn(c,d,r,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,d=e.child.memoizedState,d=d===null?Qa(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~r,t.memoizedState=Ya,s}return c=e.child,e=c.sibling,s=vn(c,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function qa(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oo(e,t,r,s){return s!==null&&ka(s),vr(t,e.child,null,r),e=qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zg(e,t,r,s,l,c,d){if(r)return t.flags&256?(t.flags&=-257,s=$a(Error(o(422))),Oo(e,t,d,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=s.fallback,l=t.mode,s=$o({mode:"visible",children:s.children},l,0,null),c=Wn(c,l,d,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,t.mode&1&&vr(t,e.child,null,d),t.child.memoizedState=Qa(d),t.memoizedState=Ya,c);if(!(t.mode&1))return Oo(e,t,d,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var m=s.dgst;return s=m,c=Error(o(419)),s=$a(c,s,void 0),Oo(e,t,d,s)}if(m=(d&e.childLanes)!==0,Qe||m){if(s=Re,s!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|d)?0:l,l!==0&&l!==c.retryLane&&(c.retryLane=l,Ut(e,l),St(s,e,l,-1))}return dl(),s=$a(Error(o(421))),Oo(e,t,d,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=dv.bind(null,e),l._reactRetry=t,null):(e=c.treeContext,rt=sn(l.nextSibling),nt=t,we=!0,vt=null,e!==null&&(at[lt++]=jt,at[lt++]=zt,at[lt++]=Mn,jt=e.id,zt=e.overflow,Mn=t),t=qa(t,s.children),t.flags|=4096,t)}function rd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Ta(e.return,t,r)}function Xa(e,t,r,s,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=r,c.tailMode=l)}function id(e,t,r){var s=t.pendingProps,l=s.revealOrder,c=s.tail;if(He(e,t,s.children,r),s=_e.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,r,t);else if(e.tag===19)rd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(pe(_e,s),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Io(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Xa(t,!1,l,r,c);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Io(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Xa(t,!0,r,null,c);break;case"together":Xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=vn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=vn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ev(e,t,r){switch(t.tag){case 3:ed(t),gr();break;case 5:yf(t);break;case 1:Ye(t.type)&&po(t);break;case 4:Aa(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;pe(_o,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(pe(_e,_e.current&1),t.flags|=128,null):r&t.child.childLanes?nd(e,t,r):(pe(_e,_e.current&1),e=Vt(e,t,r),e!==null?e.sibling:null);pe(_e,_e.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return id(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(_e,_e.current),s)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,r)}return Vt(e,t,r)}var od,Ja,sd,ad;od=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ja=function(){},sd=function(e,t,r,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,zn(Tt.current);var c=null;switch(r){case"input":l=Ts(e,l),s=Ts(e,s),c=[];break;case"select":l=F({},l,{value:void 0}),s=F({},s,{value:void 0}),c=[];break;case"textarea":l=As(e,l),s=As(e,s),c=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=co)}bs(r,s);var d;r=null;for(k in l)if(!s.hasOwnProperty(k)&&l.hasOwnProperty(k)&&l[k]!=null)if(k==="style"){var m=l[k];for(d in m)m.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(u.hasOwnProperty(k)?c||(c=[]):(c=c||[]).push(k,null));for(k in s){var v=s[k];if(m=l!=null?l[k]:void 0,s.hasOwnProperty(k)&&v!==m&&(v!=null||m!=null))if(k==="style")if(m){for(d in m)!m.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in v)v.hasOwnProperty(d)&&m[d]!==v[d]&&(r||(r={}),r[d]=v[d])}else r||(c||(c=[]),c.push(k,r)),r=v;else k==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(c=c||[]).push(k,v)):k==="children"?typeof v!="string"&&typeof v!="number"||(c=c||[]).push(k,""+v):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(u.hasOwnProperty(k)?(v!=null&&k==="onScroll"&&me("scroll",e),c||m===v||(c=[])):(c=c||[]).push(k,v))}r&&(c=c||[]).push("style",r);var k=c;(t.updateQueue=k)&&(t.flags|=4)}},ad=function(e,t,r,s){r!==s&&(t.flags|=4)};function mi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function tv(e,t,r){var s=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ye(t.type)&&ho(),Ue(t),null;case 3:return s=t.stateNode,_r(),ge(Ke),ge(je),Ra(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(ul(vt),vt=null))),Ja(e,t),Ue(t),null;case 5:Oa(t);var l=zn(ci.current);if(r=t.type,e!==null&&t.stateNode!=null)sd(e,t,r,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ue(t),null}if(e=zn(Tt.current),yo(t)){s=t.stateNode,r=t.type;var c=t.memoizedProps;switch(s[xt]=t,s[oi]=c,e=(t.mode&1)!==0,r){case"dialog":me("cancel",s),me("close",s);break;case"iframe":case"object":case"embed":me("load",s);break;case"video":case"audio":for(l=0;l<ni.length;l++)me(ni[l],s);break;case"source":me("error",s);break;case"img":case"image":case"link":me("error",s),me("load",s);break;case"details":me("toggle",s);break;case"input":Uu(s,c),me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},me("invalid",s);break;case"textarea":Hu(s,c),me("invalid",s)}bs(r,c),l=null;for(var d in c)if(c.hasOwnProperty(d)){var m=c[d];d==="children"?typeof m=="string"?s.textContent!==m&&(c.suppressHydrationWarning!==!0&&uo(s.textContent,m,e),l=["children",m]):typeof m=="number"&&s.textContent!==""+m&&(c.suppressHydrationWarning!==!0&&uo(s.textContent,m,e),l=["children",""+m]):u.hasOwnProperty(d)&&m!=null&&d==="onScroll"&&me("scroll",s)}switch(r){case"input":Ui(s),Vu(s,c,!0);break;case"textarea":Ui(s),Wu(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=co)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=d.createElement(r,{is:s.is}):(e=d.createElement(r),r==="select"&&(d=e,s.multiple?d.multiple=!0:s.size&&(d.size=s.size))):e=d.createElementNS(e,r),e[xt]=t,e[oi]=s,od(e,t,!1,!1),t.stateNode=e;e:{switch(d=Rs(r,s),r){case"dialog":me("cancel",e),me("close",e),l=s;break;case"iframe":case"object":case"embed":me("load",e),l=s;break;case"video":case"audio":for(l=0;l<ni.length;l++)me(ni[l],e);l=s;break;case"source":me("error",e),l=s;break;case"img":case"image":case"link":me("error",e),me("load",e),l=s;break;case"details":me("toggle",e),l=s;break;case"input":Uu(e,s),l=Ts(e,s),me("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=F({},s,{value:void 0}),me("invalid",e);break;case"textarea":Hu(e,s),l=As(e,s),me("invalid",e);break;default:l=s}bs(r,l),m=l;for(c in m)if(m.hasOwnProperty(c)){var v=m[c];c==="style"?Qu(e,v):c==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Ku(e,v)):c==="children"?typeof v=="string"?(r!=="textarea"||v!=="")&&Fr(e,v):typeof v=="number"&&Fr(e,""+v):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?v!=null&&c==="onScroll"&&me("scroll",e):v!=null&&ae(e,c,v,d))}switch(r){case"input":Ui(e),Vu(e,s,!1);break;case"textarea":Ui(e),Wu(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ue(s.value));break;case"select":e.multiple=!!s.multiple,c=s.value,c!=null?tr(e,!!s.multiple,c,!1):s.defaultValue!=null&&tr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=co)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(r=zn(ci.current),zn(Tt.current),yo(t)){if(s=t.stateNode,r=t.memoizedProps,s[xt]=t,(c=s.nodeValue!==r)&&(e=nt,e!==null))switch(e.tag){case 3:uo(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(s.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[xt]=t,t.stateNode=s}return Ue(t),null;case 13:if(ge(_e),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&rt!==null&&t.mode&1&&!(t.flags&128))cf(),gr(),t.flags|=98560,c=!1;else if(c=yo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[xt]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),c=!1}else vt!==null&&(ul(vt),vt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Oe===0&&(Oe=3):dl())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return _r(),Ja(e,t),e===null&&ri(t.stateNode.containerInfo),Ue(t),null;case 10:return xa(t.type._context),Ue(t),null;case 17:return Ye(t.type)&&ho(),Ue(t),null;case 19:if(ge(_e),c=t.memoizedState,c===null)return Ue(t),null;if(s=(t.flags&128)!==0,d=c.rendering,d===null)if(s)mi(c,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=Io(e),d!==null){for(t.flags|=128,mi(c,!1),s=d.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)c=r,e=s,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return pe(_e,_e.current&1|2),t.child}e=e.sibling}c.tail!==null&&xe()>Ir&&(t.flags|=128,s=!0,mi(c,!1),t.lanes=4194304)}else{if(!s)if(e=Io(d),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),mi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!we)return Ue(t),null}else 2*xe()-c.renderingStartTime>Ir&&r!==1073741824&&(t.flags|=128,s=!0,mi(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(r=c.last,r!==null?r.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=xe(),t.sibling=null,r=_e.current,pe(_e,s?r&1|2:r&1),t):(Ue(t),null);case 22:case 23:return fl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?it&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function nv(e,t){switch(_a(t),t.tag){case 1:return Ye(t.type)&&ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),ge(Ke),ge(je),Ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oa(t),null;case 13:if(ge(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(_e),null;case 4:return _r(),null;case 10:return xa(t.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Ro=!1,Be=!1,rv=typeof WeakSet=="function"?WeakSet:Set,M=null;function Er(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){ke(e,t,s)}else r.current=null}function Za(e,t,r){try{r()}catch(s){ke(e,t,s)}}var ld=!1;function iv(e,t){if(fa=Ji,e=zc(),ra(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var l=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var d=0,m=-1,v=-1,k=0,P=0,N=e,C=null;t:for(;;){for(var L;N!==r||l!==0&&N.nodeType!==3||(m=d+l),N!==c||s!==0&&N.nodeType!==3||(v=d+s),N.nodeType===3&&(d+=N.nodeValue.length),(L=N.firstChild)!==null;)C=N,N=L;for(;;){if(N===e)break t;if(C===r&&++k===l&&(m=d),C===c&&++P===s&&(v=d),(L=N.nextSibling)!==null)break;N=C,C=N.parentNode}N=L}r=m===-1||v===-1?null:{start:m,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(da={focusedElem:e,selectionRange:r},Ji=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var z=j.memoizedProps,Te=j.memoizedState,_=t.stateNode,y=_.getSnapshotBeforeUpdate(t.elementType===t.type?z:yt(t.type,z),Te);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(O){ke(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return j=ld,ld=!1,j}function gi(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var c=l.destroy;l.destroy=void 0,c!==void 0&&Za(t,r,c)}l=l.next}while(l!==s)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function el(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[oi],delete t[ga],delete t[Ug],delete t[Bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=co));else if(s!==4&&(e=e.child,e!==null))for(tl(e,t,r),e=e.sibling;e!==null;)tl(e,t,r),e=e.sibling}function nl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(nl(e,t,r),e=e.sibling;e!==null;)nl(e,t,r),e=e.sibling}var Le=null,wt=!1;function dn(e,t,r){for(r=r.child;r!==null;)dd(e,t,r),r=r.sibling}function dd(e,t,r){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Gi,r)}catch{}switch(r.tag){case 5:Be||Er(r,t);case 6:var s=Le,l=wt;Le=null,dn(e,t,r),Le=s,wt=l,Le!==null&&(wt?(e=Le,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Le.removeChild(r.stateNode));break;case 18:Le!==null&&(wt?(e=Le,r=r.stateNode,e.nodeType===8?ma(e.parentNode,r):e.nodeType===1&&ma(e,r),Yr(e)):ma(Le,r.stateNode));break;case 4:s=Le,l=wt,Le=r.stateNode.containerInfo,wt=!0,dn(e,t,r),Le=s,wt=l;break;case 0:case 11:case 14:case 15:if(!Be&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var c=l,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&Za(r,t,d),l=l.next}while(l!==s)}dn(e,t,r);break;case 1:if(!Be&&(Er(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(m){ke(r,t,m)}dn(e,t,r);break;case 21:dn(e,t,r);break;case 22:r.mode&1?(Be=(s=Be)||r.memoizedState!==null,dn(e,t,r),Be=s):dn(e,t,r);break;default:dn(e,t,r)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new rv),t.forEach(function(s){var l=hv.bind(null,e,s);r.has(s)||(r.add(s),s.then(l,l))})}}function _t(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];try{var c=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 5:Le=m.stateNode,wt=!1;break e;case 3:Le=m.stateNode.containerInfo,wt=!0;break e;case 4:Le=m.stateNode.containerInfo,wt=!0;break e}m=m.return}if(Le===null)throw Error(o(160));dd(c,d,l),Le=null,wt=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(k){ke(l,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pd(t,e),t=t.sibling}function pd(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Nt(e),s&4){try{gi(3,e,e.return),Do(3,e)}catch(z){ke(e,e.return,z)}try{gi(5,e,e.return)}catch(z){ke(e,e.return,z)}}break;case 1:_t(t,e),Nt(e),s&512&&r!==null&&Er(r,r.return);break;case 5:if(_t(t,e),Nt(e),s&512&&r!==null&&Er(r,r.return),e.flags&32){var l=e.stateNode;try{Fr(l,"")}catch(z){ke(e,e.return,z)}}if(s&4&&(l=e.stateNode,l!=null)){var c=e.memoizedProps,d=r!==null?r.memoizedProps:c,m=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{m==="input"&&c.type==="radio"&&c.name!=null&&Bu(l,c),Rs(m,d);var k=Rs(m,c);for(d=0;d<v.length;d+=2){var P=v[d],N=v[d+1];P==="style"?Qu(l,N):P==="dangerouslySetInnerHTML"?Ku(l,N):P==="children"?Fr(l,N):ae(l,P,N,k)}switch(m){case"input":Ps(l,c);break;case"textarea":$u(l,c);break;case"select":var C=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!c.multiple;var L=c.value;L!=null?tr(l,!!c.multiple,L,!1):C!==!!c.multiple&&(c.defaultValue!=null?tr(l,!!c.multiple,c.defaultValue,!0):tr(l,!!c.multiple,c.multiple?[]:"",!1))}l[oi]=c}catch(z){ke(e,e.return,z)}}break;case 6:if(_t(t,e),Nt(e),s&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,c=e.memoizedProps;try{l.nodeValue=c}catch(z){ke(e,e.return,z)}}break;case 3:if(_t(t,e),Nt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(z){ke(e,e.return,z)}break;case 4:_t(t,e),Nt(e);break;case 13:_t(t,e),Nt(e),l=e.child,l.flags&8192&&(c=l.memoizedState!==null,l.stateNode.isHidden=c,!c||l.alternate!==null&&l.alternate.memoizedState!==null||(ol=xe())),s&4&&hd(e);break;case 22:if(P=r!==null&&r.memoizedState!==null,e.mode&1?(Be=(k=Be)||P,_t(t,e),Be=k):_t(t,e),Nt(e),s&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!P&&e.mode&1)for(M=e,P=e.child;P!==null;){for(N=M=P;M!==null;){switch(C=M,L=C.child,C.tag){case 0:case 11:case 14:case 15:gi(4,C,C.return);break;case 1:Er(C,C.return);var j=C.stateNode;if(typeof j.componentWillUnmount=="function"){s=C,r=C.return;try{t=s,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(z){ke(s,r,z)}}break;case 5:Er(C,C.return);break;case 22:if(C.memoizedState!==null){vd(N);continue}}L!==null?(L.return=C,M=L):vd(N)}P=P.sibling}e:for(P=null,N=e;;){if(N.tag===5){if(P===null){P=N;try{l=N.stateNode,k?(c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(m=N.stateNode,v=N.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,m.style.display=Yu("display",d))}catch(z){ke(e,e.return,z)}}}else if(N.tag===6){if(P===null)try{N.stateNode.nodeValue=k?"":N.memoizedProps}catch(z){ke(e,e.return,z)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;P===N&&(P=null),N=N.return}P===N&&(P=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:_t(t,e),Nt(e),s&4&&hd(e);break;case 21:break;default:_t(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(cd(r)){var s=r;break e}r=r.return}throw Error(o(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(Fr(l,""),s.flags&=-33);var c=fd(e);nl(e,c,l);break;case 3:case 4:var d=s.stateNode.containerInfo,m=fd(e);tl(e,m,d);break;default:throw Error(o(161))}}catch(v){ke(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ov(e,t,r){M=e,md(e)}function md(e,t,r){for(var s=(e.mode&1)!==0;M!==null;){var l=M,c=l.child;if(l.tag===22&&s){var d=l.memoizedState!==null||Ro;if(!d){var m=l.alternate,v=m!==null&&m.memoizedState!==null||Be;m=Ro;var k=Be;if(Ro=d,(Be=v)&&!k)for(M=l;M!==null;)d=M,v=d.child,d.tag===22&&d.memoizedState!==null?yd(l):v!==null?(v.return=d,M=v):yd(l);for(;c!==null;)M=c,md(c),c=c.sibling;M=l,Ro=m,Be=k}gd(e)}else l.subtreeFlags&8772&&c!==null?(c.return=l,M=c):gd(e)}}function gd(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||Do(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Be)if(r===null)s.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:yt(t.type,r.memoizedProps);s.componentDidUpdate(l,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&vf(t,c,s);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}vf(t,d,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src&&(r.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var N=P.dehydrated;N!==null&&Yr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Be||t.flags&512&&el(t)}catch(C){ke(t,t.return,C)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function vd(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function yd(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Do(4,t)}catch(v){ke(t,r,v)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(v){ke(t,l,v)}}var c=t.return;try{el(t)}catch(v){ke(t,c,v)}break;case 5:var d=t.return;try{el(t)}catch(v){ke(t,d,v)}}}catch(v){ke(t,t.return,v)}if(t===e){M=null;break}var m=t.sibling;if(m!==null){m.return=t.return,M=m;break}M=t.return}}var sv=Math.ceil,Lo=le.ReactCurrentDispatcher,rl=le.ReactCurrentOwner,ft=le.ReactCurrentBatchConfig,re=0,Re=null,Pe=null,Me=0,it=0,kr=an(0),Oe=0,vi=null,Bn=0,Mo=0,il=0,yi=null,qe=null,ol=0,Ir=1/0,Ht=null,Fo=!1,sl=null,hn=null,jo=!1,pn=null,zo=0,wi=0,al=null,Uo=-1,Bo=0;function $e(){return re&6?xe():Uo!==-1?Uo:Uo=xe()}function mn(e){return e.mode&1?re&2&&Me!==0?Me&-Me:Hg.transition!==null?(Bo===0&&(Bo=cc()),Bo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e):1}function St(e,t,r,s){if(50<wi)throw wi=0,al=null,Error(o(185));Hr(e,r,s),(!(re&2)||e!==Re)&&(e===Re&&(!(re&2)&&(Mo|=r),Oe===4&&gn(e,Me)),Xe(e,s),r===1&&re===0&&!(t.mode&1)&&(Ir=xe()+500,mo&&un()))}function Xe(e,t){var r=e.callbackNode;Hm(e,t);var s=Qi(e,e===Re?Me:0);if(s===0)r!==null&&ac(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&ac(r),t===1)e.tag===0?Vg(_d.bind(null,e)):of(_d.bind(null,e)),jg(function(){!(re&6)&&un()}),r=null;else{switch(fc(s)){case 1:r=Us;break;case 4:r=lc;break;case 16:r=Wi;break;case 536870912:r=uc;break;default:r=Wi}r=Pd(r,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function wd(e,t){if(Uo=-1,Bo=0,re&6)throw Error(o(327));var r=e.callbackNode;if(Cr()&&e.callbackNode!==r)return null;var s=Qi(e,e===Re?Me:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Vo(e,s);else{t=s;var l=re;re|=2;var c=Ed();(Re!==e||Me!==t)&&(Ht=null,Ir=xe()+500,Hn(e,t));do try{uv();break}catch(m){Sd(e,m)}while(!0);Ca(),Lo.current=c,re=l,Pe!==null?t=0:(Re=null,Me=0,t=Oe)}if(t!==0){if(t===2&&(l=Bs(e),l!==0&&(s=l,t=ll(e,l))),t===1)throw r=vi,Hn(e,0),gn(e,s),Xe(e,xe()),r;if(t===6)gn(e,s);else{if(l=e.current.alternate,!(s&30)&&!av(l)&&(t=Vo(e,s),t===2&&(c=Bs(e),c!==0&&(s=c,t=ll(e,c))),t===1))throw r=vi,Hn(e,0),gn(e,s),Xe(e,xe()),r;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:$n(e,qe,Ht);break;case 3:if(gn(e,s),(s&130023424)===s&&(t=ol+500-xe(),10<t)){if(Qi(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){$e(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=pa($n.bind(null,e,qe,Ht),t);break}$n(e,qe,Ht);break;case 4:if(gn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var d=31-mt(s);c=1<<d,d=t[d],d>l&&(l=d),s&=~c}if(s=l,s=xe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*sv(s/1960))-s,10<s){e.timeoutHandle=pa($n.bind(null,e,qe,Ht),s);break}$n(e,qe,Ht);break;case 5:$n(e,qe,Ht);break;default:throw Error(o(329))}}}return Xe(e,xe()),e.callbackNode===r?wd.bind(null,e):null}function ll(e,t){var r=yi;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=Vo(e,t),e!==2&&(t=qe,qe=r,t!==null&&ul(t)),e}function ul(e){qe===null?qe=e:qe.push.apply(qe,e)}function av(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var l=r[s],c=l.getSnapshot;l=l.value;try{if(!gt(c(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~il,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-mt(t),s=1<<r;e[r]=-1,t&=~s}}function _d(e){if(re&6)throw Error(o(327));Cr();var t=Qi(e,0);if(!(t&1))return Xe(e,xe()),null;var r=Vo(e,t);if(e.tag!==0&&r===2){var s=Bs(e);s!==0&&(t=s,r=ll(e,s))}if(r===1)throw r=vi,Hn(e,0),gn(e,t),Xe(e,xe()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,qe,Ht),Xe(e,xe()),null}function cl(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(Ir=xe()+500,mo&&un())}}function Vn(e){pn!==null&&pn.tag===0&&!(re&6)&&Cr();var t=re;re|=1;var r=ft.transition,s=ce;try{if(ft.transition=null,ce=1,e)return e()}finally{ce=s,ft.transition=r,re=t,!(re&6)&&un()}}function fl(){it=kr.current,ge(kr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Fg(r)),Pe!==null)for(r=Pe.return;r!==null;){var s=r;switch(_a(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ho();break;case 3:_r(),ge(Ke),ge(je),Ra();break;case 5:Oa(s);break;case 4:_r();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:xa(s.type._context);break;case 22:case 23:fl()}r=r.return}if(Re=e,Pe=e=vn(e.current,null),Me=it=t,Oe=0,vi=null,il=Mo=Bn=0,qe=yi=null,jn!==null){for(t=0;t<jn.length;t++)if(r=jn[t],s=r.interleaved,s!==null){r.interleaved=null;var l=s.next,c=r.pending;if(c!==null){var d=c.next;c.next=l,s.next=d}r.pending=s}jn=null}return e}function Sd(e,t){do{var r=Pe;try{if(Ca(),Co.current=No,xo){for(var s=Se.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}xo=!1}if(Un=0,be=Ae=Se=null,fi=!1,di=0,rl.current=null,r===null||r.return===null){Oe=1,vi=t,Pe=null;break}e:{var c=e,d=r.return,m=r,v=t;if(t=Me,m.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=v,P=m,N=P.tag;if(!(P.mode&1)&&(N===0||N===11||N===15)){var C=P.alternate;C?(P.updateQueue=C.updateQueue,P.memoizedState=C.memoizedState,P.lanes=C.lanes):(P.updateQueue=null,P.memoizedState=null)}var L=Gf(d);if(L!==null){L.flags&=-257,Kf(L,d,m,c,t),L.mode&1&&Wf(c,k,t),t=L,v=k;var j=t.updateQueue;if(j===null){var z=new Set;z.add(v),t.updateQueue=z}else j.add(v);break e}else{if(!(t&1)){Wf(c,k,t),dl();break e}v=Error(o(426))}}else if(we&&m.mode&1){var Te=Gf(d);if(Te!==null){!(Te.flags&65536)&&(Te.flags|=256),Kf(Te,d,m,c,t),ka(Sr(v,m));break e}}c=v=Sr(v,m),Oe!==4&&(Oe=2),yi===null?yi=[c]:yi.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var _=Hf(c,v,t);gf(c,_);break e;case 1:m=v;var y=c.type,S=c.stateNode;if(!(c.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(hn===null||!hn.has(S)))){c.flags|=65536,t&=-t,c.lanes|=t;var O=$f(c,m,t);gf(c,O);break e}}c=c.return}while(c!==null)}Id(r)}catch(U){t=U,Pe===r&&r!==null&&(Pe=r=r.return);continue}break}while(!0)}function Ed(){var e=Lo.current;return Lo.current=No,e===null?No:e}function dl(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Re===null||!(Bn&268435455)&&!(Mo&268435455)||gn(Re,Me)}function Vo(e,t){var r=re;re|=2;var s=Ed();(Re!==e||Me!==t)&&(Ht=null,Hn(e,t));do try{lv();break}catch(l){Sd(e,l)}while(!0);if(Ca(),re=r,Lo.current=s,Pe!==null)throw Error(o(261));return Re=null,Me=0,Oe}function lv(){for(;Pe!==null;)kd(Pe)}function uv(){for(;Pe!==null&&!Dm();)kd(Pe)}function kd(e){var t=Td(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Id(e):Pe=t,rl.current=null}function Id(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=nv(r,t),r!==null){r.flags&=32767,Pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Pe=null;return}}else if(r=tv(r,t,it),r!==null){Pe=r;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Oe===0&&(Oe=5)}function $n(e,t,r){var s=ce,l=ft.transition;try{ft.transition=null,ce=1,cv(e,t,r,s)}finally{ft.transition=l,ce=s}return null}function cv(e,t,r,s){do Cr();while(pn!==null);if(re&6)throw Error(o(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if($m(e,c),e===Re&&(Pe=Re=null,Me=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||jo||(jo=!0,Pd(Wi,function(){return Cr(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=ft.transition,ft.transition=null;var d=ce;ce=1;var m=re;re|=4,rl.current=null,iv(e,r),pd(r,e),Ag(da),Ji=!!fa,da=fa=null,e.current=r,ov(r),Lm(),re=m,ce=d,ft.transition=c}else e.current=r;if(jo&&(jo=!1,pn=e,zo=l),c=e.pendingLanes,c===0&&(hn=null),jm(r.stateNode),Xe(e,xe()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],s(l.value,{componentStack:l.stack,digest:l.digest});if(Fo)throw Fo=!1,e=sl,sl=null,e;return zo&1&&e.tag!==0&&Cr(),c=e.pendingLanes,c&1?e===al?wi++:(wi=0,al=e):wi=0,un(),null}function Cr(){if(pn!==null){var e=fc(zo),t=ft.transition,r=ce;try{if(ft.transition=null,ce=16>e?16:e,pn===null)var s=!1;else{if(e=pn,pn=null,zo=0,re&6)throw Error(o(331));var l=re;for(re|=4,M=e.current;M!==null;){var c=M,d=c.child;if(M.flags&16){var m=c.deletions;if(m!==null){for(var v=0;v<m.length;v++){var k=m[v];for(M=k;M!==null;){var P=M;switch(P.tag){case 0:case 11:case 15:gi(8,P,c)}var N=P.child;if(N!==null)N.return=P,M=N;else for(;M!==null;){P=M;var C=P.sibling,L=P.return;if(ud(P),P===k){M=null;break}if(C!==null){C.return=L,M=C;break}M=L}}}var j=c.alternate;if(j!==null){var z=j.child;if(z!==null){j.child=null;do{var Te=z.sibling;z.sibling=null,z=Te}while(z!==null)}}M=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,M=d;else e:for(;M!==null;){if(c=M,c.flags&2048)switch(c.tag){case 0:case 11:case 15:gi(9,c,c.return)}var _=c.sibling;if(_!==null){_.return=c.return,M=_;break e}M=c.return}}var y=e.current;for(M=y;M!==null;){d=M;var S=d.child;if(d.subtreeFlags&2064&&S!==null)S.return=d,M=S;else e:for(d=y;M!==null;){if(m=M,m.flags&2048)try{switch(m.tag){case 0:case 11:case 15:Do(9,m)}}catch(U){ke(m,m.return,U)}if(m===d){M=null;break e}var O=m.sibling;if(O!==null){O.return=m.return,M=O;break e}M=m.return}}if(re=l,un(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Gi,e)}catch{}s=!0}return s}finally{ce=r,ft.transition=t}}return!1}function Cd(e,t,r){t=Sr(r,t),t=Hf(e,t,1),e=fn(e,t,1),t=$e(),e!==null&&(Hr(e,1,t),Xe(e,t))}function ke(e,t,r){if(e.tag===3)Cd(e,e,r);else for(;t!==null;){if(t.tag===3){Cd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(hn===null||!hn.has(s))){e=Sr(r,e),e=$f(t,e,1),t=fn(t,e,1),e=$e(),t!==null&&(Hr(t,1,e),Xe(t,e));break}}t=t.return}}function fv(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&r,Re===e&&(Me&r)===r&&(Oe===4||Oe===3&&(Me&130023424)===Me&&500>xe()-ol?Hn(e,0):il|=r),Xe(e,t)}function xd(e,t){t===0&&(e.mode&1?(t=Yi,Yi<<=1,!(Yi&130023424)&&(Yi=4194304)):t=1);var r=$e();e=Ut(e,t),e!==null&&(Hr(e,t,r),Xe(e,r))}function dv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),xd(e,r)}function hv(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),xd(e,r)}var Td;Td=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Qe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Qe=!1,ev(e,t,r);Qe=!!(e.flags&131072)}else Qe=!1,we&&t.flags&1048576&&sf(t,vo,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;bo(e,t),e=t.pendingProps;var l=hr(t,je.current);wr(t,r),l=Ma(null,t,s,e,l,r);var c=Fa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(s)?(c=!0,po(t)):c=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Na(t),l.updater=Ao,t.stateNode=l,l._reactInternals=t,Ha(t,s,e,r),t=Ka(null,t,s,!0,c,r)):(t.tag=0,we&&c&&wa(t),He(null,t,l,r),t=t.child),t;case 16:s=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=mv(s),e=yt(s,e),l){case 0:t=Ga(null,t,s,e,r);break e;case 1:t=Zf(null,t,s,e,r);break e;case 11:t=Yf(null,t,s,e,r);break e;case 14:t=Qf(null,t,s,yt(s.type,e),r);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:yt(s,l),Ga(e,t,s,l,r);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:yt(s,l),Zf(e,t,s,l,r);case 3:e:{if(ed(t),e===null)throw Error(o(387));s=t.pendingProps,c=t.memoizedState,l=c.element,mf(e,t),ko(t,s,null,r);var d=t.memoizedState;if(s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){l=Sr(Error(o(423)),t),t=td(e,t,s,r,l);break e}else if(s!==l){l=Sr(Error(o(424)),t),t=td(e,t,s,r,l);break e}else for(rt=sn(t.stateNode.containerInfo.firstChild),nt=t,we=!0,vt=null,r=hf(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),s===l){t=Vt(e,t,r);break e}He(e,t,s,r)}t=t.child}return t;case 5:return yf(t),e===null&&Ea(t),s=t.type,l=t.pendingProps,c=e!==null?e.memoizedProps:null,d=l.children,ha(s,l)?d=null:c!==null&&ha(s,c)&&(t.flags|=32),Jf(e,t),He(e,t,d,r),t.child;case 6:return e===null&&Ea(t),null;case 13:return nd(e,t,r);case 4:return Aa(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=vr(t,null,s,r):He(e,t,s,r),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:yt(s,l),Yf(e,t,s,l,r);case 7:return He(e,t,t.pendingProps,r),t.child;case 8:return He(e,t,t.pendingProps.children,r),t.child;case 12:return He(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,c=t.memoizedProps,d=l.value,pe(_o,s._currentValue),s._currentValue=d,c!==null)if(gt(c.value,d)){if(c.children===l.children&&!Ke.current){t=Vt(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var m=c.dependencies;if(m!==null){d=c.child;for(var v=m.firstContext;v!==null;){if(v.context===s){if(c.tag===1){v=Bt(-1,r&-r),v.tag=2;var k=c.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?v.next=v:(v.next=P.next,P.next=v),k.pending=v}}c.lanes|=r,v=c.alternate,v!==null&&(v.lanes|=r),Ta(c.return,r,t),m.lanes|=r;break}v=v.next}}else if(c.tag===10)d=c.type===t.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(o(341));d.lanes|=r,m=d.alternate,m!==null&&(m.lanes|=r),Ta(d,r,t),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===t){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}He(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,wr(t,r),l=ut(l),s=s(l),t.flags|=1,He(e,t,s,r),t.child;case 14:return s=t.type,l=yt(s,t.pendingProps),l=yt(s.type,l),Qf(e,t,s,l,r);case 15:return qf(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:yt(s,l),bo(e,t),t.tag=1,Ye(s)?(e=!0,po(t)):e=!1,wr(t,r),Bf(t,s,l),Ha(t,s,l,r),Ka(null,t,s,!0,e,r);case 19:return id(e,t,r);case 22:return Xf(e,t,r)}throw Error(o(156,t.tag))};function Pd(e,t){return sc(e,t)}function pv(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,r,s){return new pv(e,t,r,s)}function hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mv(e){if(typeof e=="function")return hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kt)return 11;if(e===It)return 14}return 2}function vn(e,t){var r=e.alternate;return r===null?(r=dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ho(e,t,r,s,l,c){var d=2;if(s=e,typeof e=="function")hl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ce:return Wn(r.children,l,c,t);case Fe:d=8,l|=8;break;case st:return e=dt(12,r,t,l|2),e.elementType=st,e.lanes=c,e;case Ze:return e=dt(13,r,t,l),e.elementType=Ze,e.lanes=c,e;case pt:return e=dt(19,r,t,l),e.elementType=pt,e.lanes=c,e;case Ee:return $o(r,l,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ht:d=10;break e;case bn:d=9;break e;case kt:d=11;break e;case It:d=14;break e;case Ge:d=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=dt(d,r,t,l),t.elementType=e,t.type=s,t.lanes=c,t}function Wn(e,t,r,s){return e=dt(7,e,s,t),e.lanes=r,e}function $o(e,t,r,s){return e=dt(22,e,s,t),e.elementType=Ee,e.lanes=r,e.stateNode={isHidden:!1},e}function pl(e,t,r){return e=dt(6,e,null,t),e.lanes=r,e}function ml(e,t,r){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gv(e,t,r,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function gl(e,t,r,s,l,c,d,m,v){return e=new gv(e,t,r,m,v),t===1?(t=1,c===!0&&(t|=8)):t=0,c=dt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(c),e}function vv(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Nd(e){if(!e)return ln;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(Ye(r))return nf(e,r,t)}return t}function Ad(e,t,r,s,l,c,d,m,v){return e=gl(r,s,!0,e,l,c,d,m,v),e.context=Nd(null),r=e.current,s=$e(),l=mn(r),c=Bt(s,l),c.callback=t??null,fn(r,c,l),e.current.lanes=l,Hr(e,l,s),Xe(e,s),e}function Wo(e,t,r,s){var l=t.current,c=$e(),d=mn(l);return r=Nd(r),t.context===null?t.context=r:t.pendingContext=r,t=Bt(c,d),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=fn(l,t,d),e!==null&&(St(e,l,d,c),Eo(e,l,d)),d}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function vl(e,t){Od(e,t),(e=e.alternate)&&Od(e,t)}function yv(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function yl(e){this._internalRoot=e}Ko.prototype.render=yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Wo(e,t,null,null)},Ko.prototype.unmount=yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){Wo(null,e,null,null)}),t[Mt]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=pc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nn.length&&t!==0&&t<nn[r].priority;r++);nn.splice(r,0,e),r===0&&vc(e)}};function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function wv(e,t,r,s,l){if(l){if(typeof s=="function"){var c=s;s=function(){var k=Go(d);c.call(k)}}var d=Ad(t,s,e,0,null,!1,!1,"",Rd);return e._reactRootContainer=d,e[Mt]=d.current,ri(e.nodeType===8?e.parentNode:e),Vn(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var m=s;s=function(){var k=Go(v);m.call(k)}}var v=gl(e,0,!1,null,null,!1,!1,"",Rd);return e._reactRootContainer=v,e[Mt]=v.current,ri(e.nodeType===8?e.parentNode:e),Vn(function(){Wo(t,v,r,s)}),v}function Qo(e,t,r,s,l){var c=r._reactRootContainer;if(c){var d=c;if(typeof l=="function"){var m=l;l=function(){var v=Go(d);m.call(v)}}Wo(t,d,e,l)}else d=wv(r,t,e,l,s);return Go(d)}dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Vr(t.pendingLanes);r!==0&&(Hs(t,r|1),Xe(t,xe()),!(re&6)&&(Ir=xe()+500,un()))}break;case 13:Vn(function(){var s=Ut(e,1);if(s!==null){var l=$e();St(s,e,1,l)}}),vl(e,1)}},$s=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var r=$e();St(t,e,134217728,r)}vl(e,134217728)}},hc=function(e){if(e.tag===13){var t=mn(e),r=Ut(e,t);if(r!==null){var s=$e();St(r,e,t,s)}vl(e,t)}},pc=function(){return ce},mc=function(e,t){var r=ce;try{return ce=e,t()}finally{ce=r}},Ms=function(e,t,r){switch(t){case"input":if(Ps(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var l=fo(s);if(!l)throw Error(o(90));zu(s),Ps(s,l)}}}break;case"textarea":$u(e,r);break;case"select":t=r.value,t!=null&&tr(e,!!r.multiple,t,!1)}},Zu=cl,ec=Vn;var _v={usingClientEntryPoint:!1,Events:[si,fr,fo,Xu,Ju,cl]},_i={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sv={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{Gi=qo.inject(Sv),Ct=qo}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v,Je.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wl(t))throw Error(o(200));return vv(e,t,null,r)},Je.createRoot=function(e,t){if(!wl(e))throw Error(o(299));var r=!1,s="",l=bd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=gl(e,1,!1,null,null,r,!1,s,l),e[Mt]=t.current,ri(e.nodeType===8?e.parentNode:e),new yl(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return Vn(e)},Je.hydrate=function(e,t,r){if(!Yo(t))throw Error(o(200));return Qo(null,e,t,!0,r)},Je.hydrateRoot=function(e,t,r){if(!wl(e))throw Error(o(405));var s=r!=null&&r.hydratedSources||null,l=!1,c="",d=bd;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=Ad(t,null,e,1,r??null,l,!1,c,d),e[Mt]=t.current,ri(e),s)for(e=0;e<s.length;e++)r=s[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Ko(t)},Je.render=function(e,t,r){if(!Yo(t))throw Error(o(200));return Qo(null,e,t,!1,r)},Je.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(o(40));return e._reactRootContainer?(Vn(function(){Qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1},Je.unstable_batchedUpdates=cl,Je.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Yo(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Qo(e,t,r,!1,s)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var Bd;function Nv(){if(Bd)return El.exports;Bd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),El.exports=Pv(),El.exports}var Vd;function Av(){if(Vd)return Xo;Vd=1;var i=Nv();return Xo.createRoot=i.createRoot,Xo.hydrateRoot=i.hydrateRoot,Xo}var Ov=Av();const bv=pu(Ov);var Hd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=function(i){const n=[];let o=0;for(let a=0;a<i.length;a++){let u=i.charCodeAt(a);u<128?n[o++]=u:u<2048?(n[o++]=u>>6|192,n[o++]=u&63|128):(u&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(u=65536+((u&1023)<<10)+(i.charCodeAt(++a)&1023),n[o++]=u>>18|240,n[o++]=u>>12&63|128,n[o++]=u>>6&63|128,n[o++]=u&63|128):(n[o++]=u>>12|224,n[o++]=u>>6&63|128,n[o++]=u&63|128)}return n},Rv=function(i){const n=[];let o=0,a=0;for(;o<i.length;){const u=i[o++];if(u<128)n[a++]=String.fromCharCode(u);else if(u>191&&u<224){const f=i[o++];n[a++]=String.fromCharCode((u&31)<<6|f&63)}else if(u>239&&u<365){const f=i[o++],h=i[o++],p=i[o++],g=((u&7)<<18|(f&63)<<12|(h&63)<<6|p&63)-65536;n[a++]=String.fromCharCode(55296+(g>>10)),n[a++]=String.fromCharCode(56320+(g&1023))}else{const f=i[o++],h=i[o++];n[a++]=String.fromCharCode((u&15)<<12|(f&63)<<6|h&63)}}return n.join("")},Zh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,n){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let u=0;u<i.length;u+=3){const f=i[u],h=u+1<i.length,p=h?i[u+1]:0,g=u+2<i.length,E=g?i[u+2]:0,I=f>>2,b=(f&3)<<4|p>>4;let R=(p&15)<<2|E>>6,V=E&63;g||(V=64,h||(R=64)),a.push(o[I],o[b],o[R],o[V])}return a.join("")},encodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(i):this.encodeByteArray(Jh(i),n)},decodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(i):Rv(this.decodeStringToByteArray(i,n))},decodeStringToByteArray(i,n){this.init_();const o=n?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let u=0;u<i.length;){const f=o[i.charAt(u++)],p=u<i.length?o[i.charAt(u)]:0;++u;const E=u<i.length?o[i.charAt(u)]:64;++u;const b=u<i.length?o[i.charAt(u)]:64;if(++u,f==null||p==null||E==null||b==null)throw new Dv;const R=f<<2|p>>4;if(a.push(R),E!==64){const V=p<<4&240|E>>2;if(a.push(V),b!==64){const X=E<<6&192|b;a.push(X)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Dv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lv=function(i){const n=Jh(i);return Zh.encodeByteArray(n,!0)},ep=function(i){return Lv(i).replace(/\./g,"")},tp=function(i){try{return Zh.decodeString(i,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=()=>Mv().__FIREBASE_DEFAULTS__,jv=()=>{if(typeof process>"u"||typeof Hd>"u")return;const i=Hd.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zv=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=i&&tp(i[1]);return n&&JSON.parse(n)},vu=()=>{try{return Fv()||jv()||zv()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Uv=i=>{var n,o;return(o=(n=vu())===null||n===void 0?void 0:n.emulatorHosts)===null||o===void 0?void 0:o[i]},np=()=>{var i;return(i=vu())===null||i===void 0?void 0:i.config},rp=i=>{var n;return(n=vu())===null||n===void 0?void 0:n[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,o)=>{this.resolve=n,this.reject=o})}wrapCallback(n){return(o,a)=>{o?this.reject(o):this.resolve(a),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(o):n(o,a))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Hv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $v(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gv(){const i=We();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Kv(){try{return typeof indexedDB=="object"}catch{return!1}}function Yv(){return new Promise((i,n)=>{try{let o=!0;const a="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(a);u.onsuccess=()=>{u.result.close(),o||self.indexedDB.deleteDatabase(a),i(!0)},u.onupgradeneeded=()=>{o=!1},u.onerror=()=>{var f;n(((f=u.error)===null||f===void 0?void 0:f.message)||"")}}catch(o){n(o)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="FirebaseError";class An extends Error{constructor(n,o,a){super(o),this.code=n,this.customData=a,this.name=Qv,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(n,o,a){this.service=n,this.serviceName=o,this.errors=a}create(n,...o){const a=o[0]||{},u=`${this.service}/${n}`,f=this.errors[n],h=f?qv(f,a):"Error",p=`${this.serviceName}: ${h} (${u}).`;return new An(u,p,a)}}function qv(i,n){return i.replace(Xv,(o,a)=>{const u=n[a];return u!=null?String(u):`<${a}?>`})}const Xv=/\{\$([^}]+)}/g;function Jv(i){for(const n in i)if(Object.prototype.hasOwnProperty.call(i,n))return!1;return!0}function as(i,n){if(i===n)return!0;const o=Object.keys(i),a=Object.keys(n);for(const u of o){if(!a.includes(u))return!1;const f=i[u],h=n[u];if($d(f)&&$d(h)){if(!as(f,h))return!1}else if(f!==h)return!1}for(const u of a)if(!o.includes(u))return!1;return!0}function $d(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(i){const n=[];for(const[o,a]of Object.entries(i))Array.isArray(a)?a.forEach(u=>{n.push(encodeURIComponent(o)+"="+encodeURIComponent(u))}):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a));return n.length?"&"+n.join("&"):""}function Zv(i,n){const o=new ey(i,n);return o.subscribe.bind(o)}class ey{constructor(n,o){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=o,this.task.then(()=>{n(this)}).catch(a=>{this.error(a)})}next(n){this.forEachObserver(o=>{o.next(n)})}error(n){this.forEachObserver(o=>{o.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,o,a){let u;if(n===void 0&&o===void 0&&a===void 0)throw new Error("Missing Observer.");ty(n,["next","error","complete"])?u=n:u={next:n,error:o,complete:a},u.next===void 0&&(u.next=Cl),u.error===void 0&&(u.error=Cl),u.complete===void 0&&(u.complete=Cl);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?u.error(this.finalError):u.complete()}catch{}}),this.observers.push(u),f}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let o=0;o<this.observers.length;o++)this.sendOne(o,n)}sendOne(n,o){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{o(this.observers[n])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ty(i,n){if(typeof i!="object"||i===null)return!1;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}function Cl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(i){return i&&i._delegate?i._delegate:i}class Rr{constructor(n,o,a){this.name=n,this.instanceFactory=o,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(n,o){this.name=n,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const o=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(o)){const a=new Bv;if(this.instancesDeferred.set(o,a),this.isInitialized(o)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:o});u&&a.resolve(u)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(n){var o;const a=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),u=(o=n==null?void 0:n.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(f){if(u)return null;throw f}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(iy(n))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);try{const f=this.getOrInitializeService({instanceIdentifier:u});a.resolve(f)}catch{}}}}clearInstance(n=Gn){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...n.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=Gn){return this.instances.has(n)}getOptions(n=Gn){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:o={}}=n,a=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:a,options:o});for(const[f,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(f);a===p&&h.resolve(u)}return u}onInit(n,o){var a;const u=this.normalizeInstanceIdentifier(o),f=(a=this.onInitCallbacks.get(u))!==null&&a!==void 0?a:new Set;f.add(n),this.onInitCallbacks.set(u,f);const h=this.instances.get(u);return h&&n(h,u),()=>{f.delete(n)}}invokeOnInitCallbacks(n,o){const a=this.onInitCallbacks.get(o);if(a)for(const u of a)try{u(n,o)}catch{}}getOrInitializeService({instanceIdentifier:n,options:o={}}){let a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:ry(n),options:o}),this.instances.set(n,a),this.instancesOptions.set(n,o),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch{}return a||null}normalizeInstanceIdentifier(n=Gn){return this.component?this.component.multipleInstances?n:Gn:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ry(i){return i===Gn?void 0:i}function iy(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const o=this.getProvider(n.name);if(o.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);o.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const o=new ny(n,this);return this.providers.set(n,o),o}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(fe||(fe={}));const sy={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ay=fe.INFO,ly={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},uy=(i,n,...o)=>{if(n<i.logLevel)return;const a=new Date().toISOString(),u=ly[n];if(u)console[u](`[${a}]  ${i.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class ip{constructor(n){this.name=n,this._logLevel=ay,this._logHandler=uy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in fe))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?sy[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...n),this._logHandler(this,fe.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...n),this._logHandler(this,fe.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...n),this._logHandler(this,fe.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...n),this._logHandler(this,fe.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...n),this._logHandler(this,fe.ERROR,...n)}}const cy=(i,n)=>n.some(o=>i instanceof o);let Wd,Gd;function fy(){return Wd||(Wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dy(){return Gd||(Gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const op=new WeakMap,Bl=new WeakMap,sp=new WeakMap,xl=new WeakMap,yu=new WeakMap;function hy(i){const n=new Promise((o,a)=>{const u=()=>{i.removeEventListener("success",f),i.removeEventListener("error",h)},f=()=>{o(In(i.result)),u()},h=()=>{a(i.error),u()};i.addEventListener("success",f),i.addEventListener("error",h)});return n.then(o=>{o instanceof IDBCursor&&op.set(o,i)}).catch(()=>{}),yu.set(n,i),n}function py(i){if(Bl.has(i))return;const n=new Promise((o,a)=>{const u=()=>{i.removeEventListener("complete",f),i.removeEventListener("error",h),i.removeEventListener("abort",h)},f=()=>{o(),u()},h=()=>{a(i.error||new DOMException("AbortError","AbortError")),u()};i.addEventListener("complete",f),i.addEventListener("error",h),i.addEventListener("abort",h)});Bl.set(i,n)}let Vl={get(i,n,o){if(i instanceof IDBTransaction){if(n==="done")return Bl.get(i);if(n==="objectStoreNames")return i.objectStoreNames||sp.get(i);if(n==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return In(i[n])},set(i,n,o){return i[n]=o,!0},has(i,n){return i instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in i}};function my(i){Vl=i(Vl)}function gy(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...o){const a=i.call(Tl(this),n,...o);return sp.set(a,n.sort?n.sort():[n]),In(a)}:dy().includes(i)?function(...n){return i.apply(Tl(this),n),In(op.get(this))}:function(...n){return In(i.apply(Tl(this),n))}}function vy(i){return typeof i=="function"?gy(i):(i instanceof IDBTransaction&&py(i),cy(i,fy())?new Proxy(i,Vl):i)}function In(i){if(i instanceof IDBRequest)return hy(i);if(xl.has(i))return xl.get(i);const n=vy(i);return n!==i&&(xl.set(i,n),yu.set(n,i)),n}const Tl=i=>yu.get(i);function yy(i,n,{blocked:o,upgrade:a,blocking:u,terminated:f}={}){const h=indexedDB.open(i,n),p=In(h);return a&&h.addEventListener("upgradeneeded",g=>{a(In(h.result),g.oldVersion,g.newVersion,In(h.transaction),g)}),o&&h.addEventListener("blocked",g=>o(g.oldVersion,g.newVersion,g)),p.then(g=>{f&&g.addEventListener("close",()=>f()),u&&g.addEventListener("versionchange",E=>u(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const wy=["get","getKey","getAll","getAllKeys","count"],_y=["put","add","delete","clear"],Pl=new Map;function Kd(i,n){if(!(i instanceof IDBDatabase&&!(n in i)&&typeof n=="string"))return;if(Pl.get(n))return Pl.get(n);const o=n.replace(/FromIndex$/,""),a=n!==o,u=_y.includes(o);if(!(o in(a?IDBIndex:IDBObjectStore).prototype)||!(u||wy.includes(o)))return;const f=async function(h,...p){const g=this.transaction(h,u?"readwrite":"readonly");let E=g.store;return a&&(E=E.index(p.shift())),(await Promise.all([E[o](...p),u&&g.done]))[0]};return Pl.set(n,f),f}my(i=>({...i,get:(n,o,a)=>Kd(n,o)||i.get(n,o,a),has:(n,o)=>!!Kd(n,o)||i.has(n,o)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(Ey(o)){const a=o.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(o=>o).join(" ")}}function Ey(i){const n=i.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Hl="@firebase/app",Yd="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new ip("@firebase/app"),ky="@firebase/app-compat",Iy="@firebase/analytics-compat",Cy="@firebase/analytics",xy="@firebase/app-check-compat",Ty="@firebase/app-check",Py="@firebase/auth",Ny="@firebase/auth-compat",Ay="@firebase/database",Oy="@firebase/data-connect",by="@firebase/database-compat",Ry="@firebase/functions",Dy="@firebase/functions-compat",Ly="@firebase/installations",My="@firebase/installations-compat",Fy="@firebase/messaging",jy="@firebase/messaging-compat",zy="@firebase/performance",Uy="@firebase/performance-compat",By="@firebase/remote-config",Vy="@firebase/remote-config-compat",Hy="@firebase/storage",$y="@firebase/storage-compat",Wy="@firebase/firestore",Gy="@firebase/vertexai",Ky="@firebase/firestore-compat",Yy="firebase",Qy="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="[DEFAULT]",qy={[Hl]:"fire-core",[ky]:"fire-core-compat",[Cy]:"fire-analytics",[Iy]:"fire-analytics-compat",[Ty]:"fire-app-check",[xy]:"fire-app-check-compat",[Py]:"fire-auth",[Ny]:"fire-auth-compat",[Ay]:"fire-rtdb",[Oy]:"fire-data-connect",[by]:"fire-rtdb-compat",[Ry]:"fire-fn",[Dy]:"fire-fn-compat",[Ly]:"fire-iid",[My]:"fire-iid-compat",[Fy]:"fire-fcm",[jy]:"fire-fcm-compat",[zy]:"fire-perf",[Uy]:"fire-perf-compat",[By]:"fire-rc",[Vy]:"fire-rc-compat",[Hy]:"fire-gcs",[$y]:"fire-gcs-compat",[Wy]:"fire-fst",[Ky]:"fire-fst-compat",[Gy]:"fire-vertex","fire-js":"fire-js",[Yy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map,Xy=new Map,Wl=new Map;function Qd(i,n){try{i.container.addComponent(n)}catch(o){Yt.debug(`Component ${n.name} failed to register with FirebaseApp ${i.name}`,o)}}function xi(i){const n=i.name;if(Wl.has(n))return Yt.debug(`There were multiple attempts to register component ${n}.`),!1;Wl.set(n,i);for(const o of ls.values())Qd(o,i);for(const o of Xy.values())Qd(o,i);return!0}function ap(i,n){const o=i.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),i.container.getProvider(n)}function Ot(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new Oi("app","Firebase",Jy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(n,o,a){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=Qy;function lp(i,n={}){let o=i;typeof n!="object"&&(n={name:n});const a=Object.assign({name:$l,automaticDataCollectionEnabled:!1},n),u=a.name;if(typeof u!="string"||!u)throw Cn.create("bad-app-name",{appName:String(u)});if(o||(o=np()),!o)throw Cn.create("no-options");const f=ls.get(u);if(f){if(as(o,f.options)&&as(a,f.config))return f;throw Cn.create("duplicate-app",{appName:u})}const h=new oy(u);for(const g of Wl.values())h.addComponent(g);const p=new Zy(o,a,h);return ls.set(u,p),p}function e0(i=$l){const n=ls.get(i);if(!n&&i===$l&&np())return lp();if(!n)throw Cn.create("no-app",{appName:i});return n}function Pr(i,n,o){var a;let u=(a=qy[i])!==null&&a!==void 0?a:i;o&&(u+=`-${o}`);const f=u.match(/\s|\//),h=n.match(/\s|\//);if(f||h){const p=[`Unable to register library "${u}" with version "${n}":`];f&&p.push(`library name "${u}" contains illegal characters (whitespace or "/")`),f&&h&&p.push("and"),h&&p.push(`version name "${n}" contains illegal characters (whitespace or "/")`),Yt.warn(p.join(" "));return}xi(new Rr(`${u}-version`,()=>({library:u,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="firebase-heartbeat-database",n0=1,Ti="firebase-heartbeat-store";let Nl=null;function up(){return Nl||(Nl=yy(t0,n0,{upgrade:(i,n)=>{switch(n){case 0:try{i.createObjectStore(Ti)}catch(o){console.warn(o)}}}}).catch(i=>{throw Cn.create("idb-open",{originalErrorMessage:i.message})})),Nl}async function r0(i){try{const o=(await up()).transaction(Ti),a=await o.objectStore(Ti).get(cp(i));return await o.done,a}catch(n){if(n instanceof An)Yt.warn(n.message);else{const o=Cn.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(o.message)}}}async function qd(i,n){try{const a=(await up()).transaction(Ti,"readwrite");await a.objectStore(Ti).put(n,cp(i)),await a.done}catch(o){if(o instanceof An)Yt.warn(o.message);else{const a=Cn.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});Yt.warn(a.message)}}}function cp(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=1024,o0=30*24*60*60*1e3;class s0{constructor(n){this.container=n,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new l0(o),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var n,o;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Xd();return((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((o=this._heartbeatsCache)===null||o===void 0?void 0:o.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(h=>h.date===f)?void 0:(this._heartbeatsCache.heartbeats.push({date:f,agent:u}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=o0}),this._storage.overwrite(this._heartbeatsCache))}catch(a){Yt.warn(a)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const o=Xd(),{heartbeatsToSend:a,unsentEntries:u}=a0(this._heartbeatsCache.heartbeats),f=ep(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=o,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(o){return Yt.warn(o),""}}}function Xd(){return new Date().toISOString().substring(0,10)}function a0(i,n=i0){const o=[];let a=i.slice();for(const u of i){const f=o.find(h=>h.agent===u.agent);if(f){if(f.dates.push(u.date),Jd(o)>n){f.dates.pop();break}}else if(o.push({agent:u.agent,dates:[u.date]}),Jd(o)>n){o.pop();break}a=a.slice(1)}return{heartbeatsToSend:o,unsentEntries:a}}class l0{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kv()?Yv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const o=await r0(this.app);return o!=null&&o.heartbeats?o:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var o;if(await this._canUseIndexedDBPromise){const u=await this.read();return qd(this.app,{lastSentHeartbeatDate:(o=n.lastSentHeartbeatDate)!==null&&o!==void 0?o:u.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var o;if(await this._canUseIndexedDBPromise){const u=await this.read();return qd(this.app,{lastSentHeartbeatDate:(o=n.lastSentHeartbeatDate)!==null&&o!==void 0?o:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...n.heartbeats]})}else return}}function Jd(i){return ep(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(i){xi(new Rr("platform-logger",n=>new Sy(n),"PRIVATE")),xi(new Rr("heartbeat",n=>new s0(n),"PRIVATE")),Pr(Hl,Yd,i),Pr(Hl,Yd,"esm2017"),Pr("fire-js","")}u0("");function wu(i,n){var o={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&n.indexOf(a)<0&&(o[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(i);u<a.length;u++)n.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(i,a[u])&&(o[a[u]]=i[a[u]]);return o}function fp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c0=fp,dp=new Oi("auth","Firebase",fp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new ip("@firebase/auth");function f0(i,...n){us.logLevel<=fe.WARN&&us.warn(`Auth (${Ri}): ${i}`,...n)}function ts(i,...n){us.logLevel<=fe.ERROR&&us.error(`Auth (${Ri}): ${i}`,...n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(i,...n){throw Su(i,...n)}function Et(i,...n){return Su(i,...n)}function _u(i,n,o){const a=Object.assign(Object.assign({},c0()),{[n]:o});return new Oi("auth","Firebase",a).create(n,{appName:i.name})}function xn(i){return _u(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function d0(i,n,o){const a=o;if(!(n instanceof a))throw a.name!==n.constructor.name&&Lt(i,"argument-error"),_u(i,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Su(i,...n){if(typeof i!="string"){const o=n[0],a=[...n.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(o,...a)}return dp.create(i,...n)}function Y(i,n,...o){if(!i)throw Su(n,...o)}function Wt(i){const n="INTERNAL ASSERTION FAILED: "+i;throw ts(n),new Error(n)}function Qt(i,n){i||Wt(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function h0(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h0()||$v()||"connection"in navigator)?navigator.onLine:!0}function m0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(n,o){this.shortDelay=n,this.longDelay=o,Qt(o>n,"Short delay should be less than long delay!"),this.isMobile=Vv()||Wv()}get(){return p0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(i,n){Qt(i.emulator,"Emulator should always be set here");const{url:o}=i.emulator;return n?`${o}${n.startsWith("/")?n.slice(1):n}`:o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{static initialize(n,o,a){this.fetchImpl=n,o&&(this.headersImpl=o),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new Di(3e4,6e4);function Li(i,n){return i.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:i.tenantId}):n}async function Zn(i,n,o,a,u={}){return pp(i,u,async()=>{let f={},h={};a&&(n==="GET"?h=a:f={body:JSON.stringify(a)});const p=bi(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:n,headers:g},f);return Hv()||(E.referrerPolicy="no-referrer"),hp.fetch()(gp(i,i.config.apiHost,o,p),E)})}async function pp(i,n,o){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},g0),n);try{const u=new w0(i),f=await Promise.race([o(),u.promise]);u.clearNetworkTimeout();const h=await f.json();if("needConfirmation"in h)throw Jo(i,"account-exists-with-different-credential",h);if(f.ok&&!("errorMessage"in h))return h;{const p=f.ok?h.errorMessage:h.error.message,[g,E]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Jo(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Jo(i,"user-disabled",h);const I=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw _u(i,I,E);Lt(i,I)}}catch(u){if(u instanceof An)throw u;Lt(i,"network-request-failed",{message:String(u)})}}async function mp(i,n,o,a,u={}){const f=await Zn(i,n,o,a,u);return"mfaPendingCredential"in f&&Lt(i,"multi-factor-auth-required",{_serverResponse:f}),f}function gp(i,n,o,a){const u=`${n}${o}?${a}`;return i.config.emulator?Eu(i.config,u):`${i.config.apiScheme}://${u}`}function y0(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class w0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((o,a)=>{this.timer=setTimeout(()=>a(Et(this.auth,"network-request-failed")),v0.get())})}}function Jo(i,n,o){const a={appName:i.name};o.email&&(a.email=o.email),o.phoneNumber&&(a.phoneNumber=o.phoneNumber);const u=Et(i,n,a);return u.customData._tokenResponse=o,u}function eh(i){return i!==void 0&&i.enterprise!==void 0}class _0{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const o of this.recaptchaEnforcementState)if(o.provider&&o.provider===n)return y0(o.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function S0(i,n){return Zn(i,"GET","/v2/recaptchaConfig",Li(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(i,n){return Zn(i,"POST","/v1/accounts:delete",n)}async function vp(i,n){return Zn(i,"POST","/v1/accounts:lookup",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(i){if(i)try{const n=new Date(Number(i));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function k0(i,n=!1){const o=On(i),a=await o.getIdToken(n),u=ku(a);Y(u&&u.exp&&u.auth_time&&u.iat,o.auth,"internal-error");const f=typeof u.firebase=="object"?u.firebase:void 0,h=f==null?void 0:f.sign_in_provider;return{claims:u,token:a,authTime:ki(Al(u.auth_time)),issuedAtTime:ki(Al(u.iat)),expirationTime:ki(Al(u.exp)),signInProvider:h||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function Al(i){return Number(i)*1e3}function ku(i){const[n,o,a]=i.split(".");if(n===void 0||o===void 0||a===void 0)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const u=tp(o);return u?JSON.parse(u):(ts("Failed to decode base64 JWT payload"),null)}catch(u){return ts("Caught error parsing JWT payload as JSON",u==null?void 0:u.toString()),null}}function th(i){const n=ku(i);return Y(n,"internal-error"),Y(typeof n.exp<"u","internal-error"),Y(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(i,n,o=!1){if(o)return n;try{return await n}catch(a){throw a instanceof An&&I0(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function I0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){var o;if(n){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const u=((o=this.user.stsTokenManager.expirationTime)!==null&&o!==void 0?o:0)-Date.now()-3e5;return Math.max(0,u)}}schedule(n=!1){if(!this.isRunning)return;const o=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},o)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){(n==null?void 0:n.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(n,o){this.createdAt=n,this.lastLoginAt=o,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(i){var n;const o=i.auth,a=await i.getIdToken(),u=await Pi(i,vp(o,{idToken:a}));Y(u==null?void 0:u.users.length,o,"internal-error");const f=u.users[0];i._notifyReloadListener(f);const h=!((n=f.providerUserInfo)===null||n===void 0)&&n.length?yp(f.providerUserInfo):[],p=T0(i.providerData,h),g=i.isAnonymous,E=!(i.email&&f.passwordHash)&&!(p!=null&&p.length),I=g?E:!1,b={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:p,metadata:new Kl(f.createdAt,f.lastLoginAt),isAnonymous:I};Object.assign(i,b)}async function x0(i){const n=On(i);await cs(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function T0(i,n){return[...i.filter(a=>!n.some(u=>u.providerId===a.providerId)),...n]}function yp(i){return i.map(n=>{var{providerId:o}=n,a=wu(n,["providerId"]);return{providerId:o,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(i,n){const o=await pp(i,{},async()=>{const a=bi({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:u,apiKey:f}=i.config,h=gp(i,u,"/v1/token",`key=${f}`),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",hp.fetch()(h,{method:"POST",headers:p,body:a})});return{accessToken:o.access_token,expiresIn:o.expires_in,refreshToken:o.refresh_token}}async function N0(i,n){return Zn(i,"POST","/v2/accounts:revokeToken",Li(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){Y(n.idToken,"internal-error"),Y(typeof n.idToken<"u","internal-error"),Y(typeof n.refreshToken<"u","internal-error");const o="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):th(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,o)}updateFromIdToken(n){Y(n.length!==0,"internal-error");const o=th(n);this.updateTokensAndExpiration(n,null,o)}async getToken(n,o=!1){return!o&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,o){const{accessToken:a,refreshToken:u,expiresIn:f}=await P0(n,o);this.updateTokensAndExpiration(a,u,Number(f))}updateTokensAndExpiration(n,o,a){this.refreshToken=o||null,this.accessToken=n||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(n,o){const{refreshToken:a,accessToken:u,expirationTime:f}=o,h=new Nr;return a&&(Y(typeof a=="string","internal-error",{appName:n}),h.refreshToken=a),u&&(Y(typeof u=="string","internal-error",{appName:n}),h.accessToken=u),f&&(Y(typeof f=="number","internal-error",{appName:n}),h.expirationTime=f),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(i,n){Y(typeof i=="string"||typeof i>"u","internal-error",{appName:n})}class Gt{constructor(n){var{uid:o,auth:a,stsTokenManager:u}=n,f=wu(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=o,this.auth=a,this.stsTokenManager=u,this.accessToken=u.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new Kl(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(n){const o=await Pi(this,this.stsTokenManager.getToken(this.auth,n));return Y(o,this.auth,"internal-error"),this.accessToken!==o&&(this.accessToken=o,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),o}getIdTokenResult(n){return k0(this,n)}reload(){return x0(this)}_assign(n){this!==n&&(Y(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(o=>Object.assign({},o)),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const o=new Gt(Object.assign(Object.assign({},this),{auth:n,stsTokenManager:this.stsTokenManager._clone()}));return o.metadata._copy(this.metadata),o}_onReload(n){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,o=!1){let a=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),a=!0),o&&await cs(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(xn(this.auth));const n=await this.getIdToken();return await Pi(this,E0(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>Object.assign({},n)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,o){var a,u,f,h,p,g,E,I;const b=(a=o.displayName)!==null&&a!==void 0?a:void 0,R=(u=o.email)!==null&&u!==void 0?u:void 0,V=(f=o.phoneNumber)!==null&&f!==void 0?f:void 0,X=(h=o.photoURL)!==null&&h!==void 0?h:void 0,q=(p=o.tenantId)!==null&&p!==void 0?p:void 0,H=(g=o._redirectEventId)!==null&&g!==void 0?g:void 0,Q=(E=o.createdAt)!==null&&E!==void 0?E:void 0,ee=(I=o.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:ae,emailVerified:le,isAnonymous:de,providerData:Ie,stsTokenManager:Ce}=o;Y(ae&&Ce,n,"internal-error");const Fe=Nr.fromJSON(this.name,Ce);Y(typeof ae=="string",n,"internal-error"),wn(b,n.name),wn(R,n.name),Y(typeof le=="boolean",n,"internal-error"),Y(typeof de=="boolean",n,"internal-error"),wn(V,n.name),wn(X,n.name),wn(q,n.name),wn(H,n.name),wn(Q,n.name),wn(ee,n.name);const st=new Gt({uid:ae,auth:n,email:R,emailVerified:le,displayName:b,isAnonymous:de,photoURL:X,phoneNumber:V,tenantId:q,stsTokenManager:Fe,createdAt:Q,lastLoginAt:ee});return Ie&&Array.isArray(Ie)&&(st.providerData=Ie.map(ht=>Object.assign({},ht))),H&&(st._redirectEventId=H),st}static async _fromIdTokenResponse(n,o,a=!1){const u=new Nr;u.updateFromServerResponse(o);const f=new Gt({uid:o.localId,auth:n,stsTokenManager:u,isAnonymous:a});return await cs(f),f}static async _fromGetAccountInfoResponse(n,o,a){const u=o.users[0];Y(u.localId!==void 0,"internal-error");const f=u.providerUserInfo!==void 0?yp(u.providerUserInfo):[],h=!(u.email&&u.passwordHash)&&!(f!=null&&f.length),p=new Nr;p.updateFromIdToken(a);const g=new Gt({uid:u.localId,auth:n,stsTokenManager:p,isAnonymous:h}),E={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Kl(u.createdAt,u.lastLoginAt),isAnonymous:!(u.email&&u.passwordHash)&&!(f!=null&&f.length)};return Object.assign(g,E),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Map;function Kt(i){Qt(i instanceof Function,"Expected a class definition");let n=nh.get(i);return n?(Qt(n instanceof i,"Instance stored in cache mismatched with class"),n):(n=new i,nh.set(i,n),n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,o){this.storage[n]=o}async _get(n){const o=this.storage[n];return o===void 0?null:o}async _remove(n){delete this.storage[n]}_addListener(n,o){}_removeListener(n,o){}}wp.type="NONE";const rh=wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(i,n,o){return`firebase:${i}:${n}:${o}`}class Ar{constructor(n,o,a){this.persistence=n,this.auth=o,this.userKey=a;const{config:u,name:f}=this.auth;this.fullUserKey=ns(this.userKey,u.apiKey,f),this.fullPersistenceKey=ns("persistence",u.apiKey,f),this.boundEventHandler=o._onStorageEvent.bind(o),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);return n?Gt._fromJSON(this.auth,n):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const o=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,o)return this.setCurrentUser(o)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,o,a="authUser"){if(!o.length)return new Ar(Kt(rh),n,a);const u=(await Promise.all(o.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let f=u[0]||Kt(rh);const h=ns(a,n.config.apiKey,n.name);let p=null;for(const E of o)try{const I=await E._get(h);if(I){const b=Gt._fromJSON(n,I);E!==f&&(p=b),f=E;break}}catch{}const g=u.filter(E=>E._shouldAllowMigration);return!f._shouldAllowMigration||!g.length?new Ar(f,n,a):(f=g[0],p&&await f._set(h,p.toJSON()),await Promise.all(o.map(async E=>{if(E!==f)try{await E._remove(h)}catch{}})),new Ar(f,n,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(i){const n=i.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(kp(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(_p(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(Cp(n))return"Blackberry";if(xp(n))return"Webos";if(Sp(n))return"Safari";if((n.includes("chrome/")||Ep(n))&&!n.includes("edge/"))return"Chrome";if(Ip(n))return"Android";{const o=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(o);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function _p(i=We()){return/firefox\//i.test(i)}function Sp(i=We()){const n=i.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function Ep(i=We()){return/crios\//i.test(i)}function kp(i=We()){return/iemobile/i.test(i)}function Ip(i=We()){return/android/i.test(i)}function Cp(i=We()){return/blackberry/i.test(i)}function xp(i=We()){return/webos/i.test(i)}function Iu(i=We()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function A0(i=We()){var n;return Iu(i)&&!!(!((n=window.navigator)===null||n===void 0)&&n.standalone)}function O0(){return Gv()&&document.documentMode===10}function Tp(i=We()){return Iu(i)||Ip(i)||xp(i)||Cp(i)||/windows phone/i.test(i)||kp(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(i,n=[]){let o;switch(i){case"Browser":o=ih(We());break;case"Worker":o=`${ih(We())}-${i}`;break;default:o=i}const a=n.length?n.join(","):"FirebaseCore-web";return`${o}/JsCore/${Ri}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,o){const a=f=>new Promise((h,p)=>{try{const g=n(f);h(g)}catch(g){p(g)}});a.onAbort=o,this.queue.push(a);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const o=[];try{for(const a of this.queue)await a(n),a.onAbort&&o.push(a.onAbort)}catch(a){o.reverse();for(const u of o)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(i,n={}){return Zn(i,"GET","/v2/passwordPolicy",Li(i,n))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=6;class L0{constructor(n){var o,a,u,f;const h=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(o=h.minPasswordLength)!==null&&o!==void 0?o:D0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(u=(a=n.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&u!==void 0?u:"",this.forceUpgradeOnSignin=(f=n.forceUpgradeOnSignin)!==null&&f!==void 0?f:!1,this.schemaVersion=n.schemaVersion}validatePassword(n){var o,a,u,f,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,g),this.validatePasswordCharacterOptions(n,g),g.isValid&&(g.isValid=(o=g.meetsMinPasswordLength)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(a=g.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(u=g.containsLowercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsUppercaseLetter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(n,o){const a=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;a&&(o.meetsMinPasswordLength=n.length>=a),u&&(o.meetsMaxPasswordLength=n.length<=u)}validatePasswordCharacterOptions(n,o){this.updatePasswordCharacterOptionsStatuses(o,!1,!1,!1,!1);let a;for(let u=0;u<n.length;u++)a=n.charAt(u),this.updatePasswordCharacterOptionsStatuses(o,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(n,o,a,u,f){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=o)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(n,o,a,u){this.app=n,this.heartbeatServiceProvider=o,this.appCheckServiceProvider=a,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new b0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=u.sdkClientVersion}_initializeWithPersistence(n,o){return o&&(this._popupRedirectResolver=Kt(o)),this._initializationPromise=this.queue(async()=>{var a,u;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,n),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(o),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const o=await vp(this,{idToken:n}),a=await Gt._fromGetAccountInfoResponse(this,o,n);await this.directlySetCurrentUser(a)}catch(o){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",o),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){var o;if(Ot(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let u=a,f=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId,p=u==null?void 0:u._redirectEventId,g=await this.tryRedirectSignIn(n);(!h||h===p)&&(g!=null&&g.user)&&(u=g.user,f=!0)}if(!u)return this.directlySetCurrentUser(null);if(!u._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(u)}catch(h){u=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return u?this.reloadAndSetCurrentUserOrClear(u):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===u._redirectEventId?this.directlySetCurrentUser(u):this.reloadAndSetCurrentUserOrClear(u)}async tryRedirectSignIn(n){let o=null;try{o=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return o}async reloadAndSetCurrentUserOrClear(n){try{await cs(n)}catch(o){if((o==null?void 0:o.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=m0()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(Ot(this.app))return Promise.reject(xn(this));const o=n?On(n):null;return o&&Y(o.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(o&&o._clone(this))}async _updateCurrentUser(n,o=!1){if(!this._deleted)return n&&Y(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),o||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return Ot(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const o=this._getPasswordPolicyInternal();return o.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):o.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await R0(this),o=new L0(n);this.tenantId===null?this._projectPasswordPolicy=o:this._tenantPasswordPolicies[this.tenantId]=o}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(n){this._errorFactory=new Oi("auth","Firebase",n())}onAuthStateChanged(n,o,a){return this.registerStateListener(this.authStateSubscription,n,o,a)}beforeAuthStateChanged(n,o){return this.beforeStateQueue.pushCallback(n,o)}onIdTokenChanged(n,o,a){return this.registerStateListener(this.idTokenSubscription,n,o,a)}authStateReady(){return new Promise((n,o)=>{if(this.currentUser)n();else{const a=this.onAuthStateChanged(()=>{a(),n()},o)}})}async revokeAccessToken(n){if(this.currentUser){const o=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:o};this.tenantId!=null&&(a.tenantId=this.tenantId),await N0(this,a)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)===null||n===void 0?void 0:n.toJSON()}}async _setRedirectUser(n,o){const a=await this.getOrInitRedirectPersistenceManager(o);return n===null?a.removeCurrentUser():a.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const o=n&&Kt(n)||this._popupRedirectResolver;Y(o,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Kt(o._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var o,a;return this._isInitialized&&await this.queue(async()=>{}),((o=this._currentUser)===null||o===void 0?void 0:o._redirectEventId)===n?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,o;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(o=(n=this.currentUser)===null||n===void 0?void 0:n.uid)!==null&&o!==void 0?o:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,o,a,u){if(this._deleted)return()=>{};const f=typeof o=="function"?o:o.next.bind(o);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(p,this,"internal-error"),p.then(()=>{h||f(this.currentUser)}),typeof o=="function"){const g=n.addObserver(o,a,u);return()=>{h=!0,g()}}else{const g=n.addObserver(o);return()=>{h=!0,g()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const o={"X-Client-Version":this.clientVersion};this.app.options.appId&&(o["X-Firebase-gmpid"]=this.app.options.appId);const a=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getHeartbeatsHeader());a&&(o["X-Firebase-Client"]=a);const u=await this._getAppCheckToken();return u&&(o["X-Firebase-AppCheck"]=u),o}async _getAppCheckToken(){var n;const o=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getToken());return o!=null&&o.error&&f0(`Error while retrieving App Check token: ${o.error}`),o==null?void 0:o.token}}function er(i){return On(i)}class oh{constructor(n){this.auth=n,this.observer=null,this.addObserver=Zv(o=>this.observer=o)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F0(i){ws=i}function Np(i){return ws.loadJS(i)}function j0(){return ws.recaptchaEnterpriseScript}function z0(){return ws.gapiScript}function U0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class B0{constructor(){this.enterprise=new V0}ready(n){n()}execute(n,o){return Promise.resolve("token")}render(n,o){return""}}class V0{ready(n){n()}execute(n,o){return Promise.resolve("token")}render(n,o){return""}}const H0="recaptcha-enterprise",Ap="NO_RECAPTCHA";class $0{constructor(n){this.type=H0,this.auth=er(n)}async verify(n="verify",o=!1){async function a(f){if(!o){if(f.tenantId==null&&f._agentRecaptchaConfig!=null)return f._agentRecaptchaConfig.siteKey;if(f.tenantId!=null&&f._tenantRecaptchaConfigs[f.tenantId]!==void 0)return f._tenantRecaptchaConfigs[f.tenantId].siteKey}return new Promise(async(h,p)=>{S0(f,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const E=new _0(g);return f.tenantId==null?f._agentRecaptchaConfig=E:f._tenantRecaptchaConfigs[f.tenantId]=E,h(E.siteKey)}}).catch(g=>{p(g)})})}function u(f,h,p){const g=window.grecaptcha;eh(g)?g.enterprise.ready(()=>{g.enterprise.execute(f,{action:n}).then(E=>{h(E)}).catch(()=>{h(Ap)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new B0().execute("siteKey",{action:"verify"}):new Promise((f,h)=>{a(this.auth).then(p=>{if(!o&&eh(window.grecaptcha))u(p,f,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=j0();g.length!==0&&(g+=p),Np(g).then(()=>{u(p,f,h)}).catch(E=>{h(E)})}}).catch(p=>{h(p)})})}}async function sh(i,n,o,a=!1,u=!1){const f=new $0(i);let h;if(u)h=Ap;else try{h=await f.verify(o)}catch{h=await f.verify(o,!0)}const p=Object.assign({},n);return a?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function W0(i,n,o,a,u){var f;if(!((f=i._getRecaptchaConfig())===null||f===void 0)&&f.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await sh(i,n,o,o==="getOobCode");return a(i,h)}else return a(i,n).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${o} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await sh(i,n,o,o==="getOobCode");return a(i,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(i,n){const o=ap(i,"auth");if(o.isInitialized()){const u=o.getImmediate(),f=o.getOptions();if(as(f,n??{}))return u;Lt(u,"already-initialized")}return o.initialize({options:n})}function K0(i,n){const o=(n==null?void 0:n.persistence)||[],a=(Array.isArray(o)?o:[o]).map(Kt);n!=null&&n.errorMap&&i._updateErrorMap(n.errorMap),i._initializeWithPersistence(a,n==null?void 0:n.popupRedirectResolver)}function Y0(i,n,o){const a=er(i);Y(a._canInitEmulator,a,"emulator-config-failed"),Y(/^https?:\/\//.test(n),a,"invalid-emulator-scheme");const u=!1,f=Op(n),{host:h,port:p}=Q0(n),g=p===null?"":`:${p}`;a.config.emulator={url:`${f}//${h}${g}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:h,port:p,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:u})}),q0()}function Op(i){const n=i.indexOf(":");return n<0?"":i.substr(0,n+1)}function Q0(i){const n=Op(i),o=/(\/\/)?([^?#/]+)/.exec(i.substr(n.length));if(!o)return{host:"",port:null};const a=o[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(a);if(u){const f=u[1];return{host:f,port:ah(a.substr(f.length+1))}}else{const[f,h]=a.split(":");return{host:f,port:ah(h)}}}function ah(i){if(!i)return null;const n=Number(i);return isNaN(n)?null:n}function q0(){function i(){const n=document.createElement("p"),o=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",o.position="fixed",o.width="100%",o.backgroundColor="#ffffff",o.border=".1em solid #000000",o.color="#b50000",o.bottom="0px",o.left="0px",o.margin="0px",o.zIndex="10000",o.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(n,o){this.providerId=n,this.signInMethod=o}toJSON(){return Wt("not implemented")}_getIdTokenResponse(n){return Wt("not implemented")}_linkToIdToken(n,o){return Wt("not implemented")}_getReauthenticationResolver(n){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(i,n){return mp(i,"POST","/v1/accounts:signInWithIdp",Li(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="http://localhost";class Qn extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const o=new Qn(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(o.idToken=n.idToken),n.accessToken&&(o.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(o.nonce=n.nonce),n.pendingToken&&(o.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(o.accessToken=n.oauthToken,o.secret=n.oauthTokenSecret):Lt("argument-error"),o}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const o=typeof n=="string"?JSON.parse(n):n,{providerId:a,signInMethod:u}=o,f=wu(o,["providerId","signInMethod"]);if(!a||!u)return null;const h=new Qn(a,u);return h.idToken=f.idToken||void 0,h.accessToken=f.accessToken||void 0,h.secret=f.secret,h.nonce=f.nonce,h.pendingToken=f.pendingToken||null,h}_getIdTokenResponse(n){const o=this.buildRequest();return Or(n,o)}_linkToIdToken(n,o){const a=this.buildRequest();return a.idToken=o,Or(n,a)}_getReauthenticationResolver(n){const o=this.buildRequest();return o.autoCreate=!1,Or(n,o)}buildRequest(){const n={requestUri:X0,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const o={};this.idToken&&(o.id_token=this.idToken),this.accessToken&&(o.access_token=this.accessToken),this.secret&&(o.oauth_token_secret=this.secret),o.providerId=this.providerId,this.nonce&&!this.pendingToken&&(o.nonce=this.nonce),n.postBody=bi(o)}return n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Cu{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Mi{constructor(){super("facebook.com")}static credential(n){return Qn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Sn.credentialFromTaggedObject(n)}static credentialFromError(n){return Sn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Sn.credential(n.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(n,o){return Qn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:o})}static credentialFromResult(n){return $t.credentialFromTaggedObject(n)}static credentialFromError(n){return $t.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:o,oauthAccessToken:a}=n;if(!o&&!a)return null;try{return $t.credential(o,a)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Mi{constructor(){super("github.com")}static credential(n){return Qn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return En.credentialFromTaggedObject(n)}static credentialFromError(n){return En.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return En.credential(n.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Mi{constructor(){super("twitter.com")}static credential(n,o){return Qn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:o})}static credentialFromResult(n){return kn.credentialFromTaggedObject(n)}static credentialFromError(n){return kn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:o,oauthTokenSecret:a}=n;if(!o||!a)return null;try{return kn.credential(o,a)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(i,n){return mp(i,"POST","/v1/accounts:signUp",Li(i,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,o,a,u=!1){const f=await Gt._fromIdTokenResponse(n,a,u),h=lh(a);return new qn({user:f,providerId:h,_tokenResponse:a,operationType:o})}static async _forOperation(n,o,a){await n._updateTokensIfNecessary(a,!0);const u=lh(a);return new qn({user:n,providerId:u,_tokenResponse:a,operationType:o})}}function lh(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends An{constructor(n,o,a,u){var f;super(o.code,o.message),this.operationType=a,this.user=u,Object.setPrototypeOf(this,fs.prototype),this.customData={appName:n.name,tenantId:(f=n.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:o.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(n,o,a,u){return new fs(n,o,a,u)}}function Rp(i,n,o,a){return(n==="reauthenticate"?o._getReauthenticationResolver(i):o._getIdTokenResponse(i)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?fs._fromErrorAndOperation(i,f,n,a):f})}async function Z0(i,n,o=!1){const a=await Pi(i,n._linkToIdToken(i.auth,await i.getIdToken()),o);return qn._forOperation(i,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(i,n,o=!1){const{auth:a}=i;if(Ot(a.app))return Promise.reject(xn(a));const u="reauthenticate";try{const f=await Pi(i,Rp(a,u,n,i),o);Y(f.idToken,a,"internal-error");const h=ku(f.idToken);Y(h,a,"internal-error");const{sub:p}=h;return Y(i.uid===p,a,"user-mismatch"),qn._forOperation(i,u,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&Lt(a,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(i,n,o=!1){if(Ot(i.app))return Promise.reject(xn(i));const a="signIn",u=await Rp(i,a,n),f=await qn._fromIdTokenResponse(i,a,u);return o||await i._updateCurrentUser(f.user),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(i){const n=er(i);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function r1(i,n,o){if(Ot(i.app))return Promise.reject(xn(i));const a=er(i),h=await W0(a,{returnSecureToken:!0,email:n,password:o,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",J0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&n1(i),g}),p=await qn._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(p.user),p}function i1(i,n,o,a){return On(i).onIdTokenChanged(n,o,a)}function o1(i,n,o){return On(i).beforeAuthStateChanged(n,o)}function s1(i,n,o,a){return On(i).onAuthStateChanged(n,o,a)}function a1(i){return On(i).signOut()}const ds="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(n,o){this.storageRetriever=n,this.type=o}_isAvailable(){try{return this.storage?(this.storage.setItem(ds,"1"),this.storage.removeItem(ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,o){return this.storage.setItem(n,JSON.stringify(o)),Promise.resolve()}_get(n){const o=this.storage.getItem(n);return Promise.resolve(o?JSON.parse(o):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=1e3,u1=10;class Lp extends Dp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,o)=>this.onStorageEvent(n,o),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tp(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const o of Object.keys(this.listeners)){const a=this.storage.getItem(o),u=this.localCache[o];a!==u&&n(o,u,a)}}onStorageEvent(n,o=!1){if(!n.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const a=n.key;o?this.detachListener():this.stopPolling();const u=()=>{const h=this.storage.getItem(a);!o&&this.localCache[a]===h||this.notifyListeners(a,h)},f=this.storage.getItem(a);O0()&&f!==n.newValue&&n.newValue!==n.oldValue?setTimeout(u,u1):u()}notifyListeners(n,o){this.localCache[n]=o;const a=this.listeners[n];if(a)for(const u of Array.from(a))u(o&&JSON.parse(o))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,o,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:o,newValue:a}),!0)})},l1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,o){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(o)}_removeListener(n,o){this.listeners[n]&&(this.listeners[n].delete(o),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,o){await super._set(n,o),this.localCache[n]=JSON.stringify(o)}async _get(n){const o=await super._get(n);return this.localCache[n]=JSON.stringify(o),o}async _remove(n){await super._remove(n),delete this.localCache[n]}}Lp.type="LOCAL";const c1=Lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,o){}_removeListener(n,o){}}Mp.type="SESSION";const Fp=Mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(i){return Promise.all(i.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(o){return{fulfilled:!1,reason:o}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const o=this.receivers.find(u=>u.isListeningto(n));if(o)return o;const a=new _s(n);return this.receivers.push(a),a}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const o=n,{eventId:a,eventType:u,data:f}=o.data,h=this.handlersMap[u];if(!(h!=null&&h.size))return;o.ports[0].postMessage({status:"ack",eventId:a,eventType:u});const p=Array.from(h).map(async E=>E(o.origin,f)),g=await f1(p);o.ports[0].postMessage({status:"done",eventId:a,eventType:u,response:g})}_subscribe(n,o){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(o)}_unsubscribe(n,o){this.handlersMap[n]&&o&&this.handlersMap[n].delete(o),(!o||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(i="",n=10){let o="";for(let a=0;a<n;a++)o+=Math.floor(Math.random()*10);return i+o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,o,a=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let f,h;return new Promise((p,g)=>{const E=xu("",20);u.port1.start();const I=setTimeout(()=>{g(new Error("unsupported_event"))},a);h={messageChannel:u,onMessage(b){const R=b;if(R.data.eventId===E)switch(R.data.status){case"ack":clearTimeout(I),f=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),p(R.data.response);break;default:clearTimeout(I),clearTimeout(f),g(new Error("invalid_response"));break}}},this.handlers.add(h),u.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:n,eventId:E,data:o},[u.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function h1(i){Dt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function p1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function g1(){return jp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="firebaseLocalStorageDb",v1=1,hs="firebaseLocalStorage",Up="fbase_key";class Fi{constructor(n){this.request=n}toPromise(){return new Promise((n,o)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{o(this.request.error)})})}}function Ss(i,n){return i.transaction([hs],n?"readwrite":"readonly").objectStore(hs)}function y1(){const i=indexedDB.deleteDatabase(zp);return new Fi(i).toPromise()}function Yl(){const i=indexedDB.open(zp,v1);return new Promise((n,o)=>{i.addEventListener("error",()=>{o(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(hs,{keyPath:Up})}catch(u){o(u)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(hs)?n(a):(a.close(),await y1(),n(await Yl()))})})}async function uh(i,n,o){const a=Ss(i,!0).put({[Up]:n,value:o});return new Fi(a).toPromise()}async function w1(i,n){const o=Ss(i,!1).get(n),a=await new Fi(o).toPromise();return a===void 0?null:a.value}function ch(i,n){const o=Ss(i,!0).delete(n);return new Fi(o).toPromise()}const _1=800,S1=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yl(),this.db)}async _withRetries(n){let o=0;for(;;)try{const a=await this._openDb();return await n(a)}catch(a){if(o++>S1)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(g1()),this.receiver._subscribe("keyChanged",async(n,o)=>({keyProcessed:(await this._poll()).includes(o.key)})),this.receiver._subscribe("ping",async(n,o)=>["keyChanged"])}async initializeSender(){var n,o;if(this.activeServiceWorker=await p1(),!this.activeServiceWorker)return;this.sender=new d1(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((n=a[0])===null||n===void 0)&&n.fulfilled&&!((o=a[0])===null||o===void 0)&&o.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||m1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await Yl();return await uh(n,ds,"1"),await ch(n,ds),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,o){return this._withPendingWrite(async()=>(await this._withRetries(a=>uh(a,n,o)),this.localCache[n]=o,this.notifyServiceWorker(n)))}async _get(n){const o=await this._withRetries(a=>w1(a,n));return this.localCache[n]=o,o}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(o=>ch(o,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(u=>{const f=Ss(u,!1).getAll();return new Fi(f).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const o=[],a=new Set;if(n.length!==0)for(const{fbase_key:u,value:f}of n)a.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(f)&&(this.notifyListeners(u,f),o.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!a.has(u)&&(this.notifyListeners(u,null),o.push(u));return o}notifyListeners(n,o){this.localCache[n]=o;const a=this.listeners[n];if(a)for(const u of Array.from(a))u(o)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,o){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(o)}_removeListener(n,o){this.listeners[n]&&(this.listeners[n].delete(o),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const E1=Bp;new Di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(i,n){return n?Kt(n):(Y(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends bp{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return Or(n,this._buildIdpRequest())}_linkToIdToken(n,o){return Or(n,this._buildIdpRequest(o))}_getReauthenticationResolver(n){return Or(n,this._buildIdpRequest())}_buildIdpRequest(n){const o={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(o.idToken=n),o}}function k1(i){return t1(i.auth,new Tu(i),i.bypassAuthState)}function I1(i){const{auth:n,user:o}=i;return Y(o,n,"internal-error"),e1(o,new Tu(i),i.bypassAuthState)}async function C1(i){const{auth:n,user:o}=i;return Y(o,n,"internal-error"),Z0(o,new Tu(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(n,o,a,u,f=!1){this.auth=n,this.resolver=a,this.user=u,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(o)?o:[o]}execute(){return new Promise(async(n,o)=>{this.pendingPromise={resolve:n,reject:o};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(n){const{urlResponse:o,sessionId:a,postBody:u,tenantId:f,error:h,type:p}=n;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:o,sessionId:a,tenantId:f||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(E){this.reject(E)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return C1;case"reauthViaPopup":case"reauthViaRedirect":return I1;default:Lt(this.auth,"internal-error")}}resolve(n){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Di(2e3,1e4);async function T1(i,n,o){if(Ot(i.app))return Promise.reject(Et(i,"operation-not-supported-in-this-environment"));const a=er(i);d0(i,n,Cu);const u=Vp(a,o);return new Kn(a,"signInViaPopup",n,u).executeNotNull()}class Kn extends Hp{constructor(n,o,a,u,f){super(n,o,u,f),this.provider=a,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return Y(n,this.auth,"internal-error"),n}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const n=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(o=>{this.reject(o)}),this.resolver._isIframeWebStorageSupported(this.auth,o=>{o||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)===null||n===void 0?void 0:n.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const n=()=>{var o,a;if(!((a=(o=this.authWindow)===null||o===void 0?void 0:o.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,x1.get())};n()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="pendingRedirect",rs=new Map;class N1 extends Hp{constructor(n,o,a=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],o,void 0,a),this.eventId=null}async execute(){let n=rs.get(this.auth._key());if(!n){try{const a=await A1(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(a)}catch(o){n=()=>Promise.reject(o)}rs.set(this.auth._key(),n)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const o=await this.auth._redirectUserForId(n.eventId);if(o)return this.user=o,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A1(i,n){const o=R1(n),a=b1(i);if(!await a._isAvailable())return!1;const u=await a._get(o)==="true";return await a._remove(o),u}function O1(i,n){rs.set(i._key(),n)}function b1(i){return Kt(i._redirectPersistence)}function R1(i){return ns(P1,i.config.apiKey,i.name)}async function D1(i,n,o=!1){if(Ot(i.app))return Promise.reject(xn(i));const a=er(i),u=Vp(a,n),h=await new N1(a,u,o).execute();return h&&!o&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,n)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=10*60*1e3;class M1{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let o=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(n,a)&&(o=!0,this.sendToConsumer(n,a),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!F1(n)||(this.hasHandledPotentialRedirect=!0,o||(this.queuedRedirectEvent=n,o=!0)),o}sendToConsumer(n,o){var a;if(n.error&&!$p(n)){const u=((a=n.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";o.onError(Et(this.auth,u))}else o.onAuthEvent(n)}isEventForConsumer(n,o){const a=o.eventId===null||!!n.eventId&&n.eventId===o.eventId;return o.filter.includes(n.type)&&a}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=L1&&this.cachedEventUids.clear(),this.cachedEventUids.has(fh(n))}saveEventToCache(n){this.cachedEventUids.add(fh(n)),this.lastProcessedEventTime=Date.now()}}function fh(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(n=>n).join("-")}function $p({type:i,error:n}){return i==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function F1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $p(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(i,n={}){return Zn(i,"GET","/v1/projects",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U1=/^https?/;async function B1(i){if(i.config.emulator)return;const{authorizedDomains:n}=await j1(i);for(const o of n)try{if(V1(o))return}catch{}Lt(i,"unauthorized-domain")}function V1(i){const n=Gl(),{protocol:o,hostname:a}=new URL(n);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&a===""?o==="chrome-extension:"&&i.replace("chrome-extension://","")===n.replace("chrome-extension://",""):o==="chrome-extension:"&&h.hostname===a}if(!U1.test(o))return!1;if(z1.test(i))return a===i;const u=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new Di(3e4,6e4);function dh(){const i=Dt().___jsl;if(i!=null&&i.H){for(const n of Object.keys(i.H))if(i.H[n].r=i.H[n].r||[],i.H[n].L=i.H[n].L||[],i.H[n].r=[...i.H[n].L],i.CP)for(let o=0;o<i.CP.length;o++)i.CP[o]=null}}function $1(i){return new Promise((n,o)=>{var a,u,f;function h(){dh(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{dh(),o(Et(i,"network-request-failed"))},timeout:H1.get()})}if(!((u=(a=Dt().gapi)===null||a===void 0?void 0:a.iframes)===null||u===void 0)&&u.Iframe)n(gapi.iframes.getContext());else if(!((f=Dt().gapi)===null||f===void 0)&&f.load)h();else{const p=U0("iframefcb");return Dt()[p]=()=>{gapi.load?h():o(Et(i,"network-request-failed"))},Np(`${z0()}?onload=${p}`).catch(g=>o(g))}}).catch(n=>{throw is=null,n})}let is=null;function W1(i){return is=is||$1(i),is}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new Di(5e3,15e3),K1="__/auth/iframe",Y1="emulator/auth/iframe",Q1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X1(i){const n=i.config;Y(n.authDomain,i,"auth-domain-config-required");const o=n.emulator?Eu(n,Y1):`https://${i.config.authDomain}/${K1}`,a={apiKey:n.apiKey,appName:i.name,v:Ri},u=q1.get(i.config.apiHost);u&&(a.eid=u);const f=i._getFrameworks();return f.length&&(a.fw=f.join(",")),`${o}?${bi(a).slice(1)}`}async function J1(i){const n=await W1(i),o=Dt().gapi;return Y(o,i,"internal-error"),n.open({where:document.body,url:X1(i),messageHandlersFilter:o.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q1,dontclear:!0},a=>new Promise(async(u,f)=>{await a.restyle({setHideOnLeave:!1});const h=Et(i,"network-request-failed"),p=Dt().setTimeout(()=>{f(h)},G1.get());function g(){Dt().clearTimeout(p),u(a)}a.ping(g).then(g,()=>{f(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ew=500,tw=600,nw="_blank",rw="http://localhost";class hh{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iw(i,n,o,a=ew,u=tw){const f=Math.max((window.screen.availHeight-u)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const g=Object.assign(Object.assign({},Z1),{width:a.toString(),height:u.toString(),top:f,left:h}),E=We().toLowerCase();o&&(p=Ep(E)?nw:o),_p(E)&&(n=n||rw,g.scrollbars="yes");const I=Object.entries(g).reduce((R,[V,X])=>`${R}${V}=${X},`,"");if(A0(E)&&p!=="_self")return ow(n||"",p),new hh(null);const b=window.open(n||"",p,I);Y(b,i,"popup-blocked");try{b.focus()}catch{}return new hh(b)}function ow(i,n){const o=document.createElement("a");o.href=i,o.target=n;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),o.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="__/auth/handler",aw="emulator/auth/handler",lw=encodeURIComponent("fac");async function ph(i,n,o,a,u,f){Y(i.config.authDomain,i,"auth-domain-config-required"),Y(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:o,redirectUrl:a,v:Ri,eventId:u};if(n instanceof Cu){n.setDefaultLanguage(i.languageCode),h.providerId=n.providerId||"",Jv(n.getCustomParameters())||(h.customParameters=JSON.stringify(n.getCustomParameters()));for(const[I,b]of Object.entries({}))h[I]=b}if(n instanceof Mi){const I=n.getScopes().filter(b=>b!=="");I.length>0&&(h.scopes=I.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const g=await i._getAppCheckToken(),E=g?`#${lw}=${encodeURIComponent(g)}`:"";return`${uw(i)}?${bi(p).slice(1)}${E}`}function uw({config:i}){return i.emulator?Eu(i,aw):`https://${i.authDomain}/${sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="webStorageSupport";class cw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=D1,this._overrideRedirectResult=O1}async _openPopup(n,o,a,u){var f;Qt((f=this.eventManagers[n._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const h=await ph(n,o,a,Gl(),u);return iw(n,h,xu())}async _openRedirect(n,o,a,u){await this._originValidation(n);const f=await ph(n,o,a,Gl(),u);return h1(f),new Promise(()=>{})}_initialize(n){const o=n._key();if(this.eventManagers[o]){const{manager:u,promise:f}=this.eventManagers[o];return u?Promise.resolve(u):(Qt(f,"If manager is not set, promise should be"),f)}const a=this.initAndGetManager(n);return this.eventManagers[o]={promise:a},a.catch(()=>{delete this.eventManagers[o]}),a}async initAndGetManager(n){const o=await J1(n),a=new M1(n);return o.register("authEvent",u=>(Y(u==null?void 0:u.authEvent,n,"invalid-auth-event"),{status:a.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:a},this.iframes[n._key()]=o,a}_isIframeWebStorageSupported(n,o){this.iframes[n._key()].send(Ol,{type:Ol},u=>{var f;const h=(f=u==null?void 0:u[0])===null||f===void 0?void 0:f[Ol];h!==void 0&&o(!!h),Lt(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const o=n._key();return this.originValidationPromises[o]||(this.originValidationPromises[o]=B1(n)),this.originValidationPromises[o]}get _shouldInitProactively(){return Tp()||Sp()||Iu()}}const fw=cw;var mh="@firebase/auth",gh="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)===null||n===void 0?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const o=this.auth.onIdTokenChanged(a=>{n((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,o),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const o=this.internalListeners.get(n);o&&(this.internalListeners.delete(n),o(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pw(i){xi(new Rr("auth",(n,{options:o})=>{const a=n.getProvider("app").getImmediate(),u=n.getProvider("heartbeat"),f=n.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=a.options;Y(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pp(i)},E=new M0(a,u,f,g);return K0(E,o),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,o,a)=>{n.getProvider("auth-internal").initialize()})),xi(new Rr("auth-internal",n=>{const o=er(n.getProvider("auth").getImmediate());return(a=>new dw(a))(o)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(mh,gh,hw(i)),Pr(mh,gh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=5*60,gw=rp("authIdTokenMaxAge")||mw;let vh=null;const vw=i=>async n=>{const o=n&&await n.getIdTokenResult(),a=o&&(new Date().getTime()-Date.parse(o.issuedAtTime))/1e3;if(a&&a>gw)return;const u=o==null?void 0:o.token;vh!==u&&(vh=u,await fetch(i,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function yw(i=e0()){const n=ap(i,"auth");if(n.isInitialized())return n.getImmediate();const o=G0(i,{popupRedirectResolver:fw,persistence:[E1,c1,Fp]}),a=rp("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(a,location.origin);if(location.origin===f.origin){const h=vw(f.toString());o1(o,h,()=>h(o.currentUser)),i1(o,p=>h(p))}}const u=Uv("auth");return u&&Y0(o,`http://${u}`),o}function ww(){var i,n;return(n=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&n!==void 0?n:document}F0({loadJS(i){return new Promise((n,o)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=n,a.onerror=u=>{const f=Et("internal-error");f.customData=u,o(f)},a.type="text/javascript",a.charset="UTF-8",ww().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pw("Browser");var _w="firebase",Sw="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(_w,Sw,"app");const Ew={apiKey:"AIzaSyBHm4k8ZNFSuExEYDUFa5NziPIKq899lRg",authDomain:"coldbydefault-95.firebaseapp.com",projectId:"coldbydefault-95",storageBucket:"coldbydefault-95.firebasestorage.app",messagingSenderId:"323707087839",appId:"1:323707087839:web:49b5e2bf81c365e470726a",measurementId:"G-FM3D9HLLKP"},kw=lp(Ew),ps=yw(kw),Iw=new $t,Cw=({setUserDetails:i,setCurrentPage:n})=>{const o=async()=>{try{await a1(ps),typeof i=="function"&&i(null),typeof n=="function"&&n("Home")}catch(a){console.error("Logout failed:",a)}};return x.jsx("button",{onClick:o,className:"bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300",children:"Logout"})};function xw({currentPage:i,setCurrentPage:n,userDetails:o,setUserDetails:a}){const[u,f]=Ne.useState(!1),h=p=>{n(p),f(!1)};return x.jsx("nav",{className:"bg-black shadow-lg shadow-gray-400/10 lg:w-2/3 lg:mx-auto mt-4 z-50",children:x.jsxs("div",{className:"flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4",children:[x.jsx("div",{className:"flex items-center space-x-3 rtl:space-x-reverse",children:x.jsxs("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:["beRich",x.jsx("span",{className:"text-sm absolute lg:-translate-y-1/6",children:".Library"})]})}),x.jsxs("div",{className:"flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse",children:[!o&&x.jsx("a",{href:"#",onClick:()=>h("SignIn"),className:`text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 \r
              font-medium rounded-lg text-sm px-4 py-2 \r
              md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800`,children:"Sign-In"}),o&&x.jsxs(x.Fragment,{children:[x.jsx("img",{src:o.photoURL||"https://via.placeholder.com/40",alt:"Profile",className:"w-10 h-10 rounded-full",onError:p=>p.target.src="https://via.placeholder.com/40"}),x.jsx("span",{className:"text-gray-800 dark:text-white font-medium",children:o.username}),x.jsx(Cw,{setUserDetails:a,setCurrentPage:n})]}),x.jsxs("button",{onClick:()=>f(p=>!p),type:"button",className:`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg \r
            md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`,"aria-controls":"mega-menu-icons","aria-expanded":u,children:[x.jsx("span",{className:"sr-only",children:"Open main menu"}),x.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:x.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]})]}),x.jsx("div",{id:"mega-menu-icons",className:`items-center justify-evenly ${u?"":"hidden"} w-full md:flex md:w-auto md:order-1`,children:x.jsxs("ul",{className:"flex font-medium w-full space-x-12 items-center justify-center",children:[x.jsx("li",{children:x.jsx("a",{href:"#",onClick:()=>h("Home"),className:`block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 \r
                md:hover:text-blue-600 md:p-0 dark:text-blue-500 \r
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`,children:"Home"})}),o&&x.jsxs(x.Fragment,{children:[x.jsx("li",{children:x.jsx("a",{href:"#",onClick:()=>h("Docs"),className:`block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 \r
                    md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 \r
                    dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`,children:"Docs"})}),x.jsx("li",{children:x.jsx("a",{href:"#",onClick:()=>h("Links"),className:`block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 \r
                    md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 \r
                    dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`,children:"Links"})})]})]})})]})})}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Tw(i,n,o){return(n=Nw(n))in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function yh(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);n&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,a)}return o}function A(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?yh(Object(o),!0).forEach(function(a){Tw(i,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):yh(Object(o)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(o,a))})}return i}function Pw(i,n){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var a=o.call(i,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function Nw(i){var n=Pw(i,"string");return typeof n=="symbol"?n:n+""}const wh=()=>{};let Pu={},Wp={},Gp=null,Kp={mark:wh,measure:wh};try{typeof window<"u"&&(Pu=window),typeof document<"u"&&(Wp=document),typeof MutationObserver<"u"&&(Gp=MutationObserver),typeof performance<"u"&&(Kp=performance)}catch{}const{userAgent:_h=""}=Pu.navigator||{},Tn=Pu,ve=Wp,Sh=Gp,Zo=Kp;Tn.document;const Jt=!!ve.documentElement&&!!ve.head&&typeof ve.addEventListener=="function"&&typeof ve.createElement=="function",Yp=~_h.indexOf("MSIE")||~_h.indexOf("Trident/");var Aw=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ow=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},bw={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ve="classic",Es="duotone",Rw="sharp",Dw="sharp-duotone",Xp=[Ve,Es,Rw,Dw],Lw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Mw={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Fw=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),jw={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},zw=["fak","fa-kit","fakd","fa-kit-duotone"],Eh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Uw=["kit"],Bw={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Vw=["fak","fakd"],Hw={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},kh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},es={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$w=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ww=["fak","fa-kit","fakd","fa-kit-duotone"],Gw={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Kw={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Yw={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ql={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Qw=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ql=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...$w,...Qw],qw=["solid","regular","light","thin","duotone","brands"],Jp=[1,2,3,4,5,6,7,8,9,10],Xw=Jp.concat([11,12,13,14,15,16,17,18,19,20]),Jw=[...Object.keys(Yw),...qw,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",es.GROUP,es.SWAP_OPACITY,es.PRIMARY,es.SECONDARY].concat(Jp.map(i=>"".concat(i,"x"))).concat(Xw.map(i=>"w-".concat(i))),Zw={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const qt="___FONT_AWESOME___",Xl=16,Zp="fa",em="svg-inline--fa",Xn="data-fa-i2svg",Jl="data-fa-pseudo-element",e_="data-fa-pseudo-element-pending",Nu="data-prefix",Au="data-icon",Ih="fontawesome-i2svg",t_="async",n_=["HTML","HEAD","STYLE","SCRIPT"],tm=(()=>{try{return!0}catch{return!1}})();function ji(i){return new Proxy(i,{get(n,o){return o in n?n[o]:n[Ve]}})}const nm=A({},Qp);nm[Ve]=A(A(A(A({},{"fa-duotone":"duotone"}),Qp[Ve]),Eh.kit),Eh["kit-duotone"]);const r_=ji(nm),Zl=A({},jw);Zl[Ve]=A(A(A(A({},{duotone:"fad"}),Zl[Ve]),kh.kit),kh["kit-duotone"]);const Ch=ji(Zl),eu=A({},Ql);eu[Ve]=A(A({},eu[Ve]),Hw.kit);const Ou=ji(eu),tu=A({},Kw);tu[Ve]=A(A({},tu[Ve]),Bw.kit);ji(tu);const i_=Aw,rm="fa-layers-text",o_=Ow,s_=A({},Lw);ji(s_);const a_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bl=bw,l_=[...Uw,...Jw],Ii=Tn.FontAwesomeConfig||{};function u_(i){var n=ve.querySelector("script["+i+"]");if(n)return n.getAttribute(i)}function c_(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}ve&&typeof ve.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[o,a]=n;const u=c_(u_(o));u!=null&&(Ii[a]=u)});const im={styleDefault:"solid",familyDefault:Ve,cssPrefix:Zp,replacementClass:em,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ii.familyPrefix&&(Ii.cssPrefix=Ii.familyPrefix);const Dr=A(A({},im),Ii);Dr.autoReplaceSvg||(Dr.observeMutations=!1);const B={};Object.keys(im).forEach(i=>{Object.defineProperty(B,i,{enumerable:!0,set:function(n){Dr[i]=n,Ci.forEach(o=>o(B))},get:function(){return Dr[i]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(i){Dr.cssPrefix=i,Ci.forEach(n=>n(B))},get:function(){return Dr.cssPrefix}});Tn.FontAwesomeConfig=B;const Ci=[];function f_(i){return Ci.push(i),()=>{Ci.splice(Ci.indexOf(i),1)}}const _n=Xl,bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function d_(i){if(!i||!Jt)return;const n=ve.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=i;const o=ve.head.childNodes;let a=null;for(let u=o.length-1;u>-1;u--){const f=o[u],h=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(a=f)}return ve.head.insertBefore(n,a),i}const h_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ni(){let i=12,n="";for(;i-- >0;)n+=h_[Math.random()*62|0];return n}function Lr(i){const n=[];for(let o=(i||[]).length>>>0;o--;)n[o]=i[o];return n}function bu(i){return i.classList?Lr(i.classList):(i.getAttribute("class")||"").split(" ").filter(n=>n)}function om(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p_(i){return Object.keys(i||{}).reduce((n,o)=>n+"".concat(o,'="').concat(om(i[o]),'" '),"").trim()}function ks(i){return Object.keys(i||{}).reduce((n,o)=>n+"".concat(o,": ").concat(i[o].trim(),";"),"")}function Ru(i){return i.size!==bt.size||i.x!==bt.x||i.y!==bt.y||i.rotate!==bt.rotate||i.flipX||i.flipY}function m_(i){let{transform:n,containerWidth:o,iconWidth:a}=i;const u={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(n.x*32,", ").concat(n.y*32,") "),h="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),p="rotate(".concat(n.rotate," 0 0)"),g={transform:"".concat(f," ").concat(h," ").concat(p)},E={transform:"translate(".concat(a/2*-1," -256)")};return{outer:u,inner:g,path:E}}function g_(i){let{transform:n,width:o=Xl,height:a=Xl,startCentered:u=!1}=i,f="";return u&&Yp?f+="translate(".concat(n.x/_n-o/2,"em, ").concat(n.y/_n-a/2,"em) "):u?f+="translate(calc(-50% + ".concat(n.x/_n,"em), calc(-50% + ").concat(n.y/_n,"em)) "):f+="translate(".concat(n.x/_n,"em, ").concat(n.y/_n,"em) "),f+="scale(".concat(n.size/_n*(n.flipX?-1:1),", ").concat(n.size/_n*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var v_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function sm(){const i=Zp,n=em,o=B.cssPrefix,a=B.replacementClass;let u=v_;if(o!==i||a!==n){const f=new RegExp("\\.".concat(i,"\\-"),"g"),h=new RegExp("\\--".concat(i,"\\-"),"g"),p=new RegExp("\\.".concat(n),"g");u=u.replace(f,".".concat(o,"-")).replace(h,"--".concat(o,"-")).replace(p,".".concat(a))}return u}let xh=!1;function Rl(){B.autoAddCss&&!xh&&(d_(sm()),xh=!0)}var y_={mixout(){return{dom:{css:sm,insertCss:Rl}}},hooks(){return{beforeDOMElementCreation(){Rl()},beforeI2svg(){Rl()}}}};const Xt=Tn||{};Xt[qt]||(Xt[qt]={});Xt[qt].styles||(Xt[qt].styles={});Xt[qt].hooks||(Xt[qt].hooks={});Xt[qt].shims||(Xt[qt].shims=[]);var Rt=Xt[qt];const am=[],lm=function(){ve.removeEventListener("DOMContentLoaded",lm),ms=1,am.map(i=>i())};let ms=!1;Jt&&(ms=(ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ve.readyState),ms||ve.addEventListener("DOMContentLoaded",lm));function w_(i){Jt&&(ms?setTimeout(i,0):am.push(i))}function zi(i){const{tag:n,attributes:o={},children:a=[]}=i;return typeof i=="string"?om(i):"<".concat(n," ").concat(p_(o),">").concat(a.map(zi).join(""),"</").concat(n,">")}function Th(i,n,o){if(i&&i[n]&&i[n][o])return{prefix:n,iconName:o,icon:i[n][o]}}var Dl=function(n,o,a,u){var f=Object.keys(n),h=f.length,p=o,g,E,I;for(a===void 0?(g=1,I=n[f[0]]):(g=0,I=a);g<h;g++)E=f[g],I=p(I,n[E],E,n);return I};function __(i){const n=[];let o=0;const a=i.length;for(;o<a;){const u=i.charCodeAt(o++);if(u>=55296&&u<=56319&&o<a){const f=i.charCodeAt(o++);(f&64512)==56320?n.push(((u&1023)<<10)+(f&1023)+65536):(n.push(u),o--)}else n.push(u)}return n}function nu(i){const n=__(i);return n.length===1?n[0].toString(16):null}function S_(i,n){const o=i.length;let a=i.charCodeAt(n),u;return a>=55296&&a<=56319&&o>n+1&&(u=i.charCodeAt(n+1),u>=56320&&u<=57343)?(a-55296)*1024+u-56320+65536:a}function Ph(i){return Object.keys(i).reduce((n,o)=>{const a=i[o];return!!a.icon?n[a.iconName]=a.icon:n[o]=a,n},{})}function ru(i,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=o,u=Ph(n);typeof Rt.hooks.addPack=="function"&&!a?Rt.hooks.addPack(i,Ph(n)):Rt.styles[i]=A(A({},Rt.styles[i]||{}),u),i==="fas"&&ru("fa",n)}const{styles:Ai,shims:E_}=Rt,um=Object.keys(Ou),k_=um.reduce((i,n)=>(i[n]=Object.keys(Ou[n]),i),{});let Du=null,cm={},fm={},dm={},hm={},pm={};function I_(i){return~l_.indexOf(i)}function C_(i,n){const o=n.split("-"),a=o[0],u=o.slice(1).join("-");return a===i&&u!==""&&!I_(u)?u:null}const mm=()=>{const i=a=>Dl(Ai,(u,f,h)=>(u[h]=Dl(f,a,{}),u),{});cm=i((a,u,f)=>(u[3]&&(a[u[3]]=f),u[2]&&u[2].filter(p=>typeof p=="number").forEach(p=>{a[p.toString(16)]=f}),a)),fm=i((a,u,f)=>(a[f]=f,u[2]&&u[2].filter(p=>typeof p=="string").forEach(p=>{a[p]=f}),a)),pm=i((a,u,f)=>{const h=u[2];return a[f]=f,h.forEach(p=>{a[p]=f}),a});const n="far"in Ai||B.autoFetchSvg,o=Dl(E_,(a,u)=>{const f=u[0];let h=u[1];const p=u[2];return h==="far"&&!n&&(h="fas"),typeof f=="string"&&(a.names[f]={prefix:h,iconName:p}),typeof f=="number"&&(a.unicodes[f.toString(16)]={prefix:h,iconName:p}),a},{names:{},unicodes:{}});dm=o.names,hm=o.unicodes,Du=Is(B.styleDefault,{family:B.familyDefault})};f_(i=>{Du=Is(i.styleDefault,{family:B.familyDefault})});mm();function Lu(i,n){return(cm[i]||{})[n]}function x_(i,n){return(fm[i]||{})[n]}function Yn(i,n){return(pm[i]||{})[n]}function gm(i){return dm[i]||{prefix:null,iconName:null}}function T_(i){const n=hm[i],o=Lu("fas",i);return n||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function Pn(){return Du}const vm=()=>({prefix:null,iconName:null,rest:[]});function P_(i){let n=Ve;const o=um.reduce((a,u)=>(a[u]="".concat(B.cssPrefix,"-").concat(u),a),{});return Xp.forEach(a=>{(i.includes(o[a])||i.some(u=>k_[a].includes(u)))&&(n=a)}),n}function Is(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:o=Ve}=n,a=r_[o][i];if(o===Es&&!i)return"fad";const u=Ch[o][i]||Ch[o][a],f=i in Rt.styles?i:null;return u||f||null}function N_(i){let n=[],o=null;return i.forEach(a=>{const u=C_(B.cssPrefix,a);u?o=u:a&&n.push(a)}),{iconName:o,rest:n}}function Nh(i){return i.sort().filter((n,o,a)=>a.indexOf(n)===o)}function Cs(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:o=!1}=n;let a=null;const u=ql.concat(Ww),f=Nh(i.filter(b=>u.includes(b))),h=Nh(i.filter(b=>!ql.includes(b))),p=f.filter(b=>(a=b,!qp.includes(b))),[g=null]=p,E=P_(f),I=A(A({},N_(h)),{},{prefix:Is(g,{family:E})});return A(A(A({},I),R_({values:i,family:E,styles:Ai,config:B,canonical:I,givenPrefix:a})),A_(o,a,I))}function A_(i,n,o){let{prefix:a,iconName:u}=o;if(i||!a||!u)return{prefix:a,iconName:u};const f=n==="fa"?gm(u):{},h=Yn(a,u);return u=f.iconName||h||u,a=f.prefix||a,a==="far"&&!Ai.far&&Ai.fas&&!B.autoFetchSvg&&(a="fas"),{prefix:a,iconName:u}}const O_=Xp.filter(i=>i!==Ve||i!==Es),b_=Object.keys(Ql).filter(i=>i!==Ve).map(i=>Object.keys(Ql[i])).flat();function R_(i){const{values:n,family:o,canonical:a,givenPrefix:u="",styles:f={},config:h={}}=i,p=o===Es,g=n.includes("fa-duotone")||n.includes("fad"),E=h.familyDefault==="duotone",I=a.prefix==="fad"||a.prefix==="fa-duotone";if(!p&&(g||E||I)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&O_.includes(o)&&(Object.keys(f).find(R=>b_.includes(R))||h.autoFetchSvg)){const R=Fw.get(o).defaultShortPrefixId;a.prefix=R,a.iconName=Yn(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||u==="fa")&&(a.prefix=Pn()||"fas"),a}class D_{constructor(){this.definitions={}}add(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];const u=o.reduce(this._pullDefinitions,{});Object.keys(u).forEach(f=>{this.definitions[f]=A(A({},this.definitions[f]||{}),u[f]),ru(f,u[f]);const h=Ou[Ve][f];h&&ru(h,u[f]),mm()})}reset(){this.definitions={}}_pullDefinitions(n,o){const a=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(a).map(u=>{const{prefix:f,iconName:h,icon:p}=a[u],g=p[2];n[f]||(n[f]={}),g.length>0&&g.forEach(E=>{typeof E=="string"&&(n[f][E]=p)}),n[f][h]=p}),n}}let Ah=[],xr={};const br={},L_=Object.keys(br);function M_(i,n){let{mixoutsTo:o}=n;return Ah=i,xr={},Object.keys(br).forEach(a=>{L_.indexOf(a)===-1&&delete br[a]}),Ah.forEach(a=>{const u=a.mixout?a.mixout():{};if(Object.keys(u).forEach(f=>{typeof u[f]=="function"&&(o[f]=u[f]),typeof u[f]=="object"&&Object.keys(u[f]).forEach(h=>{o[f]||(o[f]={}),o[f][h]=u[f][h]})}),a.hooks){const f=a.hooks();Object.keys(f).forEach(h=>{xr[h]||(xr[h]=[]),xr[h].push(f[h])})}a.provides&&a.provides(br)}),o}function iu(i,n){for(var o=arguments.length,a=new Array(o>2?o-2:0),u=2;u<o;u++)a[u-2]=arguments[u];return(xr[i]||[]).forEach(h=>{n=h.apply(null,[n,...a])}),n}function Jn(i){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];(xr[i]||[]).forEach(f=>{f.apply(null,o)})}function Nn(){const i=arguments[0],n=Array.prototype.slice.call(arguments,1);return br[i]?br[i].apply(null,n):void 0}function ou(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:n}=i;const o=i.prefix||Pn();if(n)return n=Yn(o,n)||n,Th(ym.definitions,o,n)||Th(Rt.styles,o,n)}const ym=new D_,F_=()=>{B.autoReplaceSvg=!1,B.observeMutations=!1,Jn("noAuto")},j_={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jt?(Jn("beforeI2svg",i),Nn("pseudoElements2svg",i),Nn("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n}=i;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,w_(()=>{U_({autoReplaceSvgRoot:n}),Jn("watch",i)})}},z_={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Yn(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const n=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],o=Is(i[0]);return{prefix:o,iconName:Yn(o,n)||n}}if(typeof i=="string"&&(i.indexOf("".concat(B.cssPrefix,"-"))>-1||i.match(i_))){const n=Cs(i.split(" "),{skipLookups:!0});return{prefix:n.prefix||Pn(),iconName:Yn(n.prefix,n.iconName)||n.iconName}}if(typeof i=="string"){const n=Pn();return{prefix:n,iconName:Yn(n,i)||i}}}},ot={noAuto:F_,config:B,dom:j_,parse:z_,library:ym,findIconDefinition:ou,toHtml:zi},U_=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n=ve}=i;(Object.keys(Rt.styles).length>0||B.autoFetchSvg)&&Jt&&B.autoReplaceSvg&&ot.dom.i2svg({node:n})};function xs(i,n){return Object.defineProperty(i,"abstract",{get:n}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(o=>zi(o))}}),Object.defineProperty(i,"node",{get:function(){if(!Jt)return;const o=ve.createElement("div");return o.innerHTML=i.html,o.children}}),i}function B_(i){let{children:n,main:o,mask:a,attributes:u,styles:f,transform:h}=i;if(Ru(h)&&o.found&&!a.found){const{width:p,height:g}=o,E={x:p/g/2,y:.5};u.style=ks(A(A({},f),{},{"transform-origin":"".concat(E.x+h.x/16,"em ").concat(E.y+h.y/16,"em")}))}return[{tag:"svg",attributes:u,children:n}]}function V_(i){let{prefix:n,iconName:o,children:a,attributes:u,symbol:f}=i;const h=f===!0?"".concat(n,"-").concat(B.cssPrefix,"-").concat(o):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},u),{},{id:h}),children:a}]}]}function Mu(i){const{icons:{main:n,mask:o},prefix:a,iconName:u,transform:f,symbol:h,title:p,maskId:g,titleId:E,extra:I,watchable:b=!1}=i,{width:R,height:V}=o.found?o:n,X=Vw.includes(a),q=[B.replacementClass,u?"".concat(B.cssPrefix,"-").concat(u):""].filter(de=>I.classes.indexOf(de)===-1).filter(de=>de!==""||!!de).concat(I.classes).join(" ");let H={children:[],attributes:A(A({},I.attributes),{},{"data-prefix":a,"data-icon":u,class:q,role:I.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(V)})};const Q=X&&!~I.classes.indexOf("fa-fw")?{width:"".concat(R/V*16*.0625,"em")}:{};b&&(H.attributes[Xn]=""),p&&(H.children.push({tag:"title",attributes:{id:H.attributes["aria-labelledby"]||"title-".concat(E||Ni())},children:[p]}),delete H.attributes.title);const ee=A(A({},H),{},{prefix:a,iconName:u,main:n,mask:o,maskId:g,transform:f,symbol:h,styles:A(A({},Q),I.styles)}),{children:ae,attributes:le}=o.found&&n.found?Nn("generateAbstractMask",ee)||{children:[],attributes:{}}:Nn("generateAbstractIcon",ee)||{children:[],attributes:{}};return ee.children=ae,ee.attributes=le,h?V_(ee):B_(ee)}function Oh(i){const{content:n,width:o,height:a,transform:u,title:f,extra:h,watchable:p=!1}=i,g=A(A(A({},h.attributes),f?{title:f}:{}),{},{class:h.classes.join(" ")});p&&(g[Xn]="");const E=A({},h.styles);Ru(u)&&(E.transform=g_({transform:u,startCentered:!0,width:o,height:a}),E["-webkit-transform"]=E.transform);const I=ks(E);I.length>0&&(g.style=I);const b=[];return b.push({tag:"span",attributes:g,children:[n]}),f&&b.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),b}function H_(i){const{content:n,title:o,extra:a}=i,u=A(A(A({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")}),f=ks(a.styles);f.length>0&&(u.style=f);const h=[];return h.push({tag:"span",attributes:u,children:[n]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}const{styles:Ll}=Rt;function su(i){const n=i[0],o=i[1],[a]=i.slice(4);let u=null;return Array.isArray(a)?u={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(bl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(bl.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(bl.PRIMARY),fill:"currentColor",d:a[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:o,icon:u}}const $_={found:!1,width:512,height:512};function W_(i,n){!tm&&!B.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(n,'" is missing.'))}function au(i,n){let o=n;return n==="fa"&&B.styleDefault!==null&&(n=Pn()),new Promise((a,u)=>{if(o==="fa"){const f=gm(i)||{};i=f.iconName||i,n=f.prefix||n}if(i&&n&&Ll[n]&&Ll[n][i]){const f=Ll[n][i];return a(su(f))}W_(i,n),a(A(A({},$_),{},{icon:B.showMissingIcons&&i?Nn("missingIconAbstract")||{}:{}}))})}const bh=()=>{},lu=B.measurePerformance&&Zo&&Zo.mark&&Zo.measure?Zo:{mark:bh,measure:bh},Ei='FA "6.7.1"',G_=i=>(lu.mark("".concat(Ei," ").concat(i," begins")),()=>wm(i)),wm=i=>{lu.mark("".concat(Ei," ").concat(i," ends")),lu.measure("".concat(Ei," ").concat(i),"".concat(Ei," ").concat(i," begins"),"".concat(Ei," ").concat(i," ends"))};var Fu={begin:G_,end:wm};const os=()=>{};function Rh(i){return typeof(i.getAttribute?i.getAttribute(Xn):null)=="string"}function K_(i){const n=i.getAttribute?i.getAttribute(Nu):null,o=i.getAttribute?i.getAttribute(Au):null;return n&&o}function Y_(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(B.replacementClass)}function Q_(){return B.autoReplaceSvg===!0?ss.replace:ss[B.autoReplaceSvg]||ss.replace}function q_(i){return ve.createElementNS("http://www.w3.org/2000/svg",i)}function X_(i){return ve.createElement(i)}function _m(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:o=i.tag==="svg"?q_:X_}=n;if(typeof i=="string")return ve.createTextNode(i);const a=o(i.tag);return Object.keys(i.attributes||[]).forEach(function(f){a.setAttribute(f,i.attributes[f])}),(i.children||[]).forEach(function(f){a.appendChild(_m(f,{ceFn:o}))}),a}function J_(i){let n=" ".concat(i.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}const ss={replace:function(i){const n=i[0];if(n.parentNode)if(i[1].forEach(o=>{n.parentNode.insertBefore(_m(o),n)}),n.getAttribute(Xn)===null&&B.keepOriginalSource){let o=ve.createComment(J_(n));n.parentNode.replaceChild(o,n)}else n.remove()},nest:function(i){const n=i[0],o=i[1];if(~bu(n).indexOf(B.replacementClass))return ss.replace(i);const a=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){const f=o[0].attributes.class.split(" ").reduce((h,p)=>(p===B.replacementClass||p.match(a)?h.toSvg.push(p):h.toNode.push(p),h),{toNode:[],toSvg:[]});o[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",f.toNode.join(" "))}const u=o.map(f=>zi(f)).join(`
`);n.setAttribute(Xn,""),n.innerHTML=u}};function Dh(i){i()}function Sm(i,n){const o=typeof n=="function"?n:os;if(i.length===0)o();else{let a=Dh;B.mutateApproach===t_&&(a=Tn.requestAnimationFrame||Dh),a(()=>{const u=Q_(),f=Fu.begin("mutate");i.map(u),f(),o()})}}let ju=!1;function Em(){ju=!0}function uu(){ju=!1}let gs=null;function Lh(i){if(!Sh||!B.observeMutations)return;const{treeCallback:n=os,nodeCallback:o=os,pseudoElementsCallback:a=os,observeMutationsRoot:u=ve}=i;gs=new Sh(f=>{if(ju)return;const h=Pn();Lr(f).forEach(p=>{if(p.type==="childList"&&p.addedNodes.length>0&&!Rh(p.addedNodes[0])&&(B.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&B.searchPseudoElements&&a(p.target.parentNode),p.type==="attributes"&&Rh(p.target)&&~a_.indexOf(p.attributeName))if(p.attributeName==="class"&&K_(p.target)){const{prefix:g,iconName:E}=Cs(bu(p.target));p.target.setAttribute(Nu,g||h),E&&p.target.setAttribute(Au,E)}else Y_(p.target)&&o(p.target)})}),Jt&&gs.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Z_(){gs&&gs.disconnect()}function eS(i){const n=i.getAttribute("style");let o=[];return n&&(o=n.split(";").reduce((a,u)=>{const f=u.split(":"),h=f[0],p=f.slice(1);return h&&p.length>0&&(a[h]=p.join(":").trim()),a},{})),o}function tS(i){const n=i.getAttribute("data-prefix"),o=i.getAttribute("data-icon"),a=i.innerText!==void 0?i.innerText.trim():"";let u=Cs(bu(i));return u.prefix||(u.prefix=Pn()),n&&o&&(u.prefix=n,u.iconName=o),u.iconName&&u.prefix||(u.prefix&&a.length>0&&(u.iconName=x_(u.prefix,i.innerText)||Lu(u.prefix,nu(i.innerText))),!u.iconName&&B.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=i.firstChild.data)),u}function nS(i){const n=Lr(i.attributes).reduce((u,f)=>(u.name!=="class"&&u.name!=="style"&&(u[f.name]=f.value),u),{}),o=i.getAttribute("title"),a=i.getAttribute("data-fa-title-id");return B.autoA11y&&(o?n["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(a||Ni()):(n["aria-hidden"]="true",n.focusable="false")),n}function rS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mh(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:o,prefix:a,rest:u}=tS(i),f=nS(i),h=iu("parseNodeAttributes",{},i);let p=n.styleParser?eS(i):[];return A({iconName:o,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:a,transform:bt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:p,attributes:f}},h)}const{styles:iS}=Rt;function km(i){const n=B.autoReplaceSvg==="nest"?Mh(i,{styleParser:!1}):Mh(i);return~n.extra.classes.indexOf(rm)?Nn("generateLayersText",i,n):Nn("generateSvgReplacementMutation",i,n)}function oS(){return[...zw,...ql]}function Fh(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jt)return Promise.resolve();const o=ve.documentElement.classList,a=I=>o.add("".concat(Ih,"-").concat(I)),u=I=>o.remove("".concat(Ih,"-").concat(I)),f=B.autoFetchSvg?oS():qp.concat(Object.keys(iS));f.includes("fa")||f.push("fa");const h=[".".concat(rm,":not([").concat(Xn,"])")].concat(f.map(I=>".".concat(I,":not([").concat(Xn,"])"))).join(", ");if(h.length===0)return Promise.resolve();let p=[];try{p=Lr(i.querySelectorAll(h))}catch{}if(p.length>0)a("pending"),u("complete");else return Promise.resolve();const g=Fu.begin("onTree"),E=p.reduce((I,b)=>{try{const R=km(b);R&&I.push(R)}catch(R){tm||R.name==="MissingIcon"&&console.error(R)}return I},[]);return new Promise((I,b)=>{Promise.all(E).then(R=>{Sm(R,()=>{a("active"),a("complete"),u("pending"),typeof n=="function"&&n(),g(),I()})}).catch(R=>{g(),b(R)})})}function sS(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;km(i).then(o=>{o&&Sm([o],n)})}function aS(i){return function(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(n||{}).icon?n:ou(n||{});let{mask:u}=o;return u&&(u=(u||{}).icon?u:ou(u||{})),i(a,A(A({},o),{},{mask:u}))}}const lS=function(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:o=bt,symbol:a=!1,mask:u=null,maskId:f=null,title:h=null,titleId:p=null,classes:g=[],attributes:E={},styles:I={}}=n;if(!i)return;const{prefix:b,iconName:R,icon:V}=i;return xs(A({type:"icon"},i),()=>(Jn("beforeDOMElementCreation",{iconDefinition:i,params:n}),B.autoA11y&&(h?E["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(p||Ni()):(E["aria-hidden"]="true",E.focusable="false")),Mu({icons:{main:su(V),mask:u?su(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:R,transform:A(A({},bt),o),symbol:a,title:h,maskId:f,titleId:p,extra:{attributes:E,styles:I,classes:g}})))};var uS={mixout(){return{icon:aS(lS)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=Fh,i.nodeCallback=sS,i}}},provides(i){i.i2svg=function(n){const{node:o=ve,callback:a=()=>{}}=n;return Fh(o,a)},i.generateSvgReplacementMutation=function(n,o){const{iconName:a,title:u,titleId:f,prefix:h,transform:p,symbol:g,mask:E,maskId:I,extra:b}=o;return new Promise((R,V)=>{Promise.all([au(a,h),E.iconName?au(E.iconName,E.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(X=>{let[q,H]=X;R([n,Mu({icons:{main:q,mask:H},prefix:h,iconName:a,transform:p,symbol:g,maskId:I,title:u,titleId:f,extra:b,watchable:!0})])}).catch(V)})},i.generateAbstractIcon=function(n){let{children:o,attributes:a,main:u,transform:f,styles:h}=n;const p=ks(h);p.length>0&&(a.style=p);let g;return Ru(f)&&(g=Nn("generateAbstractTransformGrouping",{main:u,transform:f,containerWidth:u.width,iconWidth:u.width})),o.push(g||u.icon),{children:o,attributes:a}}}},cS={mixout(){return{layer(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:o=[]}=n;return xs({type:"layer"},()=>{Jn("beforeDOMElementCreation",{assembler:i,params:n});let a=[];return i(u=>{Array.isArray(u)?u.map(f=>{a=a.concat(f.abstract)}):a=a.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers"),...o].join(" ")},children:a}]})}}}},fS={mixout(){return{counter(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:o=null,classes:a=[],attributes:u={},styles:f={}}=n;return xs({type:"counter",content:i},()=>(Jn("beforeDOMElementCreation",{content:i,params:n}),H_({content:i.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter"),...a]}})))}}}},dS={mixout(){return{text(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:o=bt,title:a=null,classes:u=[],attributes:f={},styles:h={}}=n;return xs({type:"text",content:i},()=>(Jn("beforeDOMElementCreation",{content:i,params:n}),Oh({content:i,transform:A(A({},bt),o),title:a,extra:{attributes:f,styles:h,classes:["".concat(B.cssPrefix,"-layers-text"),...u]}})))}}},provides(i){i.generateLayersText=function(n,o){const{title:a,transform:u,extra:f}=o;let h=null,p=null;if(Yp){const g=parseInt(getComputedStyle(n).fontSize,10),E=n.getBoundingClientRect();h=E.width/g,p=E.height/g}return B.autoA11y&&!a&&(f.attributes["aria-hidden"]="true"),Promise.resolve([n,Oh({content:n.innerHTML,width:h,height:p,transform:u,title:a,extra:f,watchable:!0})])}}};const hS=new RegExp('"',"ug"),jh=[1105920,1112319],zh=A(A(A(A({},{FontAwesome:{normal:"fas",400:"fas"}}),Mw),Zw),Gw),cu=Object.keys(zh).reduce((i,n)=>(i[n.toLowerCase()]=zh[n],i),{}),pS=Object.keys(cu).reduce((i,n)=>{const o=cu[n];return i[n]=o[900]||[...Object.entries(o)][0][1],i},{});function mS(i){const n=i.replace(hS,""),o=S_(n,0),a=o>=jh[0]&&o<=jh[1],u=n.length===2?n[0]===n[1]:!1;return{value:nu(u?n[0]:n),isSecondary:a||u}}function gS(i,n){const o=i.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),u=isNaN(a)?"normal":a;return(cu[o]||{})[u]||pS[o]}function Uh(i,n){const o="".concat(e_).concat(n.replace(":","-"));return new Promise((a,u)=>{if(i.getAttribute(o)!==null)return a();const h=Lr(i.children).filter(R=>R.getAttribute(Jl)===n)[0],p=Tn.getComputedStyle(i,n),g=p.getPropertyValue("font-family"),E=g.match(o_),I=p.getPropertyValue("font-weight"),b=p.getPropertyValue("content");if(h&&!E)return i.removeChild(h),a();if(E&&b!=="none"&&b!==""){const R=p.getPropertyValue("content");let V=gS(g,I);const{value:X,isSecondary:q}=mS(R),H=E[0].startsWith("FontAwesome");let Q=Lu(V,X),ee=Q;if(H){const ae=T_(X);ae.iconName&&ae.prefix&&(Q=ae.iconName,V=ae.prefix)}if(Q&&!q&&(!h||h.getAttribute(Nu)!==V||h.getAttribute(Au)!==ee)){i.setAttribute(o,ee),h&&i.removeChild(h);const ae=rS(),{extra:le}=ae;le.attributes[Jl]=n,au(Q,V).then(de=>{const Ie=Mu(A(A({},ae),{},{icons:{main:de,mask:vm()},prefix:V,iconName:ee,extra:le,watchable:!0})),Ce=ve.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?i.insertBefore(Ce,i.firstChild):i.appendChild(Ce),Ce.outerHTML=Ie.map(Fe=>zi(Fe)).join(`
`),i.removeAttribute(o),a()}).catch(u)}else a()}else a()})}function vS(i){return Promise.all([Uh(i,"::before"),Uh(i,"::after")])}function yS(i){return i.parentNode!==document.head&&!~n_.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(Jl)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function Bh(i){if(Jt)return new Promise((n,o)=>{const a=Lr(i.querySelectorAll("*")).filter(yS).map(vS),u=Fu.begin("searchPseudoElements");Em(),Promise.all(a).then(()=>{u(),uu(),n()}).catch(()=>{u(),uu(),o()})})}var wS={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=Bh,i}}},provides(i){i.pseudoElements2svg=function(n){const{node:o=ve}=n;B.searchPseudoElements&&Bh(o)}}};let Vh=!1;var _S={mixout(){return{dom:{unwatch(){Em(),Vh=!0}}}},hooks(){return{bootstrap(){Lh(iu("mutationObserverCallbacks",{}))},noAuto(){Z_()},watch(i){const{observeMutationsRoot:n}=i;Vh?uu():Lh(iu("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}};const Hh=i=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((o,a)=>{const u=a.toLowerCase().split("-"),f=u[0];let h=u.slice(1).join("-");if(f&&h==="h")return o.flipX=!0,o;if(f&&h==="v")return o.flipY=!0,o;if(h=parseFloat(h),isNaN(h))return o;switch(f){case"grow":o.size=o.size+h;break;case"shrink":o.size=o.size-h;break;case"left":o.x=o.x-h;break;case"right":o.x=o.x+h;break;case"up":o.y=o.y-h;break;case"down":o.y=o.y+h;break;case"rotate":o.rotate=o.rotate+h;break}return o},n)};var SS={mixout(){return{parse:{transform:i=>Hh(i)}}},hooks(){return{parseNodeAttributes(i,n){const o=n.getAttribute("data-fa-transform");return o&&(i.transform=Hh(o)),i}}},provides(i){i.generateAbstractTransformGrouping=function(n){let{main:o,transform:a,containerWidth:u,iconWidth:f}=n;const h={transform:"translate(".concat(u/2," 256)")},p="translate(".concat(a.x*32,", ").concat(a.y*32,") "),g="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),E="rotate(".concat(a.rotate," 0 0)"),I={transform:"".concat(p," ").concat(g," ").concat(E)},b={transform:"translate(".concat(f/2*-1," -256)")},R={outer:h,inner:I,path:b};return{tag:"g",attributes:A({},R.outer),children:[{tag:"g",attributes:A({},R.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:A(A({},o.icon.attributes),R.path)}]}]}}}};const Ml={x:0,y:0,width:"100%",height:"100%"};function $h(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||n)&&(i.attributes.fill="black"),i}function ES(i){return i.tag==="g"?i.children:[i]}var kS={hooks(){return{parseNodeAttributes(i,n){const o=n.getAttribute("data-fa-mask"),a=o?Cs(o.split(" ").map(u=>u.trim())):vm();return a.prefix||(a.prefix=Pn()),i.mask=a,i.maskId=n.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(n){let{children:o,attributes:a,main:u,mask:f,maskId:h,transform:p}=n;const{width:g,icon:E}=u,{width:I,icon:b}=f,R=m_({transform:p,containerWidth:I,iconWidth:g}),V={tag:"rect",attributes:A(A({},Ml),{},{fill:"white"})},X=E.children?{children:E.children.map($h)}:{},q={tag:"g",attributes:A({},R.inner),children:[$h(A({tag:E.tag,attributes:A(A({},E.attributes),R.path)},X))]},H={tag:"g",attributes:A({},R.outer),children:[q]},Q="mask-".concat(h||Ni()),ee="clip-".concat(h||Ni()),ae={tag:"mask",attributes:A(A({},Ml),{},{id:Q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[V,H]},le={tag:"defs",children:[{tag:"clipPath",attributes:{id:ee},children:ES(b)},ae]};return o.push(le,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(ee,")"),mask:"url(#".concat(Q,")")},Ml)}),{children:o,attributes:a}}}},IS={provides(i){let n=!1;Tn.matchMedia&&(n=Tn.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const o=[],a={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=A(A({},u),{},{attributeName:"opacity"}),h={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:A(A({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},f),{},{values:"1;0;1;1;0;1;"})}),o.push(h),o.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},f),{},{values:"1;0;0;0;0;1;"})}]}),n||o.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},CS={hooks(){return{parseNodeAttributes(i,n){const o=n.getAttribute("data-fa-symbol"),a=o===null?!1:o===""?!0:o;return i.symbol=a,i}}}},xS=[y_,uS,cS,fS,dS,wS,_S,SS,kS,IS,CS];M_(xS,{mixoutsTo:ot});ot.noAuto;ot.config;ot.library;ot.dom;const fu=ot.parse;ot.findIconDefinition;ot.toHtml;const TS=ot.icon;ot.layer;ot.text;ot.counter;var Fl={exports:{}},jl,Wh;function PS(){if(Wh)return jl;Wh=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return jl=i,jl}var zl,Gh;function NS(){if(Gh)return zl;Gh=1;var i=PS();function n(){}function o(){}return o.resetWarningCache=n,zl=function(){function a(h,p,g,E,I,b){if(b!==i){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}a.isRequired=a;function u(){return a}var f={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:u,element:a,elementType:a,instanceOf:u,node:a,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:o,resetWarningCache:n};return f.PropTypes=f,f},zl}var Kh;function AS(){return Kh||(Kh=1,Fl.exports=NS()()),Fl.exports}var OS=AS();const ne=pu(OS);function Yh(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);n&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,a)}return o}function At(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?Yh(Object(o),!0).forEach(function(a){Tr(i,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):Yh(Object(o)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(o,a))})}return i}function vs(i){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vs(i)}function Tr(i,n,o){return n in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function bS(i,n){if(i==null)return{};var o={},a=Object.keys(i),u,f;for(f=0;f<a.length;f++)u=a[f],!(n.indexOf(u)>=0)&&(o[u]=i[u]);return o}function RS(i,n){if(i==null)return{};var o=bS(i,n),a,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);for(u=0;u<f.length;u++)a=f[u],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(o[a]=i[a])}return o}function du(i){return DS(i)||LS(i)||MS(i)||FS()}function DS(i){if(Array.isArray(i))return hu(i)}function LS(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function MS(i,n){if(i){if(typeof i=="string")return hu(i,n);var o=Object.prototype.toString.call(i).slice(8,-1);if(o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set")return Array.from(i);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return hu(i,n)}}function hu(i,n){(n==null||n>i.length)&&(n=i.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=i[o];return a}function FS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jS(i){var n,o=i.beat,a=i.fade,u=i.beatFade,f=i.bounce,h=i.shake,p=i.flash,g=i.spin,E=i.spinPulse,I=i.spinReverse,b=i.pulse,R=i.fixedWidth,V=i.inverse,X=i.border,q=i.listItem,H=i.flip,Q=i.size,ee=i.rotation,ae=i.pull,le=(n={"fa-beat":o,"fa-fade":a,"fa-beat-fade":u,"fa-bounce":f,"fa-shake":h,"fa-flash":p,"fa-spin":g,"fa-spin-reverse":I,"fa-spin-pulse":E,"fa-pulse":b,"fa-fw":R,"fa-inverse":V,"fa-border":X,"fa-li":q,"fa-flip":H===!0,"fa-flip-horizontal":H==="horizontal"||H==="both","fa-flip-vertical":H==="vertical"||H==="both"},Tr(n,"fa-".concat(Q),typeof Q<"u"&&Q!==null),Tr(n,"fa-rotate-".concat(ee),typeof ee<"u"&&ee!==null&&ee!==0),Tr(n,"fa-pull-".concat(ae),typeof ae<"u"&&ae!==null),Tr(n,"fa-swap-opacity",i.swapOpacity),n);return Object.keys(le).map(function(de){return le[de]?de:null}).filter(function(de){return de})}function zS(i){return i=i-0,i===i}function Im(i){return zS(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(n,o){return o?o.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var US=["style"];function BS(i){return i.charAt(0).toUpperCase()+i.slice(1)}function VS(i){return i.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,o){var a=o.indexOf(":"),u=Im(o.slice(0,a)),f=o.slice(a+1).trim();return u.startsWith("webkit")?n[BS(u)]=f:n[u]=f,n},{})}function Cm(i,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(g){return Cm(i,g)}),u=Object.keys(n.attributes||{}).reduce(function(g,E){var I=n.attributes[E];switch(E){case"class":g.attrs.className=I,delete n.attributes.class;break;case"style":g.attrs.style=VS(I);break;default:E.indexOf("aria-")===0||E.indexOf("data-")===0?g.attrs[E.toLowerCase()]=I:g.attrs[Im(E)]=I}return g},{attrs:{}}),f=o.style,h=f===void 0?{}:f,p=RS(o,US);return u.attrs.style=At(At({},u.attrs.style),h),i.apply(void 0,[n.tag,At(At({},u.attrs),p)].concat(du(a)))}var xm=!1;try{xm=!0}catch{}function HS(){if(!xm&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function Qh(i){if(i&&vs(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(fu.icon)return fu.icon(i);if(i===null)return null;if(i&&vs(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function Ul(i,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Tr({},i,n):{}}var qh={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ys=gu.forwardRef(function(i,n){var o=At(At({},qh),i),a=o.icon,u=o.mask,f=o.symbol,h=o.className,p=o.title,g=o.titleId,E=o.maskId,I=Qh(a),b=Ul("classes",[].concat(du(jS(o)),du((h||"").split(" ")))),R=Ul("transform",typeof o.transform=="string"?fu.transform(o.transform):o.transform),V=Ul("mask",Qh(u)),X=TS(I,At(At(At(At({},b),R),V),{},{symbol:f,title:p,titleId:g,maskId:E}));if(!X)return HS("Could not find icon",I),null;var q=X.abstract,H={ref:n};return Object.keys(o).forEach(function(Q){qh.hasOwnProperty(Q)||(H[Q]=o[Q])}),$S(q[0],H)});ys.displayName="FontAwesomeIcon";ys.propTypes={beat:ne.bool,border:ne.bool,beatFade:ne.bool,bounce:ne.bool,className:ne.string,fade:ne.bool,flash:ne.bool,mask:ne.oneOfType([ne.object,ne.array,ne.string]),maskId:ne.string,fixedWidth:ne.bool,inverse:ne.bool,flip:ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ne.oneOfType([ne.object,ne.array,ne.string]),listItem:ne.bool,pull:ne.oneOf(["right","left"]),pulse:ne.bool,rotation:ne.oneOf([0,90,180,270]),shake:ne.bool,size:ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ne.bool,spinPulse:ne.bool,spinReverse:ne.bool,symbol:ne.oneOfType([ne.bool,ne.string]),title:ne.string,titleId:ne.string,transform:ne.oneOfType([ne.string,ne.object]),swapOpacity:ne.bool};var $S=Cm.bind(null,gu.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const WS={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},GS={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const KS={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},YS=({setUserDetails:i,setCurrentPage:n})=>{const[o,a]=Ne.useState(""),[u,f]=Ne.useState(""),[h,p]=Ne.useState(""),[g,E]=Ne.useState(""),[I,b]=Ne.useState(!1),[R,V]=Ne.useState(""),X=()=>{b(!I)},q=async()=>{try{V("");const ee=(await T1(ps,Iw)).user;ee&&(i({username:ee.displayName,photoURL:ee.photoURL}),n&&n("Home"))}catch(Q){console.error("Google Sign-In Error:",Q),V("Google sign-in failed. Please try again.")}},H=async()=>{try{if(V(""),!o.trim()){V("Username is required.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)){V("Invalid email format.");return}if(h.length<8||!/[A-Z]/.test(h)||!/\d/.test(h)){V("Password must be at least 8 characters long and include at least one uppercase letter and one number.");return}if(h!==g){V("Passwords do not match.");return}(await r1(ps,u,h)).user&&(i({username:o,photoURL:null}),n&&n("Home"))}catch(Q){console.error("Sign-Up Error:",Q),V("Sign-up failed. Please try again.")}};return x.jsx("div",{className:"w-full h-[90vh] flex items-start justify-center mt-8",children:x.jsxs("div",{className:"bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/3",children:[x.jsx("h1",{className:"text-2xl font-bold text-center mb-6",children:"Sign In"}),R&&x.jsx("p",{className:"bg-red-500 text-white text-sm p-2 rounded mb-4",children:R}),x.jsxs("div",{className:"mb-4",children:[x.jsx("label",{className:"block text-gray-300 mb-2",children:"Username *"}),x.jsx("input",{type:"text",value:o,onChange:Q=>a(Q.target.value),placeholder:"Enter your username",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"})]}),x.jsxs("div",{className:"mb-4",children:[x.jsx("label",{className:"block text-gray-300 mb-2",children:"Email *"}),x.jsx("input",{type:"email",value:u,onChange:Q=>f(Q.target.value),placeholder:"Enter your email",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"})]}),x.jsxs("div",{className:"mb-4 relative",children:[x.jsx("label",{className:"block text-gray-300 mb-2",children:"Password *"}),x.jsx("input",{type:I?"text":"password",value:h,onChange:Q=>p(Q.target.value),placeholder:"Enter your password",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"}),x.jsx("span",{className:"absolute right-3 top-3 cursor-pointer text-gray-400",onClick:X,children:x.jsx(ys,{icon:I?WS:GS})})]}),x.jsxs("div",{className:"mb-4",children:[x.jsx("label",{className:"block text-gray-300 mb-2",children:"Confirm Password *"}),x.jsx("input",{type:"password",value:g,onChange:Q=>E(Q.target.value),placeholder:"Confirm your password",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"})]}),x.jsx("button",{onClick:H,className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300",children:"Submit"}),x.jsxs("button",{onClick:q,className:"w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 mt-4 flex items-center justify-center space-x-2",children:[x.jsx(ys,{icon:KS}),x.jsx("span",{children:"Sign In with Google"})]})]})})},QS=()=>x.jsx(x.Fragment,{children:x.jsx("div",{className:"p-4 text-white flex",children:x.jsxs("div",{children:[x.jsx("h1",{className:"text-2xl font-bold mb-4 text-red-400",children:"Datenschutzerklärung"}),x.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Einleitung"}),x.jsx("p",{className:"mb-4",children:"Der Schutz Ihrer persönlichen Daten ist uns besonders wichtig. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen gemäß der Datenschutz-Grundverordnung (DSGVO) und anderen relevanten Datenschutzgesetzen in Deutschland erheben, verwenden und schützen."}),x.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Datenerhebung und Nutzung"}),x.jsx("p",{className:"mb-4",children:"Wir erheben personenbezogene Daten zu Authentifizierungszwecken mithilfe von Firebase. Dazu gehören Ihre E-Mail-Adresse, Ihr Anzeigename und Ihr Profilbild, wenn Sie sich mit Google anmelden. Außerdem verwenden wir localStorage, um Ihre Sitzung aufrechtzuerhalten und eine erneute Authentifizierung beim Aktualisieren der Seite zu vermeiden."}),x.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Rechtsgrundlage"}),x.jsx("p",{className:"mb-4",children:"Wir verarbeiten Ihre Daten gemäß Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten erlaubt, die zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich sind. Durch die Anmeldung stimmen Sie dieser Verarbeitung gemäß Art. 6 Abs. 1 lit. a DSGVO zu."}),x.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Dienste von Drittanbietern"}),x.jsx("p",{className:"mb-4",children:"Diese Website verwendet Firebase, einen Dienst von Google LLC. Firebase übernimmt die Authentifizierung und kann Ihre Daten in Rechenzentren in der Europäischen Union speichern. Weitere Informationen finden Sie in der Datenschutzerklärung von Firebase."}),x.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Ihre Rechte"}),x.jsxs("div",{className:"mb-4",children:["Gemäß der DSGVO haben Sie folgende Rechte:",x.jsxs("ul",{className:"list-disc ml-6",children:[x.jsx("li",{children:"Das Recht auf Zugang zu Ihren Daten (Art. 15 DSGVO)"}),x.jsx("li",{children:"Das Recht auf Berichtigung falscher Daten (Art. 16 DSGVO)"}),x.jsx("li",{children:"Das Recht auf Löschung Ihrer Daten (Art. 17 DSGVO)"}),x.jsx("li",{children:"Das Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)"}),x.jsx("li",{children:"Das Recht auf Datenübertragbarkeit (Art. 20 DSGVO)"}),x.jsx("li",{children:"Das Recht auf Widerspruch gegen die Datenverarbeitung (Art. 21 DSGVO)"})]})]}),x.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Speicherdauer"}),x.jsx("p",{className:"mb-4",children:"Ihre Daten werden nur so lange gespeichert, wie es zur Erfüllung ihres Zwecks oder gesetzlich vorgeschrieben ist. Wenn Sie sich abmelden oder Ihr Konto löschen, werden Ihre Daten umgehend gelöscht."}),x.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Kontakt"}),x.jsxs("p",{className:"mb-4",children:["Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:",x.jsx("br",{}),x.jsx("strong",{children:"Email: "}),x.jsx("a",{href:"https://linktr.ee/ColdByDefault",rel:"noopener noreferrer",target:"_blank",className:"text-blue-200 underline",children:"LinkTree"})]})]})})}),Xh="-sd_sdf~`gdf!@#dfg$g%gh^&qwe*fdg()+sdf=[]{fg}|sad;:,.<>?",qS=({text:i,interval:n=50})=>{const[o,a]=Ne.useState(""),[u,f]=Ne.useState(!1);Ne.useEffect(()=>{f(!0)},[]),Ne.useEffect(()=>{let p;return o!==i&&(p=setInterval(()=>{o.length<i.length?a(g=>g+i[g.length]):clearInterval(p)},n)),()=>clearInterval(p)},[i,n,o]);const h=o.length<i.length?i.slice(o.length).split("").map(()=>Xh[Math.floor(Math.random()*Xh.length)]).join(""):"";return u?x.jsxs("span",{className:"glitch-effect","data-text":`${o}${h}`,children:[o,h]}):x.jsx("span",{children:" "})};function XS({onComplete:i}){const[n,o]=Ne.useState(!1);return Ne.useEffect(()=>{const a=setTimeout(()=>{o(!0),setTimeout(()=>{i()},1100)},2200);return()=>clearTimeout(a)},[i]),x.jsx("div",{className:`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center 
      transition-opacity duration-1000 ${n?"opacity-0 pointer-events-none":"opacity-100"}`,children:x.jsx("h1",{className:"text-xl  mb-8 font-bold drop-shadow-black",children:x.jsx(qS,{text:"AnotherProject",interval:120})})})}function JS(){const[i,n]=Ne.useState(!1),[o,a]=Ne.useState("Home"),[u,f]=Ne.useState(null),[h,p]=Ne.useState(!1),[g,E]=Ne.useState(!0);Ne.useEffect(()=>{const V=s1(ps,X=>{f(X?{username:X.displayName||X.email,photoURL:X.photoURL}:null)});return()=>V()},[]);const I=()=>{n(!0)},b=V=>{o!==V&&(p(!0),setTimeout(()=>{a(V),p(!1)},500))},R=()=>{switch(o){case"Home":return x.jsx("div",{className:"w-full h-full",children:"Home Page"});case"Docs":return x.jsx("div",{children:"Documentation Page"});case"Links":return x.jsx("div",{children:"Links Page"});case"SignIn":return x.jsx(YS,{setUserDetails:f,setCurrentPage:b});case"PrivacyPolicy":return x.jsx(QS,{});default:return x.jsx("div",{children:"404 - Page Not Found"})}};return x.jsxs(x.Fragment,{children:[!i&&x.jsx(XS,{onComplete:I}),i&&x.jsxs("div",{className:"flex flex-col min-h-screen",children:[g&&x.jsxs("div",{className:"bg-yellow-500 text-black p-3 text-center",children:[x.jsxs("span",{children:["This website uses Firebase for authentication and localStorage to maintain your session. Learn more in our"," ",x.jsx("button",{onClick:()=>b("PrivacyPolicy"),className:"underline text-blue-600",children:"Privacy Policy"}),"."]}),x.jsx("button",{onClick:()=>E(!1),className:"ml-3 bg-black text-white px-3 py-1 rounded",children:"Accept"})]}),x.jsx(xw,{currentPage:o,setCurrentPage:b,userDetails:u,onLogout:b}),x.jsx("div",{className:"flex-grow relative z-10",children:x.jsx("div",{className:`transform transition-all duration-500 ease-in-out ${h?"opacity-0 scale-90":"opacity-100 scale-100"}`,children:R()})})]})]})}bv.createRoot(document.getElementById("root")).render(x.jsx(gu.StrictMode,{children:x.jsx(JS,{})}));
//# sourceMappingURL=index-DFSYCGUW.js.map
