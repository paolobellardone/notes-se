/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","preact/jsx-runtime","preact/hooks","preact","ojs/ojconfig","ojs/ojcore-base","ojs/ojlogger","ojs/ojsoundutils","ojs/ojanimation","ojs/ojtranslation","ojs/ojcontext","ojs/ojdataproviderhandler","ojs/ojvcomponent","ojs/ojbutton"],function(e,t,n,s,r,o,a,i,l,c,u,d,g,p){"use strict";function h({onAction:e,title:n="Close"}){return t.jsx("div",{class:"oj-messagebanner-close-button","data-oj-message-close-button":"",children:t.jsxs("oj-button",{class:"oj-button-sm",display:"icons",chroming:"borderless",title:n,onojAction:e,children:[t.jsx("span",{slot:"startIcon",class:"oj-fwk-icon oj-fwk-icon-cross"}),t.jsx("span",{children:n})]})})}o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u;const f=["error","warning","confirmation","info","none"],m=Object.freeze({TODAY:{hour:"2-digit",minute:"2-digit",hour12:!0},DEFAULT:{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}}),j=/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;function x(e,t="string"){switch(t){case"severity":return"string"==typeof e&&f.includes(e);case"timestamp":return"string"==typeof e&&j.test(e);default:return"string"==typeof e&&!o.StringUtils.isEmptyOrUndefined(e)}}function y(e){const t=function(e){const t=r.getLocale(),{DateTimeFormat:n}=Intl;return new n(t,e?m.TODAY:m.DEFAULT)}(function(e){const t=new Date,n=new Date(e);return t.getUTCFullYear()===n.getUTCFullYear()&&t.getUTCMonth()===n.getUTCMonth()&&t.getUTCDate()===n.getUTCDate()}(e));return t.format(new Date(e))}function v(e){const{detail:n}=e.data;return x(n)?t.jsx(s.Fragment,{children:n}):null}function b({item:e,renderer:n}){const s=null!=n,r=(n??v)(e);return null==r?null:t.jsx("div",{class:"oj-messagebanner-detail",...s?{"data-oj-message-custom-detail":""}:{},children:r})}function k({children:e}){return t.jsx("div",{role:"presentation",class:"oj-messagebanner-header",children:e})}const C=({children:e})=>t.jsx("svg",{viewBox:"0 0 24 24",height:"1em",width:"1em",style:{fontSize:"1em",color:"currentColor"},children:e}),E={confirmation:()=>t.jsx(C,{children:t.jsx("g",{fill:"none",children:t.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm5.707-13.293L10 16.414l-3.707-3.707 1.414-1.414L10 13.586l6.293-6.293z",fill:"currentcolor"})})}),error:()=>t.jsx(C,{children:t.jsx("g",{fill:"none",children:t.jsx("path",{d:"M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm5.293-3.293 1.414-1.414 8 8-1.414 1.414z",fill:"currentcolor"})})}),info:()=>t.jsx(C,{children:t.jsx("g",{fill:"none",children:t.jsx("path",{d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-9-4V6h-2v2zm0 10v-8h-2v8z",fill:"currentcolor"})})}),warning:()=>t.jsx(C,{children:t.jsx("g",{fill:"none",children:t.jsx("path",{d:"M2 22 12 2l10 20zm9-11v4h2v-4zm0 6v2h2v-2z",fill:"currentcolor"})})})};function M({severity:e,translations:n}){const s=E[e];return t.jsx("div",{class:"oj-messagebanner-start-icon-container",role:"presentation",children:t.jsx("div",{class:"oj-flex oj-sm-align-items-center",style:{height:"100%"},children:t.jsx("span",{class:"oj-messagebanner-start-icon",role:"img",title:n?.[e],children:t.jsx(s,{})})})})}function _({text:e}){return t.jsx("div",{role:"heading","aria-level":2,class:"oj-messagebanner-summary",children:e})}function S({value:e}){const n=y(e);return t.jsx("div",{class:"oj-messagebanner-timestamp",children:n})}const T={error:e=>a.error(`JET oj-message-banner: ${e}`),warn:e=>a.warn(`JET Oj-message-banner: ${e}`),info:e=>a.info(`JET Oj-message-banner: ${e}`),log:e=>a.log(`JET Oj-message-banner: ${e}`)};function w(e,t,n){if(!t||!n)return;const s="function"==typeof t?t(e):t;return null!=s?(s in n||function(e){throw new Error(`JET oj-message-banner - ${e}`)}(`${s} is not a valid template name for the message with key=${e.key}`),n[s]):void 0}function R(e){return x(e,"severity")&&"none"!==e?`oj-messagebanner-${e}`:""}function P(e){return e.filter(Boolean).join(" ")}function D(e){return x(e,"severity")&&"none"!==e}function F({detailRenderer:e,index:s=-1,item:r,onClose:o,messageRef:a=(()=>{}),variant:l="section",translations:c}){const{closeAffordance:u="on",severity:d="error",sound:g,summary:p,timestamp:f}=r.data,m=n.useCallback(()=>{o?.(r)},[r,o]),j=n.useCallback(e=>{"Escape"===e.key&&"on"===u&&o?.(r)},[u,r,o]);n.useEffect(()=>{x(g)&&async function(e){if("none"!==e)if("default"!==e)try{await i.SoundUtils.playAudioFromURL(e)}catch(t){T.warn(`Failed to play the audio from the url ${e}. ${t}.`)}else try{i.SoundUtils.playDefaultNotificationSound()}catch(e){T.warn(`Failed to play the default sound. ${e}.`)}}(g)},[]);const y=P(["oj-messagebanner-item",R(d),"section"===l&&"oj-messagebanner-section"]);return t.jsx("div",{ref:a,class:y,role:"alert","aria-atomic":"true","data-oj-key":`${typeof r.key}-${r.key}`,tabIndex:0,onKeyUp:j,children:t.jsxs("div",{class:"oj-messagebanner-content",children:[D(d)?t.jsx(M,{severity:d,translations:c}):null,t.jsxs("div",{class:"oj-flex oj-sm-flex-direction-column oj-sm-flex-1 oj-messagebanner-content-gap",children:[t.jsxs(k,{children:[t.jsx(_,{text:p}),x(f,"timestamp")&&t.jsx(S,{value:f})]}),t.jsx(b,{item:{...r,index:s},renderer:e})]}),"on"===u&&t.jsx(h,{title:c?.close,onAction:m})]})})}function B({atomic:e="false",children:s="",timeout:r=100,type:o="polite"}){const a=function(e,t){const[s,r]=n.useState(""),o=n.useCallback(()=>r(e),[e]),a=n.useCallback(()=>setTimeout(function(){o()},t),[o,t]);return n.useEffect(()=>{const e=a();return()=>clearTimeout(e)},[a]),s}(s,r);return t.jsx("span",{"aria-live":o,"aria-atomic":e,class:"oj-helper-hidden-accessible",children:a})}class O extends s.Component{constructor(e){let t;super(e),t=e.in?"entering":null,this._appearStatus=t,this.state={status:"exited"},this._nextCallback=null}componentDidMount(){this._updateStatus(this._appearStatus)}componentDidUpdate(e){let t=null;if(e!==this.props){const{status:e}=this.state;this.props.in?"entering"!==e&&"entered"!==e&&(t="entering"):"entering"!==e&&"entered"!==e||(t="exiting")}this._updateStatus(t)}componentWillUnmount(){this._cancelNextCallback()}render(e){return e?.children}_setNextCallback(e){let t=!0;return this._nextCallback=(...n)=>{t&&(t=!1,this._nextCallback=null,e(...n))},this._nextCallback.cancel=()=>{t=!1},this._nextCallback}_cancelNextCallback(){this._nextCallback?.cancel?.(),this._nextCallback=null}_updateStatus(e){null!=e&&(this._cancelNextCallback(),"entering"===e?this._performEnter(this.base):this._performExit(this.base))}_performEnter(e){this.props.onEnter?.(e,this.props.metadata),this.setState({status:"entering"},()=>{this.props.onEntering?.(e,this._setNextCallback(()=>{this.setState({status:"entered"},()=>{this.props.onEntered?.(e,this.props.metadata)})}),this.props.metadata)})}_performExit(e){this.props.onExit?.(e,this.props.metadata),this.setState({status:"exiting"},()=>{this.props.onExiting?.(e,this._setNextCallback(()=>{this.setState({status:"exited"},()=>{this.props.onExited?.(e,this.props.metadata)})}),this.props.metadata)})}}const z=s.createContext({});const U={enter:[{effect:"expand",duration:"0.25s",direction:"height"}],exit:[{effect:"collapse",duration:"0.25s",direction:"height"}]};function $({onEntering:e,onExiting:s,...r}){n.useRef();const o=n.useRef(),{addBusyState:a}=n.useContext(z),i=n.useCallback(async(t,n,s)=>{e?.(t,void 0,s);const r=a?.("messages animating");await l.startAnimation(t,"enter",U.enter),r(),n()},[a,e]),c=n.useCallback(async(e,t,n)=>{s?.(e,void 0,n);const r=a?.("messages animating");await l.startAnimation(e,"exit",U.exit),r(),t()},[a,s]);return n.useLayoutEffect(()=>()=>o.current?.(),[]),t.jsx("div",{children:t.jsx(O,{...r,onEntering:i,onExiting:c})})}class L{static getChildMapping(e,t=new Map,n=(()=>{})){const r=Symbol();let o={};0!==t.size&&(o=L._getMappedDeletions(e,t,r));const a=e.reduce((e,r)=>{if(o[r.key]){const n=o[r.key];for(const r of n){const n=t.get(r);e.set(r,s.cloneElement(n,{in:!1}))}const a=t.get(r.key);e.set(r.key,s.cloneElement(r,{onExited:a.props.onExited,in:a.props.in}))}else{const t=s.cloneElement(r,{onExited:n.bind(null,r),in:!0});e.set(r.key,t)}return e},new Map);for(const e of o[r]||[]){const n=t.get(e);a.set(e,s.cloneElement(n,{in:!1}))}return a}static _getMappedDeletions(e,t,n){const s=new Set(e.map(e=>e.key));return[...t.keys()].reduce((e,t)=>{if(s.has(t))e[t]=e[n],delete e[n];else{const s=e[n]?[...e[n],t]:[t];e[n]=s}return e},{})}}class A extends s.Component{static getDerivedStateFromProps(e,t){const{childMapping:n,handleExited:s}=t;return{childMapping:L.getChildMapping(e.children,n,s)}}constructor(e){super(e),this._handleExited=(e,t,n)=>{const{children:s}=this.props;L.getChildMapping(s).has(e.key)||(e.props.onExited?.(t,n),this._mounted&&this.setState(t=>{const n=new Map(t.childMapping);return n.delete(e.key),{childMapping:n}}))},this.state={childMapping:void 0,handleExited:this._handleExited},this._mounted=!1}componentDidMount(){this._mounted=!0}componentWillUnmount(){this._mounted=!1}render(){const e=this.props.elementType,{childMapping:n}=this.state,s=[...n.values()];return t.jsx(e,{children:s})}}function N({data:e,children:r,onMessageWillRemove:o}){const a=n.useCallback(async(e,t)=>{t&&o?.(t.key,t.index,e)},[o]);return t.jsx(A,{elementType:s.Fragment,children:e.map((e,n)=>t.jsx($,{metadata:{index:n,key:e.key},onExited:a,children:r?.({index:n,item:e})},e.key))})}A.defaultProps={elementType:"div"};const I=new Map,K=[],V=new Map;let W,J,Y=!1;function H(e){0===I.size||"F6"!==e.key||e.defaultPrevented||function(e){for(let t=function(e,t,n=-1){const s=e.indexOf(t);return-1!==s?s:n}(K,J,K.length)-1;t>-1;t--){const n=K[t],{ref:s}=I.get(n)??{};if(s?.current?.focus?.()){if(e.preventDefault(),J){const{callbacks:e}=I.get(J)??{};e?.onFocusLeave?.()}return!0}}return!1}(e)||J&&X(J,e)}function Z(e){W=e.target}function q(e,t){if(!I.has(e)||t.defaultPrevented)return;J=e;const{callbacks:n}=I.get(e);W&&!function(e){for(const{ref:t}of I.values())if(t.current?.contains(e))return!0;return!1}(W)&&(V.set(e,W),n?.onFocus?.())}function G(e,t){I.set(e,t),K.push(e)}function Q(e){I.has(e)&&(I.delete(e),K.splice(K.indexOf(e),1))}function X(e,t){const n=function(e){for(let t=K.indexOf(e);t<K.length;t++)if(V.has(K[t]))return V.get(K[t]);return null}(e),{callbacks:s}=I.get(e)??{};return!(!n||!document.body.contains(n))&&(n.focus(),s?.onFocusLeave?.(),V.clear(),t?.preventDefault(),!0)}const ee={prioritize:function(e){if(!I.has(e))return;const t=I.get(e);Q(e),G(e,t)},register:function(e,t,n={handleEscapeKey:!0}){Y||(document.documentElement.addEventListener("keydown",H,!0),document.documentElement.addEventListener("blur",Z,!0),Y=!0),G(e,t);const s={onfocusin:t=>q(e,t),onfocusout:t=>function(e,t){I.has(e)&&!t.defaultPrevented&&(J=void 0)}(e,t)};return n.handleEscapeKey&&(s.onKeyUp=t=>function(e,t){I.has(e)&&!t.defaultPrevented&&"keyup"===t.type&&["Escape"].includes(t.key)&&X(e,t)}(e,t)),s},togglePreviousFocus:X,unregister:function(e){Q(e),function(e){V.delete(e)}(e),Y&&0===I.size&&(document.documentElement.removeEventListener("keydown",H,!0),document.documentElement.removeEventListener("blur",Z,!0),Y=!1)}};function te({detailRendererKey:e,data:s,onClose:r,renderers:o,translations:a,type:i="section"}){const l=n.useRef(new Map),c=n.useRef(null),u=n.useRef(null),[d,g]=n.useState(),[p,h]=n.useState(s.length>0),f=n.useRef(s.length),m=n.useRef(0);f.current=s.length;const j=n.useCallback(e=>t=>l.current.set(e,t),[]);n.useImperativeHandle(u,()=>({focus:()=>{const e=!!c.current&&(c.current.checkVisibility?c.current.checkVisibility():null!=c.current.offsetParent);if(s.length&&e){const e=s[0].key;return l.current.get(e)?.focus(),!0}return!1},contains:e=>!(!s.length||!e)&&(c.current?.contains(e)??!1)}),[s]);const{controller:x,handlers:y}=function(e,t,s){const r=n.useRef(Symbol()),o=n.useRef(ee),[a,i]=n.useState({}),l=n.useMemo(()=>({prioritize:()=>o.current.prioritize(r.current),restorePriorFocus:()=>o.current.togglePreviousFocus(r.current)}),[]);return n.useEffect(()=>{const n=o.current,a=r.current;return i(n.register(a,{ref:e,callbacks:t},s)),()=>n.unregister(a)},[]),{handlers:a,controller:l}}(u,{onFocus:n.useCallback(()=>{g(a?.navigationFromMessagesRegion)},[g,a])}),v=n.useCallback(e=>{r?.(e)},[r]),b=n.useCallback((e,t,n)=>{const r=n?.contains(document.activeElement);if(0===f.current)return h(!1),void(r&&x.restorePriorFocus());const o=t+1<s.length?t+1:t-1;if(o>-1&&r){const e=s[o].key;l.current.get(e)?.focus()}},[x,s]);if(n.useEffect(()=>{s.length?(h(!0),s.length>m.current&&g(a?.navigationToMessagesRegion),x.prioritize()):g(""),m.current=s.length},[x,s,a]),!p&&0===s.length)return null;const k=P(["oj-flex","oj-sm-flex-direction-column","section"===i&&"oj-messagebanner-container-gap"]);return t.jsx("div",{ref:c,class:"oj-messagebanner",tabIndex:-1,...y,children:t.jsxs("div",{class:k,children:[t.jsx(N,{data:s,onMessageWillRemove:b,children:({index:n,item:s})=>t.jsx(F,{messageRef:j(s.key),item:s,detailRenderer:w(s,e,o),index:n,variant:i,onClose:v,translations:a},s.key)}),t.jsx(B,{children:d})]})})}var ne=function(e,t,n,s){var r,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};e.MessageBanner=class extends s.Component{static getDerivedStateFromProps(e,t){const{data:n}=e,{dataProviderCount:s,previousDataProvider:r}=t;return n!==r?{dataProviderCount:s+1,previousDataProvider:n}:null}constructor(e){super(e),this._addBusyState=e=>u.getContext(this._rootRef.current).getBusyContext().addBusyState({description:e}),this._handleCloseMessage=e=>{this.props.onOjClose?.(e)},this._rootRef=s.createRef(),this.state={dataProviderCount:0,previousDataProvider:e.data},this.WrapperMessagesContainer=d.withDataProvider(te,"data")}render(e){const{data:n,detailTemplateValue:s,messageTemplates:r,type:o}=e,{dataProviderCount:a}=this.state,i={addBusyState:this._addBusyState};return t.jsx(g.Root,{ref:this._rootRef,children:t.jsx(z.Provider,{value:i,children:t.jsx(this.WrapperMessagesContainer,{addBusyState:this._addBusyState,data:n,type:o,detailRendererKey:s,renderers:r,onClose:this._handleCloseMessage,translations:{close:c.getTranslatedString("oj-ojMessageBanner.close"),navigationFromMessagesRegion:c.getTranslatedString("oj-ojMessageBanner.navigationFromMessagesRegion"),navigationToMessagesRegion:c.getTranslatedString("oj-ojMessageBanner.navigationToMessagesRegion"),error:c.getTranslatedString("oj-ojMessageBanner.error"),warning:c.getTranslatedString("oj-ojMessageBanner.warning"),info:c.getTranslatedString("oj-ojMessageBanner.info"),confirmation:c.getTranslatedString("oj-ojMessageBanner.confirmation")}},`dataProvider${a}`)})})}},e.MessageBanner.defaultProps={type:"section"},e.MessageBanner._metadata={properties:{data:{type:"object"},type:{type:"string",enumValues:["page","section"]},detailTemplateValue:{type:"string|function"}},extension:{_DYNAMIC_SLOT:{prop:"messageTemplates",isTemplate:1}},events:{ojClose:{}}},e.MessageBanner=ne([g.customElement("oj-message-banner")],e.MessageBanner),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojmessagebanner.js.map