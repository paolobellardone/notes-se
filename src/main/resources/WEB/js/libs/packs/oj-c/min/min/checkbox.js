define("oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText",["require","exports","preact/hooks"],(function(require,e,t){"use strict";function a(e,t,a,s,r,n){const o="compact"!==n?a?.definition:void 0;return e?.instruction||("none"===r?.validatorHint?void 0:t)||o||("none"===r?.converterHint?void 0:s)}function s(e){if(!e.length)return;return e.map((e=>"function"==typeof e.getHint?e.getHint():void 0)).filter(Boolean).join("\n")}Object.defineProperty(e,"__esModule",{value:!0}),e.useAssistiveText=void 0,e.useAssistiveText=function({addBusyState:e,converter:r,displayOptions:n,help:o,helpHints:l,userAssistanceDensity:i,validators:u}){const[c,d]=(0,t.useState)(u&&u.length?s(u):void 0),f=(0,t.useRef)();(0,t.useEffect)((()=>{if(!u||!u.length)return void d(void 0);d(s(u));const t=u.map((e=>e.hint)).filter(Boolean),a=f.current=Symbol(),r=e?.("resolving the async validator hints");Promise.allSettled(t).then((e=>{d((t=>{const s=e.map((e=>"fulfilled"===e.status?e.value:void 0)).filter(Boolean);return a===f.current&&s.length?[t,...s].join("\n"):t})),r?.()}))}),[u]);const v="compact"!==i?l?.sourceText:l?.definition||l?.sourceText;return{assistiveText:a(o,c,l,r?.getHint?.()??void 0,n,i),helpSourceLink:l?.source,helpSourceText:v}}})),define("oj-c/editable-value/utils/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isShallowEqual=e.normalizeValue=e.treatNull=e.createMessageFromError=void 0,e.createMessageFromError=function(e){return"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message}},e.treatNull=function(e,t){return null===e?t:e},e.normalizeValue=function(e){return"string"==typeof e&&""===e?null:e};e.isShallowEqual=(e,t)=>e===t||e.length===t.length&&e.every(((e,a)=>e===t[a]))})),define("oj-c/editable-value/UNSAFE_useComponentMessaging/useComponentMessaging",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../utils/utils"],(function(require,e,t,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useComponentMessaging=void 0,e.useComponentMessaging=function({messagesCustom:e=[],onMessagesCustomChanged:r}){const[n,o]=(0,t.useUncontrolledState)(e,r),[l,i]=(0,a.useState)([]),[u,c]=(0,a.useState)([]),d=(0,a.useRef)(e),f=(0,a.useCallback)(((...e)=>{i((t=>[...t,...e]))}),[]),v=(0,a.useCallback)((e=>{i((t=>[...t,e]))}),[]),p=(0,a.useCallback)((()=>{i([]),c([])}),[]),g=(0,a.useCallback)((()=>{c([])}),[]),h=(0,a.useCallback)((()=>{i([]),c([]),o([])}),[]),y=(0,a.useCallback)((()=>n.some((e=>"error"===e.severity))),[n]),V=(0,a.useCallback)((()=>0===l.length&&0===u.length&&!1===y()),[l,u,y]),m=(0,a.useCallback)((()=>0!==u.length),[u]),b=(0,a.useCallback)((()=>{i((e=>[...e,...u])),c([])}),[u]);return(0,a.useEffect)((()=>{d.current!==e&&(d.current=e,(0,s.isShallowEqual)(n,e)||o(e))}),[n,e]),(0,a.useMemo)((()=>({componentMessages:l,deferredComponentMessages:u,messagesCustom:n,visibleMessages:[...n,...l],addComponentMessage:f,addDeferredComponentMessage:v,clearAllComponentMessages:p,clearAllMessages:h,clearDeferredComponentMessages:g,hasCustomErrorMessages:y,hasHiddenMessages:m,hasNoErrorMessages:V,setComponentMessages:i,setDeferredComponentMessages:c,showHiddenMessages:b})),[l,u,n,y,m,V,b])}})),define("oj-c/editable-value/UNSAFE_useConverter/useConverter",["require","exports","ojs/ojconverter-nativenumber","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle","../utils/utils"],(function(require,e,t,a,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useConverter=e.ConverterErrorSymbol=void 0,e.ConverterErrorSymbol=Symbol("ConverterError"),e.useConverter=function({componentMessagingState:n,validationState:o,converter:l}){const i=(0,s.useTranslationBundle)("@oracle/oraclejet-preact").inputNumber_converterParseError(),u=(0,a.useCallback)((a=>{if(!l||(""===(s=a)||null===s))return a;var s;try{return l.parse(a)}catch(a){const s=a?.cause===t.USER_INPUT_ERROR?{severity:"error",detail:i}:(0,r.createMessageFromError)(a);return n.setComponentMessages([s]),o.setValid("invalidShown"),e.ConverterErrorSymbol}}),[l,n,o]),c=(0,a.useCallback)(((e,t=!1)=>{if(!l||function(e){return null===e}(e))return(0,r.treatNull)(e,"")??"";try{return l.format(e)}catch(a){return t||(n.setComponentMessages([(0,r.createMessageFromError)(a)]),o.setValid("invalidShown")),(0,r.treatNull)(e,"")}}),[l,n,o]);return(0,a.useMemo)((()=>({format:c,parse:u})),[c,u])}})),define("oj-c/editable-value/UNSAFE_useConverterLifecycle/useConverterLifecycle",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useConverterLifecycle=void 0,e.useConverterLifecycle=function({converter:e,validationState:a,refreshDisplayValue:s,runFullValidationAndUpdateValue:r}){const n=(0,t.useRef)(e);(0,t.useEffect)((()=>{if(n.current===e)return;n.current=e;const{valid:t}=a;if("invalidShown"===t)r();else s()}),[e,a,s,r])}})),define("oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators",["require","exports","ojs/ojvalidator-required","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,t,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDeferredValidators=void 0,e.useDeferredValidators=function({labelHint:e,required:r,requiredMessageDetail:n}){const o=(0,s.useTranslationBundle)("@oracle/oraclejet-preact"),l=n||o.formControl_requiredMessageDetail(),i=(0,a.useMemo)((()=>r?new t({label:e,messageDetail:l}):null),[r]);return(0,a.useMemo)((()=>[i].filter(Boolean)),[i])}})),define("oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useStaleIdentity=void 0,e.useStaleIdentity=function(){const e=(0,t.useRef)(new Map);return{setStaleIdentity:(0,t.useCallback)((t=>{const a=Symbol();return e.current.set(t,a),{isStale:()=>a!==e.current.get(t)}}),[])}}})),define("oj-c/editable-value/UNSAFE_useValidators/useValidators",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../UNSAFE_useStaleIdentity/useStaleIdentity","../utils/utils"],(function(require,e,t,a,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValidators=e.ValidationResult=void 0,e.ValidationResult={VALID:"VALID",INVALID:"INVALID",STALE:"STALE"},e.useValidators=function({componentMessagingState:n,defaultValidState:o,deferredValidators:l=[],validators:i=[],addBusyState:u,onValidChanged:c}){const[d,f]=(0,t.useUncontrolledState)(o,c),{setStaleIdentity:v}=(0,s.useStaleIdentity)();(0,a.useLayoutEffect)((()=>{void 0!==o&&c?.(o)}),[]);const{addComponentMessage:p,clearAllComponentMessages:g,clearAllMessages:h,hasCustomErrorMessages:y,setComponentMessages:V}=n,m=(0,a.useCallback)((async(e,t={})=>{const{doNotClearMessagesCustom:a=!1}=t,s=y();if(f("pending"),a?g():h(),0===i.length&&0===l.length)return f(s&&a?"invalidShown":"valid"),!0;function n(e,t){try{const a=e.validate(t);if(a instanceof Promise)return a.then((()=>{}),(e=>(0,r.createMessageFromError)(e)))}catch(e){return(0,r.createMessageFromError)(e)}}const o=[],c=[],d=b(e);if(void 0!==d&&o.push(...d),null!=e)for(const t of i){const a=n(t,e);void 0!==a&&(a instanceof Promise?c.push(a):o.push(a))}if(!o.length&&!c.length)return f(s&&a?"invalidShown":"valid"),!0;const m=0!==o.length;if(m&&(V(o),f("invalidShown")),!c.length)return!m;const C=u?.("running validation"),{isStale:S}=v("useValidators-validate");let M=!1;for(const e of c){const t=await e;t&&!S()&&(p(t),f("invalidShown"),M=!0)}return m||M||S()||f(s&&a?"invalidShown":"valid"),C?.(),!m&&!M}),[p,g,h,l,i]),b=(0,a.useCallback)((e=>{const t=[];for(const a of l)try{a.validate(e)}catch(e){t.push((0,r.createMessageFromError)(e))}if(t.length)return t}),[l]),C=(0,a.useCallback)((async(t,a={})=>{const{isStale:s}=v("useValidationLifeCycle-validateValueOnInternalChange"),r=u?.("running validateValueOnInternalChange"),n=await m(t,a);return r?.(),s()?e.ValidationResult.STALE:n?e.ValidationResult.VALID:e.ValidationResult.INVALID}),[u,m]),S=(0,a.useCallback)((t=>{const{clearAllMessages:a,setDeferredComponentMessages:s}=n;a();const r=b(t);return r?(s(r),f("invalidHidden")):f("valid"),e.ValidationResult.VALID}),[n,b]);return(0,a.useMemo)((()=>({valid:d,setValid:f,deferredValidate:b,fullValidate:m,validateValueOnExternalChange:S,validateValueOnInternalChange:C})),[d,b,m,S,C])}})),define("oj-c/editable-value/UNSAFE_useValidationLifecycle/useValidationLifecycle",["require","exports","preact/hooks","../UNSAFE_useConverter/useConverter","../UNSAFE_useValidators/useValidators","../utils/utils"],(function(require,e,t,a,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValidationLifecycle=void 0,e.useValidationLifecycle=function({componentMessagingState:e,disabled:n,deferredValidators:o,readonly:l,validationState:i,validators:u,getValueForValidation:c,setValueAfterValidation:d}){const f=(0,t.useRef)(o),v=(0,t.useRef)(u),p=(0,t.useRef)(e.messagesCustom),g=(0,t.useRef)(l),h=(0,t.useRef)(n),y=(0,t.useRef)(!0),V=(0,t.useCallback)((async()=>{if(l||n)return;const{valid:e,validateValueOnInternalChange:t}=i,r=c(e);if(r===a.ConverterErrorSymbol)return;await t(r,{doNotClearMessagesCustom:!0})===s.ValidationResult.VALID&&d(r)}),[n,l,i,c,d]);return(0,t.useEffect)((()=>{if(!y.current)return;if(y.current=!1,l||n)return;const t=c("valid");if(t===a.ConverterErrorSymbol)return;const{deferredValidate:s,setValid:r}=i,{hasCustomErrorMessages:o,setDeferredComponentMessages:u}=e,d=s(t);d&&(u(d),r("invalidHidden")),o()&&r("invalidShown")}),[n,l]),(0,t.useEffect)((()=>{const t=f.current!==o&&0===o.length;if(f.current===o&&g.current===l&&h.current===n)return;g.current=l,h.current=n,f.current=o;if(!(t||!l&&!n))return;const{valid:s,deferredValidate:r,setValid:u}=i,{clearDeferredComponentMessages:d,setDeferredComponentMessages:v}=e;switch(s){case"valid":const e=c(s);if(e!==a.ConverterErrorSymbol){const t=r(e);t&&(v(t),u("invalidHidden"))}break;case"invalidHidden":0===o.length&&(u("valid"),d());break;case"invalidShown":V()}}),[n,l,o,e,i,c,V]),(0,t.useEffect)((()=>{if(v.current!==u&&(v.current=u,!l&&!n&&"invalidShown"===i.valid))V()}),[n,l,u,i]),(0,t.useEffect)((()=>{if((0,r.isShallowEqual)(p.current,e.messagesCustom))return;const{messagesCustom:t,hasCustomErrorMessages:a,hasHiddenMessages:s,hasNoErrorMessages:n}=e,{valid:o,setValid:l}=i;if(p.current=t,a())l("invalidShown");else{if("pending"===o)return;n()?l("valid"):s()&&l("invalidHidden")}}),[e,i]),{runFullValidationAndUpdateValue:V}}})),define("oj-c/editable-value/UNSAFE_useValue/useValue",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../utils/utils"],(function(require,e,t,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValue=void 0,e.useValue=function({value:e,format:r,parse:n,onRawValueChanged:o,onTransientValueChanged:l,onValueChanged:i}){const[u,c]=(0,t.useUncontrolledState)(r(e,!0),o),[d,f]=(0,t.useUncontrolledState)(e,i);(0,a.useEffect)((()=>{void 0!==u&&o?.(u)}),[]);const[v,p]=(0,t.useUncontrolledState)(e,l);return(0,a.useEffect)((()=>{void 0!==e&&l?.(e)}),[]),{displayValue:u,transientValue:v,value:d,getValueForValidation:(0,a.useCallback)((e=>"invalidShown"!==e?d:n((0,s.normalizeValue)(u))),[u,d,n]),setValueAfterValidation:(0,a.useCallback)((e=>{f(e),c(r(e))}),[r]),setDisplayValue:c,setTransientValue:p,setValue:f,refreshDisplayValue:(0,a.useCallback)((()=>{c(r(d))}),[d,r])}}})),define("oj-c/editable-value/UNSAFE_useValueLifecycle/useValueLifecycle",["require","exports","preact/hooks","../UNSAFE_useValidators/useValidators"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValueLifecycle=void 0,e.useValueLifecycle=function({value:e,valueState:s,format:r,validateValueOnExternalChange:n}){const o=(0,t.useRef)(e);(0,t.useEffect)((()=>{const{value:e,setDisplayValue:t}=s;t(r(e))}),[]),(0,t.useEffect)((()=>{if(o.current!==e&&(o.current=e,void 0!==e&&e!==s.value)){const{setDisplayValue:t,setValue:o}=s;n(e)===a.ValidationResult.VALID&&(o(e),t(r(e)))}}),[e,s,r])}})),define("oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue",["require","exports","preact/hooks","../UNSAFE_useComponentMessaging/useComponentMessaging","../UNSAFE_useConverter/useConverter","../UNSAFE_useConverterLifecycle/useConverterLifecycle","../UNSAFE_useDeferredValidators/useDeferredValidators","../UNSAFE_useValidationLifecycle/useValidationLifecycle","../UNSAFE_useValidators/useValidators","../UNSAFE_useValue/useValue","../UNSAFE_useValueLifecycle/useValueLifecycle","../utils/utils"],(function(require,e,t,a,s,r,n,o,l,i,u,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=void 0,e.useEditableValue=function({ariaDescribedBy:e,converter:d,disabled:f,displayOptions:v,implicitComponentValidator:p,labelHint:g,messagesCustom:h,readonly:y,required:V,requiredMessageDetail:m,shouldNormalizeValueOnCommit:b=!0,validators:C,value:S,addBusyState:M,onMessagesCustomChanged:E,onRawValueChanged:A,onValidChanged:_,onValueChanged:k,onTransientValueChanged:x,wrapValueState:j}){const R=(0,a.useComponentMessaging)({messagesCustom:h,onMessagesCustomChanged:E}),{clearAllMessages:D,visibleMessages:F}=R,N=(0,n.useDeferredValidators)({labelHint:g,required:V,requiredMessageDetail:m}),U=p?C?[p,...C]:[p]:C,w=(0,l.useValidators)({componentMessagingState:R,defaultValidState:"valid",deferredValidators:N,validators:U,addBusyState:M,onValidChanged:_}),{validateValueOnExternalChange:L,validateValueOnInternalChange:O}=w,{format:q,parse:P}=(0,s.useConverter)({componentMessagingState:R,converter:d,validationState:w}),I=(0,i.useValue)({value:S,format:q,parse:P,onRawValueChanged:A,onTransientValueChanged:x,onValueChanged:k}),T=j?j(I):I,{displayValue:B,value:H,getValueForValidation:z,setValueAfterValidation:W,refreshDisplayValue:$,setDisplayValue:G,setTransientValue:K,setValue:Y}=T,{runFullValidationAndUpdateValue:J}=(0,o.useValidationLifecycle)({componentMessagingState:R,validationState:w,deferredValidators:N,validators:C,getValueForValidation:z,setValueAfterValidation:W,readonly:y,disabled:f});(0,r.useConverterLifecycle)({converter:d,validationState:w,refreshDisplayValue:$,runFullValidationAndUpdateValue:J}),(0,u.useValueLifecycle)({value:S,valueState:T,format:q,validateValueOnExternalChange:L});const Q=(0,t.useCallback)((e=>P(b?(0,c.normalizeValue)(e):e)),[b,P]),X=(0,t.useCallback)((async(e,t=!0)=>{const a=await O(e);return a===l.ValidationResult.VALID&&t&&Y(e),a}),[O]),Z=(0,t.useCallback)((async({value:e})=>{const t=Q(e);if(t===s.ConverterErrorSymbol)return;const a=t;await X(a)===l.ValidationResult.VALID&&G(q(a))}),[q,X,Q]),ee=(0,t.useCallback)((({value:e})=>{G(e??"")}),[]),te=(0,t.useCallback)((()=>{D(),L(H),$()}),[H,D,$,L]),ae=(0,t.useCallback)((async()=>{if(y||f)return"valid";const{fullValidate:e}=w,{displayValue:t,value:a,setValueAfterValidation:r}=T,n=Q(t);if(n===s.ConverterErrorSymbol)return"invalid";const o=n,l=M?.("running component method validate"),i=await e(o);return l?.(),i?(o!==a&&r(o),"valid"):"invalid"}),[w,T,M,Q,y,f]),se=(0,t.useCallback)((()=>{const{hasHiddenMessages:e,showHiddenMessages:t}=R,{setValid:a}=w;e()&&(t(),a("invalidShown"))}),[R,w]);return{value:H,setValue:Y,displayValue:B,setDisplayValue:G,setTransientValue:K,methods:{reset:te,validate:ae,showMessages:se},textFieldProps:{messages:"none"!==v?.messages?F:void 0,value:B,"aria-describedby":e,onCommit:Z,onInput:ee},onCommitValue:X,format:q,normalizeAndParseValue:Q}}})),define("oj-c/checkbox/useCheckboxPreact",["require","exports","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle","oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue","oj-c/editable-value/UNSAFE_useValidators/useValidators"],(function(require,e,t,a,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useCheckboxPreact=void 0,e.useCheckboxPreact=function({"aria-describedby":e,disabled:n,displayOptions:o,messagesCustom:l,readonly:i,requiredMessageDetail:u,required:c,userAssistanceDensity:d,value:f,onMessagesCustomChanged:v,onValidChanged:p,onValueChanged:g,validators:h},y){const V=(0,a.useTranslationBundle)("@oracle/oraclejet-preact"),m=u||V.checkbox_requiredMessageDetail(),{methods:b,onCommitValue:C,displayValue:S,setDisplayValue:M,textFieldProps:E}=(0,s.useEditableValue)({ariaDescribedBy:e,disabled:n,displayOptions:o,messagesCustom:l,readonly:i,required:c,requiredMessageDetail:m,value:f,addBusyState:y,onMessagesCustomChanged:v,onValidChanged:p,onValueChanged:g,validators:h}),A=(0,t.useCallback)((async({value:e})=>{const t=await C(e)!==r.ValidationResult.INVALID&&e;M(t)}),[C]);return{methods:b,checkboxProps:{"aria-describedby":E["aria-describedby"],isRequired:c,isReadonly:i,isDisabled:n,messages:E.messages,onCommit:A,userAssistanceDensity:d,value:S}}}}));var __decorate=this&&this.__decorate||function(e,t,a,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(n<3?r(o):n>3?r(t,a,o):r(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o};define("oj-c/checkbox/checkbox",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","preact","preact/hooks","preact/compat","ojs/ojcontext","@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout","ojs/ojvcomponent","ojs/ojvcomponent-binding","@oracle/oraclejet-preact/UNSAFE_Checkbox","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/UNSAFE_Environment","oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText","./useCheckboxPreact","css!oj-c/checkbox/checkbox-styles.css"],(function(require,e,t,a,s,r,n,o,l,i,u,c,d,f,v,p,g){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Checkbox=void 0;const h=(0,n.forwardRef)((({"aria-describedby":e,busyContextRef:a,displayOptions:s,disabled:n,required:o,help:l,helpHints:i,id:u,children:d,value:f,messagesCustom:v,readonly:h,requiredMessageDetail:y,userAssistanceDensity:V,onMessagesCustomChanged:m,onValidChanged:b,onValueChanged:C,validators:S},M)=>{const E=(0,r.useRef)(),A=(0,r.useCallback)((e=>a.current?.addBusyState({description:`oj-c-checkbox id=${u} is ${e}`})),[a,u]),{checkboxProps:_,methods:k}=(0,g.useCheckboxPreact)({"aria-describedby":e,disabled:n,displayOptions:s,messagesCustom:v,readonly:h,requiredMessageDetail:y,required:o,userAssistanceDensity:V,value:f,onMessagesCustomChanged:m,onValidChanged:b,onValueChanged:C,validators:S},A);(0,r.useImperativeHandle)(M,(()=>({blur:()=>E.current?.blur(),focus:()=>E.current?.focus(),...k})),[k]);const x=(0,p.useAssistiveText)({displayOptions:s,help:l,helpHints:i,validators:S,userAssistanceDensity:_.userAssistanceDensity});return(0,t.jsx)(c.Checkbox,{ref:E,...x,..._,children:d})}));h.displayName="FunctionalCheckbox";let y=class extends s.Component{constructor(){super(...arguments),this.busyContextRef=(0,s.createRef)(),this.checkboxRef=(0,s.createRef)(),this.rootRef=(0,s.createRef)()}componentDidMount(){this.busyContextRef.current=o.getContext(this.rootRef.current).getBusyContext()}render(e){const{translations:a}=this.context,s=a?.["@oracle/oraclejet-preact"],r={validate:t=>{if(e.required&&!0!==t)throw new Error(e.requiredMessageDetail||s?.checkbox_requiredMessageDetail())}},n={isFormLayout:void 0!==e.containerReadonly,isReadonly:e.containerReadonly};return(0,t.jsx)(i.Root,{id:e.id,ref:this.rootRef,class:l.layoutSpanStyles.layoutSpanColumn[e.columnSpan||1],children:(0,t.jsx)(d.FormContext.Provider,{value:n,children:(0,t.jsx)(h,{...e,validators:[r],busyContextRef:this.busyContextRef,ref:this.checkboxRef})})})}componentWillUnmount(){this.busyContextRef.current=null}reset(){this.checkboxRef.current?.reset()}showMessages(){this.checkboxRef.current?.showMessages()}validate(){return this.checkboxRef.current?.validate()}blur(){this.checkboxRef.current?.blur()}focus(){this.checkboxRef.current?.focus()}};e.Checkbox=y,y.defaultProps={columnSpan:1,disabled:!1,displayOptions:{messages:"display"},help:{instruction:""},messagesCustom:[],readonly:!1,required:!1,userAssistanceDensity:"reflow",value:!1},y._metadata={slots:{"":{}},properties:{containerReadonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},columnSpan:{type:"number"},disabled:{type:"boolean"},displayOptions:{type:"object",properties:{messages:{type:"string",enumValues:["none","display"]}}},help:{type:"object",properties:{instruction:{type:"string"}}},helpHints:{type:"object",properties:{definition:{type:"string"},source:{type:"string"},sourceText:{type:"string"}}},messagesCustom:{type:"Array<object>",writeback:!0},readonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},required:{type:"boolean"},userAssistanceDensity:{type:"string",enumValues:["compact","reflow","efficient"],binding:{consume:{name:"containerUserAssistanceDensity"}}},requiredMessageDetail:{type:"string"},valid:{type:"string",enumValues:["pending","valid","invalidHidden","invalidShown"],readOnly:!0,writeback:!0},value:{type:"boolean",writeback:!0}},extension:{_WRITEBACK_PROPS:["messagesCustom","valid","value"],_READ_ONLY_PROPS:["valid"],_OBSERVED_GLOBAL_PROPS:["aria-describedby","id"]},methods:{reset:{},showMessages:{},validate:{},blur:{},focus:{}}},y._translationBundleMap={"@oracle/oraclejet-preact":a.default},y._consumedContexts=[f.TabbableModeContext],e.Checkbox=y=__decorate([(0,i.customElement)("oj-c-checkbox")],y),y.contextType=v.EnvironmentContext}));
//# sourceMappingURL=checkbox.js.map