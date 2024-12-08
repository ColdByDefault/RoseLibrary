(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function pu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _l={exports:{}},Si={},Sl={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function kv(){if(Ld)return Z;Ld=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),O=Symbol.iterator;function R(w){return w===null||typeof w!="object"?null:(w=O&&w[O]||w["@@iterator"],typeof w=="function"?w:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Q={};function H(w,T,J){this.props=w,this.context=T,this.refs=Q,this.updater=J||b}H.prototype.isReactComponent={},H.prototype.setState=function(w,T){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,T,"setState")},H.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function q(){}q.prototype=H.prototype;function ne(w,T,J){this.props=w,this.context=T,this.refs=Q,this.updater=J||b}var ae=ne.prototype=new q;ae.constructor=ne,X(ae,H.prototype),ae.isPureReactComponent=!0;var le=Array.isArray,de=Object.prototype.hasOwnProperty,Ie={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function Me(w,T,J){var ee,ie={},oe=null,he=null;if(T!=null)for(ee in T.ref!==void 0&&(he=T.ref),T.key!==void 0&&(oe=""+T.key),T)de.call(T,ee)&&!Ce.hasOwnProperty(ee)&&(ie[ee]=T[ee]);var ue=arguments.length-2;if(ue===1)ie.children=J;else if(1<ue){for(var ye=Array(ue),Ze=0;Ze<ue;Ze++)ye[Ze]=arguments[Ze+2];ie.children=ye}if(w&&w.defaultProps)for(ee in ue=w.defaultProps,ue)ie[ee]===void 0&&(ie[ee]=ue[ee]);return{$$typeof:i,type:w,key:oe,ref:he,props:ie,_owner:Ie.current}}function ot(w,T){return{$$typeof:i,type:w.type,key:T,ref:w.ref,props:w.props,_owner:w._owner}}function dt(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function Rn(w){var T={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return T[J]})}var kt=/\/+/g;function Je(w,T){return typeof w=="object"&&w!==null&&w.key!=null?Rn(""+w.key):T.toString(36)}function ht(w,T,J,ee,ie){var oe=typeof w;(oe==="undefined"||oe==="boolean")&&(w=null);var he=!1;if(w===null)he=!0;else switch(oe){case"string":case"number":he=!0;break;case"object":switch(w.$$typeof){case i:case n:he=!0}}if(he)return he=w,ie=ie(he),w=ee===""?"."+Je(he,0):ee,le(ie)?(J="",w!=null&&(J=w.replace(kt,"$&/")+"/"),ht(ie,T,J,"",function(Ze){return Ze})):ie!=null&&(dt(ie)&&(ie=ot(ie,J+(!ie.key||he&&he.key===ie.key?"":(""+ie.key).replace(kt,"$&/")+"/")+w)),T.push(ie)),1;if(he=0,ee=ee===""?".":ee+":",le(w))for(var ue=0;ue<w.length;ue++){oe=w[ue];var ye=ee+Je(oe,ue);he+=ht(oe,T,J,ye,ie)}else if(ye=R(w),typeof ye=="function")for(w=ye.call(w),ue=0;!(oe=w.next()).done;)oe=oe.value,ye=ee+Je(oe,ue++),he+=ht(oe,T,J,ye,ie);else if(oe==="object")throw T=String(w),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return he}function It(w,T,J){if(w==null)return w;var ee=[],ie=0;return ht(w,ee,"","",function(oe){return T.call(J,oe,ie++)}),ee}function We(w){if(w._status===-1){var T=w._result;T=T(),T.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=T)}if(w._status===1)return w._result.default;throw w._result}var Ee={current:null},L={transition:null},K={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:L,ReactCurrentOwner:Ie};function F(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:It,forEach:function(w,T,J){It(w,function(){T.apply(this,arguments)},J)},count:function(w){var T=0;return It(w,function(){T++}),T},toArray:function(w){return It(w,function(T){return T})||[]},only:function(w){if(!dt(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Z.Component=H,Z.Fragment=o,Z.Profiler=u,Z.PureComponent=ne,Z.StrictMode=a,Z.Suspense=g,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Z.act=F,Z.cloneElement=function(w,T,J){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ee=X({},w.props),ie=w.key,oe=w.ref,he=w._owner;if(T!=null){if(T.ref!==void 0&&(oe=T.ref,he=Ie.current),T.key!==void 0&&(ie=""+T.key),w.type&&w.type.defaultProps)var ue=w.type.defaultProps;for(ye in T)de.call(T,ye)&&!Ce.hasOwnProperty(ye)&&(ee[ye]=T[ye]===void 0&&ue!==void 0?ue[ye]:T[ye])}var ye=arguments.length-2;if(ye===1)ee.children=J;else if(1<ye){ue=Array(ye);for(var Ze=0;Ze<ye;Ze++)ue[Ze]=arguments[Ze+2];ee.children=ue}return{$$typeof:i,type:w.type,key:ie,ref:oe,props:ee,_owner:he}},Z.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:f,_context:w},w.Consumer=w},Z.createElement=Me,Z.createFactory=function(w){var T=Me.bind(null,w);return T.type=w,T},Z.createRef=function(){return{current:null}},Z.forwardRef=function(w){return{$$typeof:m,render:w}},Z.isValidElement=dt,Z.lazy=function(w){return{$$typeof:I,_payload:{_status:-1,_result:w},_init:We}},Z.memo=function(w,T){return{$$typeof:E,type:w,compare:T===void 0?null:T}},Z.startTransition=function(w){var T=L.transition;L.transition={};try{w()}finally{L.transition=T}},Z.unstable_act=F,Z.useCallback=function(w,T){return Ee.current.useCallback(w,T)},Z.useContext=function(w){return Ee.current.useContext(w)},Z.useDebugValue=function(){},Z.useDeferredValue=function(w){return Ee.current.useDeferredValue(w)},Z.useEffect=function(w,T){return Ee.current.useEffect(w,T)},Z.useId=function(){return Ee.current.useId()},Z.useImperativeHandle=function(w,T,J){return Ee.current.useImperativeHandle(w,T,J)},Z.useInsertionEffect=function(w,T){return Ee.current.useInsertionEffect(w,T)},Z.useLayoutEffect=function(w,T){return Ee.current.useLayoutEffect(w,T)},Z.useMemo=function(w,T){return Ee.current.useMemo(w,T)},Z.useReducer=function(w,T,J){return Ee.current.useReducer(w,T,J)},Z.useRef=function(w){return Ee.current.useRef(w)},Z.useState=function(w){return Ee.current.useState(w)},Z.useSyncExternalStore=function(w,T,J){return Ee.current.useSyncExternalStore(w,T,J)},Z.useTransition=function(){return Ee.current.useTransition()},Z.version="18.3.1",Z}var Dd;function mu(){return Dd||(Dd=1,Sl.exports=kv()),Sl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Iv(){if(Md)return Si;Md=1;var i=mu(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,E){var I,O={},R=null,b=null;E!==void 0&&(R=""+E),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(b=g.ref);for(I in g)a.call(g,I)&&!f.hasOwnProperty(I)&&(O[I]=g[I]);if(m&&m.defaultProps)for(I in g=m.defaultProps,g)O[I]===void 0&&(O[I]=g[I]);return{$$typeof:n,type:m,key:R,ref:b,props:O,_owner:u.current}}return Si.Fragment=o,Si.jsx=h,Si.jsxs=h,Si}var Fd;function Cv(){return Fd||(Fd=1,_l.exports=Iv()),_l.exports}var W=Cv(),St=mu();const gu=pu(St);var Jo={},El={exports:{}},Xe={},kl={exports:{}},Il={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Tv(){return Ud||(Ud=1,function(i){function n(L,K){var F=L.length;L.push(K);e:for(;0<F;){var w=F-1>>>1,T=L[w];if(0<u(T,K))L[w]=K,L[F]=T,F=w;else break e}}function o(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var K=L[0],F=L.pop();if(F!==K){L[0]=F;e:for(var w=0,T=L.length,J=T>>>1;w<J;){var ee=2*(w+1)-1,ie=L[ee],oe=ee+1,he=L[oe];if(0>u(ie,F))oe<T&&0>u(he,ie)?(L[w]=he,L[oe]=F,w=oe):(L[w]=ie,L[ee]=F,w=ee);else if(oe<T&&0>u(he,F))L[w]=he,L[oe]=F,w=oe;else break e}}return K}function u(L,K){var F=L.sortIndex-K.sortIndex;return F!==0?F:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],E=[],I=1,O=null,R=3,b=!1,X=!1,Q=!1,H=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(L){for(var K=o(E);K!==null;){if(K.callback===null)a(E);else if(K.startTime<=L)a(E),K.sortIndex=K.expirationTime,n(g,K);else break;K=o(E)}}function le(L){if(Q=!1,ae(L),!X)if(o(g)!==null)X=!0,We(de);else{var K=o(E);K!==null&&Ee(le,K.startTime-L)}}function de(L,K){X=!1,Q&&(Q=!1,q(Me),Me=-1),b=!0;var F=R;try{for(ae(K),O=o(g);O!==null&&(!(O.expirationTime>K)||L&&!Rn());){var w=O.callback;if(typeof w=="function"){O.callback=null,R=O.priorityLevel;var T=w(O.expirationTime<=K);K=i.unstable_now(),typeof T=="function"?O.callback=T:O===o(g)&&a(g),ae(K)}else a(g);O=o(g)}if(O!==null)var J=!0;else{var ee=o(E);ee!==null&&Ee(le,ee.startTime-K),J=!1}return J}finally{O=null,R=F,b=!1}}var Ie=!1,Ce=null,Me=-1,ot=5,dt=-1;function Rn(){return!(i.unstable_now()-dt<ot)}function kt(){if(Ce!==null){var L=i.unstable_now();dt=L;var K=!0;try{K=Ce(!0,L)}finally{K?Je():(Ie=!1,Ce=null)}}else Ie=!1}var Je;if(typeof ne=="function")Je=function(){ne(kt)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,It=ht.port2;ht.port1.onmessage=kt,Je=function(){It.postMessage(null)}}else Je=function(){H(kt,0)};function We(L){Ce=L,Ie||(Ie=!0,Je())}function Ee(L,K){Me=H(function(){L(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_continueExecution=function(){X||b||(X=!0,We(de))},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return o(g)},i.unstable_next=function(L){switch(R){case 1:case 2:case 3:var K=3;break;default:K=R}var F=R;R=K;try{return L()}finally{R=F}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=R;R=L;try{return K()}finally{R=F}},i.unstable_scheduleCallback=function(L,K,F){var w=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?w+F:w):F=w,L){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=F+T,L={id:I++,callback:K,priorityLevel:L,startTime:F,expirationTime:T,sortIndex:-1},F>w?(L.sortIndex=F,n(E,L),o(g)===null&&L===o(E)&&(Q?(q(Me),Me=-1):Q=!0,Ee(le,F-w))):(L.sortIndex=T,n(g,L),X||b||(X=!0,We(de))),L},i.unstable_shouldYield=Rn,i.unstable_wrapCallback=function(L){var K=R;return function(){var F=R;R=K;try{return L.apply(this,arguments)}finally{R=F}}}}(Il)),Il}var zd;function Pv(){return zd||(zd=1,kl.exports=Tv()),kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function xv(){if(jd)return Xe;jd=1;var i=mu(),n=Pv();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,u={};function f(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(u[e]=t,e=0;e<t.length;e++)a.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},O={};function R(e){return g.call(O,e)?!0:g.call(I,e)?!1:E.test(e)?O[e]=!0:(I[e]=!0,!1)}function b(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,r,s){if(t===null||typeof t>"u"||b(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Q(e,t,r,s,l,c,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new Q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function ne(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,ne);H[t]=new Q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,ne);H[t]=new Q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,ne);H[t]=new Q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,t,r,s){var l=H.hasOwnProperty(t)?H[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,r,l,s)&&(r=null),s||l===null?R(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,s=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var le=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),Me=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),dt=Symbol.for("react.provider"),Rn=Symbol.for("react.context"),kt=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),It=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),L=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,w;function T(e){if(w===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var s=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){s=k}e.call(t.prototype)}else{try{throw Error()}catch(k){s=k}e()}}catch(k){if(k&&s&&typeof k.stack=="string"){for(var l=k.stack.split(`
`),c=s.stack.split(`
`),d=l.length-1,p=c.length-1;1<=d&&0<=p&&l[d]!==c[p];)p--;for(;1<=d&&0<=p;d--,p--)if(l[d]!==c[p]){if(d!==1||p!==1)do if(d--,p--,0>p||l[d]!==c[p]){var v=`
`+l[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?T(e):""}function ie(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ce:return"Fragment";case Ie:return"Portal";case ot:return"Profiler";case Me:return"StrictMode";case Je:return"Suspense";case ht:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rn:return(e.displayName||"Context")+".Consumer";case dt:return(e._context.displayName||"Context")+".Provider";case kt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case It:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===Me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=ye(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=Ze(e))}function zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ye(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var r=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ju(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bu(e,t){t=t.checked,t!=null&&ae(e,"checked",t,!1)}function xs(e,t){Bu(e,t);var r=ue(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?As(e,t.type,r):t.hasOwnProperty("defaultValue")&&As(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function As(e,t,r){(t!=="number"||Hi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mr=Array.isArray;function tr(e,t,r,s){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&s&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Mr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function $u(e,t){var r=ue(t.value),s=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vi,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Yu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function Qu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,l=Yu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,l):e[r]=l}}var xm=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,t){if(t){if(xm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ls=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ms=null,nr=null,rr=null;function qu(e){if(e=si(e)){if(typeof Ms!="function")throw Error(o(280));var t=e.stateNode;t&&(t=ho(t),Ms(e.stateNode,e.type,t))}}function Xu(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Ju(){if(nr){var e=nr,t=rr;if(rr=nr=null,qu(e),t)for(e=0;e<t.length;e++)qu(t[e])}}function Zu(e,t){return e(t)}function ec(){}var Fs=!1;function tc(e,t,r){if(Fs)return e(t,r);Fs=!0;try{return Zu(e,t,r)}finally{Fs=!1,(nr!==null||rr!==null)&&(ec(),Ju())}}function zr(e,t){var r=e.stateNode;if(r===null)return null;var s=ho(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var Us=!1;if(m)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Us=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Us=!1}function Am(e,t,r,s,l,c,d,p,v){var k=Array.prototype.slice.call(arguments,3);try{t.apply(r,k)}catch(P){this.onError(P)}}var Br=!1,$i=null,Wi=!1,zs=null,Nm={onError:function(e){Br=!0,$i=e}};function Om(e,t,r,s,l,c,d,p,v){Br=!1,$i=null,Am.apply(Nm,arguments)}function Rm(e,t,r,s,l,c,d,p,v){if(Om.apply(this,arguments),Br){if(Br){var k=$i;Br=!1,$i=null}else throw Error(o(198));Wi||(Wi=!0,zs=k)}}function bn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function nc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rc(e){if(bn(e)!==e)throw Error(o(188))}function bm(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,s=t;;){var l=r.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){r=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===r)return rc(l),e;if(c===s)return rc(l),t;c=c.sibling}throw Error(o(188))}if(r.return!==s.return)r=l,s=c;else{for(var d=!1,p=l.child;p;){if(p===r){d=!0,r=l,s=c;break}if(p===s){d=!0,s=l,r=c;break}p=p.sibling}if(!d){for(p=c.child;p;){if(p===r){d=!0,r=c,s=l;break}if(p===s){d=!0,s=c,r=l;break}p=p.sibling}if(!d)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function ic(e){return e=bm(e),e!==null?oc(e):null}function oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oc(e);if(t!==null)return t;e=e.sibling}return null}var sc=n.unstable_scheduleCallback,ac=n.unstable_cancelCallback,Lm=n.unstable_shouldYield,Dm=n.unstable_requestPaint,Te=n.unstable_now,Mm=n.unstable_getCurrentPriorityLevel,js=n.unstable_ImmediatePriority,lc=n.unstable_UserBlockingPriority,Ki=n.unstable_NormalPriority,Fm=n.unstable_LowPriority,uc=n.unstable_IdlePriority,Gi=null,Ct=null;function Um(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Bm,zm=Math.log,jm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(zm(e)/jm|0)|0}var Yi=64,Qi=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,l=e.suspendedLanes,c=e.pingedLanes,d=r&268435455;if(d!==0){var p=d&~l;p!==0?s=Hr(p):(c&=d,c!==0&&(s=Hr(c)))}else d=r&~l,d!==0?s=Hr(d):c!==0&&(s=Hr(c));if(s===0)return 0;if(t!==0&&t!==s&&!(t&l)&&(l=s&-s,c=t&-t,l>=c||l===16&&(c&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-pt(t),l=1<<r,s|=e[r],t&=~l;return s}function Hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-pt(c),p=1<<d,v=l[d];v===-1?(!(p&r)||p&s)&&(l[d]=Hm(p,t)):v<=t&&(e.expiredLanes|=p),c&=~p}}function Bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cc(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function Hs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=r}function $m(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-pt(r),c=1<<l;t[l]=0,s[l]=-1,e[l]=-1,r&=~c}}function Vs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-pt(r),l=1<<s;l&t|e[s]&t&&(e[s]|=t),r&=~l}}var ce=0;function fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dc,$s,hc,pc,mc,Ws=!1,Xi=[],Zt=null,en=null,tn=null,$r=new Map,Wr=new Map,nn=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Kr(e,t,r,s,l,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},t!==null&&(t=si(t),t!==null&&$s(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Km(e,t,r,s,l){switch(t){case"focusin":return Zt=Kr(Zt,e,t,r,s,l),!0;case"dragenter":return en=Kr(en,e,t,r,s,l),!0;case"mouseover":return tn=Kr(tn,e,t,r,s,l),!0;case"pointerover":var c=l.pointerId;return $r.set(c,Kr($r.get(c)||null,e,t,r,s,l)),!0;case"gotpointercapture":return c=l.pointerId,Wr.set(c,Kr(Wr.get(c)||null,e,t,r,s,l)),!0}return!1}function vc(e){var t=Ln(e.target);if(t!==null){var r=bn(t);if(r!==null){if(t=r.tag,t===13){if(t=nc(r),t!==null){e.blockedOn=t,mc(e.priority,function(){hc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ls=s,r.target.dispatchEvent(s),Ls=null}else return t=si(r),t!==null&&$s(t),e.blockedOn=r,!1;t.shift()}return!0}function yc(e,t,r){Ji(e)&&r.delete(t)}function Gm(){Ws=!1,Zt!==null&&Ji(Zt)&&(Zt=null),en!==null&&Ji(en)&&(en=null),tn!==null&&Ji(tn)&&(tn=null),$r.forEach(yc),Wr.forEach(yc)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ws||(Ws=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Gm)))}function Yr(e){function t(l){return Gr(l,e)}if(0<Xi.length){Gr(Xi[0],e);for(var r=1;r<Xi.length;r++){var s=Xi[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Zt!==null&&Gr(Zt,e),en!==null&&Gr(en,e),tn!==null&&Gr(tn,e),$r.forEach(t),Wr.forEach(t),r=0;r<nn.length;r++)s=nn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<nn.length&&(r=nn[0],r.blockedOn===null);)vc(r),r.blockedOn===null&&nn.shift()}var ir=le.ReactCurrentBatchConfig,Zi=!0;function Ym(e,t,r,s){var l=ce,c=ir.transition;ir.transition=null;try{ce=1,Ks(e,t,r,s)}finally{ce=l,ir.transition=c}}function Qm(e,t,r,s){var l=ce,c=ir.transition;ir.transition=null;try{ce=4,Ks(e,t,r,s)}finally{ce=l,ir.transition=c}}function Ks(e,t,r,s){if(Zi){var l=Gs(e,t,r,s);if(l===null)ca(e,t,s,eo,r),gc(e,s);else if(Km(l,e,t,r,s))s.stopPropagation();else if(gc(e,s),t&4&&-1<Wm.indexOf(e)){for(;l!==null;){var c=si(l);if(c!==null&&dc(c),c=Gs(e,t,r,s),c===null&&ca(e,t,s,eo,r),c===l)break;l=c}l!==null&&s.stopPropagation()}else ca(e,t,s,null,r)}}var eo=null;function Gs(e,t,r,s){if(eo=null,e=Ds(s),e=Ln(e),e!==null)if(t=bn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=nc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mm()){case js:return 1;case lc:return 4;case Ki:case Fm:return 16;case uc:return 536870912;default:return 16}default:return 16}}var rn=null,Ys=null,to=null;function _c(){if(to)return to;var e,t=Ys,r=t.length,s,l="value"in rn?rn.value:rn.textContent,c=l.length;for(e=0;e<r&&t[e]===l[e];e++);var d=r-e;for(s=1;s<=d&&t[r-s]===l[c-s];s++);return to=l.slice(e,1<s?1-s:void 0)}function no(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function Sc(){return!1}function et(e){function t(r,s,l,c,d){this._reactName=r,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(c):c[p]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ro:Sc,this.isPropagationStopped=Sc,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=et(or),Qr=F({},or,{view:0,detail:0}),qm=et(Qr),qs,Xs,qr,io=F({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(qs=e.screenX-qr.screenX,Xs=e.screenY-qr.screenY):Xs=qs=0,qr=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),Ec=et(io),Xm=F({},io,{dataTransfer:0}),Jm=et(Xm),Zm=F({},Qr,{relatedTarget:0}),Js=et(Zm),eg=F({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=et(eg),ng=F({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=et(ng),ig=F({},or,{data:0}),kc=et(ig),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ag[e])?!!t[e]:!1}function Zs(){return lg}var ug=F({},Qr,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=no(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?no(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?no(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cg=et(ug),fg=F({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ic=et(fg),dg=F({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),hg=et(dg),pg=F({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),mg=et(pg),gg=F({},io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=et(gg),yg=[9,13,27,32],ea=m&&"CompositionEvent"in window,Xr=null;m&&"documentMode"in document&&(Xr=document.documentMode);var wg=m&&"TextEvent"in window&&!Xr,Cc=m&&(!ea||Xr&&8<Xr&&11>=Xr),Tc=" ",Pc=!1;function xc(e,t){switch(e){case"keyup":return yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function _g(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:(Pc=!0,Tc);case"textInput":return e=t.data,e===Tc&&Pc?null:e;default:return null}}function Sg(e,t){if(sr)return e==="compositionend"||!ea&&xc(e,t)?(e=_c(),to=Ys=rn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eg[e.type]:t==="textarea"}function Oc(e,t,r,s){Xu(s),t=uo(t,"onChange"),0<t.length&&(r=new Qs("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Jr=null,Zr=null;function kg(e){Qc(e,0)}function oo(e){var t=fr(e);if(zu(t))return e}function Ig(e,t){if(e==="change")return t}var Rc=!1;if(m){var ta;if(m){var na="oninput"in document;if(!na){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),na=typeof bc.oninput=="function"}ta=na}else ta=!1;Rc=ta&&(!document.documentMode||9<document.documentMode)}function Lc(){Jr&&(Jr.detachEvent("onpropertychange",Dc),Zr=Jr=null)}function Dc(e){if(e.propertyName==="value"&&oo(Zr)){var t=[];Oc(t,Zr,e,Ds(e)),tc(kg,t)}}function Cg(e,t,r){e==="focusin"?(Lc(),Jr=t,Zr=r,Jr.attachEvent("onpropertychange",Dc)):e==="focusout"&&Lc()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(Zr)}function Pg(e,t){if(e==="click")return oo(t)}function xg(e,t){if(e==="input"||e==="change")return oo(t)}function Ag(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Ag;function ei(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var l=r[s];if(!g.call(t,l)||!mt(e[l],t[l]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var r=Mc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mc(r)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=Hi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Hi(e.document)}return t}function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ng(e){var t=zc(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Uc(r.ownerDocument.documentElement,r)){if(s!==null&&ra(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,c=Math.min(s.start,l);s=s.end===void 0?c:Math.min(s.end,l),!e.extend&&c>s&&(l=s,s=c,c=l),l=Fc(r,c);var d=Fc(r,s);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),c>s?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=m&&"documentMode"in document&&11>=document.documentMode,ar=null,ia=null,ti=null,oa=!1;function jc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;oa||ar==null||ar!==Hi(s)||(s=ar,"selectionStart"in s&&ra(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ti&&ei(ti,s)||(ti=s,s=uo(ia,"onSelect"),0<s.length&&(t=new Qs("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=ar)))}function so(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var lr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},sa={},Bc={};m&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function ao(e){if(sa[e])return sa[e];if(!lr[e])return e;var t=lr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bc)return sa[e]=t[r];return e}var Hc=ao("animationend"),Vc=ao("animationiteration"),$c=ao("animationstart"),Wc=ao("transitionend"),Kc=new Map,Gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){Kc.set(e,t),f(t,[e])}for(var aa=0;aa<Gc.length;aa++){var la=Gc[aa],Rg=la.toLowerCase(),bg=la[0].toUpperCase()+la.slice(1);on(Rg,"on"+bg)}on(Hc,"onAnimationEnd"),on(Vc,"onAnimationIteration"),on($c,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(Wc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function Yc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Rm(s,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],l=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var d=s.length-1;0<=d;d--){var p=s[d],v=p.instance,k=p.currentTarget;if(p=p.listener,v!==c&&l.isPropagationStopped())break e;Yc(l,p,k),c=v}else for(d=0;d<s.length;d++){if(p=s[d],v=p.instance,k=p.currentTarget,p=p.listener,v!==c&&l.isPropagationStopped())break e;Yc(l,p,k),c=v}}}if(Wi)throw e=zs,Wi=!1,zs=null,e}function me(e,t){var r=t[ga];r===void 0&&(r=t[ga]=new Set);var s=e+"__bubble";r.has(s)||(qc(t,e,2,!1),r.add(s))}function ua(e,t,r){var s=0;t&&(s|=4),qc(r,e,s,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[lo]){e[lo]=!0,a.forEach(function(r){r!=="selectionchange"&&(Lg.has(r)||ua(r,!1,e),ua(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,ua("selectionchange",!1,t))}}function qc(e,t,r,s){switch(wc(t)){case 1:var l=Ym;break;case 4:l=Qm;break;default:l=Ks}r=l.bind(null,t,r,e),l=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function ca(e,t,r,s,l){var c=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var p=s.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(d===4)for(d=s.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;d=d.return}for(;p!==null;){if(d=Ln(p),d===null)return;if(v=d.tag,v===5||v===6){s=c=d;continue e}p=p.parentNode}}s=s.return}tc(function(){var k=c,P=Ds(r),x=[];e:{var C=Kc.get(e);if(C!==void 0){var D=Qs,U=e;switch(e){case"keypress":if(no(r)===0)break e;case"keydown":case"keyup":D=cg;break;case"focusin":U="focus",D=Js;break;case"focusout":U="blur",D=Js;break;case"beforeblur":case"afterblur":D=Js;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=hg;break;case Hc:case Vc:case $c:D=tg;break;case Wc:D=mg;break;case"scroll":D=qm;break;case"wheel":D=vg;break;case"copy":case"cut":case"paste":D=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Ic}var z=(t&4)!==0,Pe=!z&&e==="scroll",_=z?C!==null?C+"Capture":null:C;z=[];for(var y=k,S;y!==null;){S=y;var N=S.stateNode;if(S.tag===5&&N!==null&&(S=N,_!==null&&(N=zr(y,_),N!=null&&z.push(ii(y,N,S)))),Pe)break;y=y.return}0<z.length&&(C=new D(C,U,null,r,P),x.push({event:C,listeners:z}))}}if(!(t&7)){e:{if(C=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",C&&r!==Ls&&(U=r.relatedTarget||r.fromElement)&&(Ln(U)||U[Mt]))break e;if((D||C)&&(C=P.window===P?P:(C=P.ownerDocument)?C.defaultView||C.parentWindow:window,D?(U=r.relatedTarget||r.toElement,D=k,U=U?Ln(U):null,U!==null&&(Pe=bn(U),U!==Pe||U.tag!==5&&U.tag!==6)&&(U=null)):(D=null,U=k),D!==U)){if(z=Ec,N="onMouseLeave",_="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(z=Ic,N="onPointerLeave",_="onPointerEnter",y="pointer"),Pe=D==null?C:fr(D),S=U==null?C:fr(U),C=new z(N,y+"leave",D,r,P),C.target=Pe,C.relatedTarget=S,N=null,Ln(P)===k&&(z=new z(_,y+"enter",U,r,P),z.target=S,z.relatedTarget=Pe,N=z),Pe=N,D&&U)t:{for(z=D,_=U,y=0,S=z;S;S=ur(S))y++;for(S=0,N=_;N;N=ur(N))S++;for(;0<y-S;)z=ur(z),y--;for(;0<S-y;)_=ur(_),S--;for(;y--;){if(z===_||_!==null&&z===_.alternate)break t;z=ur(z),_=ur(_)}z=null}else z=null;D!==null&&Xc(x,C,D,z,!1),U!==null&&Pe!==null&&Xc(x,Pe,U,z,!0)}}e:{if(C=k?fr(k):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var j=Ig;else if(Nc(C))if(Rc)j=xg;else{j=Tg;var V=Cg}else(D=C.nodeName)&&D.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(j=Pg);if(j&&(j=j(e,k))){Oc(x,j,r,P);break e}V&&V(e,C,k),e==="focusout"&&(V=C._wrapperState)&&V.controlled&&C.type==="number"&&As(C,"number",C.value)}switch(V=k?fr(k):window,e){case"focusin":(Nc(V)||V.contentEditable==="true")&&(ar=V,ia=k,ti=null);break;case"focusout":ti=ia=ar=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,jc(x,r,P);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":jc(x,r,P)}var $;if(ea)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else sr?xc(e,r)&&(G="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(G="onCompositionStart");G&&(Cc&&r.locale!=="ko"&&(sr||G!=="onCompositionStart"?G==="onCompositionEnd"&&sr&&($=_c()):(rn=P,Ys="value"in rn?rn.value:rn.textContent,sr=!0)),V=uo(k,G),0<V.length&&(G=new kc(G,e,null,r,P),x.push({event:G,listeners:V}),$?G.data=$:($=Ac(r),$!==null&&(G.data=$)))),($=wg?_g(e,r):Sg(e,r))&&(k=uo(k,"onBeforeInput"),0<k.length&&(P=new kc("onBeforeInput","beforeinput",null,r,P),x.push({event:P,listeners:k}),P.data=$))}Qc(x,t)})}function ii(e,t,r){return{instance:e,listener:t,currentTarget:r}}function uo(e,t){for(var r=t+"Capture",s=[];e!==null;){var l=e,c=l.stateNode;l.tag===5&&c!==null&&(l=c,c=zr(e,r),c!=null&&s.unshift(ii(e,c,l)),c=zr(e,t),c!=null&&s.push(ii(e,c,l))),e=e.return}return s}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,r,s,l){for(var c=t._reactName,d=[];r!==null&&r!==s;){var p=r,v=p.alternate,k=p.stateNode;if(v!==null&&v===s)break;p.tag===5&&k!==null&&(p=k,l?(v=zr(r,c),v!=null&&d.unshift(ii(r,v,p))):l||(v=zr(r,c),v!=null&&d.push(ii(r,v,p)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var Dg=/\r\n?/g,Mg=/\u0000|\uFFFD/g;function Jc(e){return(typeof e=="string"?e:""+e).replace(Dg,`
`).replace(Mg,"")}function co(e,t,r){if(t=Jc(t),Jc(e)!==t&&r)throw Error(o(425))}function fo(){}var fa=null,da=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(zg)}:pa;function zg(e){setTimeout(function(){throw e})}function ma(e,t){var r=t,s=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(s===0){e.removeChild(l),Yr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=l}while(r);Yr(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+cr,oi="__reactProps$"+cr,Mt="__reactContainer$"+cr,ga="__reactEvents$"+cr,jg="__reactListeners$"+cr,Bg="__reactHandles$"+cr;function Ln(e){var t=e[Tt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Mt]||r[Tt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ef(e);e!==null;){if(r=e[Tt])return r;e=ef(e)}return t}e=r,r=e.parentNode}return null}function si(e){return e=e[Tt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ho(e){return e[oi]||null}var va=[],dr=-1;function an(e){return{current:e}}function ge(e){0>dr||(e.current=va[dr],va[dr]=null,dr--)}function pe(e,t){dr++,va[dr]=e.current,e.current=t}var ln={},Fe=an(ln),Ke=an(!1),Dn=ln;function hr(e,t){var r=e.type.contextTypes;if(!r)return ln;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},c;for(c in r)l[c]=t[c];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ge(e){return e=e.childContextTypes,e!=null}function po(){ge(Ke),ge(Fe)}function tf(e,t,r){if(Fe.current!==ln)throw Error(o(168));pe(Fe,t),pe(Ke,r)}function nf(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(o(108,he(e)||"Unknown",l));return F({},r,s)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Dn=Fe.current,pe(Fe,e),pe(Ke,Ke.current),!0}function rf(e,t,r){var s=e.stateNode;if(!s)throw Error(o(169));r?(e=nf(e,t,Dn),s.__reactInternalMemoizedMergedChildContext=e,ge(Ke),ge(Fe),pe(Fe,e)):ge(Ke),pe(Ke,r)}var Ft=null,go=!1,ya=!1;function of(e){Ft===null?Ft=[e]:Ft.push(e)}function Hg(e){go=!0,of(e)}function un(){if(!ya&&Ft!==null){ya=!0;var e=0,t=ce;try{var r=Ft;for(ce=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Ft=null,go=!1}catch(l){throw Ft!==null&&(Ft=Ft.slice(e+1)),sc(js,un),l}finally{ce=t,ya=!1}}return null}var pr=[],mr=0,vo=null,yo=0,st=[],at=0,Mn=null,Ut=1,zt="";function Fn(e,t){pr[mr++]=yo,pr[mr++]=vo,vo=e,yo=t}function sf(e,t,r){st[at++]=Ut,st[at++]=zt,st[at++]=Mn,Mn=e;var s=Ut;e=zt;var l=32-pt(s)-1;s&=~(1<<l),r+=1;var c=32-pt(t)+l;if(30<c){var d=l-l%5;c=(s&(1<<d)-1).toString(32),s>>=d,l-=d,Ut=1<<32-pt(t)+l|r<<l|s,zt=c+e}else Ut=1<<c|r<<l|s,zt=e}function wa(e){e.return!==null&&(Fn(e,1),sf(e,1,0))}function _a(e){for(;e===vo;)vo=pr[--mr],pr[mr]=null,yo=pr[--mr],pr[mr]=null;for(;e===Mn;)Mn=st[--at],st[at]=null,zt=st[--at],st[at]=null,Ut=st[--at],st[at]=null}var tt=null,nt=null,we=!1,gt=null;function af(e,t){var r=ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,nt=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Mn!==null?{id:Ut,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,tt=e,nt=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(we){var t=nt;if(t){var r=t;if(!lf(e,t)){if(Sa(e))throw Error(o(418));t=sn(r.nextSibling);var s=tt;t&&lf(e,t)?af(s,r):(e.flags=e.flags&-4097|2,we=!1,tt=e)}}else{if(Sa(e))throw Error(o(418));e.flags=e.flags&-4097|2,we=!1,tt=e}}}function uf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function wo(e){if(e!==tt)return!1;if(!we)return uf(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=nt)){if(Sa(e))throw cf(),Error(o(418));for(;t;)af(e,t),t=sn(t.nextSibling)}if(uf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){nt=sn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=tt?sn(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=nt;e;)e=sn(e.nextSibling)}function gr(){nt=tt=null,we=!1}function ka(e){gt===null?gt=[e]:gt.push(e)}var Vg=le.ReactCurrentBatchConfig;function ai(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var s=r.stateNode}if(!s)throw Error(o(147,e));var l=s,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(d){var p=l.refs;d===null?delete p[c]:p[c]=d},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ff(e){var t=e._init;return t(e._payload)}function df(e){function t(_,y){if(e){var S=_.deletions;S===null?(_.deletions=[y],_.flags|=16):S.push(y)}}function r(_,y){if(!e)return null;for(;y!==null;)t(_,y),y=y.sibling;return null}function s(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function l(_,y){return _=vn(_,y),_.index=0,_.sibling=null,_}function c(_,y,S){return _.index=S,e?(S=_.alternate,S!==null?(S=S.index,S<y?(_.flags|=2,y):S):(_.flags|=2,y)):(_.flags|=1048576,y)}function d(_){return e&&_.alternate===null&&(_.flags|=2),_}function p(_,y,S,N){return y===null||y.tag!==6?(y=pl(S,_.mode,N),y.return=_,y):(y=l(y,S),y.return=_,y)}function v(_,y,S,N){var j=S.type;return j===Ce?P(_,y,S.props.children,N,S.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===We&&ff(j)===y.type)?(N=l(y,S.props),N.ref=ai(_,y,S),N.return=_,N):(N=$o(S.type,S.key,S.props,null,_.mode,N),N.ref=ai(_,y,S),N.return=_,N)}function k(_,y,S,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=ml(S,_.mode,N),y.return=_,y):(y=l(y,S.children||[]),y.return=_,y)}function P(_,y,S,N,j){return y===null||y.tag!==7?(y=Wn(S,_.mode,N,j),y.return=_,y):(y=l(y,S),y.return=_,y)}function x(_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=pl(""+y,_.mode,S),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case de:return S=$o(y.type,y.key,y.props,null,_.mode,S),S.ref=ai(_,null,y),S.return=_,S;case Ie:return y=ml(y,_.mode,S),y.return=_,y;case We:var N=y._init;return x(_,N(y._payload),S)}if(Mr(y)||K(y))return y=Wn(y,_.mode,S,null),y.return=_,y;_o(_,y)}return null}function C(_,y,S,N){var j=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:p(_,y,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case de:return S.key===j?v(_,y,S,N):null;case Ie:return S.key===j?k(_,y,S,N):null;case We:return j=S._init,C(_,y,j(S._payload),N)}if(Mr(S)||K(S))return j!==null?null:P(_,y,S,N,null);_o(_,S)}return null}function D(_,y,S,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return _=_.get(S)||null,p(y,_,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case de:return _=_.get(N.key===null?S:N.key)||null,v(y,_,N,j);case Ie:return _=_.get(N.key===null?S:N.key)||null,k(y,_,N,j);case We:var V=N._init;return D(_,y,S,V(N._payload),j)}if(Mr(N)||K(N))return _=_.get(S)||null,P(y,_,N,j,null);_o(y,N)}return null}function U(_,y,S,N){for(var j=null,V=null,$=y,G=y=0,be=null;$!==null&&G<S.length;G++){$.index>G?(be=$,$=null):be=$.sibling;var se=C(_,$,S[G],N);if(se===null){$===null&&($=be);break}e&&$&&se.alternate===null&&t(_,$),y=c(se,y,G),V===null?j=se:V.sibling=se,V=se,$=be}if(G===S.length)return r(_,$),we&&Fn(_,G),j;if($===null){for(;G<S.length;G++)$=x(_,S[G],N),$!==null&&(y=c($,y,G),V===null?j=$:V.sibling=$,V=$);return we&&Fn(_,G),j}for($=s(_,$);G<S.length;G++)be=D($,_,G,S[G],N),be!==null&&(e&&be.alternate!==null&&$.delete(be.key===null?G:be.key),y=c(be,y,G),V===null?j=be:V.sibling=be,V=be);return e&&$.forEach(function(yn){return t(_,yn)}),we&&Fn(_,G),j}function z(_,y,S,N){var j=K(S);if(typeof j!="function")throw Error(o(150));if(S=j.call(S),S==null)throw Error(o(151));for(var V=j=null,$=y,G=y=0,be=null,se=S.next();$!==null&&!se.done;G++,se=S.next()){$.index>G?(be=$,$=null):be=$.sibling;var yn=C(_,$,se.value,N);if(yn===null){$===null&&($=be);break}e&&$&&yn.alternate===null&&t(_,$),y=c(yn,y,G),V===null?j=yn:V.sibling=yn,V=yn,$=be}if(se.done)return r(_,$),we&&Fn(_,G),j;if($===null){for(;!se.done;G++,se=S.next())se=x(_,se.value,N),se!==null&&(y=c(se,y,G),V===null?j=se:V.sibling=se,V=se);return we&&Fn(_,G),j}for($=s(_,$);!se.done;G++,se=S.next())se=D($,_,G,se.value,N),se!==null&&(e&&se.alternate!==null&&$.delete(se.key===null?G:se.key),y=c(se,y,G),V===null?j=se:V.sibling=se,V=se);return e&&$.forEach(function(Ev){return t(_,Ev)}),we&&Fn(_,G),j}function Pe(_,y,S,N){if(typeof S=="object"&&S!==null&&S.type===Ce&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case de:e:{for(var j=S.key,V=y;V!==null;){if(V.key===j){if(j=S.type,j===Ce){if(V.tag===7){r(_,V.sibling),y=l(V,S.props.children),y.return=_,_=y;break e}}else if(V.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===We&&ff(j)===V.type){r(_,V.sibling),y=l(V,S.props),y.ref=ai(_,V,S),y.return=_,_=y;break e}r(_,V);break}else t(_,V);V=V.sibling}S.type===Ce?(y=Wn(S.props.children,_.mode,N,S.key),y.return=_,_=y):(N=$o(S.type,S.key,S.props,null,_.mode,N),N.ref=ai(_,y,S),N.return=_,_=N)}return d(_);case Ie:e:{for(V=S.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){r(_,y.sibling),y=l(y,S.children||[]),y.return=_,_=y;break e}else{r(_,y);break}else t(_,y);y=y.sibling}y=ml(S,_.mode,N),y.return=_,_=y}return d(_);case We:return V=S._init,Pe(_,y,V(S._payload),N)}if(Mr(S))return U(_,y,S,N);if(K(S))return z(_,y,S,N);_o(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(r(_,y.sibling),y=l(y,S),y.return=_,_=y):(r(_,y),y=pl(S,_.mode,N),y.return=_,_=y),d(_)):r(_,y)}return Pe}var vr=df(!0),hf=df(!1),So=an(null),Eo=null,yr=null,Ia=null;function Ca(){Ia=yr=Eo=null}function Ta(e){var t=So.current;ge(So),e._currentValue=t}function Pa(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function wr(e,t){Eo=e,Ia=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Ia!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(Eo===null)throw Error(o(308));yr=e,Eo.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Un=null;function xa(e){Un===null?Un=[e]:Un.push(e)}function pf(e,t,r,s){var l=t.interleaved;return l===null?(r.next=r,xa(t)):(r.next=l.next,l.next=r),t.interleaved=r,jt(e,s)}function jt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var cn=!1;function Aa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,re&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,jt(e,r)}return l=s.interleaved,l===null?(t.next=t,xa(s)):(t.next=l.next,l.next=t),s.interleaved=t,jt(e,r)}function ko(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Vs(e,r)}}function gf(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var l=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?l=c=d:c=c.next=d,r=r.next}while(r!==null);c===null?l=c=t:c=c.next=t}else l=c=t;r={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Io(e,t,r,s){var l=e.updateQueue;cn=!1;var c=l.firstBaseUpdate,d=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var v=p,k=v.next;v.next=null,d===null?c=k:d.next=k,d=v;var P=e.alternate;P!==null&&(P=P.updateQueue,p=P.lastBaseUpdate,p!==d&&(p===null?P.firstBaseUpdate=k:p.next=k,P.lastBaseUpdate=v))}if(c!==null){var x=l.baseState;d=0,P=k=v=null,p=c;do{var C=p.lane,D=p.eventTime;if((s&C)===C){P!==null&&(P=P.next={eventTime:D,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var U=e,z=p;switch(C=t,D=r,z.tag){case 1:if(U=z.payload,typeof U=="function"){x=U.call(D,x,C);break e}x=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=z.payload,C=typeof U=="function"?U.call(D,x,C):U,C==null)break e;x=F({},x,C);break e;case 2:cn=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,C=l.effects,C===null?l.effects=[p]:C.push(p))}else D={eventTime:D,lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},P===null?(k=P=D,v=x):P=P.next=D,d|=C;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;C=p,p=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);if(P===null&&(v=x),l.baseState=v,l.firstBaseUpdate=k,l.lastBaseUpdate=P,t=l.shared.interleaved,t!==null){l=t;do d|=l.lane,l=l.next;while(l!==t)}else c===null&&(l.shared.lanes=0);Bn|=d,e.lanes=d,e.memoizedState=x}}function vf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=r,typeof l!="function")throw Error(o(191,l));l.call(s)}}}var li={},Pt=an(li),ui=an(li),ci=an(li);function zn(e){if(e===li)throw Error(o(174));return e}function Na(e,t){switch(pe(ci,t),pe(ui,e),pe(Pt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Os(t,e)}ge(Pt),pe(Pt,t)}function _r(){ge(Pt),ge(ui),ge(ci)}function yf(e){zn(ci.current);var t=zn(Pt.current),r=Os(t,e.type);t!==r&&(pe(ui,e),pe(Pt,r))}function Oa(e){ui.current===e&&(ge(Pt),ge(ui))}var _e=an(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ra=[];function ba(){for(var e=0;e<Ra.length;e++)Ra[e]._workInProgressVersionPrimary=null;Ra.length=0}var To=le.ReactCurrentDispatcher,La=le.ReactCurrentBatchConfig,jn=0,Se=null,Ae=null,Oe=null,Po=!1,fi=!1,di=0,$g=0;function Ue(){throw Error(o(321))}function Da(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mt(e[r],t[r]))return!1;return!0}function Ma(e,t,r,s,l,c){if(jn=c,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?Yg:Qg,e=r(s,l),fi){c=0;do{if(fi=!1,di=0,25<=c)throw Error(o(301));c+=1,Oe=Ae=null,t.updateQueue=null,To.current=qg,e=r(s,l)}while(fi)}if(To.current=No,t=Ae!==null&&Ae.next!==null,jn=0,Oe=Ae=Se=null,Po=!1,t)throw Error(o(300));return e}function Fa(){var e=di!==0;return di=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function ut(){if(Ae===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Oe===null?Se.memoizedState:Oe.next;if(t!==null)Oe=t,Ae=e;else{if(e===null)throw Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function hi(e,t){return typeof t=="function"?t(e):t}function Ua(e){var t=ut(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=Ae,l=s.baseQueue,c=r.pending;if(c!==null){if(l!==null){var d=l.next;l.next=c.next,c.next=d}s.baseQueue=l=c,r.pending=null}if(l!==null){c=l.next,s=s.baseState;var p=d=null,v=null,k=c;do{var P=k.lane;if((jn&P)===P)v!==null&&(v=v.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),s=k.hasEagerState?k.eagerState:e(s,k.action);else{var x={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};v===null?(p=v=x,d=s):v=v.next=x,Se.lanes|=P,Bn|=P}k=k.next}while(k!==null&&k!==c);v===null?d=s:v.next=p,mt(s,t.memoizedState)||(Ye=!0),t.memoizedState=s,t.baseState=d,t.baseQueue=v,r.lastRenderedState=s}if(e=r.interleaved,e!==null){l=e;do c=l.lane,Se.lanes|=c,Bn|=c,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function za(e){var t=ut(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,l=r.pending,c=t.memoizedState;if(l!==null){r.pending=null;var d=l=l.next;do c=e(c,d.action),d=d.next;while(d!==l);mt(c,t.memoizedState)||(Ye=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,s]}function wf(){}function _f(e,t){var r=Se,s=ut(),l=t(),c=!mt(s.memoizedState,l);if(c&&(s.memoizedState=l,Ye=!0),s=s.queue,ja(kf.bind(null,r,s,e),[e]),s.getSnapshot!==t||c||Oe!==null&&Oe.memoizedState.tag&1){if(r.flags|=2048,pi(9,Ef.bind(null,r,s,l,t),void 0,null),Re===null)throw Error(o(349));jn&30||Sf(r,t,l)}return l}function Sf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ef(e,t,r,s){t.value=r,t.getSnapshot=s,If(t)&&Cf(e)}function kf(e,t,r){return r(function(){If(t)&&Cf(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!mt(e,r)}catch{return!0}}function Cf(e){var t=jt(e,1);t!==null&&_t(t,e,1,-1)}function Tf(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=Gg.bind(null,Se,e),[t.memoizedState,e]}function pi(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Pf(){return ut().memoizedState}function xo(e,t,r,s){var l=xt();Se.flags|=e,l.memoizedState=pi(1|t,r,void 0,s===void 0?null:s)}function Ao(e,t,r,s){var l=ut();s=s===void 0?null:s;var c=void 0;if(Ae!==null){var d=Ae.memoizedState;if(c=d.destroy,s!==null&&Da(s,d.deps)){l.memoizedState=pi(t,r,c,s);return}}Se.flags|=e,l.memoizedState=pi(1|t,r,c,s)}function xf(e,t){return xo(8390656,8,e,t)}function ja(e,t){return Ao(2048,8,e,t)}function Af(e,t){return Ao(4,2,e,t)}function Nf(e,t){return Ao(4,4,e,t)}function Of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rf(e,t,r){return r=r!=null?r.concat([e]):null,Ao(4,4,Of.bind(null,t,e),r)}function Ba(){}function bf(e,t){var r=ut();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Da(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Lf(e,t){var r=ut();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Da(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Df(e,t,r){return jn&21?(mt(r,t)||(r=cc(),Se.lanes|=r,Bn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=r)}function Wg(e,t){var r=ce;ce=r!==0&&4>r?r:4,e(!0);var s=La.transition;La.transition={};try{e(!1),t()}finally{ce=r,La.transition=s}}function Mf(){return ut().memoizedState}function Kg(e,t,r){var s=mn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Ff(e))Uf(t,r);else if(r=pf(e,t,r,s),r!==null){var l=Ve();_t(r,e,s,l),zf(r,t,s)}}function Gg(e,t,r){var s=mn(e),l={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ff(e))Uf(t,l);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,p=c(d,r);if(l.hasEagerState=!0,l.eagerState=p,mt(p,d)){var v=t.interleaved;v===null?(l.next=l,xa(t)):(l.next=v.next,v.next=l),t.interleaved=l;return}}catch{}finally{}r=pf(e,t,l,s),r!==null&&(l=Ve(),_t(r,e,s,l),zf(r,t,s))}}function Ff(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Uf(e,t){fi=Po=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function zf(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Vs(e,r)}}var No={readContext:lt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Yg={readContext:lt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:xf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,xo(4194308,4,Of.bind(null,t,e),r)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var r=xt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=xt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Kg.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Tf,useDebugValue:Ba,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Tf(!1),t=e[0];return e=Wg.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Se,l=xt();if(we){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Re===null)throw Error(o(349));jn&30||Sf(s,t,r)}l.memoizedState=r;var c={value:r,getSnapshot:t};return l.queue=c,xf(kf.bind(null,s,c,e),[e]),s.flags|=2048,pi(9,Ef.bind(null,s,c,r,t),void 0,null),r},useId:function(){var e=xt(),t=Re.identifierPrefix;if(we){var r=zt,s=Ut;r=(s&~(1<<32-pt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=di++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=$g++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qg={readContext:lt,useCallback:bf,useContext:lt,useEffect:ja,useImperativeHandle:Rf,useInsertionEffect:Af,useLayoutEffect:Nf,useMemo:Lf,useReducer:Ua,useRef:Pf,useState:function(){return Ua(hi)},useDebugValue:Ba,useDeferredValue:function(e){var t=ut();return Df(t,Ae.memoizedState,e)},useTransition:function(){var e=Ua(hi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:_f,useId:Mf,unstable_isNewReconciler:!1},qg={readContext:lt,useCallback:bf,useContext:lt,useEffect:ja,useImperativeHandle:Rf,useInsertionEffect:Af,useLayoutEffect:Nf,useMemo:Lf,useReducer:za,useRef:Pf,useState:function(){return za(hi)},useDebugValue:Ba,useDeferredValue:function(e){var t=ut();return Ae===null?t.memoizedState=e:Df(t,Ae.memoizedState,e)},useTransition:function(){var e=za(hi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:_f,useId:Mf,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ha(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:F({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Oo={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Ve(),l=mn(e),c=Bt(s,l);c.payload=t,r!=null&&(c.callback=r),t=fn(e,c,l),t!==null&&(_t(t,e,l,s),ko(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Ve(),l=mn(e),c=Bt(s,l);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=fn(e,c,l),t!==null&&(_t(t,e,l,s),ko(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ve(),s=mn(e),l=Bt(r,s);l.tag=2,t!=null&&(l.callback=t),t=fn(e,l,s),t!==null&&(_t(t,e,s,r),ko(t,e,s))}};function jf(e,t,r,s,l,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,d):t.prototype&&t.prototype.isPureReactComponent?!ei(r,s)||!ei(l,c):!0}function Bf(e,t,r){var s=!1,l=ln,c=t.contextType;return typeof c=="object"&&c!==null?c=lt(c):(l=Ge(t)?Dn:Fe.current,s=t.contextTypes,c=(s=s!=null)?hr(e,l):ln),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=c),t}function Hf(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function Va(e,t,r,s){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Aa(e);var c=t.contextType;typeof c=="object"&&c!==null?l.context=lt(c):(c=Ge(t)?Dn:Fe.current,l.context=hr(e,c)),l.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Ha(e,t,c,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Oo.enqueueReplaceState(l,l.state,null),Io(e,r,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var r="",s=t;do r+=ie(s),s=s.return;while(s);var l=r}catch(c){l=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:l,digest:null}}function $a(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function Vf(e,t,r){r=Bt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Uo||(Uo=!0,sl=s),Wa(e,t)},r}function $f(e,t,r){r=Bt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;r.payload=function(){return s(l)},r.callback=function(){Wa(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Wa(e,t),typeof s!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Wf(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Xg;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(r)||(l.add(r),e=fv.bind(null,e,t,r),t.then(e,e))}function Kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gf(e,t,r,s,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Bt(-1,1),t.tag=2,fn(r,t,1))),r.lanes|=1),e)}var Jg=le.ReactCurrentOwner,Ye=!1;function He(e,t,r,s){t.child=e===null?hf(t,null,r,s):vr(t,e.child,r,s)}function Yf(e,t,r,s,l){r=r.render;var c=t.ref;return wr(t,l),s=Ma(e,t,r,s,c,l),r=Fa(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ht(e,t,l)):(we&&r&&wa(t),t.flags|=1,He(e,t,s,l),t.child)}function Qf(e,t,r,s,l){if(e===null){var c=r.type;return typeof c=="function"&&!hl(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,qf(e,t,c,s,l)):(e=$o(r.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&l)){var d=c.memoizedProps;if(r=r.compare,r=r!==null?r:ei,r(d,s)&&e.ref===t.ref)return Ht(e,t,l)}return t.flags|=1,e=vn(c,s),e.ref=t.ref,e.return=t,t.child=e}function qf(e,t,r,s,l){if(e!==null){var c=e.memoizedProps;if(ei(c,s)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=s=c,(e.lanes&l)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,Ht(e,t,l)}return Ka(e,t,r,s,l)}function Xf(e,t,r){var s=t.pendingProps,l=s.children,c=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(kr,rt),rt|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(kr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=c!==null?c.baseLanes:r,pe(kr,rt),rt|=s}else c!==null?(s=c.baseLanes|r,t.memoizedState=null):s=r,pe(kr,rt),rt|=s;return He(e,t,l,r),t.child}function Jf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ka(e,t,r,s,l){var c=Ge(r)?Dn:Fe.current;return c=hr(t,c),wr(t,l),r=Ma(e,t,r,s,c,l),s=Fa(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ht(e,t,l)):(we&&s&&wa(t),t.flags|=1,He(e,t,r,l),t.child)}function Zf(e,t,r,s,l){if(Ge(r)){var c=!0;mo(t)}else c=!1;if(wr(t,l),t.stateNode===null)bo(e,t),Bf(t,r,s),Va(t,r,s,l),s=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var v=d.context,k=r.contextType;typeof k=="object"&&k!==null?k=lt(k):(k=Ge(r)?Dn:Fe.current,k=hr(t,k));var P=r.getDerivedStateFromProps,x=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function";x||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==s||v!==k)&&Hf(t,d,s,k),cn=!1;var C=t.memoizedState;d.state=C,Io(t,s,d,l),v=t.memoizedState,p!==s||C!==v||Ke.current||cn?(typeof P=="function"&&(Ha(t,r,P,s),v=t.memoizedState),(p=cn||jf(t,r,p,s,C,v,k))?(x||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=v),d.props=s,d.state=v,d.context=k,s=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{d=t.stateNode,mf(e,t),p=t.memoizedProps,k=t.type===t.elementType?p:vt(t.type,p),d.props=k,x=t.pendingProps,C=d.context,v=r.contextType,typeof v=="object"&&v!==null?v=lt(v):(v=Ge(r)?Dn:Fe.current,v=hr(t,v));var D=r.getDerivedStateFromProps;(P=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==x||C!==v)&&Hf(t,d,s,v),cn=!1,C=t.memoizedState,d.state=C,Io(t,s,d,l);var U=t.memoizedState;p!==x||C!==U||Ke.current||cn?(typeof D=="function"&&(Ha(t,r,D,s),U=t.memoizedState),(k=cn||jf(t,r,k,s,C,U,v)||!1)?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,U,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,U,v)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=U),d.props=s,d.state=U,d.context=v,s=k):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),s=!1)}return Ga(e,t,r,s,c,l)}function Ga(e,t,r,s,l,c){Jf(e,t);var d=(t.flags&128)!==0;if(!s&&!d)return l&&rf(t,r,!1),Ht(e,t,c);s=t.stateNode,Jg.current=t;var p=d&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&d?(t.child=vr(t,e.child,null,c),t.child=vr(t,null,p,c)):He(e,t,p,c),t.memoizedState=s.state,l&&rf(t,r,!0),t.child}function ed(e){var t=e.stateNode;t.pendingContext?tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tf(e,t.context,!1),Na(e,t.containerInfo)}function td(e,t,r,s,l){return gr(),ka(l),t.flags|=256,He(e,t,r,s),t.child}var Ya={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function nd(e,t,r){var s=t.pendingProps,l=_e.current,c=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),pe(_e,l&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=s.children,e=s.fallback,c?(s=t.mode,c=t.child,d={mode:"hidden",children:d},!(s&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=Wo(d,s,0,null),e=Wn(e,s,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Qa(r),t.memoizedState=Ya,e):qa(t,d));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return Zg(e,t,d,s,p,l,r);if(c){c=s.fallback,d=t.mode,l=e.child,p=l.sibling;var v={mode:"hidden",children:s.children};return!(d&1)&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=v,t.deletions=null):(s=vn(l,v),s.subtreeFlags=l.subtreeFlags&14680064),p!==null?c=vn(p,c):(c=Wn(c,d,r,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,d=e.child.memoizedState,d=d===null?Qa(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~r,t.memoizedState=Ya,s}return c=e.child,e=c.sibling,s=vn(c,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function qa(e,t){return t=Wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,r,s){return s!==null&&ka(s),vr(t,e.child,null,r),e=qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zg(e,t,r,s,l,c,d){if(r)return t.flags&256?(t.flags&=-257,s=$a(Error(o(422))),Ro(e,t,d,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=s.fallback,l=t.mode,s=Wo({mode:"visible",children:s.children},l,0,null),c=Wn(c,l,d,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,t.mode&1&&vr(t,e.child,null,d),t.child.memoizedState=Qa(d),t.memoizedState=Ya,c);if(!(t.mode&1))return Ro(e,t,d,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var p=s.dgst;return s=p,c=Error(o(419)),s=$a(c,s,void 0),Ro(e,t,d,s)}if(p=(d&e.childLanes)!==0,Ye||p){if(s=Re,s!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|d)?0:l,l!==0&&l!==c.retryLane&&(c.retryLane=l,jt(e,l),_t(s,e,l,-1))}return dl(),s=$a(Error(o(421))),Ro(e,t,d,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=dv.bind(null,e),l._reactRetry=t,null):(e=c.treeContext,nt=sn(l.nextSibling),tt=t,we=!0,gt=null,e!==null&&(st[at++]=Ut,st[at++]=zt,st[at++]=Mn,Ut=e.id,zt=e.overflow,Mn=t),t=qa(t,s.children),t.flags|=4096,t)}function rd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Pa(e.return,t,r)}function Xa(e,t,r,s,l){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:l}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=s,c.tail=r,c.tailMode=l)}function id(e,t,r){var s=t.pendingProps,l=s.revealOrder,c=s.tail;if(He(e,t,s.children,r),s=_e.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,r,t);else if(e.tag===19)rd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(pe(_e,s),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Co(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Xa(t,!1,l,r,c);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Co(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Xa(t,!0,r,null,c);break;case"together":Xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=vn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=vn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ev(e,t,r){switch(t.tag){case 3:ed(t),gr();break;case 5:yf(t);break;case 1:Ge(t.type)&&mo(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;pe(So,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(pe(_e,_e.current&1),t.flags|=128,null):r&t.child.childLanes?nd(e,t,r):(pe(_e,_e.current&1),e=Ht(e,t,r),e!==null?e.sibling:null);pe(_e,_e.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return id(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(_e,_e.current),s)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,r)}return Ht(e,t,r)}var od,Ja,sd,ad;od=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ja=function(){},sd=function(e,t,r,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,zn(Pt.current);var c=null;switch(r){case"input":l=Ps(e,l),s=Ps(e,s),c=[];break;case"select":l=F({},l,{value:void 0}),s=F({},s,{value:void 0}),c=[];break;case"textarea":l=Ns(e,l),s=Ns(e,s),c=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=fo)}Rs(r,s);var d;r=null;for(k in l)if(!s.hasOwnProperty(k)&&l.hasOwnProperty(k)&&l[k]!=null)if(k==="style"){var p=l[k];for(d in p)p.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(u.hasOwnProperty(k)?c||(c=[]):(c=c||[]).push(k,null));for(k in s){var v=s[k];if(p=l!=null?l[k]:void 0,s.hasOwnProperty(k)&&v!==p&&(v!=null||p!=null))if(k==="style")if(p){for(d in p)!p.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in v)v.hasOwnProperty(d)&&p[d]!==v[d]&&(r||(r={}),r[d]=v[d])}else r||(c||(c=[]),c.push(k,r)),r=v;else k==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,p=p?p.__html:void 0,v!=null&&p!==v&&(c=c||[]).push(k,v)):k==="children"?typeof v!="string"&&typeof v!="number"||(c=c||[]).push(k,""+v):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(u.hasOwnProperty(k)?(v!=null&&k==="onScroll"&&me("scroll",e),c||p===v||(c=[])):(c=c||[]).push(k,v))}r&&(c=c||[]).push("style",r);var k=c;(t.updateQueue=k)&&(t.flags|=4)}},ad=function(e,t,r,s){r!==s&&(t.flags|=4)};function mi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function tv(e,t,r){var s=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ge(t.type)&&po(),ze(t),null;case 3:return s=t.stateNode,_r(),ge(Ke),ge(Fe),ba(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(ul(gt),gt=null))),Ja(e,t),ze(t),null;case 5:Oa(t);var l=zn(ci.current);if(r=t.type,e!==null&&t.stateNode!=null)sd(e,t,r,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return ze(t),null}if(e=zn(Pt.current),wo(t)){s=t.stateNode,r=t.type;var c=t.memoizedProps;switch(s[Tt]=t,s[oi]=c,e=(t.mode&1)!==0,r){case"dialog":me("cancel",s),me("close",s);break;case"iframe":case"object":case"embed":me("load",s);break;case"video":case"audio":for(l=0;l<ni.length;l++)me(ni[l],s);break;case"source":me("error",s);break;case"img":case"image":case"link":me("error",s),me("load",s);break;case"details":me("toggle",s);break;case"input":ju(s,c),me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!c.multiple},me("invalid",s);break;case"textarea":Vu(s,c),me("invalid",s)}Rs(r,c),l=null;for(var d in c)if(c.hasOwnProperty(d)){var p=c[d];d==="children"?typeof p=="string"?s.textContent!==p&&(c.suppressHydrationWarning!==!0&&co(s.textContent,p,e),l=["children",p]):typeof p=="number"&&s.textContent!==""+p&&(c.suppressHydrationWarning!==!0&&co(s.textContent,p,e),l=["children",""+p]):u.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&me("scroll",s)}switch(r){case"input":Bi(s),Hu(s,c,!0);break;case"textarea":Bi(s),Wu(s);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(s.onclick=fo)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ku(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=d.createElement(r,{is:s.is}):(e=d.createElement(r),r==="select"&&(d=e,s.multiple?d.multiple=!0:s.size&&(d.size=s.size))):e=d.createElementNS(e,r),e[Tt]=t,e[oi]=s,od(e,t,!1,!1),t.stateNode=e;e:{switch(d=bs(r,s),r){case"dialog":me("cancel",e),me("close",e),l=s;break;case"iframe":case"object":case"embed":me("load",e),l=s;break;case"video":case"audio":for(l=0;l<ni.length;l++)me(ni[l],e);l=s;break;case"source":me("error",e),l=s;break;case"img":case"image":case"link":me("error",e),me("load",e),l=s;break;case"details":me("toggle",e),l=s;break;case"input":ju(e,s),l=Ps(e,s),me("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=F({},s,{value:void 0}),me("invalid",e);break;case"textarea":Vu(e,s),l=Ns(e,s),me("invalid",e);break;default:l=s}Rs(r,l),p=l;for(c in p)if(p.hasOwnProperty(c)){var v=p[c];c==="style"?Qu(e,v):c==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Gu(e,v)):c==="children"?typeof v=="string"?(r!=="textarea"||v!=="")&&Fr(e,v):typeof v=="number"&&Fr(e,""+v):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?v!=null&&c==="onScroll"&&me("scroll",e):v!=null&&ae(e,c,v,d))}switch(r){case"input":Bi(e),Hu(e,s,!1);break;case"textarea":Bi(e),Wu(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ue(s.value));break;case"select":e.multiple=!!s.multiple,c=s.value,c!=null?tr(e,!!s.multiple,c,!1):s.defaultValue!=null&&tr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=fo)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(r=zn(ci.current),zn(Pt.current),wo(t)){if(s=t.stateNode,r=t.memoizedProps,s[Tt]=t,(c=s.nodeValue!==r)&&(e=tt,e!==null))switch(e.tag){case 3:co(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(s.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Tt]=t,t.stateNode=s}return ze(t),null;case 13:if(ge(_e),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&nt!==null&&t.mode&1&&!(t.flags&128))cf(),gr(),t.flags|=98560,c=!1;else if(c=wo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Tt]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),c=!1}else gt!==null&&(ul(gt),gt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Ne===0&&(Ne=3):dl())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return _r(),Ja(e,t),e===null&&ri(t.stateNode.containerInfo),ze(t),null;case 10:return Ta(t.type._context),ze(t),null;case 17:return Ge(t.type)&&po(),ze(t),null;case 19:if(ge(_e),c=t.memoizedState,c===null)return ze(t),null;if(s=(t.flags&128)!==0,d=c.rendering,d===null)if(s)mi(c,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=Co(e),d!==null){for(t.flags|=128,mi(c,!1),s=d.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)c=r,e=s,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return pe(_e,_e.current&1|2),t.child}e=e.sibling}c.tail!==null&&Te()>Ir&&(t.flags|=128,s=!0,mi(c,!1),t.lanes=4194304)}else{if(!s)if(e=Co(d),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),mi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!we)return ze(t),null}else 2*Te()-c.renderingStartTime>Ir&&r!==1073741824&&(t.flags|=128,s=!0,mi(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(r=c.last,r!==null?r.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Te(),t.sibling=null,r=_e.current,pe(_e,s?r&1|2:r&1),t):(ze(t),null);case 22:case 23:return fl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?rt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function nv(e,t){switch(_a(t),t.tag){case 1:return Ge(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),ge(Ke),ge(Fe),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oa(t),null;case 13:if(ge(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(_e),null;case 4:return _r(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Lo=!1,je=!1,rv=typeof WeakSet=="function"?WeakSet:Set,M=null;function Er(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){ke(e,t,s)}else r.current=null}function Za(e,t,r){try{r()}catch(s){ke(e,t,s)}}var ld=!1;function iv(e,t){if(fa=Zi,e=zc(),ra(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var l=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var d=0,p=-1,v=-1,k=0,P=0,x=e,C=null;t:for(;;){for(var D;x!==r||l!==0&&x.nodeType!==3||(p=d+l),x!==c||s!==0&&x.nodeType!==3||(v=d+s),x.nodeType===3&&(d+=x.nodeValue.length),(D=x.firstChild)!==null;)C=x,x=D;for(;;){if(x===e)break t;if(C===r&&++k===l&&(p=d),C===c&&++P===s&&(v=d),(D=x.nextSibling)!==null)break;x=C,C=x.parentNode}x=D}r=p===-1||v===-1?null:{start:p,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(da={focusedElem:e,selectionRange:r},Zi=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var U=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var z=U.memoizedProps,Pe=U.memoizedState,_=t.stateNode,y=_.getSnapshotBeforeUpdate(t.elementType===t.type?z:vt(t.type,z),Pe);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(N){ke(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return U=ld,ld=!1,U}function gi(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var c=l.destroy;l.destroy=void 0,c!==void 0&&Za(t,r,c)}l=l.next}while(l!==s)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function el(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ud(e){var t=e.alternate;t!==null&&(e.alternate=null,ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[oi],delete t[ga],delete t[jg],delete t[Bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=fo));else if(s!==4&&(e=e.child,e!==null))for(tl(e,t,r),e=e.sibling;e!==null;)tl(e,t,r),e=e.sibling}function nl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(nl(e,t,r),e=e.sibling;e!==null;)nl(e,t,r),e=e.sibling}var Le=null,yt=!1;function dn(e,t,r){for(r=r.child;r!==null;)dd(e,t,r),r=r.sibling}function dd(e,t,r){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Gi,r)}catch{}switch(r.tag){case 5:je||Er(r,t);case 6:var s=Le,l=yt;Le=null,dn(e,t,r),Le=s,yt=l,Le!==null&&(yt?(e=Le,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Le.removeChild(r.stateNode));break;case 18:Le!==null&&(yt?(e=Le,r=r.stateNode,e.nodeType===8?ma(e.parentNode,r):e.nodeType===1&&ma(e,r),Yr(e)):ma(Le,r.stateNode));break;case 4:s=Le,l=yt,Le=r.stateNode.containerInfo,yt=!0,dn(e,t,r),Le=s,yt=l;break;case 0:case 11:case 14:case 15:if(!je&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var c=l,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&Za(r,t,d),l=l.next}while(l!==s)}dn(e,t,r);break;case 1:if(!je&&(Er(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(p){ke(r,t,p)}dn(e,t,r);break;case 21:dn(e,t,r);break;case 22:r.mode&1?(je=(s=je)||r.memoizedState!==null,dn(e,t,r),je=s):dn(e,t,r);break;default:dn(e,t,r)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new rv),t.forEach(function(s){var l=hv.bind(null,e,s);r.has(s)||(r.add(s),s.then(l,l))})}}function wt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];try{var c=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:Le=p.stateNode,yt=!1;break e;case 3:Le=p.stateNode.containerInfo,yt=!0;break e;case 4:Le=p.stateNode.containerInfo,yt=!0;break e}p=p.return}if(Le===null)throw Error(o(160));dd(c,d,l),Le=null,yt=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(k){ke(l,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pd(t,e),t=t.sibling}function pd(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),At(e),s&4){try{gi(3,e,e.return),Do(3,e)}catch(z){ke(e,e.return,z)}try{gi(5,e,e.return)}catch(z){ke(e,e.return,z)}}break;case 1:wt(t,e),At(e),s&512&&r!==null&&Er(r,r.return);break;case 5:if(wt(t,e),At(e),s&512&&r!==null&&Er(r,r.return),e.flags&32){var l=e.stateNode;try{Fr(l,"")}catch(z){ke(e,e.return,z)}}if(s&4&&(l=e.stateNode,l!=null)){var c=e.memoizedProps,d=r!==null?r.memoizedProps:c,p=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{p==="input"&&c.type==="radio"&&c.name!=null&&Bu(l,c),bs(p,d);var k=bs(p,c);for(d=0;d<v.length;d+=2){var P=v[d],x=v[d+1];P==="style"?Qu(l,x):P==="dangerouslySetInnerHTML"?Gu(l,x):P==="children"?Fr(l,x):ae(l,P,x,k)}switch(p){case"input":xs(l,c);break;case"textarea":$u(l,c);break;case"select":var C=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!c.multiple;var D=c.value;D!=null?tr(l,!!c.multiple,D,!1):C!==!!c.multiple&&(c.defaultValue!=null?tr(l,!!c.multiple,c.defaultValue,!0):tr(l,!!c.multiple,c.multiple?[]:"",!1))}l[oi]=c}catch(z){ke(e,e.return,z)}}break;case 6:if(wt(t,e),At(e),s&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,c=e.memoizedProps;try{l.nodeValue=c}catch(z){ke(e,e.return,z)}}break;case 3:if(wt(t,e),At(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(z){ke(e,e.return,z)}break;case 4:wt(t,e),At(e);break;case 13:wt(t,e),At(e),l=e.child,l.flags&8192&&(c=l.memoizedState!==null,l.stateNode.isHidden=c,!c||l.alternate!==null&&l.alternate.memoizedState!==null||(ol=Te())),s&4&&hd(e);break;case 22:if(P=r!==null&&r.memoizedState!==null,e.mode&1?(je=(k=je)||P,wt(t,e),je=k):wt(t,e),At(e),s&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!P&&e.mode&1)for(M=e,P=e.child;P!==null;){for(x=M=P;M!==null;){switch(C=M,D=C.child,C.tag){case 0:case 11:case 14:case 15:gi(4,C,C.return);break;case 1:Er(C,C.return);var U=C.stateNode;if(typeof U.componentWillUnmount=="function"){s=C,r=C.return;try{t=s,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(z){ke(s,r,z)}}break;case 5:Er(C,C.return);break;case 22:if(C.memoizedState!==null){vd(x);continue}}D!==null?(D.return=C,M=D):vd(x)}P=P.sibling}e:for(P=null,x=e;;){if(x.tag===5){if(P===null){P=x;try{l=x.stateNode,k?(c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(p=x.stateNode,v=x.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,p.style.display=Yu("display",d))}catch(z){ke(e,e.return,z)}}}else if(x.tag===6){if(P===null)try{x.stateNode.nodeValue=k?"":x.memoizedProps}catch(z){ke(e,e.return,z)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;P===x&&(P=null),x=x.return}P===x&&(P=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:wt(t,e),At(e),s&4&&hd(e);break;case 21:break;default:wt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(cd(r)){var s=r;break e}r=r.return}throw Error(o(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(Fr(l,""),s.flags&=-33);var c=fd(e);nl(e,c,l);break;case 3:case 4:var d=s.stateNode.containerInfo,p=fd(e);tl(e,p,d);break;default:throw Error(o(161))}}catch(v){ke(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ov(e,t,r){M=e,md(e)}function md(e,t,r){for(var s=(e.mode&1)!==0;M!==null;){var l=M,c=l.child;if(l.tag===22&&s){var d=l.memoizedState!==null||Lo;if(!d){var p=l.alternate,v=p!==null&&p.memoizedState!==null||je;p=Lo;var k=je;if(Lo=d,(je=v)&&!k)for(M=l;M!==null;)d=M,v=d.child,d.tag===22&&d.memoizedState!==null?yd(l):v!==null?(v.return=d,M=v):yd(l);for(;c!==null;)M=c,md(c),c=c.sibling;M=l,Lo=p,je=k}gd(e)}else l.subtreeFlags&8772&&c!==null?(c.return=l,M=c):gd(e)}}function gd(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Do(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!je)if(r===null)s.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:vt(t.type,r.memoizedProps);s.componentDidUpdate(l,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&vf(t,c,s);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}vf(t,d,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src&&(r.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var x=P.dehydrated;x!==null&&Yr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}je||t.flags&512&&el(t)}catch(C){ke(t,t.return,C)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function vd(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function yd(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Do(4,t)}catch(v){ke(t,r,v)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(v){ke(t,l,v)}}var c=t.return;try{el(t)}catch(v){ke(t,c,v)}break;case 5:var d=t.return;try{el(t)}catch(v){ke(t,d,v)}}}catch(v){ke(t,t.return,v)}if(t===e){M=null;break}var p=t.sibling;if(p!==null){p.return=t.return,M=p;break}M=t.return}}var sv=Math.ceil,Mo=le.ReactCurrentDispatcher,rl=le.ReactCurrentOwner,ct=le.ReactCurrentBatchConfig,re=0,Re=null,xe=null,De=0,rt=0,kr=an(0),Ne=0,vi=null,Bn=0,Fo=0,il=0,yi=null,Qe=null,ol=0,Ir=1/0,Vt=null,Uo=!1,sl=null,hn=null,zo=!1,pn=null,jo=0,wi=0,al=null,Bo=-1,Ho=0;function Ve(){return re&6?Te():Bo!==-1?Bo:Bo=Te()}function mn(e){return e.mode&1?re&2&&De!==0?De&-De:Vg.transition!==null?(Ho===0&&(Ho=cc()),Ho):(e=ce,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e):1}function _t(e,t,r,s){if(50<wi)throw wi=0,al=null,Error(o(185));Vr(e,r,s),(!(re&2)||e!==Re)&&(e===Re&&(!(re&2)&&(Fo|=r),Ne===4&&gn(e,De)),qe(e,s),r===1&&re===0&&!(t.mode&1)&&(Ir=Te()+500,go&&un()))}function qe(e,t){var r=e.callbackNode;Vm(e,t);var s=qi(e,e===Re?De:0);if(s===0)r!==null&&ac(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&ac(r),t===1)e.tag===0?Hg(_d.bind(null,e)):of(_d.bind(null,e)),Ug(function(){!(re&6)&&un()}),r=null;else{switch(fc(s)){case 1:r=js;break;case 4:r=lc;break;case 16:r=Ki;break;case 536870912:r=uc;break;default:r=Ki}r=xd(r,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function wd(e,t){if(Bo=-1,Ho=0,re&6)throw Error(o(327));var r=e.callbackNode;if(Cr()&&e.callbackNode!==r)return null;var s=qi(e,e===Re?De:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Vo(e,s);else{t=s;var l=re;re|=2;var c=Ed();(Re!==e||De!==t)&&(Vt=null,Ir=Te()+500,Vn(e,t));do try{uv();break}catch(p){Sd(e,p)}while(!0);Ca(),Mo.current=c,re=l,xe!==null?t=0:(Re=null,De=0,t=Ne)}if(t!==0){if(t===2&&(l=Bs(e),l!==0&&(s=l,t=ll(e,l))),t===1)throw r=vi,Vn(e,0),gn(e,s),qe(e,Te()),r;if(t===6)gn(e,s);else{if(l=e.current.alternate,!(s&30)&&!av(l)&&(t=Vo(e,s),t===2&&(c=Bs(e),c!==0&&(s=c,t=ll(e,c))),t===1))throw r=vi,Vn(e,0),gn(e,s),qe(e,Te()),r;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:$n(e,Qe,Vt);break;case 3:if(gn(e,s),(s&130023424)===s&&(t=ol+500-Te(),10<t)){if(qi(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){Ve(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=pa($n.bind(null,e,Qe,Vt),t);break}$n(e,Qe,Vt);break;case 4:if(gn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var d=31-pt(s);c=1<<d,d=t[d],d>l&&(l=d),s&=~c}if(s=l,s=Te()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*sv(s/1960))-s,10<s){e.timeoutHandle=pa($n.bind(null,e,Qe,Vt),s);break}$n(e,Qe,Vt);break;case 5:$n(e,Qe,Vt);break;default:throw Error(o(329))}}}return qe(e,Te()),e.callbackNode===r?wd.bind(null,e):null}function ll(e,t){var r=yi;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Vo(e,t),e!==2&&(t=Qe,Qe=r,t!==null&&ul(t)),e}function ul(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function av(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var l=r[s],c=l.getSnapshot;l=l.value;try{if(!mt(c(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~il,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-pt(t),s=1<<r;e[r]=-1,t&=~s}}function _d(e){if(re&6)throw Error(o(327));Cr();var t=qi(e,0);if(!(t&1))return qe(e,Te()),null;var r=Vo(e,t);if(e.tag!==0&&r===2){var s=Bs(e);s!==0&&(t=s,r=ll(e,s))}if(r===1)throw r=vi,Vn(e,0),gn(e,t),qe(e,Te()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,Qe,Vt),qe(e,Te()),null}function cl(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(Ir=Te()+500,go&&un())}}function Hn(e){pn!==null&&pn.tag===0&&!(re&6)&&Cr();var t=re;re|=1;var r=ct.transition,s=ce;try{if(ct.transition=null,ce=1,e)return e()}finally{ce=s,ct.transition=r,re=t,!(re&6)&&un()}}function fl(){rt=kr.current,ge(kr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Fg(r)),xe!==null)for(r=xe.return;r!==null;){var s=r;switch(_a(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&po();break;case 3:_r(),ge(Ke),ge(Fe),ba();break;case 5:Oa(s);break;case 4:_r();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:Ta(s.type._context);break;case 22:case 23:fl()}r=r.return}if(Re=e,xe=e=vn(e.current,null),De=rt=t,Ne=0,vi=null,il=Fo=Bn=0,Qe=yi=null,Un!==null){for(t=0;t<Un.length;t++)if(r=Un[t],s=r.interleaved,s!==null){r.interleaved=null;var l=s.next,c=r.pending;if(c!==null){var d=c.next;c.next=l,s.next=d}r.pending=s}Un=null}return e}function Sd(e,t){do{var r=xe;try{if(Ca(),To.current=No,Po){for(var s=Se.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}Po=!1}if(jn=0,Oe=Ae=Se=null,fi=!1,di=0,rl.current=null,r===null||r.return===null){Ne=1,vi=t,xe=null;break}e:{var c=e,d=r.return,p=r,v=t;if(t=De,p.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=v,P=p,x=P.tag;if(!(P.mode&1)&&(x===0||x===11||x===15)){var C=P.alternate;C?(P.updateQueue=C.updateQueue,P.memoizedState=C.memoizedState,P.lanes=C.lanes):(P.updateQueue=null,P.memoizedState=null)}var D=Kf(d);if(D!==null){D.flags&=-257,Gf(D,d,p,c,t),D.mode&1&&Wf(c,k,t),t=D,v=k;var U=t.updateQueue;if(U===null){var z=new Set;z.add(v),t.updateQueue=z}else U.add(v);break e}else{if(!(t&1)){Wf(c,k,t),dl();break e}v=Error(o(426))}}else if(we&&p.mode&1){var Pe=Kf(d);if(Pe!==null){!(Pe.flags&65536)&&(Pe.flags|=256),Gf(Pe,d,p,c,t),ka(Sr(v,p));break e}}c=v=Sr(v,p),Ne!==4&&(Ne=2),yi===null?yi=[c]:yi.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var _=Vf(c,v,t);gf(c,_);break e;case 1:p=v;var y=c.type,S=c.stateNode;if(!(c.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(hn===null||!hn.has(S)))){c.flags|=65536,t&=-t,c.lanes|=t;var N=$f(c,p,t);gf(c,N);break e}}c=c.return}while(c!==null)}Id(r)}catch(j){t=j,xe===r&&r!==null&&(xe=r=r.return);continue}break}while(!0)}function Ed(){var e=Mo.current;return Mo.current=No,e===null?No:e}function dl(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Re===null||!(Bn&268435455)&&!(Fo&268435455)||gn(Re,De)}function Vo(e,t){var r=re;re|=2;var s=Ed();(Re!==e||De!==t)&&(Vt=null,Vn(e,t));do try{lv();break}catch(l){Sd(e,l)}while(!0);if(Ca(),re=r,Mo.current=s,xe!==null)throw Error(o(261));return Re=null,De=0,Ne}function lv(){for(;xe!==null;)kd(xe)}function uv(){for(;xe!==null&&!Lm();)kd(xe)}function kd(e){var t=Pd(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Id(e):xe=t,rl.current=null}function Id(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=nv(r,t),r!==null){r.flags&=32767,xe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,xe=null;return}}else if(r=tv(r,t,rt),r!==null){xe=r;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ne===0&&(Ne=5)}function $n(e,t,r){var s=ce,l=ct.transition;try{ct.transition=null,ce=1,cv(e,t,r,s)}finally{ct.transition=l,ce=s}return null}function cv(e,t,r,s){do Cr();while(pn!==null);if(re&6)throw Error(o(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if($m(e,c),e===Re&&(xe=Re=null,De=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||zo||(zo=!0,xd(Ki,function(){return Cr(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=ct.transition,ct.transition=null;var d=ce;ce=1;var p=re;re|=4,rl.current=null,iv(e,r),pd(r,e),Ng(da),Zi=!!fa,da=fa=null,e.current=r,ov(r),Dm(),re=p,ce=d,ct.transition=c}else e.current=r;if(zo&&(zo=!1,pn=e,jo=l),c=e.pendingLanes,c===0&&(hn=null),Um(r.stateNode),qe(e,Te()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],s(l.value,{componentStack:l.stack,digest:l.digest});if(Uo)throw Uo=!1,e=sl,sl=null,e;return jo&1&&e.tag!==0&&Cr(),c=e.pendingLanes,c&1?e===al?wi++:(wi=0,al=e):wi=0,un(),null}function Cr(){if(pn!==null){var e=fc(jo),t=ct.transition,r=ce;try{if(ct.transition=null,ce=16>e?16:e,pn===null)var s=!1;else{if(e=pn,pn=null,jo=0,re&6)throw Error(o(331));var l=re;for(re|=4,M=e.current;M!==null;){var c=M,d=c.child;if(M.flags&16){var p=c.deletions;if(p!==null){for(var v=0;v<p.length;v++){var k=p[v];for(M=k;M!==null;){var P=M;switch(P.tag){case 0:case 11:case 15:gi(8,P,c)}var x=P.child;if(x!==null)x.return=P,M=x;else for(;M!==null;){P=M;var C=P.sibling,D=P.return;if(ud(P),P===k){M=null;break}if(C!==null){C.return=D,M=C;break}M=D}}}var U=c.alternate;if(U!==null){var z=U.child;if(z!==null){U.child=null;do{var Pe=z.sibling;z.sibling=null,z=Pe}while(z!==null)}}M=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,M=d;else e:for(;M!==null;){if(c=M,c.flags&2048)switch(c.tag){case 0:case 11:case 15:gi(9,c,c.return)}var _=c.sibling;if(_!==null){_.return=c.return,M=_;break e}M=c.return}}var y=e.current;for(M=y;M!==null;){d=M;var S=d.child;if(d.subtreeFlags&2064&&S!==null)S.return=d,M=S;else e:for(d=y;M!==null;){if(p=M,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:Do(9,p)}}catch(j){ke(p,p.return,j)}if(p===d){M=null;break e}var N=p.sibling;if(N!==null){N.return=p.return,M=N;break e}M=p.return}}if(re=l,un(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Gi,e)}catch{}s=!0}return s}finally{ce=r,ct.transition=t}}return!1}function Cd(e,t,r){t=Sr(r,t),t=Vf(e,t,1),e=fn(e,t,1),t=Ve(),e!==null&&(Vr(e,1,t),qe(e,t))}function ke(e,t,r){if(e.tag===3)Cd(e,e,r);else for(;t!==null;){if(t.tag===3){Cd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(hn===null||!hn.has(s))){e=Sr(r,e),e=$f(t,e,1),t=fn(t,e,1),e=Ve(),t!==null&&(Vr(t,1,e),qe(t,e));break}}t=t.return}}function fv(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&r,Re===e&&(De&r)===r&&(Ne===4||Ne===3&&(De&130023424)===De&&500>Te()-ol?Vn(e,0):il|=r),qe(e,t)}function Td(e,t){t===0&&(e.mode&1?(t=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):t=1);var r=Ve();e=jt(e,t),e!==null&&(Vr(e,t,r),qe(e,r))}function dv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Td(e,r)}function hv(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),Td(e,r)}var Pd;Pd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ye=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ye=!1,ev(e,t,r);Ye=!!(e.flags&131072)}else Ye=!1,we&&t.flags&1048576&&sf(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;bo(e,t),e=t.pendingProps;var l=hr(t,Fe.current);wr(t,r),l=Ma(null,t,s,e,l,r);var c=Fa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(s)?(c=!0,mo(t)):c=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Aa(t),l.updater=Oo,t.stateNode=l,l._reactInternals=t,Va(t,s,e,r),t=Ga(null,t,s,!0,c,r)):(t.tag=0,we&&c&&wa(t),He(null,t,l,r),t=t.child),t;case 16:s=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=mv(s),e=vt(s,e),l){case 0:t=Ka(null,t,s,e,r);break e;case 1:t=Zf(null,t,s,e,r);break e;case 11:t=Yf(null,t,s,e,r);break e;case 14:t=Qf(null,t,s,vt(s.type,e),r);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:vt(s,l),Ka(e,t,s,l,r);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:vt(s,l),Zf(e,t,s,l,r);case 3:e:{if(ed(t),e===null)throw Error(o(387));s=t.pendingProps,c=t.memoizedState,l=c.element,mf(e,t),Io(t,s,null,r);var d=t.memoizedState;if(s=d.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){l=Sr(Error(o(423)),t),t=td(e,t,s,r,l);break e}else if(s!==l){l=Sr(Error(o(424)),t),t=td(e,t,s,r,l);break e}else for(nt=sn(t.stateNode.containerInfo.firstChild),tt=t,we=!0,gt=null,r=hf(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),s===l){t=Ht(e,t,r);break e}He(e,t,s,r)}t=t.child}return t;case 5:return yf(t),e===null&&Ea(t),s=t.type,l=t.pendingProps,c=e!==null?e.memoizedProps:null,d=l.children,ha(s,l)?d=null:c!==null&&ha(s,c)&&(t.flags|=32),Jf(e,t),He(e,t,d,r),t.child;case 6:return e===null&&Ea(t),null;case 13:return nd(e,t,r);case 4:return Na(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=vr(t,null,s,r):He(e,t,s,r),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:vt(s,l),Yf(e,t,s,l,r);case 7:return He(e,t,t.pendingProps,r),t.child;case 8:return He(e,t,t.pendingProps.children,r),t.child;case 12:return He(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,c=t.memoizedProps,d=l.value,pe(So,s._currentValue),s._currentValue=d,c!==null)if(mt(c.value,d)){if(c.children===l.children&&!Ke.current){t=Ht(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var p=c.dependencies;if(p!==null){d=c.child;for(var v=p.firstContext;v!==null;){if(v.context===s){if(c.tag===1){v=Bt(-1,r&-r),v.tag=2;var k=c.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?v.next=v:(v.next=P.next,P.next=v),k.pending=v}}c.lanes|=r,v=c.alternate,v!==null&&(v.lanes|=r),Pa(c.return,r,t),p.lanes|=r;break}v=v.next}}else if(c.tag===10)d=c.type===t.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(o(341));d.lanes|=r,p=d.alternate,p!==null&&(p.lanes|=r),Pa(d,r,t),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===t){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}He(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,wr(t,r),l=lt(l),s=s(l),t.flags|=1,He(e,t,s,r),t.child;case 14:return s=t.type,l=vt(s,t.pendingProps),l=vt(s.type,l),Qf(e,t,s,l,r);case 15:return qf(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:vt(s,l),bo(e,t),t.tag=1,Ge(s)?(e=!0,mo(t)):e=!1,wr(t,r),Bf(t,s,l),Va(t,s,l,r),Ga(null,t,s,!0,e,r);case 19:return id(e,t,r);case 22:return Xf(e,t,r)}throw Error(o(156,t.tag))};function xd(e,t){return sc(e,t)}function pv(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,r,s){return new pv(e,t,r,s)}function hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mv(e){if(typeof e=="function")return hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kt)return 11;if(e===It)return 14}return 2}function vn(e,t){var r=e.alternate;return r===null?(r=ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function $o(e,t,r,s,l,c){var d=2;if(s=e,typeof e=="function")hl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ce:return Wn(r.children,l,c,t);case Me:d=8,l|=8;break;case ot:return e=ft(12,r,t,l|2),e.elementType=ot,e.lanes=c,e;case Je:return e=ft(13,r,t,l),e.elementType=Je,e.lanes=c,e;case ht:return e=ft(19,r,t,l),e.elementType=ht,e.lanes=c,e;case Ee:return Wo(r,l,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dt:d=10;break e;case Rn:d=9;break e;case kt:d=11;break e;case It:d=14;break e;case We:d=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=ft(d,r,t,l),t.elementType=e,t.type=s,t.lanes=c,t}function Wn(e,t,r,s){return e=ft(7,e,s,t),e.lanes=r,e}function Wo(e,t,r,s){return e=ft(22,e,s,t),e.elementType=Ee,e.lanes=r,e.stateNode={isHidden:!1},e}function pl(e,t,r){return e=ft(6,e,null,t),e.lanes=r,e}function ml(e,t,r){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gv(e,t,r,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function gl(e,t,r,s,l,c,d,p,v){return e=new gv(e,t,r,p,v),t===1?(t=1,c===!0&&(t|=8)):t=0,c=ft(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Aa(c),e}function vv(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Ad(e){if(!e)return ln;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(Ge(r))return nf(e,r,t)}return t}function Nd(e,t,r,s,l,c,d,p,v){return e=gl(r,s,!0,e,l,c,d,p,v),e.context=Ad(null),r=e.current,s=Ve(),l=mn(r),c=Bt(s,l),c.callback=t??null,fn(r,c,l),e.current.lanes=l,Vr(e,l,s),qe(e,s),e}function Ko(e,t,r,s){var l=t.current,c=Ve(),d=mn(l);return r=Ad(r),t.context===null?t.context=r:t.pendingContext=r,t=Bt(c,d),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=fn(l,t,d),e!==null&&(_t(e,l,d,c),ko(e,l,d)),d}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function vl(e,t){Od(e,t),(e=e.alternate)&&Od(e,t)}function yv(){return null}var Rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function yl(e){this._internalRoot=e}Yo.prototype.render=yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ko(e,t,null,null)},Yo.prototype.unmount=yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){Ko(null,e,null,null)}),t[Mt]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nn.length&&t!==0&&t<nn[r].priority;r++);nn.splice(r,0,e),r===0&&vc(e)}};function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bd(){}function wv(e,t,r,s,l){if(l){if(typeof s=="function"){var c=s;s=function(){var k=Go(d);c.call(k)}}var d=Nd(t,s,e,0,null,!1,!1,"",bd);return e._reactRootContainer=d,e[Mt]=d.current,ri(e.nodeType===8?e.parentNode:e),Hn(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var p=s;s=function(){var k=Go(v);p.call(k)}}var v=gl(e,0,!1,null,null,!1,!1,"",bd);return e._reactRootContainer=v,e[Mt]=v.current,ri(e.nodeType===8?e.parentNode:e),Hn(function(){Ko(t,v,r,s)}),v}function qo(e,t,r,s,l){var c=r._reactRootContainer;if(c){var d=c;if(typeof l=="function"){var p=l;l=function(){var v=Go(d);p.call(v)}}Ko(t,d,e,l)}else d=wv(r,t,e,l,s);return Go(d)}dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Hr(t.pendingLanes);r!==0&&(Vs(t,r|1),qe(t,Te()),!(re&6)&&(Ir=Te()+500,un()))}break;case 13:Hn(function(){var s=jt(e,1);if(s!==null){var l=Ve();_t(s,e,1,l)}}),vl(e,1)}},$s=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var r=Ve();_t(t,e,134217728,r)}vl(e,134217728)}},hc=function(e){if(e.tag===13){var t=mn(e),r=jt(e,t);if(r!==null){var s=Ve();_t(r,e,t,s)}vl(e,t)}},pc=function(){return ce},mc=function(e,t){var r=ce;try{return ce=e,t()}finally{ce=r}},Ms=function(e,t,r){switch(t){case"input":if(xs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var l=ho(s);if(!l)throw Error(o(90));zu(s),xs(s,l)}}}break;case"textarea":$u(e,r);break;case"select":t=r.value,t!=null&&tr(e,!!r.multiple,t,!1)}},Zu=cl,ec=Hn;var _v={usingClientEntryPoint:!1,Events:[si,fr,ho,Xu,Ju,cl]},_i={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sv={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Gi=Xo.inject(Sv),Ct=Xo}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v,Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wl(t))throw Error(o(200));return vv(e,t,null,r)},Xe.createRoot=function(e,t){if(!wl(e))throw Error(o(299));var r=!1,s="",l=Rd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=gl(e,1,!1,null,null,r,!1,s,l),e[Mt]=t.current,ri(e.nodeType===8?e.parentNode:e),new yl(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return Hn(e)},Xe.hydrate=function(e,t,r){if(!Qo(t))throw Error(o(200));return qo(null,e,t,!0,r)},Xe.hydrateRoot=function(e,t,r){if(!wl(e))throw Error(o(405));var s=r!=null&&r.hydratedSources||null,l=!1,c="",d=Rd;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=Nd(t,null,e,1,r??null,l,!1,c,d),e[Mt]=t.current,ri(e),s)for(e=0;e<s.length;e++)r=s[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Yo(t)},Xe.render=function(e,t,r){if(!Qo(t))throw Error(o(200));return qo(null,e,t,!1,r)},Xe.unmountComponentAtNode=function(e){if(!Qo(e))throw Error(o(40));return e._reactRootContainer?(Hn(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1},Xe.unstable_batchedUpdates=cl,Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Qo(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return qo(e,t,r,!1,s)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Bd;function Av(){if(Bd)return El.exports;Bd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),El.exports=xv(),El.exports}var Hd;function Nv(){if(Hd)return Jo;Hd=1;var i=Av();return Jo.createRoot=i.createRoot,Jo.hydrateRoot=i.hydrateRoot,Jo}var Ov=Nv();const Rv=pu(Ov);var Vd={};/**
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
 */const Xh=function(i){const n=[];let o=0;for(let a=0;a<i.length;a++){let u=i.charCodeAt(a);u<128?n[o++]=u:u<2048?(n[o++]=u>>6|192,n[o++]=u&63|128):(u&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(u=65536+((u&1023)<<10)+(i.charCodeAt(++a)&1023),n[o++]=u>>18|240,n[o++]=u>>12&63|128,n[o++]=u>>6&63|128,n[o++]=u&63|128):(n[o++]=u>>12|224,n[o++]=u>>6&63|128,n[o++]=u&63|128)}return n},bv=function(i){const n=[];let o=0,a=0;for(;o<i.length;){const u=i[o++];if(u<128)n[a++]=String.fromCharCode(u);else if(u>191&&u<224){const f=i[o++];n[a++]=String.fromCharCode((u&31)<<6|f&63)}else if(u>239&&u<365){const f=i[o++],h=i[o++],m=i[o++],g=((u&7)<<18|(f&63)<<12|(h&63)<<6|m&63)-65536;n[a++]=String.fromCharCode(55296+(g>>10)),n[a++]=String.fromCharCode(56320+(g&1023))}else{const f=i[o++],h=i[o++];n[a++]=String.fromCharCode((u&15)<<12|(f&63)<<6|h&63)}}return n.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,n){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let u=0;u<i.length;u+=3){const f=i[u],h=u+1<i.length,m=h?i[u+1]:0,g=u+2<i.length,E=g?i[u+2]:0,I=f>>2,O=(f&3)<<4|m>>4;let R=(m&15)<<2|E>>6,b=E&63;g||(b=64,h||(R=64)),a.push(o[I],o[O],o[R],o[b])}return a.join("")},encodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(i):this.encodeByteArray(Xh(i),n)},decodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(i):bv(this.decodeStringToByteArray(i,n))},decodeStringToByteArray(i,n){this.init_();const o=n?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let u=0;u<i.length;){const f=o[i.charAt(u++)],m=u<i.length?o[i.charAt(u)]:0;++u;const E=u<i.length?o[i.charAt(u)]:64;++u;const O=u<i.length?o[i.charAt(u)]:64;if(++u,f==null||m==null||E==null||O==null)throw new Lv;const R=f<<2|m>>4;if(a.push(R),E!==64){const b=m<<4&240|E>>2;if(a.push(b),O!==64){const X=E<<6&192|O;a.push(X)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Lv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dv=function(i){const n=Xh(i);return Jh.encodeByteArray(n,!0)},Zh=function(i){return Dv(i).replace(/\./g,"")},ep=function(i){try{return Jh.decodeString(i,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */const Fv=()=>Mv().__FIREBASE_DEFAULTS__,Uv=()=>{if(typeof process>"u"||typeof Vd>"u")return;const i=Vd.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zv=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=i&&ep(i[1]);return n&&JSON.parse(n)},vu=()=>{try{return Fv()||Uv()||zv()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},jv=i=>{var n,o;return(o=(n=vu())===null||n===void 0?void 0:n.emulatorHosts)===null||o===void 0?void 0:o[i]},tp=()=>{var i;return(i=vu())===null||i===void 0?void 0:i.config},np=i=>{var n;return(n=vu())===null||n===void 0?void 0:n[`_${i}`]};/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Vv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $v(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kv(){const i=$e();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Gv(){try{return typeof indexedDB=="object"}catch{return!1}}function Yv(){return new Promise((i,n)=>{try{let o=!0;const a="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(a);u.onsuccess=()=>{u.result.close(),o||self.indexedDB.deleteDatabase(a),i(!0)},u.onupgradeneeded=()=>{o=!1},u.onerror=()=>{var f;n(((f=u.error)===null||f===void 0?void 0:f.message)||"")}}catch(o){n(o)}})}/**
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
 */const Qv="FirebaseError";class Nn extends Error{constructor(n,o,a){super(o),this.code=n,this.customData=a,this.name=Qv,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(n,o,a){this.service=n,this.serviceName=o,this.errors=a}create(n,...o){const a=o[0]||{},u=`${this.service}/${n}`,f=this.errors[n],h=f?qv(f,a):"Error",m=`${this.serviceName}: ${h} (${u}).`;return new Nn(u,m,a)}}function qv(i,n){return i.replace(Xv,(o,a)=>{const u=n[a];return u!=null?String(u):`<${a}?>`})}const Xv=/\{\$([^}]+)}/g;function Jv(i){for(const n in i)if(Object.prototype.hasOwnProperty.call(i,n))return!1;return!0}function ls(i,n){if(i===n)return!0;const o=Object.keys(i),a=Object.keys(n);for(const u of o){if(!a.includes(u))return!1;const f=i[u],h=n[u];if($d(f)&&$d(h)){if(!ls(f,h))return!1}else if(f!==h)return!1}for(const u of a)if(!o.includes(u))return!1;return!0}function $d(i){return i!==null&&typeof i=="object"}/**
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
 */function On(i){return i&&i._delegate?i._delegate:i}class br{constructor(n,o,a){this.name=n,this.instanceFactory=o,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 */const Kn="[DEFAULT]";/**
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
 */class ny{constructor(n,o){this.name=n,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const o=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(o)){const a=new Bv;if(this.instancesDeferred.set(o,a),this.isInitialized(o)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:o});u&&a.resolve(u)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(n){var o;const a=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),u=(o=n==null?void 0:n.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(f){if(u)return null;throw f}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(iy(n))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);try{const f=this.getOrInitializeService({instanceIdentifier:u});a.resolve(f)}catch{}}}}clearInstance(n=Kn){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...n.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=Kn){return this.instances.has(n)}getOptions(n=Kn){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:o={}}=n,a=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:a,options:o});for(const[f,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(f);a===m&&h.resolve(u)}return u}onInit(n,o){var a;const u=this.normalizeInstanceIdentifier(o),f=(a=this.onInitCallbacks.get(u))!==null&&a!==void 0?a:new Set;f.add(n),this.onInitCallbacks.set(u,f);const h=this.instances.get(u);return h&&n(h,u),()=>{f.delete(n)}}invokeOnInitCallbacks(n,o){const a=this.onInitCallbacks.get(o);if(a)for(const u of a)try{u(n,o)}catch{}}getOrInitializeService({instanceIdentifier:n,options:o={}}){let a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:ry(n),options:o}),this.instances.set(n,a),this.instancesOptions.set(n,o),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch{}return a||null}normalizeInstanceIdentifier(n=Kn){return this.component?this.component.multipleInstances?n:Kn:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ry(i){return i===Kn?void 0:i}function iy(i){return i.instantiationMode==="EAGER"}/**
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
 */var fe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(fe||(fe={}));const sy={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ay=fe.INFO,ly={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},uy=(i,n,...o)=>{if(n<i.logLevel)return;const a=new Date().toISOString(),u=ly[n];if(u)console[u](`[${a}]  ${i.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class rp{constructor(n){this.name=n,this._logLevel=ay,this._logHandler=uy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in fe))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?sy[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...n),this._logHandler(this,fe.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...n),this._logHandler(this,fe.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...n),this._logHandler(this,fe.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...n),this._logHandler(this,fe.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...n),this._logHandler(this,fe.ERROR,...n)}}const cy=(i,n)=>n.some(o=>i instanceof o);let Wd,Kd;function fy(){return Wd||(Wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dy(){return Kd||(Kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,Bl=new WeakMap,op=new WeakMap,Tl=new WeakMap,yu=new WeakMap;function hy(i){const n=new Promise((o,a)=>{const u=()=>{i.removeEventListener("success",f),i.removeEventListener("error",h)},f=()=>{o(In(i.result)),u()},h=()=>{a(i.error),u()};i.addEventListener("success",f),i.addEventListener("error",h)});return n.then(o=>{o instanceof IDBCursor&&ip.set(o,i)}).catch(()=>{}),yu.set(n,i),n}function py(i){if(Bl.has(i))return;const n=new Promise((o,a)=>{const u=()=>{i.removeEventListener("complete",f),i.removeEventListener("error",h),i.removeEventListener("abort",h)},f=()=>{o(),u()},h=()=>{a(i.error||new DOMException("AbortError","AbortError")),u()};i.addEventListener("complete",f),i.addEventListener("error",h),i.addEventListener("abort",h)});Bl.set(i,n)}let Hl={get(i,n,o){if(i instanceof IDBTransaction){if(n==="done")return Bl.get(i);if(n==="objectStoreNames")return i.objectStoreNames||op.get(i);if(n==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return In(i[n])},set(i,n,o){return i[n]=o,!0},has(i,n){return i instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in i}};function my(i){Hl=i(Hl)}function gy(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...o){const a=i.call(Pl(this),n,...o);return op.set(a,n.sort?n.sort():[n]),In(a)}:dy().includes(i)?function(...n){return i.apply(Pl(this),n),In(ip.get(this))}:function(...n){return In(i.apply(Pl(this),n))}}function vy(i){return typeof i=="function"?gy(i):(i instanceof IDBTransaction&&py(i),cy(i,fy())?new Proxy(i,Hl):i)}function In(i){if(i instanceof IDBRequest)return hy(i);if(Tl.has(i))return Tl.get(i);const n=vy(i);return n!==i&&(Tl.set(i,n),yu.set(n,i)),n}const Pl=i=>yu.get(i);function yy(i,n,{blocked:o,upgrade:a,blocking:u,terminated:f}={}){const h=indexedDB.open(i,n),m=In(h);return a&&h.addEventListener("upgradeneeded",g=>{a(In(h.result),g.oldVersion,g.newVersion,In(h.transaction),g)}),o&&h.addEventListener("blocked",g=>o(g.oldVersion,g.newVersion,g)),m.then(g=>{f&&g.addEventListener("close",()=>f()),u&&g.addEventListener("versionchange",E=>u(E.oldVersion,E.newVersion,E))}).catch(()=>{}),m}const wy=["get","getKey","getAll","getAllKeys","count"],_y=["put","add","delete","clear"],xl=new Map;function Gd(i,n){if(!(i instanceof IDBDatabase&&!(n in i)&&typeof n=="string"))return;if(xl.get(n))return xl.get(n);const o=n.replace(/FromIndex$/,""),a=n!==o,u=_y.includes(o);if(!(o in(a?IDBIndex:IDBObjectStore).prototype)||!(u||wy.includes(o)))return;const f=async function(h,...m){const g=this.transaction(h,u?"readwrite":"readonly");let E=g.store;return a&&(E=E.index(m.shift())),(await Promise.all([E[o](...m),u&&g.done]))[0]};return xl.set(n,f),f}my(i=>({...i,get:(n,o,a)=>Gd(n,o)||i.get(n,o,a),has:(n,o)=>!!Gd(n,o)||i.has(n,o)}));/**
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
 */class Sy{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(Ey(o)){const a=o.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(o=>o).join(" ")}}function Ey(i){const n=i.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Vl="@firebase/app",Yd="0.10.16";/**
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
 */const Yt=new rp("@firebase/app"),ky="@firebase/app-compat",Iy="@firebase/analytics-compat",Cy="@firebase/analytics",Ty="@firebase/app-check-compat",Py="@firebase/app-check",xy="@firebase/auth",Ay="@firebase/auth-compat",Ny="@firebase/database",Oy="@firebase/data-connect",Ry="@firebase/database-compat",by="@firebase/functions",Ly="@firebase/functions-compat",Dy="@firebase/installations",My="@firebase/installations-compat",Fy="@firebase/messaging",Uy="@firebase/messaging-compat",zy="@firebase/performance",jy="@firebase/performance-compat",By="@firebase/remote-config",Hy="@firebase/remote-config-compat",Vy="@firebase/storage",$y="@firebase/storage-compat",Wy="@firebase/firestore",Ky="@firebase/vertexai",Gy="@firebase/firestore-compat",Yy="firebase",Qy="11.0.2";/**
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
 */const $l="[DEFAULT]",qy={[Vl]:"fire-core",[ky]:"fire-core-compat",[Cy]:"fire-analytics",[Iy]:"fire-analytics-compat",[Py]:"fire-app-check",[Ty]:"fire-app-check-compat",[xy]:"fire-auth",[Ay]:"fire-auth-compat",[Ny]:"fire-rtdb",[Oy]:"fire-data-connect",[Ry]:"fire-rtdb-compat",[by]:"fire-fn",[Ly]:"fire-fn-compat",[Dy]:"fire-iid",[My]:"fire-iid-compat",[Fy]:"fire-fcm",[Uy]:"fire-fcm-compat",[zy]:"fire-perf",[jy]:"fire-perf-compat",[By]:"fire-rc",[Hy]:"fire-rc-compat",[Vy]:"fire-gcs",[$y]:"fire-gcs-compat",[Wy]:"fire-fst",[Gy]:"fire-fst-compat",[Ky]:"fire-vertex","fire-js":"fire-js",[Yy]:"fire-js-all"};/**
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
 */const us=new Map,Xy=new Map,Wl=new Map;function Qd(i,n){try{i.container.addComponent(n)}catch(o){Yt.debug(`Component ${n.name} failed to register with FirebaseApp ${i.name}`,o)}}function Ti(i){const n=i.name;if(Wl.has(n))return Yt.debug(`There were multiple attempts to register component ${n}.`),!1;Wl.set(n,i);for(const o of us.values())Qd(o,i);for(const o of Xy.values())Qd(o,i);return!0}function sp(i,n){const o=i.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),i.container.getProvider(n)}function Ot(i){return i.settings!==void 0}/**
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
 */const Jy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new Ri("app","Firebase",Jy);/**
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
 */class Zy{constructor(n,o,a){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=Qy;function ap(i,n={}){let o=i;typeof n!="object"&&(n={name:n});const a=Object.assign({name:$l,automaticDataCollectionEnabled:!1},n),u=a.name;if(typeof u!="string"||!u)throw Cn.create("bad-app-name",{appName:String(u)});if(o||(o=tp()),!o)throw Cn.create("no-options");const f=us.get(u);if(f){if(ls(o,f.options)&&ls(a,f.config))return f;throw Cn.create("duplicate-app",{appName:u})}const h=new oy(u);for(const g of Wl.values())h.addComponent(g);const m=new Zy(o,a,h);return us.set(u,m),m}function e0(i=$l){const n=us.get(i);if(!n&&i===$l&&tp())return ap();if(!n)throw Cn.create("no-app",{appName:i});return n}function xr(i,n,o){var a;let u=(a=qy[i])!==null&&a!==void 0?a:i;o&&(u+=`-${o}`);const f=u.match(/\s|\//),h=n.match(/\s|\//);if(f||h){const m=[`Unable to register library "${u}" with version "${n}":`];f&&m.push(`library name "${u}" contains illegal characters (whitespace or "/")`),f&&h&&m.push("and"),h&&m.push(`version name "${n}" contains illegal characters (whitespace or "/")`),Yt.warn(m.join(" "));return}Ti(new br(`${u}-version`,()=>({library:u,version:n}),"VERSION"))}/**
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
 */const t0="firebase-heartbeat-database",n0=1,Pi="firebase-heartbeat-store";let Al=null;function lp(){return Al||(Al=yy(t0,n0,{upgrade:(i,n)=>{switch(n){case 0:try{i.createObjectStore(Pi)}catch(o){console.warn(o)}}}}).catch(i=>{throw Cn.create("idb-open",{originalErrorMessage:i.message})})),Al}async function r0(i){try{const o=(await lp()).transaction(Pi),a=await o.objectStore(Pi).get(up(i));return await o.done,a}catch(n){if(n instanceof Nn)Yt.warn(n.message);else{const o=Cn.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(o.message)}}}async function qd(i,n){try{const a=(await lp()).transaction(Pi,"readwrite");await a.objectStore(Pi).put(n,up(i)),await a.done}catch(o){if(o instanceof Nn)Yt.warn(o.message);else{const a=Cn.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});Yt.warn(a.message)}}}function up(i){return`${i.name}!${i.options.appId}`}/**
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
 */const i0=1024,o0=30*24*60*60*1e3;class s0{constructor(n){this.container=n,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new l0(o),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var n,o;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Xd();return((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((o=this._heartbeatsCache)===null||o===void 0?void 0:o.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(h=>h.date===f)?void 0:(this._heartbeatsCache.heartbeats.push({date:f,agent:u}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=o0}),this._storage.overwrite(this._heartbeatsCache))}catch(a){Yt.warn(a)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const o=Xd(),{heartbeatsToSend:a,unsentEntries:u}=a0(this._heartbeatsCache.heartbeats),f=Zh(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=o,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(o){return Yt.warn(o),""}}}function Xd(){return new Date().toISOString().substring(0,10)}function a0(i,n=i0){const o=[];let a=i.slice();for(const u of i){const f=o.find(h=>h.agent===u.agent);if(f){if(f.dates.push(u.date),Jd(o)>n){f.dates.pop();break}}else if(o.push({agent:u.agent,dates:[u.date]}),Jd(o)>n){o.pop();break}a=a.slice(1)}return{heartbeatsToSend:o,unsentEntries:a}}class l0{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gv()?Yv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const o=await r0(this.app);return o!=null&&o.heartbeats?o:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var o;if(await this._canUseIndexedDBPromise){const u=await this.read();return qd(this.app,{lastSentHeartbeatDate:(o=n.lastSentHeartbeatDate)!==null&&o!==void 0?o:u.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var o;if(await this._canUseIndexedDBPromise){const u=await this.read();return qd(this.app,{lastSentHeartbeatDate:(o=n.lastSentHeartbeatDate)!==null&&o!==void 0?o:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...n.heartbeats]})}else return}}function Jd(i){return Zh(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function u0(i){Ti(new br("platform-logger",n=>new Sy(n),"PRIVATE")),Ti(new br("heartbeat",n=>new s0(n),"PRIVATE")),xr(Vl,Yd,i),xr(Vl,Yd,"esm2017"),xr("fire-js","")}u0("");function wu(i,n){var o={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&n.indexOf(a)<0&&(o[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(i);u<a.length;u++)n.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(i,a[u])&&(o[a[u]]=i[a[u]]);return o}function cp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c0=cp,fp=new Ri("auth","Firebase",cp());/**
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
 */const cs=new rp("@firebase/auth");function f0(i,...n){cs.logLevel<=fe.WARN&&cs.warn(`Auth (${Li}): ${i}`,...n)}function ns(i,...n){cs.logLevel<=fe.ERROR&&cs.error(`Auth (${Li}): ${i}`,...n)}/**
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
 */function Dt(i,...n){throw Su(i,...n)}function Et(i,...n){return Su(i,...n)}function _u(i,n,o){const a=Object.assign(Object.assign({},c0()),{[n]:o});return new Ri("auth","Firebase",a).create(n,{appName:i.name})}function Tn(i){return _u(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function d0(i,n,o){const a=o;if(!(n instanceof a))throw a.name!==n.constructor.name&&Dt(i,"argument-error"),_u(i,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Su(i,...n){if(typeof i!="string"){const o=n[0],a=[...n.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(o,...a)}return fp.create(i,...n)}function Y(i,n,...o){if(!i)throw Su(n,...o)}function Wt(i){const n="INTERNAL ASSERTION FAILED: "+i;throw ns(n),new Error(n)}function Qt(i,n){i||Wt(n)}/**
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
 */function Kl(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function h0(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */class Di{constructor(n,o){this.shortDelay=n,this.longDelay=o,Qt(o>n,"Short delay should be less than long delay!"),this.isMobile=Hv()||Wv()}get(){return p0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class dp{static initialize(n,o,a){this.fetchImpl=n,o&&(this.headersImpl=o),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v0=new Di(3e4,6e4);function Mi(i,n){return i.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:i.tenantId}):n}async function Zn(i,n,o,a,u={}){return hp(i,u,async()=>{let f={},h={};a&&(n==="GET"?h=a:f={body:JSON.stringify(a)});const m=bi(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:n,headers:g},f);return Vv()||(E.referrerPolicy="no-referrer"),dp.fetch()(mp(i,i.config.apiHost,o,m),E)})}async function hp(i,n,o){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},g0),n);try{const u=new w0(i),f=await Promise.race([o(),u.promise]);u.clearNetworkTimeout();const h=await f.json();if("needConfirmation"in h)throw Zo(i,"account-exists-with-different-credential",h);if(f.ok&&!("errorMessage"in h))return h;{const m=f.ok?h.errorMessage:h.error.message,[g,E]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Zo(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Zo(i,"user-disabled",h);const I=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw _u(i,I,E);Dt(i,I)}}catch(u){if(u instanceof Nn)throw u;Dt(i,"network-request-failed",{message:String(u)})}}async function pp(i,n,o,a,u={}){const f=await Zn(i,n,o,a,u);return"mfaPendingCredential"in f&&Dt(i,"multi-factor-auth-required",{_serverResponse:f}),f}function mp(i,n,o,a){const u=`${n}${o}?${a}`;return i.config.emulator?Eu(i.config,u):`${i.config.apiScheme}://${u}`}function y0(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class w0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((o,a)=>{this.timer=setTimeout(()=>a(Et(this.auth,"network-request-failed")),v0.get())})}}function Zo(i,n,o){const a={appName:i.name};o.email&&(a.email=o.email),o.phoneNumber&&(a.phoneNumber=o.phoneNumber);const u=Et(i,n,a);return u.customData._tokenResponse=o,u}function eh(i){return i!==void 0&&i.enterprise!==void 0}class _0{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const o of this.recaptchaEnforcementState)if(o.provider&&o.provider===n)return y0(o.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function S0(i,n){return Zn(i,"GET","/v2/recaptchaConfig",Mi(i,n))}/**
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
 */async function E0(i,n){return Zn(i,"POST","/v1/accounts:delete",n)}async function gp(i,n){return Zn(i,"POST","/v1/accounts:lookup",n)}/**
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
 */function ki(i){if(i)try{const n=new Date(Number(i));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function k0(i,n=!1){const o=On(i),a=await o.getIdToken(n),u=ku(a);Y(u&&u.exp&&u.auth_time&&u.iat,o.auth,"internal-error");const f=typeof u.firebase=="object"?u.firebase:void 0,h=f==null?void 0:f.sign_in_provider;return{claims:u,token:a,authTime:ki(Nl(u.auth_time)),issuedAtTime:ki(Nl(u.iat)),expirationTime:ki(Nl(u.exp)),signInProvider:h||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function Nl(i){return Number(i)*1e3}function ku(i){const[n,o,a]=i.split(".");if(n===void 0||o===void 0||a===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{const u=ep(o);return u?JSON.parse(u):(ns("Failed to decode base64 JWT payload"),null)}catch(u){return ns("Caught error parsing JWT payload as JSON",u==null?void 0:u.toString()),null}}function th(i){const n=ku(i);return Y(n,"internal-error"),Y(typeof n.exp<"u","internal-error"),Y(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
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
 */async function xi(i,n,o=!1){if(o)return n;try{return await n}catch(a){throw a instanceof Nn&&I0(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function I0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Gl{constructor(n,o){this.createdAt=n,this.lastLoginAt=o,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fs(i){var n;const o=i.auth,a=await i.getIdToken(),u=await xi(i,gp(o,{idToken:a}));Y(u==null?void 0:u.users.length,o,"internal-error");const f=u.users[0];i._notifyReloadListener(f);const h=!((n=f.providerUserInfo)===null||n===void 0)&&n.length?vp(f.providerUserInfo):[],m=P0(i.providerData,h),g=i.isAnonymous,E=!(i.email&&f.passwordHash)&&!(m!=null&&m.length),I=g?E:!1,O={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:m,metadata:new Gl(f.createdAt,f.lastLoginAt),isAnonymous:I};Object.assign(i,O)}async function T0(i){const n=On(i);await fs(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function P0(i,n){return[...i.filter(a=>!n.some(u=>u.providerId===a.providerId)),...n]}function vp(i){return i.map(n=>{var{providerId:o}=n,a=wu(n,["providerId"]);return{providerId:o,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function x0(i,n){const o=await hp(i,{},async()=>{const a=bi({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:u,apiKey:f}=i.config,h=mp(i,u,"/v1/token",`key=${f}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",dp.fetch()(h,{method:"POST",headers:m,body:a})});return{accessToken:o.access_token,expiresIn:o.expires_in,refreshToken:o.refresh_token}}async function A0(i,n){return Zn(i,"POST","/v2/accounts:revokeToken",Mi(i,n))}/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){Y(n.idToken,"internal-error"),Y(typeof n.idToken<"u","internal-error"),Y(typeof n.refreshToken<"u","internal-error");const o="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):th(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,o)}updateFromIdToken(n){Y(n.length!==0,"internal-error");const o=th(n);this.updateTokensAndExpiration(n,null,o)}async getToken(n,o=!1){return!o&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,o){const{accessToken:a,refreshToken:u,expiresIn:f}=await x0(n,o);this.updateTokensAndExpiration(a,u,Number(f))}updateTokensAndExpiration(n,o,a){this.refreshToken=o||null,this.accessToken=n||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(n,o){const{refreshToken:a,accessToken:u,expirationTime:f}=o,h=new Ar;return a&&(Y(typeof a=="string","internal-error",{appName:n}),h.refreshToken=a),u&&(Y(typeof u=="string","internal-error",{appName:n}),h.accessToken=u),f&&(Y(typeof f=="number","internal-error",{appName:n}),h.expirationTime=f),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function wn(i,n){Y(typeof i=="string"||typeof i>"u","internal-error",{appName:n})}class Kt{constructor(n){var{uid:o,auth:a,stsTokenManager:u}=n,f=wu(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=o,this.auth=a,this.stsTokenManager=u,this.accessToken=u.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new Gl(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(n){const o=await xi(this,this.stsTokenManager.getToken(this.auth,n));return Y(o,this.auth,"internal-error"),this.accessToken!==o&&(this.accessToken=o,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),o}getIdTokenResult(n){return k0(this,n)}reload(){return T0(this)}_assign(n){this!==n&&(Y(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(o=>Object.assign({},o)),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const o=new Kt(Object.assign(Object.assign({},this),{auth:n,stsTokenManager:this.stsTokenManager._clone()}));return o.metadata._copy(this.metadata),o}_onReload(n){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,o=!1){let a=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),a=!0),o&&await fs(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Tn(this.auth));const n=await this.getIdToken();return await xi(this,E0(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>Object.assign({},n)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,o){var a,u,f,h,m,g,E,I;const O=(a=o.displayName)!==null&&a!==void 0?a:void 0,R=(u=o.email)!==null&&u!==void 0?u:void 0,b=(f=o.phoneNumber)!==null&&f!==void 0?f:void 0,X=(h=o.photoURL)!==null&&h!==void 0?h:void 0,Q=(m=o.tenantId)!==null&&m!==void 0?m:void 0,H=(g=o._redirectEventId)!==null&&g!==void 0?g:void 0,q=(E=o.createdAt)!==null&&E!==void 0?E:void 0,ne=(I=o.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:ae,emailVerified:le,isAnonymous:de,providerData:Ie,stsTokenManager:Ce}=o;Y(ae&&Ce,n,"internal-error");const Me=Ar.fromJSON(this.name,Ce);Y(typeof ae=="string",n,"internal-error"),wn(O,n.name),wn(R,n.name),Y(typeof le=="boolean",n,"internal-error"),Y(typeof de=="boolean",n,"internal-error"),wn(b,n.name),wn(X,n.name),wn(Q,n.name),wn(H,n.name),wn(q,n.name),wn(ne,n.name);const ot=new Kt({uid:ae,auth:n,email:R,emailVerified:le,displayName:O,isAnonymous:de,photoURL:X,phoneNumber:b,tenantId:Q,stsTokenManager:Me,createdAt:q,lastLoginAt:ne});return Ie&&Array.isArray(Ie)&&(ot.providerData=Ie.map(dt=>Object.assign({},dt))),H&&(ot._redirectEventId=H),ot}static async _fromIdTokenResponse(n,o,a=!1){const u=new Ar;u.updateFromServerResponse(o);const f=new Kt({uid:o.localId,auth:n,stsTokenManager:u,isAnonymous:a});return await fs(f),f}static async _fromGetAccountInfoResponse(n,o,a){const u=o.users[0];Y(u.localId!==void 0,"internal-error");const f=u.providerUserInfo!==void 0?vp(u.providerUserInfo):[],h=!(u.email&&u.passwordHash)&&!(f!=null&&f.length),m=new Ar;m.updateFromIdToken(a);const g=new Kt({uid:u.localId,auth:n,stsTokenManager:m,isAnonymous:h}),E={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Gl(u.createdAt,u.lastLoginAt),isAnonymous:!(u.email&&u.passwordHash)&&!(f!=null&&f.length)};return Object.assign(g,E),g}}/**
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
 */const nh=new Map;function Gt(i){Qt(i instanceof Function,"Expected a class definition");let n=nh.get(i);return n?(Qt(n instanceof i,"Instance stored in cache mismatched with class"),n):(n=new i,nh.set(i,n),n)}/**
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
 */class yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,o){this.storage[n]=o}async _get(n){const o=this.storage[n];return o===void 0?null:o}async _remove(n){delete this.storage[n]}_addListener(n,o){}_removeListener(n,o){}}yp.type="NONE";const rh=yp;/**
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
 */function rs(i,n,o){return`firebase:${i}:${n}:${o}`}class Nr{constructor(n,o,a){this.persistence=n,this.auth=o,this.userKey=a;const{config:u,name:f}=this.auth;this.fullUserKey=rs(this.userKey,u.apiKey,f),this.fullPersistenceKey=rs("persistence",u.apiKey,f),this.boundEventHandler=o._onStorageEvent.bind(o),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);return n?Kt._fromJSON(this.auth,n):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const o=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,o)return this.setCurrentUser(o)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,o,a="authUser"){if(!o.length)return new Nr(Gt(rh),n,a);const u=(await Promise.all(o.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let f=u[0]||Gt(rh);const h=rs(a,n.config.apiKey,n.name);let m=null;for(const E of o)try{const I=await E._get(h);if(I){const O=Kt._fromJSON(n,I);E!==f&&(m=O),f=E;break}}catch{}const g=u.filter(E=>E._shouldAllowMigration);return!f._shouldAllowMigration||!g.length?new Nr(f,n,a):(f=g[0],m&&await f._set(h,m.toJSON()),await Promise.all(o.map(async E=>{if(E!==f)try{await E._remove(h)}catch{}})),new Nr(f,n,a))}}/**
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
 */function ih(i){const n=i.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(Ep(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(wp(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(Ip(n))return"Blackberry";if(Cp(n))return"Webos";if(_p(n))return"Safari";if((n.includes("chrome/")||Sp(n))&&!n.includes("edge/"))return"Chrome";if(kp(n))return"Android";{const o=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(o);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function wp(i=$e()){return/firefox\//i.test(i)}function _p(i=$e()){const n=i.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function Sp(i=$e()){return/crios\//i.test(i)}function Ep(i=$e()){return/iemobile/i.test(i)}function kp(i=$e()){return/android/i.test(i)}function Ip(i=$e()){return/blackberry/i.test(i)}function Cp(i=$e()){return/webos/i.test(i)}function Iu(i=$e()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function N0(i=$e()){var n;return Iu(i)&&!!(!((n=window.navigator)===null||n===void 0)&&n.standalone)}function O0(){return Kv()&&document.documentMode===10}function Tp(i=$e()){return Iu(i)||kp(i)||Cp(i)||Ip(i)||/windows phone/i.test(i)||Ep(i)}/**
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
 */function Pp(i,n=[]){let o;switch(i){case"Browser":o=ih($e());break;case"Worker":o=`${ih($e())}-${i}`;break;default:o=i}const a=n.length?n.join(","):"FirebaseCore-web";return`${o}/JsCore/${Li}/${a}`}/**
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
 */class R0{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,o){const a=f=>new Promise((h,m)=>{try{const g=n(f);h(g)}catch(g){m(g)}});a.onAbort=o,this.queue.push(a);const u=this.queue.length-1;return()=>{this.queue[u]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const o=[];try{for(const a of this.queue)await a(n),a.onAbort&&o.push(a.onAbort)}catch(a){o.reverse();for(const u of o)try{u()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function b0(i,n={}){return Zn(i,"GET","/v2/passwordPolicy",Mi(i,n))}/**
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
 */const L0=6;class D0{constructor(n){var o,a,u,f;const h=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(o=h.minPasswordLength)!==null&&o!==void 0?o:L0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(u=(a=n.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&u!==void 0?u:"",this.forceUpgradeOnSignin=(f=n.forceUpgradeOnSignin)!==null&&f!==void 0?f:!1,this.schemaVersion=n.schemaVersion}validatePassword(n){var o,a,u,f,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,g),this.validatePasswordCharacterOptions(n,g),g.isValid&&(g.isValid=(o=g.meetsMinPasswordLength)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(a=g.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(u=g.containsLowercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsUppercaseLetter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(n,o){const a=this.customStrengthOptions.minPasswordLength,u=this.customStrengthOptions.maxPasswordLength;a&&(o.meetsMinPasswordLength=n.length>=a),u&&(o.meetsMaxPasswordLength=n.length<=u)}validatePasswordCharacterOptions(n,o){this.updatePasswordCharacterOptionsStatuses(o,!1,!1,!1,!1);let a;for(let u=0;u<n.length;u++)a=n.charAt(u),this.updatePasswordCharacterOptionsStatuses(o,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(n,o,a,u,f){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=o)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=u)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=f))}}/**
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
 */class M0{constructor(n,o,a,u){this.app=n,this.heartbeatServiceProvider=o,this.appCheckServiceProvider=a,this.config=u,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new R0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=u.sdkClientVersion}_initializeWithPersistence(n,o){return o&&(this._popupRedirectResolver=Gt(o)),this._initializationPromise=this.queue(async()=>{var a,u;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,n),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(o),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const o=await gp(this,{idToken:n}),a=await Kt._fromGetAccountInfoResponse(this,o,n);await this.directlySetCurrentUser(a)}catch(o){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",o),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){var o;if(Ot(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let u=a,f=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId,m=u==null?void 0:u._redirectEventId,g=await this.tryRedirectSignIn(n);(!h||h===m)&&(g!=null&&g.user)&&(u=g.user,f=!0)}if(!u)return this.directlySetCurrentUser(null);if(!u._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(u)}catch(h){u=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return u?this.reloadAndSetCurrentUserOrClear(u):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===u._redirectEventId?this.directlySetCurrentUser(u):this.reloadAndSetCurrentUserOrClear(u)}async tryRedirectSignIn(n){let o=null;try{o=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return o}async reloadAndSetCurrentUserOrClear(n){try{await fs(n)}catch(o){if((o==null?void 0:o.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=m0()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(Ot(this.app))return Promise.reject(Tn(this));const o=n?On(n):null;return o&&Y(o.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(o&&o._clone(this))}async _updateCurrentUser(n,o=!1){if(!this._deleted)return n&&Y(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),o||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return Ot(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const o=this._getPasswordPolicyInternal();return o.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):o.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await b0(this),o=new D0(n);this.tenantId===null?this._projectPasswordPolicy=o:this._tenantPasswordPolicies[this.tenantId]=o}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(n){this._errorFactory=new Ri("auth","Firebase",n())}onAuthStateChanged(n,o,a){return this.registerStateListener(this.authStateSubscription,n,o,a)}beforeAuthStateChanged(n,o){return this.beforeStateQueue.pushCallback(n,o)}onIdTokenChanged(n,o,a){return this.registerStateListener(this.idTokenSubscription,n,o,a)}authStateReady(){return new Promise((n,o)=>{if(this.currentUser)n();else{const a=this.onAuthStateChanged(()=>{a(),n()},o)}})}async revokeAccessToken(n){if(this.currentUser){const o=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:o};this.tenantId!=null&&(a.tenantId=this.tenantId),await A0(this,a)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)===null||n===void 0?void 0:n.toJSON()}}async _setRedirectUser(n,o){const a=await this.getOrInitRedirectPersistenceManager(o);return n===null?a.removeCurrentUser():a.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const o=n&&Gt(n)||this._popupRedirectResolver;Y(o,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[Gt(o._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var o,a;return this._isInitialized&&await this.queue(async()=>{}),((o=this._currentUser)===null||o===void 0?void 0:o._redirectEventId)===n?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,o;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(o=(n=this.currentUser)===null||n===void 0?void 0:n.uid)!==null&&o!==void 0?o:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,o,a,u){if(this._deleted)return()=>{};const f=typeof o=="function"?o:o.next.bind(o);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(m,this,"internal-error"),m.then(()=>{h||f(this.currentUser)}),typeof o=="function"){const g=n.addObserver(o,a,u);return()=>{h=!0,g()}}else{const g=n.addObserver(o);return()=>{h=!0,g()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const o={"X-Client-Version":this.clientVersion};this.app.options.appId&&(o["X-Firebase-gmpid"]=this.app.options.appId);const a=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getHeartbeatsHeader());a&&(o["X-Firebase-Client"]=a);const u=await this._getAppCheckToken();return u&&(o["X-Firebase-AppCheck"]=u),o}async _getAppCheckToken(){var n;const o=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getToken());return o!=null&&o.error&&f0(`Error while retrieving App Check token: ${o.error}`),o==null?void 0:o.token}}function er(i){return On(i)}class oh{constructor(n){this.auth=n,this.observer=null,this.addObserver=Zv(o=>this.observer=o)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F0(i){ws=i}function xp(i){return ws.loadJS(i)}function U0(){return ws.recaptchaEnterpriseScript}function z0(){return ws.gapiScript}function j0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class B0{constructor(){this.enterprise=new H0}ready(n){n()}execute(n,o){return Promise.resolve("token")}render(n,o){return""}}class H0{ready(n){n()}execute(n,o){return Promise.resolve("token")}render(n,o){return""}}const V0="recaptcha-enterprise",Ap="NO_RECAPTCHA";class $0{constructor(n){this.type=V0,this.auth=er(n)}async verify(n="verify",o=!1){async function a(f){if(!o){if(f.tenantId==null&&f._agentRecaptchaConfig!=null)return f._agentRecaptchaConfig.siteKey;if(f.tenantId!=null&&f._tenantRecaptchaConfigs[f.tenantId]!==void 0)return f._tenantRecaptchaConfigs[f.tenantId].siteKey}return new Promise(async(h,m)=>{S0(f,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const E=new _0(g);return f.tenantId==null?f._agentRecaptchaConfig=E:f._tenantRecaptchaConfigs[f.tenantId]=E,h(E.siteKey)}}).catch(g=>{m(g)})})}function u(f,h,m){const g=window.grecaptcha;eh(g)?g.enterprise.ready(()=>{g.enterprise.execute(f,{action:n}).then(E=>{h(E)}).catch(()=>{h(Ap)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new B0().execute("siteKey",{action:"verify"}):new Promise((f,h)=>{a(this.auth).then(m=>{if(!o&&eh(window.grecaptcha))u(m,f,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=U0();g.length!==0&&(g+=m),xp(g).then(()=>{u(m,f,h)}).catch(E=>{h(E)})}}).catch(m=>{h(m)})})}}async function sh(i,n,o,a=!1,u=!1){const f=new $0(i);let h;if(u)h=Ap;else try{h=await f.verify(o)}catch{h=await f.verify(o,!0)}const m=Object.assign({},n);return a?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function W0(i,n,o,a,u){var f;if(!((f=i._getRecaptchaConfig())===null||f===void 0)&&f.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await sh(i,n,o,o==="getOobCode");return a(i,h)}else return a(i,n).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${o} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await sh(i,n,o,o==="getOobCode");return a(i,m)}else return Promise.reject(h)})}/**
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
 */function K0(i,n){const o=sp(i,"auth");if(o.isInitialized()){const u=o.getImmediate(),f=o.getOptions();if(ls(f,n??{}))return u;Dt(u,"already-initialized")}return o.initialize({options:n})}function G0(i,n){const o=(n==null?void 0:n.persistence)||[],a=(Array.isArray(o)?o:[o]).map(Gt);n!=null&&n.errorMap&&i._updateErrorMap(n.errorMap),i._initializeWithPersistence(a,n==null?void 0:n.popupRedirectResolver)}function Y0(i,n,o){const a=er(i);Y(a._canInitEmulator,a,"emulator-config-failed"),Y(/^https?:\/\//.test(n),a,"invalid-emulator-scheme");const u=!1,f=Np(n),{host:h,port:m}=Q0(n),g=m===null?"":`:${m}`;a.config.emulator={url:`${f}//${h}${g}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:h,port:m,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:u})}),q0()}function Np(i){const n=i.indexOf(":");return n<0?"":i.substr(0,n+1)}function Q0(i){const n=Np(i),o=/(\/\/)?([^?#/]+)/.exec(i.substr(n.length));if(!o)return{host:"",port:null};const a=o[2].split("@").pop()||"",u=/^(\[[^\]]+\])(:|$)/.exec(a);if(u){const f=u[1];return{host:f,port:ah(a.substr(f.length+1))}}else{const[f,h]=a.split(":");return{host:f,port:ah(h)}}}function ah(i){if(!i)return null;const n=Number(i);return isNaN(n)?null:n}function q0(){function i(){const n=document.createElement("p"),o=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",o.position="fixed",o.width="100%",o.backgroundColor="#ffffff",o.border=".1em solid #000000",o.color="#b50000",o.bottom="0px",o.left="0px",o.margin="0px",o.zIndex="10000",o.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Op{constructor(n,o){this.providerId=n,this.signInMethod=o}toJSON(){return Wt("not implemented")}_getIdTokenResponse(n){return Wt("not implemented")}_linkToIdToken(n,o){return Wt("not implemented")}_getReauthenticationResolver(n){return Wt("not implemented")}}/**
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
 */async function Or(i,n){return pp(i,"POST","/v1/accounts:signInWithIdp",Mi(i,n))}/**
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
 */const X0="http://localhost";class Qn extends Op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const o=new Qn(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(o.idToken=n.idToken),n.accessToken&&(o.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(o.nonce=n.nonce),n.pendingToken&&(o.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(o.accessToken=n.oauthToken,o.secret=n.oauthTokenSecret):Dt("argument-error"),o}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const o=typeof n=="string"?JSON.parse(n):n,{providerId:a,signInMethod:u}=o,f=wu(o,["providerId","signInMethod"]);if(!a||!u)return null;const h=new Qn(a,u);return h.idToken=f.idToken||void 0,h.accessToken=f.accessToken||void 0,h.secret=f.secret,h.nonce=f.nonce,h.pendingToken=f.pendingToken||null,h}_getIdTokenResponse(n){const o=this.buildRequest();return Or(n,o)}_linkToIdToken(n,o){const a=this.buildRequest();return a.idToken=o,Or(n,a)}_getReauthenticationResolver(n){const o=this.buildRequest();return o.autoCreate=!1,Or(n,o)}buildRequest(){const n={requestUri:X0,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const o={};this.idToken&&(o.id_token=this.idToken),this.accessToken&&(o.access_token=this.accessToken),this.secret&&(o.oauth_token_secret=this.secret),o.providerId=this.providerId,this.nonce&&!this.pendingToken&&(o.nonce=this.nonce),n.postBody=bi(o)}return n}}/**
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
 */class Fi extends Cu{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends Fi{constructor(){super("facebook.com")}static credential(n){return Qn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Sn.credentialFromTaggedObject(n)}static credentialFromError(n){return Sn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Sn.credential(n.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class $t extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(n,o){return Qn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:o})}static credentialFromResult(n){return $t.credentialFromTaggedObject(n)}static credentialFromError(n){return $t.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:o,oauthAccessToken:a}=n;if(!o&&!a)return null;try{return $t.credential(o,a)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
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
 */class En extends Fi{constructor(){super("github.com")}static credential(n){return Qn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return En.credentialFromTaggedObject(n)}static credentialFromError(n){return En.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return En.credential(n.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class kn extends Fi{constructor(){super("twitter.com")}static credential(n,o){return Qn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:o})}static credentialFromResult(n){return kn.credentialFromTaggedObject(n)}static credentialFromError(n){return kn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:o,oauthTokenSecret:a}=n;if(!o||!a)return null;try{return kn.credential(o,a)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */async function J0(i,n){return pp(i,"POST","/v1/accounts:signUp",Mi(i,n))}/**
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
 */class qn{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,o,a,u=!1){const f=await Kt._fromIdTokenResponse(n,a,u),h=lh(a);return new qn({user:f,providerId:h,_tokenResponse:a,operationType:o})}static async _forOperation(n,o,a){await n._updateTokensIfNecessary(a,!0);const u=lh(a);return new qn({user:n,providerId:u,_tokenResponse:a,operationType:o})}}function lh(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ds extends Nn{constructor(n,o,a,u){var f;super(o.code,o.message),this.operationType=a,this.user=u,Object.setPrototypeOf(this,ds.prototype),this.customData={appName:n.name,tenantId:(f=n.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:o.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(n,o,a,u){return new ds(n,o,a,u)}}function Rp(i,n,o,a){return(n==="reauthenticate"?o._getReauthenticationResolver(i):o._getIdTokenResponse(i)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?ds._fromErrorAndOperation(i,f,n,a):f})}async function Z0(i,n,o=!1){const a=await xi(i,n._linkToIdToken(i.auth,await i.getIdToken()),o);return qn._forOperation(i,"link",a)}/**
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
 */async function e1(i,n,o=!1){const{auth:a}=i;if(Ot(a.app))return Promise.reject(Tn(a));const u="reauthenticate";try{const f=await xi(i,Rp(a,u,n,i),o);Y(f.idToken,a,"internal-error");const h=ku(f.idToken);Y(h,a,"internal-error");const{sub:m}=h;return Y(i.uid===m,a,"user-mismatch"),qn._forOperation(i,u,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&Dt(a,"user-mismatch"),f}}/**
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
 */async function t1(i,n,o=!1){if(Ot(i.app))return Promise.reject(Tn(i));const a="signIn",u=await Rp(i,a,n),f=await qn._fromIdTokenResponse(i,a,u);return o||await i._updateCurrentUser(f.user),f}/**
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
 */async function n1(i){const n=er(i);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function r1(i,n,o){if(Ot(i.app))return Promise.reject(Tn(i));const a=er(i),h=await W0(a,{returnSecureToken:!0,email:n,password:o,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",J0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&n1(i),g}),m=await qn._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(m.user),m}function i1(i,n,o,a){return On(i).onIdTokenChanged(n,o,a)}function o1(i,n,o){return On(i).beforeAuthStateChanged(n,o)}function s1(i,n,o,a){return On(i).onAuthStateChanged(n,o,a)}function bp(i){return On(i).signOut()}const hs="__sak";/**
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
 */class Lp{constructor(n,o){this.storageRetriever=n,this.type=o}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,o){return this.storage.setItem(n,JSON.stringify(o)),Promise.resolve()}_get(n){const o=this.storage.getItem(n);return Promise.resolve(o?JSON.parse(o):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const a1=1e3,l1=10;class Dp extends Lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,o)=>this.onStorageEvent(n,o),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tp(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const o of Object.keys(this.listeners)){const a=this.storage.getItem(o),u=this.localCache[o];a!==u&&n(o,u,a)}}onStorageEvent(n,o=!1){if(!n.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const a=n.key;o?this.detachListener():this.stopPolling();const u=()=>{const h=this.storage.getItem(a);!o&&this.localCache[a]===h||this.notifyListeners(a,h)},f=this.storage.getItem(a);O0()&&f!==n.newValue&&n.newValue!==n.oldValue?setTimeout(u,l1):u()}notifyListeners(n,o){this.localCache[n]=o;const a=this.listeners[n];if(a)for(const u of Array.from(a))u(o&&JSON.parse(o))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,o,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:o,newValue:a}),!0)})},a1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,o){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(o)}_removeListener(n,o){this.listeners[n]&&(this.listeners[n].delete(o),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,o){await super._set(n,o),this.localCache[n]=JSON.stringify(o)}async _get(n){const o=await super._get(n);return this.localCache[n]=JSON.stringify(o),o}async _remove(n){await super._remove(n),delete this.localCache[n]}}Dp.type="LOCAL";const u1=Dp;/**
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
 */class Mp extends Lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,o){}_removeListener(n,o){}}Mp.type="SESSION";const Fp=Mp;/**
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
 */function c1(i){return Promise.all(i.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(o){return{fulfilled:!1,reason:o}}}))}/**
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
 */class _s{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const o=this.receivers.find(u=>u.isListeningto(n));if(o)return o;const a=new _s(n);return this.receivers.push(a),a}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const o=n,{eventId:a,eventType:u,data:f}=o.data,h=this.handlersMap[u];if(!(h!=null&&h.size))return;o.ports[0].postMessage({status:"ack",eventId:a,eventType:u});const m=Array.from(h).map(async E=>E(o.origin,f)),g=await c1(m);o.ports[0].postMessage({status:"done",eventId:a,eventType:u,response:g})}_subscribe(n,o){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(o)}_unsubscribe(n,o){this.handlersMap[n]&&o&&this.handlersMap[n].delete(o),(!o||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
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
 */function Tu(i="",n=10){let o="";for(let a=0;a<n;a++)o+=Math.floor(Math.random()*10);return i+o}/**
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
 */class f1{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,o,a=50){const u=typeof MessageChannel<"u"?new MessageChannel:null;if(!u)throw new Error("connection_unavailable");let f,h;return new Promise((m,g)=>{const E=Tu("",20);u.port1.start();const I=setTimeout(()=>{g(new Error("unsupported_event"))},a);h={messageChannel:u,onMessage(O){const R=O;if(R.data.eventId===E)switch(R.data.status){case"ack":clearTimeout(I),f=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),m(R.data.response);break;default:clearTimeout(I),clearTimeout(f),g(new Error("invalid_response"));break}}},this.handlers.add(h),u.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:n,eventId:E,data:o},[u.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Lt(){return window}function d1(i){Lt().location.href=i}/**
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
 */function Up(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function h1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function m1(){return Up()?self:null}/**
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
 */const zp="firebaseLocalStorageDb",g1=1,ps="firebaseLocalStorage",jp="fbase_key";class Ui{constructor(n){this.request=n}toPromise(){return new Promise((n,o)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{o(this.request.error)})})}}function Ss(i,n){return i.transaction([ps],n?"readwrite":"readonly").objectStore(ps)}function v1(){const i=indexedDB.deleteDatabase(zp);return new Ui(i).toPromise()}function Yl(){const i=indexedDB.open(zp,g1);return new Promise((n,o)=>{i.addEventListener("error",()=>{o(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(ps,{keyPath:jp})}catch(u){o(u)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(ps)?n(a):(a.close(),await v1(),n(await Yl()))})})}async function uh(i,n,o){const a=Ss(i,!0).put({[jp]:n,value:o});return new Ui(a).toPromise()}async function y1(i,n){const o=Ss(i,!1).get(n),a=await new Ui(o).toPromise();return a===void 0?null:a.value}function ch(i,n){const o=Ss(i,!0).delete(n);return new Ui(o).toPromise()}const w1=800,_1=3;class Bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yl(),this.db)}async _withRetries(n){let o=0;for(;;)try{const a=await this._openDb();return await n(a)}catch(a){if(o++>_1)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(m1()),this.receiver._subscribe("keyChanged",async(n,o)=>({keyProcessed:(await this._poll()).includes(o.key)})),this.receiver._subscribe("ping",async(n,o)=>["keyChanged"])}async initializeSender(){var n,o;if(this.activeServiceWorker=await h1(),!this.activeServiceWorker)return;this.sender=new f1(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((n=a[0])===null||n===void 0)&&n.fulfilled&&!((o=a[0])===null||o===void 0)&&o.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||p1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await Yl();return await uh(n,hs,"1"),await ch(n,hs),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,o){return this._withPendingWrite(async()=>(await this._withRetries(a=>uh(a,n,o)),this.localCache[n]=o,this.notifyServiceWorker(n)))}async _get(n){const o=await this._withRetries(a=>y1(a,n));return this.localCache[n]=o,o}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(o=>ch(o,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(u=>{const f=Ss(u,!1).getAll();return new Ui(f).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const o=[],a=new Set;if(n.length!==0)for(const{fbase_key:u,value:f}of n)a.add(u),JSON.stringify(this.localCache[u])!==JSON.stringify(f)&&(this.notifyListeners(u,f),o.push(u));for(const u of Object.keys(this.localCache))this.localCache[u]&&!a.has(u)&&(this.notifyListeners(u,null),o.push(u));return o}notifyListeners(n,o){this.localCache[n]=o;const a=this.listeners[n];if(a)for(const u of Array.from(a))u(o)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,o){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(o)}_removeListener(n,o){this.listeners[n]&&(this.listeners[n].delete(o),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bp.type="LOCAL";const S1=Bp;new Di(3e4,6e4);/**
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
 */function Hp(i,n){return n?Gt(n):(Y(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Pu extends Op{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return Or(n,this._buildIdpRequest())}_linkToIdToken(n,o){return Or(n,this._buildIdpRequest(o))}_getReauthenticationResolver(n){return Or(n,this._buildIdpRequest())}_buildIdpRequest(n){const o={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(o.idToken=n),o}}function E1(i){return t1(i.auth,new Pu(i),i.bypassAuthState)}function k1(i){const{auth:n,user:o}=i;return Y(o,n,"internal-error"),e1(o,new Pu(i),i.bypassAuthState)}async function I1(i){const{auth:n,user:o}=i;return Y(o,n,"internal-error"),Z0(o,new Pu(i),i.bypassAuthState)}/**
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
 */class Vp{constructor(n,o,a,u,f=!1){this.auth=n,this.resolver=a,this.user=u,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(o)?o:[o]}execute(){return new Promise(async(n,o)=>{this.pendingPromise={resolve:n,reject:o};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(n){const{urlResponse:o,sessionId:a,postBody:u,tenantId:f,error:h,type:m}=n;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:o,sessionId:a,tenantId:f||void 0,postBody:u||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(E){this.reject(E)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return E1;case"linkViaPopup":case"linkViaRedirect":return I1;case"reauthViaPopup":case"reauthViaRedirect":return k1;default:Dt(this.auth,"internal-error")}}resolve(n){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const C1=new Di(2e3,1e4);async function T1(i,n,o){if(Ot(i.app))return Promise.reject(Et(i,"operation-not-supported-in-this-environment"));const a=er(i);d0(i,n,Cu);const u=Hp(a,o);return new Gn(a,"signInViaPopup",n,u).executeNotNull()}class Gn extends Vp{constructor(n,o,a,u,f){super(n,o,u,f),this.provider=a,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return Y(n,this.auth,"internal-error"),n}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const n=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(o=>{this.reject(o)}),this.resolver._isIframeWebStorageSupported(this.auth,o=>{o||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)===null||n===void 0?void 0:n.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const n=()=>{var o,a;if(!((a=(o=this.authWindow)===null||o===void 0?void 0:o.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,C1.get())};n()}}Gn.currentPopupAction=null;/**
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
 */const P1="pendingRedirect",is=new Map;class x1 extends Vp{constructor(n,o,a=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],o,void 0,a),this.eventId=null}async execute(){let n=is.get(this.auth._key());if(!n){try{const a=await A1(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(a)}catch(o){n=()=>Promise.reject(o)}is.set(this.auth._key(),n)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const o=await this.auth._redirectUserForId(n.eventId);if(o)return this.user=o,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A1(i,n){const o=R1(n),a=O1(i);if(!await a._isAvailable())return!1;const u=await a._get(o)==="true";return await a._remove(o),u}function N1(i,n){is.set(i._key(),n)}function O1(i){return Gt(i._redirectPersistence)}function R1(i){return rs(P1,i.config.apiKey,i.name)}async function b1(i,n,o=!1){if(Ot(i.app))return Promise.reject(Tn(i));const a=er(i),u=Hp(a,n),h=await new x1(a,u,o).execute();return h&&!o&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,n)),h}/**
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
 */const L1=10*60*1e3;class D1{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let o=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(n,a)&&(o=!0,this.sendToConsumer(n,a),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!M1(n)||(this.hasHandledPotentialRedirect=!0,o||(this.queuedRedirectEvent=n,o=!0)),o}sendToConsumer(n,o){var a;if(n.error&&!$p(n)){const u=((a=n.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";o.onError(Et(this.auth,u))}else o.onAuthEvent(n)}isEventForConsumer(n,o){const a=o.eventId===null||!!n.eventId&&n.eventId===o.eventId;return o.filter.includes(n.type)&&a}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=L1&&this.cachedEventUids.clear(),this.cachedEventUids.has(fh(n))}saveEventToCache(n){this.cachedEventUids.add(fh(n)),this.lastProcessedEventTime=Date.now()}}function fh(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(n=>n).join("-")}function $p({type:i,error:n}){return i==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function M1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $p(i);default:return!1}}/**
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
 */async function F1(i,n={}){return Zn(i,"GET","/v1/projects",n)}/**
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
 */const U1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z1=/^https?/;async function j1(i){if(i.config.emulator)return;const{authorizedDomains:n}=await F1(i);for(const o of n)try{if(B1(o))return}catch{}Dt(i,"unauthorized-domain")}function B1(i){const n=Kl(),{protocol:o,hostname:a}=new URL(n);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&a===""?o==="chrome-extension:"&&i.replace("chrome-extension://","")===n.replace("chrome-extension://",""):o==="chrome-extension:"&&h.hostname===a}if(!z1.test(o))return!1;if(U1.test(i))return a===i;const u=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+u+"|"+u+")$","i").test(a)}/**
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
 */const H1=new Di(3e4,6e4);function dh(){const i=Lt().___jsl;if(i!=null&&i.H){for(const n of Object.keys(i.H))if(i.H[n].r=i.H[n].r||[],i.H[n].L=i.H[n].L||[],i.H[n].r=[...i.H[n].L],i.CP)for(let o=0;o<i.CP.length;o++)i.CP[o]=null}}function V1(i){return new Promise((n,o)=>{var a,u,f;function h(){dh(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{dh(),o(Et(i,"network-request-failed"))},timeout:H1.get()})}if(!((u=(a=Lt().gapi)===null||a===void 0?void 0:a.iframes)===null||u===void 0)&&u.Iframe)n(gapi.iframes.getContext());else if(!((f=Lt().gapi)===null||f===void 0)&&f.load)h();else{const m=j0("iframefcb");return Lt()[m]=()=>{gapi.load?h():o(Et(i,"network-request-failed"))},xp(`${z0()}?onload=${m}`).catch(g=>o(g))}}).catch(n=>{throw os=null,n})}let os=null;function $1(i){return os=os||V1(i),os}/**
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
 */const W1=new Di(5e3,15e3),K1="__/auth/iframe",G1="emulator/auth/iframe",Y1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q1(i){const n=i.config;Y(n.authDomain,i,"auth-domain-config-required");const o=n.emulator?Eu(n,G1):`https://${i.config.authDomain}/${K1}`,a={apiKey:n.apiKey,appName:i.name,v:Li},u=Q1.get(i.config.apiHost);u&&(a.eid=u);const f=i._getFrameworks();return f.length&&(a.fw=f.join(",")),`${o}?${bi(a).slice(1)}`}async function X1(i){const n=await $1(i),o=Lt().gapi;return Y(o,i,"internal-error"),n.open({where:document.body,url:q1(i),messageHandlersFilter:o.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y1,dontclear:!0},a=>new Promise(async(u,f)=>{await a.restyle({setHideOnLeave:!1});const h=Et(i,"network-request-failed"),m=Lt().setTimeout(()=>{f(h)},W1.get());function g(){Lt().clearTimeout(m),u(a)}a.ping(g).then(g,()=>{f(h)})}))}/**
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
 */const J1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z1=500,ew=600,tw="_blank",nw="http://localhost";class hh{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rw(i,n,o,a=Z1,u=ew){const f=Math.max((window.screen.availHeight-u)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const g=Object.assign(Object.assign({},J1),{width:a.toString(),height:u.toString(),top:f,left:h}),E=$e().toLowerCase();o&&(m=Sp(E)?tw:o),wp(E)&&(n=n||nw,g.scrollbars="yes");const I=Object.entries(g).reduce((R,[b,X])=>`${R}${b}=${X},`,"");if(N0(E)&&m!=="_self")return iw(n||"",m),new hh(null);const O=window.open(n||"",m,I);Y(O,i,"popup-blocked");try{O.focus()}catch{}return new hh(O)}function iw(i,n){const o=document.createElement("a");o.href=i,o.target=n;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),o.dispatchEvent(a)}/**
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
 */const ow="__/auth/handler",sw="emulator/auth/handler",aw=encodeURIComponent("fac");async function ph(i,n,o,a,u,f){Y(i.config.authDomain,i,"auth-domain-config-required"),Y(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:o,redirectUrl:a,v:Li,eventId:u};if(n instanceof Cu){n.setDefaultLanguage(i.languageCode),h.providerId=n.providerId||"",Jv(n.getCustomParameters())||(h.customParameters=JSON.stringify(n.getCustomParameters()));for(const[I,O]of Object.entries({}))h[I]=O}if(n instanceof Fi){const I=n.getScopes().filter(O=>O!=="");I.length>0&&(h.scopes=I.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const I of Object.keys(m))m[I]===void 0&&delete m[I];const g=await i._getAppCheckToken(),E=g?`#${aw}=${encodeURIComponent(g)}`:"";return`${lw(i)}?${bi(m).slice(1)}${E}`}function lw({config:i}){return i.emulator?Eu(i,sw):`https://${i.authDomain}/${ow}`}/**
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
 */const Ol="webStorageSupport";class uw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=b1,this._overrideRedirectResult=N1}async _openPopup(n,o,a,u){var f;Qt((f=this.eventManagers[n._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const h=await ph(n,o,a,Kl(),u);return rw(n,h,Tu())}async _openRedirect(n,o,a,u){await this._originValidation(n);const f=await ph(n,o,a,Kl(),u);return d1(f),new Promise(()=>{})}_initialize(n){const o=n._key();if(this.eventManagers[o]){const{manager:u,promise:f}=this.eventManagers[o];return u?Promise.resolve(u):(Qt(f,"If manager is not set, promise should be"),f)}const a=this.initAndGetManager(n);return this.eventManagers[o]={promise:a},a.catch(()=>{delete this.eventManagers[o]}),a}async initAndGetManager(n){const o=await X1(n),a=new D1(n);return o.register("authEvent",u=>(Y(u==null?void 0:u.authEvent,n,"invalid-auth-event"),{status:a.onEvent(u.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:a},this.iframes[n._key()]=o,a}_isIframeWebStorageSupported(n,o){this.iframes[n._key()].send(Ol,{type:Ol},u=>{var f;const h=(f=u==null?void 0:u[0])===null||f===void 0?void 0:f[Ol];h!==void 0&&o(!!h),Dt(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const o=n._key();return this.originValidationPromises[o]||(this.originValidationPromises[o]=j1(n)),this.originValidationPromises[o]}get _shouldInitProactively(){return Tp()||_p()||Iu()}}const cw=uw;var mh="@firebase/auth",gh="1.8.1";/**
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
 */class fw{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)===null||n===void 0?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const o=this.auth.onIdTokenChanged(a=>{n((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,o),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const o=this.internalListeners.get(n);o&&(this.internalListeners.delete(n),o(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dw(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hw(i){Ti(new br("auth",(n,{options:o})=>{const a=n.getProvider("app").getImmediate(),u=n.getProvider("heartbeat"),f=n.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=a.options;Y(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pp(i)},E=new M0(a,u,f,g);return G0(E,o),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,o,a)=>{n.getProvider("auth-internal").initialize()})),Ti(new br("auth-internal",n=>{const o=er(n.getProvider("auth").getImmediate());return(a=>new fw(a))(o)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(mh,gh,dw(i)),xr(mh,gh,"esm2017")}/**
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
 */const pw=5*60,mw=np("authIdTokenMaxAge")||pw;let vh=null;const gw=i=>async n=>{const o=n&&await n.getIdTokenResult(),a=o&&(new Date().getTime()-Date.parse(o.issuedAtTime))/1e3;if(a&&a>mw)return;const u=o==null?void 0:o.token;vh!==u&&(vh=u,await fetch(i,{method:u?"POST":"DELETE",headers:u?{Authorization:`Bearer ${u}`}:{}}))};function vw(i=e0()){const n=sp(i,"auth");if(n.isInitialized())return n.getImmediate();const o=K0(i,{popupRedirectResolver:cw,persistence:[S1,u1,Fp]}),a=np("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(a,location.origin);if(location.origin===f.origin){const h=gw(f.toString());o1(o,h,()=>h(o.currentUser)),i1(o,m=>h(m))}}const u=jv("auth");return u&&Y0(o,`http://${u}`),o}function yw(){var i,n;return(n=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&n!==void 0?n:document}F0({loadJS(i){return new Promise((n,o)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=n,a.onerror=u=>{const f=Et("internal-error");f.customData=u,o(f)},a.type="text/javascript",a.charset="UTF-8",yw().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hw("Browser");var ww="firebase",_w="11.0.2";/**
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
 */xr(ww,_w,"app");const Sw={apiKey:"AIzaSyBHm4k8ZNFSuExEYDUFa5NziPIKq899lRg",authDomain:"coldbydefault-95.firebaseapp.com",projectId:"coldbydefault-95",storageBucket:"coldbydefault-95.firebasestorage.app",messagingSenderId:"323707087839",appId:"1:323707087839:web:49b5e2bf81c365e470726a",measurementId:"G-FM3D9HLLKP"},Ew=ap(Sw),Ai=vw(Ew),kw=new $t,Iw=({setUserDetails:i,setCurrentPage:n})=>{const o=async()=>{try{await bp(Ai),i(null),n("Home")}catch(a){console.error("Logout failed:",a)}};return W.jsx("button",{onClick:o,className:"bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300",children:"Logout"})};function Cw({currentPage:i,setCurrentPage:n,userDetails:o,setUserDetails:a}){const u=f=>{n(f)};return W.jsxs("nav",{className:"bg-gray-800 text-white p-4 flex justify-between items-center",children:[W.jsxs("div",{className:"flex space-x-6",children:[W.jsx("button",{onClick:()=>u("Home"),children:"Home"}),o&&W.jsxs(W.Fragment,{children:[W.jsx("button",{onClick:()=>u("Docs"),children:"Docs"}),W.jsx("button",{onClick:()=>u("Links"),children:"Links"})]}),!o&&W.jsx("button",{onClick:()=>u("SignIn"),children:"Sign-In"})]}),o&&W.jsxs("div",{className:"flex items-center space-x-4",children:[W.jsx("img",{src:o.photoURL||"https://via.placeholder.com/40",alt:"User",className:"w-10 h-10 rounded-full border border-white",onError:f=>f.target.src="https://via.placeholder.com/40"}),W.jsx("span",{children:o.username}),W.jsx(Iw,{setUserDetails:a,setCurrentPage:n})]})]})}const Tw=()=>(St.useEffect(()=>{const i=document.createElement("canvas");i.id="starsCanvas",document.body.appendChild(i);const n=i.getContext("2d"),o=()=>{i.width=window.innerWidth,i.height=window.innerHeight};o(),window.addEventListener("resize",o);const a=.8,u=300,f=[],h=.25,m=8,g=()=>{const b=Math.random()*i.width,X=Math.random()*i.height,Q=Math.random()*m,H=(Math.random()-.5)*h*(Q/m),q=(Math.random()-.5)*h*(Q/m);return{x:b,y:X,dx:H,dy:q,z:Q}},E=()=>{f.length=0;for(let b=0;b<u;b++)f.push(g())},I=b=>{n.beginPath();const X=a*(b.z/m);n.arc(b.x,b.y,X,0,Math.PI*2),n.fillStyle="#b8e3ff",n.fill(),n.closePath()},O=b=>{b.x+=b.dx,b.y+=b.dy,b.x-a>i.width&&(b.x=-a),b.x+a<0&&(b.x=i.width+a),b.y-a>i.height&&(b.y=-a),b.y+a<0&&(b.y=i.height+a)},R=()=>{n.clearRect(0,0,i.width,i.height),f.forEach(b=>{I(b),O(b)}),requestAnimationFrame(R)};return E(),R(),()=>{window.removeEventListener("resize",o),i.remove()}},[]),null);function Pw(){return W.jsx(W.Fragment,{children:W.jsx("div",{children:"Home page"})})}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function xw(i,n,o){return(n=Nw(n))in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function yh(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);n&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,a)}return o}function A(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?yh(Object(o),!0).forEach(function(a){xw(i,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):yh(Object(o)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(o,a))})}return i}function Aw(i,n){if(typeof i!="object"||!i)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var a=o.call(i,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function Nw(i){var n=Aw(i,"string");return typeof n=="symbol"?n:n+""}const wh=()=>{};let xu={},Wp={},Kp=null,Gp={mark:wh,measure:wh};try{typeof window<"u"&&(xu=window),typeof document<"u"&&(Wp=document),typeof MutationObserver<"u"&&(Kp=MutationObserver),typeof performance<"u"&&(Gp=performance)}catch{}const{userAgent:_h=""}=xu.navigator||{},Pn=xu,ve=Wp,Sh=Kp,es=Gp;Pn.document;const Jt=!!ve.documentElement&&!!ve.head&&typeof ve.addEventListener=="function"&&typeof ve.createElement=="function",Yp=~_h.indexOf("MSIE")||~_h.indexOf("Trident/");var Ow=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Rw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},bw={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Be="classic",Es="duotone",Lw="sharp",Dw="sharp-duotone",Xp=[Be,Es,Lw,Dw],Mw={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Fw={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Uw=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),zw={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},jw=["fak","fa-kit","fakd","fa-kit-duotone"],Eh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Bw=["kit"],Hw={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Vw=["fak","fakd"],$w={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},kh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ts={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ww=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Kw=["fak","fa-kit","fakd","fa-kit-duotone"],Gw={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yw={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Qw={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ql={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},qw=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ql=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ww,...qw],Xw=["solid","regular","light","thin","duotone","brands"],Jp=[1,2,3,4,5,6,7,8,9,10],Jw=Jp.concat([11,12,13,14,15,16,17,18,19,20]),Zw=[...Object.keys(Qw),...Xw,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ts.GROUP,ts.SWAP_OPACITY,ts.PRIMARY,ts.SECONDARY].concat(Jp.map(i=>"".concat(i,"x"))).concat(Jw.map(i=>"w-".concat(i))),e_={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const qt="___FONT_AWESOME___",Xl=16,Zp="fa",em="svg-inline--fa",Xn="data-fa-i2svg",Jl="data-fa-pseudo-element",t_="data-fa-pseudo-element-pending",Au="data-prefix",Nu="data-icon",Ih="fontawesome-i2svg",n_="async",r_=["HTML","HEAD","STYLE","SCRIPT"],tm=(()=>{try{return!0}catch{return!1}})();function zi(i){return new Proxy(i,{get(n,o){return o in n?n[o]:n[Be]}})}const nm=A({},Qp);nm[Be]=A(A(A(A({},{"fa-duotone":"duotone"}),Qp[Be]),Eh.kit),Eh["kit-duotone"]);const i_=zi(nm),Zl=A({},zw);Zl[Be]=A(A(A(A({},{duotone:"fad"}),Zl[Be]),kh.kit),kh["kit-duotone"]);const Ch=zi(Zl),eu=A({},Ql);eu[Be]=A(A({},eu[Be]),$w.kit);const Ou=zi(eu),tu=A({},Yw);tu[Be]=A(A({},tu[Be]),Hw.kit);zi(tu);const o_=Ow,rm="fa-layers-text",s_=Rw,a_=A({},Mw);zi(a_);const l_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rl=bw,u_=[...Bw,...Zw],Ii=Pn.FontAwesomeConfig||{};function c_(i){var n=ve.querySelector("script["+i+"]");if(n)return n.getAttribute(i)}function f_(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}ve&&typeof ve.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[o,a]=n;const u=f_(c_(o));u!=null&&(Ii[a]=u)});const im={styleDefault:"solid",familyDefault:Be,cssPrefix:Zp,replacementClass:em,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ii.familyPrefix&&(Ii.cssPrefix=Ii.familyPrefix);const Lr=A(A({},im),Ii);Lr.autoReplaceSvg||(Lr.observeMutations=!1);const B={};Object.keys(im).forEach(i=>{Object.defineProperty(B,i,{enumerable:!0,set:function(n){Lr[i]=n,Ci.forEach(o=>o(B))},get:function(){return Lr[i]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(i){Lr.cssPrefix=i,Ci.forEach(n=>n(B))},get:function(){return Lr.cssPrefix}});Pn.FontAwesomeConfig=B;const Ci=[];function d_(i){return Ci.push(i),()=>{Ci.splice(Ci.indexOf(i),1)}}const _n=Xl,Rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function h_(i){if(!i||!Jt)return;const n=ve.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=i;const o=ve.head.childNodes;let a=null;for(let u=o.length-1;u>-1;u--){const f=o[u],h=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(a=f)}return ve.head.insertBefore(n,a),i}const p_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ni(){let i=12,n="";for(;i-- >0;)n+=p_[Math.random()*62|0];return n}function Dr(i){const n=[];for(let o=(i||[]).length>>>0;o--;)n[o]=i[o];return n}function Ru(i){return i.classList?Dr(i.classList):(i.getAttribute("class")||"").split(" ").filter(n=>n)}function om(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m_(i){return Object.keys(i||{}).reduce((n,o)=>n+"".concat(o,'="').concat(om(i[o]),'" '),"").trim()}function ks(i){return Object.keys(i||{}).reduce((n,o)=>n+"".concat(o,": ").concat(i[o].trim(),";"),"")}function bu(i){return i.size!==Rt.size||i.x!==Rt.x||i.y!==Rt.y||i.rotate!==Rt.rotate||i.flipX||i.flipY}function g_(i){let{transform:n,containerWidth:o,iconWidth:a}=i;const u={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(n.x*32,", ").concat(n.y*32,") "),h="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),g={transform:"".concat(f," ").concat(h," ").concat(m)},E={transform:"translate(".concat(a/2*-1," -256)")};return{outer:u,inner:g,path:E}}function v_(i){let{transform:n,width:o=Xl,height:a=Xl,startCentered:u=!1}=i,f="";return u&&Yp?f+="translate(".concat(n.x/_n-o/2,"em, ").concat(n.y/_n-a/2,"em) "):u?f+="translate(calc(-50% + ".concat(n.x/_n,"em), calc(-50% + ").concat(n.y/_n,"em)) "):f+="translate(".concat(n.x/_n,"em, ").concat(n.y/_n,"em) "),f+="scale(".concat(n.size/_n*(n.flipX?-1:1),", ").concat(n.size/_n*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var y_=`:root, :host {
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
}`;function sm(){const i=Zp,n=em,o=B.cssPrefix,a=B.replacementClass;let u=y_;if(o!==i||a!==n){const f=new RegExp("\\.".concat(i,"\\-"),"g"),h=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(n),"g");u=u.replace(f,".".concat(o,"-")).replace(h,"--".concat(o,"-")).replace(m,".".concat(a))}return u}let Th=!1;function bl(){B.autoAddCss&&!Th&&(h_(sm()),Th=!0)}var w_={mixout(){return{dom:{css:sm,insertCss:bl}}},hooks(){return{beforeDOMElementCreation(){bl()},beforeI2svg(){bl()}}}};const Xt=Pn||{};Xt[qt]||(Xt[qt]={});Xt[qt].styles||(Xt[qt].styles={});Xt[qt].hooks||(Xt[qt].hooks={});Xt[qt].shims||(Xt[qt].shims=[]);var bt=Xt[qt];const am=[],lm=function(){ve.removeEventListener("DOMContentLoaded",lm),ms=1,am.map(i=>i())};let ms=!1;Jt&&(ms=(ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ve.readyState),ms||ve.addEventListener("DOMContentLoaded",lm));function __(i){Jt&&(ms?setTimeout(i,0):am.push(i))}function ji(i){const{tag:n,attributes:o={},children:a=[]}=i;return typeof i=="string"?om(i):"<".concat(n," ").concat(m_(o),">").concat(a.map(ji).join(""),"</").concat(n,">")}function Ph(i,n,o){if(i&&i[n]&&i[n][o])return{prefix:n,iconName:o,icon:i[n][o]}}var Ll=function(n,o,a,u){var f=Object.keys(n),h=f.length,m=o,g,E,I;for(a===void 0?(g=1,I=n[f[0]]):(g=0,I=a);g<h;g++)E=f[g],I=m(I,n[E],E,n);return I};function S_(i){const n=[];let o=0;const a=i.length;for(;o<a;){const u=i.charCodeAt(o++);if(u>=55296&&u<=56319&&o<a){const f=i.charCodeAt(o++);(f&64512)==56320?n.push(((u&1023)<<10)+(f&1023)+65536):(n.push(u),o--)}else n.push(u)}return n}function nu(i){const n=S_(i);return n.length===1?n[0].toString(16):null}function E_(i,n){const o=i.length;let a=i.charCodeAt(n),u;return a>=55296&&a<=56319&&o>n+1&&(u=i.charCodeAt(n+1),u>=56320&&u<=57343)?(a-55296)*1024+u-56320+65536:a}function xh(i){return Object.keys(i).reduce((n,o)=>{const a=i[o];return!!a.icon?n[a.iconName]=a.icon:n[o]=a,n},{})}function ru(i,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=o,u=xh(n);typeof bt.hooks.addPack=="function"&&!a?bt.hooks.addPack(i,xh(n)):bt.styles[i]=A(A({},bt.styles[i]||{}),u),i==="fas"&&ru("fa",n)}const{styles:Oi,shims:k_}=bt,um=Object.keys(Ou),I_=um.reduce((i,n)=>(i[n]=Object.keys(Ou[n]),i),{});let Lu=null,cm={},fm={},dm={},hm={},pm={};function C_(i){return~u_.indexOf(i)}function T_(i,n){const o=n.split("-"),a=o[0],u=o.slice(1).join("-");return a===i&&u!==""&&!C_(u)?u:null}const mm=()=>{const i=a=>Ll(Oi,(u,f,h)=>(u[h]=Ll(f,a,{}),u),{});cm=i((a,u,f)=>(u[3]&&(a[u[3]]=f),u[2]&&u[2].filter(m=>typeof m=="number").forEach(m=>{a[m.toString(16)]=f}),a)),fm=i((a,u,f)=>(a[f]=f,u[2]&&u[2].filter(m=>typeof m=="string").forEach(m=>{a[m]=f}),a)),pm=i((a,u,f)=>{const h=u[2];return a[f]=f,h.forEach(m=>{a[m]=f}),a});const n="far"in Oi||B.autoFetchSvg,o=Ll(k_,(a,u)=>{const f=u[0];let h=u[1];const m=u[2];return h==="far"&&!n&&(h="fas"),typeof f=="string"&&(a.names[f]={prefix:h,iconName:m}),typeof f=="number"&&(a.unicodes[f.toString(16)]={prefix:h,iconName:m}),a},{names:{},unicodes:{}});dm=o.names,hm=o.unicodes,Lu=Is(B.styleDefault,{family:B.familyDefault})};d_(i=>{Lu=Is(i.styleDefault,{family:B.familyDefault})});mm();function Du(i,n){return(cm[i]||{})[n]}function P_(i,n){return(fm[i]||{})[n]}function Yn(i,n){return(pm[i]||{})[n]}function gm(i){return dm[i]||{prefix:null,iconName:null}}function x_(i){const n=hm[i],o=Du("fas",i);return n||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function xn(){return Lu}const vm=()=>({prefix:null,iconName:null,rest:[]});function A_(i){let n=Be;const o=um.reduce((a,u)=>(a[u]="".concat(B.cssPrefix,"-").concat(u),a),{});return Xp.forEach(a=>{(i.includes(o[a])||i.some(u=>I_[a].includes(u)))&&(n=a)}),n}function Is(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:o=Be}=n,a=i_[o][i];if(o===Es&&!i)return"fad";const u=Ch[o][i]||Ch[o][a],f=i in bt.styles?i:null;return u||f||null}function N_(i){let n=[],o=null;return i.forEach(a=>{const u=T_(B.cssPrefix,a);u?o=u:a&&n.push(a)}),{iconName:o,rest:n}}function Ah(i){return i.sort().filter((n,o,a)=>a.indexOf(n)===o)}function Cs(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:o=!1}=n;let a=null;const u=ql.concat(Kw),f=Ah(i.filter(O=>u.includes(O))),h=Ah(i.filter(O=>!ql.includes(O))),m=f.filter(O=>(a=O,!qp.includes(O))),[g=null]=m,E=A_(f),I=A(A({},N_(h)),{},{prefix:Is(g,{family:E})});return A(A(A({},I),L_({values:i,family:E,styles:Oi,config:B,canonical:I,givenPrefix:a})),O_(o,a,I))}function O_(i,n,o){let{prefix:a,iconName:u}=o;if(i||!a||!u)return{prefix:a,iconName:u};const f=n==="fa"?gm(u):{},h=Yn(a,u);return u=f.iconName||h||u,a=f.prefix||a,a==="far"&&!Oi.far&&Oi.fas&&!B.autoFetchSvg&&(a="fas"),{prefix:a,iconName:u}}const R_=Xp.filter(i=>i!==Be||i!==Es),b_=Object.keys(Ql).filter(i=>i!==Be).map(i=>Object.keys(Ql[i])).flat();function L_(i){const{values:n,family:o,canonical:a,givenPrefix:u="",styles:f={},config:h={}}=i,m=o===Es,g=n.includes("fa-duotone")||n.includes("fad"),E=h.familyDefault==="duotone",I=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(g||E||I)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&R_.includes(o)&&(Object.keys(f).find(R=>b_.includes(R))||h.autoFetchSvg)){const R=Uw.get(o).defaultShortPrefixId;a.prefix=R,a.iconName=Yn(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||u==="fa")&&(a.prefix=xn()||"fas"),a}class D_{constructor(){this.definitions={}}add(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];const u=o.reduce(this._pullDefinitions,{});Object.keys(u).forEach(f=>{this.definitions[f]=A(A({},this.definitions[f]||{}),u[f]),ru(f,u[f]);const h=Ou[Be][f];h&&ru(h,u[f]),mm()})}reset(){this.definitions={}}_pullDefinitions(n,o){const a=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(a).map(u=>{const{prefix:f,iconName:h,icon:m}=a[u],g=m[2];n[f]||(n[f]={}),g.length>0&&g.forEach(E=>{typeof E=="string"&&(n[f][E]=m)}),n[f][h]=m}),n}}let Nh=[],Tr={};const Rr={},M_=Object.keys(Rr);function F_(i,n){let{mixoutsTo:o}=n;return Nh=i,Tr={},Object.keys(Rr).forEach(a=>{M_.indexOf(a)===-1&&delete Rr[a]}),Nh.forEach(a=>{const u=a.mixout?a.mixout():{};if(Object.keys(u).forEach(f=>{typeof u[f]=="function"&&(o[f]=u[f]),typeof u[f]=="object"&&Object.keys(u[f]).forEach(h=>{o[f]||(o[f]={}),o[f][h]=u[f][h]})}),a.hooks){const f=a.hooks();Object.keys(f).forEach(h=>{Tr[h]||(Tr[h]=[]),Tr[h].push(f[h])})}a.provides&&a.provides(Rr)}),o}function iu(i,n){for(var o=arguments.length,a=new Array(o>2?o-2:0),u=2;u<o;u++)a[u-2]=arguments[u];return(Tr[i]||[]).forEach(h=>{n=h.apply(null,[n,...a])}),n}function Jn(i){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];(Tr[i]||[]).forEach(f=>{f.apply(null,o)})}function An(){const i=arguments[0],n=Array.prototype.slice.call(arguments,1);return Rr[i]?Rr[i].apply(null,n):void 0}function ou(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:n}=i;const o=i.prefix||xn();if(n)return n=Yn(o,n)||n,Ph(ym.definitions,o,n)||Ph(bt.styles,o,n)}const ym=new D_,U_=()=>{B.autoReplaceSvg=!1,B.observeMutations=!1,Jn("noAuto")},z_={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jt?(Jn("beforeI2svg",i),An("pseudoElements2svg",i),An("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n}=i;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,__(()=>{B_({autoReplaceSvgRoot:n}),Jn("watch",i)})}},j_={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Yn(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const n=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],o=Is(i[0]);return{prefix:o,iconName:Yn(o,n)||n}}if(typeof i=="string"&&(i.indexOf("".concat(B.cssPrefix,"-"))>-1||i.match(o_))){const n=Cs(i.split(" "),{skipLookups:!0});return{prefix:n.prefix||xn(),iconName:Yn(n.prefix,n.iconName)||n.iconName}}if(typeof i=="string"){const n=xn();return{prefix:n,iconName:Yn(n,i)||i}}}},it={noAuto:U_,config:B,dom:z_,parse:j_,library:ym,findIconDefinition:ou,toHtml:ji},B_=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n=ve}=i;(Object.keys(bt.styles).length>0||B.autoFetchSvg)&&Jt&&B.autoReplaceSvg&&it.dom.i2svg({node:n})};function Ts(i,n){return Object.defineProperty(i,"abstract",{get:n}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(o=>ji(o))}}),Object.defineProperty(i,"node",{get:function(){if(!Jt)return;const o=ve.createElement("div");return o.innerHTML=i.html,o.children}}),i}function H_(i){let{children:n,main:o,mask:a,attributes:u,styles:f,transform:h}=i;if(bu(h)&&o.found&&!a.found){const{width:m,height:g}=o,E={x:m/g/2,y:.5};u.style=ks(A(A({},f),{},{"transform-origin":"".concat(E.x+h.x/16,"em ").concat(E.y+h.y/16,"em")}))}return[{tag:"svg",attributes:u,children:n}]}function V_(i){let{prefix:n,iconName:o,children:a,attributes:u,symbol:f}=i;const h=f===!0?"".concat(n,"-").concat(B.cssPrefix,"-").concat(o):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},u),{},{id:h}),children:a}]}]}function Mu(i){const{icons:{main:n,mask:o},prefix:a,iconName:u,transform:f,symbol:h,title:m,maskId:g,titleId:E,extra:I,watchable:O=!1}=i,{width:R,height:b}=o.found?o:n,X=Vw.includes(a),Q=[B.replacementClass,u?"".concat(B.cssPrefix,"-").concat(u):""].filter(de=>I.classes.indexOf(de)===-1).filter(de=>de!==""||!!de).concat(I.classes).join(" ");let H={children:[],attributes:A(A({},I.attributes),{},{"data-prefix":a,"data-icon":u,class:Q,role:I.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(b)})};const q=X&&!~I.classes.indexOf("fa-fw")?{width:"".concat(R/b*16*.0625,"em")}:{};O&&(H.attributes[Xn]=""),m&&(H.children.push({tag:"title",attributes:{id:H.attributes["aria-labelledby"]||"title-".concat(E||Ni())},children:[m]}),delete H.attributes.title);const ne=A(A({},H),{},{prefix:a,iconName:u,main:n,mask:o,maskId:g,transform:f,symbol:h,styles:A(A({},q),I.styles)}),{children:ae,attributes:le}=o.found&&n.found?An("generateAbstractMask",ne)||{children:[],attributes:{}}:An("generateAbstractIcon",ne)||{children:[],attributes:{}};return ne.children=ae,ne.attributes=le,h?V_(ne):H_(ne)}function Oh(i){const{content:n,width:o,height:a,transform:u,title:f,extra:h,watchable:m=!1}=i,g=A(A(A({},h.attributes),f?{title:f}:{}),{},{class:h.classes.join(" ")});m&&(g[Xn]="");const E=A({},h.styles);bu(u)&&(E.transform=v_({transform:u,startCentered:!0,width:o,height:a}),E["-webkit-transform"]=E.transform);const I=ks(E);I.length>0&&(g.style=I);const O=[];return O.push({tag:"span",attributes:g,children:[n]}),f&&O.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),O}function $_(i){const{content:n,title:o,extra:a}=i,u=A(A(A({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")}),f=ks(a.styles);f.length>0&&(u.style=f);const h=[];return h.push({tag:"span",attributes:u,children:[n]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}const{styles:Dl}=bt;function su(i){const n=i[0],o=i[1],[a]=i.slice(4);let u=null;return Array.isArray(a)?u={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(Rl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Rl.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Rl.PRIMARY),fill:"currentColor",d:a[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:o,icon:u}}const W_={found:!1,width:512,height:512};function K_(i,n){!tm&&!B.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(n,'" is missing.'))}function au(i,n){let o=n;return n==="fa"&&B.styleDefault!==null&&(n=xn()),new Promise((a,u)=>{if(o==="fa"){const f=gm(i)||{};i=f.iconName||i,n=f.prefix||n}if(i&&n&&Dl[n]&&Dl[n][i]){const f=Dl[n][i];return a(su(f))}K_(i,n),a(A(A({},W_),{},{icon:B.showMissingIcons&&i?An("missingIconAbstract")||{}:{}}))})}const Rh=()=>{},lu=B.measurePerformance&&es&&es.mark&&es.measure?es:{mark:Rh,measure:Rh},Ei='FA "6.7.1"',G_=i=>(lu.mark("".concat(Ei," ").concat(i," begins")),()=>wm(i)),wm=i=>{lu.mark("".concat(Ei," ").concat(i," ends")),lu.measure("".concat(Ei," ").concat(i),"".concat(Ei," ").concat(i," begins"),"".concat(Ei," ").concat(i," ends"))};var Fu={begin:G_,end:wm};const ss=()=>{};function bh(i){return typeof(i.getAttribute?i.getAttribute(Xn):null)=="string"}function Y_(i){const n=i.getAttribute?i.getAttribute(Au):null,o=i.getAttribute?i.getAttribute(Nu):null;return n&&o}function Q_(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(B.replacementClass)}function q_(){return B.autoReplaceSvg===!0?as.replace:as[B.autoReplaceSvg]||as.replace}function X_(i){return ve.createElementNS("http://www.w3.org/2000/svg",i)}function J_(i){return ve.createElement(i)}function _m(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:o=i.tag==="svg"?X_:J_}=n;if(typeof i=="string")return ve.createTextNode(i);const a=o(i.tag);return Object.keys(i.attributes||[]).forEach(function(f){a.setAttribute(f,i.attributes[f])}),(i.children||[]).forEach(function(f){a.appendChild(_m(f,{ceFn:o}))}),a}function Z_(i){let n=" ".concat(i.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}const as={replace:function(i){const n=i[0];if(n.parentNode)if(i[1].forEach(o=>{n.parentNode.insertBefore(_m(o),n)}),n.getAttribute(Xn)===null&&B.keepOriginalSource){let o=ve.createComment(Z_(n));n.parentNode.replaceChild(o,n)}else n.remove()},nest:function(i){const n=i[0],o=i[1];if(~Ru(n).indexOf(B.replacementClass))return as.replace(i);const a=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){const f=o[0].attributes.class.split(" ").reduce((h,m)=>(m===B.replacementClass||m.match(a)?h.toSvg.push(m):h.toNode.push(m),h),{toNode:[],toSvg:[]});o[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",f.toNode.join(" "))}const u=o.map(f=>ji(f)).join(`
`);n.setAttribute(Xn,""),n.innerHTML=u}};function Lh(i){i()}function Sm(i,n){const o=typeof n=="function"?n:ss;if(i.length===0)o();else{let a=Lh;B.mutateApproach===n_&&(a=Pn.requestAnimationFrame||Lh),a(()=>{const u=q_(),f=Fu.begin("mutate");i.map(u),f(),o()})}}let Uu=!1;function Em(){Uu=!0}function uu(){Uu=!1}let gs=null;function Dh(i){if(!Sh||!B.observeMutations)return;const{treeCallback:n=ss,nodeCallback:o=ss,pseudoElementsCallback:a=ss,observeMutationsRoot:u=ve}=i;gs=new Sh(f=>{if(Uu)return;const h=xn();Dr(f).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!bh(m.addedNodes[0])&&(B.searchPseudoElements&&a(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&B.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&bh(m.target)&&~l_.indexOf(m.attributeName))if(m.attributeName==="class"&&Y_(m.target)){const{prefix:g,iconName:E}=Cs(Ru(m.target));m.target.setAttribute(Au,g||h),E&&m.target.setAttribute(Nu,E)}else Q_(m.target)&&o(m.target)})}),Jt&&gs.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function eS(){gs&&gs.disconnect()}function tS(i){const n=i.getAttribute("style");let o=[];return n&&(o=n.split(";").reduce((a,u)=>{const f=u.split(":"),h=f[0],m=f.slice(1);return h&&m.length>0&&(a[h]=m.join(":").trim()),a},{})),o}function nS(i){const n=i.getAttribute("data-prefix"),o=i.getAttribute("data-icon"),a=i.innerText!==void 0?i.innerText.trim():"";let u=Cs(Ru(i));return u.prefix||(u.prefix=xn()),n&&o&&(u.prefix=n,u.iconName=o),u.iconName&&u.prefix||(u.prefix&&a.length>0&&(u.iconName=P_(u.prefix,i.innerText)||Du(u.prefix,nu(i.innerText))),!u.iconName&&B.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=i.firstChild.data)),u}function rS(i){const n=Dr(i.attributes).reduce((u,f)=>(u.name!=="class"&&u.name!=="style"&&(u[f.name]=f.value),u),{}),o=i.getAttribute("title"),a=i.getAttribute("data-fa-title-id");return B.autoA11y&&(o?n["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(a||Ni()):(n["aria-hidden"]="true",n.focusable="false")),n}function iS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mh(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:o,prefix:a,rest:u}=nS(i),f=rS(i),h=iu("parseNodeAttributes",{},i);let m=n.styleParser?tS(i):[];return A({iconName:o,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:a,transform:Rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:f}},h)}const{styles:oS}=bt;function km(i){const n=B.autoReplaceSvg==="nest"?Mh(i,{styleParser:!1}):Mh(i);return~n.extra.classes.indexOf(rm)?An("generateLayersText",i,n):An("generateSvgReplacementMutation",i,n)}function sS(){return[...jw,...ql]}function Fh(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jt)return Promise.resolve();const o=ve.documentElement.classList,a=I=>o.add("".concat(Ih,"-").concat(I)),u=I=>o.remove("".concat(Ih,"-").concat(I)),f=B.autoFetchSvg?sS():qp.concat(Object.keys(oS));f.includes("fa")||f.push("fa");const h=[".".concat(rm,":not([").concat(Xn,"])")].concat(f.map(I=>".".concat(I,":not([").concat(Xn,"])"))).join(", ");if(h.length===0)return Promise.resolve();let m=[];try{m=Dr(i.querySelectorAll(h))}catch{}if(m.length>0)a("pending"),u("complete");else return Promise.resolve();const g=Fu.begin("onTree"),E=m.reduce((I,O)=>{try{const R=km(O);R&&I.push(R)}catch(R){tm||R.name==="MissingIcon"&&console.error(R)}return I},[]);return new Promise((I,O)=>{Promise.all(E).then(R=>{Sm(R,()=>{a("active"),a("complete"),u("pending"),typeof n=="function"&&n(),g(),I()})}).catch(R=>{g(),O(R)})})}function aS(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;km(i).then(o=>{o&&Sm([o],n)})}function lS(i){return function(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(n||{}).icon?n:ou(n||{});let{mask:u}=o;return u&&(u=(u||{}).icon?u:ou(u||{})),i(a,A(A({},o),{},{mask:u}))}}const uS=function(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:o=Rt,symbol:a=!1,mask:u=null,maskId:f=null,title:h=null,titleId:m=null,classes:g=[],attributes:E={},styles:I={}}=n;if(!i)return;const{prefix:O,iconName:R,icon:b}=i;return Ts(A({type:"icon"},i),()=>(Jn("beforeDOMElementCreation",{iconDefinition:i,params:n}),B.autoA11y&&(h?E["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(m||Ni()):(E["aria-hidden"]="true",E.focusable="false")),Mu({icons:{main:su(b),mask:u?su(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:R,transform:A(A({},Rt),o),symbol:a,title:h,maskId:f,titleId:m,extra:{attributes:E,styles:I,classes:g}})))};var cS={mixout(){return{icon:lS(uS)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=Fh,i.nodeCallback=aS,i}}},provides(i){i.i2svg=function(n){const{node:o=ve,callback:a=()=>{}}=n;return Fh(o,a)},i.generateSvgReplacementMutation=function(n,o){const{iconName:a,title:u,titleId:f,prefix:h,transform:m,symbol:g,mask:E,maskId:I,extra:O}=o;return new Promise((R,b)=>{Promise.all([au(a,h),E.iconName?au(E.iconName,E.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(X=>{let[Q,H]=X;R([n,Mu({icons:{main:Q,mask:H},prefix:h,iconName:a,transform:m,symbol:g,maskId:I,title:u,titleId:f,extra:O,watchable:!0})])}).catch(b)})},i.generateAbstractIcon=function(n){let{children:o,attributes:a,main:u,transform:f,styles:h}=n;const m=ks(h);m.length>0&&(a.style=m);let g;return bu(f)&&(g=An("generateAbstractTransformGrouping",{main:u,transform:f,containerWidth:u.width,iconWidth:u.width})),o.push(g||u.icon),{children:o,attributes:a}}}},fS={mixout(){return{layer(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:o=[]}=n;return Ts({type:"layer"},()=>{Jn("beforeDOMElementCreation",{assembler:i,params:n});let a=[];return i(u=>{Array.isArray(u)?u.map(f=>{a=a.concat(f.abstract)}):a=a.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers"),...o].join(" ")},children:a}]})}}}},dS={mixout(){return{counter(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:o=null,classes:a=[],attributes:u={},styles:f={}}=n;return Ts({type:"counter",content:i},()=>(Jn("beforeDOMElementCreation",{content:i,params:n}),$_({content:i.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter"),...a]}})))}}}},hS={mixout(){return{text(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:o=Rt,title:a=null,classes:u=[],attributes:f={},styles:h={}}=n;return Ts({type:"text",content:i},()=>(Jn("beforeDOMElementCreation",{content:i,params:n}),Oh({content:i,transform:A(A({},Rt),o),title:a,extra:{attributes:f,styles:h,classes:["".concat(B.cssPrefix,"-layers-text"),...u]}})))}}},provides(i){i.generateLayersText=function(n,o){const{title:a,transform:u,extra:f}=o;let h=null,m=null;if(Yp){const g=parseInt(getComputedStyle(n).fontSize,10),E=n.getBoundingClientRect();h=E.width/g,m=E.height/g}return B.autoA11y&&!a&&(f.attributes["aria-hidden"]="true"),Promise.resolve([n,Oh({content:n.innerHTML,width:h,height:m,transform:u,title:a,extra:f,watchable:!0})])}}};const pS=new RegExp('"',"ug"),Uh=[1105920,1112319],zh=A(A(A(A({},{FontAwesome:{normal:"fas",400:"fas"}}),Fw),e_),Gw),cu=Object.keys(zh).reduce((i,n)=>(i[n.toLowerCase()]=zh[n],i),{}),mS=Object.keys(cu).reduce((i,n)=>{const o=cu[n];return i[n]=o[900]||[...Object.entries(o)][0][1],i},{});function gS(i){const n=i.replace(pS,""),o=E_(n,0),a=o>=Uh[0]&&o<=Uh[1],u=n.length===2?n[0]===n[1]:!1;return{value:nu(u?n[0]:n),isSecondary:a||u}}function vS(i,n){const o=i.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),u=isNaN(a)?"normal":a;return(cu[o]||{})[u]||mS[o]}function jh(i,n){const o="".concat(t_).concat(n.replace(":","-"));return new Promise((a,u)=>{if(i.getAttribute(o)!==null)return a();const h=Dr(i.children).filter(R=>R.getAttribute(Jl)===n)[0],m=Pn.getComputedStyle(i,n),g=m.getPropertyValue("font-family"),E=g.match(s_),I=m.getPropertyValue("font-weight"),O=m.getPropertyValue("content");if(h&&!E)return i.removeChild(h),a();if(E&&O!=="none"&&O!==""){const R=m.getPropertyValue("content");let b=vS(g,I);const{value:X,isSecondary:Q}=gS(R),H=E[0].startsWith("FontAwesome");let q=Du(b,X),ne=q;if(H){const ae=x_(X);ae.iconName&&ae.prefix&&(q=ae.iconName,b=ae.prefix)}if(q&&!Q&&(!h||h.getAttribute(Au)!==b||h.getAttribute(Nu)!==ne)){i.setAttribute(o,ne),h&&i.removeChild(h);const ae=iS(),{extra:le}=ae;le.attributes[Jl]=n,au(q,b).then(de=>{const Ie=Mu(A(A({},ae),{},{icons:{main:de,mask:vm()},prefix:b,iconName:ne,extra:le,watchable:!0})),Ce=ve.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?i.insertBefore(Ce,i.firstChild):i.appendChild(Ce),Ce.outerHTML=Ie.map(Me=>ji(Me)).join(`
`),i.removeAttribute(o),a()}).catch(u)}else a()}else a()})}function yS(i){return Promise.all([jh(i,"::before"),jh(i,"::after")])}function wS(i){return i.parentNode!==document.head&&!~r_.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(Jl)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function Bh(i){if(Jt)return new Promise((n,o)=>{const a=Dr(i.querySelectorAll("*")).filter(wS).map(yS),u=Fu.begin("searchPseudoElements");Em(),Promise.all(a).then(()=>{u(),uu(),n()}).catch(()=>{u(),uu(),o()})})}var _S={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=Bh,i}}},provides(i){i.pseudoElements2svg=function(n){const{node:o=ve}=n;B.searchPseudoElements&&Bh(o)}}};let Hh=!1;var SS={mixout(){return{dom:{unwatch(){Em(),Hh=!0}}}},hooks(){return{bootstrap(){Dh(iu("mutationObserverCallbacks",{}))},noAuto(){eS()},watch(i){const{observeMutationsRoot:n}=i;Hh?uu():Dh(iu("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}};const Vh=i=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((o,a)=>{const u=a.toLowerCase().split("-"),f=u[0];let h=u.slice(1).join("-");if(f&&h==="h")return o.flipX=!0,o;if(f&&h==="v")return o.flipY=!0,o;if(h=parseFloat(h),isNaN(h))return o;switch(f){case"grow":o.size=o.size+h;break;case"shrink":o.size=o.size-h;break;case"left":o.x=o.x-h;break;case"right":o.x=o.x+h;break;case"up":o.y=o.y-h;break;case"down":o.y=o.y+h;break;case"rotate":o.rotate=o.rotate+h;break}return o},n)};var ES={mixout(){return{parse:{transform:i=>Vh(i)}}},hooks(){return{parseNodeAttributes(i,n){const o=n.getAttribute("data-fa-transform");return o&&(i.transform=Vh(o)),i}}},provides(i){i.generateAbstractTransformGrouping=function(n){let{main:o,transform:a,containerWidth:u,iconWidth:f}=n;const h={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(a.x*32,", ").concat(a.y*32,") "),g="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),E="rotate(".concat(a.rotate," 0 0)"),I={transform:"".concat(m," ").concat(g," ").concat(E)},O={transform:"translate(".concat(f/2*-1," -256)")},R={outer:h,inner:I,path:O};return{tag:"g",attributes:A({},R.outer),children:[{tag:"g",attributes:A({},R.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:A(A({},o.icon.attributes),R.path)}]}]}}}};const Ml={x:0,y:0,width:"100%",height:"100%"};function $h(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||n)&&(i.attributes.fill="black"),i}function kS(i){return i.tag==="g"?i.children:[i]}var IS={hooks(){return{parseNodeAttributes(i,n){const o=n.getAttribute("data-fa-mask"),a=o?Cs(o.split(" ").map(u=>u.trim())):vm();return a.prefix||(a.prefix=xn()),i.mask=a,i.maskId=n.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(n){let{children:o,attributes:a,main:u,mask:f,maskId:h,transform:m}=n;const{width:g,icon:E}=u,{width:I,icon:O}=f,R=g_({transform:m,containerWidth:I,iconWidth:g}),b={tag:"rect",attributes:A(A({},Ml),{},{fill:"white"})},X=E.children?{children:E.children.map($h)}:{},Q={tag:"g",attributes:A({},R.inner),children:[$h(A({tag:E.tag,attributes:A(A({},E.attributes),R.path)},X))]},H={tag:"g",attributes:A({},R.outer),children:[Q]},q="mask-".concat(h||Ni()),ne="clip-".concat(h||Ni()),ae={tag:"mask",attributes:A(A({},Ml),{},{id:q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,H]},le={tag:"defs",children:[{tag:"clipPath",attributes:{id:ne},children:kS(O)},ae]};return o.push(le,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(ne,")"),mask:"url(#".concat(q,")")},Ml)}),{children:o,attributes:a}}}},CS={provides(i){let n=!1;Pn.matchMedia&&(n=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const o=[],a={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=A(A({},u),{},{attributeName:"opacity"}),h={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||h.children.push({tag:"animate",attributes:A(A({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},f),{},{values:"1;0;1;1;0;1;"})}),o.push(h),o.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},f),{},{values:"1;0;0;0;0;1;"})}]}),n||o.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},TS={hooks(){return{parseNodeAttributes(i,n){const o=n.getAttribute("data-fa-symbol"),a=o===null?!1:o===""?!0:o;return i.symbol=a,i}}}},PS=[w_,cS,fS,dS,hS,_S,SS,ES,IS,CS,TS];F_(PS,{mixoutsTo:it});it.noAuto;it.config;it.library;it.dom;const fu=it.parse;it.findIconDefinition;it.toHtml;const xS=it.icon;it.layer;it.text;it.counter;var Fl={exports:{}},Ul,Wh;function AS(){if(Wh)return Ul;Wh=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ul=i,Ul}var zl,Kh;function NS(){if(Kh)return zl;Kh=1;var i=AS();function n(){}function o(){}return o.resetWarningCache=n,zl=function(){function a(h,m,g,E,I,O){if(O!==i){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}a.isRequired=a;function u(){return a}var f={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:u,element:a,elementType:a,instanceOf:u,node:a,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:o,resetWarningCache:n};return f.PropTypes=f,f},zl}var Gh;function OS(){return Gh||(Gh=1,Fl.exports=NS()()),Fl.exports}var RS=OS();const te=pu(RS);function Yh(i,n){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);n&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),o.push.apply(o,a)}return o}function Nt(i){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?Yh(Object(o),!0).forEach(function(a){Pr(i,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):Yh(Object(o)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(o,a))})}return i}function vs(i){"@babel/helpers - typeof";return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vs(i)}function Pr(i,n,o){return n in i?Object.defineProperty(i,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[n]=o,i}function bS(i,n){if(i==null)return{};var o={},a=Object.keys(i),u,f;for(f=0;f<a.length;f++)u=a[f],!(n.indexOf(u)>=0)&&(o[u]=i[u]);return o}function LS(i,n){if(i==null)return{};var o=bS(i,n),a,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);for(u=0;u<f.length;u++)a=f[u],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(o[a]=i[a])}return o}function du(i){return DS(i)||MS(i)||FS(i)||US()}function DS(i){if(Array.isArray(i))return hu(i)}function MS(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function FS(i,n){if(i){if(typeof i=="string")return hu(i,n);var o=Object.prototype.toString.call(i).slice(8,-1);if(o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set")return Array.from(i);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return hu(i,n)}}function hu(i,n){(n==null||n>i.length)&&(n=i.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=i[o];return a}function US(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zS(i){var n,o=i.beat,a=i.fade,u=i.beatFade,f=i.bounce,h=i.shake,m=i.flash,g=i.spin,E=i.spinPulse,I=i.spinReverse,O=i.pulse,R=i.fixedWidth,b=i.inverse,X=i.border,Q=i.listItem,H=i.flip,q=i.size,ne=i.rotation,ae=i.pull,le=(n={"fa-beat":o,"fa-fade":a,"fa-beat-fade":u,"fa-bounce":f,"fa-shake":h,"fa-flash":m,"fa-spin":g,"fa-spin-reverse":I,"fa-spin-pulse":E,"fa-pulse":O,"fa-fw":R,"fa-inverse":b,"fa-border":X,"fa-li":Q,"fa-flip":H===!0,"fa-flip-horizontal":H==="horizontal"||H==="both","fa-flip-vertical":H==="vertical"||H==="both"},Pr(n,"fa-".concat(q),typeof q<"u"&&q!==null),Pr(n,"fa-rotate-".concat(ne),typeof ne<"u"&&ne!==null&&ne!==0),Pr(n,"fa-pull-".concat(ae),typeof ae<"u"&&ae!==null),Pr(n,"fa-swap-opacity",i.swapOpacity),n);return Object.keys(le).map(function(de){return le[de]?de:null}).filter(function(de){return de})}function jS(i){return i=i-0,i===i}function Im(i){return jS(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(n,o){return o?o.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var BS=["style"];function HS(i){return i.charAt(0).toUpperCase()+i.slice(1)}function VS(i){return i.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,o){var a=o.indexOf(":"),u=Im(o.slice(0,a)),f=o.slice(a+1).trim();return u.startsWith("webkit")?n[HS(u)]=f:n[u]=f,n},{})}function Cm(i,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(g){return Cm(i,g)}),u=Object.keys(n.attributes||{}).reduce(function(g,E){var I=n.attributes[E];switch(E){case"class":g.attrs.className=I,delete n.attributes.class;break;case"style":g.attrs.style=VS(I);break;default:E.indexOf("aria-")===0||E.indexOf("data-")===0?g.attrs[E.toLowerCase()]=I:g.attrs[Im(E)]=I}return g},{attrs:{}}),f=o.style,h=f===void 0?{}:f,m=LS(o,BS);return u.attrs.style=Nt(Nt({},u.attrs.style),h),i.apply(void 0,[n.tag,Nt(Nt({},u.attrs),m)].concat(du(a)))}var Tm=!1;try{Tm=!0}catch{}function $S(){if(!Tm&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function Qh(i){if(i&&vs(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(fu.icon)return fu.icon(i);if(i===null)return null;if(i&&vs(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function jl(i,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Pr({},i,n):{}}var qh={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ys=gu.forwardRef(function(i,n){var o=Nt(Nt({},qh),i),a=o.icon,u=o.mask,f=o.symbol,h=o.className,m=o.title,g=o.titleId,E=o.maskId,I=Qh(a),O=jl("classes",[].concat(du(zS(o)),du((h||"").split(" ")))),R=jl("transform",typeof o.transform=="string"?fu.transform(o.transform):o.transform),b=jl("mask",Qh(u)),X=xS(I,Nt(Nt(Nt(Nt({},O),R),b),{},{symbol:f,title:m,titleId:g,maskId:E}));if(!X)return $S("Could not find icon",I),null;var Q=X.abstract,H={ref:n};return Object.keys(o).forEach(function(q){qh.hasOwnProperty(q)||(H[q]=o[q])}),WS(Q[0],H)});ys.displayName="FontAwesomeIcon";ys.propTypes={beat:te.bool,border:te.bool,beatFade:te.bool,bounce:te.bool,className:te.string,fade:te.bool,flash:te.bool,mask:te.oneOfType([te.object,te.array,te.string]),maskId:te.string,fixedWidth:te.bool,inverse:te.bool,flip:te.oneOf([!0,!1,"horizontal","vertical","both"]),icon:te.oneOfType([te.object,te.array,te.string]),listItem:te.bool,pull:te.oneOf(["right","left"]),pulse:te.bool,rotation:te.oneOf([0,90,180,270]),shake:te.bool,size:te.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:te.bool,spinPulse:te.bool,spinReverse:te.bool,symbol:te.oneOfType([te.bool,te.string]),title:te.string,titleId:te.string,transform:te.oneOfType([te.string,te.object]),swapOpacity:te.bool};var WS=Cm.bind(null,gu.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const KS={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},GS={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const YS={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},QS=({setUserDetails:i,setCurrentPage:n})=>{const[o,a]=St.useState(""),[u,f]=St.useState(""),[h,m]=St.useState(""),[g,E]=St.useState(""),[I,O]=St.useState(!1),[R,b]=St.useState(""),X=()=>{O(!I)},Q=async()=>{try{const ne=(await T1(Ai,kw)).user;i({username:ne.displayName,photoURL:ne.photoURL}),b(""),n("Home")}catch{b("Google sign-in failed. Please try again.")}},H=async()=>{if(!o.trim()){b("Username is required.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)){b("Invalid email format.");return}if(h.length<8||!/[A-Z]/.test(h)||!/\d/.test(h)){b("Password must be at least 8 characters long and include at least one uppercase letter and one number.");return}if(h!==g){b("Passwords do not match.");return}try{const q=await r1(Ai,u,h);i({username:o,photoURL:null}),b(""),n("Home")}catch{b("Sign-up failed. Please try again.")}};return W.jsxs("div",{className:"max-w-md mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg",children:[W.jsx("h1",{className:"text-2xl font-bold text-center mb-6",children:"Sign In"}),R&&W.jsx("p",{className:"bg-red-500 text-white text-sm p-2 rounded mb-4",children:R}),W.jsxs("div",{className:"mb-4",children:[W.jsx("label",{className:"block text-gray-300 mb-2",children:"Username *"}),W.jsx("input",{type:"text",value:o,onChange:q=>a(q.target.value),placeholder:"Enter your username",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"})]}),W.jsxs("div",{className:"mb-4",children:[W.jsx("label",{className:"block text-gray-300 mb-2",children:"Email *"}),W.jsx("input",{type:"email",value:u,onChange:q=>f(q.target.value),placeholder:"Enter your email",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"})]}),W.jsxs("div",{className:"mb-4 relative",children:[W.jsx("label",{className:"block text-gray-300 mb-2",children:"Password *"}),W.jsx("input",{type:I?"text":"password",value:h,onChange:q=>m(q.target.value),placeholder:"Enter your password",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"}),W.jsx("span",{className:"absolute right-3 top-3 cursor-pointer text-gray-400",onClick:X,children:W.jsx(ys,{icon:I?KS:GS})})]}),W.jsxs("div",{className:"mb-4",children:[W.jsx("label",{className:"block text-gray-300 mb-2",children:"Confirm Password *"}),W.jsx("input",{type:"password",value:g,onChange:q=>E(q.target.value),placeholder:"Confirm your password",className:"w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"})]}),W.jsx("button",{onClick:H,className:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300",children:"Submit"}),W.jsxs("button",{onClick:Q,className:"w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 mt-4 flex items-center justify-center space-x-2",children:[W.jsx(ys,{icon:YS}),W.jsx("span",{children:"Sign In with Google"})]})]})};function qS(){const[i,n]=St.useState("Home"),[o,a]=St.useState(null);St.useEffect(()=>{const h=s1(Ai,m=>{a(m?{username:m.displayName||m.email,photoURL:m.photoURL}:null)});return()=>h()},[]);const u=async()=>{try{await bp(Ai),a(null),n("Home")}catch(h){console.error("Logout failed:",h)}},f=()=>{switch(i){case"Home":return W.jsx(Pw,{});case"Docs":return W.jsx("div",{children:"Documentation Page"});case"Links":return W.jsx("div",{children:"Links Page"});case"SignIn":return W.jsx(QS,{setUserDetails:a,setCurrentPage:n});default:return W.jsx("div",{children:"404 - Page Not Found"})}};return W.jsxs(W.Fragment,{children:[W.jsx(Tw,{}),W.jsxs("div",{className:"relative z-10",children:[W.jsx(Cw,{currentPage:i,setCurrentPage:n,userDetails:o,onLogout:u}),W.jsx("main",{className:"p-4",children:f()})]})]})}Rv.createRoot(document.getElementById("root")).render(W.jsx(gu.StrictMode,{children:W.jsx(qS,{})}));
//# sourceMappingURL=index-DyDzYDCD.js.map
